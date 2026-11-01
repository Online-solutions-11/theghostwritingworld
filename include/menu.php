<header class="custom-mobile-header">

    <!-- Aapka existing header HTML yahan same rahega -->

    <div class="navbar-area bg-white">

        <!-- Mobile Menu Toggle -->
        <button type="button"
            class="custom-menu-toggle"
            aria-label="Open menu"
            aria-expanded="false">
            <i class="bx bx-menu"></i>
        </button>

        <!-- Existing responsive nav -->
        <div class="strax-responsive-nav">
            <div class="container">
                <div class="strax-responsive-menu">
                    <div class="logo black-logo">
                        <a href="index.php">
                            <img src="assets/img/logo-up.png" alt="logo">
                        </a>
                    </div>
                    <div class="logo white-logo">
                        <a href="index.php">
                            <img src="assets/img/logo-up.png" alt="logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Existing desktop nav -->
        <div class="strax-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">

                    <a class="navbar-brand black-logo" href="index.php">
                        <img src="assets/img/logo-up.png" alt="logo">
                    </a>

                    <a class="navbar-brand white-logo" href="index.php">
                        <img src="assets/img/logo-up.png" alt="logo">
                    </a>

                    <div class="collapse navbar-collapse mean-menu"
                        id="navbarSupportedContent">

                        <ul id="navMenus" class="navbar-nav">
                            <li class="nav-item">
                                <a href="index.php" class="nav-link home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="about.php" class="nav-link about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="services.php" class="nav-link services">Services</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link">Testimonials</a>
                            </li> -->
                            <li class="nav-item">
                                <a href="contact.php" class="nav-link contact">Contact</a>
                            </li>
                        </ul>

                        <div class="others-options">
                            <a href="javascript:;" class="default-btn popup-show">
                                <i class="bx bxs-hot"></i>Get Started<span></span>
                            </a>
                        </div>

                    </div>
                </nav>
            </div>
        </div>

        <!-- Existing responsive Get Started button -->
        <div class="others-option-for-responsive">
            <div class="container">
                <div class="dot-menu">
                    <a href="javascript:;" class="default-btn res popup-show">
                        Get Started<span></span>
                    </a>
                </div>
            </div>
        </div>

    </div>

    <!-- Overlay -->
    <div class="custom-menu-overlay"></div>

    <!-- Mobile drawer -->
    <div class="custom-mobile-drawer" id="customMobileDrawer">

        <button type="button"
            class="custom-menu-close"
            aria-label="Close menu">
            &times;
        </button>

        <!-- Menu links JavaScript se existing nav se copy honge -->
        <div class="custom-mobile-links"></div>

        <a href="javascript:;" class="default-btn popup-show custom-drawer-cta">
            Get Started <span></span>
        </a>

    </div>

</header>
<style>
    
/* =========================================
   CUSTOM MOBILE HEADER
========================================= */

.custom-mobile-header {
    position: relative;
    z-index: 999;
}

/* Desktop: Hide custom mobile elements */
.custom-mobile-header .custom-menu-toggle,
.custom-mobile-header .custom-mobile-drawer,
.custom-mobile-header .custom-menu-overlay {
    display: none;
}


/* =========================================
   MOBILE + TABLET VIEW (UP TO 991px)
========================================= */

@media (max-width: 991px) {

    /* Hide original Strax / MeanMenu toggle */
    .custom-mobile-header .meanmenu-reveal,
    .custom-mobile-header .mean-bar,
    .custom-mobile-header .navbar-toggler,
    .custom-mobile-header .mobile-nav-toggler,
    .custom-mobile-header .strax-responsive-menu .menu-toggle,
    .custom-mobile-header .strax-responsive-menu .meanmenu-reveal {
        display: none !important;
    }

    /* Hide desktop navigation */
    .custom-mobile-header .strax-nav {
        display: none !important;
    }

    /* Responsive header */
    .custom-mobile-header .strax-responsive-nav {
        position: relative;
        z-index: 1000;
        background: #fff;
    }

    /* Logo on the left */
    .custom-mobile-header .strax-responsive-menu {
        display: flex !important;
        align-items: center;
        justify-content: flex-start !important;
        position: relative;
        min-height: 75px;
        padding: 10px 65px 10px 15px;
    }

    .custom-mobile-header .strax-responsive-menu .logo {
        display: block;
        text-align: left !important;
        margin: 0 !important;
    }

    .custom-mobile-header .strax-responsive-menu .logo img {
        display: block;
        max-width: 150px;
        width: auto;
        height: auto;
    }

    /* Hide duplicate logo if both variants display */
    .custom-mobile-header .strax-responsive-menu .white-logo {
        display: none !important;
    }

    /* Custom hamburger toggle on the right */
    .custom-mobile-header .custom-menu-toggle {
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: absolute !important;
        top: 50% !important;
        right: 15px !important;
        left: auto !important;
        transform: translateY(-50%) !important;
        width: 44px;
        height: 44px;
        padding: 0;
        margin: 0;
        border: none;
        border-radius: 5px;
        background: transparent;
        color: #222;
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
        z-index: 10002 !important;
    }

    .custom-mobile-header .custom-menu-toggle:focus,
    .custom-mobile-header .custom-menu-close:focus {
        outline: none;
    }

    /* =====================================
       SLIDE-IN MOBILE DRAWER
    ===================================== */

    .custom-mobile-header .custom-mobile-drawer {
        display: block !important;
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        max-width: 85%;
        height: 100vh;
        height: 100dvh;
        padding: 75px 24px 30px;
        background: #fff;
        z-index: 10010 !important;
        overflow-y: auto;
        overscroll-behavior: contain;
        transform: translateX(-100%);
        visibility: hidden;
        pointer-events: none;
        transition:
            transform 0.3s ease,
            visibility 0.3s ease;
        box-shadow: 5px 0 25px rgba(0, 0, 0, 0.12);
    }

    .custom-mobile-header.menu-open .custom-mobile-drawer {
        transform: translateX(0);
        visibility: visible;
        pointer-events: auto;
    }

    /* Close icon on drawer's right */
    .custom-mobile-header .custom-menu-close {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 15px;
        right: 18px;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        background: transparent;
        color: #222;
        font-size: 36px;
        line-height: 1;
        cursor: pointer;
    }

    /* Mobile navigation links */
    .custom-mobile-header .custom-mobile-links ul {
        display: block !important;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .custom-mobile-header .custom-mobile-links li {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        border-bottom: 1px solid #eee;
    }

    .custom-mobile-header .custom-mobile-links a {
        display: block;
        padding: 14px 0;
        color: #222;
        font-size: 16px;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .custom-mobile-header .custom-mobile-links a:hover {
        color: #5b2ca0;
    }

    /* Get Started button in drawer */
    .custom-mobile-header .custom-drawer-cta {
        display: inline-block;
        margin-top: 25px;
    }

    /* =====================================
       BACKGROUND OVERLAY
    ===================================== */

    .custom-mobile-header .custom-menu-overlay {
        display: block !important;
        position: fixed;
        inset: 0;
        z-index: 10000 !important;
        background: rgba(0, 0, 0, 0.55);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
    }

    .custom-mobile-header.menu-open .custom-menu-overlay {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        cursor: pointer;
    }

    /* Prevent background scrolling when menu opens */
    body.custom-menu-active {
        overflow: hidden;
    }
}


/* =========================================
   DESKTOP VIEW (992px AND ABOVE)
========================================= */

@media (min-width: 992px) {

    .custom-mobile-header .custom-menu-toggle,
    .custom-mobile-header .custom-mobile-drawer,
    .custom-mobile-header .custom-menu-overlay {
        display: none !important;
    }

    .custom-mobile-header .strax-nav {
        display: block !important;
    }

    body.custom-menu-active {
        overflow: auto;
    }
       body{
        overflow-x: hidden !important;
       }
}

</style>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector(".custom-mobile-header");

        if (!header) return;

        const openBtn = header.querySelector(".custom-menu-toggle");
        const closeBtn = header.querySelector(".custom-menu-close");
        const overlay = header.querySelector(".custom-menu-overlay");
        const drawer = header.querySelector(".custom-mobile-drawer");
        const mobileLinks = header.querySelector(".custom-mobile-links");
        const desktopMenu = header.querySelector("#navMenus");

        if (desktopMenu && mobileLinks) {
            const clonedMenu = desktopMenu.cloneNode(true);
            clonedMenu.removeAttribute("id");

            clonedMenu.querySelectorAll("[id]").forEach(function(el) {
                el.removeAttribute("id");
            });

            mobileLinks.replaceChildren(clonedMenu);
        }

        function openMenu() {
            header.classList.add("menu-open");
            document.body.classList.add("custom-menu-active");
            openBtn.setAttribute("aria-expanded", "true");
            drawer.setAttribute("aria-hidden", "false");
        }

        function closeMenu() {
            header.classList.remove("menu-open");
            document.body.classList.remove("custom-menu-active");
            openBtn.setAttribute("aria-expanded", "false");
            drawer.setAttribute("aria-hidden", "true");
        }

        openBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        overlay.addEventListener("click", closeMenu);

        mobileLinks.addEventListener("click", function(event) {
            if (event.target.closest("a")) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    });
</script>