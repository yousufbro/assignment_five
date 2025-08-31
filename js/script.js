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


//handle the call button
const callBtns = document.querySelectorAll('.call-btn');
for(const callBtn of callBtns) {
    callBtn.addEventListener('click', function(e){
        const serviceItem = e.target.closest('.service-item');
        const serviceType = serviceItem.querySelector('.service-type').innerText;
        const hotlineNumber = serviceItem.querySelector('.hotline-number').innerText;
        const coinBtn = document.getElementById('coin');
        const coinBtnNumber = parseInt(coinBtn.innerText);
        const historyContainer = document.getElementById('history-container');
        const date = new Date().toLocaleTimeString()

        //coin condition
        if (coinBtnNumber < 20) {
            alert('You have no available coin');
            return;
        }
        
        alert(`calling ${serviceType} at  ${hotlineNumber}`);

        //coin handelar
        const coinBtnValue = coinBtnNumber - 20;
        coinBtn.innerText = coinBtnValue;

        //history handelar 
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = `
            <div class="history-parent">
                <div class="history-content">
                    <p>${serviceType}</p>
                    <span>${hotlineNumber}</span>
                </div>
                <div class="date-time">
                    <p>${date}</p>
                </div>
            </div>
        ` 
        historyContainer.appendChild(historyDiv);
        historyContainer.style.display = 'block';
    })
}

//clear history 
document.getElementById('clear-btn').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';
})

//copy button handelar
const copyBtns = document.querySelectorAll('.copy-btn');
for(const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function(e){
        const serviceItem = e.target.closest('.service-item');
        const hotlineNumber = serviceItem.querySelector('.hotline-number').innerText;
        const copyButton = document.getElementById('copy-count');
        let copyButtonNumber = parseInt(copyButton.innerText);
        
        //copy the hotline number 
        navigator.clipboard.writeText(hotlineNumber);

        //alert massage 
        alert(`Hotline number is  ${hotlineNumber} copied`);

        copyButtonNumber++;
        copyButton.innerText = copyButtonNumber;
    })
}

