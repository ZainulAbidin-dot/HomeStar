const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="../css/footer.css">
<footer class="footer">
  <div class="container">
    <div class="newsletter">
      <div class="newsletter__signup">
        <i class="fa-solid fa-envelope"></i>
        <p>Get Exclusive Tips & Advice</p>
        <a href="../views/signup.html" class="btn newsletter__signup-button">Sign Up</a>
      </div>
      <div class="newsletter__contact-us">
        <p>Need Help?</p>
        <a class="newsletter__contact-us-link" href="#">Contact Us</a>
      </div>
    </div>
    <div class="primary-footer">
      <div class="primary-footer__for-homeworks">
        <h2>Homeworks</h2>
        <ul>
          <li><a href="#">Browse Categories</a></li>
          <li><a href="#">Browse Task</a></li>
          <li><a href="#">Write A Review</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Star Reviews</a></li>
          <li><a href="#">Homeowner FAQ</a></li>
          <li><a href="#">Review Guideline</a></li>
          <li><a href="#">Homeowner Trust</a></li>
          <li><a href="#">Cost Guides</a></li>
          <li><a href="#">Reno Report</a></li>
        </ul>
      </div>
      <div class="primary-footer__for-home-professionals">
        <h2>Home Professionals</h2>
        <ul>
          <li><a href="#">Join Homestars</a></li>
          <li><a href="#">Brand Builder</a></li>
          <li><a href="#">Home Professional FAQ</a></li>
          <li><a href="#">Building Trust</a></li>
          <li><a href="#">Mobile App</a></li>
          <li><a href="#">Home Professional Terms</a></li>
          <li><a href="#">Pro Center</a></li>
        </ul>
      </div>
      <div class="primary-footer__for-homestars">
        <h2>HomeStars</h2>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Press & Announcements</a></li>
          <li><a href="#">Career at HomeStars</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Cities</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div class="primary-footer__social">
        <div class="social__logo">
          <div class="social_icons">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-pinterest"></i></a>
          </div>
        </div>
        <a href="#" class="primary-footer_logo">
          <img src="https://homestars.com/images/hs_ha_combined2x-optimized_20072018.png" alt="">
        </a>
        <small class="primary-footer__copyright">
          © 2022 HomeStars, Inc., a HomeAdvisor company.
        </small>
      </div>
    </div>
  </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("footer-component", Footer);

const navTemp = document.createElement("template");
navTemp.innerHTML = `

<link rel="stylesheet" href="../css/nav.css">
    <header class="header">
      <nav class="navbar">
        <a href="../index.html" class="logo">
            <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1236.7 524.4"
          enable-background="new 0 0 1236.7 524.4"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          class="site-header__logo"
        >
          <g>
            <path
              id="XMLID_26_"
              fill="#28A9E2"
              d="M904.3,261.7c-2.2,1.2-3.8,2.7-4.6,4.3c-0.9,1.7-1.3,3.5-1.3,5.5c0,2.9,0.9,5.3,2.8,7.2
            		c1.9,1.9,4.5,2.9,8,2.9c2.7,0,5.3-0.6,7.6-1.7c2.3-1.2,4.2-2.7,5.8-4.5c1.6-1.9,2.8-4.1,3.8-6.6c0.9-2.5,1.4-5.1,1.4-7.7v-3.5
            		c-5.8,0-10.5,0.4-14.4,1.1C909.5,259.6,906.5,260.5,904.3,261.7z"
            ></path>
            <path
              id="XMLID_25_"
              fill="#28A9E2"
              d="M331.7,222.8c-2.6,0-5.1,0.5-7.6,1.5c-2.4,1-4.6,2.6-6.6,4.7c-1.9,2.2-3.5,4.9-4.6,8.3
            		c-1.2,3.4-1.7,7.4-1.7,12.2c0,9.9,1.6,17.2,4.7,21.8c3.2,4.6,8.2,6.9,15.1,6.9c6,0,10.9-2.4,14.6-7.1c3.7-4.7,5.5-11.7,5.5-20.7
            		c0-9.2-1.5-16.1-4.5-20.7C343.5,225.1,338.6,222.8,331.7,222.8z"
            ></path>
            <path
              id="XMLID_24_"
              fill="#28A9E2"
              d="M627.5,218.5c-4.7,0-8.7,1.7-11.9,5.2c-3.2,3.5-5,8-5.6,13.6h32.6c0.3-6.2-1-10.9-3.8-14
            		C636.1,220.1,632.3,218.5,627.5,218.5z"
            ></path>
            <path
              fill="#28A9E2"
              d="M1174.2,99c-30.6-11.2-65-11.7-97.1-14.5c-36.1-3.1-73.9-5.9-110-9c-75.1-6.4-149.5-11.5-224.6-18
            		C593.1,44.6,443.8,31.4,294.4,18.8C255.6,15.5,216.8,12,178,9c-30.9-3-86.7-9-94.8-9C34.7,0.2,10.5,32.1,2.5,72.1
            		c-3.1,15.7-3.2,31.9-1.3,47.7c7,57.8,12.8,115.9,21.9,173.3c6.6,41.5,19.3,82.3,56.8,106c36,22.7,111.6,17.7,163.8,17.7
            		c60.5,0,121,0.1,181.5,0.1c124.1,0,248.1,0,372.2-0.2c16.6,0,62.3,0.2,62.3,0.2s7.7,5.8,14.6,12.4c17.8,16.9,36.9,32.4,57.4,45.9
            		c35.9,23.7,89,52.8,133.5,48.8c-35.7-25.7-55.7-62.9-58.9-106.5c63.2-1.4,156.2,7.9,195.9-40.5c36.1-43.9,32.2-113.1,34.1-166.4
            		C1238.3,162.4,1222.9,116.8,1174.2,99z M259.9,304.4h-33.7v-60.6h-53.3v60.6h-33.7V158.7h33.7v55.9h53.3v-55.9h33.7V304.4z
            		 M380.9,272.2c-2.9,7.2-6.8,13.3-11.9,18.5c-5,5.1-11,9.1-17.9,11.9c-6.9,2.8-14.4,4.2-22.4,4.2c-7.8,0-14.8-1-21.1-3
            		c-6.3-2-11.8-5.2-16.3-9.5c-4.5-4.3-8-9.9-10.5-16.6c-2.4-6.8-3.7-14.9-3.7-24.4c0-8.8,1.4-16.8,4.2-24c2.8-7.2,6.8-13.3,11.9-18.5
            		c5.1-5.1,11.1-9.1,18-11.9c6.9-2.8,14.5-4.2,22.7-4.2c16.4,0,29.1,4.5,38,13.4c8.9,8.9,13.4,22.4,13.4,40.4
            		C385.2,257.1,383.8,265,380.9,272.2z M560.7,304.4h-33v-67.3c0-4.6-0.7-8.3-2-10.9c-1.4-2.7-3.9-4-7.6-4c-2.4,0-4.9,0.8-7.4,2.3
            		c-2.5,1.5-4.7,3.6-6.8,6.4c-2,2.7-3.6,6-4.8,9.7c-1.2,3.8-1.8,7.8-1.8,12.1v51.7h-32.6v-67.5c0-4.3-0.7-7.9-2-10.6
            		c-1.3-2.7-3.9-4.1-7.8-4.1c-2.6,0-5.2,0.8-7.8,2.4c-2.6,1.6-4.9,3.8-6.8,6.5c-2,2.7-3.6,6-4.8,9.6c-1.2,3.7-1.8,7.7-1.8,12v51.7
            		H401V197.1h30.7c0,2-0.1,4.6-0.3,7.8c-0.2,3.2-0.5,6.2-1,9.1h0.2c3.3-6,8-10.7,14-14.1c6-3.4,12.8-5.1,20.5-5.1
            		c8.3,0,14.8,1.8,19.7,5.5c4.8,3.6,8.1,8.2,9.9,13.8c2.9-5.3,7.2-9.8,12.9-13.6c5.7-3.8,12.7-5.7,20.9-5.7c10.5,0,18.5,3,24,9
            		c5.5,6,8.3,15.1,8.3,27.3V304.4z M674.9,251.4c-0.2,2.4-0.5,4.9-0.8,7.7h-64.1c0.1,7.1,2.4,12.5,6.7,16.4s11,5.8,19.9,5.8
            		c5.2,0,10.5-0.5,15.8-1.6c5.3-1.1,10.6-2.8,15.8-5.1l3.2,24.8c-6.2,2.4-12.8,4.3-19.8,5.5c-7,1.2-13.8,1.8-20.4,1.8
            		c-17.6,0-31.1-4.4-40.4-13.2c-9.4-8.8-14.1-22.7-14.1-41.7c0-8.2,1.1-15.8,3.4-22.9c2.2-7,5.6-13.1,9.9-18.2
            		c4.4-5.1,9.8-9.1,16.2-12c6.4-2.9,13.8-4.3,22.2-4.3c8.1,0,15.1,1.3,21,3.9c5.9,2.6,10.8,6.1,14.6,10.6c3.8,4.5,6.6,9.7,8.4,15.8
            		c1.8,6,2.7,12.6,2.7,19.6C675.2,246.7,675.1,249,674.9,251.4z M777.4,277.5c-2.8,6-6.8,11.1-11.9,15.5c-5.1,4.4-11.2,7.8-18.2,10.3
            		c-7.1,2.4-14.9,3.7-23.5,3.7c-6.9,0-13.2-0.3-18.8-1c-5.6-0.6-10.9-1.6-16-2.9l3.2-31.9c4.7,2,9.8,3.6,15.2,4.7
            		c5.4,1.2,11.1,1.7,17.2,1.7c5.5,0,10.1-1.2,14-3.6c3.9-2.4,5.8-6.2,5.8-11.5c0-4.2-1.4-7.4-4.3-9.7c-2.9-2.3-6.5-4.4-10.8-6.2
            		c-4.3-1.8-9-3.6-14-5.5c-5-1.9-9.7-4.4-14-7.6c-4.3-3.2-7.9-7.2-10.8-12.2s-4.3-11.5-4.3-19.7c0-6.9,1.3-13.1,3.9-18.7
            		c2.6-5.5,6.3-10.3,11.2-14.4c4.9-4,10.9-7.1,18-9.3c7.1-2.2,15.3-3.2,24.5-3.2c3.7,0,8.1,0.2,12.9,0.6c4.9,0.4,9.4,1.2,13.6,2.2
            		l-3,29.4c-8.2-2.9-16.5-4.3-25-4.3c-6.9,0-12,1.3-15.2,3.8c-3.7,2.8-5.2,6.7-4.8,11.7c0.3,2.8,1.8,5.3,3.9,7.1
            		c3,2.4,6.8,4.7,11.4,6.7c4.4,1.9,9.1,3.9,14.2,5.9c5.1,2,9.9,4.6,14.2,7.9c4.4,3.2,8.1,7.3,11,12.3c2.9,5,4.4,11.3,4.4,18.9
            		C781.6,265.1,780.2,271.5,777.4,277.5z M845.6,305.9c-4.3,0.6-8.4,0.9-12.3,0.9c-6.2,0-11.4-0.6-15.5-1.7
            		c-4.2-1.2-7.6-3.1-10.1-5.7c-2.6-2.7-4.4-6.2-5.5-10.6c-1.1-4.4-1.6-9.9-1.6-16.5v-49.9h-16.2v-25.3h16.2v-31.7l33-8.8v40.6h23.1
            		v25.3h-23.1v42.3c0,5.5,0.8,9.3,2.4,11.4c1.6,2.2,4.5,3.2,8.6,3.2c2,0,3.9-0.1,5.7-0.4c1.8-0.3,3.6-0.6,5.5-1.1l1.9,25.7
            		C854,304.5,850,305.3,845.6,305.9z M930.7,304.4c0-2.6,0-5.3,0.1-8c0.1-2.7,0.3-5.5,0.8-8.2h-0.2c-2.6,5.6-6.8,10.1-12.7,13.5
            		c-5.9,3.4-12.6,5.1-20.1,5.1c-5.2,0-9.7-0.8-13.6-2.5c-3.9-1.7-7.1-3.9-9.7-6.8c-2.6-2.9-4.6-6.2-5.9-10c-1.4-3.8-2.1-7.9-2.1-12.4
            		c0-6.8,1.5-12.6,4.5-17.4c3-4.8,7.2-8.7,12.5-11.8c5.3-3,11.7-5.3,19.1-6.7c7.4-1.4,15.5-2.2,24.3-2.2v-4.3c0-4.5-1.4-7.8-4.2-9.9
            		s-7.8-3.2-15-3.2c-4.7,0-9.8,0.7-15.1,2.1c-5.3,1.4-10.1,3.1-14.5,5.1l-5.6-25.7c5.6-2,12-3.6,19.3-4.9c7.3-1.2,14.4-1.8,21.5-1.8
            		c9.1,0,16.6,0.8,22.6,2.5c6,1.7,10.8,4.1,14.4,7.3c3.6,3.2,6.1,7.2,7.6,11.8c1.4,4.6,2.2,9.9,2.2,15.8v47.3c0,3.9,0.1,8.1,0.2,12.5
            		c0.1,4.5,0.4,8.8,0.6,12.9H930.7z M1042.4,227.1c-9.1-2-15.9-0.4-20.5,4.9c-4.6,5.3-6.9,14.6-6.9,28.2v44.2h-32.6V197.1h30.5
            		c0,2.3-0.1,5.2-0.3,8.7c-0.2,3.5-0.6,6.9-1.2,10.3h0.4c2.9-6.5,6.9-11.8,12.1-16c5.2-4.2,11.9-6,20.1-5.6L1042.4,227.1z
            		 M1123.2,285.3c-2.3,4.5-5.6,8.4-9.8,11.5c-4.2,3.2-9.4,5.6-15.3,7.3c-6,1.7-12.6,2.6-20,2.6c-8.6,0-16.6-1-23.7-3l1.7-26.8
            		c6.6,2.9,14.1,4.3,22.4,4.3c4.2,0,7.4-0.8,9.7-2.3c2.3-1.5,3.5-3.6,3.5-6.2c0-2.6-1-4.6-2.9-6.2c-1.9-1.5-4.4-2.8-7.3-4
            		c-3-1.1-6.1-2.4-9.5-3.7c-3.4-1.3-6.6-3.1-9.5-5.4c-2.9-2.3-5.4-5.3-7.3-9c-1.9-3.7-2.9-8.4-2.9-14.4c0-4.9,0.9-9.5,2.8-13.9
            		c1.9-4.4,4.7-8.2,8.6-11.4c3.9-3.2,8.8-5.8,14.8-7.7c6-1.9,13.1-2.8,21.3-2.8c2.9,0,6,0.2,9.3,0.5c3.3,0.4,6.5,0.8,9.5,1.4
            		l-1.1,25.7c-2.7-1-5.7-1.7-9-2.2c-3.2-0.4-6.4-0.6-9.6-0.6c-4.2,0-7.3,0.8-9.3,2.3c-2,1.5-3,3.5-3,5.9c0,2.3,1,4.2,3,5.6
            		c2,1.4,4.5,2.8,7.4,4.1c2.9,1.3,6.2,2.7,9.6,4.1c3.5,1.4,6.7,3.3,9.6,5.6c2.9,2.3,5.4,5.3,7.4,9c2,3.7,3,8.4,3,14.1
            		C1126.6,275.7,1125.5,280.7,1123.2,285.3z"
            ></path>
          </g>
        </svg>
              </a>
        <button class="hamburger" id="hamburger">
          <span class="inner"></span>
        </button>
        <div class="nav-wrapper">
          <ul class="nav__items">
            <li class="nav__item"><a class="nav__link" href="../index.html">Home</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/review.html">Review</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/joinHomeStar.html">JoinHomeStar</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/categories.html">Categories</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/newsLetter.html">News-Letter</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/login.html">Log In</a></li>
            <li class="nav__item"><a class="nav__link" href="../views/signup.html">Sign Up</li>

          </ul>
        </div>
        <div class="card-wrapper">
        <a class="navlink" href="./index.html">ARE YOU A HOME PRO?</a>
        </div>
      </nav>
    </header>
  `;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navTemp.content.cloneNode(true));
  }

  toggleNav() {
    this.shadowRoot.querySelector(".hamburger").classList.toggle("menu-active");
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".hamburger")
      .addEventListener("click", () => this.toggleNav());
  }
}

window.customElements.define("nav-component", Navbar);
