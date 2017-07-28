angular.module('projectvocabulary.api').factory('User', function ($http, $location) {

  var _user;
  var url = 'http://localhost:8080/projectvocabulary/';

  function _login(email, password) {
    $http.post(url + 'login', {
      email: email,
      password: password
    }).then(function successCallback(data) {
      console.log(data.data);
      _user = data.data;
      $location.path("/root");
    }, function errorCallback(response) {
      console.log(response);
    });
  }

  function _register(email, password, firstName, lastName, type, uid) {
    if (uid == "") {
      $http.post(url + 'register', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        type: type,
      }).then(function successCallback(data) {
        console.log(data);
        $location.path("/login");
      }, function errorCallback(response) {
        console.log(response);
      });
    } else {
      $http.post(url + 'registerWithUid', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        type: type,
        uid: uid
      }).then(function successCallback(data) {
        console.log(data);
        $location.path("/login");
      }, function errorCallback(response) {
        console.log(response);
      });

    }
  }

  function _logout() {
    $http.post(url + 'logout', {}).then(function successCallback(data) {
      console.log(data);
      _user = data.data;
      $location.path("/login");
    }, function errorCallback(response) {
      console.log(response);
    });

  }

  function _updateUserData(id, email, firstName, lastName) {
    $http.get(url + 'update/' + id, {
      email: email,
      firstName: firstName,
      lastName: lastName
    }).then(function successCallback(data) {
      console.log(data);
      _user = data.data;
      $location.path("/login");
    }, function errorCallback(response) {
      console.log(response);
    });
  }

  function _getUser(){
    return _user;
  }

  return {
    login: _login,
    register: _register,
    logout: _logout,
    user: _getUser
  }
});
