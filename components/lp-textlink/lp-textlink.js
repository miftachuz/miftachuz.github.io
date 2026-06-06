class LPTextLink extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const css = await fetch('/style.css').then(res => res.text());

        shadow.innerHTML = `
            <style>${css}</style>
            <a class="lp-text-link">
                <p><slot></slot></p>
                <span>&#x276F</span>
            </a>`;

        const href = this.shadowRoot.host.getAttribute('href');
        this.shadowRoot.querySelector('a').href = href;    
    }
}

customElements.define('lp-textlink', LPTextLink)