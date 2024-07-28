// create note

window.addEventListener("load", () => {
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

        try {
          let response = await fetch(
            `./src/sounds/c${i + 1}/${Object.keys(nt)[0].replace(
              "_sharp",
              "s"
            )}.wav`
          );
          let arrayBuffer = await response.arrayBuffer();

          nt[Object.keys(nt)[0]].sound = await audioContext.decodeAudioData(
            arrayBuffer
          );

          count++

          loaderVar.style.width = `${(count / (pianoData.length*12)) * 100}%`;
          
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
      noteDiv1.className = `switch note`;
      noteDiv1.setAttribute("data-key", data["cord_" + (i + 1)][0][note1].key);
      noteDiv1.innerHTML = `<span class="notes-name">${note1.replace(
        "_sharp",
        "#"
      )}${i + 1}</span>`;

      noteDiv1.onmousedown = (e) =>
        makeTune(e, noteDiv1, data["cord_" + (i + 1)][0][note1].sound);

      //   soft ga
      let semiNote1 = document.createElement("div");
      semiNote1.className = `switch semi-note-left`;
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
      noteDiv2.className = `switch note`;
      noteDiv2.setAttribute("data-key", data["cord_" + (i + 1)][2][note3].key);
      noteDiv2.innerHTML = `<span class="notes-name">${note3.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv2.onmousedown = (e) =>
        makeTune(e, noteDiv2, data["cord_" + (i + 1)][2][note3].sound);

      //   ma
      let semiNote2 = document.createElement("div");
      semiNote2.className = `switch semi-note-right`;
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
      noteDiv3.className = `switch note`;
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
      noteDiv4.className = `switch note`;
      noteDiv4.setAttribute("data-key", data["cord_" + (i + 1)][5][note6].key);
      noteDiv4.innerHTML = `<span class="notes-name">${note6.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv4.onmousedown = (e) =>
        makeTune(e, noteDiv4, data["cord_" + (i + 1)][5][note6].sound);

      //   soft dha
      let semiNote3 = document.createElement("div");
      semiNote3.className = `switch semi-note-left`;
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
      noteDiv5.className = `switch note`;
      noteDiv5.setAttribute("data-key", data["cord_" + (i + 1)][7][note8].key);
      noteDiv5.innerHTML = `<span class="notes-name">${note8.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv5.onmousedown = (e) =>
        makeTune(e, noteDiv5, data["cord_" + (i + 1)][7][note8].sound);

      //   soft ni
      let semiNote4 = document.createElement("div");
      semiNote4.className = `switch semi-note-middle`;
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
      noteDiv6.className = `switch note`;
      noteDiv6.setAttribute("data-key", data["cord_" + (i + 1)][9][note10].key);
      noteDiv6.innerHTML = `<span class="notes-name">${note10.replace(
        "_sharp",
        "#"
      )}</span>`;

      noteDiv6.onmousedown = (e) =>
        makeTune(e, noteDiv6, data["cord_" + (i + 1)][9][note10].sound);

      //   sa
      let semiNote5 = document.createElement("div");
      semiNote5.className = `switch semi-note-right`;
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
      noteDiv7.className = `switch note`;
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

    if(page_loader){
      page_loader.remove();
    }

  });

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

    swt.onmouseup = function () {
      initialize(swt);
    };
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
    if (!customizeKeyModal.classList.contains("active")) {
      if (activeKeys.has(e.key)) return; // Prevent repeated keydown events
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
});
