import { buttonComponent } from "./button.js";

export const priceCardComponent = (
  color = "white",
  plan = "Basic",
  price = "Free",
  users = "Up to 5 users for free",
  details = ["Detail 1", "Detail 2", "Detail 3"],
  buttonConfig = {
    path: "/signup",
    color: "blue",
    text: "Get Started",
  }
) => `

 <div class="card" data-color="${color}">
    <div class="card__price">
         <p class="title card__plan">${plan}</p>
         <h2 class="heading">${price}</h2>
        <p>${users}</p>
     </div>
        <div class="card__details">
        ${details.map((d) => `<p>${d}</p>`).join("")}
        </div>
     ${buttonComponent(
       buttonConfig.path,
       buttonConfig.color,
       buttonConfig.text
     )}
</div>
`;
