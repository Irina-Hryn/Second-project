console.log(constants.movies)

domElement.nav.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') {
        return false
    }
    constants.filteredFilms = []
    let filterClass = event.target.dataset['f'];
    console.log('jhgfds', filterClass)
    constants.movies.forEach((element) => {

        if (element.genre_ids.includes(+event.target.id)) {
            constants.filteredFilms.push(element)
        }
    })
    console.log('filteredFilm', constants.filteredFilms)
})

domElement.adult.addEventListener('click', (event) => {
    constants.filteredFilms.forEach((item) => {
        if (item.adult === true) {
            constants.adultFilms.push(item)
            console.log(constants.adultFilms)
        }
    })
    console.log('adultFilm', constants.adultFilms)
})

// variable.minBudget = domElement.minNumberBudget.value;
// variable.maxBudget = domElement.maxNumberBudget.value;
//
// const getBudget = (min, max) => {
//     constants.filteredFilms.forEach((el) => {
//         if (el.budget >= min && el.budget <= max ){
//             constants.budgetFilms.push(el)
//         }
//     })
// }
// domElement.btnFilter.addEventListener('click', (el) => {
//     // debugger
//     // console.log()
//     console.log(variable.maxBudget)
//     console.log(variable.minBudget)
//     getBudget()
//     console.log(constants.budgetFilms)
// })

const getFilmByID = () => {
    // debugger
    // constants.movies.forEach((el) => {
    //     if (el.id === +domElement.filmId.value) {
    //         console.log('el.id', el.id)
    //         constants.filteredFilms.push(el)
    //     }
    // })
    // console.log(constants.filteredFilms)

    if (constants.filteredFilms.length > 0) {
        // constants.filteredFilms = []
        constants.filteredFilms.forEach((el) => {


            if (el.id === +domElement.filmId.value) {
                        console.log('el.id', el.id)
                        constants.filmByLang.push(el)
                    }

            constants.filteredFilms = constants.filmByLang;

        })
        console.log(constants.filteredFilms)
    }else {
        constants.movies.forEach((el) => {

            if (el.id === +domElement.filmId.value) {
                // constants.movies = []
                constants.filteredFilms.push(el)
            }
            console.log(constants.filteredFilms)
        })
    }
}


const getFilmByLanguage = () => {
// debugger
    if (constants.filteredFilms.length > 0) {
        // constants.filteredFilms = []
        constants.filteredFilms.forEach((el) => {


            if (el.original_language === domElement.selectLanguage.value) {

                constants.filmByLang.push(el)
                console.log('have', constants.filmByLang)
            }
            constants.filteredFilms = constants.filmByLang;

        })
        console.log(constants.filteredFilms)
    }else {
        constants.movies.forEach((el) => {

            if (el.original_language === domElement.selectLanguage.value) {
                constants.movies = []
                constants.filteredFilms.push(el)
            }
        })
    }
}

    const clearStor = () => {
        localStorage.clear()
    }


    domElement.btnFilter.addEventListener('click', (el) => {
        console.log('here')
        // debugger
        getFilmByID()
        getFilmByLanguage()

        creatFirstPage(constants.filteredFilms)
        console.log('oooooooooooooooooooo', constants.filteredFilms)


        // console.log()
        // console.log(variable.maxBudget)
        // console.log(variable.minBudget)
        // getBudget()
        // console.log(constants.budgetFilms)
    })