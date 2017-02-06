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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var common_2 = require('../common');
var tab_heading_directive_1 = require('./tab-heading.directive');
var tab_directive_1 = require('./tab.directive');
var tabset_component_1 = require('./tabset.component');
var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [common_2.NgTranscludeDirective, tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective],
            exports: [tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWJzL3RhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsdUJBQXNDLFdBQVcsQ0FBQyxDQUFBO0FBQ2xELHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzlELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBT3JEO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDhCQUFxQixFQUFFLDRCQUFZLEVBQUUsa0NBQWUsRUFBRSwyQ0FBbUIsQ0FBQztZQUN6RixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLGtDQUFlLEVBQUUsMkNBQW1CLENBQUM7U0FDOUQsQ0FBQzs7a0JBQUE7SUFFRixpQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksa0JBQVUsYUFDdEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdGFicy90YWJzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBUYWJIZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItaGVhZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUsIFRhYkRpcmVjdGl2ZSwgVGFic2V0Q29tcG9uZW50LCBUYWJIZWFkaW5nRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbVGFiRGlyZWN0aXZlLCBUYWJzZXRDb21wb25lbnQsIFRhYkhlYWRpbmdEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHtcclxufVxyXG4iXX0=
