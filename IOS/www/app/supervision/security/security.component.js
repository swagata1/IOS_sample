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
var configuration_1 = require('./../../shared/configuration');
var localStorageService_1 = require('./../../shared/localStorageService');
var componentCommunicationService_1 = require('./../../shared/componentCommunicationService');
var common_service_1 = require('./../../shared/services/common.service');
var location_data_model_1 = require('./../../shared/model/location-data.model');
var offline_service_1 = require('./../../shared/services/offline.service');
var event_model_1 = require('./../../shared/model/event.model');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/forkJoin');
var security_service_1 = require('./security.service');
var SecurityComponent = (function () {
    function SecurityComponent(securityService, commonService, offlineService, ccs, localStorageService) {
        this.securityService = securityService;
        this.commonService = commonService;
        this.offlineService = offlineService;
        this.ccs = ccs;
        this.localStorageService = localStorageService;
        this.securityWatchServiceValues = [];
        this.roundFrequencyValues = [];
        this.securityRoundsValues = [];
        this.coverageValues = [];
        this.securityAlarmsValues = [];
        this.intrusionAlarmMonitoringValues = [];
        this.spStableRatings = [];
        this.spCurrentRatings = [];
        this.spPostRatings = [];
    }
    SecurityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.globalNarrative = '';
        this.site = this.localStorageService.get('locationData');
        console.log('supervision rfs parent id -- ', this.site.RFS_PARENT_ID);
        console.log('supervision rfs id -- ', this.site.RFS_ID);
        this.toggleEditSecurityCurrentRating = false;
        this.toggleEditSecurityPostRating = false;
        this.getReferenceValues();
        this.getRatings();
        this.getSecurityDataAfterMap();
        Observable_1.Observable.forkJoin([]).subscribe(function (t) {
            _this.securityData();
        });
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting security to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    SecurityComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveDataToFile(new event_model_1.Event(this.site.RFS_PARENT_ID, this.site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for security.");
        }
    };
    SecurityComponent.prototype.securityData = function () {
    };
    SecurityComponent.prototype.getSecurityDataAfterMap = function () {
        var _this = this;
        this.securityService.getSecurityData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            _this.spSecurityData = data;
            console.log('--- this.spSecurityData --- ', _this.spSecurityData);
        }, function (err) { return console.error(err); }, function () { return console.log('Supervision security data - Done loading data.'); });
    };
    SecurityComponent.prototype.getReferenceValues = function () {
        var _this = this;
        this.securityService.getOtherReference().subscribe(function (data) {
            _this.securityWatchServiceValues = data.filter(function (item) { return item.ElementName == "SECURITY_WATCH_SR"; });
            _this.roundFrequencyValues = data.filter(function (item) { return item.ElementName == "ROUNDS_FREQ"; });
            _this.securityRoundsValues = data.filter(function (item) { return item.ElementName == "SECURITY_ROUND_CD"; });
            _this.coverageValues = data.filter(function (item) { return item.ElementName == "COVERAGE"; });
            _this.securityAlarmsValues = data.filter(function (item) { return item.ElementName == "SECURITY_ALARMS"; });
            _this.intrusionAlarmMonitoringValues = data.filter(function (item) { return item.ElementName == "INTRUSION_ALARM"; });
            console.log('this.securityWatchServiceValues', _this.securityWatchServiceValues);
            console.log('this.roundFrequencyValues', _this.roundFrequencyValues);
            console.log('this.securityRoundsValues', _this.securityRoundsValues);
            console.log('this.coverageValues', _this.coverageValues);
            console.log('this.securityAlarmsValues', _this.securityAlarmsValues);
            console.log('this.intrusionAlarmMonitoringValues', _this.intrusionAlarmMonitoringValues);
        }, function (err) { return console.error(err); }, function () { return console.log('Reference values - Done loading data.'); });
    };
    SecurityComponent.prototype.getRatings = function () {
        var _this = this;
        this.securityService.getSecurityRiskRatings().subscribe(function (data) {
            _this.spStableRatings = data.filter(function (item) { return item.RatQueCategory == "Supervision"; });
            _this.spCurrentRatings = _this.spStableRatings;
            _this.spPostRatings = _this.spCurrentRatings;
        }, function (err) { return console.error(err); }, function () { return console.log("Supervision Security Ratings - Done loading data."); });
    };
    SecurityComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'security');
                locationDataModel.setRawData(locData);
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    SecurityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'security',
            templateUrl: 'security.component.html',
            providers: [security_service_1.SecurityService, configuration_1.Configuration, localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [security_service_1.SecurityService, common_service_1.CommonService, offline_service_1.OfflineService, componentCommunicationService_1.ComponentCommunicationService, localStorageService_1.LocalStorageService])
    ], SecurityComponent);
    return SecurityComponent;
}());
exports.SecurityComponent = SecurityComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9zZWN1cml0eS9zZWN1cml0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUc3RCw4QkFBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUM3RCxvQ0FBb0Msb0NBQW9DLENBQUMsQ0FBQTtBQUd6RSw4Q0FBOEMsOENBQThDLENBQUMsQ0FBQTtBQUM3RiwrQkFBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSxvQ0FBa0MsMENBQTBDLENBQUMsQ0FBQTtBQUU3RSxnQ0FBK0IseUNBQXlDLENBQUMsQ0FBQTtBQUV6RSw0QkFBc0Isa0NBQWtDLENBQUMsQ0FBQTtBQUN6RCwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLDhCQUE4QixDQUFDLENBQUE7QUFFdEMsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFTckQ7SUFpQkksMkJBQW9CLGVBQWdDLEVBQVUsYUFBMkIsRUFBVSxjQUE4QixFQUFVLEdBQWtDLEVBQVUsbUJBQXdDO1FBQTNNLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBK0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWnZOLCtCQUEwQixHQUFVLEVBQUUsQ0FBQztRQUN2Qyx5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFDakMseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVUsRUFBRSxDQUFDO1FBQzNCLHlCQUFvQixHQUFVLEVBQUUsQ0FBQztRQUNqQyxtQ0FBOEIsR0FBVSxFQUFFLENBQUM7UUFDM0Msb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO0lBTWxDLENBQUM7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S0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksV0FBVyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDOUQsVUFBQSxJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztnQkFLbkIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzlFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUEvSEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsRUFBRSw2QkFBYSxFQUFFLHlDQUFtQixDQUFDO1NBQ25FLENBQUM7O3lCQUFBO0lBMkhGLHdCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsSUFBQTtBQXpIWSx5QkFBaUIsb0JBeUg3QixDQUFBIiwiZmlsZSI6ImFwcC9zdXBlcnZpc2lvbi9zZWN1cml0eS9zZWN1cml0eS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uRGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvbG9jYXRpb24tZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlL3NhdmVkLXRvLWZzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmZzUmVwb3J0RGF0YU1vZGVsIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWwvcmZzLXJlcG9ydC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZm9ya0pvaW4nO1xyXG5cclxuaW1wb3J0IHsgU2VjdXJpdHlTZXJ2aWNlIH0gZnJvbSAnLi9zZWN1cml0eS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VjdXJpdHknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzZWN1cml0eS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtTZWN1cml0eVNlcnZpY2UsIENvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgU2F2ZWRUb0ZpbGVTeXN0ZW0ge1xyXG5cclxuICAgIHByaXZhdGUgc2F2ZUludGVydmFsOiBhbnk7XHJcbiAgICBwcml2YXRlIHNpdGU6IGFueTtcclxuICAgIHByaXZhdGUgc3BTZWN1cml0eURhdGE6IGFueTtcclxuICAgIHByaXZhdGUgc2VjdXJpdHlXYXRjaFNlcnZpY2VWYWx1ZXM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIHJvdW5kRnJlcXVlbmN5VmFsdWVzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzZWN1cml0eVJvdW5kc1ZhbHVlczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgY292ZXJhZ2VWYWx1ZXM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIHNlY3VyaXR5QWxhcm1zVmFsdWVzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBpbnRydXNpb25BbGFybU1vbml0b3JpbmdWYWx1ZXM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIHNwU3RhYmxlUmF0aW5nczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgc3BDdXJyZW50UmF0aW5nczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgc3BQb3N0UmF0aW5nczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgdG9nZ2xlRWRpdFNlY3VyaXR5Q3VycmVudFJhdGluZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdG9nZ2xlRWRpdFNlY3VyaXR5UG9zdFJhdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyaXR5U2VydmljZTogU2VjdXJpdHlTZXJ2aWNlLCBwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uU2VydmljZSwgcHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UsIHByaXZhdGUgY2NzOiBDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHJlc2V0IGdsb2JhbCBuYXJyYXRpdmVcclxuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2xvYmFsTmFycmF0aXZlID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1cGVydmlzaW9uIHJmcyBwYXJlbnQgaWQgLS0gJywgdGhpcy5zaXRlLlJGU19QQVJFTlRfSUQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBlcnZpc2lvbiByZnMgaWQgLS0gJywgdGhpcy5zaXRlLlJGU19JRCk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlRWRpdFNlY3VyaXR5Q3VycmVudFJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRWRpdFNlY3VyaXR5UG9zdFJhdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZVZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmF0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuZ2V0U2VjdXJpdHlEYXRhQWZ0ZXJNYXAoKTtcclxuXHJcbiAgICAgICAgT2JzZXJ2YWJsZS5mb3JrSm9pbihbXSkuc3Vic2NyaWJlKHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlY3VyaXR5RGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHNlY3VyaXR5IHRvIHNhdmUgZm9yIHJmcyBwYXJlbnQ6XCIsIHNpdGUuUkZTX1BBUkVOVF9JRCwgXCJhbmQgcmZzOlwiLCBzaXRlLlJGU19JRCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgIH0sIDMwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNhdmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lELCAnc2F2ZScpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNhdmUgaW50ZXJ2YWwgY2xlYXJlZCBhbmQgZGF0YSBzYXZlZCBmb3Igc2VjdXJpdHkuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlY3VyaXR5RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VjdXJpdHlEYXRhQWZ0ZXJNYXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWN1cml0eVNlcnZpY2UuZ2V0U2VjdXJpdHlEYXRhKHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNwU2VjdXJpdHlEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIHRoaXMuc3BTZWN1cml0eURhdGEgLS0tICcsIHRoaXMuc3BTZWN1cml0eURhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VwZXJ2aXNpb24gc2VjdXJpdHkgZGF0YSAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVmZXJlbmNlVmFsdWVzKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdXJpdHlTZXJ2aWNlLmdldE90aGVyUmVmZXJlbmNlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3VyaXR5V2F0Y2hTZXJ2aWNlVmFsdWVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiU0VDVVJJVFlfV0FUQ0hfU1JcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kRnJlcXVlbmN5VmFsdWVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiUk9VTkRTX0ZSRVFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3VyaXR5Um91bmRzVmFsdWVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiU0VDVVJJVFlfUk9VTkRfQ0RcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVyYWdlVmFsdWVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiQ09WRVJBR0VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3VyaXR5QWxhcm1zVmFsdWVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiU0VDVVJJVFlfQUxBUk1TXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRydXNpb25BbGFybU1vbml0b3JpbmdWYWx1ZXMgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJJTlRSVVNJT05fQUxBUk1cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5zZWN1cml0eVdhdGNoU2VydmljZVZhbHVlcycsIHRoaXMuc2VjdXJpdHlXYXRjaFNlcnZpY2VWYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMucm91bmRGcmVxdWVuY3lWYWx1ZXMnLCB0aGlzLnJvdW5kRnJlcXVlbmN5VmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlY3VyaXR5Um91bmRzVmFsdWVzJywgdGhpcy5zZWN1cml0eVJvdW5kc1ZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jb3ZlcmFnZVZhbHVlcycsIHRoaXMuY292ZXJhZ2VWYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuc2VjdXJpdHlBbGFybXNWYWx1ZXMnLCB0aGlzLnNlY3VyaXR5QWxhcm1zVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmludHJ1c2lvbkFsYXJtTW9uaXRvcmluZ1ZhbHVlcycsIHRoaXMuaW50cnVzaW9uQWxhcm1Nb25pdG9yaW5nVmFsdWVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JlZmVyZW5jZSB2YWx1ZXMgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF0aW5ncygpIHtcclxuICAgICAgICB0aGlzLnNlY3VyaXR5U2VydmljZS5nZXRTZWN1cml0eVJpc2tSYXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BTdGFibGVSYXRpbmdzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLlJhdFF1ZUNhdGVnb3J5ID09IFwiU3VwZXJ2aXNpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwQ3VycmVudFJhdGluZ3MgPSB0aGlzLnNwU3RhYmxlUmF0aW5ncztcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BQb3N0UmF0aW5ncyA9IHRoaXMuc3BDdXJyZW50UmF0aW5ncztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJTdXBlcnZpc2lvbiBTZWN1cml0eSBSYXRpbmdzIC0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YVRvRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5nZXRUeXBlKCkgPT0gJ3NhdmUnICYmIGV2ZW50LmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQgJiYgZXZlbnQuZ2V0UmZzSWQoKSA9PSByZnNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jRGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY0RhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50Lk9jY3VwYW5jeUhhemFyZC5IYXphcmRMaXN0ID0gdGhpcy5oYXphcmRzU3VtbWFyeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ3NlY3VyaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhTW9kZWwuc2V0UmF3RGF0YShsb2NEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLndyaXRlTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YU1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
