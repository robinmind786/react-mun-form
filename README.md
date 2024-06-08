# Rating Component

## Introduction

This React component provides a customizable star rating system.

## Props

### `id` (optional)

- Type: `string`
- Description: The ID attribute of the rating component.

### `value` (optional)

- Type: `number`
- Description: The current value of the rating.

### `disabled` (optional)

- Type: `boolean`
- Description: If true, disables the rating component.

### `readOnly` (optional)

- Type: `boolean`
- Description: If true, makes the rating component read-only.

### `stars` (optional)

- Type: `number`
- Default: `5`
- Description: The number of stars in the rating component.

### `cancel` (optional)

- Type: `boolean`
- Default: `true`
- Description: If true, displays a cancel button to clear the rating.

### `style` (optional)

- Type: `CSSProperties`
- Description: Inline styles for the rating component.

### `className` (optional)

- Type: `string`
- Description: Additional CSS classes for the rating component.

### `tooltip` (optional)

- Type: `string`
- Description: Tooltip text for the rating component.

### `onChange` (optional)

- Type: `(e: RatingChangeEvent) => void`
- Description: Event handler triggered when the rating changes.

### `onIcon` (optional)

- Type: `ReactElement`
- Description: Custom icon for filled stars.

### `offIcon` (optional)

- Type: `ReactElement`
- Description: Custom icon for empty stars.

### `cancelIcon` (optional)

- Type: `ReactElement`
- Description: Custom icon for the cancel button.

## Usage

```jsx
import React from 'react';
import Rating from './Rating';

function MyComponent() {
  const handleChange = (e) => {
    console.log('New rating:', e.value);
  };

  return (
    <div>
      <Rating
        value={3}
        stars={5}
        disabled={false}
        readOnly={false}
        onChange={handleChange}
      />
    </div>
  );
}
```
