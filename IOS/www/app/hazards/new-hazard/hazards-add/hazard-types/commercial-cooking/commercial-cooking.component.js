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
var CommercialCookingComponent = (function () {
    function CommercialCookingComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    CommercialCookingComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommercialCookingComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CommercialCookingComponent.prototype, "valueChange", void 0);
    CommercialCookingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'commercial-cooking',
            templateUrl: 'commercial-cooking.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CommercialCookingComponent);
    return CommercialCookingComponent;
}());
exports.CommercialCookingComponent = CommercialCookingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2NvbW1lcmNpYWwtY29va2luZy9jb21tZXJjaWFsLWNvb2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFRbkY7SUFLRTtRQUVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELDZDQUFRLEdBQVIsY0FBYyxDQUFDO0lBUmY7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O21FQUFBO0lBVFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLG1DQUFtQztTQUNqRCxDQUFDOztrQ0FBQTtJQWFGLGlDQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQ0FBMEIsNkJBV3RDLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvbmV3LWhhemFyZC9oYXphcmRzLWFkZC9oYXphcmQtdHlwZXMvY29tbWVyY2lhbC1jb29raW5nL2NvbW1lcmNpYWwtY29va2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbW1lcmNpYWwtY29va2luZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb21tZXJjaWFsLWNvb2tpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWVyY2lhbENvb2tpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxueyAgIFxyXG4gIEBJbnB1dCgpIG1vZGVsOmFueTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpXHJcbiAge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpIHsgIH1cclxufVxyXG4iXX0=
