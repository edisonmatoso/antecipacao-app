import { render, screen } from '@testing-library/react'
import ResultsWrapper, { ResultsProps } from './ResultsWrapper'

function mountComponent(props: ResultsProps) {
  render(<ResultsWrapper {...props} />)
}

describe('ResultsWrapper component', () => {
  it('should render with default values when anticipation is undefined', () => {
    const props = { periods: ['15'] }
    mountComponent(props)

    expect(screen.getByText(/0,00/i)).toBeInTheDocument()
  })

  it('should render with `Amanhã` label when period has `1` value', () => {
    const props = { periods: ['1'] }
    mountComponent(props)

    expect(screen.getByText(/Amanhã/i)).toBeInTheDocument()
  })

  it('should render the same number of results and periods', () => {
    const props = { periods: ['1', '2', '3'] }
    mountComponent(props)

    const hasTheSameLength = screen.getAllByRole('result').length === props.periods.length

    expect(hasTheSameLength).toBeTruthy()
  })

  it('should render the `anticipation` in result', () => {
    const props = {
      anticipations: {
        2: 999
      },
      periods: ['2']
    }
    mountComponent(props)

    expect(screen.getByText('999', { exact: false })).toBeInTheDocument()
  })
})
