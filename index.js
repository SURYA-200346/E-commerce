

const Loginbtn = document.getElementById("Loginbtn");
const signbtn = document.getElementById("signbtn");
const logincontainer = document.querySelector(".login-container");
const close = document.getElementById("close");
const success = document.getElementById("success");
const signupcontainer = document.getElementById("signupcontainer")

Loginbtn.addEventListener("click", () => {
    logincontainer.style.display = "block";
})
close.addEventListener("click", () => {
    logincontainer.style.display = "none";

})
closebtn.addEventListener("click", () => {
    signupcontainer.style.display = "none";

})
window.addEventListener("click", (close) => {
    if (close.target === logincontainer) {
        logincontainer.style.display = "none";
    }
});
window.addEventListener("click", (close) => {
    if (close.target === signupcontainer) {
        signupcontainer.style.display = "none";
    }
});
Loginbtn.addEventListener("click", () => {
    signupcontainer.style.display = "none"
})
signbtn.addEventListener("click", () => {
    logincontainer.style.display = "none"
})
signbtn.addEventListener("click", () => {
    signupcontainer.style.display = "block"
})

// login page logic
document.getElementById("login").addEventListener("click", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Failed to fetch users");
        })
        .then(users => {
            const user = users.find(
                u => (u.username === username || u.name === username) && (u.newpassword === password || u.newpassword === password)
            );
            if (user) {
                // document.getElementById("success").innerText = "Login successful!";
                // document.getElementById("success").style.display = "none";
                // document.getElementById("failed").textContent = "";
                alert("Login Successfull")
                logincontainer.style.display = "none";
            } else {
                document.getElementById("failed").textContent = "Invalid username or password.";
                document.getElementById("failed").style.display = "none"
                document.getElementById("success").textContent = "";
                // logincontainer.style.display = "none";
                alert("Invalid username or password.")
            }
            document.getElementById("loginform").reset();

        })
        .catch(error => {
            document.getElementById("failed").textContent = "Login failed. Please try again.";
            document.getElementById("success").textContent = "";
        });
});

// Sign up page

document.getElementById("signupbtn").addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const newpassword = document.getElementById("newpassword").value;


    fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, newpassword }),
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Failed to create task.");
        })
        .then(data => {

            alert("Signup successful!");
            signup.reset();
            signupcontainer.style.display = "none";

        })
        .catch(error => {
            console.log("Signup to Create", error);
        })

})

// product display page
document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', function () {
        localStorage.setItem('selectedProduct', this.getAttribute('data-id'));
    });
});

// menu tab
const menuTab = document.getElementById("menutab");
const mobileMenu = document.getElementById("mobilemenu");
menuTab.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("active");
});

