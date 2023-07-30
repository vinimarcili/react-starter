# Input

## Props

### 1. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 2. readOnly

- description: Add a class `.readony` and the atribute `readony`
- type: `boolean`

### 3. loading

- description: Add a class `.loading` and add a loader icon, also add `.readonly` class
- type: `boolean`

### 4. type

- description: Input HTML Type.
- type: `'text' | 'number' | 'textarea' | 'email' | 'tel' | 'url' | 'search'`

### 5. value

- description: Value Input
- type: `number | string`

### 6. autoComplete

- description: autocomplete HTML atribute
- type: `string`

### 7. placeholder

- description: Placeholder Input
- type: `string`

### 8. label

- description: Label Input
- type: `string`

### 9. leftLabel

- description: leftLabel input style
- type: `string`

### 10. rightLabel

- description: rightLabel input style
- type: `string`

### 11. id

- description: id HTML
- type: `string`

### 12. name

- description: name HTML
- type: `string`

### 13. required

- description: Add a atribute `required`
- type: `boolean`

### 14. backgroundColor

- description: Change background input color
- type: `string`

### 15. maxLength

- description: Add a atribute `maxLenght` and add a counter on input
- type: `number`

### 16. externalError

- description: An external Error pass to te component
- type: `string`

### 17. externalIcon

- description: An icon to add on right side
- type: `any`

### 18. min

- description: HTML min atribute for input type number
- type: `number`

### 19. max

- description: HTML max atribute for input type number
- type: `number`

### 20. errorSpan

- description: Show the erroSpan after the input
- type: `boolean`
- default: `true`

### 21. onChange

- description: A function that returns the value state
- type: `(event: any) => any`

### 22. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

### 23. noCounting

- description: Add a atribute `noCounting` and remove the `maxLength` counter on input but it doesn't remove the `maxLength` attribute
- type: `boolean`

### 24. onTimeout

- description: Adds a time for the action to run
- type: `Function`

## Exemple

```jsx
<Input
  label={t('globalLogin:email')}
  type="email"
  placeholder="email@email.com"
  value={email}
  name="login-email"
  id="login-email"
  onChange={(email: string) => this.setState({ email })}
  onValidate={(validEmail: boolean) => this.setState({ validEmail })}
  readOnly={loadingLogin}
  autoComplete="email"
  required
  onTimeout={onTimeout}
/>
```
