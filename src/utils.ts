import Web3 from 'web3';
import { BigNumber, ethers } from 'ethers';
import {
  betAddress,
  exerciseTokenAddress,
} from './constants';

const erc20Abi = require('./abi/erc20.json');
const betAbi = require('./abi/bet.json');

export const getBalanceOf = async (
  web3: Web3,
  user: string,
  token: string,
): Promise<BigNumber> => {
  const erc20Contract = new web3.eth.Contract(erc20Abi, token);
  const balance = await erc20Contract.methods.balanceOf(user).call();
  return BigNumber.from(balance);
};

export const getAllowance = async (
  web3: Web3,
  user: string,
  spender: string,
  token: string,
): Promise<BigNumber> => {
  const erc20Contract = new web3.eth.Contract(erc20Abi, token);
  const allowance = await erc20Contract.methods.allowance(user, spender).call();
  return BigNumber.from(allowance);
};

export const approve = async (
  web3: Web3,
  user: string,
  spender: string,
  token: string,
  amount: BigNumber,
): Promise<boolean> => {
  const erc20Contract = new web3.eth.Contract(erc20Abi, token);
  await erc20Contract.methods
    .approve(spender, amount.toString())
    .send({ from: user });
  return true;
};

export const bet = async (
  web3: Web3,
  user: string,
): Promise<boolean> => {
  const betContract = new web3.eth.Contract(betAbi, betAddress);
  await betContract.methods.bet().send({ from: user });
  return true;
};

export const finishGame = async (
  web3: Web3,
  user: string,
): Promise<boolean> => {
  const betContract = new web3.eth.Contract(betAbi, betAddress);
  await betContract.methods.finishGame().send({ from: user });
  return true;
};
