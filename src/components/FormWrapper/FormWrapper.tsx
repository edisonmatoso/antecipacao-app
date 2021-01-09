import { Title, Wrapper } from './FormWrapper.styles'
import Input from './components/Input'

export default function FormWrapper() {
  return (
    <Wrapper>
      <div>
        <Title>Simule sua Antecipação</Title>

        <Input name='sale_price' label='Informe o valor da venda'/>
        <Input name='installments' label='Em quantas parcelas'/>
        <Input name='mdr' label='Informe o percentual de MDR'/>
      </div>
    </Wrapper>
  )
}
