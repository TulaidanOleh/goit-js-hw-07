import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryCreating = (galleryItems) => {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item"> 
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
            data-source="${original}" alt="${description}"/>
        </a>
    </div>`
    )
    .join("");
};

gallery.insertAdjacentHTML("beforeend", galleryCreating(galleryItems));

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  let modalWindow = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => addEcapeListener(),
      onClose: () => removeEscapeListener(),
    }
  );

  function addEcapeListener() {
    window.addEventListener("keydown", onEscKeyPress);
    console.log("addEcapeListener");
  }

  function removeEscapeListener() {
    window.removeEventListener("keydown", onEscKeyPress);
    console.log("removeEscapeListener");
  }

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      modalWindow.close();
    }
  }

  modalWindow.show();
}
