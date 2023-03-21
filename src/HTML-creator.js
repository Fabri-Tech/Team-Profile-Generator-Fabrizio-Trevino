// manager section

function htmlCreator (teamGenArray){
    let employeeCards = [];
    function callManager (newManager) {
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
</div>
;`
    }
}

teamGenArray.forEach(function(employee) {
    if (employee.getRole() === "manager") {
        employeeCards.push (callManager)(employee)
    }
}
    )

    // engineer section
    function htmlCreator (teamGenArray){
        let employeeCards = [];
        function callEngineer (newEngineer) {
            return `

    <div class="card">
      <div class="card-header">
        <h2>Manager</h2>
        <h3>Name: ${newEngineer.name}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${newEngineerr.ID}</li>
          <li>Email: ${newEngineer.email}</li>
          <li>GitHub username: ${newEngineerr.GitHubUsername}</li>
        </ul>
      </div>
    </div>
    ;`
        }
    }

    teamGenArray.forEach(function(employee) {
        if (employee.getRole() === "manager") {
            employeeCards.push (callEngineer)(employee)
        }
    }
        )

// Intern section

function htmlCreator (teamGenArray){
    let employeeCards = [];
    function callIntern (newIntern) {
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
</div>
;`
    }
}

teamGenArray.forEach(function(employee) {
    if (employee.getRole() === "Intern") {
        employeeCards.push (callIntern)(employee)
    }
}
    )