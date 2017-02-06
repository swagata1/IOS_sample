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
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var ipcSenderService_1 = require('./../shared/ipcSenderService');
var localStorageService_1 = require('../shared/localStorageService');
var event_model_1 = require('../shared/model/event.model');
var offline_service_1 = require('../shared/services/offline.service');
var configuration_1 = require('../shared/configuration');
var BroadcastComponent = (function () {
    function BroadcastComponent(ccs, ipcSS, localStorageService, offlineService) {
        this.ccs = ccs;
        this.ipcSS = ipcSS;
        this.localStorageService = localStorageService;
        this.offlineService = offlineService;
        this.upstreamDirName = 'upstream';
    }
    BroadcastComponent.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting all active components to trigger auto-save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.ccs.setEvent(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
        this.ccs.getSaveToFileObj().subscribe(function (locationDataModel) {
            _this.offlineService.writeLocationData(locationDataModel);
        });
    };
    BroadcastComponent.prototype.writeToFile = function (locationDataModel) {
        var rfsDirName = locationDataModel.getRfsParentId() + '-' + locationDataModel.getRfsId();
        var upstreamDirPath = '/' + rfsDirName + '/' + this.upstreamDirName;
        var ipcOperation = {
            "doAction": "saveData",
            "data": locationDataModel.getRawData(),
            "contentType": 'json',
            "dirRelativePath": upstreamDirPath,
            "fileName": "/location-assessment.json"
        };
        console.log("Requesting file system to save data for rfs parent:", locationDataModel.getRfsParentId(), "and rfs:", locationDataModel.getRfsId(), "source:", locationDataModel.getSourceName());
        this.ipcSS.ipcAsyncSend(ipcOperation);
    };
    BroadcastComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'broadcast-interval',
            template: '',
            providers: [ipcSenderService_1.ipcSenderService, localStorageService_1.LocalStorageService, configuration_1.Configuration]
        }), 
        __metadata('design:paramtypes', [componentCommunicationService_1.ComponentCommunicationService, ipcSenderService_1.ipcSenderService, localStorageService_1.LocalStorageService, offline_service_1.OfflineService])
    ], BroadcastComponent);
    return BroadcastComponent;
}());
exports.BroadcastComponent = BroadcastComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icm9hZGNhc3QvYnJvYWRjYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDhDQUE4Qyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3hGLGlDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLG9DQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3BFLDRCQUFzQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3BELGdDQUErQixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3BFLDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBU3hEO0lBRUksNEJBQW9CLEdBQWtDLEVBQVUsS0FBdUIsRUFBVSxtQkFBd0MsRUFBVSxjQUE4QjtRQUE3SixRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUR6SyxvQkFBZSxHQUFXLFVBQVUsQ0FBQztJQUU3QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBdUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEksS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxpQkFBaUI7WUFDbkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxpQkFBaUI7UUFDekIsSUFBSSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pGLElBQUksZUFBZSxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFcEUsSUFBSSxZQUFZLEdBQUc7WUFDZixVQUFVLEVBQUUsVUFBVTtZQUN0QixNQUFNLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxFQUFFO1lBQ3RDLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGlCQUFpQixFQUFFLGVBQWU7WUFDbEMsVUFBVSxFQUFFLDJCQUEyQjtTQUMxQyxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsRUFBRSxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDL0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXZDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxDQUFDLG1DQUFnQixFQUFFLHlDQUFtQixFQUFFLDZCQUFhLENBQUM7U0FDcEUsQ0FBQzs7MEJBQUE7SUFtQ0YseUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLDBCQUFrQixxQkFpQzlCLENBQUEiLCJmaWxlIjoiYXBwL2Jyb2FkY2FzdC9icm9hZGNhc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpcGNTZW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvaXBjU2VuZGVyU2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL2V2ZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgT2ZmbGluZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYnJvYWRjYXN0LWludGVydmFsJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW2lwY1NlbmRlclNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIENvbmZpZ3VyYXRpb25dXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnJvYWRjYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgdXBzdHJlYW1EaXJOYW1lOiBzdHJpbmcgPSAndXBzdHJlYW0nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGlwY1NTOiBpcGNTZW5kZXJTZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgb2ZmbGluZVNlcnZpY2U6IE9mZmxpbmVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgYWxsIGFjdGl2ZSBjb21wb25lbnRzIHRvIHRyaWdnZXIgYXV0by1zYXZlIGZvciByZnMgcGFyZW50OlwiLCBzaXRlLlJGU19QQVJFTlRfSUQsIFwiYW5kIHJmczpcIiwgc2l0ZS5SRlNfSUQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jY3Muc2V0RXZlbnQobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgIH0sIDMwMDAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jY3MuZ2V0U2F2ZVRvRmlsZU9iaigpLnN1YnNjcmliZShsb2NhdGlvbkRhdGFNb2RlbCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2Uud3JpdGVMb2NhdGlvbkRhdGEobG9jYXRpb25EYXRhTW9kZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVUb0ZpbGUobG9jYXRpb25EYXRhTW9kZWwpIHtcclxuICAgICAgICBsZXQgcmZzRGlyTmFtZSA9IGxvY2F0aW9uRGF0YU1vZGVsLmdldFJmc1BhcmVudElkKCkgKyAnLScgKyBsb2NhdGlvbkRhdGFNb2RlbC5nZXRSZnNJZCgpO1xyXG4gICAgICAgIGxldCB1cHN0cmVhbURpclBhdGggPSAnLycgKyByZnNEaXJOYW1lICsgJy8nICsgdGhpcy51cHN0cmVhbURpck5hbWU7XHJcblxyXG4gICAgICAgIGxldCBpcGNPcGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIFwiZG9BY3Rpb25cIjogXCJzYXZlRGF0YVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogbG9jYXRpb25EYXRhTW9kZWwuZ2V0UmF3RGF0YSgpLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6ICdqc29uJyxcclxuICAgICAgICAgICAgXCJkaXJSZWxhdGl2ZVBhdGhcIjogdXBzdHJlYW1EaXJQYXRoLCAvLyB3aGVuIG5lZWRlZCBwYXNzIHZhbHVlIHdpdGggcHJlY2VkaW5nIGZvcndhcmQgc2xhc2hcclxuICAgICAgICAgICAgXCJmaWxlTmFtZVwiOiBcIi9sb2NhdGlvbi1hc3Nlc3NtZW50Lmpzb25cIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyBmaWxlIHN5c3RlbSB0byBzYXZlIGRhdGEgZm9yIHJmcyBwYXJlbnQ6XCIsIGxvY2F0aW9uRGF0YU1vZGVsLmdldFJmc1BhcmVudElkKCksIFwiYW5kIHJmczpcIiwgbG9jYXRpb25EYXRhTW9kZWwuZ2V0UmZzSWQoKSwgXCJzb3VyY2U6XCIsIGxvY2F0aW9uRGF0YU1vZGVsLmdldFNvdXJjZU5hbWUoKSk7XHJcbiAgICAgICAgdGhpcy5pcGNTUy5pcGNBc3luY1NlbmQoaXBjT3BlcmF0aW9uKTtcclxuICAgIH1cclxufSJdfQ==
