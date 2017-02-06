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
var localStorageService_1 = require('../../../../../shared/localStorageService');
var HydraulicFluidSystemsComponent = (function () {
    function HydraulicFluidSystemsComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.valueChange = new core_1.EventEmitter();
    }
    HydraulicFluidSystemsComponent.prototype.ngOnInit = function () {
        this.site = this.localStorageService.get('locationData');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HydraulicFluidSystemsComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HydraulicFluidSystemsComponent.prototype, "valueChange", void 0);
    HydraulicFluidSystemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hydraulic-fluid-systems',
            templateUrl: 'hydraulic-fluid-systems.component.html',
            providers: [localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService])
    ], HydraulicFluidSystemsComponent);
    return HydraulicFluidSystemsComponent;
}());
exports.HydraulicFluidSystemsComponent = HydraulicFluidSystemsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2h5ZHJhdWxpYy1mbHVpZC1zeXN0ZW1zL2h5ZHJhdWxpYy1mbHVpZC1zeXN0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1FLGVBQWUsQ0FBQyxDQUFBO0FBQ25GLG9DQUFtRSwyQ0FBMkMsQ0FBQyxDQUFBO0FBUy9HO0lBTUUsd0NBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRTFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVhEO1FBQUMsWUFBSyxFQUFFOztpRUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt1RUFBQTtJQVhYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMseUNBQW1CLENBQUM7U0FDakMsQ0FBQzs7c0NBQUE7SUFpQkYscUNBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHNDQUE4QixpQ0FlMUMsQ0FBQSIsImZpbGUiOiJhcHAvaGF6YXJkcy9uZXctaGF6YXJkL2hhemFyZHMtYWRkL2hhemFyZC10eXBlcy9oeWRyYXVsaWMtZmx1aWQtc3lzdGVtcy9oeWRyYXVsaWMtZmx1aWQtc3lzdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdoeWRyYXVsaWMtZmx1aWQtc3lzdGVtcycsXHJcbiAgdGVtcGxhdGVVcmw6ICdoeWRyYXVsaWMtZmx1aWQtc3lzdGVtcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxTdG9yYWdlU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIeWRyYXVsaWNGbHVpZFN5c3RlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxue1xyXG4gIHByaXZhdGUgc2l0ZTphbnk7ICBcclxuICBASW5wdXQoKSBtb2RlbDphbnk7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlKVxyXG4gIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKVxyXG4gIHsgICAgXHJcbiAgICB0aGlzLnNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTsgICAgXHJcbiAgfVxyXG59XHJcbiJdfQ==
