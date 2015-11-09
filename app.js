var app = angular.module('tonalita', []);

app.controller('tonalitaCtrl', function($scope, $http) {

    /*$http({
      method: 'GET',
      url: './domande.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });*/
    $scope.giusto = false;
    $scope.risposto = false;

    $scope.domande = [
        { "id": 1,  "audio": "../../audio/do.mp3", "nota": "Do", "modo": "Maggiore" , "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/Do_Mayor_armadura.png" },
        { "id": 2,  "audio": "../../audio/re.mp3", "nota": "Re", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/D_Major_key_signature.png" },
        { "id": 3,  "audio": "../../audio/mi.mp3", "nota": "Mi", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fd/E_Major_key_signature.png" },
        { "id": 4,  "audio": "../../audio/fa.mp3", "nota": "Fa", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fc/F_Major_key_signature.png" },
        { "id": 5,  "audio": "../../audio/sol.mp3", "nota": "Sol", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/G_Major_key_signature.png" },
    ];

    $scope.risposte_corrette = [];

    $scope.note = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
    $scope.modi = ['Maggiore', 'Minore'];

    $scope.domanda = $scope.domande[Math.floor(Math.random()*$scope.domande.length)];

    $scope.checkAnswer = function (event) {
        $scope.risposto = true;
        if($scope.selectedNote == $scope.domanda.nota && $scope.selectedMode == $scope.domanda.modo){
            $scope.giusto = true;
            $scope.risposte_corrette.append()
        }else{
            $scope.giusto = false;
        }
    }


});