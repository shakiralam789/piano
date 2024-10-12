let playPauseBtn = document.querySelector("#pause-record-btn");

if (playPauseBtn) {
  playPauseFunc(playPauseBtn);
  playPauseBtn?.addEventListener("click", () => {
    playPauseBtn.classList.toggle("play");
    playPauseBtn.classList.toggle("pause");

    playPauseFunc(playPauseBtn);
  });

  function playPauseFunc(btn) {
    let svg = btn.querySelector(".icon");

    if (btn?.classList.contains("play")) {
      if (svg) {
        svg
          .querySelector("path")
          .setAttribute(
            "d",
            "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
          );
      }
    } else {
      if (svg) {
        svg
          .querySelector("path")
          .setAttribute(
            "d",
            "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
          );
      }
    }
  }
}
