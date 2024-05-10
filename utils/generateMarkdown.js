// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  } else { return ''; }
}


// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'None') {
    return `- [${license}](#License)`

  }
  else { return ''; }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License 

This project is licensed under the ${license} license.

`} else {
    return '';
  }
}

// Creates a function to generate markdown for README file
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## Description 

${data.description}


## Table of contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}


## Usage

${data.usage}


${renderLicenseSection(data.license)}


## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or need help with the project, feel free to contact me through the following channels: - Connect with me on GitHub at [${data.github}](https://github.com/${data.github})  - Drop me an email at [${data.email}](https://github.com/${data.email})   Don't hesitate to reach out if you need any clarifications or want to share feedback. I'm here to assist you!

`;
}

module.exports = generateMarkdown;
