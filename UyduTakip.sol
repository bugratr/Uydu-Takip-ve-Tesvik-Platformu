// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UyduTakip {
    struct UyduHareketi {
        string uyduID; // Uydu veya uzay aracının benzersiz ID'si
        string aciklama; // Hareketin veya olayın açıklaması
        uint256 zamanDamgasi;
        address raporlayan; // Bu hareketi raporlayan adres
    }

    UyduHareketi[] public hareketler;

    mapping(address => uint256) public oduller;

    event HareketRaporlandi(string uyduID, string aciklama, address raporlayan);

    function hareketRaporla(string memory _uyduID, string memory _aciklama) public {
        UyduHareketi memory yeniHareket = UyduHareketi({
            uyduID: _uyduID,
            aciklama: _aciklama,
            zamanDamgasi: block.timestamp,
            raporlayan: msg.sender
        });

        hareketler.push(yeniHareket);

        // Basit bir ödül mekanizması: Raporlama için 10 token
        oduller[msg.sender] += 10;

        emit HareketRaporlandi(_uyduID, _aciklama, msg.sender);
    }

    function odulCek() public {
        uint256 odulMiktari = oduller[msg.sender];
        require(odulMiktari > 0, "Yeterli ödülünüz yok");
        
        oduller[msg.sender] = 0;
        payable(msg.sender).transfer(odulMiktari);
    }
}
