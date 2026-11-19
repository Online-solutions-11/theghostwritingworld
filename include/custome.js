
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

    // hero-section
    (function () {
    function init() {
        var hero = document.getElementById('hero');
        if (!hero) return;

        // touch-only devices par custom cursor nahi
        if (window.matchMedia('(hover: none)').matches) return;

        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        var ring = document.createElement('div');
        var dot  = document.createElement('div');
        ring.className = 'gw-ring';
        dot.className  = 'gw-dot';
        document.body.appendChild(ring);
        document.body.appendChild(dot);

        var mx = -100, my = -100;      // mouse
        var rx = -100, ry = -100;      // ring (smooth follow)
        var rs = 1, ts = 1;            // ring scale (current / target)
        var active = false, raf = null, lastSpark = 0;

        function loop() {
            rx += (mx - rx) * 0.18;
            ry += (my - ry) * 0.18;
            rs += (ts - rs) * 0.2;
            dot.style.transform  = 'translate3d(' + mx + 'px,' + my + 'px,0)';
            ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) scale(' + rs + ')';
            raf = requestAnimationFrame(loop);
        }

        function show(e) {
            mx = rx = e.clientX;
            my = ry = e.clientY;
            if (active) return;
            active = true;
            hero.classList.add('gw-cursor-on');
            dot.style.opacity = 1;
            ring.style.opacity = 1;
            if (!raf) loop();
        }

        function hide() {
            active = false;
            hero.classList.remove('gw-cursor-on');
            dot.style.opacity = 0;
            ring.style.opacity = 0;
            ts = 1;
            ring.classList.remove('gw-ring-hover');
        }

        function spark(x, y) {
            var s = document.createElement('span');
            s.className = 'gw-spark';
            s.textContent = '✦';
            s.style.left = (x - 7) + 'px';
            s.style.top  = (y - 7) + 'px';
            document.body.appendChild(s);
            var dx = (Math.random() * 36) - 18;
            var dy = 14 + Math.random() * 22;
            var rot = (Math.random() * 180) - 90;
            var anim = s.animate([
                { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
                { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(0) rotate(' + rot + 'deg)', opacity: 0 }
            ], { duration: 900, easing: 'ease-out' });
            anim.onfinish = function () { s.remove(); };
        }

        hero.addEventListener('mouseenter', show);
        hero.addEventListener('mouseleave', hide);

        hero.addEventListener('mousemove', function (e) {
            if (!active) show(e);
            mx = e.clientX;
            my = e.clientY;

            // hover state on links / buttons
            var onLink = !!(e.target.closest && e.target.closest('a, button, .btn'));
            ts = onLink ? 1.9 : 1;
            ring.classList.toggle('gw-ring-hover', onLink);

            // sparkle trail
            if (!reduce) {
                var now = Date.now();
                if (now - lastSpark > 70) {
                    lastSpark = now;
                    spark(e.clientX, e.clientY);
                }
            }
        });

        hero.addEventListener('mousedown', function () { ts = 0.7; });
        hero.addEventListener('mouseup', function (e) {
            var onLink = !!(e.target.closest && e.target.closest('a, button, .btn'));
            ts = onLink ? 1.9 : 1;
        });

        // tab change / window se bahar jaye to hide
        document.addEventListener('mouseleave', hide);
        window.addEventListener('blur', hide);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

$(function () {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $hero = $('#hero');

    /* entrance */
    if (!still) {
        gsap.from('.rv',  {opacity: 0, scale: .85, y: 30, duration: 1, stagger: .06, ease: 'back.out(1.4)'});
        gsap.from('.rv2', {opacity: 0, y: 40, duration: .9, stagger: .15, delay: .4, ease: 'power3.out'});

        /* idle motion */
        $('.fl').each(function (i) {
            gsap.to(this, {y: (i % 2 ? -1 : 1) * (10 + i % 4 * 4), x: (i % 3 - 1) * 8, duration: 2.6 + (i % 4) * .5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * .15});
        });
        $('.bub').each(function (i) {
            gsap.fromTo(this, {opacity: 0, scale: .4}, {opacity: 1, scale: 1, duration: 1.6 + (i % 4) * .5, repeat: -1, yoyo: true, repeatDelay: .3, ease: 'sine.inOut', delay: i * .25});
        });
        gsap.to('.spin', {rotation: 12, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut'});
        gsap.set('#lamp', {transformOrigin: '51% 0'});
        gsap.fromTo('#lamp', {rotation: -1.8}, {rotation: 1.8, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut'});
        gsap.set('.sway', {transformOrigin: '50% 100%'});
        gsap.to('.sway', {rotation: 2.5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut'});
        gsap.to('#glow', {opacity: .45, scale: 1.2, duration: 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut'});
        gsap.to('#cone', {opacity: .6, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut'});
        $('.star').each(function (i) {
            gsap.to(this, {opacity: .15, scale: .5, duration: 1 + i * .35, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * .3});
        });
    }

    /* mouse parallax (purane GSAP par bhi chalega) */
    function quick(el, prop) {
        if (gsap.quickTo) return gsap.quickTo(el, prop, {duration: 1.2, ease: 'power3'});
        return function (v) {
            gsap.to(el, {[prop]: v, duration: 1.2, ease: 'power3', overwrite: 'auto'});
        };
    }

    const layers = $('.px').map(function () {
        return {el: this, d: +$(this).data('d'), x: quick(this, 'x'), y: quick(this, 'y')};
    }).get();

    $hero.on('mousemove', function (e) {
        if (still) return;
        const nx = e.clientX / innerWidth - .5;
        const ny = (e.clientY - this.getBoundingClientRect().top) / this.offsetHeight - .5;
        layers.forEach(l => {l.x(-nx * l.d * 2); l.y(-ny * l.d * 2);});
    }).on('mouseleave', () => layers.forEach(l => {l.x(0); l.y(0);}));

    /* magnetic buttons + ripple */
    $('.mag').on('mousemove', function (e) {
        const r = this.getBoundingClientRect();
        gsap.to(this, {x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .3});
    }).on('mouseleave', function () {
        gsap.to(this, {x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.4)'});
    }).on('click', function (e) {
        const r = this.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2;
        const $r = $('<span class="ripple"></span>').css({width: s, height: s, left: e.clientX - r.left - s / 2, top: e.clientY - r.top - s / 2}).appendTo(this);
        gsap.to($r[0], {scale: 1, opacity: 0, duration: .7, onComplete: () => $r.remove()});
    });
});

// book-cover
 (function () {
            const allImages = [
                "images/cover-1.webp",
                "images/cover-2.webp",
                "images/cover-3.webp",
                "images/cover-4.webp",
                 "images/cover-5.webp",
                "images/cover-6.webp",
                "images/cover-7.webp",
                "images/cover-8.webp",
                 "images/cover-9.webp",
                "images/cover-10.webp",
                "images/cover-11.webp",
                "images/cover-12.webp",
                 "images/cover-13.webp",
                "images/cover-14.webp",
                "images/cover-15.webp",
                "images/cover-16.webp",
                 "images/cover-17.webp",
                "images/cover-18.webp",
                "images/cover-19.webp",
                "images/cover-20.webp",
                 "images/cover-21.webp",
                "images/cover-22.webp",
                "images/cover-23.webp",
                "images/cover-24.webp",
                 "images/cover-25.webp",
                "images/cover-26.webp",
                "images/cover-27.webp",
                "images/cover-28.webp",
              
                "images/cover-29.webp"
            ];

            const totalCards = 28;                     // 7 columns x 4 rows
            const shuffled = [...allImages].sort(() => Math.random() - 0.5);

            const grid = document.getElementById('bfsGrid');
            const inners = [];
            const flipState = new Array(totalCards).fill(false);   // false = front dikh raha hai
            const busy = new Array(totalCards).fill(false);
            const shown = [];                                      // har card par abhi kaun si image dikh rahi hai

            for (let i = 0; i < totalCards; i++) {
                const img = shuffled[i];
                shown[i] = img;
                const card = document.createElement('div');
                card.className = 'bfs-card';
                card.innerHTML =
                    '<div class="bfs-inner" id="bfsInner' + i + '">' +
                    '<div class="bfs-front"><img decoding="async" src="' + img + '" alt=""></div>' +
                    '<div class="bfs-back"><img decoding="async" src="' + img + '" alt=""></div>' +
                    '</div>';
                grid.appendChild(card);
                inners.push(document.getElementById('bfsInner' + i));
            }

            
            function flipCard(idx) {
                if (busy[idx]) return;
                busy[idx] = true;

                const pool = allImages.filter(function (u) {return shown.indexOf(u) === -1;});
                const next = pool.length ? pool[Math.floor(Math.random() * pool.length)] : shown[idx];

                const hiddenFace = inners[idx].querySelector(flipState[idx] ? '.bfs-front img' : '.bfs-back img');
                hiddenFace.src = next;
                shown[idx] = next;

                flipState[idx] = !flipState[idx];
                inners[idx].classList.toggle('flipped', flipState[idx]);
                setTimeout(function () {busy[idx] = false;}, 1300);
            }

            function flipRandom() {
                const free = inners.map(function (_, i) {return i;}).filter(function (i) {return !busy[i];});
                if (!free.length) return;
                flipCard(free[Math.floor(Math.random() * free.length)]);
            }

            setInterval(flipRandom, 600);              // har 0.6 second mein ek random card flip

            // click karne par bhi card flip ho
            grid.addEventListener('click', function (e) {
                const card = e.target.closest('.bfs-card');
                if (!card) return;
                flipCard(Array.prototype.indexOf.call(grid.children, card));
            });
        })();