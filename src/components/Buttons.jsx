/* eslint-disable no-script-url */
import React from "react";
import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useAddress,
  useDisconnect,
  useChainId,
} from "@thirdweb-dev/react";
import "./buttons.css";
import { FiChevronDown } from "react-icons/fi";

export const Button = ({ title, color, onClick }) => {
  //bg-gradient-to-r from-[#1dc071] to-[#50a7c2]
  return (
    <button
      className={`${color} p-2 px-3 rounded-full font-bold text-slate-200 border-2 border-[#1dc071] uppercase`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const ButtonHover = ({ title, hColor, onClick }) => {
  return (
    <button
      className={`p-2 px-4 rounded-full font-bold border-2 text-slate-200 border-[#1dc071] hover:bg-gradient-to-r from-[#1dc071] to-[#50a7c2] uppercase`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const ConnectBtn = ({ title, color, onClick }) => {
  const cntMetamask = useMetamask();
  const cntWalletConnect = useWalletConnect();
  const cntCoinbaseWallet = useCoinbaseWallet();
  const walletAddress = useAddress();
  const walletDisconnect = useDisconnect();
  //const [, switchNetwork] = useChainId();

  return (
    <div class="flex items-center justify-center ">
      <div class="relative inline-block text-left  dropdown">
        <span class="rounded-md shadow-sm">
          <button
            className="btn rounded-full bg-primary-content  flex justify-center items-center"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="headlessui-menu-items-117"
          >
            <span>{walletAddress ? "Connected" : "Connect"}</span>
            <FiChevronDown className="font-bold" />
          </button>
        </span>
        {walletAddress ? (
          <>
            <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                <div class="px-4 py-3">
                  <p class="text-sm leading-5">Welcome</p>
                  <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                    {walletAddress}
                  </p>
                </div>
                <div class="py-1">
                  <button
                    href="javascript:void(0)"
                    tabindex="0"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                  >
                    0 $gGPT
                  </button>
                  {/* Correct Network
                    <button
                    tabindex="2"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    onClick={() =>
                      switchNetwork(ChainId.BinanceSmartChainTestnet)
                    }
                  >
                    Switch Network
                  </button>*/}

                  <span
                    role="menuitem"
                    tabindex="-1"
                    class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                    aria-disabled="true"
                  >
                    New feature (soon)
                  </span>
                </div>
                <div class="py-1">
                  <button
                    tabindex="3"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left uppercase font-bold"
                    role="menuitem"
                    onClick={() => walletDisconnect}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div class="px-4 py-3">
                <p class="text-sm leading-5">Welcome</p>
                <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                  {walletAddress}
                </p>
              </div>
              <div class="py-1">
                <button
                  tabindex="0"
                  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                  onClick={() => cntMetamask()}
                >
                  Metamask
                </button>
                <button
                  tabindex="1"
                  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                  onClick={() => cntCoinbaseWallet()}
                >
                  Coinbase
                </button>
                <button
                  tabindex="2"
                  class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                  onClick={() => cntWalletConnect()}
                >
                  WalletConnect
                </button>
                <span
                  role="menuitem"
                  tabindex="-1"
                  class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                  aria-disabled="true"
                >
                  New feature (soon)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
