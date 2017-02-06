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
var accordion_module_1 = require('./accordion/accordion.module');
var alert_module_1 = require('./alert/alert.module');
var collapse_module_1 = require('./collapse/collapse.module');
var dropdown_module_1 = require('./dropdown/dropdown.module');
var modal_module_1 = require('./modal/modal.module');
var progressbar_module_1 = require('./progressbar/progressbar.module');
var tabs_module_1 = require('./tabs/tabs.module');
var tooltip_module_1 = require('./tooltip/tooltip.module');
var components_helper_service_1 = require('./utils/components-helper.service');
var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule = __decorate([
        core_1.NgModule({
            exports: [
                accordion_module_1.AccordionModule, alert_module_1.AlertModule, collapse_module_1.CollapseModule, dropdown_module_1.DropdownModule, modal_module_1.ModalModule, progressbar_module_1.ProgressbarModule, tabs_module_1.TabsModule, tooltip_module_1.TooltipModule
            ],
            providers: [
                { provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2BootstrapModule);
    return Ng2BootstrapModule;
}());
exports.Ng2BootstrapModule = Ng2BootstrapModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQy9ELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELG1DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELDBDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBVXJFO0lBQUE7SUFDQSxDQUFDO0lBVEQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asa0NBQWUsRUFBRSwwQkFBVyxFQUFFLGdDQUFjLEVBQUUsZ0NBQWMsRUFBRSwwQkFBVyxFQUFFLHNDQUFpQixFQUFFLHdCQUFVLEVBQUUsOEJBQWE7YUFDeEg7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsNENBQWdCLEVBQUUsUUFBUSxFQUFFLDRDQUFnQixFQUFDO2FBQ3hEO1NBQ0YsQ0FBQzs7MEJBQUE7SUFFRix5QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksMEJBQWtCLHFCQUM5QixDQUFBIiwiZmlsZSI6InNoYXJlZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICcuL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICcuL21vZGFsL21vZGFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnLi90YWJzL3RhYnMubW9kdWxlJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudHNIZWxwZXIgfSBmcm9tICcuL3V0aWxzL2NvbXBvbmVudHMtaGVscGVyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBBY2NvcmRpb25Nb2R1bGUsIEFsZXJ0TW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIE1vZGFsTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgVGFic01vZHVsZSwgVG9vbHRpcE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogQ29tcG9uZW50c0hlbHBlciwgdXNlQ2xhc3M6IENvbXBvbmVudHNIZWxwZXJ9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyQm9vdHN0cmFwTW9kdWxlIHtcclxufVxyXG4iXX0=
