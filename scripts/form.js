const products = [
    {
        id: "gc-1001",
        name: "General Construction",
        averagerating: 4.8
    },
    {
        id: "aw-1002",
        name: "Architectural Works",
        averagerating: 4.6
    },
    {
        id: "cw-1003",
        name: "Civil Works",
        averagerating: 4.5
    },
    {
        id: "ew-1004",
        name: "Electrical Works",
        averagerating: 4.7
    },
    {
        id: "mp-1005",
        name: "Mechanical and Plumbing Works",
        averagerating: 4.4
    }
];

const productSelect = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;