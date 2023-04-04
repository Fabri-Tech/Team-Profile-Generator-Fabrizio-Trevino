function htmlCreator(teamGenArray) {
  let employeeCards = [];

  function callManager(employee) {
    return `
      <div class="card">
        <div class="card-header">
          <h2>Manager</h2>
          <h3>Name: ${employee.getName}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${employee.getId}</li>
            <li>Email: ${employee.getEmail}</li>
            <li>Office Number: ${employee.getOfficeNumber}</li>
          </ul>
        </div>
      </div>`;
  }

  // function callEngineer(newEngineer) {
  //   return `
  //     <div class="card">
  //       <div class="card-header">
  //         <h2>Engineer</h2>
  //         <h3>Name: ${newEngineer.getName}</h3>
  //       </div>
  //       <div class="card-body">
  //         <ul>
  //           <li>ID: ${newEngineer.getId}</li>
  //           <li>Email: ${newEngineer.getEmail}</li>
  //           <li>GitHub username: ${newEngineer.getGithub}</li>
  //         </ul>
  //       </div>
  //     </div>`;
  // }

  // function callIntern(newIntern) {
  //   return `
  //     <div class="card">
  //       <div class="card-header">
  //         <h2>Intern</h2>
  //         <h3>Name: ${newIntern.getName}</h3>
  //       </div>
  //       <div class="card-body">
  //         <ul>
  //           <li>ID: ${newIntern.ID}</li>
  //           <li>Email: ${newIntern.email}</li>
  //           <li>School Name: ${newIntern.schoolName}</li>
  //         </ul>
  //       </div>
  //     </div>`;
  // }

  teamGenArray.forEach(function (employee) {
    if (employee.getRole() === 'Manager') {
      employeeCards.push(callManager(employee));
    } else if (employee.getRole() === 'Engineer') {
      employeeCards.push(callEngineer(employee));
    } else if (employee.getRole() === 'Intern') {
      employeeCards.push(callIntern(employee));
    }
  });

  return employeeCards.join('');
}

module.exports = (teamGenArray) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Team-Profile-Generator</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${htmlCreator(teamGenArray)}
      </body>
    </html>`;
};
