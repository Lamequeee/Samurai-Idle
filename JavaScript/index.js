const crono1 = document.querySelector('cronometro')
const crono2 = document.querySelector('cronometro2')
const crono3 = document.querySelector('cronometro3')
const crono4 = document.querySelector('cronometro4')
const crono5 = document.querySelector('cronometro5')
const crono6 = document.querySelector('cronometro6')

const btnStart = document.querySelector('#btnStart')
const btnStart2 = document.querySelector('#btnStart2')
const btnStart3 = document.querySelector('#btnStart3')
const btnStart4 = document.querySelector('#btnStart4')
const btnStart5 = document.querySelector('#btnStart5')
const btnStart6 = document.querySelector('#btnStart6')

const testeC = document.querySelector('test_cont')

var interval

var interval;

btnStart.onclick = () => {
    clearInterval(interval);
    cronometro.innerHTML = "0.0";
    var value = parseFloat(cronometro.innerHTML);
    var contC = 0;

    interval = setInterval(() => {
        value += 0.1;
        if (value >= 2.0) {
            value = 0.0;
            contC += 1;
        }
        cronometro.innerHTML = value.toFixed(1);
        test_cont.innerHTML = contC;
    }, 100);
};

btnStart2.onclick = () => {
    btnStart2.disabled = false 
  
    clearInterval(interval)
    cronometro2.innerHTML = "0.0"
     var value = parseFloat(cronometro2.innerHTML)
     interval = setInterval(() => {
      value += 0.1
      if(value >= 3.0){
        value = 0.0;
   
     }
      cronometro2.innerHTML = value.toFixed(1)
    }, 100);
  }

  btnStart3.onclick = () => {
    btnStart3.disabled = false 
  
    clearInterval(interval)
    cronometro3.innerHTML = "0.0"
     var value = parseFloat(cronometro3.innerHTML)
     interval = setInterval(() => {
      value += 0.1
      if(value >= 4.5){
        value = 0.0;
   
     }
      cronometro3.innerHTML = value.toFixed(1)
    }, 100);
  }

  btnStart4.onclick = () => {
    btnStart4.disabled = false 
  
    clearInterval(interval)
    cronometro4.innerHTML = "0.0"
     var value = parseFloat(cronometro4.innerHTML)
     interval = setInterval(() => {
      value += 0.1
      if(value >= 5.8){
        value = 0.0;
   
     }
      cronometro4.innerHTML = value.toFixed(1)
    }, 100);
  }

  btnStart5.onclick = () => {
    btnStart5.disabled = false 
  
    clearInterval(interval)
    cronometro5.innerHTML = "0.0"
     var value = parseFloat(cronometro5.innerHTML)
     interval = setInterval(() => {
      value += 0.1
      if(value >= 8.0){
        value = 0.0;
        
     }
      cronometro5.innerHTML = value.toFixed(1)
    }, 100);
  }

  btnStart6.onclick = () => {
    btnStart6.disabled = false 
  
    clearInterval(interval)
    cronometro6.innerHTML = "0.0"
     var value = parseFloat(cronometro6.innerHTML)
     interval = setInterval(() => {
      value += 0.1
      if(value >= 10.0){
        value = 0.0;
   
     }
      cronometro6.innerHTML = value.toFixed(1)
    }, 100);
  }


   // Adicionando um evento de clique ao elemento "test_cont"
test_cont.onclick = () => {
  const contValue = test_cont.innerHTML;

  // Enviando o valor para o servidor via fetch (AJAX)
  fetch('bd/config.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: `valor=${contValue}`,
  })
  .then(response => response.text())
  .then(data => {
      console.log('Valor salvo com sucesso:', data);
  })
  .catch(error => {
      console.error('Erro ao salvar o valor:', error);
  });
};