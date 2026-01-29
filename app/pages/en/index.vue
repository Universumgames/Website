<template>
  <div class="snapping">
    <div id="frontPage">
      <div id="centerContent">
        <h1>UniversumGames</h1>
        <div id="connectives">
          <a href="/github.html" target="_blank" id="github">
            <IconGithub />
          </a>
          <a href="/twitter.html" target="_blank" id="twitter">
            <IconTwitter />
          </a>
          <a href="/index.html" id="website">
            <IconWeb />
          </a>
          <a href="/mail.html" target="_blank" id="mail">
            <IconMail />
          </a>
        </div>
      </div>
    </div>
    <div id="content">
      <div id="headline">
        <h2 style="margin-bottom: 0.2rem">UniversumGames</h2>
        <small>- Computer Science Student at Hochschule Niederrhein</small>
      </div>

      <div id="cv">
        <div id="projects">
          <h3>My completed and public Projects</h3>
          <ul>
            <li>
              <a href="https://github.com/Universumgames/eclipseTabs">eclipseTabs</a> - an Firefox
              Browser extension for an alternative Bookmark system
            </li>
            <li>
              <a href="https://confman.universegame.de/">ConfMan</a> - a Video-Conferencemanager for
              iOS and macOS
            </li>
            <li><a href="https://expoll.mt32.net">Expoll</a> - a Doodle Polling alternative</li>
            <li><a href="https://github.com/Universumgames/cube_puzzle">Qube Puzzle</a> - a 2D puzzle game</li>
            <li>
              <a href="https://github.com/mt32net/TIDILE">TIDILE</a> - "Time Indication Device Through
              Indirect Light Emission" - an IoT clock with an ESP32 and Neopixels (individually
              addressable LEDs)
            </li>
            <li>
              <a href="https://github.com/Universumgames/BudgetPlanner">BudgetPlanner</a> - A small
              Kotlin Compose program to visualize and summarize (regular) expenses and incomes
            </li>
          </ul>

          <h3>Projects I've contributed to</h3>
          <ul>
            <li>
              <a href="https://mt32.net">MT32</a> - a simple blog built with
              <a href="https://gohugo.io/" target="_blank">Hugo</a> and created with
              <a href="https://mtorials.de" target="_blank">mtorials</a>
            </li>
            <li>
              <a href="https://brillapp.com">Brill</a> - an iOS widget for learning new vocabulary
            </li>
          </ul>
        </div>

        <div id="skills">
          <h3>My Skills</h3>
          <ul>
            <h4>Languages</h4>
            <ul>
              <li>German
                <Pie class="onehundret" />
              </li>
              <li>English
                <Pie class="ninety" />
              </li>
            </ul>

            <h4>Programming/Markup Languages</h4>
            <ul>
              <li>C/C++
                <Pie class="seventyfive" />
              </li>
              <li>C#
                <Pie class="fifty" />
              </li>
              <li>Java <Pie class="twoThirds"></Pie>
              </li>
              <li>Kotlin
                <Pie class="oneThird" />
              </li>
              <li>HTML/CSS
                <Pie class="seventyfive" />
              </li>
              <li>Javascript/Typescript
                <Pie class="seventyfive" />
              </li>
              <li>SQL (MySQL/Postresql)
                <Pie class="twoThirds" />
              </li>
              <li>Swift <Pie class="twentyfive"></Pie>
              </li>
              <li>PHP <Pie class="twentyfive"></Pie>
              </li>
            </ul>

            <h4>Other Programming Skills/Known Frameworks</h4>
            <ul>
              <li>Vue2/3
                <Pie class="fifty" />
              </li>
              <li>Browser Extensions (Firefox)
                <Pie class="twoThirds" />
              </li>
              <li>Ansible
                <Pie class="oneThird" />
              </li>
              <li>Embedded systems
                <Pie class="twoThirds" />
              </li>
              <li>Git
                <Pie class="seventyFive" />
              </li>
              <li>Unity3D
                <Pie class="twentyfive" />
              </li>
              <li>Docker <Pie class="oneThird"></Pie>
              </li>
            </ul>
          </ul>
          <p>
            ... but to be honest, I think different programming languages (markup excluded) resemble
            more dialects rather than completely independent and different languages. (Programming-)
            Languages, just like Frameworks and libraries, develop fast or get deprecated and doesn't it
            result in the importance of rediscovering and learning new things or the ability of breaking
            complex things down into computer understandable instructions rather than pure
            "paperknowledge"? The mentionend dialects are just different variations of extremely similar
            origin, so learning new programming languages is just a Piece of cake...
          </p>
        </div>
        <div id="freetime">
          <h3>My Activities</h3>
          <ul>
            <li>Full time student</li>
            <li>Sailing (with teaching and youth engagement)</li>
            <li>Programming</li>
          </ul>
        </div>
      </div>
    </div>
    <svg style="position: fixed; top: 0; width: fit-content; height: fit-content; z-index: -100; visibility: hidden">
      <defs>
        <linearGradient id="githubDesktopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="20%" stop-color="#862C94" />
          <stop offset="95%" stop-color="#522F7F" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import IconGithub from '~/assets/svg/github.svg'
import IconTwitter from '~/assets/svg/twitter.svg'
import IconWeb from '~/assets/svg/website.svg'
import IconMail from '~/assets/svg/mail.svg'
</script>

<style>

</style>