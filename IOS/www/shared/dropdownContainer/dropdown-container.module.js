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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var dropdown_container_component_1 = require('./dropdown-container.component');
var dropdown_module_1 = require('../dropdown/dropdown.module');
var DropdownContainerModule = (function () {
    function DropdownContainerModule() {
    }
    DropdownContainerModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, dropdown_module_1.DropdownModule, platform_browser_1.BrowserModule],
            declarations: [dropdown_container_component_1.DropdownContainerComponent],
            exports: [dropdown_container_component_1.DropdownContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownContainerModule);
    return DropdownContainerModule;
}());
exports.DropdownContainerModule = DropdownContainerModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsNkNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFDNUUsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFPN0Q7SUFBQTtJQUNBLENBQUM7SUFORDtRQUFDLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFFLG1CQUFXLEVBQUUsZ0NBQWMsRUFBRSxnQ0FBYSxDQUFFO1lBQ3BELFlBQVksRUFBRSxDQUFDLHlEQUEwQixDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLHlEQUEwQixDQUFDO1NBQ3hDLENBQUM7OytCQUFBO0lBRUYsOEJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLCtCQUF1QiwwQkFDbkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIEZvcm1zTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgQnJvd3Nlck1vZHVsZSBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbRHJvcGRvd25Db250YWluZXJDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db250YWluZXJNb2R1bGUge1xyXG59Il19
