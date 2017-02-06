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
var hazards_component_1 = require("./hazards.component");
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var hazards_routes_1 = require("./hazards.routes");
var tabs_module_1 = require('./../../shared/tabs/tabs.module');
var new_hazards_module_1 = require('./new-hazard/new-hazards.module');
var hazards_ratings_module_1 = require('./ratings/hazards-ratings.module');
var HazardsModule = (function () {
    function HazardsModule() {
    }
    HazardsModule = __decorate([
        core_1.NgModule({
            declarations: [hazards_component_1.HazardsComponent],
            exports: [hazards_component_1.HazardsComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, hazards_routes_1.HazardsRouting, tabs_module_1.TabsModule, new_hazards_module_1.NewHazardsModule, hazards_ratings_module_1.HazardsRatingsModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HazardsModule);
    return HazardsModule;
}());
exports.HazardsModule = HazardsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL2hhemFyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsK0JBQStCLGtCQUFrQixDQUFDLENBQUE7QUFDbEQsNEJBQTJCLGlDQUFpQyxDQUFDLENBQUE7QUFDN0QsbUNBQWlDLGlDQUFpQyxDQUFDLENBQUE7QUFDbkUsdUNBQXFDLGtDQUFrQyxDQUFDLENBQUE7QUFReEU7SUFBQTtJQUE0QixDQUFDO0lBTjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLCtCQUFjLEVBQUUsd0JBQVUsRUFBRSxxQ0FBZ0IsRUFBRSw2Q0FBb0IsQ0FBQztTQUUzRyxDQUFDOztxQkFBQTtJQUMwQixvQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIscUJBQWEsZ0JBQUcsQ0FBQSIsImZpbGUiOiJhcHAvaGF6YXJkcy9oYXphcmRzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhemFyZHNDb21wb25lbnQgfSBmcm9tIFwiLi9oYXphcmRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIYXphcmRzUm91dGluZyB9IGZyb20gXCIuL2hhemFyZHMucm91dGVzXCI7XHJcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC90YWJzL3RhYnMubW9kdWxlJztcclxuaW1wb3J0IHsgTmV3SGF6YXJkc01vZHVsZSB9IGZyb20gJy4vbmV3LWhhemFyZC9uZXctaGF6YXJkcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIYXphcmRzUmF0aW5nc01vZHVsZSB9IGZyb20gJy4vcmF0aW5ncy9oYXphcmRzLXJhdGluZ3MubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtIYXphcmRzQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtIYXphcmRzQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBIYXphcmRzUm91dGluZywgVGFic01vZHVsZSwgTmV3SGF6YXJkc01vZHVsZSwgSGF6YXJkc1JhdGluZ3NNb2R1bGVdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGF6YXJkc01vZHVsZXsgfSJdfQ==
