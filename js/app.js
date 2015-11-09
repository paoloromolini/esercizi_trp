var app = angular.module('tonalita', []);
var audio_player = $('#audio')[0];
app.controller('tonalitaCtrl', function($scope, $http) {

    $scope.giusto = false;
    $scope.risposto = false;

    $scope.domande = [
        {"audio": "./audio/do.mp3", "nota": "Do", "modo": "Maggiore" , "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/Do_Mayor_armadura.png" },
        {"audio": "./audio/re.mp3", "nota": "Re", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/D_Major_key_signature.png" },
        {"audio": "./audio/mi.mp3", "nota": "Mi", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fd/E_Major_key_signature.png" },
        {"audio": "./audio/fa.mp3", "nota": "Fa", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fc/F_Major_key_signature.png" },
        {"audio": "./audio/sol.mp3", "nota": "Sol", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/G_Major_key_signature.png" },
        {"audio": "./audio/la.mp3", "nota": "La", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/9/92/A_Major_key_signature.png" },
        {"audio": "./audio/si.mp3", "nota": "Si", "modo": "Maggiore", "img": "https://upload.wikimedia.org/wikipedia/commons/0/06/B_Major_key_signature.png" },
        {"audio": "./audio/dom.mp3", "nota": "Do", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f9/E-flat_Major_key_signature.png" },
        {"audio": "./audio/rem.mp3", "nota": "Re", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fc/F_Major_key_signature.png" },
        {"audio": "./audio/mim.mp3", "nota": "Mi", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/G_Major_key_signature.png" },
        {"audio": "./audio/fam.mp3", "nota": "Fa", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/c/ca/A-flat_Major_key_signature.png" },
        {"audio": "./audio/solm.mp3", "nota": "Sol", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f3/B-flat_Major_key_signature.png" },
        {"audio": "./audio/lam.mp3", "nota": "La", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/2/22/Do_Mayor_armadura.png" },
        {"audio": "./audio/sim.mp3", "nota": "Si", "modo": "Minore", "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/D_Major_key_signature.png" }         
    ];
    
    $scope.risposte_corrette = [];

    $scope.note = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
    $scope.modi = ['Maggiore', 'Minore'];

    $scope.domanda = $scope.domande[Math.floor(Math.random()*$scope.domande.length)];

    $scope.checkAnswer = function (event) {
        $scope.risposto = true;
        if($scope.selectedNote == $scope.domanda.nota && $scope.selectedMode == $scope.domanda.modo){
            $scope.giusto = true;
            var domanda_index = $scope.domande.indexOf($scope.domanda);
            $scope.domande.splice(domanda_index, 1);
        }else{
            $scope.giusto = false;
        }
        audio_player.src = '';
        audio_player.pause();
        $('#modo').val($("#modo option:first").val());
        $('#nota').val($("#nota option:first").val());
    }
    $scope.next = function (event){
        $scope.domanda = $scope.domande[Math.floor(Math.random()*$scope.domande.length)];
        $scope.risposto = false;
        audio_player.load();
    }

});