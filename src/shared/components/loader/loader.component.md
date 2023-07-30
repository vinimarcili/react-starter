# Loader

## Props

### 1. color

- description: Set the class `${color}`, if corresponding with a real class, then aplies. Else set inline-style `background-color`. Accepts CSS variables
- type: `string`

### 2. size

- description: Set the class `${size}`, if corresponding with a real class, then aplies.
- type: `'small' | 'bigger' | 'big' | ''`

### 3. borderSize

- description: Set `border-width`. Combine with `customSize`
- type: `string`

### 4. customSize

- description: Set `width` and `height`. Combine with `borderSize`
- type: `string`

## Exemple

```html
<Loader />
```
