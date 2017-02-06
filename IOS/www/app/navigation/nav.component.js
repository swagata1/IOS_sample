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
var nav_service_1 = require('./nav.service');
var ipcSenderService_1 = require('./../shared/ipcSenderService');
var offline_service_1 = require('./../shared/services/offline.service');
var common_service_1 = require('../shared/services/common.service');
var NavComponent = (function () {
    function NavComponent(router, localStorageService, ccs, navService, ipcSS, configuration, offlineService, commonService) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.navService = navService;
        this.ipcSS = ipcSS;
        this.configuration = configuration;
        this.offlineService = offlineService;
        this.commonService = commonService;
        this.account = new core_1.EventEmitter();
        this.navKind = "menu-left";
        this.navPanelClose = true;
        this.showFileOrComment = 0;
        this.router = router;
        this.ccs = ccs;
        this.navService = navService;
    }
    NavComponent.prototype.checkIfOnline = function () {
        return this.offlineService.onlineWithGrasp();
    };
    NavComponent.prototype.navigateToDashboard = function () {
        this.name = null;
        this.router.navigate(['/dashboard']);
        this.showFileOrComment = 0;
    };
    NavComponent.prototype.nameSet = function (name, url) {
        this.name = name;
        if (url) {
            this.currState = url;
            this.localStorageService.set('currState', this.currState);
            this.navigate(url);
        }
    };
    NavComponent.prototype.navigate = function (url) {
        this.localStorageService.set("isDownloaded", this.isDownloaded);
        this.router.navigate(['/' + url]);
    };
    NavComponent.prototype.selectAccount = function (acc) {
        this.localStorageService.set('locationData', acc);
        this.getLocaltionData = this.localStorageService.get('locationData');
        this.currentSelectedSite = this.getLocaltionData.LOCATION_GROUP_NM;
        this.account.emit(acc);
        if (this.getLocaltionData && this.getLocaltionData.downloadIndicator == 'F') {
            this.navigate('detailspage');
        }
    };
    NavComponent.prototype.toggleNavPanel = function () {
        this.navPanelClose = !this.navPanelClose;
    };
    NavComponent.prototype.toggleFileUpload = function () {
        if (this.showFileOrComment != -1) {
            this.showFileOrComment = -1;
        }
        else {
            this.showFileOrComment = 0;
        }
    };
    NavComponent.prototype.toggleComments = function () {
        if (this.showFileOrComment != 1) {
            this.showFileOrComment = 1;
        }
        else {
            this.showFileOrComment = 0;
        }
    };
    NavComponent.prototype.pageDisplay = function (page) {
        if (page == "upload")
            this.router.navigate(['/uploadSurvey']);
    };
    NavComponent.prototype.narrativeChange = function (value) {
        this.commonService.globalNarrative = value.changingThisBreaksApplicationSecurity;
    };
    NavComponent.prototype.stateChange = function (state) {
        this.showFileOrComment = 0;
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildVersion = this.configuration.buildVersion;
        this.ccs.getSelectedAcc().subscribe(function (selectedSite) {
            _this.selectedSite = selectedSite;
            _this.isDownloaded = selectedSite.downloadIndicator == 'F' ? false : true;
            _this.currentSelectedSite = _this.selectedSite.LOCATION_GROUP_NM;
            _this.currState = _this.localStorageService.get('currState');
        });
        this.ccs.getLogged().subscribe(function (comm) {
            _this.currState = comm.currentState;
            _this.isDownloaded = comm.isDownloaded;
        });
        this.ccs.getObject().subscribe(function (myworklist) {
            _this.myWorkList = myworklist;
        });
        this.ipcOperation1 = {
            "doAction": "isFileExist",
            'dirRelativePath': '',
            'fileName': "/user-profile.json"
        };
        var availableInFileSys = this.ipcSS.ipcSyncSend(this.ipcOperation1);
        console.log(availableInFileSys);
        this.navService.getUserProfile(availableInFileSys).subscribe(function (userData) {
            _this.userName = userData.SvcUserProfileResPg.FULL_NM;
            _this.ipcOperation = {
                "doAction": "saveData",
                "data": userData,
                "contentType": 'json',
                "dirRelativePath": '',
                "fileName": "/user-profile.json"
            };
            _this.ipcSS.ipcAsyncSend(_this.ipcOperation);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "account", void 0);
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-nav',
            templateUrl: 'nav.component.html',
            providers: [configuration_1.Configuration, localStorageService_1.LocalStorageService, nav_service_1.NavService, ipcSenderService_1.ipcSenderService],
            inputs: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, nav_service_1.NavService, ipcSenderService_1.ipcSenderService, configuration_1.Configuration, offline_service_1.OfflineService, common_service_1.CommonService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQUN4Riw0QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsaUNBQWlDLDhCQUE4QixDQUFDLENBQUE7QUFDaEUsZ0NBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFVbEU7SUFtQkksc0JBQW9CLE1BQWMsRUFBVSxtQkFBd0MsRUFBVSxHQUFrQyxFQUFVLFVBQXFCLEVBQVUsS0FBc0IsRUFBVSxhQUEyQixFQUFVLGNBQThCLEVBQVUsYUFBMkI7UUFBN1IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFsQnZTLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUV4QyxZQUFPLEdBQVksV0FBVyxDQUFDO1FBSS9CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQVlqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lB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LyoqXHJcbiAqIENyZWF0ZWQgYnkgcHlhZGF2IG9uIDkvMjUvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2U2VydmljZSB9IGZyb20gJy4vbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpcGNTZW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvaXBjU2VuZGVyU2VydmljZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2F4aXMtbmF2JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVycyA6IFtDb25maWd1cmF0aW9uLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBOYXZTZXJ2aWNlLCBpcGNTZW5kZXJTZXJ2aWNlXSxcclxuICAgIGlucHV0czpbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBPdXRwdXQoKSBhY2NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgICBuYW1lIDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hdktpbmQ6IHN0cmluZyAgPSBcIm1lbnUtbGVmdFwiO1xyXG4gICAgcHVibGljIGN1cnJTdGF0ZTogc3RyaW5nOyBcclxuICAgIHB1YmxpYyBpc0Rvd25sb2FkZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbXlXb3JrTGlzdDpPYmplY3Q7XHJcbiAgICBwdWJsaWMgbmF2UGFuZWxDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2hvd0ZpbGVPckNvbW1lbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0TG9jYWx0aW9uRGF0YTogYW55O1xyXG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZFNpdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZWxlY3RlZFNpdGU6IE9iamVjdDtcclxuICAgIHB1YmxpYyB0eHQ6c3RyaW5nO1xyXG4gICAgdXNlck5hbWU6YW55O1xyXG4gICAgaXBjT3BlcmF0aW9uOiBhbnk7XHJcbiAgICBpcGNPcGVyYXRpb24xOiBhbnk7XHJcbiAgICBidWlsZFZlcnNpb246IGFueTtcclxuICAgIHByaXZhdGUgdmlld01ldGFEYXRhOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNjczogQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgbmF2U2VydmljZTpOYXZTZXJ2aWNlLCBwcml2YXRlIGlwY1NTOmlwY1NlbmRlclNlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbjpDb25maWd1cmF0aW9uLCBwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuY2NzID0gY2NzO1xyXG4gICAgICAgIHRoaXMubmF2U2VydmljZSA9IG5hdlNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZk9ubGluZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZmxpbmVTZXJ2aWNlLm9ubGluZVdpdGhHcmFzcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlVG9EYXNoYm9hcmQoKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICB0aGlzLnNob3dGaWxlT3JDb21tZW50ID0gMDtcclxuICAgIH1cclxuICAgIG5hbWVTZXQobmFtZSwgdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaWYodXJsKXsgXHJcbiAgICAgICAgICAgIHRoaXMuY3VyclN0YXRlID0gdXJsO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdjdXJyU3RhdGUnLCB0aGlzLmN1cnJTdGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUodXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0ZSh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcImlzRG93bmxvYWRlZFwiLCB0aGlzLmlzRG93bmxvYWRlZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJyt1cmxdKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEFjY291bnQoYWNjIDogT2JqZWN0KXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhdGlvbkRhdGEnLCBhY2MpO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYWx0aW9uRGF0YSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkU2l0ZSA9ICB0aGlzLmdldExvY2FsdGlvbkRhdGEuTE9DQVRJT05fR1JPVVBfTk07XHJcbiAgICAgICAgdGhpcy5hY2NvdW50LmVtaXQoYWNjKTtcclxuICAgICAgICBpZih0aGlzLmdldExvY2FsdGlvbkRhdGEgJiYgdGhpcy5nZXRMb2NhbHRpb25EYXRhLmRvd25sb2FkSW5kaWNhdG9yID09ICdGJyl7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoJ2RldGFpbHNwYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5hdlBhbmVsKCl7XHJcbiAgICAgICAgdGhpcy5uYXZQYW5lbENsb3NlID0gIXRoaXMubmF2UGFuZWxDbG9zZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGaWxlVXBsb2FkKCl7ICBcclxuICAgICAgICBpZih0aGlzLnNob3dGaWxlT3JDb21tZW50ICE9IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmlsZU9yQ29tbWVudCA9IC0xO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmlsZU9yQ29tbWVudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbW1lbnRzKCl7IFxyXG4gICAgICAgIGlmKHRoaXMuc2hvd0ZpbGVPckNvbW1lbnQgIT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZpbGVPckNvbW1lbnQgPSAxO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmlsZU9yQ29tbWVudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VEaXNwbGF5KHBhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYocGFnZSA9PSBcInVwbG9hZFwiKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91cGxvYWRTdXJ2ZXknXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmFycmF0aXZlQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2xvYmFsTmFycmF0aXZlID0gdmFsdWUuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUNoYW5nZShzdGF0ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2hvd0ZpbGVPckNvbW1lbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5idWlsZFZlcnNpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYnVpbGRWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuY2NzLmdldFNlbGVjdGVkQWNjKCkuc3Vic2NyaWJlKHNlbGVjdGVkU2l0ZT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2l0ZSA9IHNlbGVjdGVkU2l0ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0Rvd25sb2FkZWQgPSBzZWxlY3RlZFNpdGUuZG93bmxvYWRJbmRpY2F0b3IgPT0gJ0YnPyBmYWxzZTp0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZFNpdGUgPSB0aGlzLnNlbGVjdGVkU2l0ZS5MT0NBVElPTl9HUk9VUF9OTTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyU3RhdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdjdXJyU3RhdGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNjcy5nZXRMb2dnZWQoKS5zdWJzY3JpYmUoY29tbT0+e1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJTdGF0ZSA9IGNvbW0uY3VycmVudFN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRG93bmxvYWRlZCA9IGNvbW0uaXNEb3dubG9hZGVkOyAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jY3MuZ2V0T2JqZWN0KCkuc3Vic2NyaWJlKG15d29ya2xpc3Q9PntcclxuICAgICAgICAgICAgdGhpcy5teVdvcmtMaXN0ID0gbXl3b3JrbGlzdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jY3MuZ2V0UklUeXBlc0RhdGEoKS5zdWJzY3JpYmUodmlld01ldGFEYXRhPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmlld01ldGFEYXRhID0gdmlld01ldGFEYXRhO1xyXG4gICAgICAgIC8vIH0pOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuaXBjT3BlcmF0aW9uMSA9IHtcclxuICAgICAgICBcImRvQWN0aW9uXCIgOlwiaXNGaWxlRXhpc3RcIixcclxuICAgICAgICAnZGlyUmVsYXRpdmVQYXRoJzogJycsXHJcbiAgICAgICAgJ2ZpbGVOYW1lJzogXCIvdXNlci1wcm9maWxlLmpzb25cIlxyXG4gICAgICB9XHJcbiAgICAgICBsZXQgYXZhaWxhYmxlSW5GaWxlU3lzID0gdGhpcy5pcGNTUy5pcGNTeW5jU2VuZCh0aGlzLmlwY09wZXJhdGlvbjEpO1xyXG4gICAgICAgY29uc29sZS5sb2coYXZhaWxhYmxlSW5GaWxlU3lzKTtcclxuICAgICAgICB0aGlzLm5hdlNlcnZpY2UuZ2V0VXNlclByb2ZpbGUoYXZhaWxhYmxlSW5GaWxlU3lzKS5zdWJzY3JpYmUodXNlckRhdGE9PntcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJEYXRhLlN2Y1VzZXJQcm9maWxlUmVzUGcuRlVMTF9OTTtcclxuICAgICAgICAgICAgdGhpcy5pcGNPcGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBcImRvQWN0aW9uXCI6IFwic2F2ZURhdGFcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgXCJkaXJSZWxhdGl2ZVBhdGhcIjogJycsIC8vIHdoZW4gbmVlZGVkIHBhc3MgdmFsdWUgd2l0aCBwcmVjZWRpbmcgZm9yd2FyZCBzbGFzaFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlTmFtZVwiOiBcIi91c2VyLXByb2ZpbGUuanNvblwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaXBjU1MuaXBjQXN5bmNTZW5kKHRoaXMuaXBjT3BlcmF0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19
