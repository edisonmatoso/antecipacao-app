import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 44px 56px;

  & > form {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #656565;
`

export const ErrorMessage = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  color:#FF788E;
`
