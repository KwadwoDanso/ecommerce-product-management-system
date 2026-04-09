// main.ts — Entry point for the E-commerce Product Management System.
// 1. Fetches products from the DummyJSON API
// 2. Creates Product instances from the API data
// 3. Displays each product's details, discount, tax, and final price

import { Product } from "./models/Product";
import { fetchProducts, fetchProductById } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function main(): Promise<void> {
    console.log("E-Commerce Product Management System \n");

    try {
        // Fetch all products from the API
        console.log("Fetching products...\n");
        const apiProducts = await fetchProducts();

        // Create Product class instances from the raw API data
        const products: Product[] = apiProducts.map((data) => new Product(data));

        // Loop through each product and display its details
        console.log(`--- Found ${products.length} Products ---\n`);

        for (const product of products) {
            console.log(product.displayDetails());

            // Calculate and display the discount in dollars
            const discount = calculateDiscount(product);
            console.log(`  Discount Amount: -$${discount.toFixed(2)}`);

            // Show the price after discount
            const discountedPrice = product.getPriceWithDiscount();
            console.log(`  Price After Discount: $${discountedPrice.toFixed(2)}`);

            // Calculate and display the tax in dollars
            const tax = calculateTax(product);
            console.log(`  Tax Amount: +$${tax.toFixed(2)}`);

            // Final price = discounted price + tax
            const finalPrice = discountedPrice + tax;
            console.log(`  Final Price: $${finalPrice.toFixed(2)}`);
            console.log("");
        }

        // Fetch a single product by ID to demonstrate that endpoint
        console.log("--- Fetching Single Product (ID: 5) ---\n");
        const singleData = await fetchProductById(5);
        const singleProduct = new Product(singleData);

        console.log(singleProduct.displayDetails());
        const discount = calculateDiscount(singleProduct);
        const discountedPrice = singleProduct.getPriceWithDiscount();
        const tax = calculateTax(singleProduct);
        const finalPrice = discountedPrice + tax;

        console.log(`  Discount: -$${discount.toFixed(2)}`);
        console.log(`  After Discount: $${discountedPrice.toFixed(2)}`);
        console.log(`  Tax: +$${tax.toFixed(2)}`);
        console.log(`  Final Price: $${finalPrice.toFixed(2)}`);
        console.log("");

    } catch (error) {
        // Handle any errors that occurred during the process
        handleError(error);
    }

    
    console.log("Done.");
}

// Run the application
main();