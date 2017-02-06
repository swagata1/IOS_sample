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
var modal_module_1 = require('../../shared/modal/modal.module');
var common_1 = require("@angular/common");
var tooltip_module_1 = require('./../../shared/tooltip/tooltip.module');
var toggleswitch_module_1 = require('../../shared/toggleswitch/toggleswitch.module');
var dropdown_module_1 = require('../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('../../shared/dropdownContainer/dropdown-container.module');
var firePumpChart_component_1 = require('./firePumpChart.component');
var FirePumpChartModule = (function () {
    function FirePumpChartModule() {
    }
    FirePumpChartModule = __decorate([
        core_1.NgModule({
            declarations: [firePumpChart_component_1.FirePumpChartComponent],
            imports: [forms_1.FormsModule, platform_browser_1.BrowserModule, modal_module_1.ModalModule, common_1.CommonModule, tooltip_module_1.TooltipModule, toggleswitch_module_1.ToggleSwitchModule, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule],
            exports: [firePumpChart_component_1.FirePumpChartComponent, tooltip_module_1.TooltipModule]
        }), 
        __metadata('design:paramtypes', [])
    ], FirePumpChartModule);
    return FirePumpChartModule;
}());
exports.FirePumpChartModule = FirePumpChartModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9maXJlUHVtcC9maXJlUHVtcENoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELDZCQUE0QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLCtCQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLG9DQUFtQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ25GLGdDQUErQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3ZFLDBDQUF3QywwREFBMEQsQ0FBQyxDQUFBO0FBRW5HLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBUW5FO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxlQUFRLENBQUM7WUFDVCxZQUFZLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBRSxtQkFBVyxFQUFFLGdDQUFhLEVBQUUsMEJBQVcsRUFBRSxxQkFBWSxFQUFFLDhCQUFhLEVBQUUsd0NBQWtCLEVBQUUsZ0NBQWMsRUFBRSxtREFBdUIsQ0FBQztZQUMxSSxPQUFPLEVBQUUsQ0FBQyxnREFBc0IsRUFBRSw4QkFBYSxDQUFDO1NBQ25ELENBQUM7OzJCQUFBO0lBRUYsMEJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLDJCQUFtQixzQkFDL0IsQ0FBQSIsImZpbGUiOiJhcHAvZmlyZVB1bXAvZmlyZVB1bXBDaGFydC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RhbC9tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgVG9nZ2xlU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3RvZ2dsZXN3aXRjaC90b2dnbGVzd2l0Y2gubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRpbnlNY2VEaXJlY3RpdmUgfSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aXZlcy90aW55LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZpcmVQdW1wQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2ZpcmVQdW1wQ2hhcnQuY29tcG9uZW50JztcclxuLy9pbXBvcnQgeyBHcmFwaHNDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JhcGhzL2dyYXBocy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbRmlyZVB1bXBDaGFydENvbXBvbmVudF0sXHJcblx0aW1wb3J0czogWyBGb3Jtc01vZHVsZSwgQnJvd3Nlck1vZHVsZSwgTW9kYWxNb2R1bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZSwgVG9nZ2xlU3dpdGNoTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgRHJvcGRvd25Db250YWluZXJNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0ZpcmVQdW1wQ2hhcnRDb21wb25lbnQsIFRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJlUHVtcENoYXJ0TW9kdWxlIHtcclxufSJdfQ==
