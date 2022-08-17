//data buah-buahan
let containerBuah = document.getElementById("container-buah")
let cartBuah = [];
const isiLSCartBuah = localStorage.getItem("cartbuah");
let login = false;

let addToChartBuah = (id) => {
    let found = localStorage.getItem("login");
    if (found) {
        let objectCartBuahLocalStorage = JSON.parse(localStorage.getItem("cart-buah"))
        let foundCartBuah = objectCartBuahLocalStorage.find((buah) =>{
            return cartBuah.id === Number(id);
        });

        if(isiLSCartBuah === null){
            cartBuah.push(foundCartBuah);
            localStorage.setItem("cartbuah", JSON.stringify(cartBuah));
        } else {
            cartBuah = JSON.parse(isiLSCartBuah);
            cartBuah.push(foundCartBuah);
            localStorage.setItem("cartbuah", JSON.stringify(cartBuah));
        }
    }
}

fetch('https://aromatic-discovered-television.glitch.me/buah')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        localStorage.setItem("cart-buah", JSON.stringify(data))
        
        data.forEach(buah => {
            containerBuah.innerHTML += `
    <div class="col-12 col-lg-3 col-md-4">
        <div class="card h-100">
            <img src= ${buah.Photo}
                class="card-img-top" alt="..." weight="100" height="200">
            <div class="card-body text-center">
                <h5 class="card-title ">${buah.name}</h5>
                <p class="card-text">${buah.price}</p>
                <p class="stok">Stok : ${buah.stock}</p>
                <button type="button" class="btn warna-button buttonBuah" id=${buah.id}>Belanja Sekarang</button>
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-beautiful-basket-decoration-illustration-png-image_4745990.jpg"
                    width="40" height="40">
            </div>
        </div>
    </div>
        
        `;
        });
        let cartBuahButtons = document.getElementById(".buttonBuah");
        cartBuahButtons.forEach((button) =>{
            button.addEventListener("click", (e) => addToChartBuah(button.id));
        });
    });

    // .catch((error) => console.log(error))