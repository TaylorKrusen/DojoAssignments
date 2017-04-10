
app.controller('postsController', function($scope, postFactory){

    var setPost = function() {
        postFactory.setWall(function(output){
            $scope.posts = output;
        })
    }
    setPost();

    $scope.add_post = function(){
        postFactory.add_post($scope.newPost);
        $scope.newPost = {}
    }

    $scope.add_comment = function(){
        commFactory.add_comment($scope.newComment);
        $scope.newComment();
    }

})
