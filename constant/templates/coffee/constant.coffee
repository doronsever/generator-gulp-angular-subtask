'use strict'

###*
# @ngdoc service
# @name <%= scriptAppName %>.<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
# Constant in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
.constant '<%= scriptClassName %>Const', <%= serviceValue %>
