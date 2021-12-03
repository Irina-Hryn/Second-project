const movies = [];
// new
const filteredFilms = []
const adultFilms = []
const budgetFilms = []


//
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
        .then((data) => {
            console.log('data: ', data)

            data.movies.forEach((obj) => movies.push(obj))
        })
        .catch(error => console.log(error))
}

getMovies().then(() => console.log(movies))

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
const adult = document.querySelector('.adult');
const btnFilter = document.querySelector('.btnFilter');
const minNumberBudget = document.querySelector('.minNumberBudget');
const maxNumberBudget = document.querySelector('.maxNumberBudget');


naw.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];
    // li.style.color = 'red'
    console.log(filterClass)
    movies.forEach((element) => {

        if (element.genre_ids.includes(+event.target.id)) {
            filteredFilms.push(element)
        }
    })
    console.log('filteredFilm', filteredFilms)
})

adult.addEventListener('click', (event) => {
    filteredFilms.forEach((item) => {
        if (item.adult === true) {
            adultFilms.push(item)
            console.log(adultFilms)
        }
    })
    console.log('adultFilm', adultFilms)
})




let minBudget = minNumberBudget.value;
let maxBudget = maxNumberBudget.value;


const getBudget = (min, max) => {
    filteredFilms.forEach((el) => {
        if (el.budget >= min && el.budget <= max ){
            budgetFilms.push(el)

        }
    })
}


btnFilter.addEventListener('click', (el) => {
    // debugger
    // console.log()
    console.log(maxBudget)
    console.log(minBudget)
    getBudget()


    console.log(budgetFilms)
})