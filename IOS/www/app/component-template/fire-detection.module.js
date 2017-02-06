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
var fire_detection_component_1 = require("./fire-detection.component");
var toggleswitch_module_1 = require('./../../../shared/toggleswitch/toggleswitch.module');
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var dropdown_module_1 = require('./../../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('./../../../shared/dropdownContainer/dropdown-container.module');
var alert_module_1 = require("./../../../shared/alert/alert.module");
var FireDetectionModule = (function () {
    function FireDetectionModule() {
    }
    FireDetectionModule = __decorate([
        core_1.NgModule({
            declarations: [fire_detection_component_1.FireDetectionComponent],
            exports: [fire_detection_component_1.FireDetectionComponent],
            imports: [fire_detection_component_1.FireDetectionComponent, common_1.CommonModule, toggleswitch_module_1.ToggleSwitchModule, forms_1.FormsModule, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule, alert_module_1.AlertModule]
        }), 
        __metadata('design:paramtypes', [])
    ], FireDetectionModule);
    return FireDetectionModule;
}());
exports.FireDetectionModule = FireDetectionModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQtdGVtcGxhdGUvZmlyZS1kZXRlY3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMseUNBQXVDLDRCQUE0QixDQUFDLENBQUE7QUFDcEUsb0NBQW1DLG9EQUFvRCxDQUFDLENBQUE7QUFDeEYsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsZ0NBQStCLDRDQUE0QyxDQUFDLENBQUE7QUFDNUUsMENBQXdDLCtEQUErRCxDQUFDLENBQUE7QUFDeEcsNkJBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFRbkU7SUFBQTtJQUFtQyxDQUFDO0lBTnBDO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsaURBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsaURBQXNCLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsaURBQXNCLEVBQUUscUJBQVksRUFBRSx3Q0FBa0IsRUFBRSxtQkFBVyxFQUFFLGdDQUFjLEVBQUUsbURBQXVCLEVBQUUsMEJBQVcsQ0FBQztTQUN6SSxDQUFDOzsyQkFBQTtJQUVpQywwQkFBQztBQUFELENBQW5DLEFBQW9DLElBQUE7QUFBdkIsMkJBQW1CLHNCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudC10ZW1wbGF0ZS9maXJlLWRldGVjdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpcmVEZXRlY3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi9maXJlLWRldGVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9nZ2xlU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvdG9nZ2xlc3dpdGNoL3RvZ2dsZXN3aXRjaC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0ZpcmVEZXRlY3Rpb25Db21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0ZpcmVEZXRlY3Rpb25Db21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW0ZpcmVEZXRlY3Rpb25Db21wb25lbnQsIENvbW1vbk1vZHVsZSwgVG9nZ2xlU3dpdGNoTW9kdWxlLCBGb3Jtc01vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIERyb3Bkb3duQ29udGFpbmVyTW9kdWxlLCBBbGVydE1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlRGV0ZWN0aW9uTW9kdWxlIHsgfSJdfQ==
