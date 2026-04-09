# ecommerce-product-manager
an E-commerce Product Management System using TypeScript.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
- Develop Product Class
- Implement Utilities
- Handle Asynchronous Operations
- Error Handling Utility
- Create the Main Application

## Reflections/Critical Thinking

- How you implemented TypeScript features and OOP principles.
        -- I built this project around a single Product class whose properties map directly to the DummyJSON API response. Type annotations on every property, parameter, and return value let TypeScript catch errors at compile time instead of runtime. Utility modules for discount and tax calculation each accept a Product instance, keeping responsibilities separated and the code easy to extend.

- The challenges you encountered and how you overcame them.
        -- I had to study the API response shape carefully — products are nested inside an outer object.

- How you handled asynchronous operations and error management.
        -- For async operations I used async/await with try/catch in every fetch call inside apiService.ts. If the response status is not ok, I throw a custom ApiError with the status code. If the network itself fails, the catch block wraps it in an ApiError too. 

### Links

- Solution URL:(https://github.com/KwadwoDanso/ecommerce-product-management-system.git)


## My process
- Created Product.ts class with properties matching the DummyJSON API fields
- Built discountCalculator.ts to return the dollar discount amount
- Built taxCalculator.ts with 4.75% default rate and 3% for groceries
- Built errorHandler.ts with a custom ApiError class and handleError function
- Built apiService.ts with async/await fetch calls to the DummyJSON API
- Built main.ts to fetch products, create instances, and display details with discount, tax, and final price

### Built with

-Javascript
-Typescript




### What I learned
- TypeScript type annotations, interfaces, and object-oriented programming concepts. 


## Author
-Author is Kwadwo 

## Acknowledgments


- MDN Web Docs
- w3schools
- Per Scholas JS lessons
- https://www.typescriptlang.org/docs/
- https://dummyjson.com/docs/products

