import logo from "../assets/shared/logo.svg";
import charts from "../assets/home/illustration-charts.svg";
import { buttonComponent } from "../src/components/button.js";
import { priceCardComponent } from "../src/components/priceCard.js";

export const homeTemplate = `
    <main class="main">
      <section class="logo">
        <a data-nav="/"
          ><img src="${logo}" alt="Officelite Logo"
        /></a>
      </section>
      <section class="hero">
        <div class="hero__left">
          <h1 class="heading hero__title">
            A simple solution to complex tasks is coming soon
          </h1>
          <p class="sub-heading hero__sub-title">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
          ${buttonComponent()}
        </div>
        <div class="hero__right">
          <img
            src="${charts}"
            alt="Statistical charts image"
            class="hero__image"
          />
        </div>
      </section>
      <section class="pricing">
        <div class="pricing__card-container">
          ${priceCardComponent(
            "white",
            "Basic",
            "Free",
            "Up to 5 users for free",
            [
              "Basic documents collaboration",
              "2 GB Stroage",
              "Great security and support",
            ],
            { path: "/signup", color: "light-blue", text: "Try for Free" }
          )}
         

          <!--PLACE HOLDER -->
          ${priceCardComponent(
            "blue",
            "Pro",
            "$9.99",
            "Per user, billed monthly",
            [
              "All essential integrations",
              "5 GB Stroage",
              "More control and insights",
            ],
            { path: "/signup", color: "white", text: "Try for Free" }
          )}

          <!--PLACE HOLDER -->
            ${priceCardComponent(
              "white",
              "Ultimate",
              "$19.99",
              "Per user, billed monthly",
              ["Robust work management", "100 GB Stroage", "VIP Support"],
              { path: "/signup", color: "light-blue", text: "Try for Free" }
            )}

        </div>
        <div class="countdown">
          <p class="upper-text white">
            Coming <span class="blue">4 Nov 2025</span>
          </p>
          <div class="countdown__container">
            <div class="countdown__timer-card">
              <p class="heading" id="days">47</p>
              <p class="label">days</p>
            </div>
            <div class="countdown__timer-card">
              <p class="heading" id="hours">07</p>
              <p class="label">hours</p>
            </div>
            <div class="countdown__timer-card">
              <p class="heading" id="min">56</p>
              <p class="label">min</p>
            </div>
            <div class="countdown__timer-card">
              <p class="heading" id="sec">14</p>
              <p class="label">sec</p>
            </div>
          </div>
          ${buttonComponent("/signup", "blue", "Get Started", false)}
        </div>
      </section>
    </main>
`;
export const homeFooter = `<footer class="footer"></footer>`;
