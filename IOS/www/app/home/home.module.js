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
var home_component_1 = require("./home.component");
var common_1 = require("@angular/common");
var home_routes_1 = require("./home.routes");
var app_nav_sub_module_1 = require('./../navigation/app.nav.sub.module');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            imports: [common_1.CommonModule, home_routes_1.HomeRouting, app_nav_sub_module_1.AppNavSubModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNEJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLG1DQUFnQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBUXJFO0lBQUE7SUFBeUIsQ0FBQztJQU4xQjtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHlCQUFXLEVBQUUsb0NBQWUsQ0FBQztTQUV4RCxDQUFDOztrQkFBQTtJQUN1QixpQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixrQkFBVSxhQUFHLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBhbmFpciBvbiA5LzE3LzE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSG9tZVJvdXRpbmcgfSBmcm9tIFwiLi9ob21lLnJvdXRlc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwTmF2U3ViTW9kdWxlIH0gZnJvbSAnLi8uLi9uYXZpZ2F0aW9uL2FwcC5uYXYuc3ViLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIb21lUm91dGluZywgQXBwTmF2U3ViTW9kdWxlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGV7IH0iXX0=
