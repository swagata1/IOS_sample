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
var core_1 = require("@angular/core");
var login_component_1 = require("./login.component");
var common_1 = require("@angular/common");
var login_routes_1 = require("./login.routes");
var app_nav_sub_module_1 = require('./../navigation/app.nav.sub.module');
var dropdown_container_module_1 = require('../../shared/dropdownContainer/dropdown-container.module');
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent],
            exports: [login_component_1.LoginComponent],
            imports: [common_1.CommonModule, login_routes_1.LoginRouting, app_nav_sub_module_1.AppNavSubModule, dropdown_container_module_1.DropdownContainerModule]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw2QkFBNkIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5QyxtQ0FBZ0Msb0NBQW9DLENBQUMsQ0FBQTtBQUNyRSwwQ0FBd0MsMERBQTBELENBQUMsQ0FBQTtBQVFuRztJQUFBO0lBQTBCLENBQUM7SUFOM0I7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSwyQkFBWSxFQUFFLG9DQUFlLEVBQUUsbURBQXVCLENBQUM7U0FFbEYsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBhbmFpciBvbiA5LzE3LzE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBMb2dpblJvdXRpbmcgfSBmcm9tIFwiLi9sb2dpbi5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgQXBwTmF2U3ViTW9kdWxlIH0gZnJvbSAnLi8uLi9uYXZpZ2F0aW9uL2FwcC5uYXYuc3ViLm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMb2dpblJvdXRpbmcsIEFwcE5hdlN1Yk1vZHVsZSwgRHJvcGRvd25Db250YWluZXJNb2R1bGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGV7IH0iXX0=
