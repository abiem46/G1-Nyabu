let containerBuahSayur = document.getElementById("container-mix")
let listProduk = []
const isiListProduk = localStorage.getItem("cartbuah");
let login = false

let addToListProduk = (id) => {
    let found = localStorage.getItem("login");
    if (found) {
        let objectListProdukLocalStorage = JSON.parse(localStorage.getItem("list-produk")); // mengambil dari local storage dengan key list-produk
        let foundListProduk = objectListProdukLocalStorage.find((mix) => {
            return list-produk.id === Number(id);
        });

        if (isiListProduk === null){
            listProduk.push(foundListProduk);
            localStorage.setItem("listproduk", JSON.stringify(listProduk));
        } else {
            listProduk = JSON.parse(isiListProduk);
            listProduk.push(foundListProduk);
            localStorage.setItem("listproduk", JSON.stringify(listProduk));
        }
    }
} 


fetch('https://aromatic-discovered-television.glitch.me/buah_sayur')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        localStorage.setItem("list-produk", JSON.stringify(data))
        
        data.forEach(mix => {
            containerBuahSayur.innerHTML += `
        <div class="col-12 col-lg-3 col-md-4">
        <div class="card h-100">
            <img src=${mix.Photo}
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title ">${mix.name}</h5>
                <p class="card-text">${mix.price}</p>
                <button type="button" class="btn warna-button buttonListProduk" id=${mix.id}>Belanja Sekarang</button>
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-beautiful-basket-decoration-illustration-png-image_4745990.jpg"
                    width="40" height="40">
            </div>
        </div>
    </div>
    
        `;
        });
        let cartListProdukButtons = document.querySelectorAll(".buttonListProduk");
        // Looping
        cartListProdukButtons.forEach((button) => {
            button.addEventListener("click", (e) =>addToListProduk(button.id));
        });
    });


    // .catch((error) => console.log(error));

