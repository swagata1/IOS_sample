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
var tooltip_container_component_1 = require('./tooltip-container.component');
var tooltip_options_class_1 = require('./tooltip-options.class');
var components_helper_service_1 = require('../utils/components-helper.service');
var TooltipDirective = (function () {
    function TooltipDirective(viewContainerRef, componentsHelper) {
        this.placement = 'top';
        this.enable = true;
        this.animation = true;
        this.delay = 0;
        this.tooltipStateChanged = new core_1.EventEmitter();
        this.visible = false;
        this.viewContainerRef = viewContainerRef;
        this.componentsHelper = componentsHelper;
    }
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.visible || !this.enable || this.delayTimeoutId) {
            return;
        }
        var showTooltip = function () {
            _this.visible = true;
            var options = new tooltip_options_class_1.TooltipOptions({
                content: _this.content,
                htmlContent: _this.htmlContent,
                placement: _this.placement,
                animation: _this.animation,
                hostEl: _this.viewContainerRef.element,
                popupClass: _this.popupClass,
                context: _this.tooltipContext
            });
            var binding = core_1.ReflectiveInjector.resolve([
                { provide: tooltip_options_class_1.TooltipOptions, useValue: options }
            ]);
            _this.tooltip = _this.componentsHelper
                .appendNextToLocation(tooltip_container_component_1.TooltipContainerComponent, _this.viewContainerRef, binding);
            _this.triggerStateChanged();
        };
        if (this.delay) {
            this.delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    TooltipDirective.prototype.hide = function () {
        if (this.delayTimeoutId) {
            clearTimeout(this.delayTimeoutId);
            this.delayTimeoutId = undefined;
        }
        if (!this.visible) {
            return;
        }
        this.visible = false;
        this.tooltip.destroy();
        this.triggerStateChanged();
    };
    TooltipDirective.prototype.triggerStateChanged = function () {
        this.tooltipStateChanged.emit(this.visible);
    };
    __decorate([
        core_1.Input('tooltip'), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input('tooltipHtml'), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "htmlContent", void 0);
    __decorate([
        core_1.Input('tooltipPlacement'), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        core_1.Input('tooltipIsOpen'), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "isOpen", void 0);
    __decorate([
        core_1.Input('tooltipEnable'), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "enable", void 0);
    __decorate([
        core_1.Input('tooltipAnimation'), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "animation", void 0);
    __decorate([
        core_1.Input('tooltipAppendToBody'), 
        __metadata('design:type', Boolean)
    ], TooltipDirective.prototype, "appendToBody", void 0);
    __decorate([
        core_1.Input('tooltipClass'), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "popupClass", void 0);
    __decorate([
        core_1.Input('tooltipContext'), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "tooltipContext", void 0);
    __decorate([
        core_1.Input('tooltipPopupDelay'), 
        __metadata('design:type', Number)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "tooltipStateChanged", void 0);
    __decorate([
        core_1.HostListener('focusin'),
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TooltipDirective.prototype, "show", null);
    __decorate([
        core_1.HostListener('focusout'),
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TooltipDirective.prototype, "hide", null);
    TooltipDirective = __decorate([
        core_1.Directive({
            selector: '[tooltip], [tooltipHtml]',
            exportAs: 'bs-tooltip'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, components_helper_service_1.ComponentsHelper])
    ], TooltipDirective);
    return TooltipDirective;
}());
exports.TooltipDirective = TooltipDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFVTyxlQUFlLENBQUMsQ0FBQTtBQUV2Qiw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQUMxRSxzQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCwwQ0FBaUMsb0NBQW9DLENBQUMsQ0FBQTtBQVF0RTtJQXdCRSwwQkFBbUIsZ0JBQWtDLEVBQ2xDLGdCQUFrQztRQXJCbkIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUU3QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFJekIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUdwQyx3QkFBbUIsR0FBMEIsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFLbEYsWUFBTyxHQUFZLEtBQUssQ0FBQztRQU8vQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzNDLENBQUM7SUFNTSwrQkFBSSxHQUFYO1FBQUEsaUJBa0NDO1FBakNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFNLFdBQVcsR0FBRztZQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLHNDQUFjLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztnQkFDckIsV0FBVyxFQUFFLEtBQUksQ0FBQyxXQUFXO2dCQUM3QixTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVM7Z0JBQ3pCLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUztnQkFDekIsTUFBTSxFQUFF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bnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwT3B0aW9ucyB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50c0hlbHBlciB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudHMtaGVscGVyLnNlcnZpY2UnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0sIFt0b29sdGlwSHRtbF0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtdG9vbHRpcCdcclxufSlcclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXAnKSBwdWJsaWMgY29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgndG9vbHRpcEh0bWwnKSBwdWJsaWMgaHRtbENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JykgcHVibGljIHBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XHJcbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJykgcHVibGljIGlzT3BlbjogYm9vbGVhbjtcclxuICBASW5wdXQoJ3Rvb2x0aXBFbmFibGUnKSBwdWJsaWMgZW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoJ3Rvb2x0aXBBbmltYXRpb24nKSBwdWJsaWMgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJykgcHVibGljIHBvcHVwQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoJ3Rvb2x0aXBDb250ZXh0JykgcHVibGljIHRvb2x0aXBDb250ZXh0OiBhbnk7XHJcbiAgQElucHV0KCd0b29sdGlwUG9wdXBEZWxheScpIHB1YmxpYyBkZWxheTogbnVtYmVyID0gMDtcclxuICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdG9vbHRpcFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICBwdWJsaWMgY29tcG9uZW50c0hlbHBlcjogQ29tcG9uZW50c0hlbHBlcjtcclxuXHJcbiAgcHJpdmF0ZSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB0b29sdGlwOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBkZWxheVRpbWVvdXRJZDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50c0hlbHBlcjogQ29tcG9uZW50c0hlbHBlcikge1xyXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHRoaXMuY29tcG9uZW50c0hlbHBlciA9IGNvbXBvbmVudHNIZWxwZXI7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBmaWx0ZXIgdHJpZ2dlcnNcclxuICAvLyBwYXJhbXM6IGV2ZW50LCB0YXJnZXRcclxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGUgfHwgIXRoaXMuZW5hYmxlIHx8IHRoaXMuZGVsYXlUaW1lb3V0SWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IG5ldyBUb29sdGlwT3B0aW9ucyh7XHJcbiAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxyXG4gICAgICAgIGh0bWxDb250ZW50OiB0aGlzLmh0bWxDb250ZW50LFxyXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcclxuICAgICAgICBob3N0RWw6IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50LFxyXG4gICAgICAgIHBvcHVwQ2xhc3M6IHRoaXMucG9wdXBDbGFzcyxcclxuICAgICAgICBjb250ZXh0OiB0aGlzLnRvb2x0aXBDb250ZXh0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJpbmRpbmcgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShbXHJcbiAgICAgICAge3Byb3ZpZGU6IFRvb2x0aXBPcHRpb25zLCB1c2VWYWx1ZTogb3B0aW9uc31cclxuICAgICAgXSk7XHJcblxyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLmNvbXBvbmVudHNIZWxwZXJcclxuICAgICAgICAuYXBwZW5kTmV4dFRvTG9jYXRpb24oVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgIGJpbmRpbmcpO1xyXG5cclxuICAgICAgdGhpcy50cmlnZ2VyU3RhdGVDaGFuZ2VkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRlbGF5KSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHsgc2hvd1Rvb2x0aXAoKTsgfSwgdGhpcy5kZWxheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9vbHRpcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcGFyYW1zIGV2ZW50LCB0YXJnZXRcclxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXHJcbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVvdXRJZCk7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudHJpZ2dlclN0YXRlQ2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmlnZ2VyU3RhdGVDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwU3RhdGVDaGFuZ2VkLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcbn1cclxuIl19
