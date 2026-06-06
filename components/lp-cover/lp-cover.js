class LPCover extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const css = await fetch('/style.css').then(res => res.text());

        shadow.innerHTML = `
            <style>${css}</style>
            <section class="lp-range">
                <img id="lp-range-landscape" alt="lp-range-landscape.png"> 
                <img id="lp-range-portrait" alt="lp-range-portrait.png">
                <div class="lp-range-content">
                    <h1 id="lp-range-txt"></h1>
                    <slot></slot>
                </div>
            </section>`;

        const text = this.getAttribute('txt') || null;
        const landscape = this.getAttribute('srcl') || null;
        const portrait = this.getAttribute('srcp') || null;

        if (text !== null) {
            this.shadowRoot.querySelector('h1').innerText = text;
        }

        if (landscape !== null) {
            this.shadowRoot.getElementById('lp-range-landscape').src = landscape;
        }

        if (portrait !== null) {
            this.shadowRoot.getElementById('lp-range-portrait').src = portrait;
        }
    }
}

customElements.define('lp-cover', LPCover)