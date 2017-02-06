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
var core_1 = require("@angular/core");
var localStorageService_1 = require('./../../shared/localStorageService');
var componentCommunicationService_1 = require('./../../shared/componentCommunicationService');
var common_service_1 = require('./../../shared/services/common.service');
var location_data_model_1 = require('./../../shared/model/location-data.model');
var offline_service_1 = require('./../../shared/services/offline.service');
var event_model_1 = require('./../../shared/model/event.model');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/forkJoin');
var fire_detection_service_1 = require('./fire-detection.service');
var FireDetectionComponent = (function () {
    function FireDetectionComponent(fireDetectionService, commonService, offlineService, ccs, localStorageService) {
        this.fireDetectionService = fireDetectionService;
        this.commonService = commonService;
        this.offlineService = offlineService;
        this.ccs = ccs;
        this.localStorageService = localStorageService;
    }
    FireDetectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.globalNarrative = '';
        this.site = this.localStorageService.get('locationData');
        Observable_1.Observable.forkJoin([]).subscribe(function (t) {
            _this.getFireDetectionData();
        });
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting fire-detection to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    FireDetectionComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveDataToFile(new event_model_1.Event(this.site.RFS_PARENT_ID, this.site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for fire-detection.");
        }
    };
    FireDetectionComponent.prototype.getFireDetectionData = function () {
        this.fireDetectionService.getFireDetectionData(this.site.RFS_PARENT_ID, this.site.RFS_ID);
    };
    FireDetectionComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'fire-detection');
                locationDataModel.setRawData(_this.fireDetectionService.mapToLocationData(locData, _this.fireDetectionData));
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    FireDetectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fire-detection',
            templateUrl: 'fire-detection.component.html',
            providers: [fire_detection_service_1.FireDetectionService]
        }), 
        __metadata('design:paramtypes', [fire_detection_service_1.FireDetectionService, (typeof (_a = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _a) || Object, (typeof (_b = typeof offline_service_1.OfflineService !== 'undefined' && offline_service_1.OfflineService) === 'function' && _b) || Object, (typeof (_c = typeof componentCommunicationService_1.ComponentCommunicationService !== 'undefined' && componentCommunicationService_1.ComponentCommunicationService) === 'function' && _c) || Object, (typeof (_d = typeof localStorageService_1.LocalStorageService !== 'undefined' && localStorageService_1.LocalStorageService) === 'function' && _d) || Object])
    ], FireDetectionComponent);
    return FireDetectionComponent;
    var _a, _b, _c, _d;
}());
exports.FireDetectionComponent = FireDetectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQtdGVtcGxhdGUvZmlyZS1kZXRlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFJN0Qsb0NBQW9DLG9DQUFvQyxDQUFDLENBQUE7QUFHekUsOENBQThDLDhDQUE4QyxDQUFDLENBQUE7QUFDN0YsK0JBQThCLHdDQUF3QyxDQUFDLENBQUE7QUFDdkUsb0NBQWtDLDBDQUEwQyxDQUFDLENBQUE7QUFFN0UsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFFekUsNEJBQXNCLGtDQUFrQyxDQUFDLENBQUE7QUFDekQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyw4QkFBOEIsQ0FBQyxDQUFBO0FBRXRDLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBU2hFO0lBT0ksZ0NBQW9CLG9CQUEwQyxFQUFVLGFBQTJCLEVBQVUsY0FBOEIsRUFBVSxHQUFrQyxFQUFVLG1CQUF3QztRQUFyTix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFFek8sQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFjQztRQVpHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFekQsdUJBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUMvQixLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzVCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLG1CQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxtQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDTCxDQUFDO0lBRUQscURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUdELCtDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQXBCLGlCQWVDO1FBZEcsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksV0FBVyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDOUQsVUFBQSxJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztnQkFFbkIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEYsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDM0csS0FBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUE5REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztTQUNwQyxDQUFDOzs4QkFBQTtJQTBERiw2QkFBQzs7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLDhCQUFzQix5QkF3RGxDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudC10ZW1wbGF0ZS9maXJlLWRldGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uRGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvbG9jYXRpb24tZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlL3NhdmVkLXRvLWZzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmZzUmVwb3J0RGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvcmZzLXJlcG9ydC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZm9ya0pvaW4nO1xyXG5cclxuaW1wb3J0IHsgRmlyZURldGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZpcmUtZGV0ZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdmaXJlLWRldGVjdGlvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpcmUtZGV0ZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0ZpcmVEZXRlY3Rpb25TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmVEZXRlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgU2F2ZWRUb0ZpbGVTeXN0ZW0ge1xyXG5cclxuICAgIHByaXZhdGUgc2F2ZUludGVydmFsOiBhbnk7XHJcbiAgICBwcml2YXRlIHNpdGU6YW55O1xyXG5cclxuICAgIGZpcmVEZXRlY3Rpb25EYXRhOiBPYmplY3Q7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZURldGVjdGlvblNlcnZpY2U6IEZpcmVEZXRlY3Rpb25TZXJ2aWNlLCBwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uU2VydmljZSwgcHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UsIHByaXZhdGUgY2NzOiBDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHJlc2V0IGdsb2JhbCBuYXJyYXRpdmVcclxuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2xvYmFsTmFycmF0aXZlID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcblxyXG4gICAgICAgIE9ic2VydmFibGUuZm9ya0pvaW4oW10pLnN1YnNjcmliZSh0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRGaXJlRGV0ZWN0aW9uRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIGZpcmUtZGV0ZWN0aW9uIHRvIHNhdmUgZm9yIHJmcyBwYXJlbnQ6XCIsIHNpdGUuUkZTX1BBUkVOVF9JRCwgXCJhbmQgcmZzOlwiLCBzaXRlLlJGU19JRCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgIH0sIDMwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNhdmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lELCAnc2F2ZScpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNhdmUgaW50ZXJ2YWwgY2xlYXJlZCBhbmQgZGF0YSBzYXZlZCBmb3IgZmlyZS1kZXRlY3Rpb24uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcmVEZXRlY3Rpb25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZmlyZURldGVjdGlvblNlcnZpY2UuZ2V0RmlyZURldGVjdGlvbkRhdGEodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzYXZlRGF0YVRvRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5nZXRUeXBlKCkgPT0gJ3NhdmUnICYmIGV2ZW50LmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQgJiYgZXZlbnQuZ2V0UmZzSWQoKSA9PSByZnNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jRGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbkRhdGFNb2RlbCA9IG5ldyBMb2NhdGlvbkRhdGFNb2RlbChyZnNQYXJlbnRJZCwgcmZzSWQsICdmaXJlLWRldGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YU1vZGVsLnNldFJhd0RhdGEodGhpcy5maXJlRGV0ZWN0aW9uU2VydmljZS5tYXBUb0xvY2F0aW9uRGF0YShsb2NEYXRhLCB0aGlzLmZpcmVEZXRlY3Rpb25EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS53cml0ZUxvY2F0aW9uRGF0YShsb2NhdGlvbkRhdGFNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
