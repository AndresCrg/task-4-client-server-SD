function createElementInList({ product, price }) {
    const list = document.getElementById('list');
    const item = document.createElement('li');
    item.innerHTML = product + ',' + price;
    list.appendChild(item);
}

window.addEventListener('load', function() {
    let form = this.document.querySelector('#form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let product = document.querySelector('#product').value;
        const price = document.querySelector('#price').value;
        console.log(product, price);

        const obj = { product: product, price: price };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj),
        };
        fetch('/products', options)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((jsonr) => {
                const list = document.getElementById('list');
                list.innerHTML = '';
                for (const productInfo of jsonr.productList) {
                    createElementInList(productInfo);
                }
                console.log();
            })
            .catch((error) => {
                console.log(error);
            });
    });
});