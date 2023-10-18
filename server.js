const express = require('express');
const Web3 = require('web3');

const app = express();
const PORT = 3000;

const contractAddress = "AKILLI_SOZLESME_ADRESINIZ"; 
const abi = [...];  

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const contractInstance = new web3.eth.Contract(abi, contractAddress);

app.get('/hareketler', async (req, res) => {
    const hareketSayisi = await contractInstance.methods.hareketler().call();
    let sonuc = [];
    
    for (let i = 0; i < hareketSayisi; i++) {
        const hareket = await contractInstance.methods.hareketler(i).call();
        sonuc.push(hareket);
    }

    res.json(sonuc);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
