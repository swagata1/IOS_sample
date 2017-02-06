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
var ri_summary_component_1 = require("./ri-summary.component");
var ri_add_module_1 = require('./../ri-add/ri-add.module');
var shared_module_1 = require('./../../shared/shared.module');
var RISummaryModule = (function () {
    function RISummaryModule() {
    }
    RISummaryModule = __decorate([
        core_1.NgModule({
            declarations: [ri_summary_component_1.RISummaryComponent],
            exports: [ri_summary_component_1.RISummaryComponent],
            imports: [common_1.CommonModule, ri_add_module_1.RIAddModule, shared_module_1.SharedModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RISummaryModule);
    return RISummaryModule;
}());
exports.RISummaryModule = RISummaryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1zdW1tYXJ5L3JpLXN1bW1hcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MscUNBQW1DLHdCQUF3QixDQUFDLENBQUE7QUFDNUQsOEJBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsOEJBQTZCLDhCQUE4QixDQUFDLENBQUE7QUFPNUQ7SUFBQTtJQUErQixDQUFDO0lBTGhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSwyQkFBVyxFQUFFLDRCQUFZLENBQUM7U0FDckQsQ0FBQzs7dUJBQUE7SUFDNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3Jpc2staW1wcm92ZW1lbnRzL3JpLXN1bW1hcnkvcmktc3VtbWFyeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBweWFkYXYgb24gMTEvMDEvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFJJU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gXCIuL3JpLXN1bW1hcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJJQWRkTW9kdWxlIH0gZnJvbSAnLi8uLi9yaS1hZGQvcmktYWRkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1JJU3VtbWFyeUNvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbUklTdW1tYXJ5Q29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJJQWRkTW9kdWxlLCBTaGFyZWRNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSSVN1bW1hcnlNb2R1bGUgeyB9Il19
