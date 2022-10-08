let fetchData = async (page) => {
    return await fetch(page)
        .then((response) => {
            return response.text();
        });
}

let elementData = document.getElementById('data-js');
let elementNavigations = document.getElementsByClassName('link-js');

for (let i = 0; i < elementNavigations.length; i++) {
    elementNavigations[i].onclick = async (event) => {
        let element = event.target;

        let pageAttribute = element.getAttribute('data-page');

        let data = await fetchData(`${pageAttribute}.html`);

        elementData.innerHTML = data;
    }
}

