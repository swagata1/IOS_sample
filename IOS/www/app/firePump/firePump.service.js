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
var FirePumpService = (function () {
    function FirePumpService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    FirePumpService.prototype.getFirePumpDropdownData = function () {
        return this.http.request("json/reference-data/others.json").map(function (res) { return res.json(); });
    };
    FirePumpService.prototype.getFirePumpData = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(data.LocationAssessment.LAWorkPageList[0]);
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    FirePumpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], FirePumpService);
    return FirePumpService;
}());
exports.FirePumpService = FirePumpService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9maXJlUHVtcC9maXJlUHVtcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUdwRTtJQUVJLHlCQUFvQixjQUE4QixFQUFVLElBQVUsRUFBVSxhQUE0QjtRQUF4RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDNUcsQ0FBQztJQUVELGlEQUF1QixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBR0QseUNBQWUsR0FBZixVQUFnQixXQUFXLEVBQUUsS0FBSztRQUFsQyxpQkFjQztRQWJHLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUU5RCxVQUFBLElBQUk7Z0JBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBRUQsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUV6QixjQUFPLENBQUMsQ0FDWCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekJMO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUEwQmIsc0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHVCQUFlLGtCQXlCM0IsQ0FBQSIsImZpbGUiOiJhcHAvZmlyZVB1bXAvZmlyZVB1bXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgT2ZmbGluZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVQdW1wU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlyZVB1bXBEcm9wZG93bkRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3JlZmVyZW5jZS1kYXRhL290aGVycy5qc29uYCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gYWRkaW5nIHRoaXMgY29uZGl0aW9uIHRlbXBvcmFyaWx5IGluIG9yZGVyIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFzIGJvdGggd2ViIGFwcCBhbmQgZGVza3RvcCBhcHAuXHJcbiAgICBnZXRGaXJlUHVtcERhdGEocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGVycm9yXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHRoaXJkIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBjb21wbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
