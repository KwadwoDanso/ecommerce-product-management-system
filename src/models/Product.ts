// Product.ts — Base class that represents a product from the DummyJSON API.

export class Product {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discountPercentage: number;
    public rating: number;
    public stock: number;
    public brand: string;
    public category: string;

    constructor(data: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.brand = data.brand || "N/A";
        this.category = data.category;
    }

    // Returns a formatted string with the product's details
    displayDetails(): string {
        return (
            `ID: ${this.id} | ${this.title}\n` +
            `  Brand: ${this.brand} | Category: ${this.category}\n` +
            `  Price: $${this.price.toFixed(2)} | Discount: ${this.discountPercentage}%\n` +
            `  Rating: ${this.rating}/5 | Stock: ${this.stock}`
        );
    }

    // Returns the price after the discount is applied
    getPriceWithDiscount(): number {
        const discountAmount = this.price * (this.discountPercentage / 100);
        return this.price - discountAmount;
    }
}