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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var bar_component_1 = require('./bar.component');
var progress_directive_1 = require('./progress.directive');
var progressbar_component_1 = require('./progressbar.component');
var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [progress_directive_1.ProgressDirective, bar_component_1.BarComponent, progressbar_component_1.ProgressbarComponent],
            exports: [progress_directive_1.ProgressDirective, bar_component_1.BarComponent, progressbar_component_1.ProgressbarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressbarModule);
    return ProgressbarModule;
}());
exports.ProgressbarModule = ProgressbarModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQU8vRDtJQUFBO0lBQ0EsQ0FBQztJQU5EO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSw0QkFBWSxFQUFFLDRDQUFvQixDQUFDO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixFQUFFLDRCQUFZLEVBQUUsNENBQW9CLENBQUM7U0FDakUsQ0FBQzs7eUJBQUE7SUFFRix3QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFkseUJBQWlCLG9CQUM3QixDQUFBIiwiZmlsZSI6InNoYXJlZC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0RpcmVjdGl2ZSwgQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Byb2dyZXNzRGlyZWN0aXZlLCBCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJNb2R1bGUge1xyXG59XHJcbiJdfQ==
