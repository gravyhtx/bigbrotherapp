DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);
  
CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(30,2) NOT NULL,
  department_id INT(30) NOT NULL,
  PRIMARY KEY (id)
	-- FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(30) NOT NULL,
  manager_id INT(30) NOT NULL,
  PRIMARY KEY (id)
	-- FOREIGN KEY (role_id) REFERENCES role(id)
);

INSERT INTO department (name) 
VALUES
	("Twangers"),
    ("Debris");
    
INSERT INTO role (title, salary, department_id) 
VALUES
	("Dober", 400000.00, 23),
	("Handler", 30000.00, 12);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
	("Søren", "Timmons", 1, 1),
    ("Corbis", "Scaffolding", 1, 1);

SELECT * FROM role;


-- CREATE TABLE department (
--     id INT AUTO_INCREMENT NOT NULL,
--     name VARCHAR(30),
--     PRIMARY KEY(id)
-- )   ENGINE=INNODB;

-- CREATE TABLE role (
--     id INT AUTO_INCREMENT NOT NULL,
--     PRIMARY KEY (id)
-- )   ENGINE=INNODB;

-- CREATE TABLE employee (
--     no INT AUTO_INCREMENT NOT NULL AUTO_INCREMENT,
--     product_category INT NOT NULL,
--     product_id INT NOT NULL,
--     customer_id INT NOT NULL,

--     PRIMARY KEY(no),
--     INDEX (product_category, product_id),
--     INDEX (customer_id),

--     FOREIGN KEY (product_category, product_id)
--       REFERENCES product(category, id)
--       ON UPDATE CASCADE ON DELETE RESTRICT,

--     FOREIGN KEY (customer_id)
--       REFERENCES customer(id)
-- )   ENGINE=INNODB;
