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
var supervision_routes_1 = require("./supervision.routes");
var dropdown_module_1 = require('../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('../../shared/dropdownContainer/dropdown-container.module');
var toggleswitch_module_1 = require('../../shared/toggleswitch/toggleswitch.module');
var datepicker_module_1 = require('../../shared/datePicker/datepicker.module');
var modal_module_1 = require('../../shared/modal/modal.module');
var supervision_component_1 = require("./supervision.component");
var fire_detection_component_1 = require("./automatic-fire-detection/fire-detection.component");
var security_module_1 = require('./security/security.module');
var ri_summary_module_1 = require("../risk-improvements/ri-summary/ri-summary.module");
var tabs_module_1 = require('./../../shared/tabs/tabs.module');
var SupervisionModule = (function () {
    function SupervisionModule() {
    }
    SupervisionModule = __decorate([
        core_1.NgModule({
            declarations: [supervision_component_1.SupervisionComponent, fire_detection_component_1.FireDetectionComponent],
            exports: [supervision_component_1.SupervisionComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, supervision_routes_1.SupervisionRouting, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule, toggleswitch_module_1.ToggleSwitchModule, datepicker_module_1.DatepickerModule, modal_module_1.ModalModule, ri_summary_module_1.RISummaryModule, tabs_module_1.TabsModule, security_module_1.SecurityModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SupervisionModule);
    return SupervisionModule;
}());
exports.SupervisionModule = SupervisionModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9zdXBlcnZpc2lvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxtQ0FBbUMsc0JBQXNCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBK0IsdUNBQXVDLENBQUMsQ0FBQTtBQUN2RSwwQ0FBd0MsMERBQTBELENBQUMsQ0FBQTtBQUNuRyxvQ0FBbUMsK0NBQStDLENBQUMsQ0FBQTtBQUNuRixrQ0FBaUMsMkNBQTJDLENBQUMsQ0FBQTtBQUM3RSw2QkFBNEIsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RCxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQUMvRCx5Q0FBdUMscURBQXFELENBQUMsQ0FBQTtBQUU3RixnQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBZ0MsbURBQW1ELENBQUMsQ0FBQTtBQUNwRiw0QkFBMkIsaUNBQWlDLENBQUMsQ0FBQTtBQVE3RDtJQUFBO0lBRUEsQ0FBQztJQVJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsNENBQW9CLEVBQUUsaURBQXNCLENBQUM7WUFDNUQsT0FBTyxFQUFFLENBQUMsNENBQW9CLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLHVDQUFrQixFQUFFLGdDQUFjLEVBQUUsbURBQXVCLEVBQUUsd0NBQWtCLEVBQUUsb0NBQWdCLEVBQUUsMEJBQVcsRUFBRSxtQ0FBZSxFQUFFLHdCQUFVLEVBQUUsZ0NBQWMsQ0FBQztTQUVwTSxDQUFDOzt5QkFBQTtJQUdGLHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx5QkFBaUIsb0JBRTdCLENBQUEiLCJmaWxlIjoiYXBwL3N1cGVydmlzaW9uL3N1cGVydmlzaW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3VwZXJ2aXNpb25Sb3V0aW5nIH0gZnJvbSBcIi4vc3VwZXJ2aXNpb24ucm91dGVzXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUb2dnbGVTd2l0Y2hNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvdG9nZ2xlc3dpdGNoL3RvZ2dsZXN3aXRjaC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2RhdGVQaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RhbC9tb2RhbC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgU3VwZXJ2aXNpb25Db21wb25lbnQgfSBmcm9tIFwiLi9zdXBlcnZpc2lvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlyZURldGVjdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2F1dG9tYXRpYy1maXJlLWRldGVjdGlvbi9maXJlLWRldGVjdGlvbi5jb21wb25lbnRcIjtcclxuLy9pbXBvcnQgeyBTZWN1cml0eUNvbXBvbmVudCB9IGZyb20gXCIuL3NlY3VyaXR5L3NlY3VyaXR5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWN1cml0eU1vZHVsZSB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHkubW9kdWxlJztcclxuaW1wb3J0IHsgUklTdW1tYXJ5TW9kdWxlIH0gZnJvbSBcIi4uL3Jpc2staW1wcm92ZW1lbnRzL3JpLXN1bW1hcnkvcmktc3VtbWFyeS5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVGFic01vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3RhYnMvdGFicy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1N1cGVydmlzaW9uQ29tcG9uZW50LCBGaXJlRGV0ZWN0aW9uQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtTdXBlcnZpc2lvbkNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgU3VwZXJ2aXNpb25Sb3V0aW5nLCBEcm9wZG93bk1vZHVsZSwgRHJvcGRvd25Db250YWluZXJNb2R1bGUsIFRvZ2dsZVN3aXRjaE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsIFJJU3VtbWFyeU1vZHVsZSwgVGFic01vZHVsZSwgU2VjdXJpdHlNb2R1bGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VwZXJ2aXNpb25Nb2R1bGUge1xyXG4gICAgXHJcbn0iXX0=
