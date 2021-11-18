var cards = document.querySelectorAll('.row-choice-single:not(.fixed)')

cards.forEach(card =>{
    card.addEventListener('mouseover', function (){
        card.classList.add('selected-card')
        var button = Array.from(card.children)
        var button = button[5]
        button.classList.remove('display-none')
    })
    card.addEventListener('mouseout', function (){
        card.classList.remove('selected-card')
        var button = Array.from(card.children)
        var button = button[5]
        button.classList.add('display-none')
    })
})

cards.forEach(card =>{
    card.addEventListener('touchstart', function (){
        card.classList.toggle('selected-card')
        var button = Array.from(card.children)
        var button = button[5]
        button.classList.toggle('display-none')
    })
})


