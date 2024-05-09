// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License:GitHub](https://img.shields.io/badge/License-${license}-blue.svg)`


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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

${data.license}


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
