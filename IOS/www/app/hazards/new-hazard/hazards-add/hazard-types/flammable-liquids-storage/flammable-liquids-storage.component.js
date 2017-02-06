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
var FlammableLiquidsStorageComponent = (function () {
    function FlammableLiquidsStorageComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.valueChange = new core_1.EventEmitter();
    }
    FlammableLiquidsStorageComponent.prototype.ngOnInit = function () {
        this.site = this.localStorageService.get('locationData');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlammableLiquidsStorageComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FlammableLiquidsStorageComponent.prototype, "valueChange", void 0);
    FlammableLiquidsStorageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flammable-liquids-storage',
            templateUrl: 'flammable-liquids-storage.component.html',
            providers: [localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService])
    ], FlammableLiquidsStorageComponent);
    return FlammableLiquidsStorageComponent;
}());
exports.FlammableLiquidsStorageComponent = FlammableLiquidsStorageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2ZsYW1tYWJsZS1saXF1aWRzLXN0b3JhZ2UvZmxhbW1hYmxlLWxpcXVpZHMtc3RvcmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRSxlQUFlLENBQUMsQ0FBQTtBQUNuRixvQ0FBbUUsMkNBQTJDLENBQUMsQ0FBQTtBQVMvRztJQU1FLDBDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUUxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtREFBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7bUVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eUVBQUE7SUFYWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUFtQixDQUFDO1NBQ2pDLENBQUM7O3dDQUFBO0lBaUJGLHVDQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSx3Q0FBZ0MsbUNBZTVDLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvbmV3LWhhemFyZC9oYXphcmRzLWFkZC9oYXphcmQtdHlwZXMvZmxhbW1hYmxlLWxpcXVpZHMtc3RvcmFnZS9mbGFtbWFibGUtbGlxdWlkcy1zdG9yYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2xvY2FsU3RvcmFnZVNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2ZsYW1tYWJsZS1saXF1aWRzLXN0b3JhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmxhbW1hYmxlLWxpcXVpZHMtc3RvcmFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxTdG9yYWdlU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGFtbWFibGVMaXF1aWRzU3RvcmFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgcHJpdmF0ZSBzaXRlOmFueTsgIFxyXG4gIEBJbnB1dCgpIG1vZGVsOmFueTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpXHJcbiAge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpXHJcbiAgeyAgICBcclxuICAgIHRoaXMuc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpOyAgICBcclxuICB9XHJcbn1cclxuIl19
