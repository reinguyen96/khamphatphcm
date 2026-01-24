const searchInput = document.getElementById('search-input')
const allTitles = document.querySelectorAll('.main-container')

searchInput.addEventListener('keyup', function () {
    const keyword = searchInput.value.toLowerCase();
    
    allTitles.forEach(function (content) {
        const item = content.textContent.toLowerCase();

        if(item.includes(keyword)){
            content.style.display = "block"
        } else {
            content.style.display = "none"
        }

    })
})

