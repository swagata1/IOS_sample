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
var login_service_1 = require('./login.service');
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var ipcSenderService_1 = require('./../shared/ipcSenderService');
var LoginComponent = (function () {
    function LoginComponent(router, loginService, localStorageService, ccs, ipcSS) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.ipcSS = ipcSS;
        this.comm = { currentState: 'login', isDownloaded: false };
        this.navKind = "content-right";
        this.router = router;
        this.ipcSS = ipcSS;
        this.loginService = loginService;
        this.isLoading = true;
        this.environments = [
            { 'envName': 'Development' },
            { 'envName': 'QA' }
        ];
        this.loginService.getLogInDetails().subscribe(function (data) {
            _this.loginDetailsFromService = data;
        }, function (error) { console.log("error from service"); }, function () {
            _this.isLoading = false;
        });
    }
    LoginComponent.prototype.navigate = function (rowData) {
        this.localStorageService.set('currState', 'dashboard');
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.downloadedSite = function (site) {
        return site;
    };
    LoginComponent.prototype.navigateEvent = function (acc) {
        this.ccs.setSelectedAcc(acc);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.ccs.setLogged(this.comm);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-login',
            templateUrl: 'login.component.html',
            providers: [login_service_1.LoginService, configuration_1.Configuration, localStorageService_1.LocalStorageService, ipcSenderService_1.ipcSenderService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, ipcSenderService_1.ipcSenderService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQUV4RixpQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQVFoRTtJQVFFLHdCQUFvQixNQUFjLEVBQVUsWUFBMEIsRUFBVSxtQkFBd0MsRUFBUyxHQUFrQyxFQUFTLEtBQXVCO1FBUnJNLGlCQTRDQztRQXBDcUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQStCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFQM0wsU0FBSSxHQUFnQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3BFLFlBQU8sR0FBVyxlQUFlLENBQUM7UUFRdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNwQixFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUU7WUFDekIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO1NBQ3BCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FDL0MsVUFBQSxJQUFJO1lBQ0YsS0FBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUM5QztZQUNFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVILGlDQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsSUFBWTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFqREQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSw2QkFBYSxFQUFFLHlDQUFtQixFQUFFLG1DQUFnQixDQUFDO1NBQ2hGLENBQUM7O3NCQUFBO0lBNkNGLHFCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSxzQkFBYyxpQkE0QzFCLENBQUEiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFuYWlyIG9uIDkvMTcvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wQ29tbUludGVyZmFjZSc7XHJcbmltcG9ydCB7IGlwY1NlbmRlclNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9pcGNTZW5kZXJTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdheGlzLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2UsIENvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2UsIGlwY1NlbmRlclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBjb21tOiBDb21tdW5pY2F0ZSA9IHsgY3VycmVudFN0YXRlOiAnbG9naW4nLCBpc0Rvd25sb2FkZWQ6IGZhbHNlIH07XHJcbiAgcHVibGljIG5hdktpbmQ6IHN0cmluZyA9IFwiY29udGVudC1yaWdodFwiO1xyXG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHVibGljIGVudmlyb25tZW50czogYW55O1xyXG4gIHB1YmxpYyBsb2dpbkRldGFpbHNGcm9tU2VydmljZTogYW55O1xyXG4gIGlwY09wZXJhdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHB1YmxpYyBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwdWJsaWMgaXBjU1M6IGlwY1NlbmRlclNlcnZpY2UpIHtcclxuICAgIC8vICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoJ2VsZWN0cm9uLXN0b3JhZ2UnKTsgXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMuaXBjU1MgPSBpcGNTUztcclxuICAgIHRoaXMubG9naW5TZXJ2aWNlID0gbG9naW5TZXJ2aWNlO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBbXHJcbiAgICB7J2Vudk5hbWUnOiAnRGV2ZWxvcG1lbnQnIH0sXHJcbiAgICAgIHsgJ2Vudk5hbWUnOiAnUUEnIH1cclxuICAgIF07XHJcbiAgICB0aGlzLmxvZ2luU2VydmljZS5nZXRMb2dJbkRldGFpbHMoKS5zdWJzY3JpYmUoXHJcbiAgZGF0YSA9PiB7XHJcbiAgICB0aGlzLmxvZ2luRGV0YWlsc0Zyb21TZXJ2aWNlID0gZGF0YTtcclxuICB9LFxyXG4gIGVycm9yID0+IHsgY29uc29sZS5sb2coXCJlcnJvciBmcm9tIHNlcnZpY2VcIikgfSxcclxuICAoKSA9PiB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIH0pO1xyXG4gIH1cclxuXHJcbm5hdmlnYXRlKHJvd0RhdGEpIHtcclxuICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdjdXJyU3RhdGUnLCAnZGFzaGJvYXJkJyk7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG59XHJcblxyXG5kb3dubG9hZGVkU2l0ZShzaXRlOiBPYmplY3QpIHtcclxuICByZXR1cm4gc2l0ZTtcclxufVxyXG5cclxubmF2aWdhdGVFdmVudChhY2M6IE9iamVjdCkge1xyXG4gIHRoaXMuY2NzLnNldFNlbGVjdGVkQWNjKGFjYyk7XHJcbn1cclxuXHJcbm5nT25Jbml0KCkge1xyXG4gIHRoaXMuY2NzLnNldExvZ2dlZCh0aGlzLmNvbW0pO1xyXG59XHJcbn1cclxuIl19
