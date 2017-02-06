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
var RackStorageComponent = (function () {
    function RackStorageComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    RackStorageComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RackStorageComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RackStorageComponent.prototype, "valueChange", void 0);
    RackStorageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rack-storage',
            templateUrl: 'rack-storage.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RackStorageComponent);
    return RackStorageComponent;
}());
exports.RackStorageComponent = RackStorageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL3JhY2stc3RvcmFnZS9yYWNrLXN0b3JhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFRbkY7SUFLRTtRQUVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELHVDQUFRLEdBQVIsY0FBYSxDQUFDO0lBUmQ7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzZEQUFBO0lBVFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQzs7NEJBQUE7SUFhRiwyQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksNEJBQW9CLHVCQVdoQyxDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL3JhY2stc3RvcmFnZS9yYWNrLXN0b3JhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyYWNrLXN0b3JhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAncmFjay1zdG9yYWdlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhY2tTdG9yYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbnsgXHJcbiAgQElucHV0KCkgbW9kZWw6YW55O1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKClcclxuICB7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIH1cclxuIFxyXG4gIG5nT25Jbml0KCl7ICB9XHJcbn1cclxuIl19
