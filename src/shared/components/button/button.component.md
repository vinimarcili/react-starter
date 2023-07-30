# Button

## Props

### 1. disabled

- description: Add a class `.disabled` and the atribute `disabled`. Prevent button clicks
- type: `boolean`

### 2. inverted

- description: Add a class `.inverted` and invert the button colors
- type: `boolean`

### 3. invertedHover

- description: Invert the hover color on mouse over
- type: `boolean`

### 4. rounded

- description: Add a class `.rounded`
- type: `boolean`

### 5. loading

- description: Add a class `.loading` and show the loader component inside the button
- type: `boolean`

### 6. hideChildrenOnLoading

- description: Hide the children component if the loading is true
- type: `boolean`

### 7. id

- description: The id HTML attribute
- type: `string`

### 8. width

- description: Set inline-style `witdh`
- type: `string`

### 9. onClick

- description: The function called when button is clicked
- type: `Function`

### 10. customPadding

- description: Set inline-style `padding`
- type: `string`

### 11. borderStyle

- description: Set inline-style `border-style`
- type: `string`

### 12. size

- description: Add class `button-${size}` to set button size
- type: `'sm' | 'md' | 'lg' | 'xl'`

### 13. color

- description: Set the class `button-${color}`, if corresponding with a real class, then aplies. Else set inline-style `background-color`. Accepts CSS variables
- type: `string`

### 14. borderColor

- description: Set inline-style `border-color`. Accepts CSS variables
- type: `string`

### 15. textColor

- description: Set inline-style `color`. Accepts CSS variables
- type: `string`

### 16. onHover

- description: The function called when button is hovered
- type: `Function`

## Exemple

```jsx
<Button onClick={() => console.log('clicked')}>Click me!</Button>
```
