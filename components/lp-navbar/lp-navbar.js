class LPNavbar extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open'});

        const [html, css] = await Promise.all([
            fetch('/components/lp-navbar/lp-navbar.html').then(res => res.text()),
            fetch('/style.css').then(res => res.text())
        ]);

        shadow.innerHTML = `<style>${css}</style> ${html}`;

        const hamburger = this.shadowRoot.getElementById('hamburger');
        const navlinks = this.shadowRoot.getElementById('nav-links');
        hamburger.addEventListener('click', () => {
            navlinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navlinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

customElements.define('nav-bar', LPNavbar)