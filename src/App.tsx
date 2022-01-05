import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
