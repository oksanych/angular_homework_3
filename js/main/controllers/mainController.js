App.controller('MainCtrl', function ($scope, $http, toaster) {

    $scope.users = [];

    $http({
        method: 'GET',
        url: 'http://angular.codeforges.com/'
    }).then(function successCallback(response) {
        $scope.users = response.data;
    });

    $scope.sendData = function () {
        if ($scope.userForm.$valid) {

            $http({
                method: 'POST',
                url: "http://angular.codeforges.com/",
                data: {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    userName: $scope.userName
                }
            }).then(function (response) {
                $scope.users.push(response.data.response);

                toaster.pop({
                    type: 'success',
                    title: "Success",
                    body: "User added!",
                    showCloseButton: true
                });

                firstName = "";
                lastName = "";
                userName = "";
            });
        }
        else {
            toaster.pop({
                type: 'error',
                title: "Error",
                body: "Please, enter the correct information in the field.",
                showCloseButton: true
            });
        }
    };

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