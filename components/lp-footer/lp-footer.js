class LPFooter extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const css = await fetch('/style.css').then(res => res.text());

        shadow.innerHTML = `
            <style>${css}</style>
            <footer>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div class="socials">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@leapmotorglobal" class="social-link">
                        <svg><use href="/assets/img/socials.svg#youtube"></use></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Leapmotor?mibextid=ZbWKwL" class="social-link">
                        <svg><use href="/assets/img/socials.svg#facebook"></use></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/Leapmotorglobal?t=LMaOPTtj2ErybGaNcou_ZA&s=09" class="social-link">
                        <svg><use href="/assets/img/socials.svg#x"></use></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leapmotor_global?igshid=MzRlODBiNWFlZA%3D%3D" class="social-link">
                        <svg><use href="/assets/img/socials.svg#ig"></use></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@leapmotor_global?_t=8mwTlVH6GNE&_r=1" class="social-link">
                        <svg><use href="/assets/img/socials.svg#tt"></use></svg>
                    </a>
                </div>
            </footer>`;
    }
}

customElements.define('lp-footer', LPFooter)