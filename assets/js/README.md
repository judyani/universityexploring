# JavaScript Documentation

This file provides an overview of the JavaScript functionality implemented in the project.

## Features

1. **Variable Naming & Indentation**
   - Ensures a smooth loading experience by hiding the preloader once the page is fully loaded.

2. **Function Naming & Modularity**
   - Implements a responsive navigation bar for mobile devices.

3. **Arrays & Objects Usage**
   - Adds a sticky header effect when scrolling down the page.

4. **Array Methods**
   - Displays a list of universities.
   - Filters affordable universities.
   - Allows adding, editing, and deleting universities.

5. **Looping/Iteration**
   - Saves favorite universities to `localStorage`.
   - Displays favorite universities.

6. **JSON Data Handling**
   - Enables dark mode and saves the preference in `localStorage`.

7. **Web Storage (local/session)**
   - Updates the footer year dynamically based on the current date.

8. **Saving/Retrieving User Data**
   - Adds a button to scroll back to the top of the page.

9. **Cookies with Expiry Each category is worth 3.4 points**
   - Filters universities in real-time based on user input.

10. **DOM Manipulation**
    - Validates email input in the contact form using regex.

11. **CSS Manipulation via JS**
    - Create, Read, Update, and Delete operations for university data.

12. **Theme Preference**
    - Adds keyboard shortcuts and event listeners for enhanced interactivity.

13. **Comments & Code Readability**
    - Displays the current time dynamically in the footer.

14. **Error Handling & Debugging**
    - Generates a random university from the list.

15. **Regex Validation**
    - Validates data using RegEx

16. **Timer & Date Object**
    - Tracks time and event with Data()

17. **Math, String, Random Methods**
    - Uses JS utilities like math.random()

18. **Event Listeners & Shortcuts**
    - Adds listeners, keyboard support

19. **Real-time Search & History**
    - live search + history

20. **CRUD Functionality**
    - Full add/edit/delete using storage
## Example Code Snippets

### Preloader Logic
```javascript
const preloaderElement = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
  preloaderElement.classList.add("remove");
});
```

### Navbar Toggler
```javascript
const navbarElement = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
function toggleNavbar() {
  navbarElement.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
navTogglerElements.forEach(btn => btn.addEventListener("click", toggleNavbar));
```

### Dark Mode Toggle
```javascript
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}
```

### Real-Time Search
```javascript
const searchInput = document.querySelector("#search-universities");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredUniversities = universities.filter(u =>
    u.name.toLowerCase().includes(query)
  );
  console.log(filteredUniversities);
});
```

### CRUD Example
```javascript
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
```

## File Location

The JavaScript file is located at `/assets/js/script.js`.
