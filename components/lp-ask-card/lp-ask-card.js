class LPAskCard extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const css = await fetch('/style.css').then(res => res.text());

        shadow.innerHTML = `
            <style>${css}</style>
            <section class="lp-ask-card-container">
                <div class="lp-ask-card-content">
                    <p class="lp-ask-card-subtitle">
                        <slot name="subtitle"></slot>
                    </p>
                    <h1 class="lp-ask-card-title">
                        <slot name="title"></slot>
                    </h1>
                </div>
                <a class="lp-btn-primary">Download a brochure</a>
            </section>`;

        const container = this.shadowRoot.querySelector('.lp-ask-card-container');
        const href = this.shadowRoot.host.getAttribute('href');
        this.shadowRoot.querySelector('a').href = href;

        this.shadowRoot.ownerDocument.defaultView.addEventListener('scroll', () => {
            
             // Total scrollable height minus the visible window height
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // How many pixels we've scrolled from the top
            const scrollTop = window.scrollY || window.pageYOffset;

            // Check if we are near the bottom (e.g., within 50px)
            if (scrollHeight - scrollTop - clientHeight <= 100 || window.scrollY <= 100) {
                container.classList.remove('active');
            } else {
                container.classList.add('active');
            }
        });
    }
}

customElements.define('lp-ask-card', LPAskCard)