// A function that returns a license badge based on which license the user selects

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return (''); 
  }
}

// A function that returns the license section of README

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
  }
}

// A function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Licensed under the ${renderLicenseSection(data.license)} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please reach out to me with any questions about this project on GitHub at: https://github.com/${data.username} or via email: ${data.email}
  `      
}

module.exports = generateMarkdown;
