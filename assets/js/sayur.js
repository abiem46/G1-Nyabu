let containerSayur = document.getElementById("container-sayur")
let ModalcontainerSayur = document.getElementById("daftar-sayur");
let cartSayur = [];
// console.log(containerSayur)
let addToCartSayur = (id) => {
    let objectSayurLocalStorage = JSON.parse(localStorage.getItem("sayur")); // ngambil dari local storage dengan key sayur
    let foundSayur = objectSayurLocalStorage.find((sayur) => {
      return sayur.id === Number(id);
    });
    cartSayur.push(foundSayur);
    localStorage.setItem("cart-sayur", JSON.stringify(cartSayur));
  };

fetch('https://aromatic-discovered-television.glitch.me/sayur')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        localStorage.setItem("sayur", JSON.stringify(data));
        data.forEach(sayur => {
            containerSayur.innerHTML += `
    <div class="col-12 col-lg-3 col-md-4">
        <div class="card h-100">
            <img src=${sayur.Photo}
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title ">${sayur.name}</h5>
                <p class="card-text">${sayur.price}</p>
                <p class="stok">Stok : ${sayur.stock}</p>
                <button type="button" class="btn warna-button">Belanja Sekarang</button>
                <button class="btn warna-button buttonSayur" id=${sayur.id} type="button">
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-beautiful-basket-decoration-illustration-png-image_4745990.jpg"
                    width="40" height="40">
                    </button>
            </div>
        </div>
    </div>
        `
        });
        let cartSayurButtons = document.querySelectorAll(".buttonSayur");
        cartSayurButtons.forEach((button) => {
          button.addEventListener("click", (e) => addToCartSayur(button.id));
        });
    });
    // .catch((error) => console.log(error))