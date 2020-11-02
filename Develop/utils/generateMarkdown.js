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
  * If there are any questions, you can reach out to me through GitHub or my email below:
    * ${data.username}
    * ${data.email}
  
`;
}

module.exports = generateMarkdown;
