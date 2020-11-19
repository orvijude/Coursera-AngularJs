(function(){
    'use strict';

angular.module('ShoppingListCheckOff', []) 
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject =['$scope','ShoppingListCheckOffService']; 
function ToBuyController ($scope,ShoppingListCheckOffService){
    var itemAdder= this;
        itemAdder.items =  ShoppingListCheckOffService.getList();
        itemAdder.addItem = function(index){
            ShoppingListCheckOffService.addItem(itemAdder.items[index]);
            itemAdder.items.splice(index,1);
            itemAdder.alert = ShoppingListCheckOffService.Alert(itemAdder.items.length);
        }
        
}

AlreadyBoughtController.$inject =['$scope','ShoppingListCheckOffService']; 
function AlreadyBoughtController ($scope, ShoppingListCheckOffService){
    var showList = this;

showList.items = ShoppingListCheckOffService.getItem();
showList.alert = ShoppingListCheckOffService.getAlert();
}

function ShoppingListCheckOffService(){
    var service = this;
    var buyList = [{name:"Cookies", quantity:5}, {name:"Milk", quantity:3}, {name:"Sugar", quantity:2}, {name:"Ice Cream", quantity:1}, {name:"Bread", quantity:2}, 
                    {name:"Tomato", quantity:4}, {name:"Onion", quantity:7}, {name:"Apple", quantity:6}, {name:"Garlic", quantity:2}, {name:"Watermelon", quantity:1},];
    var msg = {buy: false, abought: true};
    var items = [];

    service.getList = function(){
        return buyList;
    }


    service.getItem = function(){
        return items;
    };

    service.Alert = function(list){
        if (list===0) {
            msg.buy= true;
        } else { 
            msg.buy = false;
        }
        if (list<10) {
            msg.abought = false;
        }
        return msg;
    };

    service.getAlert = function(){
        return msg;
    };

};

})();