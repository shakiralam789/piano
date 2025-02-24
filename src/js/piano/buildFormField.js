let formField = document.querySelector("#form-field");

let formFieldTemp = (title, index) => {
  return `
        <div>
          <h3 class="font-medium text-gray-300 text-sm border-b border-b-gray-500 pb-3 2xl:text-base mb-4">${Object.keys(title)[0].replace('_',' ')}</h3>
            <div class="cord-field grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-x-1.5 gap-y-4">
               ${notes
                 .map(
                   (note, j) => `
                  <div>
                    <label class="key-label mb-2" for="">${note.replace(
                      "_sharp",
                      "#"
                    )}</label>
                    <input name="${note}" value="${
                     title['cord_'+(index+1)][j][note].key
                   }" class="key-input-field key-input" type="text">
                  </div>
            `
                 )
                 .join("")}
            </div>
        </div>
        `;
};

let keyOpenModal = document.getElementById("key-open-modal");
keyOpenModal.addEventListener("mousedown", () => {
  try {

    let totalField = "";

    pianoData.forEach((data, i) => {
      totalField += formFieldTemp(data, i);
    });

    formField.innerHTML = totalField;
  } catch (error) {
    handleKeyFlowError();
  }
});
