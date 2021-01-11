import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  &:not(:last-child) {
    margin-bottom: 26px;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  font-size: 14px;
  color: #656565;
  margin-bottom: 6px;
`

export const Input = styled.input`
  border: 1px solid #DDE6E9;
  border-radius: 4px;
  height: 37px;

  &:focus {
    outline: none;
    border: 1px solid #66AFE9;
  }
`

export const HelperText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  color: #CECECE;
`
