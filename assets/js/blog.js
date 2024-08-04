// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
    const navUl = document.querySelector('nav ul');
    const overlay = document.querySelector('[data-overlay]');

    // Toggle navigation menu and overlay visibility
    navToggleBtn.addEventListener('click', () => {
        navUl.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Close navigation menu and overlay when overlay is clicked
    overlay.addEventListener('click', () => {
        navUl.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close navigation menu and overlay when a menu item is clicked
    navUl.querySelectorAll('li a').forEach(item => {
        item.addEventListener('click', () => {
            navUl.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});
