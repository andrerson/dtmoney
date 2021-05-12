import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>    
      <Header onOpenNewTransactionModal={handleOpenNewTransactinoModal} />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactinoModal} 
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
