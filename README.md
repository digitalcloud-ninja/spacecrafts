<!-- HIDDEN MARKDOWN LINKS & IMAGES -->
![spacecraft.svg](postman/.vuepress/public/images/spacecraft-256x256.png)

[Git.ico]: https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white
[Git.url]: https://git-scm.com/
[Node.ico]: https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.url]: https://nodejs.org/
[NPM.ico]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM.url]: https://docs.npmjs.com/about-npm
[Yarn.ico]: https://img.shields.io/badge/Yarn.js-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white
[Yarn.url]: https://classic.yarnpkg.com/en/docs/usage
[swagger]: https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black
[swagger.url]: https://swagger.io/specification/
[openapi]: https://img.shields.io/badge/openapi-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white
[openapi.url]: https://spec.openapis.org/oas/latest.html
[postman]: https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
[postman.url]: https://www.postman.com/
[gradle]: https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white
[gradle.url]: https://gradle.org/
[maven]: https://img.shields.io/badge/maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white
[maven.url]: https://gradle.org/

# SpaceCrafts API #

This is an example project called SpacesCrafts API
It's an example from Postman's API Boilerplate Definition,and then enhanced for educational purposes.

<h3>Buy or rent spacecrafts with us!</h3>

## Introduction ##

Welcome to our software developer kit! This kit contains all the tools and resources you need to build and integrate our
software into your own projects. Whether you're a seasoned developer or just getting started, our SDK makes it easy to
take advantage of the powerful functionality our software has to offer. With detailed documentation, sample code, and
technical support, you'll be able to get up and running in no time. We can't wait to see what you'll create with our
SDK!

_&uarr; ChatGPT_

<h3>Why was this created?</h3>

- **Tutorial / Educational**: This started as a research effort on Postman, GitHub, and building
  a software developers kit for a new agile development project.

<h3>Table of Contents</h3>

<!-- TOC -->
* [SpaceCrafts API](#spacecrafts-api)
  * [Introduction](#introduction)
  * [Dependencies](#dependencies)
  * [Project Definition](#project-definition)
  * [Getting Started](#getting-started)
  * [Introduction](#introduction-1)
  * [Reference Materiels](#reference-materiels)
  * [Roadmap](#roadmap)
<!-- TOC -->

## Dependencies ##

Before installing spacecrafts, a familiarity with the command line, and the following must be
installed on your computer:

[![Git][Git.ico]][Git.url]
[![Node.js][Node.ico]][Node.url]

**Your preferred Node.js package manager:**

[![npm][NPM.ico]][NPM.url]
[![Yarn][Yarn.ico]][Yarn.url]

**Your preferred OpenAPI Editor:**

[![Postman][postman]][postman.url]
[![OpenAPI 3.0.3][swagger]][swagger.url]

**Your preferred build tool:**

[![gradle][gradle]][gradle.url]
[![mavne][maven]][maven.url]

## [Getting Started](postman/guides/GETTING-STARTED.md) ##
## [Introduction](postman/guides/README.md) ##
## [Reference Materiels](postman/references/README.md) ##

## Project Definition ##

    /spacecrafts
      |
      |-- / .run
      |-- / .postman
      |-- README.md (this file)                 (Project Root)
      |-- LICENSE.md
      |-- package.json                          
      |-- settings.gradle
      |-- pom.xml
      |
      |-- / application                         (Frontend Application)
      |         |-- package.json
      |         |-- build.gradle
      |         |-- pom.xml
      |         |------/ src
      |
      |-- / postman                             (Documentation)
      |         |-- package.json
      |         |-- build.gradle
      |         |-- pom.xml
      |         |-- README.MD                   (Introduction)
      |         |-- GETTING-STARTED.MD          (Getting Started)
      |         |------/ schemas                    (API Definition) Postman's Git Location
      |         |------/ collections                (Collections)  Postman's Git Location
      |         |------/ guides                     (Developers Guide) 
      |         |------/ references                 (Application Documentation)
      |         |------/ .vuepress                  (Vuepress v2 Configuration)  
      |
      |-- / services                            (Backend Services)
                |-- package.json
                |-- build.gradle
                |-- pom.xml
                |------/ src


## Roadmap ##

1. [ ] Setup oAuth2 Configuration in API Definition
2. [ ] Dockerize
3. [ ] Build the supporting service for "Get Spacecrafts" 



