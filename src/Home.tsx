import { useWallet } from 'use-wallet';
import {approve, bet, finishGame} from './utils'
import './App.css';
import Web3 from 'web3';
import { betAddress, exerciseTokenAddress } from './constants';
import { BigNumber } from 'ethers';

const Home = () => {
  const { ethereum, account, connect } = useWallet();
  
  const approveToken = () => {
    if (ethereum && account) {
      approve(
        new Web3(ethereum as any),
        account,
        betAddress,
        exerciseTokenAddress,
        BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffff")
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {account && <>
          <button
            onClick={approveToken}
            className="App-button"
          >Approve</button>
          <button
            onClick={() => bet(new Web3(ethereum as any), account)}
            className="App-button"
          >Bet</button>
          <button
            onClick={() => finishGame(new Web3(ethereum as any), account)}
            className="App-button"
          >Explore Result</button>
        </>}
        {!account && <button onClick={() => connect('injected')} className="App-button">Connect Wallet</button>}
      </header>
    </div>
  );
}

export default Home;
