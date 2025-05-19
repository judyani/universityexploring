// Preloader logic
const preloaderElement = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
  preloaderElement.classList.add("remove");
});

// Utility: Add event on multiple elements
function addEventOnElements(elements, eventType, callback) {
  elements.forEach(element => {
    element.addEventListener(eventType, callback);
  });
}

// Navbar toggler for mobile
const navbarElement = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
const overlayElement = document.querySelector("[data-overlay]");

function toggleNavbar() {
  navbarElement.classList.toggle("active");
  overlayElement.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(Array.from(navTogglerElements), "click", toggleNavbar);

// Header scroll effect
const headerElement = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    headerElement.classList.add("active");
  } else {
    headerElement.classList.remove("active");
  }
});

// University data (array of objects)
const universities = [
  { name: "Harvard University", country: "USA", price: 120, id: 1 },
  { name: "Stanford University", country: "USA", price: 110, id: 2 },
  { name: "University of Toronto", country: "Canada", price: 100, id: 3 },
  { name: "MIT", country: "USA", price: 130, id: 4 },
  { name: "McGill University", country: "Canada", price: 90, id: 5 }
  // ...add more as needed
];

// Example: Render university names in console using forEach
universities.forEach(university => {
  console.log(`University: ${university.name} (${university.country}) - $${university.price}`);
});

// Example: Filter affordable universities (price <= 110)
const affordableUniversities = universities.filter(u => u.price <= 110);
console.log("Affordable Universities:", affordableUniversities.map(u => u.name));

// Example: Map to get university names
const universityNames = universities.map(u => u.name);
console.log("All University Names:", universityNames);

// Example: Find a university by name
function findUniversityByName(name) {
  return universities.find(u => u.name === name);
}

// JSON data handling: Save/load favorites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem("favoriteUniversities", JSON.stringify(favorites));
}
function loadFavorites() {
  const data = localStorage.getItem("favoriteUniversities");
  return data ? JSON.parse(data) : [];
}

// Example: Add a university to favorites
function addFavoriteUniversity(universityId) {
  const favorites = loadFavorites();
  if (!favorites.includes(universityId)) {
    favorites.push(universityId);
    saveFavorites(favorites);
    console.log(`Added university ID ${universityId} to favorites.`);
  }
}

// Example: Show favorites in console
function showFavoriteUniversities() {
  const favorites = loadFavorites();
  const favoriteUnis = universities.filter(u => favorites.includes(u.id));
  console.log("Favorite Universities:", favoriteUnis.map(u => u.name));
}

// Example usage (for demonstration):
addFavoriteUniversity(2); // Add Stanford
addFavoriteUniversity(3); // Add Toronto
showFavoriteUniversities();

// Session storage: Save last visited university
function setLastVisitedUniversity(universityName) {
  sessionStorage.setItem("lastVisitedUniversity", universityName);
}
function getLastVisitedUniversity() {
  return sessionStorage.getItem("lastVisitedUniversity");
}
// Example usage:
setLastVisitedUniversity("MIT");
console.log("Last visited university:", getLastVisitedUniversity());

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Initialize dark mode based on saved preference
window.addEventListener("DOMContentLoaded", () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// Update footer year dynamically
function updateFooterYear() {
  const footerYearElement = document.querySelector(".footer .copyright");
  const currentYear = new Date().getFullYear();
  if (footerYearElement) {
    footerYearElement.innerHTML = `&copy; ${currentYear} || All Rights Reserved`;
  }
}
updateFooterYear();

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Example: Add a button for scroll-to-top functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.classList.add("scroll-to-top-btn");
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.zIndex = "1000";
scrollToTopButton.addEventListener("click", scrollToTop);
document.body.appendChild(scrollToTopButton);

// Show/hide scroll-to-top button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Saving/Retrieving User Data
function saveUserData(key, value) {
  localStorage.setItem(key, value);
}

// Error Handling & Debugging
function safeExecute(callback) {
  try {
    callback();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Regex Validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage for contact form validation
document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#email").value;
  if (!validateEmail(emailInput)) {
    alert("Invalid email address!");
  } else {
    alert("Message sent successfully!");
  }
});

// Timer & Date Object
function displayCurrentTime() {
  const timeElement = document.querySelector(".footer .current-time");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }
}
setInterval(displayCurrentTime, 1000);

// Math, String, Random Methods
function generateRandomUniversity() {
  const randomIndex = Math.floor(Math.random() * universities.length);
  return universities[randomIndex];
}

// Example usage:
console.log("Random University:", generateRandomUniversity().name);

// Event Listeners & Shortcuts
document.addEventListener("keydown", (event) => {
  if (event.key === "t") {
    scrollToTop();
  }
});

// Real-time Search
const searchInput = document.querySelector("#search-universities");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredUniversities = universities.filter((u) =>
    u.name.toLowerCase().includes(query)
  );
  searchResults.innerHTML = filteredUniversities
    .map((u) => `<li>${u.name}</li>`)
    .join("");
  saveSearchHistory(query);
});

// Search History
const searchHistoryKey = "searchHistory";

function saveSearchHistory(query) {
  if (!query) return;
  const history = JSON.parse(localStorage.getItem(searchHistoryKey)) || [];
  if (!history.includes(query)) {
    history.push(query);
    localStorage.setItem(searchHistoryKey, JSON.stringify(history));
  }
}

function loadSearchHistory() {
  const history = JSON.parse(localStorage.getItem(searchHistoryKey)) || [];
  console.log("Search History:", history);
}

// CRUD Functionality
function renderUniversities() {
  const universityList = document.querySelector(".university-list");
  universityList.innerHTML = universities
    .map(
      (u) => `
    <li>
      ${u.name} (${u.country}) - $${u.price}
      <button onclick="editUniversity(${u.id})">Edit</button>
      <button onclick="deleteUniversity(${u.id})">Delete</button>
    </li>`
    )
    .join("");
}

function addUniversity(name, country, price) {
  const newUniversity = {
    id: universities.length + 1,
    name,
    country,
    price,
  };
  universities.push(newUniversity);
  renderUniversities();
}

function editUniversity(id) {
  const university = universities.find((u) => u.id === id);
  const newName = prompt("Enter new name:", university.name);
  const newCountry = prompt("Enter new country:", university.country);
  const newPrice = prompt("Enter new price:", university.price);
  if (newName && newCountry && newPrice) {
    university.name = newName;
    university.country = newCountry;
    university.price = parseFloat(newPrice);
    renderUniversities();
  }
}

function deleteUniversity(id) {
  const index = universities.findIndex((u) => u.id === id);
  if (index !== -1) {
    universities.splice(index, 1);
    renderUniversities();
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderUniversities();
  displayCurrentTime();
  loadSearchHistory();
});
