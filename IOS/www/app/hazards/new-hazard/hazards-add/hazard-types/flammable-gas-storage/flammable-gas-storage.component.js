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
var FlammableGasStorageComponent = (function () {
    function FlammableGasStorageComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.valueChange = new core_1.EventEmitter();
    }
    FlammableGasStorageComponent.prototype.ngOnInit = function () {
        this.site = this.localStorageService.get('locationData');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlammableGasStorageComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FlammableGasStorageComponent.prototype, "valueChange", void 0);
    FlammableGasStorageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flammable-gas-storage',
            templateUrl: 'flammable-gas-storage.component.html',
            providers: [localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService])
    ], FlammableGasStorageComponent);
    return FlammableGasStorageComponent;
}());
exports.FlammableGasStorageComponent = FlammableGasStorageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2ZsYW1tYWJsZS1nYXMtc3RvcmFnZS9mbGFtbWFibGUtZ2FzLXN0b3JhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFDbkYsb0NBQW1FLDJDQUEyQyxDQUFDLENBQUE7QUFTL0c7SUFNRSxzQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBWEQ7UUFBQyxZQUFLLEVBQUU7OytEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3FFQUFBO0lBWFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBbUIsQ0FBQztTQUNqQyxDQUFDOztvQ0FBQTtJQWlCRixtQ0FBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksb0NBQTRCLCtCQWV4QyxDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2ZsYW1tYWJsZS1nYXMtc3RvcmFnZS9mbGFtbWFibGUtZ2FzLXN0b3JhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZmxhbW1hYmxlLWdhcy1zdG9yYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZsYW1tYWJsZS1nYXMtc3RvcmFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxTdG9yYWdlU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGFtbWFibGVHYXNTdG9yYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuICBwcml2YXRlIHNpdGU6YW55OyAgXHJcbiAgQElucHV0KCkgbW9kZWw6YW55O1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSlcclxuICB7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIH1cclxuIFxyXG4gIG5nT25Jbml0KClcclxuICB7ICAgIFxyXG4gICAgdGhpcy5zaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7ICAgIFxyXG4gIH1cclxufVxyXG4iXX0=
