
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


// console.log(constants.movies)
let genres = [];
domElement.nav.addEventListener('click', (event) => {
    // debugger
    if (event.target.tagName !== 'LI') {
        return false
    }

    if (!genres.includes(+event.target.id)) {
        genres.push(+event.target.id);
    }
    console.log('genres: ', genres)
    // constants.filteredFilms = []
    // let filterClass = event.target.dataset['f'];
    // console.log('jhgfds', filterClass)
    // constants.movies.forEach((element) => {
    //     genres.push(+event.target.id);

    // if (element.genre_ids.includes(+event.target.id)) {
    //     constants.filteredFilms.push(element)
    // }
    // })
    // console.log('filteredFilm', constants.filteredFilms)
})

domElement.adult.addEventListener('click', (event) => {
    constants.filteredFilms.forEach((item) => {
        if (item.adult === true) {
            constants.adultFilms.push(item)
            // console.log(constants.adultFilms)
        }
    })
    // console.log('adultFilm', constants.adultFilms)
})

// const getFilmByID = () => {
//
//     if (constants.filteredFilms.length > 0) {
//         // constants.filteredFilms = []
//         constants.filteredFilms.forEach((el) => {
//
//
//             if (el.id === +domElement.filmId.value) {
//                 console.log('el.id', el.id)
//                 constants.filmByLang.push(el)
//             }
//
//             constants.filteredFilms = constants.filmByLang;
//
//         })
//         console.log(constants.filteredFilms)
//     }else {
//         constants.movies.forEach((el) => {
//
//             if (el.id === +domElement.filmId.value) {
//                 constants.filteredFilms.push(el)
//             }
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

const filterObj = {
    genre: [],
    id: null,
    calendarFirst: null,
    calendarLast: null,
    lang: null,
    budget: null,
    adult: null,
}

const handleFilter = (movies) => {
    constants.filteredFilms = []
    if (movies.length) {
        movies.forEach((el) => {
            if (domElement.filmId.value) {
                // constants.filteredFilms = []

                if (el.id === +domElement.filmId.value) {
                    constants.filteredFilms.push(el);
                }
            } else {
                switch (true) {
                    case el.original_language === domElement.selectLanguage.value: {
                        constants.filteredFilms.push(el);
                        break;
                    }
                    // case domElement.filmId.value && el.id === +domElement.filmId.value: {
                    //     constants.filteredFilms = []
                    //
                    //     constants.filteredFilms.push(el);
                    //     break;
                    // }
                    case genres.length:
                        genres.forEach((genre) => {
                            if (el.genre_ids.includes(genre) && !constants.filteredFilms.includes(el)) {
                                constants.filteredFilms.push(el);
                            }
                        })
                        break;
                }
            }


            // if (domElement.filmId.value && el.id === +domElement.filmId.value) {
            //     constants.filteredFilms.push(el);
            //
            // }
            // if () {
            //     genres.forEach((genre) => {
            //         if (el.genre_ids.includes(genre) && !constants.filteredFilms.includes(el)) {
            //             constants.filteredFilms.push(el);
            //         }
            //     })
            // } else {
            //     switch (true) {
            //         case el.original_language === domElement.selectLanguage.value: {
            //             constants.filteredFilms.push(el);
            //             break;
            //         }
            //
            //     }
            // }
        })
    }
    // if (movies.length) {
    //     movies.forEach((el) => {
    //         if (domElement.filmId.value) {
    //             if (el.id === +domElement.filmId.value) {
    //                 constants.filteredFilms.push(el);
    //             }
    //
    //         } else if (genres.length) {
    //             genres.forEach((genre) => {
    //                 if (el.genre_ids.includes(genre)) {
    //                     if (!constants.filteredFilms.includes(el)) {
    //                         constants.filteredFilms.push(el);
    //                     }
    //
    //                 }
    //             })
    //         } else {
    //             switch (true) {
    //                 case el.original_language === domElement.selectLanguage.value: {
    //                     constants.filteredFilms.push(el);
    //                     break;
    //                 }
    //
    //             }
    //         }
    //     })
    // }
}

domElement.btnFilter.addEventListener('click', (el) => {
    // console.log('here')
    // constants.filteredFilms = []
    handleFilter(constants.movies);

    console.log('constants.filteredFilms!!!!!!', constants.filteredFilms)

    // if (!domElement.filmId.value && !domElement.selectLanguage.value && !genres.length) {
    //     return creatFirstPage(constants.movies)
    // }

    creatFirstPage(constants.filteredFilms)
})