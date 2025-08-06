import logo from "../assets/shared/logo.svg";
import { logoBarComponent } from "../src/components/logo.js";
import { countdownCardComponent } from "../src/components/countdownCard.js";

export const signupTemplate = `
<main class="main">
      ${logoBarComponent(logo)}

      <section class="hero">
        <div class="hero__left">
          <h1 class="heading hero__title">Work smarter. Save time.</h1>
          <p class="sub-heading hero__sub-title">
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </p>

          <div class="countdown">
            <p class="upper-text">
              Coming <span class="blue">4 Nov 2025</span>
            </p>
            <div class="countdown__container">
               ${countdownCardComponent({
                 label: "days",
                 number: 0,
                 color: "blue",
               })}
                ${countdownCardComponent({
                  label: "hours",
                  number: 0,
                  color: "blue",
                })}
                ${countdownCardComponent({
                  label: "min",
                  number: 0,
                  color: "blue",
                })}
                ${countdownCardComponent({
                  label: "sec",
                  number: 0,
                  color: "blue",
                })}
            </div>
          </div>
        </div>
        <div class="hero__right">
          <form action="" class="form">
            <input
              type="text"
              name="name"
              id="field_name"
              placeholder="Name"
              class="form__input"
            />
            <input
              type="email"
              name="email"
              id="field_email"
              placeholder="Email Address"
              class="form__input"
            />
            <select name="package" id="field_package" class="form__input">
              <option value="Basic">Basic Pack Free</option>
              <option value="Pro">Pro Prack $9.99</option>
              <option value="Ultimate">Ultimate Pack $19.99</option>
            </select>

            <div class="form__input" tabindex="0">
              <div
                class="form__select"
                id="select-custom"
                aria-controls="listbox"
                aria-haspopup="listbox"
                aria-expanded="false"
                role="combobox"
              >
                Basic Pack <span> Free</span>
              </div>
              <div class="form__select-dropdown" role="listbox">
                <div
                  class="form__select--option"
                  data-value="Basic"
                  role="option"
                >
                  Basic Pack <span> Free</span>
                </div>
                <div
                  class="form__select--option"
                  data-value="Pro"
                  role="option"
                >
                  Pro Pack <span> $9.99</span>
                </div>
                <div
                  class="form__select--option"
                  data-value="Ultimate"
                  role="option"
                >
                  Ultimate Pack <span> $19.99</span>
                </div>
              </div>
            </div>

            <input
              type="text"
              name="phone"
              id="field_phone"
              placeholder="Phone Number"
              class="form__input"
            />
            <input
              type="text"
              name="company"
              id="field_company"
              placeholder="Company"
              class="form__input"
            />
            <button type="submit" name="submit" class="button button--submit">
              Get on the list
            </button>
          </form>
        </div>
      </section>

      <div class="accent__background"></div>
    </main>
`;
