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
            _this.fireDetectionData();
        });
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting automatic-fire-detection to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    FireDetectionComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveDataToFile(new event_model_1.Event(this.site.RFS_PARENT_ID, this.site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for automatic-fire-detection.");
        }
    };
    FireDetectionComponent.prototype.fireDetectionData = function () {
    };
    FireDetectionComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'automatic-fire-detection');
                locationDataModel.setRawData(locData);
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    FireDetectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'automatic-fire-detection',
            templateUrl: 'fire-detection.component.html',
            providers: [fire_detection_service_1.FireDetectionService]
        }), 
        __metadata('design:paramtypes', [fire_detection_service_1.FireDetectionService, common_service_1.CommonService, offline_service_1.OfflineService, componentCommunicationService_1.ComponentCommunicationService, localStorageService_1.LocalStorageService])
    ], FireDetectionComponent);
    return FireDetectionComponent;
}());
exports.FireDetectionComponent = FireDetectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9hdXRvbWF0aWMtZmlyZS1kZXRlY3Rpb24vZmlyZS1kZXRlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFJN0Qsb0NBQW9DLG9DQUFvQyxDQUFDLENBQUE7QUFHekUsOENBQThDLDhDQUE4QyxDQUFDLENBQUE7QUFDN0YsK0JBQThCLHdDQUF3QyxDQUFDLENBQUE7QUFDdkUsb0NBQWtDLDBDQUEwQyxDQUFDLENBQUE7QUFFN0UsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFFekUsNEJBQXNCLGtDQUFrQyxDQUFDLENBQUE7QUFDekQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyw4QkFBOEIsQ0FBQyxDQUFBO0FBRXRDLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBU2hFO0lBS0ksZ0NBQW9CLG9CQUEwQyxFQUFVLGFBQTJCLEVBQVUsY0FBOEIsRUFBVSxHQUFrQyxFQUFVLG1CQUF3QztRQUFyTix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFFek8sQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFjQztRQVpHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFekQsdUJBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUMvQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzVCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2REFBNkQsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEgsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLG1CQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxtQkFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7SUFDTCxDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO0lBQ0EsQ0FBQztJQUdELCtDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQXBCLGlCQWtCQztRQWpCRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxXQUFXLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUM5RCxVQUFBLElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUtuQixJQUFJLGlCQUFpQixHQUFHLElBQUksdUNBQWlCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO2dCQUM5RixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBOURMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsNkNBQW9CLENBQUM7U0FDcEMsQ0FBQzs7OEJBQUE7SUEwREYsNkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLDhCQUFzQix5QkF3RGxDLENBQUEiLCJmaWxlIjoiYXBwL3N1cGVydmlzaW9uL2F1dG9tYXRpYy1maXJlLWRldGVjdGlvbi9maXJlLWRldGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uRGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvbG9jYXRpb24tZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlL3NhdmVkLXRvLWZzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmZzUmVwb3J0RGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvcmZzLXJlcG9ydC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZm9ya0pvaW4nO1xyXG5cclxuaW1wb3J0IHsgRmlyZURldGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZpcmUtZGV0ZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhdXRvbWF0aWMtZmlyZS1kZXRlY3Rpb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaXJlLWRldGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtGaXJlRGV0ZWN0aW9uU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlRGV0ZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFNhdmVkVG9GaWxlU3lzdGVtIHtcclxuXHJcbiAgICBwcml2YXRlIHNhdmVJbnRlcnZhbDogYW55O1xyXG4gICAgcHJpdmF0ZSBzaXRlOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmVEZXRlY3Rpb25TZXJ2aWNlOiBGaXJlRGV0ZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblNlcnZpY2UsIHByaXZhdGUgb2ZmbGluZVNlcnZpY2U6IE9mZmxpbmVTZXJ2aWNlLCBwcml2YXRlIGNjczogQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyByZXNldCBnbG9iYWwgbmFycmF0aXZlXHJcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG5cclxuICAgICAgICBPYnNlcnZhYmxlLmZvcmtKb2luKFtdKS5zdWJzY3JpYmUodCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZURldGVjdGlvbkRhdGEoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyBhdXRvbWF0aWMtZmlyZS1kZXRlY3Rpb24gdG8gc2F2ZSBmb3IgcmZzIHBhcmVudDpcIiwgc2l0ZS5SRlNfUEFSRU5UX0lELCBcImFuZCByZnM6XCIsIHNpdGUuUkZTX0lEKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YVRvRmlsZShuZXcgRXZlbnQoc2l0ZS5SRlNfUEFSRU5UX0lELCBzaXRlLlJGU19JRCwgJ3NhdmUnKSk7XHJcbiAgICAgICAgfSwgMzAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNhdmVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2F2ZUludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YVRvRmlsZShuZXcgRXZlbnQodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZSBpbnRlcnZhbCBjbGVhcmVkIGFuZCBkYXRhIHNhdmVkIGZvciBhdXRvbWF0aWMtZmlyZS1kZXRlY3Rpb24uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVEZXRlY3Rpb25EYXRhKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzYXZlRGF0YVRvRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5nZXRUeXBlKCkgPT0gJ3NhdmUnICYmIGV2ZW50LmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQgJiYgZXZlbnQuZ2V0UmZzSWQoKSA9PSByZnNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jRGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY0RhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50Lk9jY3VwYW5jeUhhemFyZC5IYXphcmRMaXN0ID0gdGhpcy5oYXphcmRzU3VtbWFyeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ2F1dG9tYXRpYy1maXJlLWRldGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YU1vZGVsLnNldFJhd0RhdGEobG9jRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS53cml0ZUxvY2F0aW9uRGF0YShsb2NhdGlvbkRhdGFNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
