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
var dropdown_menu_directive_1 = require('./dropdown-menu.directive');
var dropdown_toggle_directive_1 = require('./dropdown-toggle.directive');
var dropdown_directive_1 = require('./dropdown.directive');
var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            declarations: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective],
            exports: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQUNsRSwwQ0FBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQU16RDtJQUFBO0lBQ0EsQ0FBQztJQUxEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsc0NBQWlCLEVBQUUsK0NBQXFCLEVBQUUsbURBQXVCLENBQUM7WUFDakYsT0FBTyxFQUFFLENBQUMsc0NBQWlCLEVBQUUsK0NBQXFCLEVBQUUsbURBQXVCLENBQUM7U0FDN0UsQ0FBQzs7c0JBQUE7SUFFRixxQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksc0JBQWMsaUJBQzFCLENBQUEiLCJmaWxlIjoic2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRHJvcGRvd25EaXJlY3RpdmUsIERyb3Bkb3duTWVudURpcmVjdGl2ZSwgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtEcm9wZG93bkRpcmVjdGl2ZSwgRHJvcGRvd25NZW51RGlyZWN0aXZlLCBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTW9kdWxlIHtcclxufVxyXG4iXX0=
