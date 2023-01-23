<!-- HIDDEN MARKDOWN LINKS & IMAGES -->
![spacecraft.svg](postman/.vuepress/public/images/spacecraft-256x256.png)

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
  * [Getting Started](#getting-started)
  * [Introduction](#introduction-1)
  * [Reference Materiels](#reference-materiels)
  * [Project Definition](#project-definition)
  * [Change Log](#change-log)
  * [Roadmap](#roadmap)
<!-- TOC -->

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
      |         |-- README.MD                   (Home Page)
      |         |-- CHANGELOG.MD                (Release Notes)
      |         |------/ schemas                    (OpenAPI Definition) Postman's Default Location
      |         |------/ collections                (Collections)  Postman's Default Location
      |         |------/ guides                     (Developers Guide) 
      |         |------/ references                 (Reference Materials)
      |         |------/ .vuepress                  (Vuepress v2 Configuration & Images)  
      |
      |-- / services                            (Backend Services)
                |-- package.json
                |-- build.gradle
                |-- pom.xml
                |------/ src


## [Change Log](postman/CHANGELOG.md) ##

## Roadmap ##

1. [ ] Setup oAuth2 Configuration in API Definition
2. [ ] Containerize (Docker)
3. [ ] Build an example service for "Get Spacecrafts" endpoint.



