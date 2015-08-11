'use strict'

var app = angular.module('app',[
    'ngMaterial',
    'ngMessages',
    
    'appControllers',
    'appFactories'
]);

app.config([
    '$httpProvider',
    '$mdThemingProvider',
    function($httpProvider, $mdThemingProvider){
        $httpProvider.useApplyAsync(true);
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '700',
                'hue-1': '100',
                'hue-2': '400',
                'hue-3': '800'
            })
            .accentPalette('red', {
                'default': '700',
                'hue-1': '500',
                'hue-2': '800'
            })
            .backgroundPalette('grey', {
                'default': '50'
            });
        $mdThemingProvider.theme('alt')
            .primaryPalette('grey', {
                'default': '900',
                'hue-1': '50'
            })
            .backgroundPalette('grey', {
                'default': '300'
            });
    }
]);