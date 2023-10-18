const mongoose = require('mongoose');

const uyduSchema = new mongoose.Schema({
    id: String,
    isim: String,
    aciklama: String,
    baslangicTarihi: Date,
    bitisTarihi: Date,
    resimURL: String
});

module.exports = mongoose.model('Uydu', uyduSchema);
