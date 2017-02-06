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
var router_1 = require('@angular/router');
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var common_service_1 = require('../shared/services/common.service');
var AppNavSubComponent = (function () {
    function AppNavSubComponent(router, localStorageService, ccs, commonService) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.commonService = commonService;
        this.navigateEvent = new core_1.EventEmitter();
        this.stateChange = new core_1.EventEmitter();
        this.router = router;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
    }
    AppNavSubComponent.prototype.nameSet = function (name, url) {
        this.name = name;
        if (url) {
            this.localStorageService.set("name", this.name);
            this.localStorageService.set("currState", url);
            this.navigate(url);
            this.currState = url;
        }
    };
    AppNavSubComponent.prototype.navigate = function (url) {
        this.localStorageService.set("locationData", this.selectedSite);
        this.navigateEvent.emit(this.selectedSite);
        this.stateChange.emit(url);
        this.router.navigate(['/' + url]);
    };
    AppNavSubComponent.prototype.ngOnInit = function () {
        this.name = this.localStorageService.get('name');
    };
    AppNavSubComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-app-nav',
            templateUrl: 'app.nav.sub.html',
            providers: [configuration_1.Configuration, localStorageService_1.LocalStorageService],
            inputs: ['currState', 'navKind', 'isDownloaded', 'selectedSite'],
            outputs: ['navigateEvent', 'stateChange'],
            styles: [
                "\n        /* replace with proper fix */\n        .tmp-right-content{\n            left: auto;\n            right: 0;\n        }\n\n        .isc-navbar-nav > li > .isc-dropdown.tmp-dd-content-right{\n            padding: 1px;\n            z-index: 1030;\n        }\n\n        .isc-navbar-nav > li > .isc-dropdown.tmp-dd-menu-left{\n            padding: 10px 15px;\n            z-index: 1030;\n        }        \n        "
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, common_service_1.CommonService])
    ], AppNavSubComponent);
    return AppNavSubComponent;
}());
exports.AppNavSubComponent = AppNavSubComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL2FwcC5uYXYuc3ViLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELG9DQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3BFLDhDQUE4Qyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3hGLCtCQUE4QixtQ0FBbUMsQ0FBQyxDQUFBO0FBOEJsRTtJQVVJLDRCQUFvQixNQUFjLEVBQVUsbUJBQXdDLEVBQVUsR0FBa0MsRUFBVSxhQUEyQjtRQUFqSixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQStCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFUOUosa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBUzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLElBQUksRUFBRSxHQUFHO1FBRWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7SUFDVCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEdBQUc7UUFFUixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWpFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUcsQ0FBQyw2QkFBYSxFQUFFLHlDQUFtQixDQUFDO1lBQ2hELE1BQU0sRUFBQyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMvRCxPQUFPLEVBQUMsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDO1lBQ3hDLE1BQU0sRUFBRTtnQkFDSixxYUFnQkM7YUFDSjtTQUNKLENBQUM7OzBCQUFBO0lBd0NGLHlCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSwwQkFBa0IscUJBc0M5QixDQUFBIiwiZmlsZSI6ImFwcC9uYXZpZ2F0aW9uL2FwcC5uYXYuc3ViLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHB5YWRhdiBvbiAxMC8wNS8xNi5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXhpcy1hcHAtbmF2JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLm5hdi5zdWIuaHRtbCcsXHJcbiAgICBwcm92aWRlcnMgOiBbQ29uZmlndXJhdGlvbiwgTG9jYWxTdG9yYWdlU2VydmljZV0sXHJcbiAgICBpbnB1dHM6WydjdXJyU3RhdGUnLCAnbmF2S2luZCcsICdpc0Rvd25sb2FkZWQnLCAnc2VsZWN0ZWRTaXRlJ10sXHJcbiAgICBvdXRwdXRzOlsnbmF2aWdhdGVFdmVudCcsICdzdGF0ZUNoYW5nZSddLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC8qIHJlcGxhY2Ugd2l0aCBwcm9wZXIgZml4ICovXHJcbiAgICAgICAgLnRtcC1yaWdodC1jb250ZW50e1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pc2MtbmF2YmFyLW5hdiA+IGxpID4gLmlzYy1kcm9wZG93bi50bXAtZGQtY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzYy1uYXZiYXItbmF2ID4gbGkgPiAuaXNjLWRyb3Bkb3duLnRtcC1kZC1tZW51LWxlZnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAzMDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTmF2U3ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgICBwdWJsaWMgc3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VyclN0YXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmF2S2luZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzRG93bmxvYWRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbkRhdGE6IGFueTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFNpdGU6IE9iamVjdDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNjczogQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY29tbW9uU2VydmljZTpDb21tb25TZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2NzID0gY2NzO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWVTZXQobmFtZSwgdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaWYodXJsKXtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcIm5hbWVcIiwgdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcImN1cnJTdGF0ZVwiLCB1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclN0YXRlID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUodXJsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJsb2NhdGlvbkRhdGFcIiwgdGhpcy5zZWxlY3RlZFNpdGUpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVFdmVudC5lbWl0KHRoaXMuc2VsZWN0ZWRTaXRlKTtcclxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQodXJsKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycrdXJsXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCduYW1lJyk7XHJcbiAgICB9XHJcbn0iXX0=
