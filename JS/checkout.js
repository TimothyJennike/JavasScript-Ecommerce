let checkoutPage = JSON.parse(localStorage.getItem('videos'));
console.log(checkoutPage);

let tbody = document.querySelector('tbody')
Object.keys(checkoutPage).forEach((videos) => {
  if(checkoutPage[videos]){
    tbody.innerHTML +=
    `
    <tr>
    <td>${checkoutPage[videos].name}</td>
    <td>${checkoutPage[videos].genre}</td>
    <td>${checkoutPage[videos].price}</td>
    </tr>
    `
  }
})

localStorage.setItem('videos', JSON.stringify(checkoutPage));

let purchaseItem = document.querySelector('#Purchase');
purchaseItem.addEventListener('click', ()=> {
  alert('Thank you for your purchase');
  checkoutPage = [];
  localStorage.setItem('videos', JSON.stringify(checkoutPage));
  location.reload();
})







