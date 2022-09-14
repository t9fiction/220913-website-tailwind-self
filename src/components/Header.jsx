import React from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { loadModalConnect, loadDisconnect } from "../functions/allFunctions";

export const Header = () => {
  const { web3, isConnected } = useAppSelector((state) => state.reducer);
  const dispatch = useAppDispatch();
  
  const web3ModalConnect = (e) => {
    e.preventDefault();
    dispatch(loadModalConnect());
  };

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

  return (
    <header className="sticky top-0 bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="https://www.xfinity.com"
          className="xc-polaris-link xc-polaris2"
        >
          <img
            className="xc-polaris-logo xc-polaris2"
            width="73"
            height="24"
            src="https://static.vecteezy.com/system/resources/previews/007/102/870/non_2x/cool-and-dashing-phoenix-logo-with-long-tail-free-vector.jpg"
            alt="Official logo of Comcast, Official logo of Xfinity"
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a href="/internet" className="mr-5 hover:text-gray-900">
            Internet
          </a>
          <a href="/streaming" className="mr-5 hover:text-gray-900">
            TV & Streaming
          </a>
          <a href="/mobile" className="mr-5 hover:text-gray-900">
            Mobile
          </a>
          <a href="/security" className="mr-5 hover:text-gray-900">
            Home Security
          </a>
          <a href="/plans" className="mr-5 hover:text-gray-900">
            Plans
          </a>
          <a href="tel:+18558701311" className="mr-5 hover:text-gray-900">
            Order Now 844-963-2493
          </a>
        </nav>
        {!isConnected ?
        <button
          onClick={(e) => web3ModalConnect(e)}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Connect Wallet
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> : <button
          onClick={() => handleDC()}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Disconnect
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        }
      </div>
    </header>
  );
};
