// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLinkAndBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Perl') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else {
    return '';
  }
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

  
  ${renderLicenseLinkAndBadge(data.license)}
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
  If you have any questions, feel free to contact me via email at ${data.email}, or through GitHub at (https://github.com/${data.github}).
    `
    )
    }
${
    `## License`
    }
${
    `This product is covered under ${renderLicenseLinkAndBadge(data.license)}`
    }
`;
}

module.exports = generateMarkdown;
