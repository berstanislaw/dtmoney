import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext'

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
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>

  );
}

export default App;
