"use strict";

// Dark-Light Mode Toggle Button

const ToggleButEl = document.querySelector(".toggle-button--component");
const RotEl = document.querySelector(".toggle-button--wheel");
// const RotEl = document.querySelector(".toggle-button--component");

RotEl.style.transform = "rotate(0deg)";

ToggleButEl.addEventListener("click", () => {
  if (RotEl.style.transform == "rotate(0deg)") {
    RotEl.style.transform = "rotate(180deg)";
    // ToggleButEl.style.backgroundColor = "var(--toggle-color-dark)";
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
    console.log("Moon");
  } else {
    RotEl.style.transform = "rotate(0deg)";
    // ToggleButEl.style.backgroundColor = "var(--toggle-color-light)";
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
    console.log("Sun");
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
