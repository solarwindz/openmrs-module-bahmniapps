'use strict';

angular.module('bahmni.common.conceptSet')
    .factory('formService', ['$q', function ($q) {
        var getFormList = function (encounterUuid) {
            return $q.when([]);
        };

        var getFormDetail = function (formUuid, params) {
            return $q.when([]);
        };

        return {
            getFormList: getFormList,
            getFormDetail: getFormDetail
        };
    }]);
