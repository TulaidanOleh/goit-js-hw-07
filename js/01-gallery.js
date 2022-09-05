import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryImg = galleryItems
  .map((item) => `<li><img src=${item.preview} alt="${item.description}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", `<ul>${galleryImg}</ul>`);

gallery.addEventListener("click", openModal);

function openModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${galleryItems[0].original}" width="1280" height="600">
`);

  instance.show();
  console.log(event);
}
