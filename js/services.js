console.log("services js loaded!");

const services = [
  {
    title: "Property Management",
    p: "We help you find the perfect property that matches your lifestyle and investment goals",
  },
  {
    title: "Luxury Consultation",
    p: "Expert guidance for premium real estate investments",
  },
  {
    title: "Property Valuation",
    p: "Accurate market analysis and property valuation",
  },
  {
    title: "Property Marketing",
    p: "Premium marketing strategies for maximum exposure",
  },
  {
    title: "Investment Advisory",
    p: "Strategic advice to maximize returns",
  },
  {
    title: "Legal Assistance",
    p: "Complete support for documentation and compliance",
  },
];

const container = document.querySelector(".services-cards");
services.forEach((service) => {
  container.innerHTML += `
    <div class="services-card">
      <div class="card-img"></div>
      <h3>${service.title}</h3>
      <p>${service.p}</p>
    </div>
  `;
});
