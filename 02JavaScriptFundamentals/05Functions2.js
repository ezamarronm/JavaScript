var name = 'Eduardo' //global object (node, window,etc)

function printNameUpperCase(name){ //local
   name = name.toUpperCase()
   console.log(name)
   console.log(window.name)
}

printNameUpperCase(name)