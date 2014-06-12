// 'use strict';

/* Controllers */

var tumblrPostsApp = angular.module('tumblrPostsApp', []);
var API_KEY = 'ii4TLRjfMoszcoDkrxBKUk5isHgx0ezQnJ8JWGntYIboVVigez'
// var HOSTNAME = 'bloovanmeer.tumblr.com'

tumblrPostsApp.controller('TumblrPostCtrl',
    function($scope, $http) {
        $scope.hostname = 'example.tumblr.com';

        $scope.get_meta = function(hostname) {
            console.log('Entered get_meta function')
            $http({method: 'GET', url: 'http://api.tumblr.com/v2/blog/' + hostname + '/posts?api_key=' + API_KEY}).
                success(function(data) {
                    $scope.meta = data.meta;
                    $scope.blog = data.response.blog;
                    console.log(data);
                    // console.log('Finished the data');
                    // $scope.myblog = 'fish';
                    // console.log('fish');
                }).error(function(data) {
                    console.log(data);
                    $scope.meta = data.meta;
                });
            console.log('Finished processing data');
        }
        
        // , status, headers, config
        // 
        // $scope.get_meta = function(H, $scope, $http) {
        //     $http.get('http://api.tumblr.com/v2/blog' + hostname + '.tumblr.com/posts?api_key=' + API_KEY).success(function(data) {
        //         $scope.meta = data.meta;
        //         $scope.blog = data.response.blog;
        //         $scope.post_count = $scope.blog.posts;
        //         $scope.requests_needed = Math.ceil($scope.post_count / 20) + 1;
        //     })
        // }
        
        $scope.get_posts = function(hostname, offset, $scope, $http) {
            return 'cheese';
        }
        
    }
);
    // }
    // $scope.hostname = 'example.tumblr.com';
  // $scope.hostname = 'example.tumblr.com';
  // function($scope, $http) {
  //   $http.get('http://api.tumblr.com/v2/blog/' + HOSTNAME '.tumblr.com/posts?api_key=' + API_KEY).success(function(data) {
  //   // $scope.data = data;
  //   $scope.meta = data.meta;
  //   $scope.blog = data.response.blog;
  //   $scope.posts = data.response.posts;
  //   $scope.post_count = $scope.blog.posts;
  //   $scope.requests_needed = Math.ceil($scope.post_count / 20) + 1;
  //   // $scope.posts = data.
  // });
  // 
  // // $scope.myblog = "Hello";
  // 
  // var my_text = "requests " + $scope.requests_needed;
  // 
  // for (var i = 0; i < $scope.requests_needed; i++) {
  //     my_text += " " + i + " ";
  // }
  // 
  // $scope.my_text = my_text;
  // 
  // 
  // 
  // $scope.get_posts = function(hostname, offset, $scope, $http) {
  //     // alert('Hello ' + (hostname || 'world') + '!' + ' offset ' + offset);
  //     return 'cheese';
  // }
  
  


// via http://stackoverflow.com/questions/11873570/angularjs-for-loop-with-numbers-ranges

tumblrPostsApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
