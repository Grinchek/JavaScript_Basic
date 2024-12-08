const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
tableBody.innerHTML += ` <tr class="table-light">
                    <th scope="row">1</th>
                    <td>Iphone 15</td>
                    <td>Lorem ipsum dolor.</td>
                    <td>1200$</td>
                </tr>`;

let products = [];
createBtn.onclick = () => {
    const newProduct = getProductFromForm();
    addProductToTable(newProduct);
    products.push(newProduct);
};
// function getProductFromForm() {
//     const modelInput = document.getElementById('modelinput');
//     const descInput = document.getElementById('description');
//     const priceInput = document.getElementById('priceinput');
//     return
//     {
//         id: 0,
//         model: modelInput.value,
//         description: descInput.value,
//         price: +priceInput.value
//     }
// }

function getProductFromForm() {
    const modelInput = document.getElementById('modelinput');
    const desInput = document.getElementById('description');
    const priceInput = document.getElementById('priceinput');
    return {
        id: 0,
        model: modelInput.value,
        description: desInput.value,
        price: +priceInput.value
    }
}
function addProductToTable(product) {
    tableBody.innerHTML += `
                <tr class="table-light">
                    <th scope="row">${products.length + 1}</th>
                    <td>${product.model}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                </tr>`;
}