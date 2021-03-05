// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license) {
    return `![Github badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `\n[License section](#license)\n`
  } else {
    return '';
  }
}

/*
[Description](#description)
*/
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [Questions?](#questions)

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection()}
${
    data.description && (
      `## Description
${data.description}
    `
    )
    }
${
    data.installation && (
      `## Installation
${data.installation}
  `
    )
    }   
${
    data.usage && (
      `## Usage
${data.usage}
    `
    )
    }
${
    data.contribution && (
      `## Contribution
${data.contribution}
    `
    )
    }
${
    data.test && (
      `## Test
${data.test}
    `
    )
    }
${
    data.email && (
      `## Questions?
  If you have any questions, feel free to contact me:
  - Via email at ${data.email} 
  - Or through GitHub at (https://github.com/${data.github}).
    `
    )
    }
${
    `## License`
    }
${
    `This product is covered under [${renderLicenseBadge(data.license)}]()`
    }
`;
}

module.exports = generateMarkdown;
