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
var common_1 = require("@angular/common");
var ri_add_component_1 = require('./ri-add.component');
var modal_module_1 = require('../../../shared/modal/modal.module');
var dropdown_module_1 = require('../../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('../../../shared/dropdownContainer/dropdown-container.module');
var segment_module_1 = require('../../../shared/segmentControl/segment.module');
var tiny_module_1 = require('../../shared/directives/tiny.module');
var toggleswitch_module_1 = require('../../../shared/toggleswitch/toggleswitch.module');
var datepicker_module_1 = require('../../../shared/datePicker/datepicker.module');
var shared_module_1 = require('./../../shared/shared.module');
var RIAddModule = (function () {
    function RIAddModule() {
    }
    RIAddModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, platform_browser_1.BrowserModule, modal_module_1.ModalModule, common_1.CommonModule, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule, segment_module_1.SegmentControlModule, tiny_module_1.TinyModule, toggleswitch_module_1.ToggleSwitchModule, datepicker_module_1.DatepickerModule, shared_module_1.SharedModule],
            declarations: [ri_add_component_1.RIAddComponent],
            exports: [ri_add_component_1.RIAddComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RIAddModule);
    return RIAddModule;
}());
exports.RIAddModule = RIAddModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1hZGQvcmktYWRkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLGlDQUErQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3BELDZCQUE0QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ2pFLGdDQUErQiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQzFFLDBDQUF3Qyw2REFBNkQsQ0FBQyxDQUFBO0FBQ3RHLCtCQUFxQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3JGLDRCQUEyQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ2pFLG9DQUFtQyxrREFBa0QsQ0FBQyxDQUFBO0FBQ3RGLGtDQUFpQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQ2hGLDhCQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBTzVEO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLGdDQUFhLEVBQUUsMEJBQVcsRUFBRSxxQkFBWSxFQUFFLGdDQUFjLEVBQUUsbURBQXVCLEVBQUUscUNBQW9CLEVBQUUsd0JBQVUsRUFBRSx3Q0FBa0IsRUFBRSxvQ0FBZ0IsRUFBRSw0QkFBWSxDQUFDO1lBQzVMLFlBQVksRUFBRSxDQUFDLGlDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsaUNBQWMsQ0FBQztTQUM1QixDQUFDOzttQkFBQTtJQUVGLGtCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxtQkFBVyxjQUN2QixDQUFBIiwiZmlsZSI6ImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1hZGQvcmktYWRkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFJJQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yaS1hZGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kYWwvbW9kYWwubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRDb250cm9sTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlZ21lbnRDb250cm9sL3NlZ21lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgVGlueU1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3RpbnkubW9kdWxlJztcclxuaW1wb3J0IHsgVG9nZ2xlU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3RvZ2dsZXN3aXRjaC90b2dnbGVzd2l0Y2gubW9kdWxlJztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9kYXRlUGlja2VyL2RhdGVwaWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQnJvd3Nlck1vZHVsZSwgTW9kYWxNb2R1bGUsIENvbW1vbk1vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIERyb3Bkb3duQ29udGFpbmVyTW9kdWxlLCBTZWdtZW50Q29udHJvbE1vZHVsZSwgVGlueU1vZHVsZSwgVG9nZ2xlU3dpdGNoTW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUklBZGRDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1JJQWRkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUklBZGRNb2R1bGUge1xyXG59Il19
