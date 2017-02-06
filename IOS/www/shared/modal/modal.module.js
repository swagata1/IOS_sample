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
var modal_backdrop_component_1 = require('./modal-backdrop.component');
var modal_component_1 = require('./modal.component');
var components_helper_service_1 = require('../utils/components-helper.service');
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
            exports: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
            entryComponents: [modal_backdrop_component_1.ModalBackdropComponent],
            providers: [components_helper_service_1.ComponentsHelper]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyx5Q0FBdUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNwRSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCwwQ0FBaUMsb0NBQW9DLENBQUMsQ0FBQTtBQVF0RTtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsaURBQXNCLEVBQUUsZ0NBQWMsQ0FBQztZQUN0RCxPQUFPLEVBQUUsQ0FBQyxpREFBc0IsRUFBRSxnQ0FBYyxDQUFDO1lBQ2pELGVBQWUsRUFBRSxDQUFDLGlEQUFzQixDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRDQUFnQixDQUFDO1NBQzlCLENBQUM7O21CQUFBO0lBRUYsa0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG1CQUFXLGNBQ3ZCLENBQUEiLCJmaWxlIjoic2hhcmVkL21vZGFsL21vZGFsLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50c0hlbHBlciB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudHMtaGVscGVyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsRGlyZWN0aXZlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtDb21wb25lbnRzSGVscGVyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xyXG59XHJcbiJdfQ==
