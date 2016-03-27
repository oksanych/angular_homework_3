App.controller('MainCtrl', function ($scope, $http, toaster) {

    $scope.users = [];

    $http({
        method: 'GET',
        url: 'http://angular.codeforges.com/'
    }).then(function successCallback(response) {
        $scope.users = response.data;
    });

    $scope.addNewPerson = function (userDetails, isvalid) {
        if (isvalid) {
            $scope.users.push({
                userName: userDetails.userName,
                hash: userDetails.hash,
                email: userDetails.email,
            });

            toaster.pop({
                type: 'success',
                title: "Success",
                body: "User added!",
                showCloseButton: true
            });

            userDetails.userName = "";
            userDetails.hash = "";
            userDetails.email = "";
        }
        else {
            toaster.pop({
                type: 'error',
                title: "Error",
                body: "Please, enter the correct information in the field.",
                showCloseButton: true
            });
        }
    }

    $scope.removeUser = function (index) {
        $scope.users.splice(index, 1);

        toaster.pop({
            type: 'success',
            title: "Success",
            body: "User removed!",
            showCloseButton: true
        });
    }
});