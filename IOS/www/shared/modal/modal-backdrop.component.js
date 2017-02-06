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
var modal_options_class_1 = require('./modal-options.class');
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
exports.ModalBackdropOptions = ModalBackdropOptions;
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(options, element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
        this.isAnimated = options.animate !== false;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.FADE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.IN, value);
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent = __decorate([
        core_1.Component({
            selector: 'bs-modal-backdrop',
            template: '',
            host: { 'class': modal_options_class_1.ClassName.BACKDROP }
        }), 
        __metadata('design:paramtypes', [ModalBackdropOptions, core_1.ElementRef, core_1.Renderer])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());
exports.ModalBackdropComponent = ModalBackdropComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRCxlQUFlLENBQUMsQ0FBQTtBQUVoRSxvQ0FBMEIsdUJBQXVCLENBQUMsQ0FBQTtBQUVsRDtJQUdFLDhCQUFtQixPQUE0QjtRQUZ4QyxZQUFPLEdBQVcsSUFBSSxDQUFDO1FBRzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCwyQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksNEJBQW9CLHVCQU1oQyxDQUFBO0FBT0Q7SUF5QkUsZ0NBQW1CLE9BQTRCLEVBQUUsT0FBa0IsRUFBRSxRQUFpQjtRQUY5RSxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQTVCRCxzQkFBVyw4Q0FBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFzQixLQUFhO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUcsK0JBQVMsQ0FBQyxJQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEYsQ0FBQzs7O09BTEE7SUFPRCxzQkFBVywyQ0FBTzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUcsK0JBQVMsQ0FBQyxFQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEYsQ0FBQzs7O09BTEE7SUFqQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSwrQkFBUyxDQUFDLFFBQVEsRUFBQztTQUNwQyxDQUFDOzs4QkFBQTtJQStCRiw2QkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksOEJBQXNCLHlCQThCbEMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbW9kYWwvbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2xhc3NOYW1lIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wT3B0aW9ucyB7XHJcbiAgcHVibGljIGFuaW1hdGU6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOk1vZGFsQmFja2Ryb3BPcHRpb25zKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1tb2RhbC1iYWNrZHJvcCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiBDbGFzc05hbWUuQkFDS0RST1B9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IHtcclxuICBwdWJsaWMgZ2V0IGlzQW5pbWF0ZWQoKTpib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0FuaW1hdGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpc0FuaW1hdGVkKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzQW5pbWF0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuRkFERX1gLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzU2hvd24oKTpib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpc1Nob3duKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2hvd24gPSB2YWx1ZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuSU59YCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZjtcclxuICBwdWJsaWMgcmVuZGVyZXI6UmVuZGVyZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzQW5pbWF0ZWQ6Ym9vbGVhbjtcclxuICBwcml2YXRlIF9pc1Nob3duOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6TW9kYWxCYWNrZHJvcE9wdGlvbnMsIGVsZW1lbnQ6RWxlbWVudFJlZiwgcmVuZGVyZXI6UmVuZGVyZXIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLmlzQW5pbWF0ZWQgPSBvcHRpb25zLmFuaW1hdGUgIT09IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
