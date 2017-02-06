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
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var nav_component_1 = require("./nav.component");
var sticky_1 = require('./../../shared/directive/sticky/sticky');
var tiny_module_1 = require('../shared/directives/tiny.module');
var app_nav_sub_module_1 = require('./app.nav.sub.module');
var ri_add_module_1 = require('./../risk-improvements/ri-add/ri-add.module');
var modal_module_1 = require('../../shared/modal/modal.module');
var NavModule = (function () {
    function NavModule() {
    }
    NavModule = __decorate([
        core_1.NgModule({
            declarations: [nav_component_1.NavComponent, sticky_1.StickyDirective],
            exports: [nav_component_1.NavComponent],
            imports: [common_1.CommonModule, app_nav_sub_module_1.AppNavSubModule, ri_add_module_1.RIAddModule, modal_module_1.ModalModule, forms_1.FormsModule, tiny_module_1.TinyModule]
        }), 
        __metadata('design:paramtypes', [])
    ], NavModule);
    return NavModule;
}());
exports.NavModule = NavModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL25hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2Qyx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxzQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUvQyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBZ0Msd0NBQXdDLENBQUMsQ0FBQTtBQUN6RSw0QkFBMkIsa0NBQWtDLENBQUMsQ0FBQTtBQUM5RCxtQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV2RCw4QkFBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUMxRSw2QkFBNEIsaUNBQWlDLENBQUMsQ0FBQTtBQU85RDtJQUFBO0lBQXdCLENBQUM7SUFMekI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHdCQUFlLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG9DQUFlLEVBQUUsMkJBQVcsRUFBRSwwQkFBVyxFQUFFLG1CQUFXLEVBQUUsd0JBQVUsQ0FBQztTQUM5RixDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiYXBwL25hdmlnYXRpb24vbmF2Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHB5YWRhdiBvbiA5LzI1LzE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tIFwiLi9uYXYuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0aWNreURpcmVjdGl2ZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZS9zdGlja3kvc3RpY2t5JztcclxuaW1wb3J0IHsgVGlueU1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9kaXJlY3RpdmVzL3RpbnkubW9kdWxlJztcclxuaW1wb3J0IHsgQXBwTmF2U3ViTW9kdWxlIH0gZnJvbSAnLi9hcHAubmF2LnN1Yi5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgUklBZGRNb2R1bGUgfSBmcm9tICcuLy4uL3Jpc2staW1wcm92ZW1lbnRzL3JpLWFkZC9yaS1hZGQubW9kdWxlJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kYWwvbW9kYWwubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtOYXZDb21wb25lbnQsIFN0aWNreURpcmVjdGl2ZV0sIFxyXG4gICAgZXhwb3J0czogW05hdkNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBcHBOYXZTdWJNb2R1bGUsIFJJQWRkTW9kdWxlLCBNb2RhbE1vZHVsZSwgRm9ybXNNb2R1bGUsIFRpbnlNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNb2R1bGV7IH0iXX0=
