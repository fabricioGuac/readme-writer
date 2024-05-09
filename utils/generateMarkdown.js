// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let choice = '';

  switch (license) {
    case 'MIT':
      choice = 'MIT-yellow'
      break;
    case 'Apache 2.0':
      choice = 'Apache%202.0-blue'
      break;
    case 'GNU General Public 3.0':
      choice = 'GPLv3-blue'
      break;
    case 'Mozilla Public':
      choice = 'MPL_2.0-brightgreen'
      break;
    case 'BSD 2-Clause':
      choice = 'BSD_2--Clause-orange'
      break;
    case 'WTFPL':
      choice = 'WTFPL-brightgreen'
      break;
    case 'ISC':
      choice = 'ISC-blue'
      break;
  }

  return `![License:GitHub](https://img.shields.io/badge/License-${choice}.svg)`


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let choice = '';

  switch (license) {
    case 'MIT':
      choice = 'mit'
      break;
    case 'Apache 2.0':
      choice = 'apache-2.0'
      break;
    case 'GNU General Public 3.0':
      choice = 'gpl-3.0'
      break;
    case 'Mozilla Public':
      choice = 'mpl-2.0'
      break;
    case 'BSD 2-Clause':
      choice = 'bsd-2-clause'
      break;
    case 'WTFPL':
      choice = 'wtfpl'
      break;
    case 'ISC':
      choice = 'isc'
      break;
  }
  return `https://choosealicense.com/licenses/${choice}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  
  `
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}


## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}


## Usage

${data.usage}


## License

${renderLicenseSection(data.license)}


## Contributing

We welcome contributions to this project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Test your changes locally.
5. Commit your changes with a clear commit message.
6. Push your changes to your fork.
7. Submit a pull request to the main repository's branch.

Thank you for contributing to our project!

## Tests

${data.tests}

## Questions

If you have any questions or need assistance with the project, feel free to reach out to us:

- **GitHub Profile:** [${data.questions1}](https://github.com/${data.questions1})
- **Email:** ${data.questions2}

Feel free to contact us for any clarifications or feedback. We appreciate yo

`;
}

module.exports = generateMarkdown;
