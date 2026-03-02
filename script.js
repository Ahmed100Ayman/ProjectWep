let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let listItems = document.querySelectorAll('.list-item');
let buttonsContainer = document.getElementById("page-buttons");
let pageTitle = document.getElementById("page-title");
let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

function openModal(index = null) {
    document.getElementById("productModal").style.display = "flex";

    if (index !== null) {
        editIndex = index;
        document.getElementById("productName").value = products[index].name;
        document.getElementById("productDesc").value = products[index].desc;
        document.getElementById("productPrice").value = products[index].price;
    }
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
    document.getElementById("productName").value = "";
    document.getElementById("productDesc").value = "";
    document.getElementById("productPrice").value = "";
    editIndex = null;
}

function saveProduct() {

    let name = document.getElementById("productName").value.trim();
    let desc = document.getElementById("productDesc").value.trim();
    let price = document.getElementById("productPrice").value.trim();
    let imageInput = document.getElementById("productImage");

    if (!name || !desc || !price || imageInput.files.length === 0) {
        alert("Please fill all required fields");
        return;
    }

    let product = {
        name,
        desc,
        price,
        status: "Pending"
    };

    if (editIndex !== null) {
        products[editIndex] = product;
    } else {
        products.push(product);
    }

    localStorage.setItem("products", JSON.stringify(products));
    closeModal();
    renderProducts();
}

function renderProducts() {

    let list = document.getElementById("products-list");
    if (!list) return;

    list.innerHTML = "";

    products.forEach((product, index) => {
        list.innerHTML += `
            <div style="background:white;padding:10px;margin:10px;border-radius:8px">
                <h4>${product.name}</h4>
                <p>${product.desc}</p>
                <p>Price: ${product.price}</p>
                <p>Status: ${product.status}</p>

                <button class="btn" onclick="openModal(${index})">Edit</button>
                <button class="btn" onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}
function loadPage(page) {

    buttonsContainer.innerHTML = "";

    if (page === "dashboard") {
        pageTitle.textContent = "Dashboard";

        buttonsContainer.innerHTML = `
            <button class="btn">View Reports</button>
        `;
    }

    if (page === "products") {
        pageTitle.textContent = "Products";

        buttonsContainer.innerHTML = `
            <button class="btn" onclick="openModal()">Add Product</button>
        <div id="products-list"></div>
        `;
        renderProducts();
    }

    if (page === "orders") {
        pageTitle.textContent = "Orders";

        buttonsContainer.innerHTML = `
            <button class="btn">View Orders</button>
            <button class="btn">Edit Order</button>
        `;
    }
    if (page === "messages") {
        pageTitle.textContent = "Messages";

        buttonsContainer.innerHTML = `
            <button class="btn">View Messages</button>
            <button class="btn">Send Message</button>
        `;
    }

    if (page === "settings") {
        pageTitle.textContent = "Settings";

        buttonsContainer.innerHTML = `
            <button class="btn" onclick="resetPassword()">Reset Password</button>
        `;
    }
}



btn.onclick = function() {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = function() {
    sidebar.classList.toggle('active');
}

function activateLink() {
    listItems.forEach(item => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
listItems.forEach(item =>
    item.onclick = activateLink);
