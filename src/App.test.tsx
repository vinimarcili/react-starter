import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders learn react link', () => {
  render(<App /> as React.ReactElement)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
