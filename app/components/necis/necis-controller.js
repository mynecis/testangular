/**
 * Created by necis.zhang on 2016/05/13.
 */
var necisCtrl=angular.module('myApp.necis.ctrl',['myApp.necis']);

necisCtrl.controller('myApp.necis.ctrl',function ($scope,$ionicModal) {
    $scope.tasks =[
        { title:'test1'},
        { title:'test2'},
        { title:'test3'},
        { title:'test4'}
    ];
    //创建并载入模型
    $ionicModal.fromTemplateUrl('new-task.html',function (modal) {
        $scope.taskModal = modal;
    },{
        scope:$scope,
        animation:'slide-in-up'
    });

    //表单提交时调用
    $scope.createTask = function (task) {
        $scope.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();
        task.title ='';
    };
    //打开新增的模型
    $scope.newTask = function () {
        $scope.taskModal.show();
    };

    //关闭新增的模型
    $scope.closeNewTask = function () {
        $scope.taskModal.hide();
    }
});
