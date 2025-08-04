import logo from "../assets/shared/logo.svg";
import charts from "../assets/home/illustration-charts.svg";

export const homeTemplate = `
    <main class="main">
      <section class="logo">
        <a href="/"
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
          <a href="signup.html" class="href"
            ><button class="button button--blue">Get Started</button></a
          >
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
          <div class="card" data-color="white">
            <div class="card__price">
              <p class="title card__plan">Basic</p>
              <h2 class="heading">Free</h2>
              <p>Up to 5 users for free</p>
            </div>
            <div class="card__details">
              <p>Basic documents collaboration</p>
              <p>2 GB storage</p>
              <p>Great security and support</p>
            </div>
            <a href="signup.html"
              ><button class="button button--light-blue">
                Try for Free
              </button></a
            >
          </div>
          <!--PLACE HOLDER -->
          <div class="card" data-color="blue">
            <div class="card__price">
              <p class="title card__plan">Basic</p>
              <h2 class="heading">Free</h2>
              <p>Up to 5 users for free</p>
            </div>
            <div class="card__details">
              <p>Basic documents collaboration</p>
              <p>2 GB storage</p>
              <p>Great security and support</p>
            </div>
            <a href="signup.html"
              ><button class="button button--white">Try for Free</button></a
            >
          </div>
          <!--PLACE HOLDER -->
          <div class="card" data-color="white">
            <div class="card__price">
              <p class="title card__plan">Basic</p>
              <h2 class="heading">Free</h2>
              <p>Up to 5 users for free</p>
            </div>
            <div class="card__details">
              <p>Basic documents collaboration</p>
              <p>2 GB storage</p>
              <p>Great security and support</p>
            </div>
            <a href="signup.html"
              ><button class="button button--light-blue">
                Try for Free
              </button></a
            >
          </div>
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
          <a href="signup.html"
            ><button class="button button--blue no-shadow">
              Get Started
            </button></a
          >
        </div>
      </section>
    </main>
`;
export const homeFooter = `<footer class="footer"></footer>`;
