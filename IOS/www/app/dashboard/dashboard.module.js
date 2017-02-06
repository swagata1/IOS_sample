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
var dashboard_component_1 = require("./dashboard.component");
var common_1 = require("@angular/common");
var dashboard_routes_1 = require("./dashboard.routes");
var shared_module_1 = require('./../shared/shared.module');
var dropdown_module_1 = require('./../../shared/dropdown/dropdown.module');
var app_nav_sub_module_1 = require('./../navigation/app.nav.sub.module');
var download_module_1 = require('./../download/download.module');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent],
            exports: [dashboard_component_1.DashboardComponent],
            imports: [common_1.CommonModule, dashboard_routes_1.DashboardRouting, dropdown_module_1.DropdownModule, app_nav_sub_module_1.AppNavSubModule, download_module_1.DownloadModule, shared_module_1.SharedModule]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLG9DQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLGlDQUFpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQix5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3pFLG1DQUFnQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3JFLGdDQUErQiwrQkFBK0IsQ0FBQyxDQUFBO0FBUS9EO0lBQUE7SUFBOEIsQ0FBQztJQU4vQjtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUNBQWdCLEVBQUUsZ0NBQWMsRUFBRSxvQ0FBZSxFQUFFLGdDQUFjLEVBQUUsNEJBQVksQ0FBQztTQUUzRyxDQUFDOzt1QkFBQTtJQUM0QixzQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsdUJBQWUsa0JBQUcsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBhbmFpciBvbiA5LzE3LzE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IERhc2hib2FyZFJvdXRpbmcgfSBmcm9tIFwiLi9kYXNoYm9hcmQucm91dGVzXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFwcE5hdlN1Yk1vZHVsZSB9IGZyb20gJy4vLi4vbmF2aWdhdGlvbi9hcHAubmF2LnN1Yi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEb3dubG9hZE1vZHVsZSB9IGZyb20gJy4vLi4vZG93bmxvYWQvZG93bmxvYWQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEYXNoYm9hcmRSb3V0aW5nLCBEcm9wZG93bk1vZHVsZSwgQXBwTmF2U3ViTW9kdWxlLCBEb3dubG9hZE1vZHVsZSwgU2hhcmVkTW9kdWxlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZXsgfSJdfQ==
