import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract/contract";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
// import ethProvider from "eth-provider";
import Web3Modal from 'web3modal'
// import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
// import WalletConnect from '@walletconnect/web3-provider'
import Web3 from "web3";
const { ethereum } = window;

// ----------------------------------- Update Account----------------------------------------
export const updateAccount = createAsyncThunk("updateAccount", async (data, thunkAPI) => {
  try {
    let accounts = data
    return {
      accounts,
    }
  }

  catch (error) {
    console.log("error", error)
  }
})

// ----------------------------------- Update Chain----------------------------------------
export const updateChain = createAsyncThunk("updateChain", async (data, thunkAPI) => {
  try {
    console.log("data", data)
    // let web3 = data
    // return {
      //   web3,
      //   chainId
      // }
    }
    
    catch (error) {
      console.log("error", error)
    }
})

// 
// ----------------------------------- Truncate ----------------------------------------
// export const truncate = (input) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;

// (address) => `${address.slice(0,5)}...${address.slice(address.length-4)}`



// ----------------------------------- Disconnect ----------------------------------------

// ==> Not working, also not yet added in reducer
export const loadDisconnect = createAsyncThunk("loadDisconnect", async (web3, thunkAPI) => {
  try {
    console.log(web3.currentProvider)
    const provider = web3.currentProvider
    console.log("provider",provider)
    // await provider.disconnect()
    window.localStorage.clear();
    // provider.clearCachedProvider();
    // await pro.killSession()
    // window.location.reload();
    return web3
  }

  catch (error) {
    console.log("error", error)
  }
})

// --------------------------------- web3 Modal -----------------------------------------------------
export const loadModalConnect = createAsyncThunk("loadModalConnect", async (_, thunkAPI) => {
  try {
    //  Create WalletConnect Provider
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true, // very important
      providerOptions: {
        walletconnect: {
          display: {
            name: "Mobile"
          },
          package: WalletConnectProvider,
          options: {
            infuraId: "17342b0f3f344d2d96c2c89c5fddc959" // required
          }
        }
        // burnerconnect: {
        //   package: BurnerConnectProvider, // required
        //   options: {
        //     defaultNetwork: "100"
        //   }
        // },
        // frame: {
        //   package: ethProvider // required
        // }
      }
    });
    
    const provider = await web3Modal.connect();
    if (!provider) {
      return {
        web3LoadingErrorMessage: "Error in connecting Wallet"
      }
    } else {
      const web3 = new Web3(provider);
      const chainId = await web3.eth.net.getId()
      console.log("Chain ID : ", chainId)


      // await provider.enable();

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const accounts = await web3.eth.getAccounts();

      const web3Socket = new Web3(
        new Web3.providers.WebsocketProvider(
          `wss://rinkeby.infura.io/ws/v3/9043c5907b4f4696a35189799c013dee`
        )
      );
      const socketContract = new web3Socket.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      return {
        web3,
        accounts,
        chainId,
        contract,
        socketContract,
      }
    }
  } catch (error) {
    console.log(error, "error")
  }
})

