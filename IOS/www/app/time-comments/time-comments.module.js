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
var time_comments_component_1 = require("./time-comments.component");
var common_1 = require("@angular/common");
var time_comments_routes_1 = require("./time-comments.routes");
var dropdown_module_1 = require('../../shared/dropdown/dropdown.module');
var dropdown_container_module_1 = require('../../shared/dropdownContainer/dropdown-container.module');
var forms_1 = require('@angular/forms');
var tooltip_module_1 = require('./../../shared/tooltip/tooltip.module');
var ri_summary_module_1 = require("../risk-improvements/ri-summary/ri-summary.module");
var tiny_module_1 = require('../shared/directives/tiny.module');
var TimeAndCommentsModule = (function () {
    function TimeAndCommentsModule() {
    }
    TimeAndCommentsModule = __decorate([
        core_1.NgModule({
            declarations: [time_comments_component_1.TimeAndCommentsComponent],
            exports: [time_comments_component_1.TimeAndCommentsComponent],
            imports: [common_1.CommonModule, time_comments_routes_1.TimeAndCommentsRouting, dropdown_module_1.DropdownModule, dropdown_container_module_1.DropdownContainerModule, forms_1.FormsModule, tooltip_module_1.TooltipModule, ri_summary_module_1.RISummaryModule, tiny_module_1.TinyModule]
        }), 
        __metadata('design:paramtypes', [])
    ], TimeAndCommentsModule);
    return TimeAndCommentsModule;
}());
exports.TimeAndCommentsModule = TimeAndCommentsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90aW1lLWNvbW1lbnRzL3RpbWUtY29tbWVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsd0NBQXVDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MscUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsZ0NBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsMENBQXdDLDBEQUEwRCxDQUFDLENBQUE7QUFDbkcsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsK0JBQThCLHVDQUF1QyxDQUFDLENBQUE7QUFDdEUsa0NBQWdDLG1EQUFtRCxDQUFDLENBQUE7QUFDcEYsNEJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFPOUQ7SUFBQTtJQUVBLENBQUM7SUFQRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLGtEQUF3QixDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLGtEQUF3QixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNkNBQXNCLEVBQUUsZ0NBQWMsRUFBRSxtREFBdUIsRUFBRSxtQkFBVyxFQUFFLDhCQUFhLEVBQUUsbUNBQWUsRUFBRSx3QkFBVSxDQUFFO1NBQ3JKLENBQUM7OzZCQUFBO0lBR0YsNEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDZCQUFxQix3QkFFakMsQ0FBQSIsImZpbGUiOiJhcHAvdGltZS1jb21tZW50cy90aW1lLWNvbW1lbnRzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VGltZUFuZENvbW1lbnRzQ29tcG9uZW50fSBmcm9tIFwiLi90aW1lLWNvbW1lbnRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1RpbWVBbmRDb21tZW50c1JvdXRpbmd9IGZyb20gXCIuL3RpbWUtY29tbWVudHMucm91dGVzXCI7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJy4uLy4uL3NoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgUklTdW1tYXJ5TW9kdWxlIH0gZnJvbSBcIi4uL3Jpc2staW1wcm92ZW1lbnRzL3JpLXN1bW1hcnkvcmktc3VtbWFyeS5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVGlueU1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9kaXJlY3RpdmVzL3RpbnkubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUaW1lQW5kQ29tbWVudHNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1RpbWVBbmRDb21tZW50c0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUaW1lQW5kQ29tbWVudHNSb3V0aW5nLCBEcm9wZG93bk1vZHVsZSwgRHJvcGRvd25Db250YWluZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBSSVN1bW1hcnlNb2R1bGUsIFRpbnlNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUFuZENvbW1lbnRzTW9kdWxlIHtcclxuICAgIFxyXG59Il19
