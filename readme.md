# API Documentation

API ini menyediakan berbagai endpoint untuk mengelola pengguna dan ToDo. Berikut adalah daftar endpoint beserta cara penggunaannya.

Adapun linkdeploy untuk project ini dapat diakses berikut : https://web-service-restful-api-production.up.railway.app/ 

## Tabel Endpoint

| No. | Endpoint                | Method | Input (Body)                                                                                                               | Headers                                         | Response                                                                                                                                              |
|-----|-------------------------|--------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | `/users/register`        | POST   | ```json { "name": "Alice Smith", "email": "alice@example.com", "password": "password123" } ```                             | None                                           | **201 Created** <br> ```json { "id": 1, "name": "Alice Smith", "email": "alice@example.com", "createdAt": "...", "updatedAt": "..." } ```              |
| 2   | `/users/login`           | POST   | ```json { "email": "alice@example.com", "password": "password123" } ```                                                    | None                                           | **200 OK** <br> ```json { "token": "your-jwt-token" } ```                                                                                             |
| 3   | `/todos`                 | POST   | ```json { "title": "Build a Portfolio", "description": "Create a web developer portfolio", "category": "Development", "deadline": "2024-11-15" } ``` | Authorization: Bearer your-jwt-token           | **201 Created** <br> ```json { "id": 1, "title": "Build a Portfolio", "description": "...", "category": "Development", "deadline": "2024-11-15", "createdAt": "...", "updatedAt": "..." } ``` |
| 4   | `/todos`                 | GET    | None                                                                                                                       | Authorization: Bearer your-jwt-token           | **200 OK** <br> ```json [ { "id": 1, "title": "Build a Portfolio", "description": "...", "category": "Development", "deadline": "2024-11-15", "createdAt": "...", "updatedAt": "..." } ] ``` |
| 5   | `/todos/:id`             | GET    | None                                                                                                                       | Authorization: Bearer your-jwt-token           | **200 OK** <br> ```json { "id": 1, "title": "Build a Portfolio", "description": "...", "category": "Development", "deadline": "2024-11-15", "createdAt": "...", "updatedAt": "..." } ``` |
| 6   | `/todos/:id`             | PUT    | ```json { "title": "Improve Portfolio", "description": "Add new projects to portfolio", "category": "Development", "deadline": "2024-12-01" } ``` | Authorization: Bearer your-jwt-token           | **200 OK** <br> ```json { "id": 1, "title": "Improve Portfolio", "description": "...", "category": "Development", "deadline": "2024-12-01", "createdAt": "...", "updatedAt": "..." } ``` |
| 7   | `/todos/:id`             | DELETE | None                                                                                                                       | Authorization: Bearer your-jwt-token           | **200 OK** <br> ```json { "message": "ToDo deleted successfully" } ```                                                                                 |
| 8   | `/todos`                 | DELETE | None                                                                                                                       | Authorization: Bearer your-jwt-token           | **200 OK** <br> ```json { "message": "All ToDos deleted successfully" } ```                                                                            |

## Petunjuk Penggunaan

1. **Register User**
   - **Endpoint**: `/users/register`
   - **Method**: POST
   - **Body**:
     ```json
     {
       "name": "Alice Smith",
       "email": "alice@example.com",
       "password": "password123"
     }
     ```
   - **Response**: 
     ```json
     {
       "id": 1,
       "name": "Alice Smith",
       "email": "alice@example.com",
       "createdAt": "...",
       "updatedAt": "..."
     }
     ```

2. **Login User**
   - **Endpoint**: `/users/login`
   - **Method**: POST
   - **Body**:
     ```json
     {
       "email": "alice@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "your-jwt-token"
     }
     ```

3. **Membuat ToDo Baru**
   - **Endpoint**: `/todos`
   - **Method**: POST
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Body**:
     ```json
     {
       "title": "Build a Portfolio",
       "description": "Create a web developer portfolio",
       "category": "Development",
       "deadline": "2024-11-15"
     }
     ```
   - **Response**:
     ```json
     {
       "id": 1,
       "title": "Build a Portfolio",
       "description": "Create a web developer portfolio",
       "category": "Development",
       "deadline": "2024-11-15",
       "createdAt": "...",
       "updatedAt": "..."
     }
     ```

4. **Melihat Semua ToDo**
   - **Endpoint**: `/todos`
   - **Method**: GET
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Response**:
     ```json
     [
       {
         "id": 1,
         "title": "Build a Portfolio",
         "description": "Create a web developer portfolio",
         "category": "Development",
         "deadline": "2024-11-15",
         "createdAt": "...",
         "updatedAt": "..."
       }
     ]
     ```

5. **Melihat ToDo Berdasarkan ID**
   - **Endpoint**: `/todos/:id`
   - **Method**: GET
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Response**:
     ```json
     {
       "id": 1,
       "title": "Build a Portfolio",
       "description": "Create a web developer portfolio",
       "category": "Development",
       "deadline": "2024-11-15",
       "createdAt": "...",
       "updatedAt": "..."
     }
     ```

6. **Mengubah ToDo Berdasarkan ID**
   - **Endpoint**: `/todos/:id`
   - **Method**: PUT
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Body**:
     ```json
     {
       "title": "Improve Portfolio",
       "description": "Add new projects to portfolio",
       "category": "Development",
       "deadline": "2024-12-01"
     }
     ```
   - **Response**:
     ```json
     {
       "id": 1,
       "title": "Improve Portfolio",
       "description": "Add new projects to portfolio",
       "category": "Development",
       "deadline": "2024-12-01",
       "createdAt": "...",
       "updatedAt": "..."
     }
     ```

7. **Menghapus ToDo Berdasarkan ID**
   - **Endpoint**: `/todos/:id`
   - **Method**: DELETE
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Response**:
     ```json
     {
       "message": "ToDo deleted successfully"
     }
     ```

8. **Menghapus Semua ToDo**
   - **Endpoint**: `/todos`
   - **Method**: DELETE
   - **Headers**: 
     - `Authorization: Bearer your-jwt-token`
   - **Response**:
     ```json
     {
       "message": "All ToDos deleted successfully"
     }
     ```

