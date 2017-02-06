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
var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this.collapsed = new core_1.EventEmitter(false);
        this.expanded = new core_1.EventEmitter(false);
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this._el = _el;
        this._renderer = _renderer;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    CollapseDirective.prototype.ngOnInit = function () {
    };
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CollapseDirective.prototype, "collapsed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CollapseDirective.prototype, "expanded", void 0);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', String)
    ], CollapseDirective.prototype, "display", void 0);
    __decorate([
        core_1.HostBinding('class.in'),
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Boolean)
    ], CollapseDirective.prototype, "isExpanded", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-hidden'), 
        __metadata('design:type', Boolean)
    ], CollapseDirective.prototype, "isCollapsed", void 0);
    __decorate([
        core_1.HostBinding('class.collapse'), 
        __metadata('design:type', Boolean)
    ], CollapseDirective.prototype, "isCollapse", void 0);
    __decorate([
        core_1.HostBinding('class.collapsing'), 
        __metadata('design:type', Boolean)
    ], CollapseDirective.prototype, "isCollapsing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], CollapseDirective.prototype, "collapse", null);
    CollapseDirective = __decorate([
        core_1.Directive({ selector: '[collapse]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], CollapseDirective);
    return CollapseDirective;
}());
exports.CollapseDirective = CollapseDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUFrRyxlQUFlLENBQUMsQ0FBQTtBQTJCbEg7SUF3Q0UsMkJBQTZDLEdBQWMsRUFBRSxTQUFrQjtRQXRDOUQsY0FBUyxHQUFxQixJQUFJLG1CQUFZLENBQU0sS0FBSyxDQUFDLENBQUM7UUFDM0QsYUFBUSxHQUFxQixJQUFJLG1CQUFZLENBQU0sS0FBSyxDQUFDLENBQUM7UUFTcEUsZUFBVSxHQUFXLElBQUksQ0FBQztRQUcxQixnQkFBVyxHQUFXLEtBQUssQ0FBQztRQUc1QixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBcUJsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFsQkQsc0JBQVcsdUNBQVE7YUFLbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO2FBUEQsVUFBb0IsS0FBYTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFpQk0sb0NBQVEsR0FBZjtJQUdBLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBRUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUF5QjVCLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQXNCM0IsQ0FBQztJQW5JRDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFJVDtRQUFDLGtCQUFXLENBQUMsZUFBZSxDQUFDOztzREFBQTtJQUc3QjtRQUFDLGtCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLGtCQUFXLENBQUMsb0JBQW9CLENBQUM7O3lEQUFBO0lBR2xDO1FBQUMsa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7MERBQUE7SUFHaEM7UUFBQyxrQkFBVyxDQUFDLGdCQUFnQixDQUFDOzt5REFBQTtJQUc5QjtRQUFDLGtCQUFXLENBQUMsa0JBQWtCLENBQUM7OzJEQUFBO0lBS2hDO1FBQUMsWUFBSyxFQUFFOzs7cURBQUE7SUExQlY7UUFBQyxnQkFBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDOzt5QkFBQTtJQXVJcEMsd0JBQUM7QUFBRCxDQXRJQSxBQXNJQyxJQUFBO0FBdElZLHlCQUFpQixvQkFzSTdCLENBQUEiLCJmaWxlIjoic2hhcmVkL2NvbGxhcHNlL2NvbGxhcHNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZJWDogaW4gb3JkZXIgdG8gdXBkYXRlIHRvIHJjLjEgaGFkIHRvIGRpc2FibGUgYW5pbWF0aW9uLCBzb3JyeVxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcclxuXHJcbi8vIGltcG9ydCB7YW5pbWF0ZSwgYW5pbWF0aW9uLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLypARGlyZWN0aXZlKHtcclxuIHNlbGVjdG9yOiAnW2NvbGxhcHNlXScsXHJcbiAvLyB0ZW1wbGF0ZVVybDogJ2FwcC9wYW5lbC5odG1sJyxcclxuIC8vIHN0eWxlVXJsczogWydhcHAvcGFuZWwuY3NzJ10sXHJcbiBhbmltYXRpb25zOiBbXHJcbiBhbmltYXRpb24oJ2FjdGl2ZScsIFtcclxuIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpLFxyXG4gc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHsgaGVpZ2h0OiAwIH0pKSxcclxuIHN0YXRlKCdvcGVuJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXHJcbiB0cmFuc2l0aW9uKCd2b2lkID0+IGNsb3NlZCcsIFsgYW5pbWF0ZSgwKSBdKSxcclxuIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgWyBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcpIF0pLFxyXG4gdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JykgXSlcclxuIF0pXHJcbiBdXHJcbiB9KSovXHJcbi8vIGZpeDogcmVwbGFjZSB3aXRoIC8vICdAYW5ndWxhci9hbmltYXRlJztcclxuLy8gd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy81OTg0IHdpbGwgYmUgZml4ZWRcclxuXHJcbi8vIFRPRE86IHJlbW92ZSBFbGVtZW50UmVmXHJcbi8vIFRPRE86IGFkZCBvbiBjaGFuZ2VcclxuLy8gVE9ETzogIzU3NiBhZGQgY2FsbGJhY2tzOiBleHBhbmRpbmcsIGNvbGxhcHNpbmcgYWZ0ZXIgYWRkaW5nIGFuaW1hdGlvblxyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjb2xsYXBzZV0nfSlcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBwcm90ZWN0ZWQgYW5pbWF0aW9uOmFueTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNvbGxhcHNlZDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBleHBhbmRlZDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XHJcbiAgLy8gc3R5bGVcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXHJcbiAgLy8gcHJvdGVjdGVkIGhlaWdodDpzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcclxuICBwdWJsaWMgZGlzcGxheTpzdHJpbmc7XHJcbiAgLy8gc2hvd25cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluJylcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXHJcbiAgcHVibGljIGlzRXhwYW5kZWQ6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLy8gaGlkZGVuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcclxuICBwdWJsaWMgaXNDb2xsYXBzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIHN0YWxlIHN0YXRlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpXHJcbiAgcHVibGljIGlzQ29sbGFwc2U6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLy8gYW5pbWF0aW9uIHN0YXRlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzaW5nJylcclxuICBwdWJsaWMgaXNDb2xsYXBzaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXIgPSA1MDA7IC8vIER1cmF0aW9uIGluIG1zXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBjb2xsYXBzZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNvbGxhcHNlKCk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJvdGVjdGVkIG9wZW46IGJvb2xlYW47XHJcbiAgLy8gcHJvdGVjdGVkIF9hYjpBbmltYXRpb25CdWlsZGVyO1xyXG4gIHByb3RlY3RlZCBfZWw6RWxlbWVudFJlZjtcclxuICBwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoLypfYWI6QW5pbWF0aW9uQnVpbGRlciwgKi9fZWw6RWxlbWVudFJlZiwgX3JlbmRlcmVyOlJlbmRlcmVyKSB7XHJcbiAgICAvLyB0aGlzLl9hYiA9IF9hYjtcclxuICAgIHRoaXMuX2VsID0gX2VsO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgIC8vIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5fYWIuY3NzKCk7XHJcbiAgICAvLyB0aGlzLmFuaW1hdGlvbi5zZXREdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XHJcbiAgICAvLyB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKTp2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAvKiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgLy8gdGhpcy5oZWlnaHQgPSAnMCc7XHJcbiAgICAgLy8gdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAgICAvLyB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG4gICAgIHRoaXMuYW5pbWF0aW9uXHJcbiAgICAgLnNldEZyb21TdHlsZXMoe1xyXG4gICAgIGhlaWdodDogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnXHJcbiAgICAgfSlcclxuICAgICAuc2V0VG9TdHlsZXMoe1xyXG4gICAgIGhlaWdodDogJzAnLFxyXG4gICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgIH0pO1xyXG5cclxuICAgICB0aGlzLmFuaW1hdGlvbi5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KVxyXG4gICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICBpZiAodGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgPT09IDApIHtcclxuICAgICB0aGlzLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgfVxyXG5cclxuICAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcbiAgICAgfSk7XHJcbiAgICAgfSwgNCk7Ki9cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KCk6dm9pZCB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyB0aGlzLmhlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XHJcbiAgICAvKnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgIC8vIHRoaXMuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgIC8vIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XHJcbiAgICAgLy8gdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcclxuICAgICB0aGlzLmFuaW1hdGlvblxyXG4gICAgIC5zZXRGcm9tU3R5bGVzKHtcclxuICAgICBoZWlnaHQ6IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgIH0pXHJcbiAgICAgLnNldFRvU3R5bGVzKHtcclxuICAgICBoZWlnaHQ6IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xyXG4gICAgIH0pO1xyXG5cclxuICAgICB0aGlzLmFuaW1hdGlvbi5zdGFydCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KVxyXG4gICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcbiAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcbiAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgIH0pO1xyXG4gICAgIH0sIDQpOyovXHJcbiAgfVxyXG59XHJcbiJdfQ==
