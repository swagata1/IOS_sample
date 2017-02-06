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
var risk_improvements_component_1 = require("./risk-improvements.component");
var common_1 = require("@angular/common");
var risk_improvements_routes_1 = require("./risk-improvements.routes");
var ri_summary_module_1 = require("./ri-summary/ri-summary.module");
var ri_add_module_1 = require('./ri-add/ri-add.module');
var RiskImprovementsModule = (function () {
    function RiskImprovementsModule() {
    }
    RiskImprovementsModule = __decorate([
        core_1.NgModule({
            declarations: [risk_improvements_component_1.RiskImprovementsComponent],
            exports: [risk_improvements_component_1.RiskImprovementsComponent],
            imports: [common_1.CommonModule, risk_improvements_routes_1.RiskImprovementsRouting, ri_summary_module_1.RISummaryModule, ri_add_module_1.RIAddModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RiskImprovementsModule);
    return RiskImprovementsModule;
}());
exports.RiskImprovementsModule = RiskImprovementsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaXNrLWltcHJvdmVtZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQUMxRSx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSxrQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRSw4QkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQU9yRDtJQUFBO0lBRUEsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsdURBQXlCLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsdURBQXlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxrREFBdUIsRUFBRSxtQ0FBZSxFQUFFLDJCQUFXLENBQUM7U0FDakYsQ0FBQzs7OEJBQUE7SUFHRiw2QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksOEJBQXNCLHlCQUVsQyxDQUFBIiwiZmlsZSI6ImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaXNrLWltcHJvdmVtZW50cy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBweWFkYXYgb24gMTAvMzEvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSaXNrSW1wcm92ZW1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vcmlzay1pbXByb3ZlbWVudHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUmlza0ltcHJvdmVtZW50c1JvdXRpbmcgfSBmcm9tIFwiLi9yaXNrLWltcHJvdmVtZW50cy5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgUklTdW1tYXJ5TW9kdWxlIH0gZnJvbSBcIi4vcmktc3VtbWFyeS9yaS1zdW1tYXJ5Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSSUFkZE1vZHVsZSB9IGZyb20gJy4vcmktYWRkL3JpLWFkZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1Jpc2tJbXByb3ZlbWVudHNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1Jpc2tJbXByb3ZlbWVudHNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmlza0ltcHJvdmVtZW50c1JvdXRpbmcsIFJJU3VtbWFyeU1vZHVsZSwgUklBZGRNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaXNrSW1wcm92ZW1lbnRzTW9kdWxlIHsgXHJcbiAgICBcclxufSJdfQ==
