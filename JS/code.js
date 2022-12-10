
let products = JSON.parse(localStorage.getItem('video'));

function displayProducts() {
    document.querySelector('.row').innerHTML = "";
    products.forEach((video)=> {
        document.querySelector('.row').innerHTML += 
        `<div class="card" style="width: 18rem;">
        <img src="${video.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title text-white">${video.name}</h5>
          <p class="card-text">${video.genre}</p>
          <p class="card-text">${video.price}</p>
          <a id='addCheckout' class="btn btn-primary">Add to Checkout</a>
        </div>
      </div>`
    })
}
displayProducts();

// Sort function

function sort() {
    products.sort((a, b)=> a.price - b.price);
    localStorage.setItem('videos', JSON.stringify(products));
    location.reload();
    // JSON.parse(localStorage.getItem('moreVideos'));
    displayProducts();
}

let checkoutPage = [];

localStorage.setItem('videos', JSON.stringify(checkoutPage))

let addBtn = document.querySelectorAll('#addCheckout');

Object.keys(addBtn).forEach((video) => {
        addBtn[video].addEventListener('click', (e) => {
          e.preventDefault();
            checkoutPage.push(products[video]);
            alert('Product has been added')
            localStorage.setItem('videos', JSON.stringify(checkoutPage));
        })
    }
)

let filtered = document.querySelector('#genre');
filtered.addEventListener('change',(e) =>{
    console.log(e.target.value)
    let genreFiltered = products.filter(videos => {
        return videos.genre === e.target.value
    })
    document.querySelector('videos').innerHTML = "";
    genreFiltered.forEach((videos)=>{
        document.querySelector('.products').innerHTML +=`
        <div class="card col-4 mt-5" style="width: 18rem;">
            <img src="${videos.image}" class="card-img-top w-100" alt="nikeAf1">
            <div class="card-body">
              <h5 class="card-title">${videos.name}</h5>
              <p class="card-text text-center">Price : R ${videos.price}</p>
            </div>
        </div>`
    })
    console.log(filtered)
} )
