# CSS Documentation

This file provides an overview of the CSS styles implemented in the project.

## Features

1. **Global Reset & Box Model**
   - Uses universal selector with box-sizing 
     and resets 

2. **Use of CSS Variables**
   - Defines and reuses :root variables 
     effectively

3. **Organized CSS Structure**
   - Groups styles logically with comments

4. **Responsive Design**
   - Uses media queries and flexible units 

5. **Typography Styling**
   - Consistent fonts, weights, spacing

6. **Color Scheme & Contrast**
   - Well-chosen, accessible color combinations

7. **Flexbox/Grid Usage**
   - Layouts use display: flex or grid 
     correctly

8. **Button & Input Styling**
   - Stylish, accessible buttons/inputs

9. **Component Reusability**
   - Common classes used across elements

10. **CSS Transitions**
    - Smooth transitions animations used

11. **Hover/Focus Effects**
    - Visual feedback on interaction states

12. **Layout Containers**
    - Uses .container, .wrapper, or .section classes effectively

13. **Layering with Z-Index(if used)**
    - Uses z-index correctly for stacking

14. **Utility Classes**
    - Uses or creates helpful single-purpose 
      classes 

15. **Use of Pseudo-classes/elements**
    - Applies before, ::after, :nth-child, etc. 

16. **Shadows & Borders**
    - Aesthetic use of box-shadow, border- 
      radius

17. **Custom Scrollbars**
    - Styles scrollbar for aesthetic consistency

18. **Theme Customization**
    - Themes applied dynamically or toggled

19. **Naming Conventions (BEM/Readable)**
    - Uses clear, consistent class names

20. **Cleanliness & Commenting**
    - Well-commented, no redundant or unused code

## Example Code Snippets

### CSS Variables
```css
:root {
  --bg-white: hsl(0, 0%, 100%);
  --text-gunmetal: hsl(209, 40%, 14%);
  --fontSize-1: 4.2rem;
  --radius-pill: 200px;
  --transition-1: 250ms ease;
}
```

### Global Reset
```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Button Styles
```css
.btn {
  height: 50px;
  color: var(--text-white);
  padding-inline: 30px;
  border-radius: var(--radius-pill);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-1);
}
.btn-primary {
  background-color: var(--bg-majorelle-blue);
}
.btn-primary:is(:hover, :focus-visible) {
  background-color: var(--bg-ocean-blue);
  box-shadow: var(--shadow-2);
}
```

### Responsive Design
```css
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .hero {
    padding-block-start: 180px;
  }
}
```

## File Location

The CSS file is located at `/assets/css/style.css`.
