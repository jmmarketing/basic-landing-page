export const buttonComponent = (
  path = "/signup",
  color = "blue",
  text = "Get Started"
) => `
<a data-nav="${path}">
<button class="button button--${color}">${text}</button>
</a>

`;
