//
// Берём массив объектов с данными карточек работ из
// JSON файла (эмуляция получения данных с backend через REST API запрос)
let response = await fetch("/data/works.json");
let works = await response.json();
//
// Формирование одной карточки по данным из объекта
// In: thing - объект с данными одной карточки
// Out: divCard - handler сформированной карточки в документе
function createCard (thing) {

    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.addEventListener("click", () => {
        openPopup(thing.id);
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
function deployCards (works) {
    let cards = document.querySelector(".works_gallery");
    for (let thing of works) {
        let divCard = createCard(thing);
        cards.appendChild(divCard);
    }
}
// Заполняем поле карточками
deployCards(works);
//
function openPopup(id) {
    console.log(id + ' activated');
}