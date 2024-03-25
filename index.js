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
  