// model functionality
const model = document.querySelector("#model");
const modelClose = document.querySelector("#model_close i");
const modalBtn = document.querySelectorAll("#modalBtn");

modalBtn.forEach((item) => {
      item.addEventListener("click", () => {
            model.classList.add("active_model")
      })
})

modelClose.addEventListener("click", () => {
      model.classList.remove("active_model")
});