'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.current
 * @description
 * # current
 * Factory in the capstoneApp.
 */
angular.module('capstoneApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
     return $resource('http://api.soundcloud.com/tracks/client_id=d12653efcff146eb581f2df668863c19', {}, {
       query: {
         method:'GET',
         params:{
           username: 'Eagles',
           bogus: null,
         },
         isArray:false
       }
     });

     return $resource('https://api.twitter.com/1.1/statuses/user_timeline.json', {}, {
       query: {
         method:'GET',
         params:{
           screen_name: 'Eagles',
           bogus: null,
         },
         isArray:false
       }
     });
   });
