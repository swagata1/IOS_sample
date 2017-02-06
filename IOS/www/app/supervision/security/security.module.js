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
var security_component_1 = require("./security.component");
var toggleswitch_module_1 = require('./../../../shared/toggleswitch/toggleswitch.module');
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var dropdown_module_1 = require('./../../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('./../../../shared/dropdownContainer/dropdown-container.module');
var alert_module_1 = require("./../../../shared/alert/alert.module");
var segment_module_1 = require('../../../shared/segmentControl/segment.module');
var tiny_module_1 = require('../../shared/directives/tiny.module');
var SecurityModule = (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        core_1.NgModule({
            declarations: [security_component_1.SecurityComponent],
            exports: [security_component_1.SecurityComponent],
            imports: [common_1.CommonModule, toggleswitch_module_1.ToggleSwitchModule, forms_1.FormsModule, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule, alert_module_1.AlertModule, segment_module_1.SegmentControlModule, tiny_module_1.TinyModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SecurityModule);
    return SecurityModule;
}());
exports.SecurityModule = SecurityModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdXBlcnZpc2lvbi9zZWN1cml0eS9zZWN1cml0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxvQ0FBbUMsb0RBQW9ELENBQUMsQ0FBQTtBQUN4Rix1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBK0IsNENBQTRDLENBQUMsQ0FBQTtBQUM1RSwwQ0FBd0MsK0RBQStELENBQUMsQ0FBQTtBQUN4Ryw2QkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSwrQkFBcUMsK0NBQStDLENBQUMsQ0FBQTtBQUNyRiw0QkFBMkIscUNBQXFDLENBQUMsQ0FBQTtBQVFqRTtJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHdDQUFrQixFQUFFLG1CQUFXLEVBQUUsZ0NBQWMsRUFBRSxtREFBdUIsRUFBRSwwQkFBVyxFQUFFLHFDQUFvQixFQUFFLHdCQUFVLENBQUM7U0FDbkosQ0FBQzs7c0JBQUE7SUFFNEIscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHNCQUFjLGlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3N1cGVydmlzaW9uL3NlY3VyaXR5L3NlY3VyaXR5Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2VjdXJpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9zZWN1cml0eS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9nZ2xlU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvdG9nZ2xlc3dpdGNoL3RvZ2dsZXN3aXRjaC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSBcIi4vLi4vLi4vLi4vc2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWdtZW50Q29udHJvbE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZWdtZW50Q29udHJvbC9zZWdtZW50Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFRpbnlNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy90aW55Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbU2VjdXJpdHlDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1NlY3VyaXR5Q29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRvZ2dsZVN3aXRjaE1vZHVsZSwgRm9ybXNNb2R1bGUsIERyb3Bkb3duTW9kdWxlLCBEcm9wZG93bkNvbnRhaW5lck1vZHVsZSwgQWxlcnRNb2R1bGUsIFNlZ21lbnRDb250cm9sTW9kdWxlLCBUaW55TW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5TW9kdWxlIHsgfSJdfQ==
