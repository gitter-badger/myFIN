(function() {
   'use strict';

   angular.module('users', [])
   .factory('Users', function() {
      var Users = {};

      var userList = [
           {
               id: '1',
               name: 'Jane',
               role: 'Designer',
               location: 'New York',
               twitter: 'gijane'
           },
           {
               id: '2',
               name: 'Bob',
               role: 'Developer',
               location: 'New York',
               twitter: 'billybob'
            }
      ];

      Users.all = function() {
         if(userList.length === 0) return 0;
         return userList;
      };

      Users.clear = function() {
         userList = [];
      };

      Users.load = function() {
          userList = [
              {
                  id: '1',
                  name: 'Jane',
                  role: 'Designer',
                  location: 'New York',
                  twitter: 'gijane'
              },
              {
                  id: '2',
                  name: 'Bob',
                  role: 'Developer',
                  location: 'New York',
                  twitter: 'billybob'
              }
          ];
      };

      return Users;
   });
})();