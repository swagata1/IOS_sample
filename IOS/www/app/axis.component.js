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
var router_1 = require('@angular/router');
var componentCommunicationService_1 = require('./shared/componentCommunicationService');
var localStorageService_1 = require('./shared/localStorageService');
var AxisComponent = (function () {
    function AxisComponent(viewContainerRef, router, localStorageService, ccs) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
    }
    AxisComponent.prototype.navigateToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    AxisComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.localStorageService.allKeys(); _i < _a.length; _i++) {
            var key = _a[_i];
            this.localStorageService.removeItem(key);
        }
    };
    AxisComponent.prototype.account = function (acc) {
        this.ccs.setSelectedAcc(acc);
        this.isDownloaded = acc.downloadIndicator == 'F' ? false : true;
    };
    AxisComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-app',
            templateUrl: 'axis.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService])
    ], AxisComponent);
    return AxisComponent;
}());
exports.AxisComponent = AxisComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEscUJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBQ2xFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDLDhDQUE4Qyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3ZGLG9DQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBUW5FO0lBUUksdUJBQVksZ0JBQWtDLEVBQVMsTUFBYyxFQUFVLG1CQUF3QyxFQUFVLEdBQWtDO1FBQTVHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBK0I7UUFDL0osSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwyQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFFSSxHQUFHLENBQUMsQ0FBWSxVQUFrQyxFQUFsQyxLQUFBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBbEMsY0FBa0MsRUFBbEMsSUFBa0MsQ0FBQztZQUE5QyxJQUFJLEdBQUcsU0FBQTtZQUNSLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwRSxDQUFDO0lBaENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7O3FCQUFBO0lBNEJGLG9CQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxxQkFBYSxnQkEyQnpCLENBQUEiLCJmaWxlIjoiYXBwL2F4aXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW5haXIgb24gOS8xNy8xNi5cclxuICovXHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge05hdkNvbXBvbmVudH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXhpcy1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdheGlzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAgIGN1cnJlbnRTdGF0ZTogYW55O1xyXG4gICAgaXNEb3dubG9hZGVkOiBib29sZWFuO1xyXG4gICAgbXlXb3JrTGlzdDogT2JqZWN0O1xyXG4gICAgc2VsZWN0ZWRTaXRlOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHByaXZhdGUgY2NzOiBDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0ZVRvRGFzaGJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBjbGVhciBsb2NhbCBzdG9yYWdlLCB0aGlzIHdpbGwgaGF2ZSB0byBiZSBtb3ZlZCB0byBHcmFzcEFwcCBjb21wb25lbmV0IGluIGZ1dHVyZS5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmFsbEtleXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY2NvdW50KGFjYzogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jY3Muc2V0U2VsZWN0ZWRBY2MoYWNjKTtcclxuICAgICAgICB0aGlzLmlzRG93bmxvYWRlZCA9IGFjYy5kb3dubG9hZEluZGljYXRvciA9PSAnRicgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19
