// Source code to interact with smart contract

// web3 provider with fallback for old version
if (window.ethereum) {
  window.web3 = new Web3(window.ethereum)
  try {
      // ask user for permission
      ethereum.enable()
      // user approved permission
  } catch (error) {
      // user rejected permission
      console.log('user rejected permission')
  }
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider)
  // no need to ask for permission
}
else {
  window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}
console.log (window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
var contractAddress = '0xEF8CbA7b32d398E38A5aF6EC322bb97824bb2925';
//var abi = JSON.parse('[{"inputs": [{"internalType": "string","name": "_especie","type": "string"}],"name": "setEspecie","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "_nombre","type": "string"}],"name": "setNombre","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "getEspecie","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getNombre","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]');
//var abi =JSON.parse ('[{"inputs": [],"name": "getEspecie","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getNombre","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "string","name": "_especie","type": "string"}],"name": "setEspecie","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "_nombre","type": "string"},{"internalType": "string","name": "_raza","type": "string"}],"name": "setNombre","outputs": [],"stateMutability": "nonpayable","type": "function"}]');
var abi = JSON.parse ('[{"inputs": [],"name": "getColor","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getEspecie","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getNombre","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getPeso","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getRaza","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getSexo","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "string","name": "_nombre","type": "string"},{"internalType": "string","name": "_especie","type": "string"},{"internalType": "string","name": "_raza","type": "string"},{"internalType": "string","name": "_sexo","type": "string"},{"internalType": "string","name": "_color","type": "string"},{"internalType": "string","name": "_peso","type": "string"}],"name": "setMascota","outputs": [],"stateMutability": "nonpayable","type": "function"}]');

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});

//Smart contract functions

    function registerSetMascota() {
        nombre = $("#newNombre").val();
        especie = $("#newEspecie").val();
        raza = $("#newRaza").val();
        sexo = $("#newSexo").val();
        color = $("#newColor").val();
        peso = $("#newPeso").val();
        contract.methods.setMascota (nombre, especie, raza, sexo, color, peso).send( {from: account}).then( function(tx) { 
            console.log("Transaction: ", tx); 
        });
        $("#newNombre").val('');
        $("#newEspecie").val('');
        $("#newRaza").val('');
        $("#newSexo").val('');
        $("#newColor").val('');
        $("#newPeso").val('');
    }

    function registerGetNombre() {
    contract.methods.getNombre().call().then( function( nombre ) { 
        console.log("info: ", nombre);
        document.getElementById('lastNombre').innerHTML = nombre;
    });    
    }

    function registerGetRaza() {
      contract.methods.getRaza().call().then( function( raza ) { 
          console.log("info: ", raza);
          document.getElementById('lastRaza').innerHTML = raza;
    });    
    }

    function registerGetEspecie() {
    contract.methods.getEspecie().call().then( function( especie ) { 
        console.log("info: ", especie);
        document.getElementById('lastEspecie').innerHTML = especie;
    });    
    }

    function registerGetSexo() {
      contract.methods.getSexo().call().then( function( sexo ) { 
          console.log("info: ", sexo);
          document.getElementById('lastSexo').innerHTML = sexo;
    });    
    }

    function registerGetColor() {
      contract.methods.getColor().call().then( function( color ) { 
          console.log("info: ", color);
          document.getElementById('lastColor').innerHTML = color;
    });    
    }

    function registerGetPeso() {
      contract.methods.getPeso().call().then( function( peso ) { 
          console.log("info: ", peso);
          document.getElementById('lastPeso').innerHTML = peso;
    });    
    }

    function registerGetMascota(){

      registerGetNombre();
      registerGetEspecie();
      registerGetRaza();
      registerGetSexo();
      registerGetColor();
      registerGetPeso();
    }
