---
lang: en-US
title: Getting Started
description: How to use this toolkit.
externalLinkIcon: false
---

# Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Built With

[![Git][Git.ico]][Git.url]
[![npm][NPM.ico]][NPM.url]
[![Yarn][Yarn.ico]][Yarn.url]

## Quick Start
You can use the GitHub's "Use this template" button. To create a fork of this template in your own repository.

![](postman/.vuepress/public/images/github-template.png "Use the GitHub Template Feature")

## Manual Setup

This section will help you build a basic VuePress documentation site from ground up. If you already have an existing
project and would like to keep documentation inside the project, start from Step 3.

- **Step 1**: Clone this template and **_re-initialize_** your project.

<CodeGroup>
  <CodeGroupItem title="HTTPS">

  ```bash
    git clone 'https://github.com/repo-owner/project-name'
    rm -Rf 'project-name/.git'
    mv 'project-name' 'new-project-name'
    cd 'new-project-name'
  ```

  </CodeGroupItem>
  <CodeGroupItem title="SSH">

  ```bash
    git clone 'git@github.com:digitalcloud-ninja/python_application.git'
    rm -Rf 'project-name/.git'
    mv 'project-name' 'new-project-name'
    cd 'new-project-name'
    git init
  ```

  </CodeGroupItem>
</CodeGroup>

- **Step 2**: Install the default dependencies.

<CodeGroup>
  <CodeGroupItem title="NPM">

  ```bash
    npm install
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
    yarn install
  ```

  </CodeGroupItem>
</CodeGroup>

<!-- HIDDEN MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- images -->
[product-screenshot]: postman/.vuepress/public/images/screenshot.png
<!-- technologies -->
[Git.ico]: https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white
[Git.url]: https://git-scm.com/
[NPM.ico]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM.url]: https://docs.npmjs.com/about-npm
[Yarn.ico]: https://img.shields.io/badge/Yarn.js-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white
[Yarn.url]: https://classic.yarnpkg.com/en/docs/usage
