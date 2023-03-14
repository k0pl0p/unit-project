const search = document.querySelector('.search')
const button = document.querySelector('.search__button')
button.addEventListener('click', function(e) {
    if (search.classList.contains('search--visible')) {

    } else {
        e.preventDefault()
        search.classList.toggle('search--visible')
    }
})