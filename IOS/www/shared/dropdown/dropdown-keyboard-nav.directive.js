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
var dropdown_directive_1 = require('./dropdown.directive');
var KeyboardEvent = global.KeyboardEvent;
var KeyboardNavDirective = (function () {
    function KeyboardNavDirective(dd, el) {
        this.dd = dd;
        this.el = el;
        console.warn('keyboard-nav deprecated');
        dd.keyboardNav = true;
    }
    KeyboardNavDirective.prototype.onKeydown = function (event) {
        if (event.which !== 40 && event.which !== 38) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var elems = this.dd.menuEl.nativeElement.getElementsByTagName('a');
        switch (event.which) {
            case (40):
                if (typeof this.dd.selectedOption !== 'number') {
                    this.dd.selectedOption = 0;
                    break;
                }
                if (this.dd.selectedOption === elems.length - 1) {
                    break;
                }
                this.dd.selectedOption++;
                break;
            case (38):
                if (typeof this.dd.selectedOption !== 'number') {
                    return;
                }
                if (this.dd.selectedOption === 0) {
                    break;
                }
                this.dd.selectedOption--;
                break;
            default:
                break;
        }
        elems[this.dd.selectedOption].nativeElement.focus();
    };
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KeyboardNavDirective.prototype, "onKeydown", null);
    KeyboardNavDirective = __decorate([
        core_1.Directive({
            selector: '[dropdown][dropdownKeyboardNav]'
        }), 
        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
    ], KeyboardNavDirective);
    return KeyboardNavDirective;
}());
exports.KeyboardNavDirective = KeyboardNavDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi1rZXlib2FyZC1uYXYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQsSUFBTSxhQUFhLEdBQUksTUFBYyxDQUFDLGFBQThCLENBQUM7QUFLckU7SUFJRSw4QkFBbUIsRUFBb0IsRUFBRSxFQUFhO1FBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUdNLHdDQUFTLEdBQWhCLFVBQWlCLEtBQW1CO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDUCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDUixLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFakMsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBeENEO1FBQUMsbUJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt5REFBQTtJQWR0QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUNBQWlDO1NBQzVDLENBQUM7OzRCQUFBO0lBcURGLDJCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSw0QkFBb0IsdUJBb0RoQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi1rZXlib2FyZC1uYXYuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbmNvbnN0IEtleWJvYXJkRXZlbnQgPSAoZ2xvYmFsIGFzIGFueSkuS2V5Ym9hcmRFdmVudCBhcyBLZXlib2FyZEV2ZW50O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZHJvcGRvd25dW2Ryb3Bkb3duS2V5Ym9hcmROYXZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmROYXZEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgZGQ6RHJvcGRvd25EaXJlY3RpdmU7XHJcbiAgcHJpdmF0ZSBlbDpFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGQ6RHJvcGRvd25EaXJlY3RpdmUsIGVsOkVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZGQgPSBkZDtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIGNvbnNvbGUud2Fybigna2V5Ym9hcmQtbmF2IGRlcHJlY2F0ZWQnKTtcclxuICAgIGRkLmtleWJvYXJkTmF2ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbktleWRvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggIT09IDQwICYmIGV2ZW50LndoaWNoICE9PSAzOCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGxldCBlbGVtcyA9IHRoaXMuZGQubWVudUVsLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XHJcbiAgICAgIGNhc2UgKDQwKTpcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGQuc2VsZWN0ZWRPcHRpb24gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB0aGlzLmRkLnNlbGVjdGVkT3B0aW9uID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGQuc2VsZWN0ZWRPcHRpb24gPT09IGVsZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZC5zZWxlY3RlZE9wdGlvbisrO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgzOCk6XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRkLnNlbGVjdGVkT3B0aW9uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGQuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcclxuICAgICAgICAgIC8vIHRvZG86IHJldHVybj9cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZC5zZWxlY3RlZE9wdGlvbi0tO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZWxlbXNbdGhpcy5kZC5zZWxlY3RlZE9wdGlvbl0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxufVxyXG4iXX0=
