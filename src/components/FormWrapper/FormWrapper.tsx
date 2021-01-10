import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Title, Wrapper, ErrorMessage } from './FormWrapper.styles'
import Input from './components/Input'

type AntecipacaoForm = {
  salePrice: string,
  installments: number,
  mdr: number
}

export default function FormWrapper() {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = useForm<AntecipacaoForm>()

  function formatCurrencyToNumber(currency: string): number {
    return Number(currency.substring(3).replace(/\./g, '').replace(',', '.'))
  }

  const onSubmit = handleSubmit(({ salePrice, installments, mdr }) => {
    console.log({ salePrice, installments, mdr })
  })

  const handleOnChange = () => {
    const { salePrice, installments, mdr } = watch()

    const salePriceFormatted = formatCurrencyToNumber(salePrice)

    if (salePriceFormatted && installments && mdr) {
      onSubmit()
    }
  }

  useEffect(() => { console.log({ errors }) }, [errors])

  return (
    <Wrapper>
      <form>
        <Title>Simule sua Antecipação</Title>

        <Input
          name='salePrice'
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
          type="number"
          required />
      </form>
      {Object.keys(errors).length ? <ErrorMessage>Formulário preenchido incorretamente</ErrorMessage> : null}
    </Wrapper>
  )
}
