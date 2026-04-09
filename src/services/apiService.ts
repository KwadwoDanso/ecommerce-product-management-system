// apiService.ts — Fetches product data from the DummyJSON Products API.
// Uses async/await with try/catch for error handling.

import { ApiError } from "../utils/errorHandler";

// The base URL for the DummyJSON products endpoint
const BASE_URL = "https://dummyjson.com/products";

// Shape of a single product from the API
export interface ApiProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
}

// Shape of the full API response
interface ApiResponse {
    products: ApiProduct[];
    total: number;
    skip: number;
    limit: number;
}

// Fetch a list of products from the API
export async function fetchProducts(): Promise<ApiProduct[]> {
    try {
        const response = await fetch(`${BASE_URL}?limit=10`);

        if (!response.ok) {
            throw new ApiError(`API returned status ${response.status}`, response.status);
        }

        const data = (await response.json()) as ApiResponse;
        return data.products;
    } catch (error) {
        // If it's already our custom error, just pass it along
        if (error instanceof ApiError) {
            throw error;
        }
        // Otherwise wrap it in an ApiError
        throw new ApiError(`Failed to fetch products: ${(error as Error).message}`);
    }
}

// Fetch a single product by its ID
export async function fetchProductById(id: number): Promise<ApiProduct> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new ApiError(`API returned status ${response.status} for product ${id}`, response.status);
        }

        const data = (await response.json()) as ApiProduct;
        return data;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(`Failed to fetch product ${id}: ${(error as Error).message}`);
    }
}