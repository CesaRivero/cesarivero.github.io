//using selectors inside the element
const questions= document.querySelectorAll('.question')
questions.forEach(function(question){
  //  console.log(question);
const btn=question.querySelector('.question-btn')
 // console.log(btn);
 btn.addEventListener('click', function(){
    questions.forEach(function(item){// hace que solo se abra un aoregunta  se ciere la otra
        if (item!==question) {
            item.classList.remove('show-text')
            
        }

    })

    question.classList.toggle('show-text')
 })

})
/* traversing the dom
const btns=document.querySelectorAll('.question-btn')

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
        const question= e.currentTarget.parentElement.parentElement;//accedemos a la clase padre anterioy y luego al padre del padre y tenemos la pregunta completa
        question.classList.toggle('show-text')//agrega y quita basicamente es la funcion de desplegar

    })
})
*/