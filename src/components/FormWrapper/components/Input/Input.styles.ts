import styled from '@emotion/styled'

export const Label = styled.label`
  font-size: 14px;
  color: #656565;
  margin-bottom: 6px;
`

export const Input = styled.input`
  border: 1px solid #DDE6E9;
  border-radius: 4px;
  height: 37px;

  &:not(:last-child) {
    margin-bottom: 26px;
  }

  &:focus {
    outline: none;
    border: 1px solid #66AFE9;
  }
`
