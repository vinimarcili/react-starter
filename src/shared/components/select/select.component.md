# Input Password

## Props

### 1. disabled

- description: Add a class `.disabled` and the atribute `disabled`
- type: `boolean`

### 2. loading

- description: Add a class `.loading` and add a loader icon, also add `.readonly` class
- type: `boolean`

### 3. value

- description: Value Input
- type: `number | string`

### 4. autoComplete

- description: autocomplete HTML atribute
- type: `string`

### 5. placeholder

- description: Placeholder Input
- type: `string`

### 6. label

- description: Label Input
- type: `string`

### 7. leftLabel

- description: leftLabel input style
- type: `string`

### 8. rightLabel

- description: rightLabel input style
- type: `string`

### 9. id

- description: id HTML
- type: `string`

### 10. name

- description: name HTML
- type: `string`

### 11. required

- description: Add a atribute `required`
- type: `boolean`

### 12. backgroundColor

- description: Change background input color
- type: `string`

### 13. externalError

- description: An external Error pass to te component
- type: `string`

### 14. externalIcon

- description: An icon to add on right side
- type: `any`

### 15. errorSpan

- description: Show the erroSpan after the input
- type: `boolean`
- default: `true`

### 16. onChange

- description: A function that returns the value state
- type: `(event: any) => any`

### 17. onValidate

- description: A function that returns if the input is valid
- type: `(event: any) => any`

## Exemple

```tsx
<Select
  label={t('globalLogin:nationality')}
  placeholder="-"
  value={nationality}
  name="register-nationality"
  id="register-nationality"
  onChange={(nationality: string) => this.setState({ register: { ...register, nationality } })}
  onValidate={(nationality: boolean) => this.setState({ validation: { ...validation, nationality } })}
  disabled={loading}
  required
>
  {countries.map((country) => (
    <option value={country.value}>{country.label}</option>
  ))}
</Select>
```
