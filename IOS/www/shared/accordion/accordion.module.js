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
var collapse_module_1 = require('../collapse/collapse.module');
var accordion_group_component_1 = require('./accordion-group.component');
var accordion_component_1 = require('./accordion.component');
var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, collapse_module_1.CollapseModule],
            declarations: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent],
            exports: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionModule);
    return AccordionModule;
}());
exports.AccordionModule = AccordionModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGdDQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDBDQUF3Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBTzNEO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLGdDQUFjLENBQUM7WUFDdkMsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsbURBQXVCLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsbURBQXVCLENBQUM7U0FDdkQsQ0FBQzs7dUJBQUE7SUFFRixzQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksdUJBQWUsa0JBQzNCLENBQUEiLCJmaWxlIjoic2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnLi4vY29sbGFwc2UvY29sbGFwc2UubW9kdWxlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb2xsYXBzZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Nb2R1bGUge1xyXG59XHJcbiJdfQ==
