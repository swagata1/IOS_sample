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
var componentCommunicationService_1 = require('./../shared/componentCommunicationService');
var HazardsComponent = (function () {
    function HazardsComponent(ccs) {
        this.ccs = ccs;
        this.pageToggle = 1;
        this.tabs = [
            { title: 'Add Hazard', path: 'hazards/new-hazard', active: true },
            { title: 'Rating', path: 'hazards/ratings' }
        ];
    }
    HazardsComponent.prototype.ngOnInit = function () {
        this.ccs.setHazardsTabIndex(this.pageToggle);
    };
    HazardsComponent.prototype.loadComponent = function (tabIndex) {
        this.pageToggle = tabIndex;
        this.ccs.setHazardsTabIndex(this.pageToggle);
    };
    HazardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hazards',
            templateUrl: 'hazards.component.html',
        }), 
        __metadata('design:paramtypes', [componentCommunicationService_1.ComponentCommunicationService])
    ], HazardsComponent);
    return HazardsComponent;
}());
exports.HazardsComponent = HazardsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL2hhemFyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFHeEUsOENBQStDLDJDQUEyQyxDQUFDLENBQUE7QUFVM0Y7SUFRSSwwQkFBbUIsR0FBa0M7UUFBbEMsUUFBRyxHQUFILEdBQUcsQ0FBK0I7UUFON0MsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQWM7WUFDbEIsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFDO1lBQzlELEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7U0FDN0MsQ0FBQztJQUtGLENBQUM7SUFFSixtQ0FBUSxHQUFSO1FBRU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVFLHdDQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUE3Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FHeEMsQ0FBQzs7d0JBQUE7SUF3QkYsdUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHdCQUFnQixtQkFzQjVCLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvaGF6YXJkcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZS9zYXZlZC10by1mcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSB9ICBmcm9tICcuLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2hhemFyZHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdoYXphcmRzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIC8vIHN0eWxlVXJsczogWydmaXJlTG9zcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICAvLyBwcm92aWRlcnM6IFtGaXJlTG9zc1NlcnZpY2UsIENvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2UsIGlwY1NlbmRlclNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhemFyZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTYXZlZFRvRmlsZVN5c3RlbSB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdlVG9nZ2xlOiBudW1iZXIgPSAxO1xyXG5cdHB1YmxpYyB0YWJzOkFycmF5PGFueT4gPSBbXHJcbiAgICAgICAge3RpdGxlOiAnQWRkIEhhemFyZCcsIHBhdGg6ICdoYXphcmRzL25ldy1oYXphcmQnLCBhY3RpdmU6dHJ1ZX0sXHJcbiAgICAgICAge3RpdGxlOiAnUmF0aW5nJywgcGF0aDogJ2hhemFyZHMvcmF0aW5ncyd9ICAgICAgICBcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNjczogQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB9ICAgICBcclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyBUaGlzIGNvbXBvbmVudCBqdXN0IGhvc3QgdGhlIHRhYnMgc3dpdGNoIGxvZ2ljLlxyXG4gICAgICAgIHRoaXMuY2NzLnNldEhhemFyZHNUYWJJbmRleCh0aGlzLnBhZ2VUb2dnbGUpO1xyXG5cdH1cclxuXHJcbiAgICBsb2FkQ29tcG9uZW50KHRhYkluZGV4KXtcclxuICAgICAgICB0aGlzLnBhZ2VUb2dnbGUgPSB0YWJJbmRleDsgXHJcbiAgICAgICAgdGhpcy5jY3Muc2V0SGF6YXJkc1RhYkluZGV4KHRoaXMucGFnZVRvZ2dsZSk7XHJcbiAgICB9XHJcbn0iXX0=
