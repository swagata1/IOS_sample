"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var configuration_1 = require('../configuration');
var localStorageService_1 = require('../localStorageService');
var CommonService = (function () {
    function CommonService(http, configuration, localStorageService) {
        this.http = http;
        this.configuration = configuration;
        this.localStorageService = localStorageService;
        this.moduleProperties = {
            'Occupancy': { module: 'Occupancy', path: 'occupancy', validationError: false },
            'Construction': { module: 'Construction', path: 'construction', validationError: false },
            'Water Supplies': { module: 'Water Supplies', path: 'waterSupplies', validationError: false },
            'Fire Loss Estimates': { module: 'Fire Loss Estimates', path: 'fireLoss', validationError: false },
            'NATCAT': { module: 'NATCAT', path: 'nat-cat', validationError: false }
        };
    }
    CommonService.prototype.checkData = function (rfsParentId, rfsId) {
        if (this.configuration && this.configuration.dirPath && this.configuration.dirPath.result) {
            return this.http.request(this.configuration.dirPath.result + '/' + rfsParentId + '-' + rfsId + '/downstream/location-assessment.json').map(function (res) { return res.json(); });
        }
    };
    CommonService.prototype.getRIMatrix = function () {
        return this.http.request("json/reference-data/ri-matrix.json").map(function (res) { return res.json(); });
    };
    CommonService.prototype.getTradeSectors = function () {
        return this.http.request("json/reference-data/occupancy.json").map(function (res) { return res.json(); });
    };
    CommonService.prototype.setModuleProperties = function (key, value) {
        this.moduleProperties[key].validationError = value;
        console.log("after", this.moduleProperties);
    };
    CommonService.prototype.getPropertiesForModule = function (key) {
        return this.moduleProperties[key];
    };
    CommonService.prototype.modulePropertiesForAll = function () {
        return this.moduleProperties;
    };
    CommonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration, localStorageService_1.LocalStorageService])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBRS9CLDhCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELG9DQUFvQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRzdEO0lBVUksdUJBQW9CLElBQVUsRUFBVSxhQUE0QixFQUFVLG1CQUF1QztRQUFqRyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBUnJILHFCQUFnQixHQUFRO1lBQ3BCLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDO1lBQ3pFLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUMsS0FBSyxFQUFDO1lBQ25GLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLEtBQUssRUFBQztZQUN4RixxQkFBcUIsRUFBRSxFQUFDLE1BQU0sRUFBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBQyxLQUFLLEVBQUM7WUFDN0YsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxLQUFLLEVBQUM7U0FDckUsQ0FBQztJQUlGLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsV0FBVyxFQUFFLEtBQUs7UUFDeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUUsR0FBRyxHQUFDLFdBQVcsR0FBQyxHQUFHLEdBQUMsS0FBSyxHQUFDLHNDQUFzQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBWSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQ3BLLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBR0QsdUNBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLEdBQVUsRUFBRSxLQUFhO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw4Q0FBc0IsR0FBdEIsVUFBdUIsR0FBVTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4Q0FBc0IsR0FBdEI7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2hDLENBQUM7SUF6Q0w7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQTJDYixvQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1kscUJBQWEsZ0JBMEN6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZVNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZSB7XHJcbiAgICBnbG9iYWxOYXJyYXRpdmU6YW55O1xyXG4gICAgbW9kdWxlUHJvcGVydGllczogYW55ID0ge1xyXG4gICAgICAgICdPY2N1cGFuY3knOiB7bW9kdWxlOidPY2N1cGFuY3knLCBwYXRoOidvY2N1cGFuY3knLHZhbGlkYXRpb25FcnJvcjpmYWxzZX0sXHJcbiAgICAgICAgJ0NvbnN0cnVjdGlvbic6IHttb2R1bGU6J0NvbnN0cnVjdGlvbicsIHBhdGg6J2NvbnN0cnVjdGlvbicsIHZhbGlkYXRpb25FcnJvcjpmYWxzZX0sXHJcbiAgICAgICAgJ1dhdGVyIFN1cHBsaWVzJzoge21vZHVsZTonV2F0ZXIgU3VwcGxpZXMnLCBwYXRoOid3YXRlclN1cHBsaWVzJywgdmFsaWRhdGlvbkVycm9yOmZhbHNlfSxcclxuICAgICAgICAnRmlyZSBMb3NzIEVzdGltYXRlcyc6IHttb2R1bGU6J0ZpcmUgTG9zcyBFc3RpbWF0ZXMnLCBwYXRoOidmaXJlTG9zcycsIHZhbGlkYXRpb25FcnJvcjpmYWxzZX0sXHJcbiAgICAgICAgJ05BVENBVCc6IHttb2R1bGU6J05BVENBVCcsIHBhdGg6J25hdC1jYXQnLCB2YWxpZGF0aW9uRXJyb3I6ZmFsc2V9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSkge1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RhdGEocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoICYmIHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoLnJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QodGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGgucmVzdWx0ICsnLycrcmZzUGFyZW50SWQrJy0nK3Jmc0lkKycvZG93bnN0cmVhbS9sb2NhdGlvbi1hc3Nlc3NtZW50Lmpzb24nKS5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJJTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9yaS1tYXRyaXguanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2hpbmcgYWxsIHRyYWRlc2VjdG9yc1xyXG4gICAgZ2V0VHJhZGVTZWN0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9vY2N1cGFuY3kuanNvbmApLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb2R1bGVQcm9wZXJ0aWVzKGtleTpzdHJpbmcsIHZhbHVlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMubW9kdWxlUHJvcGVydGllc1trZXldLnZhbGlkYXRpb25FcnJvciA9IHZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIix0aGlzLm1vZHVsZVByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3BlcnRpZXNGb3JNb2R1bGUoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlUHJvcGVydGllc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZVByb3BlcnRpZXNGb3JBbGwoKTogc3RyaW5nW10ge1xyXG4gICAgICAgcmV0dXJuIHRoaXMubW9kdWxlUHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbn0iXX0=
