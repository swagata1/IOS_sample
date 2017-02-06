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
var graphs_component_1 = require("./graphs.component");
var ng2_nvd3_1 = require('ng2-nvd3');
var GraphsModule = (function () {
    function GraphsModule() {
    }
    GraphsModule = __decorate([
        core_1.NgModule({
            declarations: [graphs_component_1.GraphsComponent, ng2_nvd3_1.nvD3],
            exports: [graphs_component_1.GraphsComponent],
            imports: [common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphsModule);
    return GraphsModule;
}());
exports.GraphsModule = GraphsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ncmFwaHMvZ3JhcGhzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHlCQUFxQixVQUFVLENBQUMsQ0FBQTtBQVNoQztJQUFBO0lBRUEsQ0FBQztJQVREO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsa0NBQWUsRUFBRSxlQUFJLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBRzFCLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwL2dyYXBocy9ncmFwaHMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoc0NvbXBvbmVudCB9IGZyb20gXCIuL2dyYXBocy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgbnZEMyB9IGZyb20gJ25nMi1udmQzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtHcmFwaHNDb21wb25lbnQsIG52RDNdLFxyXG4gICAgZXhwb3J0czogW0dyYXBoc0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxyXG4gICAgLy9pbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPY2N1cGFuY3lSb3V0aW5nLCBUb2dnbGVTd2l0Y2hNb2R1bGUsIEZvcm1zTW9kdWxlLCBEcm9wZG93bk1vZHVsZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmFwaHNNb2R1bGUge1xyXG4gICAgXHJcbn0iXX0=
