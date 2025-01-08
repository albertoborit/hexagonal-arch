#!/bin/bash

# Configuration variables
CONTAINER_NAME="mysql-container"  # Name of your MySQL container
DB_NAME="mydatabase"
MYSQL_ROOT_PASSWORD="yourpassword"  # You can fetch this from an environment variable

# SQL query to create the users table
CREATE_TABLE_QUERY="
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL
);
"

# Run the query inside the Docker container
echo "Creating 'users' table in the database '$DB_NAME' inside container '$CONTAINER_NAME'..."
docker exec -i "$CONTAINER_NAME" mysql -uroot -p"$MYSQL_ROOT_PASSWORD" "$DB_NAME" -e "$CREATE_TABLE_QUERY"

if [ $? -eq 0 ]; then
    echo "'users' table created successfully."
else
    echo "Failed to create 'users' table."
fi
