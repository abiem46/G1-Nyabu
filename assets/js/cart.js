window.onload = function () {
    var kurangBtn = document.getElementById("kurang"),
      tambahBtn = document.getElementById("tambah"),
      numberPlace = document.getElementById("numberPlace"),
      submitBtn = document.getElementById("submit"),
      number = 0, /// number value
      min = 0, /// min number
      max = 30; /// max nilai
  
    kurangBtn.onclick = function () {
      if (number > min) {
        number = number - 1; /// kurang 1 of the number
        numberPlace.innerText = number; /// Display the value in place of the number
      }
      if (number == min) {
        numberPlace.style.color = "red";
        setTimeout(function () {
          numberPlace.style.color = "black";
        }, 500);
      } else {
        numberPlace.style.color = "black";
      }
    };
    tambahBtn.onclick = function () {
      if (number < max) {
        number = number + 1;
        numberPlace.innerText = number; /// Display the value in place of the number
      }
      if (number == max) {
        numberPlace.style.color = "red";
        setTimeout(function () {
          numberPlace.style.color = "black";
        }, 500);
      } else {
        numberPlace.style.color = "black";
      }
    };
    submitBtn.onclick = function () {
      alert("you choice : " + number);
    };
  };
  
  // dinamis Sayur
  let keranjangSayur = document.getElementById("keranjangSayur");
  
  let sayur = JSON.parse(localStorage.getItem("cart-sayur"));
  
  sayur.forEach((sayur) => {
    // console.log(sayur);
    keranjangSayur.innerHTML += `
      <div class="row d-flex justify-content-between keranjang">
      <div class="col-1 form-check d-flex justify-content-center" id=${sayur.id}>
    <input class="form-check-input" type="checkbox" value="" id="keranjang">
    <label class="form-check-label" for="keranjang"></label>
  </div>
  <div class="col-1 " style="text-align: center;">
    ${sayur.stock}
    </div>
    <div class="col-2" style="text-align: center;">
      <img src=${sayur.Photo} alt="" style="width:90%">
    </div>
    <div class="col-2 " style="text-align: center;">
    ${sayur.name}
    </div>
    <div class="col-2 " style="text-align: center;">
    ${sayur.price}
    </div>
    <div class="col-2 " style="text-align: center;">
      <div id="kuantitas">
        <button id="kurang">-</button>
        <span id="numberPlace">1</span>
        <button id="tambah">+</button>
    </div>
    </div>
    <div class="col-2 " style="text-align: center;">
    <button id="hapussayur" onclick="hapus()" ><span class="material-icons">
    Hapus
    </span>
    </button>
      </div>
      </div>
  
      `;
  });

  // proses

  function hapus() {
    var checkout;
    if (confirm("Apakah anda ingin menghapus!!!")) {
      checkout = "Item telah di hapus!!!";
    } else {
      checkout = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = checkout;
  }

      
  