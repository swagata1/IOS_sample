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
var BatteryRoomComponent = (function () {
    function BatteryRoomComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    BatteryRoomComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BatteryRoomComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BatteryRoomComponent.prototype, "valueChange", void 0);
    BatteryRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'battery-room',
            templateUrl: 'battery-room.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BatteryRoomComponent);
    return BatteryRoomComponent;
}());
exports.BatteryRoomComponent = BatteryRoomComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2JhdHRlcnktcm9vbS9iYXR0ZXJ5LXJvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFRbkY7SUFLRTtRQUVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELHVDQUFRLEdBQVIsY0FBVyxDQUFDO0lBUlo7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzZEQUFBO0lBVFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQzs7NEJBQUE7SUFhRiwyQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksNEJBQW9CLHVCQVdoQyxDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2JhdHRlcnktcm9vbS9iYXR0ZXJ5LXJvb20uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdiYXR0ZXJ5LXJvb20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnYmF0dGVyeS1yb29tLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhdHRlcnlSb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbnsgIFxyXG4gIEBJbnB1dCgpIG1vZGVsOmFueTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpXHJcbiAge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpe31cclxufVxyXG4iXX0=
