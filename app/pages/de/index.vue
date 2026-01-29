<template>
    <div class="snapping">
      <div id="frontPage">
        <div id="centerContent">
          <h1>UniversumGames</h1>
          <div id="connectives">
            <a href="/github.html" target="_blank" id="github"> <IconGithub /> </a>
            <a href="/twitter.html" target="_blank" id="twitter"> <IconTwitter /> </a>
            <a href="/index.html" id="website"> <IconWeb /> </a>
            <a href="/mail.html" target="_blank" id="mail"> <IconMail /> </a>
          </div>
        </div>
      </div>
      <div id="content">
        <div id="headline">
          <h2 style="margin-bottom: 0.2rem">UniversumGames</h2>
          <small>- Informatikstudent an der Hochschule Niederrhein</small>
        </div>

        <div id="cv">
          <div id="projects">
            <h3>Meine Öffentlichen Projekte</h3>
            <ul>
              <li>
                <a href="https://github.com/Universumgames/eclipseTabs">eclipseTabs</a> - eine Firefox
                Erweiterung für ein alternatives Lesezeichen-System
              </li>
              <li>
                <a href="https://confman.universegame.de/">ConfMan</a> - ein Video-Konferenzmanager für
                iOS und macOS
              </li>
              <li><a href="https://expoll.mt32.net">Expoll</a> - eine Doodle Umfrage Alternative</li>
              <li><a href="https://github.com/Universumgames/cube_puzzle">Qube Puzzle</a> - ein 2D Rätsel SPiel</li>
              <li>
                <a href="https://github.com/mt32net/TIDILE">TIDILE</a> - "Time Indication Device Through
                Indirect Light Emission" - eine IOT Uhr mit einem ESP32 (Internetfähiger
                Mikrokontroller) und Neopixel (einzeladdressierbare LEDs)
              </li>
              <li>
                <a href="https://github.com/Universumgames/BudgetPlanner">BudgetPlanner</a> - Ein
                kleines Kotlin Compose Programm um einfach und übersichtlich vergangene und zukünftige
                Aus- und Einnahmen im Überblick zu behalten
              </li>
            </ul>

            <h3>Projekte bei denen ich mitgewirkt habe</h3>
            <ul>
              <li>
                <a href="https://mt32.net">MT32</a> - ein simpler Blog, welcher mit
                <a href="https://gohugo.io/" target="_blank">Hugo</a> erstellt ist und in Zusammenarbeit
                mit <a href="https://mtorials.de" target="_blank">mtorials</a> geführt wird
              </li>
              <li>
                <a href="https://brillapp.com">Brill</a> - ein iOS widget um neue Vokabeln
                kennenzulernen
              </li>
            </ul>
          </div>

          <div id="skills">
            <h3>Meine Skills</h3>
            <ul>
              <h4>Sprachen</h4>
              <ul>
                <li>Deutsch
                  <Pie class="onehundret" />
                </li>
                <li>Englisch
                  <Pie class="onehundret" />
                </li>
              </ul>

              <h4>Programmier/Markup Sprachen</h4>
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

              <h4>Andere Skills oder mir bekannte Framworks</h4>
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
              ... wobei ich finde, dass Programmiersprachen (Markupsprachen hier ausgeschlossen) eher
              verlgeichbar mit Dialekten als eigenen unabhängigen Sprachen sind und diese, genau wie
              Frameworks und Bibliotheken, sich schnell ändern können oder deprecated werden. Wichtiger
              ist da ja eigentlich das Herunterbrechen seiner Vorstellungen und Wünsche in für den
              Computer verständliche Anweisungen, egal in welchem Dialekt man ihm es "erklären" muss...
              die kann man sich ja in der Regeln recht einfach aneigenen...
            </p>
          </div>
          <div id="freetime">
            <h3>In meiner Freizeit</h3>
            <ul>
              <li>Volzeitstudent</li>
              <li>Segeln (unter anderem auch das Lehren und anderweitige Jugendarbeit)</li>
              <li>Programmieren</li>
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

definePageMeta({
  layout: 'homepage',
})
</script>

<style lang="scss">

@use '~/assets/css/connectionsStyle.scss';
@use '~/assets/css/homepage_main.scss';
</style>