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
 products.forEach((video, i)=> {
  tbody.innerHTML += 
  `
  <td>${video.name}</td>
  <td>${video.genre}</td>
  <td>${video.price}</td>
  <td><button id="edit" class="Modal btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal${video.id}">Edit</button>

  <div class="modal fade" id="editModal${video.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create new Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="mb-3 row gap-2">
          <label for="inputProduct" class="col-sm-2 col-form-label text-bg-dark">Product</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="product" value="${video.name}">
          </div>
        </div>

          <div class="mb-3 row gap-2">
            <label for="inputGenre" class="col-sm-2 col-form-label text-bg-dark">Genre</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="genre" placeholder="Adventure OR Sport " value="${video.genre}">
            </div>
          </div>

            <div class="mb-3 row gap-2">
              <label for="inputPrice" class="col-sm-2 col-form-label text-bg-dark">Price</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" id="price" placeholder="R" value="${video.price}">
              </div>
            </div>

            <div class="mb-3 row gap-2">
              <label for="inputImage" class="col-sm-2 col-form-label text-bg-dark">Image</label>
              <div class="col-sm-10">
                <input type="url" class="form-control" id="image" placeholder="Place Image Address" value="${video.image}">
              </div>
            </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" id="updateNew" onclick="UpdateItem(video)">Update Record</button>
      </div>
  </div>
  </div>
</div>
</div>

  </td>
  <td><button class="btn btn-danger" id="remove" onclick="remove(${i})">Delete</button></td>
`
},
)
}
tableData();



function remove(id) {
localStorage.setItem('video', JSON.stringify(products));
    document.querySelector('#remove');
    products.splice(id, 1);
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

function UpdateItem(video) {
  let index = products.findIndex(video);
  // console.log(index);
  this.id = video.id;
  this.name = document.querySelector('#name').value;
  this.genre = document.querySelector('#genre').value;
  this.price = document.querySelector('#price').value;
  this.image = document.querySelector('#image').value;

  products[index] = {
    id: this.id,
    name: this.name,
    genre: this.genre,
    price: this.price,
    image: this.image
  }
}



