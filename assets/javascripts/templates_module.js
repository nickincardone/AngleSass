angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('example.html',
    "<div id=\"example\" class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><form><div class=\"form-group\"><label for=\"exampleInputEmail1\">Email address*</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" ng-model=\"email\" ni-validator=\"required email\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Password*</label><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" ng-model=\"password\" ni-validator=\"required password\"></div><div class=\"form-group\"><label for=\"exampleInputPassword2\">Password Confirmation*</label><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Confirm Password\" ng-model=\"passwordConfirmation\" ni-confirm=\"password\"></div><div class=\"form-group\"><label for=\"exampleInputPhone\">Phone number</label><input type=\"text\" class=\"form-control\" id=\"exampleInputPhone\" placeholder=\"XXX-XXX-XXXX\" ng-model=\"phone\" ni-validator=\"phoneNumber\"></div><div class=\"form-group\"><label for=\"exampleInputUrl\">Personal URL</label><input type=\"url\" class=\"form-control\" id=\"exampleInputUrl\" placeholder=\"URL\" ng-model=\"url\" ni-validator=\"url\"></div></form></div></div></div>"
  );


  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Nick Incardone</a></div></div></div>"
  );

}]);
