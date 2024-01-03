console.log('iframe과 메세지 교환하기');

const iWindow = document.querySelector('#card-payment').contentWindow;
document.querySelector('#checkout-btn')
.addEventListener('click', e => {
  iWindow.location = '../payment.html';
});

window.addEventListener('message', e =>{
  console.log(e.data.holderName);
  if(e.data.holderName) console.log(e.data);
});
