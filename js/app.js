var app=angular.module('formApp',[]);

app.controller('categoryCtrl',function($scope, $http){
    //fetching data from api
    $http.get("http://35.154.241.44:5555/api/v1/gspade/data")
    .then(function(res){
        $scope.items=res.data.categories;
        //console.log(res.data.categories);
    });

    $scope.addItem=function(){
        ;
        // yet to implement checkout progress bar add item is valid
    }
});

