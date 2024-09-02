

// Toggle ber start here 

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navMenu = document.querySelector('.navber-menu ul');
    const dropdownToggles = document.querySelectorAll('.navber-menu ul li a');

    function handleResize() {
        if (window.innerWidth > 992) {
            navMenu.style.display = 'flex';
            dropdownToggles.forEach(toggle => {
                toggle.removeEventListener('click', toggleDropdown);
            });
        } else {
            navMenu.style.display = 'none';
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', toggleDropdown);
            });
        }
    }

    toggleBtn.addEventListener('click', function() {
        navMenu.style.display = (navMenu.style.display === 'block' || navMenu.style.display === 'flex') ? 'none' : 'block';
    });

    function toggleDropdown(event) {
        const nextElement = this.nextElementSibling;
        if (nextElement && nextElement.classList.contains('dropdown-menu')) {
            event.preventDefault();
            const isDropdownOpen = nextElement.style.display === 'block';
            closeAllDropdowns();
            nextElement.style.display = isDropdownOpen ? 'none' : 'block';
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }

    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
    
    // Close dropdowns if clicked outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navber-menu ul li')) {
            closeAllDropdowns();
        }
    });
});

// Toggle ber ends here 







//Image slider start here 
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.img-slider .slide');
    const buttons = document.querySelectorAll('.img-slider .navigation .btn');
    let currentIndex = 0;
    const slideInterval = 10000; // 10 seconds

    // Initially hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Load the active button index from localStorage
    const activeButtonIndex = localStorage.getItem('activeButtonIndex');
    if (activeButtonIndex !== null) {
        currentIndex = parseInt(activeButtonIndex, 10);
        showSlide(currentIndex);
    } else {
        showSlide(currentIndex);
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            // Save the active button index to localStorage
            localStorage.setItem('activeButtonIndex', currentIndex);
        });
    });

    // Automatically switch to the next slide after a few seconds
    setInterval(() => {
        currentIndex = (currentIndex +1) % slides.length;
        showSlide(currentIndex);
        // Save the active button index to localStorag
        localStorage.setItem('activeButtonIndex', currentIndex);
    }, slideInterval);

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var demoButton = document.querySelector(".protfolio-end .btn");
    if (demoButton) {
        demoButton.addEventListener("click", function() {
            alert("Demo request initiated!");
            // You can add more functionality here, like opening a form or sending a request
        });
    }
});


// Image slider ends here 


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#slider input[type="radio"]');
    let currentIndex = 0;
    const slideInterval = 6000; // Slide interval in milliseconds (5 seconds)

    function nextSlide() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].checked = true;
    }

    // Set the auto-slide interval
    setInterval(nextSlide, slideInterval);
});



// Disable copying text
// document.addEventListener('copy', function(e) {
//     e.preventDefault();
//     alert('Copying text is not allowed on this website.');
// }, false);

// // Disable right-click context menu
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// }, false);

// // Disable key combinations commonly used for copying text
// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 'a')) {
//         e.preventDefault();
//     }
//     if (e.key === 'PrintScreen') {
//         e.preventDefault();
//     }
// }, false);


