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
var tooltip_container_component_1 = require('./tooltip-container.component');
var tooltip_directive_1 = require('./tooltip.directive');
var components_helper_service_1 = require('../utils/components-helper.service');
var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
            exports: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
            providers: [components_helper_service_1.ComponentsHelper],
            entryComponents: [tooltip_container_component_1.TooltipContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipModule);
    return TooltipModule;
}());
exports.TooltipModule = TooltipModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsNENBQTBDLCtCQUErQixDQUFDLENBQUE7QUFDMUUsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsMENBQWlDLG9DQUFvQyxDQUFDLENBQUE7QUFTdEU7SUFBQTtJQUNBLENBQUM7SUFSRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsdURBQXlCLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsdURBQXlCLENBQUM7WUFDdEQsU0FBUyxFQUFFLENBQUMsNENBQWdCLENBQUM7WUFDN0IsZUFBZSxFQUFFLENBQUMsdURBQXlCLENBQUM7U0FDN0MsQ0FBQzs7cUJBQUE7SUFFRixvQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFkscUJBQWEsZ0JBQ3pCLENBQUEiLCJmaWxlIjoic2hhcmVkL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRzSGVscGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50cy1oZWxwZXIuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Rvb2x0aXBEaXJlY3RpdmUsIFRvb2x0aXBDb250YWluZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtDb21wb25lbnRzSGVscGVyXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZHVsZSB7XHJcbn1cclxuIl19
