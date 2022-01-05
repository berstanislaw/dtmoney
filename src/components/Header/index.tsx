import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />

        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}