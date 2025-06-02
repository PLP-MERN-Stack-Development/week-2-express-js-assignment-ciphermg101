# README.md

# Week 2: Express.js Product API

## Overview
This project is a RESTful API built using Express.js that allows users to manage a collection of products. It implements standard CRUD operations, middleware for logging and authentication, and error handling.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/ciphermg101/week-2-express-js-assignment-ciphermg101.git
   ```
2. Navigate to the project directory:
   ```
   cd week-2-express-js-assignment-ciphermg101/app/
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on the `.env.example` template and set your environment variables.

## Usage
To start the server, run the following command:
```
npm start
```
The server will run on `http://localhost:3000`.

## API Endpoints

### Products
- **GET /api/products**: Retrieve a list of all products.
- **GET /api/products/:id**: Retrieve a specific product by ID.
- **POST /api/products**: Create a new product. Requires a JSON body with `name`, `description`, `price`, `category`, and `inStock`.
- **PUT /api/products/:id**: Update an existing product by ID. Requires a JSON body with updated fields.
- **DELETE /api/products/:id**: Delete a product by ID.

### Example Requests
- **Get all products**:
  ```
  GET /api/products
  ```

- **Create a new product**:
  ```
  POST /api/products
  Content-Type: application/json

  {
    "name": "New Product",
    "description": "Description of new product",
    "price": 100,
    "category": "category",
    "inStock": true
  }
  ```

## Error Handling
The API includes comprehensive error handling. If an error occurs, the server will respond with an appropriate HTTP status code and a message indicating the error type.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.