window.addEventListener("DOMContentLoaded", function () {
    const selectedId = localStorage.getItem('selectedProduct');
    if (!selectedId) return;

    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(res => res.json())
        .then(data => {
            const product = data.find(item =>
                item.id.toString() === selectedId ||
                item.name && item.name.toLowerCase().replace(/\s+/g, '-') === selectedId
            );
            const cardcontainer = document.getElementById("cardimage");
            cardcontainer.innerHTML = "";
            if (product) {
                cardcontainer.innerHTML = `
                    <div class="productshow" id="displayproduct">
                        <img src="${product.productimage}" alt="${product.name}" />  
                    </div>
                `;
            } else {
                cardcontainer.innerHTML = "<p>Product not found.</p>";
            }
        });
});


// mens product page
const mensCasual = document.getElementById("menscasual");
const cards = document.getElementById("cards");
const card = document.querySelector("card");

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(response => response.json())
        .then(data => {
            const mensProducts = data.filter(item => item.category === "mens casual");
            cards.innerHTML = "";
            if (mensProducts.length === 0) {
                cards.innerHTML = "<p>No mens casual products found.</p>";
            }
            mensProducts.forEach(product => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" />
                    <h3>${product.name}</h3>    
                `;
                cards.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Fetch error:", error);
            cards.innerHTML = "<p>Could not load products.</p>";
        });
});


mensCasual.addEventListener("click", () => {
    // cards.style.display = "none"

    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(res => res.json())
        .then(data => {
            const mensProducts = data.filter(item => item.category === "mens casual");
            cards.innerHTML = "";
            if (mensProducts.length === 0) {
                cards.innerHTML = "<p>No mens casual products found.</p>";
            }
            mensProducts.forEach(product => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="${product.productimage}" alt="${product.name}" />
                    <h3>${product.name}</h3>   
                    <p>${product.price}</p> 
                `;
                cards.appendChild(card);
            });
        });
});