import { render, screen } from '@testing-library/react'
import App from './App'

describe('App page', () => {
  it('should render page by default', () => {
    render(<App />)

    expect(screen.getByText(/Simule sua antecipação/i)).toBeInTheDocument()
  })
})
