class Hero extends HTMLElement {
    
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const css = await fetch('/style.css').then(res => res.text());

        shadow.innerHTML = `
            <style>${css}</style>
            <header id="lp-hero" class="lp-hero">
                <div class="lp-hero-content">
                    <h1 class="title">
                        <slot name="title"></slot>
                    </h1>
                    <p class="sub-title">
                        <slot name="sub-title"></slot>
                    </p>
                    <div class="lp-hero-extra">
                        <slot></slot>
                    </div>
                </div>
            </header>`;

        const url = this.getAttribute('src') || null;
        if (url !== null) {
            this.shadowRoot.getElementById('lp-hero').style.backgroundImage = `url('${url}')`;
        }

        const textPos = this.getAttribute('text-pos') || null;
        if (textPos !== null) {
            if (textPos == 'center') {
                this.shadowRoot.querySelector('.lp-hero-content').classList.add('center');
            }
            else {
                this.shadowRoot.querySelector('.lp-hero-content').classList.remove('center');
            }
        }
    }
}

customElements.define('lp-hero', Hero);