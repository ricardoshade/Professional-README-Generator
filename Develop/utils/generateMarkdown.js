// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[License: ${license}](https://img.shields.io/badge/License-${license.replace(/\s/g, '')}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License: ${license}](#license)`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License 
    
    This repository is covered under the ${license} license`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.projectTitle}

  ${renderLicenseBadge(response.licenseType)}
  
  ## Description
  ${response.projectDescription}

  ## Table of Contents 
  ${renderLicenseLink(response.licenseType)}

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributions](#contributions)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation
  ${response.installationInstructions}

  ## Usage
  ${response.projectUse}
  
  ## Contributions
  ${response.howToContribute}

  ${renderLicenseSection(response.licenseType)}

  ## Tests
  ${response.testingInstructions}

  ## Questions
  [${response.gitHubUsername}](https://github.com/${response.gitHubUsername})

  ${response.emailAddress}

`;
}

export default generateMarkdown;
