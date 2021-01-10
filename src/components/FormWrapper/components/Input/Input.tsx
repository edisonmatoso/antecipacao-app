import { forwardRef, FormEvent } from 'react'
import { Label, Input as StyledInput, HelperText, Wrapper } from './Input.styles'

type InputProps = {
  label: string,
  name: string,
  onChange: () => void,
  currency?: boolean,
  helperText?: string,
  required?: boolean,
  type: string

}

const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    label,
    name,
    onChange,
    currency = false,
    helperText,
    required = false,
    type
  }: InputProps, ref) => {
  const handleCurrencyMask = (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

    e.currentTarget.value = `R$ ${value}`
  }

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    if (currency) {
      handleCurrencyMask(e)
    }

    onChange()
  }

  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label} {required ? '*' : null}
        <StyledInput
          id={name}
          name={name}
          ref={ref}
          onChange={handleOnChange}
          type={type} />
        {helperText?.length ? <HelperText>{helperText}</HelperText> : null}
      </Label>
    </Wrapper>
  )
})

Input.displayName = 'Input'

export default Input
