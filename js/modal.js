(() => {
  const modal = document.querySelector("[data-modal]"),
    openModalBtn = document.querySelector("[data-modal-open]"),
    closeModalBtn = document.querySelectorAll("[data-modal-close]");

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.forEach(e => e.addEventListener("click", closeModal));
  modal.addEventListener("click", closeModal);

  function closeModal({x, y, srcElement}) {
    if (this != modal || this == srcElement) {
      modal.style.transformOrigin = x + "px " + y + "px";
      modal.classList.add("is-hidden");
    }
  }

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }
  function openModal({x, y}) {
    // const {width, height} = window.visualViewport;
    modal.style.transformOrigin = x + "px " + y + "px";
    modal.classList.remove("is-hidden");
  }
})();

/*
  function openModal() {
    const { left, top, width, height } = (bcr =
        openModalBtn.getBoundingClientRect()),
      transformMatrix = [
        viewport.width / width,
        0,
        0,
        viewport.height / height,
        -left,
        -top,
      ];
    ["left", "top", "width", "height"].forEach((k) => {
      modal.style[k] = bcr[k] + "px";
    });
    modal.classList.remove("is-hidden");
    modal.style.transform = `matrix(${transformMatrix})`;
  }
  function openModal() {
    const { x, y, width, height } = openModalBtn.getBoundingClientRect(),
      transformMatrix = [
        width / viewport.width,
        0,
        0,
        height / viewport.height,
        x,
        y,
      ];
    modal.style.transition = "none";
    modal.style.transform = `matrix(${transformMatrix})`;
    modal.offsetHeight; //https://stackoverflow.com/a/16575811
    modal.style.transition = "";
    modal.classList.remove("is-hidden");
    modal.style.transform = "";
  }

*/
