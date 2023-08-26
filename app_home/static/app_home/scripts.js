"use strict";

// Dark-Light Mode Toggle Button
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const ToggleButEl = document.querySelector(".toggle-button--component");
const RotEl = document.querySelector(".toggle-button--wheel");
const seagirlEl = document.querySelector(".skills-svg img"); 

function darkMode(){
  RotEl.style.transform = "rotate(180deg)";
    // ToggleButEl.style.backgroundColor = "var(--toggle-color-dark)";
    
    seagirlEl.style.opacity = 0.2;
    
    document.documentElement.style.setProperty(
      "--toggle-color",
      "var(--toggle-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-background",
      "var(--color-background-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-left-nohover",
      "var(--color-left-dark-1)"
    );
    document.documentElement.style.setProperty(
      "--color-left-hover",
      "var(--color-left-dark-2)"
    );
    document.documentElement.style.setProperty(
      "--font-color",
      "var(--font-color-def-dark)"
    );
    document.documentElement.style.setProperty(
      "--font-color-mukesh",
      "var(--font-color-dark-mukesh)"
    );
    document.documentElement.style.setProperty(
      "--font-color-desi",
      "var(--font-color-dark-desi)"
    );
    document.documentElement.style.setProperty(
      "--resume-button",
      "var(--resume-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--locate-color",
      "var(--locate-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--locate-color-hover",
      "var(--font-color-dark-mukesh)"
    );
    document.documentElement.style.setProperty(
      "--contact-icon",
      "var(--contact-icon-dark)"
    );
    document.documentElement.style.setProperty(
      "--contact-hover",
      "var(--contact-icon-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--fadding",
      "var(--fadding-dark)"
    );
    document.documentElement.style.setProperty(
      "--home-button",
      "var(--home-button-dark)"
    );
    document.documentElement.style.setProperty(
      "--home-button-shadow",
      "var(--home-button-shadow-dark)"
    );
    document.documentElement.style.setProperty(
      "--home-button-font-color",
      "var(--home-button-font-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button",
      "var(--timeline-button-dark)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button-shadow",
      "var(--timeline-button-shadow-dark)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button-font-color",
      "var(--timeline-button-font-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--projects-button",
      "var(--projects-button-dark)"
    );
    document.documentElement.style.setProperty(
      "--projects-button-shadow",
      "var(--projects-button-shadow-dark)"
    );
    document.documentElement.style.setProperty(
      "--projects-button-font-color",
      "var(--projects-button-font-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--skills-button",
      "var(--skills-button-dark)"
    );
    document.documentElement.style.setProperty(
      "--skills-button-shadow",
      "var(--skills-button-shadow-dark)"
    );
    document.documentElement.style.setProperty(
      "--skills-button-font-color",
      "var(--skills-button-font-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button",
      "var(--attainment-button-dark)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button-shadow",
      "var(--attainment-button-shadow-dark)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button-font-color",
      "var(--attainment-button-font-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-1-hover",
      "var(--color-1-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-2-hover",
      "var(--color-2-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-3-hover",
      "var(--color-3-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-4-hover",
      "var(--color-4-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--color-5-hover",
      "var(--color-5-hover-dark)"
    );
    document.documentElement.style.setProperty(
      "--title-1",
      "var(--title-1-dark)"
    );
    document.documentElement.style.setProperty(
      "--title-2",
      "var(--title-2-dark)"
    );
    document.documentElement.style.setProperty(
      "--title-3",
      "var(--title-3-dark)"
    );
    document.documentElement.style.setProperty(
      "--title-4",
      "var(--title-4-dark)"
    );
    document.documentElement.style.setProperty(
      "--title-5",
      "var(--title-5-dark)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-1-color",
      "var(--sub-tittle-1-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-2-color",
      "var(--sub-tittle-2-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-3-color",
      "var(--sub-tittle-3-color-dark)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-4-color",
      "var(--sub-tittle-4-color-dark)"
    );
    console.log("Moon");  //dark
}

function lightMode (){
  RotEl.style.transform = "rotate(0deg)";
    // ToggleButEl.style.backgroundColor = "var(--toggle-color-light)";
    
    seagirlEl.style.opacity = 1;

    document.documentElement.style.setProperty(
      "--toggle-color",
      "var(--toggle-color-light)"
    );
    document.documentElement.style.setProperty(
      "--color-background",
      "var(--color-background-light)"
    );
    document.documentElement.style.setProperty(
      "--color-left-nohover",
      "var(--color-left-light-1)"
    );
    document.documentElement.style.setProperty(
      "--color-left-hover",
      "var(--color-left-light-2)"
    );
    document.documentElement.style.setProperty(
      "--font-color",
      "var(--font-color-def-light)"
    );
    document.documentElement.style.setProperty(
      "--font-color-mukesh",
      "var(--font-color-light-mukesh)"
    );
    document.documentElement.style.setProperty(
      "--font-color-desi",
      "var(--font-color-light-desi)"
    );
    document.documentElement.style.setProperty(
      "--resume-button",
      "var(--resume-color-light)"
    );
    document.documentElement.style.setProperty(
      "--locate-color",
      "var(--locate-color-light)"
    );
    document.documentElement.style.setProperty(
      "--locate-color-hover",
      "var(--font-color-light-mukesh)"
    );
    document.documentElement.style.setProperty(
      "--contact-icon",
      "var(--contact-icon-light)"
    );
    document.documentElement.style.setProperty(
      "--contact-hover",
      "var(--contact-icon-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--fadding",
      "var(--fadding-light)"
    );
    document.documentElement.style.setProperty(
      "--home-button",
      "var(--home-button-light)"
    );
    document.documentElement.style.setProperty(
      "--home-button-shadow",
      "var(--home-button-shadow-light)"
    );
    document.documentElement.style.setProperty(
      "--home-button-font-color",
      "var(--home-button-font-color-light)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button",
      "var(--timeline-button-light)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button-shadow",
      "var(--timeline-button-shadow-light)"
    );
    document.documentElement.style.setProperty(
      "--timeline-button-font-color",
      "var(--timeline-button-font-color-light)"
    );
    document.documentElement.style.setProperty(
      "--projects-button",
      "var(--projects-button-light)"
    );
    document.documentElement.style.setProperty(
      "--projects-button-shadow",
      "var(--projects-button-shadow-light)"
    );
    document.documentElement.style.setProperty(
      "--projects-button-font-color",
      "var(--projects-button-font-color-light)"
    );
    document.documentElement.style.setProperty(
      "--skills-button",
      "var(--skills-button-light)"
    );
    document.documentElement.style.setProperty(
      "--skills-button-shadow",
      "var(--skills-button-shadow-light)"
    );
    document.documentElement.style.setProperty(
      "--skills-button-font-color",
      "var(--skills-button-font-color-light)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button",
      "var(--attainment-button-light)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button-shadow",
      "var(--attainment-button-shadow-light)"
    );
    document.documentElement.style.setProperty(
      "--attainment-button-font-color",
      "var(--attainment-button-font-color-light)"
    );
    document.documentElement.style.setProperty(
      "--color-1-hover",
      "var(--color-1-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--color-2-hover",
      "var(--color-2-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--color-3-hover",
      "var(--color-3-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--color-4-hover",
      "var(--color-4-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--color-5-hover",
      "var(--color-5-hover-light)"
    );
    document.documentElement.style.setProperty(
      "--title-1",
      "var(--title-1-light)"
    );
    document.documentElement.style.setProperty(
      "--title-2",
      "var(--title-2-light)"
    );
    document.documentElement.style.setProperty(
      "--title-3",
      "var(--title-3-light)"
    );
    document.documentElement.style.setProperty(
      "--title-4",
      "var(--title-4-light)"
    );
    document.documentElement.style.setProperty(
      "--title-5",
      "var(--title-5-light)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-1-color",
      "var(--sub-tittle-1-color-light)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-2-color",
      "var(--sub-tittle-2-color-light)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-3-color",
      "var(--sub-tittle-3-color-light)"
    );
    document.documentElement.style.setProperty(
      "--sub-tittle-4-color",
      "var(--sub-tittle-4-color-light)"
    );
    console.log("Sun");   //light
}

function handleDarkModeChange(event) {
  if (event.matches) {
    darkMode()
  } else {
    lightMode()
  }
}

// const RotEl = document.querySelector(".toggle-button--component");

RotEl.style.transform = "rotate(0deg)";

// Browser Theme Changer
// darkModeMediaQuery.addEventListener(handleDarkModeChange);
// handleDarkModeChange(darkModeMediaQuery);

ToggleButEl.addEventListener("click", () => {
  if (RotEl.style.transform == "rotate(0deg)") {
    darkMode()
  } else {
    lightMode()
  }
});

// auto typing effect

$(function () {
  $(".typed").typed({
    strings: [
      "Python developer",
      "Wed Designer",
      "Web Scraping",
      "Backend development",
    ],
    backDelay: 1200,
    loop: true,
    typeSpeed: 30,
  });
});

// music
console.log(domain);
console.log(a);
const musicAudio = new Audio(a);
const pause = document.querySelector(".music-btn");

const music = function () {
  if (pause.textContent == "Play me") {
    musicAudio.play();
    musicAudio.volume = 0.7;
    pause.textContent = "Pause me";
  } else {
    musicAudio.pause();
    musicAudio.volume = 1.0;
    pause.textContent = "Play me";
  }
};

document.querySelector(".music-btn").addEventListener("click", music);
