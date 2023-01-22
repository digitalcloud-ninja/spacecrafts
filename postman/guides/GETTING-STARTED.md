---
lang: en-US
title: Getting Started
description: How to use this toolkit.
externalLinkIcon: false
---
<!-- HIDDEN MARKDOWN LINKS & IMAGES -->
[Git.ico]: https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white
[Git.url]: https://git-scm.com/

[Node.ico]: https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.url]: https://nodejs.org/

[NPM.ico]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM.url]: https://docs.npmjs.com/about-npm

[Yarn.ico]: https://img.shields.io/badge/Yarn.js-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white
[Yarn.url]: https://classic.yarnpkg.com/en/docs/usage
# Getting Started #

::: tip Prerequisites

Before installing spacecrafts, a familiarity with the command line, and the following requirements must be 
installed on your computer:

[![Git][Git.ico]][Git.url]
[![Node.js][Node.ico]][Node.url]

**Your preferred Node.js package manager:**

[![npm][NPM.ico]][NPM.url]
[![Yarn][Yarn.ico]][Yarn.url]

:::

## Quick Start

This section will help you setup get up and running quickly.

- **Step 1**: Clone for your project.

<CodeGroup>
  <CodeGroupItem title="HTTPS">

  ```bash
    git clone 'https://github.com/digitalcloud-ninja/spacecrafts.git'
    cd 'spacecrafts'
  ```

  </CodeGroupItem>
  <CodeGroupItem title="SSH">

  ```bash
    git clone 'git@github.com:digitalcloud-ninja/spacecrafts.git'
    cd 'spacecrafts'
  ```

  </CodeGroupItem>
</CodeGroup>

- **Step 2**: Run the installation.

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


- **Step 3**: View documentation.

<CodeGroup>
  <CodeGroupItem title="NPM">

  ```bash
    cd postman
    npm docs:run
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
    cd postman
    yarn docs:run
  ```

  </CodeGroupItem>
</CodeGroup>


