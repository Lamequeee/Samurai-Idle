const span = document.querySelector('cronometro')
const crono2 = document.querySelector('cronometro2')
const btnStart = document.querySelector('#btnStart')
const btnStart2 = document.querySelector('#btnStart2')

var interval

btnStart.onclick = () => {
  btnStart.disabled = false 

  clearInterval(interval)
  cronometro.innerHTML = "0.0"
   var value = parseFloat(cronometro.innerHTML)
   interval = setInterval(() => {
    value += 0.1
    if(value >= 2.0){
        value = 0.0;
   
     }
    cronometro.innerHTML = value.toFixed(1)
  }, 100);

  
}

btnStart2.onclick = () => {
    btnStart2.disabled = false 
  
    clearInterval(interval)
    cronometro2.innerHTML = "0.0"
     var value = parseFloat(cronometro2.innerHTML)
     interval = setInterval(() => {
      value += 0.1
  
      cronometro2.innerHTML = value.toFixed(1)
    }, 100);
  }