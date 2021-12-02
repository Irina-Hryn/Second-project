const naw = document.querySelector('nav');
naw.addEventListener('click', (event )=> {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass)
})

