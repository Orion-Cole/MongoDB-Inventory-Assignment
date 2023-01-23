const container = document.getElementById('container');
const display = async () => {
    let data = await fetch('http://localhost:5000/view_collection');
    data.json().then((parsedData) => {
        console.log(parsedData);
        parsedData.forEach((object) => {
            let pTag = document.createElement("p");
            pTag.textContent = object.name;
            container.appendChild(pTag);
        })
    })
}

display()