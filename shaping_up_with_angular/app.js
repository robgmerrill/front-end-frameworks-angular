(function() {
  var app = angular.module('dogStore', []);

  app.controller('StoreController', function(){
    this.products = dogs;
  });

  var dogs = [
    { 
      name: 'Oso', 
      breed: 'Golden Retriver', 
      images: "img/golden-retriever.jpg" 
    },
    { 
      name: 'Bernie', 
      breed: 'Bernese Mountain Dog', 
      images: "img/bernese.jpg"  
    },
    { 
      name: 'Paws', 
      breed: 'Nova Scotia Duck Toll Retriver', 
      images: "img/nova-scotia.jpg"  
    }
  ];
})();

