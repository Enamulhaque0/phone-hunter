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
                <h4 class="card-title">${phone.phone_name}</h4>
                <h6 class="card-title">${phone.brand}</h6>

                <button class="btn btn-primary" type="button">More</button>
            </div>
        </div>
        `
        parent.appendChild(div);
    }
}

