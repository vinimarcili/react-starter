# Tabs Component

## Props Tabs

### 1. noContent

- description: Hide the tab content and shows only the header
- type: `boolean`

### 2. height

- description: height on tabs container
- type: `string`

### 3. maxWidth

- description: max-width on tabs container
- type: `string`

### 4. margin

- description: Margin on tabs container
- type: `string`

### 5. boxShadow

- description: Add `box-shadow` to tabs container
- type: `boolean`

### 6. selectStyle

- description: Select style from styleguide
- type: `boolean`

### 6. lineStyle

- description: Line style from styleguide
- type: `boolean`

### 7. tabsCenter

- description: Centralize Tabs
- type: `boolean`

### 8. tabsWidth

- description: Change the flex to do tabs growing
- type: `string`

### 9. defaultActiveIndex

- description: Default index to start tabs
- type: `number`

## Props Tab

### 1. title

- description: Tab Title
- type: `string`

### 2. active

- description: Set to active tab
- type: `boolean`

### 3. disabled

- description: Disable tab
- type: `boolean`

### 4. height

- description: Add height atribute on single tab
- type: `string`

### 5. onClick

- description: On click event
- type: `function`

### 6. tabIndex

- description: Index to activated
- type: `number`

## Exemple

```jsx
<Tabs tabsCenter tabsWidth defaultActiveIndex={0}>
  <Tabs.Tab title="title 1">Content 1</Tabs.Tab>
  <Tabs.Tab title="title 2">Content 2</Tabs.Tab>
</Tabs>
```
