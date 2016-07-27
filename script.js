angular.module('app',['dndLists','ngSanitize'])

.controller('EmailTemplateCtrl', function($scope, $sce){
    $scope.maxCol = 12;
    $scope.template = [{
            style:{
                'text-align': 'center'
            },
            td: [{
                type:'h1',
                content: 'Header'
            }]
    },{
            style:{
                'text-align': 'justify'
            },
            td: [{
                type:'p',
                content: 'Paragraph'
            },{
                type:'html',
                content: 'This is an <b>HTML</b>'
            }]
    },{
            style:{
                'text-align': 'center'
            },
            td: [{
                type:'p',
                content: 'Footer'
            }]
    }];
    $scope.getStyle = function(elem){
        return elem.style;
    }
    $scope.getColspan = function(tr){
        return Math.floor($scope.maxCol / (tr.td.length));
    }
    $scope.addRow = function(){
        $scope.template.push({
            style:{
                'text-align': 'center'
            },
            td: [{
                type:'html',
                content: 'Data'
            }]
        });
    }

    $scope.trustHtml = function(html){
        return $sce.trustAsHtml(html);
    }

})

;
