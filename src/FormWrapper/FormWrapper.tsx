import { useForm } from 'react-hook-form'
import { Title, Wrapper, ErrorMessage } from './FormWrapper.styles'
import Input from './components/Input'
import { AnticipationParams } from '../hooks/useAnticipation'

type AnticipationForm = {
  amount: string,
  installments: number,
  mdr: number
}

type FormWrapperProps = {
  handleFetch: (params: AnticipationParams) => void,
  periods: Array<string>
}

export default function FormWrapper({ handleFetch, periods }: FormWrapperProps) {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = useForm<AnticipationForm>()

  function formatCurrencyToNumber(currency: string): number {
    return Number(currency.substring(3).replace(/\./g, '').replace(',', '.'))
  }

  const onSubmit = handleSubmit(({ amount, installments, mdr }) => {
    const formattedAmount = formatCurrencyToNumber(amount)
    const params: AnticipationParams = {
      amount: formattedAmount,
      installments,
      mdr,
      days: periods
    }
    handleFetch(params)
  })

  const handleOnChange = () => {
    const { amount, installments, mdr } = watch()

    const salePriceFormatted = formatCurrencyToNumber(amount)

    if (salePriceFormatted && installments && mdr) {
      onSubmit()
    }
  }

  return (
    <Wrapper>
      <form>
        <Title>Simule sua Antecipação</Title>

        <Input
          name='amount'
          label='Informe o valor da venda'
          ref={register({ required: true })}
          onChange={handleOnChange}
          type="string"
          required
          currency />
        <Input
          name='installments'
          label='Em quantas parcelas'
          ref={register({ required: true, max: 12 })}
          onChange={handleOnChange}
          type="tel"
          required
          helperText="Máximo de 12 parcelas" />
        <Input
          name='mdr'
          label='Informe o percentual de MDR'
          ref={register({ required: true })}
          onChange={handleOnChange}
          type="tel"
          required />
      </form>
      {Object.keys(errors).length ? <ErrorMessage>Formulário preenchido incorretamente</ErrorMessage> : null}
    </Wrapper>
  )
}
