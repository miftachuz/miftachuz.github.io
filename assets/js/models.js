const container = document.querySelector('#model-catalog');
const template = document.querySelector("#model-column-template");

async function loadData() {
    const response = await fetch('/assets/data/catalog-entry.json');
    const data = await response.json();

    populateCatalog(data);
}

function populateCatalog(data) {
    
    const models = data.models;
    for (var i = 0; i < models.length; i++) {
        const clone = template.content.cloneNode(true);

        clone.querySelector('h3').textContent = models[i].title;
        clone.querySelector('img').src = models[i].thumb;
        
        const textLink = clone.querySelector('lp-textlink');
        console.log(textLink);

        textLink.setAttribute('href', models[i].link);
        textLink.innerText =`Discover ${models[i].id.toUpperCase()}`;

        container.appendChild(clone);
    }

    feather.replace();
}

loadData();