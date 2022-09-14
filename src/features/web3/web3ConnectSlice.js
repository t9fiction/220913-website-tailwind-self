import { createSlice } from "@reduxjs/toolkit";
import { loadModalConnect, loadBlockChain, loadDisconnect, updateChain, updateAccount } from "../../functions/allFunctions";



const initialState = {
    web3: null,
    contract: null,
    chainId: null,
    accounts: [],
    loading: false,
    isConnected: false,
    // totalSupply: 0,
    // cost: 0,
    error: false,
    errorMsg: "",
}


const web3ConnectSlice = createSlice({
    name: "Web3Connect",
    initialState,
    reducers: {},
    extraReducers: {
        [loadModalConnect.fulfilled.toString()]: (
            state, { payload }
        ) => {
            console.log("payload web3: ", state.web3)
            console.log("payload contract: ", state.contract)
            console.log("payload accounts: ", state.accounts)
            console.log("Total Suppy : ", state.totalSupply)
            console.log("payload socketContract: ", state.socketContract)
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.chainId = payload?.chainId;
            state.accounts = payload?.accounts;
            state.isConnected = true;
            // state.totalSupply = payload?.web3.methods.totalSupply().call();
            state.socketContract = payload?.socketContract;
            console.log("payload web3: ", state.web3)
            console.log("payload contract: ", state.contract)
            console.log("payload accounts: ", state.accounts)
            console.log("Total Suppy : ", state.totalSupply)
            console.log("payload socketContract: ", state.socketContract)
        },
        [updateAccount.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            state.accounts = payload?.accounts;

        },
        [updateChain.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            console.log("web3 before state changed : ", state.web3)
            state.web3 = payload?.web3;
            state.chainId = payload?.chainId;
            console.log("web3 after state changed : ", state.web3)
        },
        [loadDisconnect.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            state.web3 = null;
            state.accounts=[];
            state.contract=null;
            state.isConnected=false;
        }
    }
})

export const web3Reducer = web3ConnectSlice.reducer;