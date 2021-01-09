import { Label, Input as StyledInput } from './Input.styles'

type InputProps = {
  label: string,
  name: string
}

export default function Input({ label, name }: InputProps) {
  return (
    <>
      <Label htmlFor={name}>{label} *</Label>
      <StyledInput id={name} />
    </>
  )
}
