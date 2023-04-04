function htmlCreator(teamGen) {
  let employeeCards = [];

  function callManager(newManager) {
    return `
      <div class="card">
        <div class="card-header">
          <h2>Manager</h2>
          <h3>Name: ${newManager.name}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${newManager.ID}</li>
            <li>Email: ${newManager.email}</li>
            <li>Office Number: ${newManager.officeNumber}</li>
          </ul>
        </div>
      </div>`;
  }

  function callEngineer(newEngineer) {
    return `
      <div class="card">
        <div class="card-header">
          <h2>Engineer</h2>
          <h3>Name: ${newEngineer.name}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${newEngineer.ID}</li>
            <li>Email: ${newEngineer.email}</li>
            <li>GitHub username: ${newEngineer.GitHubUsername}</li>
          </ul>
        </div>
      </div>`;
  }

  function callIntern(newIntern) {
    return `
      <div class="card">
        <div class="card-header">
          <h2>Intern</h2>
          <h3>Name: ${newIntern.name}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${newIntern.ID}</li>
            <li>Email: ${newIntern.email}</li>
            <li>School Name: ${newIntern.schoolName}</li>
          </ul>
        </div>
      </div>`;
  }

  teamGen.forEach(function (employee) {
    if (employee.getRole() === 'manager') {
      employeeCards.push(callManager(employee));
    } else if (employee.getRole() === 'engineer') {
      employeeCards.push(callEngineer(employee));
    } else if (employee.getRole() === 'intern') {
      employeeCards.push(callIntern(employee));
    }
  });

  return employeeCards.join('');
}

module.exports = (teamGen) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Team-Profile-Generator</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${htmlCreator(teamGen)}
      </body>
    </html>`;
};
