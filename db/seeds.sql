-- schema.sql

INSERT INTO department (name) VALUES
    ('Human Resources'),
    ('Accounting'),
    ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES
    ('Human Resources Manager', 80000, 1),
    ('Accountant', 60000, 2),
    ('Marketing Manager', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Diana', 'Mendez', 1, NULL),
    ('Michael', 'Rodriguez', 2, 1),
    ('Jesus', 'Smith', 3, 1);

