//set initial count
let count=0

//select valie and buttons
const value=document.querySelector('#value')
const btns=document.querySelectorAll('.btn')

btns.forEach(function (btn) {
   // console.log(btn)

   btn.addEventListener('click', function(e){
        const styles= e.currentTarget.classList
        if(styles.contains('decrese')){
            count--
        
        }else if(styles.contains('increse')){
            count++
        }else{
            count=0
        }
        if(count>0){
            value.style.color='green'
        }
        if(count<0){
            value.style.color='red'
        }
        if(count===0){
            value.style.color='black'
        }

        value.textContent=count
    })
})