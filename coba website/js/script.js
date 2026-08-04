// Menampilkan pesan saat website dibuka
window.onload = function () {
    console.log("Website Desa Sidalang berhasil dimuat.");
};

// Efek scroll navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});