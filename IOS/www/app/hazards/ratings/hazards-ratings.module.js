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
var hazards_ratings_component_1 = require("./hazards-ratings.component");
var dropdown_container_module_1 = require('../../../shared/dropdownContainer/dropdown-container.module');
var HazardsRatingsModule = (function () {
    function HazardsRatingsModule() {
    }
    HazardsRatingsModule = __decorate([
        core_1.NgModule({
            declarations: [hazards_ratings_component_1.HazardsRatingsComponent],
            exports: [hazards_ratings_component_1.HazardsRatingsComponent],
            imports: [forms_1.FormsModule, common_1.CommonModule, dropdown_container_module_1.DropdownContainerModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HazardsRatingsModule);
    return HazardsRatingsModule;
}());
exports.HazardsRatingsModule = HazardsRatingsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL3JhdGluZ3MvaGF6YXJkcy1yYXRpbmdzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDBDQUF3Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RFLDBDQUF3Qyw2REFBNkQsQ0FBQyxDQUFBO0FBT3RHO0lBQUE7SUFBb0MsQ0FBQztJQUxyQztRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLG1EQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLG1EQUF1QixDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLG1CQUFXLEVBQUUscUJBQVksRUFBRSxtREFBdUIsQ0FBQztTQUNoRSxDQUFDOzs0QkFBQTtJQUNrQywyQkFBQztBQUFELENBQXBDLEFBQXFDLElBQUE7QUFBeEIsNEJBQW9CLHVCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hhemFyZHMvcmF0aW5ncy9oYXphcmRzLXJhdGluZ3MubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEhhemFyZHNSYXRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vaGF6YXJkcy1yYXRpbmdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtIYXphcmRzUmF0aW5nc0NvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbSGF6YXJkc1JhdGluZ3NDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIERyb3Bkb3duQ29udGFpbmVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGF6YXJkc1JhdGluZ3NNb2R1bGUgeyB9Il19
