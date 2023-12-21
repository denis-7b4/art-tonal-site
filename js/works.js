//
// Берём массив объектов с данными карточек работ из
// JSON файла (эмуляция получения данных с backend через REST API запрос)
let response = await fetch("/data/works.json");
let works = await response.json();
//
// Формирование одной карточки по данным из объекта
// In: thing - объект с данными одной карточки
// Out: divCard - handler сформированной карточки в документе
function createCard(thing) {
  let divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.addEventListener("click", () => {
    openPopup(thing);
  });

  let img = document.createElement("img");
  img.src = thing.image;
  img.alt = thing.title;
  img.title = thing.title;
  divCard.appendChild(img);

  return divCard;
}
// Заполнение поля карточками работ
// In: works - массив объектов с данными карточек
// Out: none
function deployCards(works) {
  let cards = document.querySelector(".works_gallery");
  for (let thing of works) {
    let divCard = createCard(thing);
    cards.appendChild(divCard);
  }
}
// Заполняем поле карточками
deployCards(works);
//
//
const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupTitle = document.querySelector(".popup_title").querySelector("h3");
const popupSidebar = document.querySelector(".popup_sidebar");
const bigImg = document.querySelector(".big_img");
let divGallery;
let galleryBigImage;

function openPopup(thing) {
  fillMiniGallery(thing);
  popup.classList.add("popup_open");
  body.classList.add("lock");
}
// popup.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   popup.classList.remove("popup_open");
  //   body.classList.remove("lock");
  //   divGallery.remove();
  // });
  // ЗАТЕМНЕНИЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function fillMiniGallery(thing) {
  let gallery = thing.gallery;
  divGallery = document.createElement("div");
  divGallery.id = "gallery";
  popupSidebar.appendChild(divGallery);
  galleryBigImage = document.createElement("img");
  galleryBigImage.id = "big_image";
  bigImg.appendChild(galleryBigImage);
  for (let thumb of gallery) {
    let divThumb = document.createElement("div");
    divThumb.className = "thumb";
    let imgThumb = document.createElement("img");
    imgThumb.src = thumb.img;
    imgThumb.alt = thumb.title;
    imgThumb.title = thumb.title;
    divThumb.appendChild(imgThumb);
    divGallery.appendChild(divThumb);
    divThumb.addEventListener("click", (e) => {
      e.preventDefault();
      popupTitle.textContent = thing.title + '. ' + thumb.title + '.';
      galleryBigImage.src = thumb.img_big;
    })
  }
  document.getElementById("gallery").firstElementChild.click();
}
