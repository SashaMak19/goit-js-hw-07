import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onGalleryClick);

const arrLinks = document.querySelectorAll("a");
arrLinks.forEach((link) => {
  link.style.boxShadow = "none";
});

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox("ul.gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
