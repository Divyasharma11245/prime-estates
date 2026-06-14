const properties = [
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
  {
    image: "assets/properties-assets/villa1.avif",
    title: "Modern-Villa",
    location: "Dubai",
    price: `${2.8} million`,
  },
];

const container = document.querySelector(".properties-container");

properties.forEach((property) => {
  container.innerHTML += `
  
    <div class="trust-card">
        <img src="${property.image}">
        <div class="content">
            <h3>${property.title}</h3>
            <div class="card-content">
            <p>${property.location}</p>
            <p class="price">${property.price}</p>
            </div>

            <button class="properties-btn">View Details</button>
        </div>
    </div>

  `;
});
