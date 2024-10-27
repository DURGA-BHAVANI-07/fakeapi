
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "10px";
container.style.justifyContent = "center";
container.style.padding = "20px";
document.body.appendChild(container);

const colors = [
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
];


fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product, index) => {
      setTimeout(() => {
       
        const card = document.createElement("div");
        card.style.display = "inline-block";
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.width = "200px";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.style.textAlign = "center";
        card.style.backgroundColor = colors[index % colors.length]; 
        card.style.color = "#fff";

        const img = document.createElement("img");
        img.src = product.image;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "8px";
        card.appendChild(img);

        const title = document.createElement("h3");
        title.innerText = product.title;
        card.appendChild(title);

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.marginTop = "10px";
        button.style.padding = "5px 10px";
        button.style.border = "none";
        button.style.backgroundColor = "#fff";
        button.style.color = "#333";
        button.style.cursor = "pointer";
        button.style.borderRadius = "4px";
        card.appendChild(button);

        container.appendChild(card);
      }, index * 1000); 
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
