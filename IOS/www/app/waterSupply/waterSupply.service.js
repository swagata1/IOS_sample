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
var WaterSupplyService = (function () {
    function WaterSupplyService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    WaterSupplyService.prototype.getWaterSupplyDropdownData = function () {
        return this.http.request("json/reference-data/others.json").map(function (res) { return res.json(); });
    };
    WaterSupplyService.prototype.getWaterSupplyData = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(data.LocationAssessment.LAWorkPageList[0]);
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    WaterSupplyService.prototype.getWaterSupplyRatings = function () {
        return this.http.request("json/reference-data/rating-answers.json").map(function (res) { return res.json(); });
    };
    WaterSupplyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], WaterSupplyService);
    return WaterSupplyService;
}());
exports.WaterSupplyService = WaterSupplyService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRlclN1cHBseS93YXRlclN1cHBseS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUdwRTtJQUVJLDRCQUFvQixjQUE4QixFQUFVLElBQVUsRUFBVSxhQUE0QjtRQUF4RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFNUcsQ0FBQztJQUVELHVEQUEwQixHQUExQjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLFdBQVcsRUFBRSxLQUFLO1FBQXJDLGlCQWVDO1FBZEcsTUFBTSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtZQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBRzlELFVBQUEsSUFBSTtnQkFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFFRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBRXpCLGNBQU8sQ0FBQyxDQUNYLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCxrREFBcUIsR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQS9CTDtRQUFDLGlCQUFVLEVBQUU7OzBCQUFBO0lBaUNiLHlCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSwwQkFBa0IscUJBZ0M5QixDQUFBIiwiZmlsZSI6ImFwcC93YXRlclN1cHBseS93YXRlclN1cHBseS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9vZmZsaW5lLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2F0ZXJTdXBwbHlTZXJ2aWNlIHtcclxuICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pe1xyXG4gICAgXHQgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2F0ZXJTdXBwbHlEcm9wZG93bkRhdGEoKSB7XHJcbiAgICBcdHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9vdGhlcnMuanNvbmApLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXRlclN1cHBseURhdGEocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBzdWNjZXNzXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSB0aGlyZCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gY29tcGxldGlvblxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGZXRjaCBSYXRpbmdzXHJcbiAgICBnZXRXYXRlclN1cHBseVJhdGluZ3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmF0aW5nLWFuc3dlcnMuanNvbmApLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
