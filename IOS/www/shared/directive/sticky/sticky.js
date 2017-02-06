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
var StickyDirective = (function () {
    function StickyDirective(element) {
        this.element = element;
        this.start = 0;
        this.stickClass = 'stick';
        this.endStickClass = 'un-stick';
        this.parentMode = true;
        this.activated = new core_1.EventEmitter();
        this.deactivated = new core_1.EventEmitter();
        this.onScrollBind = this.onScroll.bind(this);
        this.onResizeBind = this.onResize.bind(this);
        this.elem = element.nativeElement;
    }
    StickyDirective.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.onScrollBind);
        window.addEventListener('resize', this.onResizeBind);
    };
    StickyDirective.prototype.ngAfterViewInit = function () {
        this.container = this.elem.parentNode;
        this.defineDimensions();
        this.sticker();
    };
    StickyDirective.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.onScrollBind);
        window.removeEventListener('resize', this.onResizeBind);
    };
    StickyDirective.prototype.onScroll = function () {
        this.sticker();
    };
    StickyDirective.prototype.onResize = function () {
        this.defineDimensions();
        this.sticker();
    };
    StickyDirective.prototype.defineDimensions = function () {
        var containerTop = this.getBoundingClientRectValue(this.container, 'top');
        this.windowHeight = window.innerHeight;
        this.elemHeight = this.getCssNumber(this.elem, 'height');
        this.containerHeight = this.getCssNumber(this.container, 'height');
        this.containerStart = containerTop + this.scrollbarYPos() + this.start;
        if (this.parentMode) {
            this.scrollFinish = this.containerStart - this.start + (this.containerHeight - this.elemHeight);
        }
        else {
            this.scrollFinish = document.body.offsetHeight;
        }
    };
    StickyDirective.prototype.resetElement = function () {
        this.elem.classList.remove(this.stickClass);
    };
    StickyDirective.prototype.stuckElement = function () {
        this.activated.next(this.elem);
    };
    StickyDirective.prototype.unstuckElement = function () {
        this.deactivated.next(this.elem);
    };
    StickyDirective.prototype.sticker = function () {
        var currentContainerHeight = this.getCssNumber(this.container, 'height');
        if (currentContainerHeight !== this.containerHeight) {
            this.defineDimensions();
        }
        var position = this.scrollbarYPos();
    };
    StickyDirective.prototype.scrollbarYPos = function () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    StickyDirective.prototype.getBoundingClientRectValue = function (element, property) {
        var result = 0;
        if (element.getBoundingClientRect) {
            var rect = element.getBoundingClientRect();
            result = (typeof rect[property] !== 'undefined') ? rect[property] : 0;
        }
        return result;
    };
    StickyDirective.prototype.getCssValue = function (element, property) {
        var result = '';
        var style = element.currentStyle || window.getComputedStyle(element);
        if (typeof style[property] !== 'undefined') {
            result = style[property];
        }
        else {
            result = style.getPropertyValue(property);
        }
        return result;
    };
    StickyDirective.prototype.getCssNumber = function (element, property) {
        return parseInt(this.getCssValue(element, property), 10) || 0;
    };
    StickyDirective.prototype.handleScrollEvent = function (e) {
        if (window.pageYOffset > this.scrollFinish) {
            this.elem.classList.add(this.stickClass);
        }
        if (window.pageYOffset <= 0) {
            this.elem.classList.remove(this.stickClass);
        }
    };
    __decorate([
        core_1.Input('sticky-start'), 
        __metadata('design:type', Number)
    ], StickyDirective.prototype, "start", void 0);
    __decorate([
        core_1.Input('sticky-class'), 
        __metadata('design:type', String)
    ], StickyDirective.prototype, "stickClass", void 0);
    __decorate([
        core_1.Input('sticky-end-class'), 
        __metadata('design:type', String)
    ], StickyDirective.prototype, "endStickClass", void 0);
    __decorate([
        core_1.Input('sticky-parent'), 
        __metadata('design:type', Boolean)
    ], StickyDirective.prototype, "parentMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StickyDirective.prototype, "activated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StickyDirective.prototype, "deactivated", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], StickyDirective.prototype, "handleScrollEvent", null);
    StickyDirective = __decorate([
        core_1.Component({
            selector: '[stick]',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], StickyDirective);
    return StickyDirective;
}());
exports.StickyDirective = StickyDirective;
exports.AXIS_STICY_DIRECTIVES = [StickyDirective];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmUvc3RpY2t5L3N0aWNreS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlILGVBQWUsQ0FBQyxDQUFBO0FBTWpJO0lBdUJJLHlCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBcEJoQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFFekIsa0JBQWEsR0FBVyxVQUFVLENBQUM7UUFDdEMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUV6QyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxpQkFBWSxHQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVczRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUdJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFB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QW5JRDtRQUFDLFlBQUssQ0FBQyxjQUFjLENBQUM7O2tEQUFBO0lBQ3RCO1FBQUMsWUFBSyxDQUFDLGNBQWMsQ0FBQzs7dURBQUE7SUFFdEI7UUFBQyxZQUFLLENBQUMsa0JBQWtCLENBQUM7OzBEQUFBO0lBQzFCO1FBQUMsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7dURBQUE7SUFFdkI7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBZ0hUO1FBQUMsbUJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs0REFBQTtJQTlIOUM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDOzt1QkFBQTtJQXdJRixzQkFBQztBQUFELENBdklBLEFBdUlDLElBQUE7QUF2SVksdUJBQWUsa0JBdUkzQixDQUFBO0FBRVksNkJBQXFCLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyIsImZpbGUiOiJzaGFyZWQvZGlyZWN0aXZlL3N0aWNreS9zdGlja3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdbc3RpY2tdJyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PidcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0aWNreURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcblxyXG4gICAgQElucHV0KCdzdGlja3ktc3RhcnQnKSBzdGFydDogbnVtYmVyID0gMDtcclxuICAgIEBJbnB1dCgnc3RpY2t5LWNsYXNzJykgc3RpY2tDbGFzczogc3RyaW5nID0gJ3N0aWNrJztcclxuXHJcbiAgICBASW5wdXQoJ3N0aWNreS1lbmQtY2xhc3MnKSBlbmRTdGlja0NsYXNzOiBzdHJpbmcgPSAndW4tc3RpY2snO1xyXG4gICAgQElucHV0KCdzdGlja3ktcGFyZW50JykgcGFyZW50TW9kZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIGFjdGl2YXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBkZWFjdGl2YXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIG9uU2Nyb2xsQmluZDogRXZlbnRMaXN0ZW5lciA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcclxuICAgIHByaXZhdGUgb25SZXNpemVCaW5kOiBFdmVudExpc3RlbmVyID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHByaXZhdGUgZWxlbTogYW55O1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICAgIHByaXZhdGUgd2luZG93SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGVtSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lclN0YXJ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNjcm9sbEZpbmlzaDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuZWxlbSA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJpbmQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplQmluZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRhaW5lciBhcyBwYXJlbnQgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5lbGVtLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmaW5lRGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLnN0aWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJpbmQpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplQmluZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zdGlja2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lRGltZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyVG9wOiBudW1iZXIgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdFZhbHVlKHRoaXMuY29udGFpbmVyLCAndG9wJyk7XHJcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5lbGVtSGVpZ2h0ID0gdGhpcy5nZXRDc3NOdW1iZXIodGhpcy5lbGVtLCAnaGVpZ2h0Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLmdldENzc051bWJlcih0aGlzLmNvbnRhaW5lciwgJ2hlaWdodCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU3RhcnQgPSBjb250YWluZXJUb3AgKyB0aGlzLnNjcm9sbGJhcllQb3MoKSArIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50TW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZpbmlzaCA9IHRoaXMuY29udGFpbmVyU3RhcnQgLSB0aGlzLnN0YXJ0ICsgKHRoaXMuY29udGFpbmVySGVpZ2h0IC0gdGhpcy5lbGVtSGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZpbmlzaCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdGlja0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHVja0VsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQubmV4dCh0aGlzLmVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3R1Y2tFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZWQubmV4dCh0aGlzLmVsZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGlja2VyKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBkZXRlY3Rpbmcgd2hlbiBhIGNvbnRhaW5lcidzIGhlaWdodCBjaGFuZ2VzXHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb250YWluZXJIZWlnaHQ6IG51bWJlciA9IHRoaXMuZ2V0Q3NzTnVtYmVyKHRoaXMuY29udGFpbmVyLCAnaGVpZ2h0Jyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb250YWluZXJIZWlnaHQgIT09IHRoaXMuY29udGFpbmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lRGltZW5zaW9ucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnNjcm9sbGJhcllQb3MoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY3JvbGxiYXJZUG9zKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0VmFsdWUoZWxlbWVudDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAodHlwZW9mIHJlY3RbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykgPyByZWN0W3Byb3BlcnR5XSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDc3NWYWx1ZShlbGVtZW50OiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICcnO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBzdHlsZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDc3NOdW1iZXIoZWxlbWVudDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRDc3NWYWx1ZShlbGVtZW50LCBwcm9wZXJ0eSksIDEwKSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gICAgaGFuZGxlU2Nyb2xsRXZlbnQoZSkge1xyXG5cclxuICAgICAgICAvLyBhcHBseSBzdGlja25lc3NcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5zY3JvbGxGaW5pc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5zdGlja0NsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHN0aWNrbmVzc1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0aWNrQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFYSVNfU1RJQ1lfRElSRUNUSVZFUyA9IFtTdGlja3lEaXJlY3RpdmVdOyJdfQ==
