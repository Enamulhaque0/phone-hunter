const allPhone = () => {
    let searchValue = document.getElementById("search-box");
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue.value}`


    fetch(url)
        .then(Response => Response.json())
        .then(data => showPhoneDetails(data.data))

        searchValue.value = ''; 
}




const showPhoneDetails = (phones) => { 
    if (phones.length == 0) {
        alert('!')
    }
    for (const phone of phones) {
        console.log(phone)

        const parent = document.getElementById("phones-container")
        const div = document.createElement("div");
        div.classList.add('col')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top p-5" alt="...">
            <div class="card-body">
                <h4 class="card-title">${phone.phone_name}</h4>
                <h6 class="card-title">${phone.brand}</h6>

                <a href="#" class="btn btn-primary">Phone Details</a>
            </div>
        </div>
        
        `
        //         <div class="row row-cols-3 g-5">
        //         <div class="col">
        //         <div class="card" style="width: 18rem;">
        // <img  src="${phone.image}" class="card-img-top p-5" alt="...">
        // <div class="card-body">
        //     <h4 class="card-title">${phone.phone_name}</h4>
        //     <h6 class="card-title">${phone.brand}</h6>

        //     <a href="#" class="btn btn-primary">Phone Details</a>
        // </div>
        // </div>
        //     </div> 
        //    </div>



        parent.appendChild(div);

    }
}