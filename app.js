const inp = document.querySelector('#inp')
const btn = document.querySelector('.btn')
const bCharge = document.querySelector('#bCharge')

btn.addEventListener('click',function(event){
    event.preventDefault()

    if(inp.value == 0){
        alert("Give input first!")
    }
    else{
        const newRow = document.createElement('tr')

        const newInp = document.createElement('th')
        newInp.innerHTML = (inp.value)*0.0175
        newRow.appendChild(newInp);

        bCharge.appendChild(newRow);
    }
})