var app = angular.module('store', []);

app.controller('StoreController', function() {
    
    this.filtered = [];
    this.searchText = "";
    this.cart = [];
    this.totalPrice = 0;
    this.page = 'store';
    this.totalQuantity = 0;

    this.finalPrice = 0;
    this.count = 0;

    this.refresh = function () {
        this.searchText = this.searchText.trim();
        if (this.searchText.length <= 0) {
            this.filtered = this.items;
        }
        else {
            this.filtered = [];
            var txt = this.searchText.toLowerCase();
            for (var i in this.items) {
                var item = this.items[i];
                
                if (item.name.toLowerCase().indexOf(txt) >= 0) {
                    this.filtered.push(item);
                }
            }
        }
    };

    this.increment = function (item) {
        item.quantity += 1;
        this.count++;
        this.finalPrice += item.price;
        
    };


    this.decrement = function (item) {
       
        if (item.quantity > 1) {
            item.quantity -= 1;
            this.count--;
            this.finalPrice -= item.price;
        }
        
    };

    this.updateIndex = function (data) {

        this.index = data.id;

    };

    this.addCart = function (item) {
        this.cart.push(item);
        this.totalPrice += item.price;
        item.added = true;
        item.quantity += 1;
        this.count++;
        this.finalPrice += item.price;
    }

    this.removeCart = function (item) {
        var index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
        this.totalPrice -= item.price;
        item.added = false;
        item.quantity -= 1;
        this.count--;
        this.finalPrice -= item.price;
    };

    this.removeAll = function () {
        
        while (this.cart.length > 0) {
            this.deleteCart(this.cart[0]);;
        }
    };

    this.deleteCart = function (item) {
        var index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
        this.totalPrice -= item.price;
        item.added = false;
        this.count = this.count - item.quantity;
        this.finalPrice = this.finalPrice - (item.price * item.quantity);
        item.quantity = 0;
    };

    this.items = [
    {
        "id": 0,
        "quantity": 0,
        "name": "Apple",
        "icon": "images/apple.jpg",
        "price": 12,
        "checkOutPrice": 12,
        "calories": 52,
        "fiber": 2,
        "quote": 'Eat one every day to keep the doctor away!',
        "vitaminc": 3,
        "desc": "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
    },
    {
        "id": 1,
        "quantity": 0,
        "name": "GrapeFruit",
        "icon": "images/grapefuit.jpg",
        "price": 8,
        "checkOutPrice": 8,
        "calories": 12,
        "fiber": 9,
        "quote": 'Pink or red, always healty and delecious',
        "vitaminc": 5,
        "desc": "The grapefruit is a subtropical citrus tree known for its sour to semi-sweet fruit, an 18th-century hybrid first bred in Barbados."
    },
    {
        "id": 2,
        "quantity": 0,
        "name": "Grapes",
        "icon": "images/grapes.jpg",
        "price": 11,
        "calories": 54,
        "fiber": 3,
        "checkOutPrice": 11,
        "quote": 'Wine is great, but grapes are even better',
        "vitaminc": 2,
        "desc": "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil."
    },
    {
        "id": 3,
        "quantity": 0,
        "name": "Papaya",
        "icon": "images/papaya.jpg",
        "price": 5,
        "checkOutPrice": 5,
        "calories": 50,
        "fiber": 21,
        "quote": 'Super popular for breakfast',
        "vitaminc": 17,
        "desc": "The papaya, papaw, or pawpaw is the fruit of the plant Carica papaya, and is one of the 22 accepted species in the genus Carica of the plant family Caricaceae."
    },
    {
        "id": 4,
        "quantity": 0,
        "name": "Pineapple",
        "icon": "images/pineapple.jpg",
        "price": 4,
        "checkOutPrice": 4,
        "calories": 62,
        "fiber": 18,
        "quote": 'Enjoy it (but dont forget to peel first)',
        "vitaminc": 19,
        "desc": "The pineapple is a tropical plant with edible multiple fruit consisting of coalesced berries, and the most economically significant plant in the Bromeliaceae family."
    }
    ];
    this.refresh();
});

//var filtered = [];

