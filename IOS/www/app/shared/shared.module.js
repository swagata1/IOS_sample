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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var orderby_pipe_1 = require('./pipes/orderby.pipe');
var orderby_fireloss_pipe_1 = require('./pipes/orderby-fireloss.pipe');
var filter_ri_select_pipe_1 = require('./pipes/filter-ri-select.pipe');
var round_pipe_1 = require('./pipes/round.pipe');
var surge_tiv_pipe_1 = require('./pipes/surge-tiv.pipe');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [orderby_pipe_1.OrderByPipe, orderby_fireloss_pipe_1.OrderByFireloss, round_pipe_1.RoundPipe, filter_ri_select_pipe_1.FilterRiSelect, surge_tiv_pipe_1.SurgeTiv],
            exports: [orderby_pipe_1.OrderByPipe, orderby_fireloss_pipe_1.OrderByFireloss, common_1.CommonModule, forms_1.FormsModule, round_pipe_1.RoundPipe, filter_ri_select_pipe_1.FilterRiSelect, surge_tiv_pipe_1.SurgeTiv]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BELHVCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELHNCQUFvQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JELDZCQUFvQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzNELHNDQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3BFLHNDQUErQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQy9ELDJCQUFvQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pELCtCQUF5Qix3QkFBd0IsQ0FBQyxDQUFBO0FBT2xEO0lBQUE7SUFBNEIsQ0FBQztJQUw3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsMEJBQVcsRUFBRSx1Q0FBZSxFQUFFLHNCQUFTLEVBQUUsc0NBQWMsRUFBRSx5QkFBUSxDQUFDO1lBQ2pGLE9BQU8sRUFBRSxDQUFDLDBCQUFXLEVBQUUsdUNBQWUsRUFBRSxxQkFBWSxFQUFFLG1CQUFXLEVBQUUsc0JBQVMsRUFBRSxzQ0FBYyxFQUFFLHlCQUFRLENBQUM7U0FDMUcsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9ICAgICAgICAgZnJvbSAnLi9waXBlcy9vcmRlcmJ5LnBpcGUnO1xyXG5pbXBvcnQgeyBPcmRlckJ5RmlyZWxvc3MgfSAgICAgZnJvbSAnLi9waXBlcy9vcmRlcmJ5LWZpcmVsb3NzLnBpcGUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJSaVNlbGVjdCB9IGZyb20gJy4vcGlwZXMvZmlsdGVyLXJpLXNlbGVjdC5waXBlJztcclxuaW1wb3J0IHsgUm91bmRQaXBlIH0gICAgICAgICAgIGZyb20gJy4vcGlwZXMvcm91bmQucGlwZSc7XHJcbmltcG9ydCB7IFN1cmdlVGl2IH0gZnJvbSAnLi9waXBlcy9zdXJnZS10aXYucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtPcmRlckJ5UGlwZSwgT3JkZXJCeUZpcmVsb3NzLCBSb3VuZFBpcGUsIEZpbHRlclJpU2VsZWN0LCBTdXJnZVRpdl0sXHJcbiAgICBleHBvcnRzOiBbT3JkZXJCeVBpcGUsIE9yZGVyQnlGaXJlbG9zcywgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91bmRQaXBlLCBGaWx0ZXJSaVNlbGVjdCwgU3VyZ2VUaXZdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==
