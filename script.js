// Shared rendering helpers keep the page templates consistent.
const image = (path, alt) => `<img src="https://images.unsplash.com/${path}?auto=format&fit=crop&w=1100&q=82" alt="${alt}" loading="lazy">`;
const button = (label, route, secondary = false) => `<a class="button${secondary ? " secondary" : ""}" href="#${route}">${label}</a>`;
const galleryImages = [
  ["photo-1519225421980-715cb0215aed", "A first dance, translated in brushstrokes"],
  ["photo-1511285560929-80b456fea0bc", "The little moments between the big ones"],
  ["photo-1464366400600-7168b8af9bc3", "A room full of happy anticipation"],
  ["photo-1519741497674-611481863552", "A ceremony scene, painted live"],
  ["photo-1507504031003-b417219a0fde", "A quiet portrait of a very big day"],
  ["photo-1520854221256-17451cc331bf", "The view from the artist's easel"]
];
const pageHeader = (eyebrow, title, intro) => `<header class="page-header"><div class="container"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${intro ? `<p class="intro">${intro}</p>` : ""}</div></header>`;

function homePage() {
  return `<div class="page"><section class="hero" aria-labelledby="hero-title"><div class="hero-content"><h1 id="hero-title">telling love stories through live art</h1><p class="hero-note">A one-of-a-kind painting made in the room, while your celebration unfolds around me.</p><div class="actions">${button("Browse packages", "packages")}${button("Browse the gallery", "gallery", true)}</div></div></section><section class="section"><div class="container story-grid"><div class="story-copy"><p class="eyebrow">The story told</p><h2>Your day, held in color.</h2><p>[Placeholder copy] There is a particular kind of magic in seeing your wedding take shape on canvas. I paint the atmosphere, gestures, and small beautiful in-between moments as they happen.</p><p>[Placeholder copy] Guests get to watch the story build, and you leave with an heirloom that carries the feeling of the day long after the last dance.</p><p>[Placeholder copy] Every painting is made with care, curiosity, and a little room for happy accidents.</p><div class="actions">${button("Meet the artist", "about", true)}</div></div><div class="image-pair"><div class="image-frame">${image("photo-1511285560929-80b456fea0bc", "Placeholder wedding celebration photograph")}</div><div class="image-frame">${image("photo-1507504031003-b417219a0fde", "Placeholder romantic wedding detail")}</div></div></div></section></div>`;
}
function aboutPage() {
  return `<div class="page">${pageHeader("About me", "The person behind the paint.", "[Placeholder intro] A little about the artist, the process, and why live celebrations are my favorite place to make art.")}<section class="section"><div class="container"><div class="two-column"><div><h2>Hello, I'm Hannah</h2><p class="intro">[Placeholder About Me copy] Tell your story here: where you live, what you notice, how you found painting, and what makes a wedding day feel especially meaningful to you.</p><p class="intro">[Placeholder About Me copy] This space is intentionally personal and easy to replace with your own words.</p></div><div class="about-image">${image("photo-1488426862026-3ee34a7d66df", "Placeholder portrait of the wedding artist")}</div></div><div class="about-bottom image-frame">${image("photo-1520854221256-17451cc331bf", "Placeholder wide wedding painting studio image")}</div></div></section></div>`;
}
function paintingPage() {
  const cards = [["Before the vows", "We talk through your vision, venue, and the scene you most want remembered."], ["While you celebrate", "I set up quietly and paint live throughout your reception. Guests can peek in, ask questions, and watch the canvas gather its details."], ["After the last brushstroke", "Your finished artwork is carefully protected and prepared for its journey home, ready to become part of your family story."]];
  return `<div class="page">${pageHeader("The experience", "Live wedding painting, from first toast to final detail.", "[Placeholder intro] A simple, joyful way to make your wedding day part of the artwork itself.")}<section class="section"><div class="container"><div class="painting-sections">${cards.map((card, index) => `<article class="painting-card"><p class="eyebrow">0${index + 1}</p><h3>${card[0]}</h3><p>[Placeholder copy] ${card[1]}</p></article>`).join("")}</div><div class="bottom-actions"><a class="button" href="#contact">Book my event</a><a class="text-link" href="CONTRACT.pdf" target="_blank" rel="noopener">Read the placeholder contract PDF ↗</a></div></div></section></div>`;
}
function galleryPage() {
  return `<div class="page">${pageHeader("Selected stories", "Paintings made in the moment.", "[Placeholder intro] Replace these temporary images and captions with your own work as your collection grows.")}<section class="section"><div class="container"><div class="gallery-grid">${galleryImages.map((item, index) => `<figure class="gallery-item"><div class="image-frame">${image(item[0], `Placeholder gallery image ${index + 1}`)}</div><figcaption class="gallery-caption"><strong>${item[1]}</strong>[Placeholder caption text]</figcaption></figure>`).join("")}</div></div></section></div>`;
}
function packagesPage() {
  const packages = [["The Sketch", "A beautiful introduction to live painting for intimate celebrations.", "$1,800"], ["The Full Story", "The signature experience: a generous canvas, your chosen scene, and the whole room invited in.", "$2,800"], ["The Keepsake", "A larger-scale heirloom with extra details and time for the little moments.", "$3,800"]];
  return `<div class="page">${pageHeader("Ways to work together", "Choose the shape of your story.", "[Placeholder intro] These sample packages are here to help you begin. Pricing and details can be replaced with your final offerings.")}<section class="section"><div class="container"><div class="package-grid">${packages.map((item, index) => `<article class="package-card${index === 1 ? " featured" : ""}"><p class="eyebrow">Package 0${index + 1}</p><h3>${item[0]}</h3><p>${item[1]}</p><p class="price">${item[2]}</p><ul><li>Live painting during your celebration</li><li>Archival materials</li><li>[Placeholder inclusion]</li></ul>${button("Ask about this", "contact", index !== 1)}</article>`).join("")}</div></div></section></div>`;
}
function contactPage() {
  return `<div class="page">${pageHeader("Let's make something lasting", "Tell me about your day.", "")}<section class="section"><div class="container contact-layout"><div class="contact-aside"><h2>Start with a hello.</h2><p>[Placeholder contact copy] Share a few details about your wedding, and I will get back to you with availability and next steps.</p></div><form id="contact-form" action="https://formspree.io/f/mljepzep" method="POST" novalidate><div class="form-grid"><div class="field"><label for="name">First and last name *</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="phone">Phone number *</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="date">Date of wedding *</label><input id="date" name="date" type="date" required></div><div class="field"><label for="package">Chosen package *</label><select id="package" name="package" required><option value="">Select a package</option><option>The Sketch</option><option>The Full Story</option><option>The Keepsake</option><option>Not sure yet</option></select></div><div class="field full"><label for="details">Tell me the details *</label><textarea id="details" name="details" required placeholder="Venue, guest count, the moment you are imagining..."></textarea></div></div><div class="form-actions"><button class="button" type="submit">Send inquiry</button><p class="form-status" id="form-status" role="status" aria-live="polite"></p></div></form></div></section></div>`;
}
// Hash routing keeps the site static while giving each view its own URL.
const app = document.querySelector("#app");
const menu = document.querySelector("#site-menu");
const menuToggle = document.querySelector(".menu-toggle");
const routes = ["home", "about", "painting", "gallery", "packages", "contact"];
function render() {
  const requested = location.hash.slice(1) || "home";
  const route = routes.includes(requested) ? requested : "home";
  const pages = { home: homePage, about: aboutPage, painting: paintingPage, gallery: galleryPage, packages: packagesPage, contact: contactPage };
  app.innerHTML = pages[route]();
  document.title = `${route === "home" ? "Love Told" : route[0].toUpperCase() + route.slice(1)} | Love Told`;
  document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("active", link.dataset.route === route));
  menu.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); app.focus({ preventScroll: true });
  if (route === "contact") document.querySelector("#contact-form").addEventListener("submit", submitForm);
}

// Submit through Formspree after native browser validation succeeds.
async function submitForm(event) {
  event.preventDefault(); const form = event.currentTarget; const status = document.querySelector("#form-status"); const submitButton = form.querySelector("[type=submit]");
  if (!form.checkValidity()) { form.reportValidity(); status.textContent = "Please complete the required fields."; return; }
  submitButton.disabled = true; status.textContent = "Sending your inquiry...";
  try {
    const response = await fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Form submission failed");
    form.reset(); status.textContent = "Thank you. Your inquiry has been sent.";
  } catch (error) {
    status.textContent = "Something went wrong while sending your inquiry. Please try again or email directly.";
  } finally {
    submitButton.disabled = false;
  }
}
menuToggle.addEventListener("click", () => { const open = menu.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(open)); });
window.addEventListener("hashchange", render); render();
