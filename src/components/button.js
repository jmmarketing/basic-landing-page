export const buttonComponent = (
  path = "/signup",
  color = "blue",
  text = "Get Started",
  shadow = true
) => `
<a data-nav="${path}">
<button class="button button--${color} ${
  shadow ? "" : "no-shadow"
}">${text}</button>
</a>

`;
