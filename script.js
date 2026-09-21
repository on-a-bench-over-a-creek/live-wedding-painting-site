// Shared rendering helpers keep the page templates consistent.
const image = (path, alt) => `<img src="https://images.unsplash.com/${path}?auto=format&fit=crop&w=1100&q=82" alt="${alt}" loading="lazy">`;
const button = (label, route, secondary = false) => `<a class="button${secondary ? " secondary" : ""}" href="#${route}">${label}</a>`;
const galleryImages = [
  ["Images/practice.jpg", "Studio Work, reference image by Jaclyn Rae"],
  ["Images/virginia.jpg", "Live Painting"],
  ["Images/philadelphia.jpg", "Live Painting"]
];
const pageHeader = (eyebrow, title, intro) => `<header class="page-header"><div class="container"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${intro ? `<p class="intro">${intro}</p>` : ""}</div></header>`;

function homePage() {
  return `<div class="page"><section class="hero" aria-labelledby="hero-title"><div class="hero-content"><h1 id="hero-title">telling love stories through live art</h1><p class="hero-note">A one-of-a-kind painting made in the room, while your celebration unfolds around me.</p><div class="actions">${button("Browse packages", "packages")}${button("Browse the gallery", "gallery", true)}</div></div></section><section class="section"><div class="container story-grid"><div class="story-copy"><h2>Capturing your unique story</h2><p>I believe art has a special way of preserving the moments we treasure most. I take the time to learn about the memories, people, and little details that make your love story unique, then bring them together in a live collage painting. As you and your guests watch your story come to life on canvas, you’ll take home a one of a kind piece that captures not just how your wedding looked, but how it felt.</p><div class="actions">${button("Meet the artist", "about", true)}</div></div><div class="image-pair"><div class="image-frame"><img src="Images/homepaint.JPG" alt="Live wedding painting" loading="lazy"></div></div></div></section></div>`;
}
function aboutPage() {
  return `<div class="page"><section class="section"><div class="container"><div class="two-column"><div><h2>Hello, I'm Hannah</h2><p class="intro">I am a fine artist and Illustrator located in Lancaster, PA. I have been drawing and painting nearly my whole life, and it is my greatest passion. I attended Pennsylvania College of Art and Design for Illustration but am mostly self-taught. I enjoy creating paintings that communicate emotion through color, brushstrokes, and composition. In my free time, I like to cook, garden, and spend time outdoors. I can’t wait to meet you!</p></div><div class="about-image"><img src="Images/portrait34.JPG" alt="Portrait of the wedding artist" loading="lazy"></div></div></div></section></div>`;
}
function paintingPage() {
  const cards = [["Before the vows", "We talk through your vision, venue, and the scene you most want remembered."], ["While you celebrate", "I set up quietly and paint live throughout your reception. Guests can peek in, ask questions, and watch the canvas gather its details."], ["After the last brushstroke", "Your finished artwork is carefully protected and prepared for its journey home, ready to become part of your family story."]];
  return `<div class="page">${pageHeader("The experience", "Live wedding painting, from first toast to final detail.", "[Placeholder intro] A simple, joyful way to make your wedding day part of the artwork itself.")}<section class="section"><div class="container"><div class="painting-sections">${cards.map((card, index) => `<article class="painting-card"><p class="eyebrow">0${index + 1}</p><h3>${card[0]}</h3><p>[Placeholder copy] ${card[1]}</p></article>`).join("")}</div><div class="bottom-actions"><a class="button" href="#contact">Book my event</a><a class="text-link" href="CONTRACT.pdf" target="_blank" rel="noopener">Read the placeholder contract PDF ↗</a></div></div></section></div>`;
}
function galleryPage() {
  return `<div class="page"><section class="section"><div class="container"><div class="gallery-grid">${galleryImages.map((item, index) => `<figure class="gallery-item"><div class="image-frame"><button class="gallery-trigger" type="button" data-image="${item[0]}" data-alt="${item[1]}" aria-label="Enlarge ${item[1]}"><img src="${item[0]}" alt="${item[1]}" loading="lazy"></button></div><figcaption class="gallery-caption"><strong>${item[1]}</strong>${index < 2 ? "Renback Barn, Rochelle VA" : "Bartram's Garden, Philadelphia PA"}</figcaption></figure>`).join("")}</div></div></section><dialog class="gallery-lightbox" id="gallery-lightbox" aria-label="Enlarged gallery image"><button class="lightbox-close" type="button" aria-label="Close enlarged image">×</button><img class="lightbox-image" alt=""></dialog></div>`;
}
function packagesPage() {
  const packages = [["The Classic", "24x36", "Timeless and detailed piece in a classic style", "$850"], ["The Nostalgia Keepsake", "30x40", "The signature collage, with your most special memories and souvenirs", "$1,200"], ["The Memory Montage", "36x48", "Your full story told with love and polished to professional perfection", "$1,850"]];
  return `<div class="page"><header class="page-header"><div class="container"><h1>Choose the shape of your story.</h1><p class="intro">Find what fits your dream event</p></div></header><section class="section"><div class="container"><div class="package-grid">${packages.map((item, index) => `<article class="package-card${index === 1 ? " featured" : ""}"><p class="eyebrow">Package 0${index + 1}</p><h3>${item[0]}</h3><p class="package-subtitle">${item[1]}</p><p>${item[2]}</p><p class="price">${item[3]}</p><ul>${index === 0 ? "<li>1 couple pose in full detail</li><li>choose your pose and moment</li><li>Guest interactions</li><li>Finished piece</li>" : index === 1 ? "<li>1 couple pose in full detail</li><li>choose your pose and moment</li><li>2 colorful painted memories</li><li>5 collage elements of your choice</li><li>Guest interactions</li><li>Custom stickers</li><li>Finished piece</li>" : "<li>1 couple pose in full detail</li><li>4 colorful painted memories</li><li>8 collage elements of your choice</li><li>Guest interactions</li><li>Custom stickers</li><li>Professional framing</li><li>Finished piece</li>"}</ul>${button("Ask about this", "contact", index !== 1)}</article>`).join("")}</div></div></section></div>`;
}
function contactPage() {
  return `<div class="page"><section class="section"><div class="container contact-layout"><div class="contact-aside"><h2>Hi there!</h2><p>I'm happy you're here! Tell me about your special day</p></div><form id="contact-form" action="https://formspree.io/f/mljepzep" method="POST" novalidate><div class="form-grid"><div class="field"><label for="name">First and last name *</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="phone">Phone number *</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="date">Date of wedding *</label><input id="date" name="date" type="date" required></div><div class="field"><label for="package">Chosen package *</label><select id="package" name="package" required><option value="">Select a package</option><option>The Classic</option><option>The Nostalgia Keepsake</option><option>The Memory Montage</option><option>Not sure yet</option></select></div><div class="field full"><label for="details">Tell me the details *</label><textarea id="details" name="details" required placeholder="Venue, guest count, the moment you are imagining..."></textarea></div></div><div class="form-actions"><button class="button" type="submit">Send inquiry</button><p class="form-status" id="form-status" role="status" aria-live="polite"></p></div></form></div></section></div>`;
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
  if (route === "gallery") setupGalleryLightbox();
}

function setupGalleryLightbox() {
  const lightbox = document.querySelector("#gallery-lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");
  document.querySelectorAll(".gallery-trigger").forEach(trigger => trigger.addEventListener("click", () => {
    lightboxImage.src = trigger.dataset.image;
    lightboxImage.alt = trigger.dataset.alt;
    lightbox.showModal();
  }));
  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
  });
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
