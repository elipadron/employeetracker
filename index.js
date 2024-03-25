const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'employeetracker'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
  startApp();
});

function startApp() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'Add employee',
        'Remove employee',
        'Exit'
      ]
    }
  ]).then((answers) => {
    switch (answers.action) {
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add employee':
        addEmployee();
        break;
      case 'Remove employee':
        removeEmployee();
        break;
      case 'Exit':
        console.log('Exiting application');
        connection.end();
        break;
    }
  });
}

function viewAllEmployees() {
  const query = 'SELECT * FROM employees';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}


process.on('exit', () => {
  connection.end();
  console.log('Disconnected from MySQL server');
});
