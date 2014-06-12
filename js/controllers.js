'use strict';

/* Controllers */

var tumblrPostsApp = angular.module('tumblrPostsApp', []);
var API_KEY = 'ii4TLRjfMoszcoDkrxBKUk5isHgx0ezQnJ8JWGntYIboVVigez'

tumblrPostsApp.controller('TumblrPostCtrl',
    function($scope, $http) {
        $scope.hostname = 'example.tumblr.com';
        
        $scope.requests_needed = 0;
        
        $scope.finished = false;
        $scope.untagged_exist = false;

        $scope.get_meta = function(hostname) {
            console.log('Entered get_meta function')
            var API_URL = 'http://api.tumblr.com/v2/blog/' + hostname + '/posts?api_key=' + API_KEY;
            
            $http({method: 'GET', url: API_URL}).
                success(function(data) {
                    $scope.meta = data.meta;
                    $scope.blog = data.response.blog;
                    $scope.posts = data.response.posts;
                    $scope.post_count = $scope.blog.posts;
                    $scope.requests_needed = Math.floor($scope.post_count / 20);
                }).error(function(data) {
                    $scope.meta = data.meta;
                });
            
            console.log('Finished get_meta function');
        }
      
        $scope.get_more_posts = function(hostname) {
            var API_URL = 'http://api.tumblr.com/v2/blog/' + hostname + '/posts?api_key=' + API_KEY;
            
            for (var i = 1; i <= $scope.requests_needed; i++) {
                $http.get(API_URL + '&offset=' + (i * 20)).
                    success(function(data) {
                        $scope.posts = $scope.posts.concat(data.response.posts);
                        // console.log(data.response.posts);
                        // console.log($scope.posts);
                    });
                console.log('Getting more posts, at offset ' + (i * 20));
            }
            $scope.requests_needed = 0;
            $scope.finished = true;
            return 'get more posts function';
        }
      
      
      // for (var i = 1; i <= $scope.requests_needed; i++) {
    //       console.log('request from within get_meta ' + (i * 20));
    //       console.log('before:');
    //       console.log(posts);
    //       $http.get(API_URL + '&offset=' + (i * 20)).
    //           success(function(data) {
    //               $scope.$apply(function() {
    //                   $scope.posts.push(data.response.posts);
    //               });
    //               console.log(data.response.posts);
    //           });
    //           console.log('after:');
    //           console.log(posts);
    //           console.log('finished response ' + (i * 20))
    //   }
        
        
        
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
        
        // $scope.get_posts = function(hostname, offset) {
        //     // $http({method: 'GET', url: 'http://api.tumblr.com/v2/blog/' + hostname + '/posts?api_key=' + API_KEY}).
        //   //       success(function(data) {
        //   //           $scope.posts.push(data.response.posts);
        //   //       });
        //   //       console.log($scope.posts);
        //     return 'cheese';
        // }
        
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
