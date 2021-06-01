import Web3 from 'web3';

let web3;

const getProvider = async () => {
    await window.web3.currentProvider.enable(); // request authentication
  };
  
getProvider();

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //Execution in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
    
} else {
    //We are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/32c7b78d3447433a8488396c66051605'
    );
    web3 = new Web3(provider);

}

export default web3;

