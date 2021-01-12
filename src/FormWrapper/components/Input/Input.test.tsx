import { fireEvent, render, screen } from '@testing-library/react'
import Input, { InputProps } from './Input'

function mountComponent(props: InputProps) {
  return render(<Input {...props} />)
}

describe('Input component', () => {
  it('should render with mask when `currency` prop is provided', () => {
    const props: InputProps = {
      label: 'vapo',
      name: 'vapo',
      onChange: () => {},
      currency: true,
      type: 'text'
    }

    const input = mountComponent(props).getByLabelText('vapo')
    fireEvent.change(input, { target: { value: '100000' } })

    expect((input as HTMLInputElement).value).toBe('R$ 1.000,00')
  })

  it('should render with `*` on label when `required` prop is provided', () => {
    const props: InputProps = {
      label: 'vapo',
      name: 'vapo',
      onChange: () => {},
      currency: true,
      type: 'text',
      required: true
    }

    mountComponent(props)

    const label = screen.getByTestId('label')
    const requiredChar = label.textContent?.includes('*')

    expect(requiredChar).toBeTruthy()
  })

  it('should render `HelperText` when `helperText` prop is provided', () => {
    const props: InputProps = {
      label: 'vapo',
      name: 'vapo',
      onChange: () => {},
      currency: true,
      type: 'text',
      helperText: 'helperText'
    }

    mountComponent(props)

    const inputWrapper = screen.getByTestId('label')
    const helperText = inputWrapper.textContent?.includes('helperText')

    expect(helperText).toBeTruthy()
  })
})
