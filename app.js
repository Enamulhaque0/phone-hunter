const parent = document.getElementById("phones-container")

const allPhone = () => {
    let searchValue = document.getElementById("search-box");
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue.value}`


    fetch(url)
        .then(Response => Response.json())
        .then(data => showPhoneDetails(data.data))

    searchValue.value = '';
    parent.textContent = '';

}


const showPhoneDetails = (phones) => {
    if (phones.length == 0) {
        alert('not found')
    }
    for (const phone of phones) {

        const div = document.createElement("div");
        div.classList.add('col')
        div.innerHTML = `
        <div class="card bg-light" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top p-5 rounded" alt="...">
            <div class="card-body">
                <h4 class="card-title">Model: ${phone.phone_name}</h4>
                <h6 class="card-title">Brand: ${phone.brand}</h6>

                <button onClick="details('${phone.slug}')" class="btn btn-primary" type="button">More</button>
            </div>
        </div>
        `
        parent.appendChild(div);

    }
}

const details = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => phoneInfo(data.data))
}

const phoneInfo = (info) => {
    console.log(info)
    const parent = document.getElementById("card")
    parent.textContent = "";
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = `
                <div class="col-md-4 text-center">
                  <img src="${info.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                <h1 class="">Main Features</h1>
                <h6><span class="fw-bold">Name:</span> ${info.name}</h6>
                <h6><span class="fw-bold">Model:</span> ${info.slug}</h6>
                <h6><span class="fw-bold">Released:</span> ${info.releaseDate ? info.releaseDate : `<h6>No Release Date Found </h6>`}</h6>
      
              <h6><span class="fw-bold">Chipset:</span> ${info.mainFeatures.chipSet}</h6>
              <h6><span class="fw-bold">Display Size:</span> ${info.mainFeatures.displaySize}</h6>
              <h6><span class="fw-bold">Memory:</span> ${info.mainFeatures.memory}</h6>
              <h6><span class="fw-bold">Sensors:</span> ${info.mainFeatures.sensors}</h6>
               <h4 class="fw-bold"> Others</h4>
              <h6><span class="fw-bold">Bluetooth:</span> ${info.others.Bluetooth}</h6>
              <h6><span class="fw-bold">GPS:</span> ${info.others.GPS}</h6>
              <h6><span class="fw-bold">NFC:</span> ${info.others.NFC}</h6>
              <h6><span class="fw-bold">Radio:</span> ${info.others.Radio}</h6>
             <h6><span class="fw-bold">USB:</span> ${info.others.USB}</h6>
             <h6><span class="fw-bold">WLAN:</span> ${info.others.WLAN}</h6>

                    
                  </div>
                </div>
`
    parent.appendChild(div);
}
