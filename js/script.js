function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-sidebar-button');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!menuBtn || !sidebar) return;

    const openMenu = () => {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    };

    menuBtn.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    mobileLinks.forEach(link =>
        link.addEventListener('click', closeMenu)
    );
}

function initPartnerDropdown() {
    const toggle = document.getElementById("partner-toggle");
    const menu = document.getElementById("partner-menu");
    const icon = document.getElementById("partner-icon");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("hidden");
        icon?.classList.toggle("rotate-180");
    });

    document.addEventListener("click", () => {
        menu.classList.add("hidden");
        icon?.classList.remove("rotate-180");
    });
}

function initBackToTopButton() {
    // ===== Mobile Menu =====
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
        });
    }

    if (closeBtn && menu) {
        closeBtn.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
        });
    }

    // ===== Back To Top Button =====
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
        } else {
            backToTopBtn.classList.add("opacity-0", "pointer-events-none");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



async function loadComponent(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent("header", "header.html");
    await loadComponent("footer", "footer.html");

    // 🔥 NOW the DOM exists
    initMobileMenu();
    initPartnerDropdown();
    initBackToTopButton();
});
