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
    FireDetectionService.prototype.getHazardsData = function (rfsParentId, rfsId) {
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
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], FireDetectionService);
    return FireDetectionService;
}());
exports.FireDetectionService = FireDetectionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9hdXRvbWF0aWMtZmlyZS1kZXRlY3Rpb24vZmlyZS1kZXRlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsOEJBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFFekUsc0NBQW9DLDRDQUE0QyxDQUFDLENBQUE7QUFHakY7SUFFSSw4QkFBb0IsY0FBOEIsRUFBVSxJQUFVLEVBQVUsYUFBNEI7UUFBeEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQzVHLENBQUM7SUFFRCw2Q0FBYyxHQUFkLFVBQWUsV0FBVyxFQUFFLEtBQUs7UUFBakMsaUJBY0M7UUFiRyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FFOUQsVUFBQSxJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLDJDQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUVELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFFekIsY0FBUSxDQUFDLENBQ1osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFpQixHQUFqQixVQUFrQixZQUFpQixFQUFFLG1CQUF3QztRQUN6RSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrREFBbUIsR0FBbkIsVUFBb0IsWUFBaUIsRUFBRSxtQkFBd0M7UUFDM0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUE1Qkw7UUFBQyxpQkFBVSxFQUFFOzs0QkFBQTtJQTZCYiwyQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksNEJBQW9CLHVCQTRCaEMsQ0FBQSIsImZpbGUiOiJhcHAvc3VwZXJ2aXNpb24vYXV0b21hdGljLWZpcmUtZGV0ZWN0aW9uL2ZpcmUtZGV0ZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEZpcmVEZXRlY3Rpb25TY3JlZW4gfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbC9maXJlLWRldGVjdGlvbi1zY3JlZW4nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZURldGVjdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb2ZmbGluZVNlcnZpY2U6IE9mZmxpbmVTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhhemFyZHNEYXRhKHJmc1BhcmVudElkLCByZnNJZCkge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2UucmVhZExvY2F0aW9uRGF0YShyZnNQYXJlbnRJZCwgcmZzSWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLm1hcEZyb21Mb2NhdGlvbkRhdGEoZGF0YSwgbmV3IEZpcmVEZXRlY3Rpb25TY3JlZW4oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHNlY29uZCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gZXJyb3JcclxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgdGhpcmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGNvbXBsZXRpb25cclxuICAgICAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcFRvTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YTogYW55LCBmaXJlRGV0ZWN0aW9uU2NyZWVuOiBGaXJlRGV0ZWN0aW9uU2NyZWVuKTogYW55IHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb25EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcEZyb21Mb2NhdGlvbkRhdGEobG9jYXRpb25EYXRhOiBhbnksIGZpcmVEZXRlY3Rpb25TY3JlZW46IEZpcmVEZXRlY3Rpb25TY3JlZW4pIHtcclxuICAgICAgICByZXR1cm4gZmlyZURldGVjdGlvblNjcmVlbjtcclxuICAgIH1cclxufSJdfQ==
