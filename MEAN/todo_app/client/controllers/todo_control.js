app.controller('tasksController', function($scope, taskFactory){

    var index = function() {
        taskFactory.index(function(output){
            $scope.tasks = output;
        })
    }

    index();

    $scope.add_task = function(){
        taskFactory.create($scope.todo);
        $scope.todo = {}
    }
})
