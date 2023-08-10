<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NodeJS Notes Application

This NodeJS application provides a RESTful API for managing notes. Users can perform operations like adding, editing, and removing notes, as well as archiving and unarchiving them. The application uses TypeScript, NestJS framework, and Docker for containerization.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/halmber/notes-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd notes-app
    ```

3. Build and start the Docker containers:

    ```bash
    docker-compose up
    ```

    This will start the NodeJS application and PostgreSQL database inside Docker containers.

4. Access the Swagger documentation:

    Open your web browser and navigate to `http://localhost:3000/api/docs` to interact with the API using Swagger.

## List of endpoints should look like this:

| Query type | Endpoint     | Action                                                                                                                      |
| :--------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------- |
| POST       | /notes       | Create a note object.                                                                                                       |
| DELETE     | /notes/:id   | Remove item.                                                                                                                |
| PATCH      | /notes/:id   | Edit item.                                                                                                                  |
| GET        | /notes/:id   | Retrieve item.                                                                                                              |
| GET        | /notes       | Get all notes.                                                                                                              |
| GET        | /notes/stats | Get aggregated data statistics. You don’t have to mock this data. You need to calculate it based on notes objects you have. |

## Technology Stack

-   Node.js
-   TypeScript
-   NestJS
-   Docker
-   PostgreSQL

## Development

To develop and extend the application further:

1. Clone the repository:

    ```bash
    git clone https://github.com/halmber/notes-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd notes-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the root directory and configure the following environment variables:

    ```plaintext
    PORT=3000
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_USER=your-username
    POSTGRES_PASSWORD=your-password
    POSTGRES_DB=notesapp_database
    ```

5. Start the PostgreSQL database:

    Make sure you have PostgreSQL installed and running on your local machine. Create a database named `notesapp_database` (or use a different name and update the `.env` file accordingly).

6. Run the application locally:

    ```bash
    npm run start:dev
    ```

7. Access Swagger documentation:

    Open your web browser and navigate to `http://localhost:3000/api/docs` to interact with the API using Swagger.

8. Create your features or improvements.

9. Test your changes and ensure everything works as expected.

10. Once satisfied, you can consider deploying the application using Docker as mentioned in the previous sections.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests if you have any suggestions, improvements, or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
