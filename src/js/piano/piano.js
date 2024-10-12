// create note
window.addEventListener("DOMContentLoaded", () => {
  let baseSpeedValue = 300;
  let baseCordValue = 3;
  let selectSpeedCord = document.querySelector("#select-speed-cord");
  let playWithAutoPlay = document.querySelector("#play-with-auto-play");
  let isPlayWithSelected = false;
  let controlSpeed = document.getElementById("control-speed");
  let autoPlayTimeline = document.getElementById("auto-play-timeline");
  let autoPlayTimelineInner = document.getElementById(
    "auto-play-timeline-inner"
  );
  let timeLineInnerPush = [];
  let baseCord = baseCordValue;
  let baseSpeed = baseSpeedValue;

  let isAutoPlaying = false;

  const activeKeys = new Set();

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const volumeControl = document.getElementById("volumeControl");
  const loaderVar = document.getElementById("loader-bar");

  let currentVolume = volumeControl.value;

  const gainNode = audioContext.createGain();
  gainNode.gain.value = currentVolume;
  gainNode.connect(audioContext.destination);

  // Update volume
  volumeControl.addEventListener("input", (e) => {
    currentVolume = e.target.value;
    gainNode.gain.value = currentVolume;
  });

  async function preloadAudio() {
    const promises = [];
    let count = 0;
    let audionFormate = "mp3";

    for (let i = 0; i < pianoData.length; i++) {
      const el = pianoData[i]["cord_" + (i + 1)];
      for (let j = 0; j < el.length; j++) {
        let nt = el[j];
        const note = Object.keys(nt)[0];
        const soundFile = `./src/sounds/c${i + 1}/${note.replace(
          "_sharp",
          "s"
        )}.${audionFormate}`;

        const promise = fetch(soundFile)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok for ${soundFile}`);
            }
            return response.arrayBuffer();
          })
          .then((arrayBuffer) => {
            return audioContext
              .decodeAudioData(arrayBuffer)
              .then((decodedData) => {
                nt[note].sound = decodedData;
              });
          })
          .catch((error) => {
            console.error("Error loading sound:", error);
          })
          .finally(() => {
            count++;
            if (loaderVar) {
              loaderVar.style.width = `${
                (count / (pianoData.length * 12)) * 100
              }%`;
            }
          });

        promises.push(promise);
      }
    }

    await Promise.all(promises);
  }

  preloadAudio().then(() => {
    pianoData.forEach((data, i) => {
      let cord = document.createElement("div");
      cord.className = `cord c${i + 1}`;

      // 1
      //   c
      let noteDiv1 = document.createElement("div");
      noteDiv1.className = `switch note c${i + 1}_${note1}`;
      noteDiv1.setAttribute("data-key", data["cord_" + (i + 1)][0][note1].key);
      noteDiv1.innerHTML = `
      <span class="notes-name">${note1.replace("_sharp", "#")}${i + 1}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][0][note1].key}</span>
      `;

      noteDiv1.onpointerdown = (e) =>
        makeTune(e, noteDiv1, data["cord_" + (i + 1)][0][note1].sound);

      // noteDiv1.ontouchstart = (e) =>
      //   makeTune(e, noteDiv1, data["cord_" + (i + 1)][0][note1].sound);

      // timeline
      let timeLineDiv1 = document.createElement("div");
      timeLineDiv1.className = "time-line";
      timeLineDiv1.innerHTML = `
        <div class="timeline-inner time-line-c${i + 1}_${note1}"></div>
        <div class="timeline-inner-sharp timeline-inner-sharp-left time-line-c${
          i + 1
        }_${note2}"></div>
      `;

      autoPlayTimelineInner.append(timeLineDiv1);

      //   c#
      let semiNote1 = document.createElement("div");
      semiNote1.className = `switch semi-note-left c${i + 1}_${note2}`;
      semiNote1.setAttribute("data-key", data["cord_" + (i + 1)][1][note2].key);
      semiNote1.innerHTML = `<span class="notes-name">${note2.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][1][note2].key}</span>
      `;

      semiNote1.onpointerdown = (e) =>
        makeTune(e, semiNote1, data["cord_" + (i + 1)][1][note2].sound);
      // semiNote1.ontouchstart = (e) =>
      //   makeTune(e, semiNote1, data["cord_" + (i + 1)][1][note2].sound);

      noteDiv1.append(semiNote1);

      cord.append(noteDiv1);

      // 2
      // d
      let noteDiv2 = document.createElement("div");
      noteDiv2.className = `switch note c${i + 1}_${note3}`;
      noteDiv2.setAttribute("data-key", data["cord_" + (i + 1)][2][note3].key);
      noteDiv2.innerHTML = `<span class="notes-name">${note3.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][2][note3].key}</span>
      `;

      noteDiv2.onpointerdown = (e) =>
        makeTune(e, noteDiv2, data["cord_" + (i + 1)][2][note3].sound);
      // noteDiv2.ontouchstart = (e) =>
      //   makeTune(e, noteDiv2, data["cord_" + (i + 1)][2][note3].sound);

      // timeline
      let timeLineDiv2 = document.createElement("div");
      timeLineDiv2.className = "time-line";
      timeLineDiv2.innerHTML = `
         <div class="timeline-inner time-line-c${i + 1}_${note3}"></div>
         <div class="timeline-inner-sharp timeline-inner-sharp-right time-line-c${
           i + 1
         }_${note4}"></div>
       `;

      autoPlayTimelineInner.append(timeLineDiv2);

      //   d#
      let semiNote2 = document.createElement("div");
      semiNote2.className = `switch semi-note-right c${i + 1}_${note4}`;
      semiNote2.setAttribute("data-key", data["cord_" + (i + 1)][3][note4].key);
      semiNote2.innerHTML = `<span class="notes-name">${note4.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][3][note4].key}</span>
      `;

      semiNote2.onpointerdown = (e) =>
        makeTune(e, semiNote2, data["cord_" + (i + 1)][3][note4].sound);
      // semiNote2.ontouchstart = (e) =>
      //   makeTune(e, semiNote2, data["cord_" + (i + 1)][3][note4].sound);

      noteDiv2.append(semiNote2);

      cord.append(noteDiv2);

      // 3
      //  e
      let noteDiv3 = document.createElement("div");
      noteDiv3.className = `switch note c${i + 1}_${note5}`;
      noteDiv3.setAttribute("data-key", data["cord_" + (i + 1)][4][note5].key);
      noteDiv3.innerHTML = `<span class="notes-name">${note5.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][4][note5].key}</span>
      `;

      noteDiv3.onpointerdown = (e) =>
        makeTune(e, noteDiv3, data["cord_" + (i + 1)][4][note5].sound);
      // noteDiv3.ontouchstart = (e) =>
      //   makeTune(e, noteDiv3, data["cord_" + (i + 1)][4][note5].sound);

      // timeline
      let timeLineDiv3 = document.createElement("div");
      timeLineDiv3.className = "time-line";
      timeLineDiv3.innerHTML = `
          <div class="timeline-inner time-line-c${i + 1}_${note5}"></div>
        `;

      autoPlayTimelineInner.append(timeLineDiv3);

      cord.append(noteDiv3);

      // 4
      //  f
      let noteDiv4 = document.createElement("div");
      noteDiv4.className = `switch note c${i + 1}_${note6}`;
      noteDiv4.setAttribute("data-key", data["cord_" + (i + 1)][5][note6].key);
      noteDiv4.innerHTML = `<span class="notes-name">${note6.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][5][note6].key}</span>
      `;

      noteDiv4.onpointerdown = (e) =>
        makeTune(e, noteDiv4, data["cord_" + (i + 1)][5][note6].sound);
      // noteDiv4.ontouchstart = (e) =>
      //   makeTune(e, noteDiv4, data["cord_" + (i + 1)][5][note6].sound);

      // timeline
      let timeLineDiv4 = document.createElement("div");
      timeLineDiv4.className = "time-line";
      timeLineDiv4.innerHTML = `
          <div class="timeline-inner time-line-c${i + 1}_${note6}"></div>
          <div class="timeline-inner-sharp timeline-inner-sharp-left time-line-c${
            i + 1
          }_${note7}"></div>
        `;

      autoPlayTimelineInner.append(timeLineDiv4);

      // f#
      let semiNote3 = document.createElement("div");
      semiNote3.className = `switch semi-note-left c${i + 1}_${note7}`;
      semiNote3.setAttribute("data-key", data["cord_" + (i + 1)][6][note7].key);
      semiNote3.innerHTML = `<span class="notes-name">${note7.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][6][note7].key}</span>
      `;

      semiNote3.onpointerdown = (e) =>
        makeTune(e, semiNote3, data["cord_" + (i + 1)][6][note7].sound);
      // semiNote3.ontouchstart = (e) =>
      //   makeTune(e, semiNote3, data["cord_" + (i + 1)][6][note7].sound);

      noteDiv4.append(semiNote3);

      cord.append(noteDiv4);

      // 5
      //   g
      let noteDiv5 = document.createElement("div");
      noteDiv5.className = `switch note c${i + 1}_${note8}`;
      noteDiv5.setAttribute("data-key", data["cord_" + (i + 1)][7][note8].key);
      noteDiv5.innerHTML = `<span class="notes-name">${note8.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][7][note8].key}</span>
      `;

      noteDiv5.onpointerdown = (e) =>
        makeTune(e, noteDiv5, data["cord_" + (i + 1)][7][note8].sound);
      // noteDiv5.ontouchstart = (e) =>
      //   makeTune(e, noteDiv5, data["cord_" + (i + 1)][7][note8].sound);

      // timeline
      let timeLineDiv6 = document.createElement("div");
      timeLineDiv6.className = "time-line";
      timeLineDiv6.innerHTML = `
        <div class="timeline-inner time-line-c${i + 1}_${note8}"></div>
        <div class="timeline-inner-sharp timeline-inner-sharp-middle time-line-c${
          i + 1
        }_${note9}"></div>
      `;

      autoPlayTimelineInner.append(timeLineDiv6);

      //   g#
      let semiNote4 = document.createElement("div");
      semiNote4.className = `switch semi-note-middle c${i + 1}_${note9}`;
      semiNote4.setAttribute("data-key", data["cord_" + (i + 1)][8][note9].key);
      semiNote4.innerHTML = `<span class="notes-name">${note9.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][8][note9].key}</span>
      `;

      semiNote4.onpointerdown = (e) =>
        makeTune(e, semiNote4, data["cord_" + (i + 1)][8][note9].sound);
      // semiNote4.ontouchstart = (e) =>
      //   makeTune(e, semiNote4, data["cord_" + (i + 1)][8][note9].sound);

      noteDiv5.append(semiNote4);

      cord.append(noteDiv5);

      // 6
      //  a
      let noteDiv6 = document.createElement("div");
      noteDiv6.className = `switch note c${i + 1}_${note10}`;
      noteDiv6.setAttribute("data-key", data["cord_" + (i + 1)][9][note10].key);
      noteDiv6.innerHTML = `<span class="notes-name">${note10.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][9][note10].key}</span>
      `;

      noteDiv6.onpointerdown = (e) =>
        makeTune(e, noteDiv6, data["cord_" + (i + 1)][9][note10].sound);
      // noteDiv6.ontouchstart = (e) =>
      //   makeTune(e, noteDiv6, data["cord_" + (i + 1)][9][note10].sound);

      // timeline
      let timeLineDiv7 = document.createElement("div");
      timeLineDiv7.className = "time-line";
      timeLineDiv7.innerHTML = `
          <div class="timeline-inner timeline-inner time-line-c${
            i + 1
          }_${note10}"></div>
          <div class="timeline-inner-sharp timeline-inner-sharp-right time-line-c${
            i + 1
          }_${note11}"></div>
        `;

      autoPlayTimelineInner.append(timeLineDiv7);

      //   sa
      let semiNote5 = document.createElement("div");
      semiNote5.className = `switch semi-note-right c${i + 1}_${note11}`;
      semiNote5.setAttribute(
        "data-key",
        data["cord_" + (i + 1)][10][note11].key
      );
      semiNote5.innerHTML = `<span class="notes-name">${note11.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][10][note11].key}</span>
      `;

      semiNote5.onpointerdown = (e) =>
        makeTune(e, semiNote5, data["cord_" + (i + 1)][10][note11].sound);
      // semiNote5.ontouchstart = (e) =>
      //   makeTune(e, semiNote5, data["cord_" + (i + 1)][10][note11].sound);

      noteDiv6.append(semiNote5);

      cord.append(noteDiv6);

      // 7
      //  b
      let noteDiv7 = document.createElement("div");
      noteDiv7.className = `switch note c${i + 1}_${note12}`;
      noteDiv7.setAttribute(
        "data-key",
        data["cord_" + (i + 1)][11][note12].key
      );
      noteDiv7.innerHTML = `<span class="notes-name">${note12.replace(
        "_sharp",
        "#"
      )}</span>
      <span class="keys-name">${data["cord_" + (i + 1)][11][note12].key}</span>
      `;

      noteDiv7.onpointerdown = (e) =>
        makeTune(e, noteDiv7, data["cord_" + (i + 1)][11][note12].sound);
      // noteDiv7.ontouchstart = (e) =>
      //   makeTune(e, noteDiv7, data["cord_" + (i + 1)][11][note12].sound);

      // timeline
      let timeLineDiv8 = document.createElement("div");
      timeLineDiv8.className = "time-line";
      timeLineDiv8.innerHTML = `
        <div class="timeline-inner time-line-c${i + 1}_${note12}"></div>
      `;

      autoPlayTimelineInner.append(timeLineDiv8);

      cord.append(noteDiv7);

      allCord.append(cord);
    });

    let zoomOut = document.getElementById("zoom-out-key");
    let zoomIn = document.getElementById("zoom-in-key");
    let fullView = document.getElementById("key-full-view");
    let allNotes = piano.querySelectorAll(".note");
    let timeLine = piano.querySelectorAll(".time-line");

    let zoomCount = 42;

    let minWidth = 30;
    let maxWidth = 60;

    resizeKey();

    zoomOut.addEventListener("click", () => {
      if (zoomCount > minWidth) {
        zoomCount--;
        resizeKey();
      }
    });

    zoomIn.addEventListener("click", () => {
      if (zoomCount < maxWidth) {
        zoomCount++;
        resizeKey();
      }
    });

    function resizeKey() {
      allNotes.forEach((el, i) => {
        el.style.width = zoomCount + "px";
        el.style.minWidth = minWidth + "px";

        if (timeLine[i]) {
          timeLine[i].style.width = zoomCount + "px";
          timeLine[i].style.minWidth = minWidth + "px";
        }
      });

      allCord.style.minHeight = "200px";
      fullView.classList.remove("active");

      allCord.style.aspectRatio = 100 / 20;

      autoPlayTimeline.style.width = allCord.scrollWidth + "px";
      resizeFont();
    }

    fullView.addEventListener("click", () => {
      fullView.classList.toggle("active");

      if (fullView.classList.contains("active")) {
        allNotes.forEach((el, i) => {
          el.style.width = "auto";
          el.style.minWidth = null;

          if (timeLine[i]) {
            timeLine[i].style.width = "auto";
            timeLine[i].style.minWidth = null;
          }
        });

        allCord.style.minHeight = null;
        allCord.style.aspectRatio = 100 / 15;

        autoPlayTimeline.style.width = "100%";

        resizeFont();
      } else {
        resizeKey();
      }
    });

    function resizeFont() {
      const pianoWidth = allNotes[0].offsetWidth;
      piano.style.fontSize = pianoWidth / 3.5 + "px"; // Adjust the divisor as needed
    }

    window.addEventListener("resize", resizeFont);

    resizeFont();

    if (page_loader) {
      page_loader.remove();
    }
  });

  // Create and/or resume AudioContext on user interaction
  const initializeAudioContext = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioContext.createGain();
      gainNode.gain.value = currentVolume;
      gainNode.connect(audioContext.destination);
    } else if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  };

  document.addEventListener("keydown", initializeAudioContext);
  document.addEventListener("mousedown", initializeAudioContext);

  function makeTune(e, swt, audio) {
    if (e) {
      e.stopPropagation();
    }

    swt.classList.add("active");

    if (audio) {
      const source = audioContext.createBufferSource();
      source.buffer = audio;
      source.connect(gainNode);
      source.start(0);
    }

    swt.onpointerup = () => initialize(swt);
    swt.onpointerleave = () => initialize(swt);

    // Simulate playing a piano note
    playPushNote(swt);
  }

  function initialize(activeSwitch) {
    activeSwitch?.classList.remove("active");
  }

  let customizeKeyModal = document.getElementById("customize-key-modal");

  window.addEventListener("keydown", (e) => {
    if (!isAutoPlaying && !customizeKeyModal.classList.contains("active")) {
      if (activeKeys.has(e.key)) return;
      activeKeys.add(e.key);
      e.preventDefault();

      const noteElement = document.querySelector(
        `.switch[data-key="${e.key}"]`
      );

      if (noteElement) {
        triggerNoteOn(noteElement);
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    if (!customizeKeyModal.classList.contains("active")) {
      activeKeys.delete(e.key);
      e.preventDefault();

      const noteElement = document.querySelector(
        `.switch[data-key="${e.key}"]`
      );

      if (noteElement) {
        triggerNoteOff(noteElement);
      }
    }
  });

  function triggerNoteOn(noteElement) {
    // Your existing logic for note on
    noteElement.onpointerdown();
  }

  function triggerNoteOff(noteElement) {
    // Your existing logic for note off
    initialize(noteElement);
  }

  let submitKeyBtn = document.getElementById("submit-key-btn");
  let resetKeyBtn = document.getElementById("reset-key-btn");
  let resetSetting = document.querySelector("#reset-setting");

  submitKeyBtn.addEventListener("click", () => {
    let cordFields = document.querySelectorAll(".cord-field");

    try {
      let allInputsValue = [
        ...customizeKeyModal.querySelectorAll(".key-input-field"),
      ]
        .map((el) => el.value)
        .filter((el) => el.trim());

      document.querySelector(".repeated-error-show").innerHTML = ``;

      if (findRepeatedItems(allInputsValue).length == 0) {
        cordFields.forEach((field, i) => {
          let inputFields = field.querySelectorAll(".key-input-field");
          inputFields.forEach((input, j) => {
            pianoData[i]["cord_" + (i + 1)][j][input.name].key = input.value;
            document
              .querySelector(`.cord.c${i + 1}`)
              ?.querySelectorAll(".switch")
              [j]?.setAttribute("data-key", input.value);
          });
        });

        customizeKeyModal.classList.remove("active");
      } else {
        document.querySelector(".repeated-error-show").innerHTML = `${
          findRepeatedItems(allInputsValue).length > 1
            ? `These keys are repeated : <span class="text-base">(${findRepeatedItems(
                allInputsValue
              )})</span>`
            : `This key is repeated :  <span class="text-base">${findRepeatedItems(
                allInputsValue
              )}</span>`
        }`;
      }
    } catch (error) {
      handleKeyFlowError(error);
    }
  });

  resetKeyBtn.addEventListener("click", () => {
    customizeKeyModal.reset();
  });

  resetSetting.addEventListener("click", () => {
    location.reload();
  });

  function handleKeyFlowError(error) {
    location.reload();
  }

  // auto playing
  let autoPlaySection = document.getElementById("auto-play-section");
  let chooseSong = document.getElementById("choose-song");
  let autoPlayBtn = document.getElementById("auto-play-btn");
  let autoPlayCancelBtn = document.getElementById("auto-play-cancel-btn");

  let chosenSong;
  let timeouts = [];

  let noteDiv;
  let stayNodeDiv;
  let songTimeline = document.getElementById("song-timeline");

  function removeInnerTimeline() {
    timeLineInnerPush?.forEach((el) => {
      el.remove();
    });

    autoPlayTimelineInner.style.height = null;
    autoPlayTimelineInner.style.transform = null;
    autoPlayTimelineInner.style.transition = null;

    autoPlayTimeline.classList.remove("active");
  }

  const colors = [
    "#D1E9F6",
    "#7FA1C3",
    "#B4E380",
    "#F31559",
    "#F9E400",
    "#36BA98",
    "#9195F6",
    "#FD5D5D",
  ];

  autoPlayBtn.addEventListener("click", () => {
    chosenSong = allSongs(baseSpeed, baseCord)[chooseSong.value];
    if (chosenSong) {
      removeInnerTimeline();
      autoPlayTimeline.classList.add("active");

      if (!isPlayWithSelected) {
        allCord.classList.add("pointer-events-none");
        isAutoPlaying = true;
      }

      autoPlaySection.classList.add("playing");
      allCord.classList.add("auto-play-active");

      setTimeout(() => {
        let autoPlayTimelineHeight = autoPlayTimeline.clientHeight;
        let startTimeDelay = 2700;
        let time = startTimeDelay;
        let timelineDelay = 0;
        let timelineDuration = startTimeDelay;

        chosenSong.notes.forEach((el, i) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          let timelineDiv = document.querySelector(`.time-line-${el.octave}`);

          let timelineInner = document.createElement("div");
          // timelineInner.style.backgroundColor = randomColor;

          timelineDiv.append(timelineInner);
          timeLineInnerPush.push(timelineInner);

          timelineInner.style.height = `${
            (el.stay ? el.stay : el.duration) / 10
          }px`;

          timelineInner.style.bottom =
            autoPlayTimelineHeight + timelineDelay + "px";

          if (i == chosenSong.notes.length - 1) {
            autoPlayTimelineInner.style.height = `${
              autoPlayTimeline.getBoundingClientRect().bottom -
              timelineInner.getBoundingClientRect().top
            }px`;
          }

          timelineDuration += el.duration;
          timelineDelay += el.duration / 10;

          const timeout = setTimeout(() => {
            if (noteDiv || stayNodeDiv) {
              if (el.stay) {
                setTimeout(() => {
                  stayNodeDiv.onpointerup();
                }, el.stay);
              } else {
                noteDiv.onpointerup();
              }
            }

            if (el.stay) {
              stayNodeDiv = document.querySelector(`.${el.octave}`);
              stayNodeDiv.onpointerdown();
            } else {
              noteDiv = document.querySelector(`.${el.octave}`);
              noteDiv.onpointerdown();
            }
          }, time);

          timeouts.push(timeout);
          time += el.duration; // Accumulate time
        });

        autoPlayTimelineInner.style.transition = `transform ${timelineDuration}ms linear`;
        autoPlayTimelineInner.style.transform = "translateY(100%)";

        const finalTimeout = setTimeout(() => {
          if (noteDiv || stayNodeDiv) {
            if (stayNodeDiv) {
              stayNodeDiv.onpointerup();
            }
            noteDiv.onpointerup();
            removeInnerTimeline();
          }

          allCord.classList.remove("pointer-events-none");
          playWithAutoPlay.classList.remove("selected");
          isAutoPlaying = false;
          isPlayWithSelected = false;

          autoPlaySection.classList.remove("playing");
          allCord.classList.remove("auto-play-active");

          songTimeline.style.transition = null;
          songTimeline.style.width = "0%";
        }, time);

        timeouts.push(finalTimeout);

        if (chosenSong) {
          let timeArray = chosenSong.notes.map((el) => el.duration);
          let sum = 0;

          timeArray.forEach((el) => {
            sum += el;
          });

          songTimeline.style.width = "100%";
          songTimeline.style.transition = `all ${
            sum + startTimeDelay
          }ms linear`;
        }
      }, 500);
    }
  });

  autoPlayCancelBtn.addEventListener("click", () => {
    removeInnerTimeline();
    songTimeline.style.transition = null;
    songTimeline.style.width = "0%";

    autoPlaySection.classList.remove("playing");
    allCord.classList.remove("auto-play-active");

    allCord.classList.remove("pointer-events-none");
    playWithAutoPlay.classList.remove("selected");
    isAutoPlaying = false;
    isPlayWithSelected = false;

    // Clear all timeouts
    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts = [];

    // Ensure the current note is stopped
    if (noteDiv || stayNodeDiv) {
      if (stayNodeDiv) {
        stayNodeDiv.onpointerup();
      }
      noteDiv.onpointerup();
    }
  });

  let selectCord = document.querySelector("#select-cord");

  chooseSongSelect.addEventListener("change", (e) => {
    let selectedOption;
    let options = "<option>Select cord </option>";

    controlSpeed.value = 15;
    selectCord
      ?.querySelector("select")
      .children[0].setAttribute("selected", "");

    baseCord = baseCordValue;
    baseSpeed = baseSpeedValue;

    if (chooseSongSelect.value) {
      selectCord.classList.add("active");
      selectSpeedCord.classList.add("active");
      playWithAutoPlay.classList.add("active");
      selectedOption =
        chooseSongSelect.children[chooseSongSelect.options.selectedIndex];
      if (selectedOption) {
        let loopStart = +selectedOption.dataset.min;
        let loopEnd = +selectedOption.dataset.max;
        for (let i = loopStart; i < loopEnd + 1; i++) {
          options += `<option value="${i}">${i}</option>`;
        }
      }
    } else {
      selectCord.classList.remove("active");
      selectSpeedCord.classList.remove("active");
      playWithAutoPlay.classList.remove("active");
    }

    selectCord.querySelector("select").innerHTML = options;

    if (selectedOption && selectedOption.dataset["cord"]) {
      baseCord = +selectedOption.dataset["cord"];
      if (
        selectCord &&
        selectCord.querySelector("select").children &&
        baseCord
      ) {
        let opts = selectCord.querySelector("select").children;

        let selectedOption = [...opts].filter((el) => el.value == baseCord)[0];

        if (selectedOption) {
          selectedOption.setAttribute("selected", "");
        }
      }
    }

    if (selectedOption && selectedOption.dataset["speed"]) {
      baseSpeed = +selectedOption.dataset["speed"];
      controlSpeed.value = Math.round(
        (baseSpeedValue * (+controlSpeed.max / 2)) / baseSpeed
      );
    }
  });

  selectCord.addEventListener("change", (e) => {
    baseCord = +e.target.value;
  });

  controlSpeed.addEventListener("change", () => {
    baseSpeed = Math.floor(
      (baseSpeedValue * (+controlSpeed.max / 2)) / +controlSpeed.value
    );
  });

  playWithAutoPlay.addEventListener("click", () => {
    playWithAutoPlay.classList.toggle("selected");
    isPlayWithSelected = !isPlayWithSelected;

    if (isPlayWithSelected) {
      allCord.classList.remove("pointer-events-none");
      isAutoPlaying = false;
    } else {
      if (allCord.classList.contains("auto-play-active")) {
        isAutoPlaying = true;
        allCord.classList.add("pointer-events-none");
      }
    }
  });

  const startRecordBtn = document.getElementById("start-record-btn");
  const stopRecordBtn = document.getElementById("stop-record-btn");
  const pauseRecordBtn = document.getElementById("pause-record-btn");
  const playRecordedAudio = document.getElementById("play-recorded-audio");
  const downloadRecordBtn = document.getElementById("download-record-btn");
  const stopRecordingAudioBtn = document.getElementById(
    "stop-recording-audio-btn"
  );

  let recording = false;
  let paused = false;
  let playRecorded = false;
  let notesPlayed = [];
  let playbackTimeouts = [];
  let pauseStartTime = 0;
  let totalPauseDuration = 0;

  // Start recording
  startRecordBtn.addEventListener("click", () => {
    recording = true;
    playRecorded = false;
    paused = false;
    totalPauseDuration = 0;
    notesPlayed = [];
    startRecordBtn.classList.add("hidden");
    stopRecordBtn.classList.remove("hidden");
    pauseRecordBtn.classList.remove("hidden");
    playRecordedAudio.classList.add("hidden");
    downloadRecordBtn.classList.add("hidden");
    playRecordedAudio.classList.remove("playing");
    stopRecordingAudioBtn.classList.add("hidden");
    clearPreviousTimeouts();
  });

  // Stop recording
  stopRecordBtn.addEventListener("click", () => {
    recording = false;
    startRecordBtn.classList.remove("hidden");
    stopRecordBtn.classList.add("hidden");
    pauseRecordBtn.classList.add("hidden");
    pauseRecordBtn.classList.add("play");
    pauseRecordBtn.classList.remove("pause");
    playPauseFunc(pauseRecordBtn);
    playRecordedAudio.classList.remove("hidden");
    playRecordedAudio.classList.remove("playing");
    stopRecordingAudioBtn.classList.add("hidden");
    downloadRecordBtn.classList.remove("hidden");
  });

  stopRecordingAudioBtn.addEventListener("click", () => {
    playRecordedAudio.classList.remove("playing");
    stopRecordingAudioBtn.classList.add("hidden");
    clearPreviousTimeouts();
  });

  // Pause and resume recording
  pauseRecordBtn.addEventListener("click", () => {
    if (recording) {
      paused = true;
      pauseStartTime = Date.now();
      recording = false;
    } else if (paused) {
      const pauseEndTime = Date.now();
      totalPauseDuration += pauseEndTime - pauseStartTime;
      paused = false;
      recording = true;
    }
  });

  function playPushNote(note) {
    if (recording) {
      const time = Date.now() - totalPauseDuration;
      const noteData = { note, time };
      notesPlayed.push(noteData);
    }
  }

  // Play a note (trigger)
  function playNote(note) {
    triggerNoteOn(note); // Trigger the note on
  }

  function clearPreviousTimeouts() {
    if (playbackTimeouts.length > 0) {
      playbackTimeouts.forEach((timeout) => clearTimeout(timeout));
      playbackTimeouts = [];
    }
    notesPlayed?.forEach((noteData) => {
      triggerNoteOff(noteData.note);
    });
  }

  // Playback functionality
  function playRecording() {
    if (notesPlayed.length === 0 || recording) return;
    playRecordedAudio.classList.add("playing");
    stopRecordingAudioBtn.classList.remove("hidden");
    // Clear any previous timeouts
    clearPreviousTimeouts();

    // Object to keep track of active notes
    let activeNotes = {};

    // Loop through notes and schedule playback
    notesPlayed.forEach((noteData, i) => {
      const delay = noteData.time - notesPlayed[0].time;

      const nextNoteTime = notesPlayed[i + 1]?.time || noteData.time + 500;
      const noteDuration = nextNoteTime - noteData.time;

      // Play the note after the appropriate delay
      const playbackTimeout = setTimeout(() => {
        playNote(noteData.note);
        activeNotes[noteData.note] = true;

        // Turn off the current note after its own duration has passed
        const noteOffTimeout = setTimeout(() => {
          if (activeNotes[noteData.note]) {
            triggerNoteOff(noteData.note);
            delete activeNotes[noteData.note];
          }
        }, noteDuration);

        playbackTimeouts.push(noteOffTimeout);

        if (i === notesPlayed.length - 1) {
          setTimeout(() => {
            triggerNoteOff(notesPlayed[notesPlayed.length - 1]?.note);
            playRecordedAudio.classList.remove("playing");
            stopRecordingAudioBtn.classList.add("hidden");
          }, 1000);
        }
      }, delay);

      playbackTimeouts.push(playbackTimeout);
    });
  }

  downloadRecordBtn.addEventListener("click", () => {
    if (notesPlayed.length === 0) return;

    const dataStr = JSON.stringify(notesPlayed, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  // Attach event listener for playback button
  playRecordedAudio.addEventListener("click", () => {
    playRecording();
  });
});
