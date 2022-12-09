// let once = document.querySelector("#laugh");

// once.addEventListener('click', (e)=> {
//     e.preventDefault();
//     alert('thanks for purchase');
// })

// let products = JSON.parse(localStorage.getItem('video'));
// JSON.parse(localStorage.getItem('products')) : [ {

//         id: 1,
//         name: 'Genshin Impact',
//         genre: 'Adventure',
//         price: 'R100',
//         image : '../assets/genshin-impact.jpg'
//         },
//         {
//         id: 2,
//         name: 'Fifa 23',
//         genre: 'Sport',
//         price: 'R600',
//         image: '../assets/fifa23.webp'
//         },
//         {
//         id: 3,
//         name: 'Rocket League',
//         genre: 'Sport',
//         price: 'R100',
//         image: '../assets/Rocket_League.jpg'
//         },
//         {
//         id: 4,
//         name: 'Assassins Creed Odyssey',
//         genre: 'Adventure',
//         price: 'R400',
//         image: '../assets/assassins creed.jfif'
//         },
//         {
//         id: 5,
//         name: 'Kingdom Hearts 2',
//         genre: 'Adventure',
//         price: 'R300',
//         image: '../assets/KH2!.png'
//         },
//         {
//         id: 6,
//         name: 'NBA2k23',
//         image: '../assets/nba-2k23-next-gen-version.jpg',
//         genre: 'Sport',
//         price: 'R600'
//         },
//         {
//         id: 7,
//         name: 'Monster Hunter: World',
//         image: '../assets/Monster hunter.jfif',
//         genre: 'Adventure',
//         price: 'R400'
//         },
//         {
//         id: 8,
//         name: 'Wii: Sports',
//         image: '../assets/wii sports.jpg',
//         genre: 'Sport',
//         price: 'R100'
//         },
//         {
//         id: 9,
//         name: 'Dragonball Z',
//         image: '../assets/dragonballzBT3.png',
//         genre: 'Adventure',
//         price: 'R300'
//         },
//         {
//         id: 10,
//         name: 'Madden22',
//         image: '../assets/Madden22!.webp',
//         genre: 'Sport',
//         price: 'R350'
//         },   
// ];

let products = JSON.parse(localStorage.getItem('video'));

function displayProducts() {
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

// function sort() {
//   let sorter = products.sort((a, b) => (a.price > b.price) ? 1: -1);
//   localStorage.setItem('video', JSON.stringify(products));
//   JSON.parse(localStorage.getItem('video'));
//   console.log(sorter);
// sort()
// }

let checkoutPage = [];

localStorage.setItem('videos', JSON.stringify(checkoutPage))
/*
//parse into localStorage
let games = JSON.parse(localStorage.getItem('video'));
Object.keys(games).forEach((video) => {
//show names of cars in console
    let x = games[video];
    let myGame = document.querySelector("");
    console.log(games[video].type);
    myGame.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${x.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${x.name}</p>
                                    <p class="carPrice">${x.price}</p>
                                    <button class="addToCheckout" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
})
*/

let addBtn = document.querySelectorAll('#addCheckout');

Object.keys(addBtn).forEach((video) => {
        addBtn[video].addEventListener('click', (e) => {
          e.preventDefault();
            console.log('clicked', addBtn[video])
            console.log(addBtn[video])
            console.log(products[video])

            checkoutPage.push(products[video]);
            console.log(checkoutPage)
            localStorage.setItem('videos', JSON.stringify(checkoutPage));
        })
    }
)