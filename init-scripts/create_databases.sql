-- Create `keycloak` database if it doesn't exist
CREATE DATABASE IF NOT EXISTS keycloak;

-- Create `text_analyzer_db` database if it doesn't exist
CREATE DATABASE IF NOT EXISTS text_analyzer_db;

-- Create MySQL user for keycloak
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'root';  -- Use the actual password here
GRANT ALL PRIVILEGES ON keycloak.* TO 'user'@'%';
FLUSH PRIVILEGES;
