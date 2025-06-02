# README.md

# Week 2: Express.js Product API

## Overview
This project is a RESTful API built using Express.js that allows users to manage a collection of products. It implements standard CRUD operations, middleware for logging and authentication, error handling, and advanced features like filtering, pagination, and search.

---

## Table of Contents
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ciphermg101/week-2-express-js-assignment-ciphermg101.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd week-2-express-js-assignment-ciphermg101/app/
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Copy `.env.example` to `.env` and set your API key:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and set `API_KEY` to your desired value.

---

## Running the Server

Start the server with:
```bash
npm start
```
The server will run on `http://localhost:3000` by default (or the port set in your `.env`).

---

## Environment Variables

| Variable | Description           | Example Value      |
|----------|-----------------------|-------------------|
| API_KEY  | API key for auth      | my_secret_key     |
| PORT     | Server port (optional)| 3000              |

---

## API Endpoints

### Authentication

All `/api/products` endpoints require an API key in the request header:
```
x-api-key: your_api_key
```

### Products

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/api/products`         | List all products (supports filtering, pagination, search) |
| GET    | `/api/products/:id`     | Get a specific product by ID       |
| POST   | `/api/products`         | Create a new product               |
| PUT    | `/api/products/:id`     | Update an existing product         |
| DELETE | `/api/products/:id`     | Delete a product                   |
| GET    | `/api/products/stats`   | Get product statistics by category |

#### Query Parameters for GET `/api/products`:
- `category` — Filter by category (e.g. `?category=electronics`)
- `search` — Search by product name (e.g. `?search=laptop`)
- `page` — Page number for pagination (default: 1)
- `limit` — Number of products per page (default: 10)

---

## Examples

### Get All Products
```http
GET /api/products
x-api-key: your_api_key
```
**Response:**
```json
{
  "total": 3,
  "page": 1,
  "limit": 10,
  "products": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
    // ...
  ]
}
```

### Create a Product
```http
POST /api/products
Content-Type: application/json
x-api-key: your_api_key

{
  "name": "Desk Lamp",
  "description": "LED desk lamp",
  "price": 25,
  "category": "office",
  "inStock": true
}
```
**Response:**
```json
{
  "id": "generated-uuid",
  "name": "Desk Lamp",
  "description": "LED desk lamp",
  "price": 25,
  "category": "office",
  "inStock": true
}
```

### Get Product Statistics
```http
GET /api/products/stats
x-api-key: your_api_key
```
**Response:**
```json
{
  "electronics": 2,
  "kitchen": 1,
  "office": 1
}
```

### Error Example (Missing API Key)
```http
GET /api/products
```
**Response:**
```json
{
  "message": "Forbidden: Invalid API key"
}
```

---

## Error Handling

- **400 Bad Request:** Validation errors (e.g., missing or invalid fields)
- **403 Forbidden:** Missing or invalid API key
- **404 Not Found:** Product not found
- **500 Internal Server Error:** Unexpected server errors

All errors return a JSON response with a `message` field describing the error.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## License

This project is licensed under the MIT License.