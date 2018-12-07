app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.controller('BasicDemoCtrl', function($scope,$mdSidenav) {
    $scope.companyName = "D A Oak and Company";
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.show = function (toShow) {
        $scope.toShow = toShow;
        $mdSidenav('left').close();
      };


      $scope.user = {
        name: 'John Doe',
        email: '',
        phone: '',
        address: 'Mountain View, CA',
        donation: 19.99
      };

      $scope.isOpen = false;
});

app.controller('SignInCtrl', function ($scope, $mdDialog) {
  $scope.companyName = "D A Oak and Company";
  $scope.status = '  ';

  showAlert = function(title, msg) {
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title(title)
      .textContent(msg)
      .ariaLabel('Alert Dialog Demo')
      .ok('Close')
    );
  };

  $scope.showPrompt = function (ev) {
    var confirm = $mdDialog.prompt()
      .title('Enter your Email Id to reset password')
      .placeholder('Email ID')
      .ariaLabel('Email ID')
      .targetEvent(ev)
      .required(true)
      .ok('Submit')
      .cancel('Cancel');

    $mdDialog.show(confirm).then(function (result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(result)) {
        showAlert("Wrong Email ID", "Please Enter a valid Email ID");
      }else{
        showAlert("Password has been reset", "Please check your Email for new Password");
      }
    });
  };

});

app.controller('SignUpCtrl', function ($scope, $mdDialog) {
  $scope.companyName = "D A Oak and Company";
});