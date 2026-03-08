// Search data
const searchData = [
    { name: 'document.getElementById()', desc: 'Знайти елемент по id', section: 'dom-select', cat: 'DOM' },
    { name: 'document.querySelector()', desc: 'Знайти перший елемент по CSS-селектору', section: 'dom-select', cat: 'DOM' },
    { name: 'document.querySelectorAll()', desc: 'Знайти всі елементи по CSS-селектору', section: 'dom-select', cat: 'DOM' },
    { name: 'element.closest()', desc: 'Знайти найближчого батька', section: 'dom-select', cat: 'DOM' },
    { name: 'element.textContent', desc: 'Змінити або прочитати текст', section: 'dom-change', cat: 'DOM' },
    { name: 'element.innerHTML', desc: 'Змінити HTML вміст елемента', section: 'dom-change', cat: 'DOM' },
    { name: 'element.setAttribute()', desc: 'Встановити атрибут елемента', section: 'dom-change', cat: 'DOM' },
    { name: 'element.value', desc: 'Значення input поля', section: 'dom-change', cat: 'DOM' },
    { name: 'document.createElement()', desc: 'Створити новий HTML елемент', section: 'dom-create', cat: 'DOM' },
    { name: 'element.remove()', desc: 'Видалити елемент', section: 'dom-create', cat: 'DOM' },
    { name: 'element.classList', desc: 'Додати, видалити, переключити клас', section: 'dom-style', cat: 'DOM' },
    { name: 'element.style', desc: 'Змінити CSS стиль напряму', section: 'dom-style', cat: 'DOM' },
    { name: 'addEventListener()', desc: 'Підписатись на подію', section: 'events-basic', cat: 'події' },
    { name: 'event.target', desc: 'Елемент на який натиснули', section: 'events-basic', cat: 'події' },
    { name: 'event.preventDefault()', desc: 'Скасувати стандартну поведінку браузера', section: 'events-basic', cat: 'події' },
    { name: 'click / dblclick', desc: 'події кліку миші', section: 'events-types', cat: 'події' },
    { name: 'keydown / keyup', desc: 'події клавіатури', section: 'events-types', cat: 'події' },
    { name: 'input / change / submit', desc: 'події форм', section: 'events-types', cat: 'події' },
    { name: 'DOMContentLoaded / scroll', desc: 'події сторінки', section: 'events-types', cat: 'події' },
    { name: 'const', desc: 'Змінна яку не можна перевизначити', section: 'vars', cat: 'Змінні' },
    { name: 'let', desc: 'Змінна яку можна перевизначити', section: 'vars', cat: 'Змінні' },
    { name: 'template literals', desc: 'Вставляти змінні в рядок через ${}', section: 'vars', cat: 'Змінні' },
    { name: 'string / number / boolean', desc: 'Основні типи даних', section: 'types', cat: 'Типи' },
    { name: 'typeof', desc: 'Перевірити тип змінної', section: 'types', cat: 'Типи' },
    { name: 'if / else', desc: 'Умовний оператор', section: 'conditions', cat: 'Умови' },
    { name: 'тернарний оператор', desc: 'Коротка форма if/else', section: 'conditions', cat: 'Умови' },
    { name: 'for', desc: 'Цикл з лічильником', section: 'loops', cat: 'Цикли' },
    { name: 'for...of', desc: 'Зручний перебір масиву', section: 'loops', cat: 'Цикли' },
    { name: 'function', desc: 'Оголошення функції', section: 'functions', cat: 'Функції' },
    { name: 'setTimeout / setInterval', desc: 'Затримка і повторення коду', section: 'functions', cat: 'Функції' },
    { name: 'arrow function =>', desc: 'Коротший запис функції', section: 'arrow', cat: 'Функції' },
    { name: '.map()', desc: 'Перетворити кожен елемент масиву', section: 'array-methods', cat: 'Масиви' },
    { name: '.filter()', desc: 'Відфільтрувати елементи', section: 'array-methods', cat: 'Масиви' },
    { name: '.find()', desc: 'Знайти перший елемент по умові', section: 'array-methods', cat: 'Масиви' },
    { name: '.push() .pop()', desc: 'Додавати і видаляти елементи', section: 'array-methods', cat: 'Масиви' },
    { name: '.forEach()', desc: 'Пройтись по кожному елементу', section: 'array-methods', cat: 'Масиви' },
    { name: '.includes() .some() .every()', desc: 'Перевірити наявність елементів', section: 'array-methods', cat: 'Масиви' },
    { name: 'деструктуризація', desc: 'Витягти значення з обєкта або масиву', section: 'objects', cat: 'Обєкти' },
    { name: '.toUpperCase() .toLowerCase()', desc: 'Змінити регістр рядка', section: 'strings', cat: 'Рядки' },
    { name: '.trim() .replace() .split()', desc: 'Обробка рядків', section: 'strings', cat: 'Рядки' },
    { name: 'fetch()', desc: 'Зробити запит до API', section: 'fetch', cat: 'API' },
    { name: 'async / await', desc: 'Асинхронний код зручно', section: 'async', cat: 'Async' },
    { name: 'Promise .then() .catch()', desc: 'Обіцянка результату', section: 'promise', cat: 'Async' },
    { name: 'localStorage', desc: 'Зберігати дані в браузері', section: 'localstorage', cat: 'Браузер' },
    { name: 'console.log / error / table', desc: 'Вивід в консоль', section: 'console', cat: 'Браузер' },
    { name: 'window.innerWidth / scrollY', desc: 'Властивості вікна браузера', section: 'window', cat: 'Браузер' },
    { name: 'form submit / reset', desc: 'Обробка форм', section: 'forms', cat: 'Форми' },
]

function showSection(id) {
    document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active') })
    var el = document.getElementById('section-' + id)
    if (el) el.classList.add('active')
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(function (n) { n.classList.remove('active') })
    document.querySelectorAll('[data-section="' + id + '"]').forEach(function (n) { n.classList.add('active') })
    window.scrollTo(0, 0)
    document.getElementById('searchResults').classList.remove('active')
    document.getElementById('searchInput').value = ''
}

function toggleCard(card) {
    card.classList.toggle('open')
}

// Nav items
document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(function (item) {
    item.addEventListener('click', function () { showSection(item.dataset.section) })
})

// Search
var searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', function () {
    var q = searchInput.value.toLowerCase().trim()

    if (!q) {
        document.getElementById('searchResults').classList.remove('active')
        var active = document.querySelector('.nav-item.active')
        if (active) showSection(active.dataset.section)
        else showSection('home')
        return
    }

    var results = searchData.filter(function (item) {
        return item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    })

    document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active') })
    var sr = document.getElementById('searchResults')
    sr.classList.add('active')

    var desc = document.getElementById('searchDesc')
    var list = document.getElementById('searchList')
    desc.textContent = results.length ? 'Знайдено: ' + results.length : 'Нічого не знайдено'

    list.innerHTML = results.map(function (r) {
        return '<div class="search-result-item" onclick="showSection(\'' + r.section + '\')">' +
            '<div class="search-result-name">' + r.name + '</div>' +
            '<div class="search-result-desc">' + r.desc + '</div>' +
            '<div class="search-result-cat">' + r.cat + '</div>' +
            '</div>'
    }).join('')
})

// Register Service Worker (PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
}