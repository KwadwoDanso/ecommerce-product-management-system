// errorHandler.ts — Custom error class and a function to handle errors.

// Custom error class for API-related failures
export class ApiError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 0) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
    }
}

// Logs an error message depending on the type of error
export function handleError(error: unknown): void {
    if (error instanceof ApiError) {
        console.log(`[API Error] ${error.message} (status: ${error.statusCode})`);
    } else if (error instanceof Error) {
        console.log(`[Error] ${error.message}`);
    } else {
        console.log(`[Unknown Error] ${String(error)}`);
    }
}