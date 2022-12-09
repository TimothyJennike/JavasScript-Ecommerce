let checkoutPage = JSON.parse(localStorage.getItem('videos'));
console.log(checkoutPage);

let tbody = document.querySelector('tbody')
Object.keys(checkoutPage).forEach((video) => {
  if(checkoutPage[video]){
    tbody.innerHTML +=
    `
    <tr>
    <td>${checkoutPage[video].name}</td>
    <td>${checkoutPage[video].genre}</td>
    <td>${checkoutPage[video].price}</td>
    </tr>
    `
  }
})









