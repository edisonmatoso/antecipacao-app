import { Base, Main } from './App.styles'
import FormWrapper from './components/FormWrapper'
import ResultsWrapper from './components/ResultsWrapper'

function App() {
  return (
    <Base>
      <Main>
        <FormWrapper />
        <ResultsWrapper />
      </Main>
    </Base>
  )
}

export default App
