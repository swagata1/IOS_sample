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
var common_1 = require("@angular/common");
var hazards_summary_component_1 = require('./hazards-summary.component');
var hazards_add_module_1 = require('../hazards-add/hazards-add.module');
var shared_module_1 = require('./../../../shared/shared.module');
var segment_module_1 = require('./../../../../shared/segmentControl/segment.module');
var tooltip_module_1 = require('./../../../../shared/tooltip/tooltip.module');
var HazardsSummaryModule = (function () {
    function HazardsSummaryModule() {
    }
    HazardsSummaryModule = __decorate([
        core_1.NgModule({
            declarations: [hazards_summary_component_1.HazardsSummaryComponent],
            imports: [common_1.CommonModule, segment_module_1.SegmentControlModule, shared_module_1.SharedModule, tooltip_module_1.TooltipModule, hazards_add_module_1.HazardsAddModule],
            exports: [hazards_summary_component_1.HazardsSummaryComponent, segment_module_1.SegmentControlModule, tooltip_module_1.TooltipModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HazardsSummaryModule);
    return HazardsSummaryModule;
}());
exports.HazardsSummaryModule = HazardsSummaryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1zdW1tYXJ5L2hhemFyZHMtc3VtbWFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUUvRCwwQ0FBNkMsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRSxtQ0FBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUV4RSw4QkFBNkMsaUNBQWlDLENBQUMsQ0FBQTtBQUMvRSwrQkFBNkMsb0RBQW9ELENBQUMsQ0FBQTtBQUNsRywrQkFBNkMsNkNBQTZDLENBQUMsQ0FBQTtBQU8zRjtJQUFBO0lBQ0EsQ0FBQztJQU5EO1FBQUMsZUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFLENBQUMsbURBQXVCLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUUscUJBQVksRUFBRSxxQ0FBb0IsRUFBRSw0QkFBWSxFQUFFLDhCQUFhLEVBQUUscUNBQWdCLENBQUM7WUFDMUYsT0FBTyxFQUFFLENBQUMsbURBQXVCLEVBQUUscUNBQW9CLEVBQUUsOEJBQWEsQ0FBQztTQUMxRSxDQUFDOzs0QkFBQTtJQUVGLDJCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSw0QkFBb0IsdUJBQ2hDLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvbmV3LWhhemFyZC9oYXphcmRzLXN1bW1hcnkvaGF6YXJkcy1zdW1tYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhhemFyZHNTdW1tYXJ5Q29tcG9uZW50IH0gICAgICBmcm9tICcuL2hhemFyZHMtc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYXphcmRzQWRkTW9kdWxlIH0gXHRcdFx0ZnJvbSAnLi4vaGF6YXJkcy1hZGQvaGF6YXJkcy1hZGQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9ICAgICAgICAgICAgICAgICBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgU2VnbWVudENvbnRyb2xNb2R1bGUgfSAgICAgICAgIGZyb20gJy4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlZ21lbnRDb250cm9sL3NlZ21lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9ICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vLi4vLi4vLi4vc2hhcmVkL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtIYXphcmRzU3VtbWFyeUNvbXBvbmVudF0sXHJcblx0aW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFNlZ21lbnRDb250cm9sTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFRvb2x0aXBNb2R1bGUsIEhhemFyZHNBZGRNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0hhemFyZHNTdW1tYXJ5Q29tcG9uZW50LCBTZWdtZW50Q29udHJvbE1vZHVsZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhhemFyZHNTdW1tYXJ5TW9kdWxlIHtcclxufSJdfQ==
