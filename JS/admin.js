let products = JSON.parse(localStorage.getItem('video')) ?
JSON.parse(localStorage.getItem('video')) : [ {

        id: 1,
        name: 'Genshin Impact',
        genre: 'Adventure',
        price: 'R100',
        image : '../assets/genshin-impact.jpg'
        },
        {
        id: 2,
        name: 'Fifa 23',
        genre: 'Sport',
        price: 'R600',
        image: '../assets/fifa23.webp'
        },
        {
        id: 3,
        name: 'Rocket League',
        genre: 'Sport',
        price: 'R100',
        image: '../assets/Rocket_League.jpg'
        },
        {
        id: 4,
        name: 'Assassins Creed Odyssey',
        genre: 'Adventure',
        price: 'R400',
        image: '../assets/assassins creed.jfif'
        },
        {
        id: 5,
        name: 'Kingdom Hearts 2',
        genre: 'Adventure',
        price: 'R300',
        image: '../assets/KH2!.png'
        },
        {
        id: 6,
        name: 'NBA2k23',
        image: '../assets/nba-2k23-next-gen-version.jpg',
        genre: 'Sport',
        price: 'R600'
        },
        {
        id: 7,
        name: 'Monster Hunter: World',
        image: '../assets/Monster hunter.jfif',
        genre: 'Adventure',
        price: 'R400'
        },
        {
        id: 8,
        name: 'Wii: Sports',
        image: '../assets/wii sports.jpg',
        genre: 'Sport',
        price: 'R100'
        },
        {
        id: 9,
        name: 'Dragonball Z',
        image: '../assets/dragonballzBT3.png',
        genre: 'Adventure',
        price: 'R300'
        },
        {
        id: 10,
        name: 'Madden22',
        image: '../assets/Madden22!.webp',
        genre: 'Sport',
        price: 'R350'
        },   
];

function tableData() {
let tbody = document.querySelector("#tbody");
tbody.innerHTML = '',
Object.keys(products).forEach((video)=> {
  tbody.innerHTML += 
  `
  <td>${products[video].name}</td>
  <td>${products[video].genre}</td>
  <td>${products[video].price}</td>
  <td><button id="edit" onclick="edit()" class="btn btn-success">Edit</button></td>
  <td><button class="btn btn-danger" id="remove" onclick="remove(${products[video].index})">Delete</button></td>
`
},
)
}
tableData();



function remove(index) {
localStorage.setItem('video', JSON.stringify(products));
    document.querySelector('#remove');
    products.splice(products[index], 1)
    
    localStorage.setItem('video', JSON.stringify(products));
    tableData();
}

localStorage.setItem('video', JSON.stringify(products));

let create = document.querySelector('#createNew');
create.addEventListener('click', (e)=> {
  e.preventDefault();
  let name = document.querySelector('#product').value;
  let genre = document.querySelector('#genre').value;
  let price = document.querySelector('#price').value;
  let image = document.querySelector('#image').value;
  products.push(
    {
      name,
      genre,
      price,
      image
    }
  )
  alert('Product has been added')
  localStorage.setItem('video', JSON.stringify(products));
  tableData();
})



