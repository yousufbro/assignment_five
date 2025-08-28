//handle heart count 
const heartBtns = document.querySelectorAll('.heart-button');
const heartCount = document.querySelector('.heart-count'); 
for(const btn of heartBtns){
    btn.addEventListener('click', function(){
        let heartCountValue = parseInt(heartCount.innerText);
        heartCountValue++;
        heartCount.innerText = heartCountValue;
    })
}

//

