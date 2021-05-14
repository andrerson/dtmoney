import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactinoModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactinoModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>    
      <Header onOpenNewTransactionModal={handleOpenNewTransactinoModal} />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactinoModal} 
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
