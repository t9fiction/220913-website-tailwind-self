import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/store";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { Banner } from "./components/Banner";
import { Offers } from "./components/Offers";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import {
  switchNetwork,
  updateAccount,
  loadDisconnect,
  updateChain,
  loadModalConnect,
} from "./functions/allFunctions";

function App() {
  const {
    web3,
    accounts,
    isConnected,
    errorMsg,
    chainId,
    contract,
    socketContract,
  } = useAppSelector((state) => state.reducer);
  const dispatch = useAppDispatch();

  

  // Chain switch
  window.ethereum.on("chainChanged", async (data) => {
    console.log("chain changed : ", data);
    dispatch(updateChain(data));
  });

    // Subscribe to session disconnection
    const handleDC = async () => {
      console.log(web3);
      dispatch(loadDisconnect(web3));
      // window.location.reload();
      // return false;
      // window.ethereum.on("disconnect", (code, reason) => {
      // console.log("code, reason");
      // await window.ethereum.disconnect()
    };

    const listMintEvents = () => {
      socketContract.events.Transfer([], function (err, event) {
        // setMintEvent(event.returnValues)
        if (event) {
          console.log("event1");
        }
        console.log("event", event.returnValues);
      });
    };

    
    useEffect(() => {
      // listMintEvents();
      async function fetchData() {
        if (contract) {
          console.log("contract");
        }
        if (socketContract) {
          console.log("socketContract");
        }
      }
      fetchData();
    }, [contract, socketContract]);

  return (
    <>
      <Header />
      <Features />
      <Banner />
      <Offers />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
