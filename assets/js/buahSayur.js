let containerBuahSayur = document.getElementById("container-mix")

fetch('https://aromatic-discovered-television.glitch.me/buah_sayur')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach(mix => {
            containerBuahSayur.innerHTML += `
        <div class="col-12 col-lg-3 col-md-4">
        <div class="card h-100">
            <img src=${mix.Photo}
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title ">${mix.name}</h5>
                <p class="card-text">${mix.price}</p>
                <button type="button" class="btn btn-success">Belanja Sekarang</button>
                <img src="data:image/png;base64,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"
                    width="40" height="40">
            </div>
        </div>
    </div>
    
        `
        });
    })
    .catch((error) => console.log(error));

