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
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var SupervisionComponent = (function () {
    function SupervisionComponent(localStorageService, ccs) {
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.pageToggle = 1;
        this.localStorageService = localStorageService;
    }
    SupervisionComponent.prototype.loadComponent = function (tabIndex) {
        this.pageToggle = tabIndex;
    };
    SupervisionComponent.prototype.ngOnInit = function () {
        this.getLocationData = this.localStorageService.get('locationData');
        this.comm = { currentState: 'supervision', isDownloaded: this.getLocationData.downloadIndicator == 'F' ? false : true };
        this.ccs.setLogged(this.comm);
    };
    SupervisionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-water-supplies',
            templateUrl: 'supervision.component.html',
            providers: [configuration_1.Configuration, localStorageService_1.LocalStorageService],
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService])
    ], SupervisionComponent);
    return SupervisionComponent;
}());
exports.SupervisionComponent = SupervisionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9zdXBlcnZpc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQWF4RjtJQVFJLDhCQUFvQixtQkFBd0MsRUFBUyxHQUFrQztRQUFuRix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBK0I7UUFQdkcsZUFBVSxHQUFXLENBQUMsQ0FBQztRQVFuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxRQUFRO1FBRWxCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixJQUFJLEdBQUcsR0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLHlDQUFtQixDQUFDO1NBQ2xELENBQUM7OzRCQUFBO0lBd0JGLDJCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSw0QkFBb0IsdUJBc0JoQyxDQUFBIiwiZmlsZSI6ImFwcC9zdXBlcnZpc2lvbi9zdXBlcnZpc2lvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wQ29tbUludGVyZmFjZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuZGVjbGFyZSBsZXQgZDM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXhpcy13YXRlci1zdXBwbGllcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3N1cGVydmlzaW9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0NvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cGVydmlzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBhZ2VUb2dnbGU6IG51bWJlciA9IDE7XHJcbiAgICBvcHRpb25zOiBhbnk7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIGNvbW06IENvbW11bmljYXRlO1xyXG4gICAgZ2V0TG9jYXRpb25EYXRhOiBhbnk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHB1YmxpYyBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRDb21wb25lbnQodGFiSW5kZXgpe1xyXG4gICAgICAgIC8vdG8gbG9hZCBjaGlsZCBjb21wb25lbnQgb24gdGFiIHN3aXRjaCBpbnN0ZWFkIG9mIHBhcmVudCBjb21wb25lbnQgbG9hZFxyXG4gICAgICAgIHRoaXMucGFnZVRvZ2dsZSA9IHRhYkluZGV4OyBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uRGF0YSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgICAgIHRoaXMuY29tbSA9IHsgY3VycmVudFN0YXRlOiAnc3VwZXJ2aXNpb24nLCBpc0Rvd25sb2FkZWQ6IHRoaXMuZ2V0TG9jYXRpb25EYXRhLmRvd25sb2FkSW5kaWNhdG9yID09ICdGJz9mYWxzZTp0cnVlfTtcclxuICAgICAgICB0aGlzLmNjcy5zZXRMb2dnZWQodGhpcy5jb21tKTtcclxuICAgIH1cclxufSJdfQ==
