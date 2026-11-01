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