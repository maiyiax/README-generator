// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)

  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  * If there are any questions, you can reach out to me through my email below:
    * GitHub Profile:${data.username}
    * Email Address: ${data.email}
  
`;
}

module.exports = generateMarkdown;
