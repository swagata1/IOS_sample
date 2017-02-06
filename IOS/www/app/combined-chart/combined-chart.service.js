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
var Observable_1 = require('rxjs/Observable');
var configuration_1 = require('../shared/configuration');
var offline_service_1 = require('../shared/services/offline.service');
var CombinedChartService = (function () {
    function CombinedChartService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    CombinedChartService.prototype.getCombinedChartData = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(data.LocationAssessment.LAWorkPageList[0]);
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    CombinedChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], CombinedChartService);
    return CombinedChartService;
}());
exports.CombinedChartService = CombinedChartService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUdwRTtJQUVJLDhCQUFvQixjQUE4QixFQUFVLElBQVUsRUFBVSxhQUE0QjtRQUF4RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDNUcsQ0FBQztJQUVELG1EQUFvQixHQUFwQixVQUFxQixXQUFXLEVBQUUsS0FBSztRQUF2QyxpQkFlQztRQWJHLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUU5RCxVQUFBLElBQUk7Z0JBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBRUQsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUV6QixjQUFPLENBQUMsQ0FDWCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJMO1FBQUMsaUJBQVUsRUFBRTs7NEJBQUE7SUFzQmIsMkJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLDRCQUFvQix1QkFxQmhDLENBQUEiLCJmaWxlIjoiYXBwL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21iaW5lZENoYXJ0U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tYmluZWRDaGFydERhdGEocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2UucmVhZExvY2F0aW9uRGF0YShyZnNQYXJlbnRJZCwgcmZzSWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSB0aGlyZCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gY29tcGxldGlvblxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gIFxyXG59Il19
