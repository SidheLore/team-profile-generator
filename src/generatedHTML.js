const generatedEmployees = (generatedEmployees) => {

};

const generatedManager = (manager) => {
    return `
    <section>
        <div>
            <div>
                <h2>${manager.name}</h2>
                <h4>Manager</h4>
            </div>
            <div>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">E-mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </section>
    `
};

const generatedEngineer = (engineer) => {
    return `
    <section>
        <div>
            <div>
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4>
            </div>
            <div>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github"><a href="https://github.com/${engineer.github}">GithHub</a></p>
            </div>
        </div>
    </section>
    `
};

const generatedIntern = (intern) => {
    return `
    <section>
        <div>
            <div>
                <h2>${intern.name}</h2>
                <h4>Intern</h4>
            </div>
            <div>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">E-Mail: <a href="mailto:${intern.email}">${engineer.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </section>
    `
};
module.exports = employeeData;