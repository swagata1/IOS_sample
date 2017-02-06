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
var AircraftHangarComponent = (function () {
    function AircraftHangarComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.valueChange = new core_1.EventEmitter();
    }
    AircraftHangarComponent.prototype.ngOnInit = function () {
        this.site = this.localStorageService.get('locationData');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AircraftHangarComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AircraftHangarComponent.prototype, "valueChange", void 0);
    AircraftHangarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'aircraft-hangar',
            templateUrl: 'aircraft-hangar.component.html',
            providers: [localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService])
    ], AircraftHangarComponent);
    return AircraftHangarComponent;
}());
exports.AircraftHangarComponent = AircraftHangarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2FpcmNyYWZ0LWhhbmdhci9haXJjcmFmdC1oYW5nYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFDbkYsb0NBQW1FLDJDQUEyQyxDQUFDLENBQUE7QUFTL0c7SUFNRSxpQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBWEQ7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O2dFQUFBO0lBWFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyx5Q0FBbUIsQ0FBQztTQUNqQyxDQUFDOzsrQkFBQTtJQWlCRiw4QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksK0JBQXVCLDBCQWVuQyxDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2FpcmNyYWZ0LWhhbmdhci9haXJjcmFmdC1oYW5nYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYWlyY3JhZnQtaGFuZ2FyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FpcmNyYWZ0LWhhbmdhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxTdG9yYWdlU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBaXJjcmFmdEhhbmdhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgcHJpdmF0ZSBzaXRlOmFueTsgIFxyXG4gIEBJbnB1dCgpIG1vZGVsOmFueTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpXHJcbiAge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgdGhpcy5zaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7ICAgIFxyXG4gIH1cclxufVxyXG4iXX0=
