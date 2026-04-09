// taxCalculator.ts — Returns the dollar amount of tax on a product.
// Default tax rate: 4.75%. Groceries: 3%.
// Tax is calculated on the price after discount.

import { Product } from "../models/Product";

const DEFAULT_TAX_RATE = 0.0475;
const GROCERY_TAX_RATE = 0.03;

export function calculateTax(product: Product): number {
    const taxRate = product.category === "groceries" ? GROCERY_TAX_RATE : DEFAULT_TAX_RATE;
    const discountedPrice = product.getPriceWithDiscount();
    return discountedPrice * taxRate;
}