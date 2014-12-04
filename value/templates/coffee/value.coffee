'use strict'

###*
# @ngdoc service
# @name <%= scriptAppName %>.<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
# Value in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
.value '<%= scriptClassName %>Value', <%= serviceValue %>
