var cards = {}
cards.key = []
cards.shuffle = function(list) {
    cards.order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    var array = {
        'copy': [...cards.order]
    }
    cards.position = []
    for(var index = 0; index < 10; index++) {
        cards.position.push(array.copy.splice(Math.floor(Math.random() * array.copy.length), 1)[0])
    }

    array.copy = []
    for(var index = 0; index < 10; index++) {
        var found = cards.position.indexOf(cards.order[index])
        array.copy[index] = list[found]
        cards.key.push(found)
    }

    return array.copy
}

cards.identify = function(id) {
    id = '' + id

    if(id.length == 3) {}
    if(id.length == 2) id = '0' + id
    else               id = '00' + id
    
    return id
}

cards.load = function(set) { 
    var display = document.getElementById('card-set')
    var box = document.getElementById('box')

    display.innerHTML = '';
    box.innerHTML = '';

    var array = {
        copy: []
    }
    for(var index = 0; index < 10; index++) {
        var image = document.createElement('img')
        image.src = 'cards/' + 'flashcards-page-' + cards.identify((index + 1) + (set * 10)) + '.jpg' 
        var card = document.createElement('div')
        card.setAttribute('name', 'card')
        card.className = 'col'
        card.innerHTML = '<div>Card#' + (index + 1) + '</div>'
        card.appendChild(image)
        array.copy.push(card)


    }
    var container = document.createElement('div')
    container.className = 'input-group'
    var odd = [1,3,5,7,9]
    for(var index = 0; index < 5; index++) {
        var choice = document.createElement('input')
        choice.name = 'choice'
        choice.type = 'text'
        choice.className = 'form-control'
        //choice.placeholder = ((index + 1) * 2)
            
        var even = [0,2,4,6,8]
        var label = document.createElement('span')
        label.className = 'input-group-text'
        label.innerHTML = odd[index] + (configuration.set * 10) + (configuration.set * even[index])
        //var container = document.createElement('div')
        //container.innerHTML = ((index + 1) * 2) + ': '
        container.appendChild(label)
        container.appendChild(choice)
    }
    box.appendChild(container)
    array.copy = cards.shuffle(array.copy)
    for(var index = 0; index < 10; index++) {
        var location = document.createElement('div')
        location.innerHTML = 'Position#' + (index + 1)
        var card = array.copy[index] 
        card.appendChild(location)
        display.appendChild(card);
    }
}

var configuration = {}
configuration.set = 0;
cards.load(0)


configuration.check = function() {
    var array = {
        'even': [2,4,6,8,10],
        'key': []
    }
    for(var index = 0; index < 5; index++) {
        array.key.push(cards.position.indexOf(array.even[index]) + 1)
    }

    //alert('cards\n' + cards.order + '\n' + cards.position + '\n\n')
    //alert('answers\n' + array.even + '\n' + array.key)

    var choices = document.getElementsByName('choice')
    array.answer = []
    for(var index = 0; index < 5; index++) {
        array.answer.push(choices[index].value)
    }
    
    //alert('choices\n' + array.key + '\n' + array.answer)

    array.result = []
    for(var index = 0; index < 5; index++) {
        if(array.key[index] == array.answer[index]) {
            array.result[index] = 'y'
        } else {
            array.result[index] = 'n'
        }
    }

    alert('result\n' + array.result)
}
configuration.next = function() {
    configuration.set = configuration.set + 1
    cards.load(configuration.set)
}
configuration.over = function() {
    configuration.set = 0
    cards.load(0)
}
configuration.ready = function() {
    var button = document.getElementById('button-check')
    button.onclick = function() {
        configuration.check()
    }
    button = document.getElementById('button-next')
    button.onclick = function() {
        configuration.next()
    }
    button = document.getElementById('button-over')
    button.onclick = function() {
        configuration.over()
    }
}

configuration.ready()