# Selector

## Props

### 1. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 2. readOnly

- description: Add a class `.readony` and the atribute `readony`
- type: `boolean`

### 3. type

- description: Input HTML Type.
- type: `'checkbox' | 'radio'`

### 4. value

- description: Value Input
- type: `any`

### 5. rightLabel

- description: Label Input on Right
- type: `string`

### 6. leftLabel

- description: Label Input on Left
- type: `string`

### 7. id

- description: id HTML
- type: `string`

### 8. name

- description: name HTML
- type: `string`

### 9. required

- description: Add a atribute `required`
- type: `boolean`

### 10. externalError

- description: An external Error pass to te component
- type: `string`

### 11. errorSpan

- description: Show the erroSpan after the input
- type: `boolean`
- default: `true`

### 12. onChange

- description: A function that returns the checked state
- type: `(event: any) => any`

### 13. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

### 14. onEmitValue

- description: A function that returns if the input value
- type: `(event: any) => any`

### 15. toggle

- description: Set style to toogle mode
- type: `boolean`

### 16. checked

- description: Set checked html atribute
- type: `boolean`

### 17. hideInput

- description: Hide selector input
- type: `boolean`

### 18. wrapperClass

- description: Class to add on wrapper
- type: `string`

## Exemple

```jsx
<Selector
  rightLabel="Check me"
  name="checkbox-test"
  id="checkbox-test"
  onChange={(checked: boolean) => setState({ checked })}
  onValidate={(validChecked: boolean) => setState({ validChecked })}
  required
/>
```
