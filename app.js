let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let i = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(i[0])
})

prev.addEventListener('click', function(){
    let i = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(i[i.length - 1])
})