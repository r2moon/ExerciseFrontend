import React from 'react';
import { UseWalletProvider } from 'use-wallet';
import Home from './Home';

const App = () => {
  return (
  <UseWalletProvider
    chainId={42}
    connectors={{
      walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
    }}
  >
    <Home />
  </UseWalletProvider>);
}

export default App;
