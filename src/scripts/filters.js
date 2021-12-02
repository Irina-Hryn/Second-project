


const movies = [];
const htmlElems = []; // добавить в HTML контейнер для вывода //фильмов 5 штук на экран
const requestURLMovie = 'https://wowmeup.pp.ua/movie?page=1';// (variable for fetch request Movie) = https://wowmeup.pp.ua/movie
const BtnLeft = document.querySelector('.BtnLeft');
const BtnRight = document.querySelector('.BtnRight');
const movieOnPage = 5; //количество картинок фильмов на экране/страничке
let numbersPage = 0; // количество страниц
let currentPage = 1; // номер страницы
const movieContainer = document.querySelector('.container') // контейнер где хранятся все фильмы
const movieElement = document.createElement('img'); // создаем тег img

function getMovies() {
    return fetch(requestURLMovie)
        .then(response => response.json())
        .then((data)  => data.movies.forEach((obj) => movies.push(obj)))
        .catch(error => console.log(error))
}
getMovies().then (() => console.log(movies))

function creatMovie(item) {// вывели на страничку пять фильмов
    if (!movies) {
        return;
    }
    for (let i = 0; i < movieOnPage; i++) {
        movieElement.src = movies[i];
        htmlElems.push(movieElement);
    }
}
creatMovie() // вывели на страничку пять фильмов


const films = document.querySelectorAll('.films')
const naw = document.querySelector('nav');
naw.addEventListener('click', (event )=> {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass)
    movies.forEach((element) =>{
        if(element.genre_ids[0] === films.values() ){
            console.log('4242')
        }else {
            console.log('arr')
        }
    })
})
