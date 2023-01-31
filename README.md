<a name="readme-top"></a>

  <!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

  <!-- PROJECT LOGO -->

  <br />
  <div align="center">
    <a href="https://github.com/mdyeates/team-dashboard">
      <img src="assets/images/logo.jpeg" alt="Logo" width="" height="200">
    </a>
    <h3 align="center">Team Dashboard</h3>
    <p align="center">
    <br/>
    Quickly gather information, generate a dynamic HTML webpage and keep track of all your team members in one place.
    <br/>
      <br/>
      Team Dashboard is proudly built by: Michael Yeates
      <br/>
      <br/>
      <a href="https://github.com/mdyeates/team-dashboard"><strong>Explore the docs »</strong></a>
      <br/>
      <br/>
      <a href="https://drive.google.com/file/d/1_atUXTM-L9r4NccsrPaaWqPyNu37ftwH/view">View Demo</a>
      ·
      <a href="https://github.com/mdyeates/team-dashboard/issues">Report Bug</a>
      ·
      <a href="https://github.com/mdyeates/team-dashboard/issues">Request Feature</a>
    </p>
  </div>
  
  <!-- TABLE OF CONTENTS -->

  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#screenshot">Screenshot</a></li>
          <li><a href="#built-with">Built With</a></li>
          <li><a href="#description">Description</a></li>
        </ul>
      </li>
      <li>
          <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li>
          <a href="#usage">Usage</a>
        <ul>
          <li><a href="#functionality">Functionality</a></li>
          <li><a href="#mobile-responsive">Mobile Responsive</a></li>
        </ul>
      </li>
      <li><a href="#license">License</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#questions">Questions</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
  
  <!-- ABOUT THE PROJECT -->
  
  ## About The Project
  
  ### Screenshot
  
  [![Team Dashboard Screen Shot][product-screenshot]](https://drive.google.com/file/d/1_atUXTM-L9r4NccsrPaaWqPyNu37ftwH/view)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Built With
  
  - ![JavaScript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=JavaScript&logoColor=FCDD32)

- ![Node.js](https://img.shields.io/badge/Node.js-376e05?style=for-the-badge&logo=Node.js&logoColor=white)

- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=Bootstrap&logoColor=white)

  <p align="right"><a href="#readme-top">back to top</a></p>

  ### Description

  Team Dashboard is a Node.js command-line application that takes in information about employees in a software engineering team and uses Object-Oriented Programming and Test-Driven Development to generate dynamic HTML. The user is prompted to enter the manager's information (name, ID, email, office number), then has the option to add an engineer or an intern by entering their information (name, ID, email, GitHub username or school). The application uses Inquirer for input, and has classes for Employee, Manager, Engineer, and Intern, with properties and methods unique to each role. Once the user has finished entering information, the HTML is generated and written to a file named team.html in the output folder.

  <p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mdyeates/team-dashboard.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- USAGE EXAMPLES -->
  
  ## Usage

- For this project, I learnt about OOP principles, modularisation and closure. The code block below defines a closure used in this app, which is an inner function that has access to variables in an outer function even after the outer function returns. This closure is made by enclosing the function definition in an Immediately Invoked Function Expression (IIFE) (which is invoked immediately when the code is executed).

- The `createTeam` function has a private variable called `team` defined within the closure and is accessible only to other functions defined within the same closure. The closure provides two methods for accessing the private `team` array: `addToTeam` and `getTeam`.

- `addToTeam` accepts a team member as an argument and uses the push method to add it to the team array. `getTeam` returns the `team` array, allowing access to the members who have been added.

- The closure acts like a "backpack" that carries the private information in `team` and the methods `addToTeam` and `getTeam` with it, allowing these variables and functions to persist even after the closure has been executed.

```js
const createTeam = (function () {
  const team = [];

  return {
    addToTeam: (member) => {
      team.push(member);
    },
    getTeam: () => team,
  };
})();
```

- The functions and state defined within the closure can be easily reused across multiple parts of the codebase while maintaining their privacy and encapsulation, this improves code reuse, security, organisation and readability.

```js
function generateIntern() {
  return internPrompts().then(({ name, id, email, school }) => {
    const intern = new Intern(name, id, email, school);
    createTeam.addToTeam(intern);
  });
}
```

### Functionality

- The following animation demonstrates the applications functionality

[![Functionality Gif][functionality-gif]](https://drive.google.com/file/d/1_atUXTM-L9r4NccsrPaaWqPyNu37ftwH/view)

<p align="right"><a href="#readme-top">back to top</a></p>

### Mobile Responsive

- As demonstrated in the screenshot below, this application is designed to be responsive and adjust seamlessly to fit various screen sizes

[![Responsiveness Screenshot][responsive-screenshot]](https://drive.google.com/file/d/1_atUXTM-L9r4NccsrPaaWqPyNu37ftwH/view)

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- TESTS -->

## Tests

This app utilises Jest. Simply run the command below to confirm that every aspect of your code passes the provided tests

```sh
npm test
```

  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- QUESTIONS -->
  
  ## Questions

If you have any inquiries, don't hesitate to reach out to me via socials or by sending an email to <a href="mailto:michael-yeates@outlook.com">michael-yeates@outlook.com</a>

<a href="https://www.linkedin.com/in/mdyeates/">LinkedIn</a> | <a href="https://github.com/mdyeates/">GitHub</a>

Project Link: [https://github.com/mdyeates/team-dashboard](https://github.com/mdyeates/team-dashboard)

  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- ACKNOWLEDGMENTS -->
  
  ## Acknowledgments

- [JS OOP: The Hard Parts](https://www.youtube.com/watch?v=aAAS9cEuFYI)

  <p align="right"><a href="#readme-top">back to top</a></p>

  <!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/mdyeates/team-dashboard.svg?style=for-the-badge
[contributors-url]: https://github.com/mdyeates/team-dashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mdyeates/team-dashboard.svg?style=for-the-badge
[forks-url]: https://github.com/mdyeates/team-dashboard/network/members
[stars-shield]: https://img.shields.io/github/stars/mdyeates/team-dashboard.svg?style=for-the-badge
[stars-url]: https://github.com/mdyeates/team-dashboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/mdyeates/team-dashboard.svg?style=for-the-badge
[issues-url]: https://github.com/mdyeates/team-dashboard/issues
[license-shield]: https://img.shields.io/github/license/mdyeates/team-dashboard.svg?style=for-the-badge
[license-url]: https://github.com/mdyeates/team-dashboard/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mdyeates

  <!-- UPDATE PLACEHOLDER IMAGES HERE -->

[product-screenshot]: assets/images/screenshot.png
[functionality-gif]: assets/images/functionality.gif
[responsive-screenshot]: assets/images/mobile-screenshot.png
