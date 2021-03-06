// Renders the license badge for the chosen license
function renderLicenseBadge(license) {
  let chosenLicense = license
  let licenseBadge = ""
  if (chosenLicense === "Apache license 2.0") {
    licenseBadge = "![License: Apache license 2.0](https://img.shields.io/badge/License-Apachelicense2.0-orange)"
  }
  else if (chosenLicense === "GNU General Public License") {
    licenseBadge = "![License: GNU General Public License](https://img.shields.io/badge/License-GNU-General-Public License-green)"
  }
  else if (chosenLicense === "MIT") {
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet)"
  }
  else if(chosenLicense === "BSD") {
    licenseBadge = "![License: BSD](https://img.shields.io/badge/License-BSD-blue)"
  }
  // else if(chosenLicense === "None") {
  // licenseBadge = " "
  // }
  
  console.log(license);
  return licenseBadge;
}


// Renders the link for the license chosen
function renderLicenseLink(license) {
  let linkToLicense = license
  let licenseLink = ""
  if (linkToLicense === "Apache license 2.0") {
    licenseLink = "![License: Apache license 2.0](https://www.apache.org/licenses/)"
  }
  else if (linkToLicense === "GPL") {
    licenseLink = "![License: GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html)"
  }
  else if (linkToLicense === "MIT") {
    licenseLink = "![License: MIT](https://mit-license.org/)"
  }
  else if (linkToLicense === "BSD") {
    licenseLink = "![License: BSD](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (linkToLicense === "None") {
    licenseLink = ""
  }
    console.log(linkToLicense)
    return licenseLink;
}

// Renders the license section for the README.md 
function renderLicenseSection(license) {}

// generates markdown for the sample README
function generateMarkdown(data) {
  console.log("USER ANSWERS FROM INDEX.js", data)

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Technology
  ${data.technology}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  Github profile is "![Github profile](https://github.com/${data.questions})" 

  I can also be reached for questions at the email address  ${data.email}.


  ## License

  This project is licensed under the ${data.license} license.

  ${renderLicenseLink(data.license)} 

`;
}

module.exports = generateMarkdown;
