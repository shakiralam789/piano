// create note
window.addEventListener("DOMContentLoaded", () => {
  let baseSpeedValue = 300;
  let baseCordValue = 3;
  let selectSpeedCord = document.querySelector("#select-speed-cord");
  let controlSpeed = document.getElementById("control-speed");

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

  let count = 0;

  async function preloadAudio() {
    for (let i = 0; i < pianoData.length; i++) {
      const el = pianoData[i]["cord_" + (i + 1)];
      for (let j = 0; j < el.length; j++) {
        let nt = el[j];
        const note = Object.keys(nt)[0];
        const soundFile = `./src/sounds/c${i + 1}/${note.replace(
          "_sharp",
          "s"
        )}.wav`;

        try {
          let response = await fetch(soundFile);
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${soundFile}`);
          }
          let arrayBuffer = await response.arrayBuffer();
          nt[note].sound = await audioContext.decodeAudioData(arrayBuffer);

          count++;
          if (loaderVar) {
            loaderVar.style.width = `${
              (count / (pianoData.length * 12)) * 100
            }%`;
          }
        } catch (error) {
          console.error("Error loading sound:", error);
        }
      }
    }
  }

  preloadAudio().then(() => {
    pianoData.forEach((data, i) => {
      let cord = document.createElement("div");
      cord.className = `cord c${i + 1}`;

      // 1
      //   ra
      let noteDiv1 = document.createElement("div");
      noteDiv1.className = `switch note c${i + 1}_${note1}`;
      noteDiv1.setAttribute("data-key", data["cord_" + (i + 1)][0][note1].key);
      noteDiv1.innerHTML = `<span class="notes-name">${note1.replace(
        "_sharp",
        "#"
      )}${i + 1}</span>`;

      noteDiv1.onmousedown = (e) =>
        makeTune(e, noteDiv1, data["cord_" + (i + 1)][0][note1].sound);

      //   soft ga
      let semiNote1 = document.createElement("div");
      semiNote1.className = `switch semi-note-left c${i + 1}_${note2}`;
      semiNote1.setAttribute("data-key", data["cord_" + (i + 1)][1][note2].key);
      semiNote1.innerHTML = `<span class="notes-name">${note2.replace(
        "_sharp",
        "#"
      )}</span>`;

      semiNote1.onmousedown = (e) =>
        makeTune(e, semiNote1, data["cord_" + (i + 1)][1][note2].sound);

      noteDiv1.append(semiNote1);

      cord.append(noteDiv1);

      // 2
      //   ga
      let noteDiv2 = document.createElement("div");
      noteDiv2.className = `switch note c${i + 1}_${note3}`;
      noteDiv2.setAttribute("data-key", data["cord_" + (i + 1)][2][note3].key);
      noteDiv2.innerHTML = `<span class="notes-name">${note3.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv2.onmousedown = (e) =>
        makeTune(e, noteDiv2, data["cord_" + (i + 1)][2][note3].sound);

      //   ma
      let semiNote2 = document.createElement("div");
      semiNote2.className = `switch semi-note-right c${i + 1}_${note4}`;
      semiNote2.setAttribute("data-key", data["cord_" + (i + 1)][3][note4].key);
      semiNote2.innerHTML = `<span class="notes-name">${note4.replace(
        "_sharp",
        "#"
      )}</span>`;

      semiNote2.onmousedown = (e) =>
        makeTune(e, semiNote2, data["cord_" + (i + 1)][3][note4].sound);

      noteDiv2.append(semiNote2);

      cord.append(noteDiv2);

      // 3
      //   sharp ma
      let noteDiv3 = document.createElement("div");
      noteDiv3.className = `switch note c${i + 1}_${note5}`;
      noteDiv3.setAttribute("data-key", data["cord_" + (i + 1)][4][note5].key);
      noteDiv3.innerHTML = `<span class="notes-name">${note5.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv3.onmousedown = (e) =>
        makeTune(e, noteDiv3, data["cord_" + (i + 1)][4][note5].sound);

      cord.append(noteDiv3);

      // 4
      //   pa
      let noteDiv4 = document.createElement("div");
      noteDiv4.className = `switch note c${i + 1}_${note6}`;
      noteDiv4.setAttribute("data-key", data["cord_" + (i + 1)][5][note6].key);
      noteDiv4.innerHTML = `<span class="notes-name">${note6.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv4.onmousedown = (e) =>
        makeTune(e, noteDiv4, data["cord_" + (i + 1)][5][note6].sound);

      //   soft dha
      let semiNote3 = document.createElement("div");
      semiNote3.className = `switch semi-note-left c${i + 1}_${note7}`;
      semiNote3.setAttribute("data-key", data["cord_" + (i + 1)][6][note7].key);
      semiNote3.innerHTML = `<span class="notes-name">${note7.replace(
        "_sharp",
        "#"
      )}</span>`;

      semiNote3.onmousedown = (e) =>
        makeTune(e, semiNote3, data["cord_" + (i + 1)][6][note7].sound);

      noteDiv4.append(semiNote3);

      cord.append(noteDiv4);

      // 5
      //   dha
      let noteDiv5 = document.createElement("div");
      noteDiv5.className = `switch note c${i + 1}_${note8}`;
      noteDiv5.setAttribute("data-key", data["cord_" + (i + 1)][7][note8].key);
      noteDiv5.innerHTML = `<span class="notes-name">${note8.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv5.onmousedown = (e) =>
        makeTune(e, noteDiv5, data["cord_" + (i + 1)][7][note8].sound);

      //   soft ni
      let semiNote4 = document.createElement("div");
      semiNote4.className = `switch semi-note-middle c${i + 1}_${note9}`;
      semiNote4.setAttribute("data-key", data["cord_" + (i + 1)][8][note9].key);
      semiNote4.innerHTML = `<span class="notes-name">${note9.replace(
        "_sharp",
        "#"
      )}</span>`;

      semiNote4.onmousedown = (e) =>
        makeTune(e, semiNote4, data["cord_" + (i + 1)][8][note9].sound);

      noteDiv5.append(semiNote4);

      cord.append(noteDiv5);

      // 6
      //   ni
      let noteDiv6 = document.createElement("div");
      noteDiv6.className = `switch note c${i + 1}_${note10}`;
      noteDiv6.setAttribute("data-key", data["cord_" + (i + 1)][9][note10].key);
      noteDiv6.innerHTML = `<span class="notes-name">${note10.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv6.onmousedown = (e) =>
        makeTune(e, noteDiv6, data["cord_" + (i + 1)][9][note10].sound);

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
      )}</span>`;

      semiNote5.onmousedown = (e) =>
        makeTune(e, semiNote5, data["cord_" + (i + 1)][10][note11].sound);

      noteDiv6.append(semiNote5);

      cord.append(noteDiv6);

      // 7
      //   soft ra
      let noteDiv7 = document.createElement("div");
      noteDiv7.className = `switch note c${i + 1}_${note12}`;
      noteDiv7.setAttribute(
        "data-key",
        data["cord_" + (i + 1)][11][note12].key
      );
      noteDiv7.innerHTML = `<span class="notes-name">${note12.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv7.onmousedown = (e) =>
        makeTune(e, noteDiv7, data["cord_" + (i + 1)][11][note12].sound);

      cord.append(noteDiv7);

      allCord.append(cord);
    });

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

    swt.onmouseup = () => initialize(swt);
  }

  function initialize(activeSwitch) {
    activeSwitch?.classList.remove("active");
  }

  let activeScale = +document.querySelector(".scale-change-header.active")
    .dataset["scale"];

  tabContext();

  anyToggle.action = ({ thisHeader }) => {
    if (thisHeader.classList.contains("scale-change-header")) {
      activeScale = thisHeader.dataset["scale"];
      tabContext();
    }
  };

  function tabContext() {
    let cordDiv = document.querySelector(`.cord.c${activeScale}`);
    if (cordDiv) {
      cordDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    }
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
    noteElement.onmousedown();
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
  let songTimeline = document.getElementById("song-timeline");

  autoPlayBtn.addEventListener("click", () => {
    chosenSong = allSongs(baseSpeed, baseCord)[chooseSong.value];
    if (chosenSong && !isAutoPlaying) {
      allCord.classList.add("pointer-events-none");

      autoPlaySection.classList.add("playing");
      isAutoPlaying = true;

      let time = 0;

      chosenSong.notes.forEach((el) => {
        const timeout = setTimeout(() => {
          if (noteDiv) {
            noteDiv.onmouseup();
          }

          noteDiv = document.querySelector(`.${el.octave}`);
          noteDiv.onmousedown();
        }, time);

        timeouts.push(timeout);
        time += el.duration; // Accumulate time
      });

      const finalTimeout = setTimeout(() => {
        if (noteDiv) {
          noteDiv.onmouseup();
        }

        autoPlaySection.classList.remove("playing");
        allCord.classList.remove("pointer-events-none");
        isAutoPlaying = false;

        songTimeline.style.transition = null;
        songTimeline.style.width = "0%";
      }, time);

      timeouts.push(finalTimeout);
    }

    if (chosenSong) {
      let timeArray = chosenSong.notes.map((el) => el.duration);
      let sum = 0;

      timeArray.forEach((el) => {
        sum += el;
      });

      songTimeline.style.width = "100%";
      songTimeline.style.transition = `all ${sum}ms linear`;
    }
  });

  autoPlayCancelBtn.addEventListener("click", () => {
    songTimeline.style.transition = null;
    songTimeline.style.width = "0%";

    autoPlaySection.classList.remove("playing");
    allCord.classList.remove("pointer-events-none");
    isAutoPlaying = false;

    // Clear all timeouts
    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts = [];

    // Ensure the current note is stopped
    if (noteDiv) {
      noteDiv.onmouseup();
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
      controlSpeed.value = Math.round((baseSpeedValue * (+controlSpeed.max / 2)) / baseSpeed) ;
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
});
