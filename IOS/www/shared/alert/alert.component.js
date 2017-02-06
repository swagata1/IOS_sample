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
var ALERT_TEMPLATE = "\n  <div class=\"isc-alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"isc-close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ";
var AlertComponent = (function () {
    function AlertComponent() {
        this.close = new core_1.EventEmitter(false);
        this.classes = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classes[0] = "isc-alert-" + this.type;
        if (this.dismissible) {
            this.classes[1] = 'isc-alert-dismissible';
        }
        else {
            this.classes.length = 1;
        }
        if (this.dismissOnTimeout) {
            setTimeout(function () { return _this.onClose(); }, this.dismissOnTimeout);
        }
    };
    AlertComponent.prototype.onClose = function () {
        this.closed = true;
        this.close.emit(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AlertComponent.prototype, "dismissible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'isc-alert',
            template: ALERT_TEMPLATE
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUUvRSxJQUFNLGNBQWMsR0FBRyxtV0FRcEIsQ0FBQztBQU9KO0lBQUE7UUFLbUIsVUFBSyxHQUFnQyxJQUFJLG1CQUFZLENBQWlCLEtBQUssQ0FBQyxDQUFDO1FBR3RGLFlBQU8sR0FBaUIsRUFBRSxDQUFDO0lBb0JyQyxDQUFDO0lBbEJRLGlDQUFRLEdBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsZUFBYSxJQUFJLENBQUMsSUFBTSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQXVCLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUdNLGdDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBMUJEO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOztpREFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7O3NCQUFBO0lBNkJGLHFCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxzQkFBYyxpQkE0QjFCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IEFMRVJUX1RFTVBMQVRFID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJpc2MtYWxlcnRcIiByb2xlPVwiYWxlcnRcIiBbbmdDbGFzc109XCJjbGFzc2VzXCIgKm5nSWY9XCIhY2xvc2VkXCI+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzbWlzc2libGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpc2MtY2xvc2VcIiAoY2xpY2spPVwib25DbG9zZSgpXCIgKHRvdWNoKT1cIm9uQ2xvc2UoKVwiPlxyXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbG9zZTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4vLyBUT0RPOiB0ZW1wbGF0ZVVybFxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lzYy1hbGVydCcsXHJcbiAgdGVtcGxhdGU6IEFMRVJUX1RFTVBMQVRFXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNtaXNzaWJsZTpib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNtaXNzT25UaW1lb3V0Om51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZTpFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oZmFsc2UpO1xyXG5cclxuICBwdWJsaWMgY2xvc2VkOmJvb2xlYW47XHJcbiAgcHJpdmF0ZSBjbGFzc2VzOkFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6YW55IHtcclxuICAgIHRoaXMuY2xhc3Nlc1swXSA9IGBpc2MtYWxlcnQtJHt0aGlzLnR5cGV9YDtcclxuICAgIGlmICh0aGlzLmRpc21pc3NpYmxlKSB7XHJcbiAgICAgIHRoaXMuY2xhc3Nlc1sxXSA9ICdpc2MtYWxlcnQtZGlzbWlzc2libGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGFzc2VzLmxlbmd0aCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGlzbWlzc09uVGltZW91dCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZSgpLCB0aGlzLmRpc21pc3NPblRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogbW91c2UgZXZlbnQgKyB0b3VjaCArIHBvaW50ZXJcclxuICBwdWJsaWMgb25DbG9zZSgpOnZvaWQge1xyXG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=
