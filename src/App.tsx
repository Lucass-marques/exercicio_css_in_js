import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { EstilosGlobais, Container } from './styles'
import { VagasContainer } from './containers/ListaVagas/styles'
import { CabecalhoContainer } from './components/Cabecalho/styles'
import {
  FormContainer,
  PesquisarButton,
  CampoInput
} from './components/FormVagas/styles'
import {
  HeroContainer,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroTitleMobile
} from './components/Hero/styles'
import { VagaContainer, VagaTitle, VagaLink } from './components/Vaga/styles'

function App() {
  return (
    <>
      <EstilosGlobais />
      <CabecalhoContainer>
        <Header />
      </CabecalhoContainer>
      <HeroContainer>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Título</HeroTitle>
          <HeroTitleMobile>Título</HeroTitleMobile>
        </HeroContent>
      </HeroContainer>
      <Container>
        <VagasContainer>
          <FormContainer>
            <CampoInput />
            <PesquisarButton>Pesquisar</PesquisarButton>
          </FormContainer>
          <VagaContainer>
            <VagaTitle>Título</VagaTitle>
            <VagaLink href="#">Link</VagaLink>
          </VagaContainer>
          <ListaVagas />
        </VagasContainer>
      </Container>
    </>
  )
}

export default App
