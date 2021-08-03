const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Guidelines',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Test Instructions',
        name: 'test',
      },
      {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['MIT', 'IBM', 'Mozilla', "None"],
      },
      //License section needs work

      {
        type: 'input',
        message: 'github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Whats your email?',
        name: 'email',
      },
  ])
  .then((response) => {
      console.log(response);
      let answers = 
      `# ${response.title}
      
# Description
${response.description}


## Table of Contents
* [Description](#Description)
* [Installation Guidelines](#Installation-Guidelines)
* [Usage Information](#Usage-Information)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Test Instructions](#Test-Instructions)`
if(response.license != 'None'){
answers += `\n* [License](#License)`;
}
answers += `\n* [Github](#Github)

      
# Installation Guidelines
${response.install}

      
# Usage Information
${response.usage}

      
# Contribution Guidelines
${response.contribution}

      
# Test Instructions
${response.test}
      

`

if(response.license == 'MIT'){
  answers += `\n# License\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}else if(response.license == 'IBM'){
  answers += `\n# License\n[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
}else if(response.license == "Mozilla"){
  answers += `\n# License\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
}
answers += `\n# Questions

# Email
Any questions? Please email me at[${response.email}](mailto:${response.email})

# Github
If you'd like to see more of my work, please visit [${response.github}](https://github.com/${response.github})`


      fs.writeFile('README.md', answers, (error, data) =>
  error ? console.error(error) : console.log("File Created")
);

  })
