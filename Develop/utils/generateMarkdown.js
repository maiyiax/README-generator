// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Tests](#Tests)
    * [Questions](#Questions)

  
  ## Installation
  ${data.description}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  * ${data.username}
  * ${data.email}
  
`;
}

module.exports = generateMarkdown;
