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
var time_comments_service_1 = require('./time-comments.service');
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var validationMessages_1 = require('../shared/validationMessages');
var common_service_1 = require('../shared/services/common.service');
var rfs_report_data_model_1 = require('../shared/model/rfs-report-data.model');
var offline_service_1 = require('../shared/services/offline.service');
var event_model_1 = require('../shared/model/event.model');
var TimeAndCommentsComponent = (function () {
    function TimeAndCommentsComponent(timeAndCommentsService, localStorageService, ccs, _validationMessagesService, commonService, offlineService) {
        this.timeAndCommentsService = timeAndCommentsService;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this._validationMessagesService = _validationMessagesService;
        this.commonService = commonService;
        this.offlineService = offlineService;
        this._validationMessagesService = _validationMessagesService;
        this.color = "white";
        this.currentYear = new Date().getUTCFullYear();
        this.commonService = commonService;
    }
    TimeAndCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewType = "small";
        this.commonService.globalNarrative = '';
        this.site = this.localStorageService.get('locationData');
        this.comm = { currentState: 'time-comments', isDownloaded: this.site.downloadIndicator == 'F' ? false : true };
        this.ccs.setLogged(this.comm);
        this.validationMessagesObject = this._validationMessagesService.getMessages('error');
        this.getTimeCommmentsDetails();
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting construction to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    TimeAndCommentsComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            var site = this.localStorageService.get('locationData');
            this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for construction.");
        }
    };
    TimeAndCommentsComponent.prototype.getTimeCommmentsDetails = function () {
        var _this = this;
        this.offlineService.readRfsReportData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (rfsReportData) {
            if (!rfsReportData.RFSWorkPage) {
                _this.timeCommentsData = {
                    "OnsiteHoursFA": "",
                    "ReportWriteHoursFA": "",
                    "TravelHoursFA": "",
                    "OtherHoursFA": "",
                    "TimeToCompleteFA": "",
                    "TotalRFSCost": ""
                };
            }
            else {
                _this.timeCommentsData = rfsReportData.RFSWorkPage;
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done loading data'); });
    };
    TimeAndCommentsComponent.prototype.updateTotalHours = function () {
        if (this.timeCommentsData.OnsiteHoursFA == null && this.timeCommentsData.ReportWriteHoursFA == null && this.timeCommentsData.TravelHoursFA == null && this.timeCommentsData.OtherHoursFA == null) {
            this.timeCommentsData.TimeToCompleteFA = "";
            return;
        }
        if (this.timeCommentsData.OnsiteHoursFA == null)
            this.timeCommentsData.OnsiteHoursFA = 0;
        if (this.timeCommentsData.ReportWriteHoursFA == null)
            this.timeCommentsData.ReportWriteHoursFA = 0;
        if (this.timeCommentsData.TravelHoursFA == null)
            this.timeCommentsData.TravelHoursFA = 0;
        if (this.timeCommentsData.OtherHoursFA == null)
            this.timeCommentsData.OtherHoursFA = 0;
        this.timeCommentsData.TimeToCompleteFA =
            parseInt(this.timeCommentsData.OnsiteHoursFA) +
                parseInt(this.timeCommentsData.ReportWriteHoursFA) +
                parseInt(this.timeCommentsData.TravelHoursFA) +
                parseInt(this.timeCommentsData.OtherHoursFA);
    };
    TimeAndCommentsComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readRfsReportData(rfsParentId, rfsId).subscribe(function (rfsReportData) {
                var rfsRepData = rfsReportData;
                console.log('hello time-comments', _this.commonService.globalNarrative);
                var rfsReportDataModel = new rfs_report_data_model_1.RfsReportDataModel(rfsParentId, rfsId, 'time-comments');
                rfsReportDataModel.setRawData(rfsRepData);
                _this.offlineService.writeRfsReportData(rfsReportDataModel);
            });
        }
    };
    TimeAndCommentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'time-comments',
            templateUrl: 'time-comments.component.html',
            providers: [time_comments_service_1.TimeAndCommentsService, configuration_1.Configuration, localStorageService_1.LocalStorageService, validationMessages_1.ValidationMessages],
        }), 
        __metadata('design:paramtypes', [time_comments_service_1.TimeAndCommentsService, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, validationMessages_1.ValidationMessages, common_service_1.CommonService, offline_service_1.OfflineService])
    ], TimeAndCommentsComponent);
    return TimeAndCommentsComponent;
}());
exports.TimeAndCommentsComponent = TimeAndCommentsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90aW1lLWNvbW1lbnRzL3RpbWUtY29tbWVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFFN0Qsc0NBQXVDLHlCQUF5QixDQUFDLENBQUE7QUFDakUsOEJBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsb0NBQW9DLCtCQUErQixDQUFDLENBQUE7QUFDcEUsOENBQThDLHlDQUF5QyxDQUFDLENBQUE7QUFHeEYsbUNBQW1DLDhCQUE4QixDQUFDLENBQUE7QUFDbEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFFbEUsc0NBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFFM0UsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFDcEUsNEJBQXNCLDZCQUE2QixDQUFDLENBQUE7QUFTcEQ7SUFnQkksa0NBQW9CLHNCQUE4QyxFQUFVLG1CQUF3QyxFQUFTLEdBQWtDLEVBQVMsMEJBQThDLEVBQVUsYUFBNEIsRUFBVSxjQUE4QjtRQUFoUiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQStCO1FBQVMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFvQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2hTLElBQUksQ0FBQywwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFP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QztBQUFELENBNUlBLEFBNElDLElBQUE7QUE1SVksZ0NBQXdCLDJCQTRJcEMsQ0FBQSIsImZpbGUiOiJhcHAvdGltZS1jb21tZW50cy90aW1lLWNvbW1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRpbWVBbmRDb21tZW50c1NlcnZpY2UgfSBmcm9tICcuL3RpbWUtY29tbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGUgfSBmcm9tICcuLi9zaGFyZWQvY29tcENvbW1JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb25NZXNzYWdlcyc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkRhdGFNb2RlbCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9sb2NhdGlvbi1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgUmZzUmVwb3J0RGF0YU1vZGVsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3Jmcy1yZXBvcnQtZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZS9zYXZlZC10by1mcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9vZmZsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3RpbWUtY29tbWVudHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0aW1lLWNvbW1lbnRzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1RpbWVBbmRDb21tZW50c1NlcnZpY2UsIENvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2UsIFZhbGlkYXRpb25NZXNzYWdlc10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUFuZENvbW1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFNhdmVkVG9GaWxlU3lzdGVte1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHZpZXdUeXBlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHZpZXdNZXRhRGF0YTogT2JqZWN0OyAgICBcclxuICAgIHByaXZhdGUgc2F2ZUludGVydmFsOiBhbnk7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzT2JqZWN0OiB7fTtcclxuICAgIGN1cnJlbnRZZWFyOiBhbnk7XHJcbiAgICBzaXRlOiBhbnk7XHJcbiAgICBcclxuICAgIHRpbWVDb21tZW50c0RhdGE6IGFueTtcclxuICAgIHRvdGFsSG91cnM6IG51bWJlcjtcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgY29tbTogQ29tbXVuaWNhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lQW5kQ29tbWVudHNTZXJ2aWNlOiBUaW1lQW5kQ29tbWVudHNTZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHB1YmxpYyBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwdWJsaWMgX3ZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2U6IFZhbGlkYXRpb25NZXNzYWdlcywgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLCBwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2UgPSBfdmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlID0gY29tbW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gXCJzbWFsbFwiO1xyXG4gICAgICAgIHRoaXMuY29tbW9uU2VydmljZS5nbG9iYWxOYXJyYXRpdmUgPSAnJztcclxuICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgdGhpcy5jb21tID0geyBjdXJyZW50U3RhdGU6ICd0aW1lLWNvbW1lbnRzJywgaXNEb3dubG9hZGVkOiB0aGlzLnNpdGUuZG93bmxvYWRJbmRpY2F0b3IgPT0gJ0YnID8gZmFsc2UgOiB0cnVlIH07XHJcbiAgICAgICAgdGhpcy5jY3Muc2V0TG9nZ2VkKHRoaXMuY29tbSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzT2JqZWN0ID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZS5nZXRNZXNzYWdlcygnZXJyb3InKTsgLy8gZmV0Y2hpbmcgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbGlkYXRpb24gbWVzc2FnZXMgZnJvbSB2YWxpZGF0aW9uU2VydmljZVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRUaW1lQ29tbW1lbnRzRGV0YWlscygpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNhdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIGNvbnN0cnVjdGlvbiB0byBzYXZlIGZvciByZnMgcGFyZW50OlwiLCBzaXRlLlJGU19QQVJFTlRfSUQsIFwiYW5kIHJmczpcIiwgc2l0ZS5SRlNfSUQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YVRvRmlsZShuZXcgRXZlbnQoc2l0ZS5SRlNfUEFSRU5UX0lELCBzaXRlLlJGU19JRCwgJ3NhdmUnKSk7XHJcbiAgICAgICAgfSwgMzAwMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNhdmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZSBpbnRlcnZhbCBjbGVhcmVkIGFuZCBkYXRhIHNhdmVkIGZvciBjb25zdHJ1Y3Rpb24uYCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBnZXRUaW1lQ29tbW1lbnRzRGV0YWlscygpIHtcclxuICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRSZnNSZXBvcnREYXRhKHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJmc1JlcG9ydERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXJmc1JlcG9ydERhdGEuUkZTV29ya1BhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbW1lbnRzRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT25zaXRlSG91cnNGQVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXBvcnRXcml0ZUhvdXJzRkFcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHJhdmVsSG91cnNGQVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPdGhlckhvdXJzRkFcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGltZVRvQ29tcGxldGVGQVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb3RhbFJGU0Nvc3RcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbW1lbnRzRGF0YSA9IHJmc1JlcG9ydERhdGEuUkZTV29ya1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBBdXRvIHBvcHVsYXRlIFJhdGluZ3MgVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZih0aGlzLmNvbnN0cnVjdGlvbkRhdGFbMF0uTG9jQXNzZXNzbWVudC5SYXRpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNvbnNHZXRSYXRpbmdzVmFsdWUodGhpcy5jb25zdHJ1Y3Rpb25EYXRhWzBdLkxvY0Fzc2Vzc21lbnQuUmF0aW5nUGFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZW1lRGVzRGF0YSA9IGRhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAvLyB0aGUgdGhpcmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGNvbXBsZXRpb25cclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2RvbmUgbG9hZGluZyBkYXRhJylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgdXBkYXRlVG90YWxIb3Vycygpe1xyXG4gICAgICAgIGlmKHRoaXMudGltZUNvbW1lbnRzRGF0YS5PbnNpdGVIb3Vyc0ZBID09IG51bGwgJiYgdGhpcy50aW1lQ29tbWVudHNEYXRhLlJlcG9ydFdyaXRlSG91cnNGQSA9PSBudWxsICYmIHRoaXMudGltZUNvbW1lbnRzRGF0YS5UcmF2ZWxIb3Vyc0ZBID09IG51bGwgJiYgdGhpcy50aW1lQ29tbWVudHNEYXRhLk90aGVySG91cnNGQSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ29tbWVudHNEYXRhLlRpbWVUb0NvbXBsZXRlRkEgPSBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVDb21tZW50c0RhdGEuT25zaXRlSG91cnNGQSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb21tZW50c0RhdGEuT25zaXRlSG91cnNGQSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUNvbW1lbnRzRGF0YS5SZXBvcnRXcml0ZUhvdXJzRkEgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy50aW1lQ29tbWVudHNEYXRhLlJlcG9ydFdyaXRlSG91cnNGQSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUNvbW1lbnRzRGF0YS5UcmF2ZWxIb3Vyc0ZBID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvbW1lbnRzRGF0YS5UcmF2ZWxIb3Vyc0ZBID0gMDtcclxuICAgICAgICBpZiAodGhpcy50aW1lQ29tbWVudHNEYXRhLk90aGVySG91cnNGQSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb21tZW50c0RhdGEuT3RoZXJIb3Vyc0ZBID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVDb21tZW50c0RhdGEuVGltZVRvQ29tcGxldGVGQSA9ICAgXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHRoaXMudGltZUNvbW1lbnRzRGF0YS5PbnNpdGVIb3Vyc0ZBKSArXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHRoaXMudGltZUNvbW1lbnRzRGF0YS5SZXBvcnRXcml0ZUhvdXJzRkEpICtcclxuICAgICAgICAgICAgcGFyc2VJbnQodGhpcy50aW1lQ29tbWVudHNEYXRhLlRyYXZlbEhvdXJzRkEpICtcclxuICAgICAgICAgICAgcGFyc2VJbnQodGhpcy50aW1lQ29tbWVudHNEYXRhLk90aGVySG91cnNGQSk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgc2F2ZURhdGFUb0ZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcmZzUGFyZW50SWQgPSB0aGlzLnNpdGUuUkZTX1BBUkVOVF9JRDtcclxuICAgICAgICBsZXQgcmZzSWQgPSB0aGlzLnNpdGUuUkZTX0lEO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZ2V0VHlwZSgpID09ICdzYXZlJyAmJiBldmVudC5nZXRSZnNQYXJlbnRJZCgpID09IHJmc1BhcmVudElkICYmIGV2ZW50LmdldFJmc0lkKCkgPT0gcmZzSWQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvLyAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGxvY0RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxvY0RhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLkFzc2Vzc21lbnRMb2NhdGlvbkxpc3QgPSB0aGlzLmNvbnN0cnVjdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBsb2NhdGlvbkRhdGFNb2RlbCA9IG5ldyBMb2NhdGlvbkRhdGFNb2RlbChyZnNQYXJlbnRJZCwgcmZzSWQsICdjb25zdHJ1Y3Rpb24nKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsb2NhdGlvbkRhdGFNb2RlbC5zZXRSYXdEYXRhKGxvY0RhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2Uud3JpdGVMb2NhdGlvbkRhdGEobG9jYXRpb25EYXRhTW9kZWwpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRSZnNSZXBvcnREYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmZzUmVwb3J0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJmc1JlcERhdGEgPSByZnNSZXBvcnREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJmc1JlcERhdGEuUkZTV29ya1BhZ2UuRmllbGRBY3Rpdml0eS5Db25zdHJ1Y3Rpb24uQ29uc3RydWN0aW9uQ29tbWVudHMuQ29tbWVudExpc3RzWzBdLlByaW1hcnlMYW5ndWFnZSA9IHRoaXMuY29tbW9uU2VydmljZS5nbG9iYWxOYXJyYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyB0aW1lLWNvbW1lbnRzJywgdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJmc1JlcG9ydERhdGFNb2RlbCA9IG5ldyBSZnNSZXBvcnREYXRhTW9kZWwocmZzUGFyZW50SWQsIHJmc0lkLCAndGltZS1jb21tZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZnNSZXBvcnREYXRhTW9kZWwuc2V0UmF3RGF0YShyZnNSZXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS53cml0ZVJmc1JlcG9ydERhdGEocmZzUmVwb3J0RGF0YU1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il19
