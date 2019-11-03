var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.perodua.com.my/media/ourcars/bezza/image/colours/white.jpg',
        title: 'Produa Bezza',
        description: 'kereta kereta',
        price: 45
    }),
    new Product({
        imagePath: 'http://www.perodua.com.my/media/ourcars/myvi/image/colours/White.png',
        title: 'Produa Myvi',
        description: 'Laju atas jalan',
        price: 55
    }),
    new Product({
        imagePath: 'https://carrentalalorsetar.com/wp-content/uploads/2018/12/perodua-viva-cheap-car-rental-kedah.jpg',
        title: 'Produa Viva',
        description: 'Awesomee',
        price: 40
    }),
    new Product({
        imagePath: 'http://www.perodua.com.my/media/ourcars/alza/images/exterior/skirtings_side_l.jpg',
        title: 'Produa Alza',
        description: 'MPV',
        price: 100
    }),
    new Product({
        imagePath: 'https://careta.my/sites/default/files/styles/watermark/public/2019-05/Careta%20Proton%20Exora%202019-16_0.jpg?itok=RT6JrlOD',
        title: 'pROTON Exzora',
        description: 'MPV besar',
        price: 140
    }),
    new Product({
        imagePath: 'https://sitecoreblobv2.blob.core.windows.net/protoncontainer/%7BC922FA0A-3C90-4548-8C7C-F1D0DFB7B89C%7D1.png',
        title: 'Proton Iriz',
        description: 'Proton Proton iriz',
        price: 86
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}