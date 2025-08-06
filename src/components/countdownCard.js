export const countdownCardComponent = (config = {}) => {
  const { label, number = "00", color = "" } = config;

  return `
<div class="countdown__timer-card" data-color="${color}">
    <p class="heading" id="${label}">${number}</p>
    <p class="label">${label}</p>
</div>`;
};
