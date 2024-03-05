//querySelector always return the first element

// var element = document.querySelector(".myClass")
// console.log(element.textContent)


//querySelector return all the elements
var elements = document.querySelectorAll(".myClass")
elements.forEach(function(element){
    console.log(element.textContent)
})



