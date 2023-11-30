const sortBtn = document.getElementById('sort-btn')
const container = document.getElementById('container')


sortBtn.addEventListener('click', function(){
    console.log('sort me!')
    container.classList.toggle('reverse')
})
