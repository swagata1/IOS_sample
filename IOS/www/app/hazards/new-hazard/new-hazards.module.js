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
var new_hazards_component_1 = require("./new-hazards.component");
var hazards_summary_module_1 = require("./hazards-summary/hazards-summary.module");
var hazards_add_module_1 = require("./hazards-add/hazards-add.module");
var NewHazardsModule = (function () {
    function NewHazardsModule() {
    }
    NewHazardsModule = __decorate([
        core_1.NgModule({
            declarations: [new_hazards_component_1.NewHazardsComponent],
            exports: [new_hazards_component_1.NewHazardsComponent],
            imports: [forms_1.FormsModule, common_1.CommonModule, hazards_summary_module_1.HazardsSummaryModule, hazards_add_module_1.HazardsAddModule]
        }), 
        __metadata('design:paramtypes', [])
    ], NewHazardsModule);
    return NewHazardsModule;
}());
exports.NewHazardsModule = NewHazardsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvbmV3LWhhemFyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0Msc0NBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQsdUNBQXFDLDBDQUEwQyxDQUFDLENBQUE7QUFDaEYsbUNBQWlDLGtDQUFrQyxDQUFDLENBQUE7QUFPcEU7SUFBQTtJQUFnQyxDQUFDO0lBTGpDO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsMkNBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsMkNBQW1CLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsbUJBQVcsRUFBRSxxQkFBWSxFQUFFLDZDQUFvQixFQUFFLHFDQUFnQixDQUFDO1NBQy9FLENBQUM7O3dCQUFBO0lBQzhCLHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQix3QkFBZ0IsbUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvaGF6YXJkcy9uZXctaGF6YXJkL25ldy1oYXphcmRzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZXdIYXphcmRzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmV3LWhhemFyZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhemFyZHNTdW1tYXJ5TW9kdWxlIH0gZnJvbSBcIi4vaGF6YXJkcy1zdW1tYXJ5L2hhemFyZHMtc3VtbWFyeS5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSGF6YXJkc0FkZE1vZHVsZSB9IGZyb20gXCIuL2hhemFyZHMtYWRkL2hhemFyZHMtYWRkLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW05ld0hhemFyZHNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW05ld0hhemFyZHNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIEhhemFyZHNTdW1tYXJ5TW9kdWxlLCBIYXphcmRzQWRkTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3SGF6YXJkc01vZHVsZSB7IH0iXX0=
