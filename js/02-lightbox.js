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

gallery.insertAdjacentHTML("beforeend", galleryCreating(galleryItems));
let lightbox = new SimpleLightbox(".gallery a", {
  captionType: `attr`,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
