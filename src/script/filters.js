// console.log(constants.movies)
//
// domElement.nav.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'LI') {
//         return false
//     }
//     constants.filteredFilms = []
//     let filterClass = event.target.dataset['f'];
//     console.log('jhgfds', filterClass)
//     constants.movies.forEach((element) => {
//
//         if (element.genre_ids.includes(+event.target.id)) {
//             constants.filteredFilms.push(element)
//         }
//     })
//     console.log('filteredFilm', constants.filteredFilms)
// })
//
// domElement.adult.addEventListener('click', (event) => {
//     constants.filteredFilms.forEach((item) => {
//         if (item.adult === true) {
//             constants.adultFilms.push(item)
//             console.log(constants.adultFilms)
//         }
//     })
//     console.log('adultFilm', constants.adultFilms)
// })
//
// // variable.minBudget = domElement.minNumberBudget.value;
// // variable.maxBudget = domElement.maxNumberBudget.value;
// //
// // const getBudget = (min, max) => {
// //     constants.filteredFilms.forEach((el) => {
// //         if (el.budget >= min && el.budget <= max ){
// //             constants.budgetFilms.push(el)
// //         }
// //     })
// // }
// // domElement.btnFilter.addEventListener('click', (el) => {
// //     // debugger
// //     // console.log()
// //     console.log(variable.maxBudget)
// //     console.log(variable.minBudget)
// //     getBudget()
// //     console.log(constants.budgetFilms)
// // })
//
// const getFilmByID = () => {
//     // debugger
//     // constants.movies.forEach((el) => {
//     //     if (el.id === +domElement.filmId.value) {
//     //         console.log('el.id', el.id)
//     //         constants.filteredFilms.push(el)
//     //     }
//     // })
//     // console.log(constants.filteredFilms)
//
//     if (constants.filteredFilms.length > 0) {
//         // constants.filteredFilms = []
//         constants.filteredFilms.forEach((el) => {
//
//
//             if (el.id === +domElement.filmId.value) {
//                         console.log('el.id', el.id)
//                         constants.filmByLang.push(el)
//                     }
//
//             constants.filteredFilms = constants.filmByLang;
//
//         })
//         console.log(constants.filteredFilms)
//     }else {
//         constants.movies.forEach((el) => {
//
//             if (el.id === +domElement.filmId.value) {
//                 // constants.movies = []
//                 constants.filteredFilms.push(el)
//                 // return
//             }
//             // console.log(constants.filteredFilms)
//         })
//     }
// }
//
//
// const getFilmByLanguage = () => {
// // debugger
//     if (constants.filteredFilms.length > 0) {
//         // constants.filteredFilms = []
//         constants.filteredFilms.forEach((el) => {
//
//
//             if (el.original_language === domElement.selectLanguage.value) {
//
//                 constants.filmByLang.push(el)
//                 console.log('have', constants.filmByLang)
//             }
//             // constants.filteredFilms = constants.filmByLang;
//
//         })
//         console.log(constants.filteredFilms)
//     }else {
//         constants.movies.forEach((el) => {
//
//             if (el.original_language === domElement.selectLanguage.value) {
//                 // constants.movies = []
//                 return constants.filteredFilms.push(el)
//             }
//         })
//     }
// }
//
//     const clearStor = () => {
//         localStorage.clear()
//     }
//
//
//     domElement.btnFilter.addEventListener('click', (el) => {
//         console.log('here')
//         // debugger
//         getFilmByID()
//         getFilmByLanguage()
//
//         creatFirstPage(constants.filteredFilms)
//         // creatFirstPage(constants.filteredFilms)
//         console.log('oooooooooooooooooooo', constants.filteredFilms)
//
//
//         // console.log()
//         // console.log(variable.maxBudget)
//         // console.log(variable.minBudget)
//         // getBudget()
//         // console.log(constants.budgetFilms)
//     })


domElement.nav.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') {
        return false
    }

    if (!filterData.genre_ids.includes(+event.target.id)) {
        filterData.genre_ids.push(+event.target.id);
    }
})

const handleFilter = (movies) => {
    if (movies.length) {
        constants.filteredFilms = [];

        movies.forEach((movie) => {
            if (filterData.filmId) {
                if (filterData.filmId === movie.id) {
                    constants.filteredFilms.push(movie);
                }

            } else {
                switch (true) {
                    case filterData.lang && filterData.lang === movie.original_language:
                        constants.filteredFilms.push(movie);
                        break;

                    case !!filterData.genres.length:
                        filterData.genres.forEach((genre) => {
                            if (movie.genre_ids.includes(genre) && !constants.filteredFilms.includes(movie)) {
                                constants.filteredFilms.push(movie);
                            }
                        })
                        break;
                }
            }

        })
    }
}

domElement.filmId.addEventListener('change', (e) => {
    filterData.id = Number(e.target.value);
})

domElement.selectLanguage.addEventListener('change', (e) => {
    filterData.original_language = e.target.value;
})

const handFiltGenre = (movies, genresList) => {
    const temporaryArr = [];

    movies.forEach((movie) => {
        genresList.forEach((genre) => {
            if (movie.genre_ids.includes(genre) && !temporaryArr.includes(movie)) {
                return temporaryArr.push(movie)
            }
        })
    })

    return temporaryArr
}

const handleById = (movies, key, value) => {
    const temporaryArr = [];

    movies.forEach((movie) => {
        if (value === movie[key]) {
            return temporaryArr.push(movie)
        }
    })

    return temporaryArr
}

domElement.btnFilter.addEventListener('click', () => {
    const filtredByGenre = handFiltGenre(constants.movies, filterData.genre_ids);
    const filteredById = handleById(filtredByGenre.length ? filtredByGenre : constants.movies, 'id', filterData.id);
    const filteredByLang = handleById(filtredByGenre.length ? filtredByGenre : constants.movies, 'original_language', filterData.original_language);

    if (filteredById.length) {
        constants.filteredFilms = [...filteredById];
    } else if (filteredByLang.length) {
        constants.filteredFilms = [];
        constants.filteredFilms = [...filteredByLang]
    } else if (filtredByGenre.length) {
        constants.filteredFilms = [];
        constants.filteredFilms = [...filtredByGenre]
    }

    creatFirstPage(constants.filteredFilms)
})