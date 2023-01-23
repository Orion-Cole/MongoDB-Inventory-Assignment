document.getElementById('submit-button').addEventListener('click', async () => {
    let priceNumber = +document.getElementById('price-input').value;
    let invNumber = +document.getElementById('inv-amt-input').value;
    let delivDateString = document.getElementById('delivery-date-input').value;
    let delivAmtNumber = +document.getElementById('delivery-amt-input').value;
    let nameString = document.getElementById('name-input').value;

    const itemObject = {
    priceNumber,
    invNumber,
    delivDateString,
    delivAmtNumber,
    nameString
}

let response = await fetch('http://localhost:5000/add_item', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(itemObject)
})
console.log(response);
})

document.getElementById('list-link').addEventListener('click', () => {
    window.location.href = '/display_inventory'
})