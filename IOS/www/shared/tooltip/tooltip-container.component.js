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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var position_1 = require('../position');
var tooltip_options_class_1 = require('./tooltip-options.class');
var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(element, cdr, options) {
        this.top = '-1000px';
        this.left = '-1000px';
        this.display = 'block';
        this.element = element;
        this.cdr = cdr;
        Object.assign(this, options);
        this.classMap = { 'in': false, 'fade': false };
        this.classMap[options.placement] = true;
        this.classMap['isc-tooltip-' + options.placement] = true;
    }
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        var p = position_1.positionService
            .positionElements(this.hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, this.appendToBody);
        this.top = p.top + 'px';
        this.left = p.left + 'px';
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        this.cdr.detectChanges();
    };
    Object.defineProperty(TooltipContainerComponent.prototype, "isTemplate", {
        get: function () {
            return this.htmlContent instanceof core_1.TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent = __decorate([
        core_1.Component({
            selector: 'tooltip-container',
            template: "<div class=\"isc-tooltip\" role=\"tooltip\"\n     [ngStyle]=\"{top: top, left: left, display: display}\"\n     [ngClass]=\"classMap\">\n      <div class=\"isc-tooltip-arrow\"></div>\n      <div class=\"isc-tooltip-inner\"\n           *ngIf=\"htmlContent && !isTemplate\" \n           innerHtml=\"{{htmlContent}}\">\n      </div>\n      <div class=\"isc-tooltip-inner\"\n           *ngIf=\"htmlContent && isTemplate\">\n        <template [ngTemplateOutlet]=\"htmlContent\"\n                  [ngOutletContext]=\"{model: context}\">\n        </template>\n      </div>\n      <div class=\"isc-tooltip-inner\"\n           *ngIf=\"content\">\n        {{content}}\n      </div>\n    </div>"
        }),
        __param(2, core_1.Inject(tooltip_options_class_1.TooltipOptions)), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef, tooltip_options_class_1.TooltipOptions])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());
exports.TooltipContainerComponent = TooltipContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBRU8sZUFBZSxDQUFDLENBQUE7QUFFdkIseUJBQWdDLGFBQWEsQ0FBQyxDQUFBO0FBQzlDLHNDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBeUJ6RDtJQW9CRSxtQ0FBbUIsT0FBa0IsRUFDbEIsR0FBcUIsRUFDRyxPQUFzQjtRQW5CMUQsUUFBRyxHQUFVLFNBQVMsQ0FBQztRQUN2QixTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLFlBQU8sR0FBVSxPQUFPLENBQUM7UUFrQjlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFFTSxtREFBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLDBCQUFlO2FBQ3BCLGdCQUFnQixDQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEMsQ0FBQztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFXLGlEQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksa0JBQVcsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQTVFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBRTdCLFFBQVEsRUFBRSw2cUJBa0JEO1NBQ1YsQ0FBQzttQkF1Qm9CLGFBQU0sQ0FBQyxzQ0FBYyxDQUFDOztpQ0F2QjFDO0lBdURGLGdDQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSxpQ0FBeUIsNEJBc0RyQyxDQUFBIiwiZmlsZSI6InNoYXJlZC90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBUb29sdGlwT3B0aW9ucyB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zLmNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9vbHRpcC1jb250YWluZXInLFxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlzYy10b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIlxyXG4gICAgIFtuZ1N0eWxlXT1cInt0b3A6IHRvcCwgbGVmdDogbGVmdCwgZGlzcGxheTogZGlzcGxheX1cIlxyXG4gICAgIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpc2MtdG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXNjLXRvb2x0aXAtaW5uZXJcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiaHRtbENvbnRlbnQgJiYgIWlzVGVtcGxhdGVcIiBcclxuICAgICAgICAgICBpbm5lckh0bWw9XCJ7e2h0bWxDb250ZW50fX1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpc2MtdG9vbHRpcC1pbm5lclwiXHJcbiAgICAgICAgICAgKm5nSWY9XCJodG1sQ29udGVudCAmJiBpc1RlbXBsYXRlXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImh0bWxDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7bW9kZWw6IGNvbnRleHR9XCI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpc2MtdG9vbHRpcC1pbm5lclwiXHJcbiAgICAgICAgICAgKm5nSWY9XCJjb250ZW50XCI+XHJcbiAgICAgICAge3tjb250ZW50fX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICBwdWJsaWMgY2xhc3NNYXA6YW55O1xyXG4gIHB1YmxpYyB0b3A6c3RyaW5nID0gJy0xMDAwcHgnO1xyXG4gIHB1YmxpYyBsZWZ0OnN0cmluZyA9ICctMTAwMHB4JztcclxuICBwdWJsaWMgZGlzcGxheTpzdHJpbmcgPSAnYmxvY2snO1xyXG4gIHB1YmxpYyBjb250ZW50OnN0cmluZztcclxuICBwdWJsaWMgaHRtbENvbnRlbnQ6c3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuICBwcml2YXRlIHBsYWNlbWVudDpzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwb3B1cENsYXNzOnN0cmluZztcclxuICBwcml2YXRlIGFuaW1hdGlvbjpib29sZWFuO1xyXG4gIHByaXZhdGUgaXNPcGVuOmJvb2xlYW47XHJcbiAgcHJpdmF0ZSBhcHBlbmRUb0JvZHk6Ym9vbGVhbjtcclxuICBwcml2YXRlIGhvc3RFbDpFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgY29udGV4dDphbnk7XHJcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuICBwcml2YXRlIGVsZW1lbnQ6RWxlbWVudFJlZjtcclxuICBwcml2YXRlIGNkcjpDaGFuZ2VEZXRlY3RvclJlZjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICBASW5qZWN0KFRvb2x0aXBPcHRpb25zKSBvcHRpb25zOlRvb2x0aXBPcHRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5jZHIgPSBjZHI7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHsnaW4nOiBmYWxzZSwgJ2ZhZGUnOiBmYWxzZX07XHJcbiAgICB0aGlzLmNsYXNzTWFwW29wdGlvbnMucGxhY2VtZW50XSA9IHRydWU7XHJcbiAgICB0aGlzLmNsYXNzTWFwWydpc2MtdG9vbHRpcC0nICsgb3B0aW9ucy5wbGFjZW1lbnRdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcclxuICAgIGxldCBwID0gcG9zaXRpb25TZXJ2aWNlXHJcbiAgICAgIC5wb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgICAgIHRoaXMuaG9zdEVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sXHJcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQsIHRoaXMuYXBwZW5kVG9Cb2R5KTtcclxuICAgIHRoaXMudG9wID0gcC50b3AgKyAncHgnO1xyXG4gICAgdGhpcy5sZWZ0ID0gcC5sZWZ0ICsgJ3B4JztcclxuICAgIHRoaXMuY2xhc3NNYXAuaW4gPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucG9wdXBDbGFzcykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMucG9wdXBDbGFzc10gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNUZW1wbGF0ZSgpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHRtbENvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcbn1cclxuIl19
