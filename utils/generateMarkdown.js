// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ''
  }
  else if (license === 'Eclipse'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  }
  else if (license === 'GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]'

  }
  else if (license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
  }
  else if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  else if (license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
  }
  else if (license === 'Zlib'){
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]'
  }

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return ''
  }
  else if (license === 'Eclipse'){
    return '(https://opensource.org/licenses/EPL-1.0)'
  }
  else if (license === 'GNU'){
    return '(http://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === 'IBM'){
    return '(https://opensource.org/licenses/IPL-1.0)'
  }
  else if (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Mozilla'){
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'Zlib'){
    return '(https://opensource.org/licenses/Zlib)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license)
  const link = renderLicenseLink(license)
  return badge + "  " + link
}

// TODO: Create a function to generate markdown for README
function generateText(data) {
  return `# ${data.Title}
  
  ## Description:
  ${data.Description}
  
  ## Table of contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Github](#github)
  - [Email](#email)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contribution
  ${data.Contribution}

  ## Test
  ${data.Test}

  ## License
  ${data.License}

  ## Github
  ${data.Github}

  ## Email
  ${data.Email}
`;
}

module.exports = { generateText };
