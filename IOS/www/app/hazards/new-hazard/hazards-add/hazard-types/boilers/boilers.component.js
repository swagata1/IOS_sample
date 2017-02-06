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
var BoilersComponent = (function () {
    function BoilersComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    BoilersComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BoilersComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BoilersComponent.prototype, "valueChange", void 0);
    BoilersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'boilers',
            templateUrl: 'boilers.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BoilersComponent);
    return BoilersComponent;
}());
exports.BoilersComponent = BoilersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2JvaWxlcnMvYm9pbGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRSxlQUFlLENBQUMsQ0FBQTtBQVFuRjtJQUtFO1FBRUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFSZDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFUWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOzt3QkFBQTtJQWFGLHVCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx3QkFBZ0IsbUJBVzVCLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvbmV3LWhhemFyZC9oYXphcmRzLWFkZC9oYXphcmQtdHlwZXMvYm9pbGVycy9ib2lsZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYm9pbGVycycsXHJcbiAgdGVtcGxhdGVVcmw6ICdib2lsZXJzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvaWxlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxueyAgICBcclxuICBASW5wdXQoKSBtb2RlbDphbnk7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKVxyXG4gIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=
