const contractAddress = "AKILLI_SOZLESME_ADRESINIZ"; 
const abi = [...];  

const web3 = new Web3(Web3.givenProvider);
const uyduTakip = new web3.eth.Contract(abi, contractAddress);

async function hareketRaporla(uyduID, aciklama) {
    const accounts = await web3.eth.getAccounts();
    await uyduTakip.methods.hareketRaporla(uyduID, aciklama).send({ from: accounts[0] });
}

async function odulCek() {
    const accounts = await web3.eth.getAccounts();
    await uyduTakip.methods.odulCek().send({ from: accounts[0] });
}
