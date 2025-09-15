window.addEventListener("DOMContentLoaded", function () {
    const selectedId = localStorage.getItem('selectedProduct');
    if (!selectedId) return;

    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then(res => res.json())
        .then(data => {
            // Find the product by id (adjust property as needed)
            const product = data.find(item => 
                item.id === selectedId || 
                item.name.toLowerCase().replace(/\s+/g, '-') === selectedId
            );
            const cardcontainer = document.getElementById("productdetails");
            cardcontainer.innerHTML = "";
            if (product) {
                cardcontainer.innerHTML = `
                    <div class="productshow" id="displayproduct">
                        <img src="${product.image}" alt="${product.name}" />
                        <h2>${product.name}</h2>
                    </div>
                `;
            } else {
                cardcontainer.innerHTML = "<p>Product not found.</p>";
            }
        });
});