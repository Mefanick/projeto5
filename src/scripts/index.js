const rootModal = document.querySelector(".root__modal");
const modalContainer = document.querySelector("#modalContainer");
const buttonTop = document.querySelector(".register__button");
const buttonBot = document.querySelector(".FAQ__button--register")
const closeButton = document.querySelector(".modal__button--close");


buttonTop.addEventListener("click", () => {
    modalContainer.showModal();
});
buttonBot.addEventListener("click", () => {
    modalContainer.showModal();
});
closeButton.addEventListener("click", () => {modalContainer.close()});

0