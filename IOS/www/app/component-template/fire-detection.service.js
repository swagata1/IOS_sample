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
var configuration_1 = require('./../../shared/configuration');
var offline_service_1 = require('./../../shared/services/offline.service');
var fire_detection_screen_1 = require('./../../shared/model/fire-detection-screen');
var FireDetectionService = (function () {
    function FireDetectionService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    FireDetectionService.prototype.getFireDetectionData = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(_this.mapFromLocationData(data, new fire_detection_screen_1.FireDetectionScreen()));
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    FireDetectionService.prototype.mapToLocationData = function (locationData, fireDetectionScreen) {
        return locationData;
    };
    FireDetectionService.prototype.mapFromLocationData = function (locationData, fireDetectionScreen) {
        return fireDetectionScreen;
    };
    FireDetectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof offline_service_1.OfflineService !== 'undefined' && offline_service_1.OfflineService) === 'function' && _a) || Object, http_1.Http, (typeof (_b = typeof configuration_1.Configuration !== 'undefined' && configuration_1.Configuration) === 'function' && _b) || Object])
    ], FireDetectionService);
    return FireDetectionService;
    var _a, _b;
}());
exports.FireDetectionService = FireDetectionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQtdGVtcGxhdGUvZmlyZS1kZXRlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsOEJBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFFekUsc0NBQW9DLDRDQUE0QyxDQUFDLENBQUE7QUFHakY7SUFFSSw4QkFBb0IsY0FBOEIsRUFBVSxJQUFVLEVBQVUsYUFBNEI7UUFBeEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQzVHLENBQUM7SUFFRCxtREFBb0IsR0FBcEIsVUFBcUIsV0FBVyxFQUFFLEtBQUs7UUFBdkMsaUJBY0M7UUFiRyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FFOUQsVUFBQSxJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLDJDQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUVELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFFekIsY0FBUSxDQUFDLENBQ1osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFpQixHQUFqQixVQUFrQixZQUFpQixFQUFFLG1CQUF3QztRQUN6RSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrREFBbUIsR0FBbkIsVUFBb0IsWUFBaUIsRUFBRSxtQkFBd0M7UUFDM0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUE1Qkw7UUFBQyxpQkFBVSxFQUFFOzs0QkFBQTtJQTZCYiwyQkFBQzs7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLDRCQUFvQix1QkE0QmhDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudC10ZW1wbGF0ZS9maXJlLWRldGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGaXJlRGV0ZWN0aW9uU2NyZWVuIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvZmlyZS1kZXRlY3Rpb24tc2NyZWVuJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVEZXRlY3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJlRGV0ZWN0aW9uRGF0YShyZnNQYXJlbnRJZCwgcmZzSWQpIHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5tYXBGcm9tTG9jYXRpb25EYXRhKGRhdGEsIG5ldyBGaXJlRGV0ZWN0aW9uU2NyZWVuKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGVycm9yXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHRoaXJkIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBjb21wbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBUb0xvY2F0aW9uRGF0YShsb2NhdGlvbkRhdGE6IGFueSwgZmlyZURldGVjdGlvblNjcmVlbjogRmlyZURldGVjdGlvblNjcmVlbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBGcm9tTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YTogYW55LCBmaXJlRGV0ZWN0aW9uU2NyZWVuOiBGaXJlRGV0ZWN0aW9uU2NyZWVuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmVEZXRlY3Rpb25TY3JlZW47XHJcbiAgICB9XHJcbn0iXX0=
