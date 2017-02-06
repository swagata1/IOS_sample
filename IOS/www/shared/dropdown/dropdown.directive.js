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
var dropdown_service_1 = require('./dropdown.service');
var DropdownDirective = (function () {
    function DropdownDirective(el, ref) {
        this.onToggle = new core_1.EventEmitter(false);
        this.isOpenChange = new core_1.EventEmitter(false);
        this.addClass = true;
        this.el = el;
        this._changeDetector = ref;
    }
    Object.defineProperty(DropdownDirective.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = !!value;
            if (this.isOpen) {
                this.focusToggleElement();
                dropdown_service_1.dropdownService.open(this);
            }
            else {
                dropdown_service_1.dropdownService.close(this);
                this.selectedOption = void 0;
            }
            this.onToggle.emit(this.isOpen);
            this.isOpenChange.emit(this.isOpen);
            this._changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.ngOnInit = function () {
        this.autoClose = this.autoClose || dropdown_service_1.NONINPUT;
        if (this.isOpen) {
        }
    };
    DropdownDirective.prototype.ngOnDestroy = function () {
        if (this.appendToBody && this.menuEl) {
            this.menuEl.nativeElement.remove();
        }
    };
    Object.defineProperty(DropdownDirective.prototype, "dropDownMenu", {
        set: function (dropdownMenu) {
            this.menuEl = dropdownMenu.el;
            if (this.appendToBody) {
                window.document.body.appendChild(this.menuEl.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownDirective.prototype, "dropDownToggle", {
        set: function (dropdownToggle) {
            this.toggleEl = dropdownToggle.el;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.toggle = function (open) {
        return this.isOpen = arguments.length ? !!open : !this.isOpen;
    };
    DropdownDirective.prototype.focusDropdownEntry = function (keyCode) {
        var hostEl = this.menuEl ?
            this.menuEl.nativeElement :
            this.el.nativeElement.getElementsByTagName('ul')[0];
        if (!hostEl) {
            return;
        }
        var elems = hostEl.getElementsByTagName('a');
        if (!elems || !elems.length) {
            return;
        }
        switch (keyCode) {
            case (40):
                if (typeof this.selectedOption !== 'number') {
                    this.selectedOption = 0;
                    break;
                }
                if (this.selectedOption === elems.length - 1) {
                    break;
                }
                this.selectedOption++;
                break;
            case (38):
                if (typeof this.selectedOption !== 'number') {
                    return;
                }
                if (this.selectedOption === 0) {
                    break;
                }
                this.selectedOption--;
                break;
            default:
                break;
        }
        elems[this.selectedOption].focus();
    };
    DropdownDirective.prototype.focusToggleElement = function () {
        if (this.toggleEl) {
            this.toggleEl.nativeElement.focus();
        }
    };
    __decorate([
        core_1.HostBinding('class.open'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "isOpen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownDirective.prototype, "autoClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "keyboardNav", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "appendToBody", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownDirective.prototype, "onToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownDirective.prototype, "isOpenChange", void 0);
    __decorate([
        core_1.HostBinding('class.dropdown'), 
        __metadata('design:type', Boolean)
    ], DropdownDirective.prototype, "addClass", void 0);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[dropdown]',
            exportAs: 'bs-dropdown'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUVPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLGlDQUEwQyxvQkFBb0IsQ0FBQyxDQUFBO0FBTS9EO0lBMkJFLDJCQUFtQixFQUFhLEVBQUUsR0FBcUI7UUFmdEMsYUFBUSxHQUF5QixJQUFJLG1CQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDbEUsaUJBQVksR0FBeUIsSUFBSSxtQkFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2pELGFBQVEsR0FBVyxJQUFJLENBQUM7UUFnQjVELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFN0IsQ0FBQztJQTlCRCxzQkFBVyxxQ0FBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7YUE4QkQsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFTdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixrQ0FBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sa0NBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENB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UixDQUFDO2dCQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLDhDQUFrQixHQUF6QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBL0lEO1FBQUMsa0JBQVcsQ0FBQyxZQUFZLENBQUM7UUFDekIsWUFBSyxFQUFFOzttREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQUNUO1FBQUMsa0JBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7dURBQUE7SUFsQmhDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7O3lCQUFBO0lBa0pGLHdCQUFDO0FBQUQsQ0FqSkEsQUFpSkMsSUFBQTtBQWpKWSx5QkFBaUIsb0JBaUo3QixDQUFBIiwiZmlsZSI6InNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBkcm9wZG93blNlcnZpY2UsIE5PTklOUFVUIH0gZnJvbSAnLi9kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Ryb3Bkb3duXScsXHJcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3BlbicpXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvQ2xvc2U6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBrZXlib2FyZE5hdjpib29sZWFuO1xyXG4gIC8vIGVudW0gc3RyaW5nOiBbJ2Fsd2F5cycsICdvdXRzaWRlQ2xpY2snLCAnZGlzYWJsZWQnXVxyXG4gIEBJbnB1dCgpIHB1YmxpYyBhcHBlbmRUb0JvZHk6Ym9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblRvZ2dsZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyb3Bkb3duJykgcHVibGljIGFkZENsYXNzOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvLyBpbmRleCBvZiBzZWxlY3RlZCBlbGVtZW50XHJcbiAgcHVibGljIHNlbGVjdGVkT3B0aW9uOm51bWJlcjtcclxuICAvLyBkcm9wIG1lbnUgaHRtbFxyXG4gIHB1YmxpYyBtZW51RWw6RWxlbWVudFJlZjtcclxuICAvLyBkcm9wIGRvd24gdG9nZ2xlIGVsZW1lbnRcclxuICBwdWJsaWMgdG9nZ2xlRWw6RWxlbWVudFJlZjtcclxuICBwdWJsaWMgZWw6RWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWY7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbDpFbGVtZW50UmVmLCByZWY6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIC8vIEBRdWVyeSgnZHJvcGRvd25NZW51Jywge2Rlc2NlbmRhbnRzOiBmYWxzZX0pXHJcbiAgICAvLyBkcm9wZG93bk1lbnVMaXN0OlF1ZXJ5TGlzdDxFbGVtZW50UmVmPikge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IgPSByZWY7XHJcbiAgICAvLyB0b2RvOiBiaW5kIHRvIHJvdXRlIGNoYW5nZSBldmVudFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xyXG4gICAgdGhpcy5faXNPcGVuID0gISF2YWx1ZTtcclxuXHJcbiAgICAvLyB0b2RvOiBpbXBsZW1lbnQgYWZ0ZXIgcG9ydGluZyBwb3NpdGlvblxyXG4gICAgLy8gaWYgKHRoaXMuYXBwZW5kVG9Cb2R5ICYmIHRoaXMubWVudUVsKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHRvZG86ICRhbmltYXRlIG9wZW48LT5jbG9zZSB0cmFuc2l0aW9ucywgYXMgc29vbiBhcyBuZzJBbmltYXRlIHdpbGwgYmVcclxuICAgIC8vIHJlYWR5XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5mb2N1c1RvZ2dsZUVsZW1lbnQoKTtcclxuICAgICAgZHJvcGRvd25TZXJ2aWNlLm9wZW4odGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkcm9wZG93blNlcnZpY2UuY2xvc2UodGhpcyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB2b2lkIDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG9nZ2xlLmVtaXQodGhpcy5pc09wZW4pO1xyXG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3Blbik7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIC8vIHRvZG86IGltcGxlbWVudCBjYWxsIHRvIHNldElzT3BlbiBpZiBzZXQgYW5kIGZ1bmN0aW9uXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgIHRoaXMuYXV0b0Nsb3NlID0gdGhpcy5hdXRvQ2xvc2UgfHwgTk9OSU5QVVQ7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgLy8gdG9kbzogd2F0Y2ggZm9yIGV2ZW50IGdldC1pc09wZW4/XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcclxuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSAmJiB0aGlzLm1lbnVFbCkge1xyXG4gICAgICB0aGlzLm1lbnVFbC5uYXRpdmVFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBkcm9wRG93bk1lbnUoZHJvcGRvd25NZW51OntlbDpFbGVtZW50UmVmfSkge1xyXG4gICAgLy8gaW5pdCBkcm9wIGRvd24gbWVudVxyXG4gICAgdGhpcy5tZW51RWwgPSBkcm9wZG93bk1lbnUuZWw7XHJcblxyXG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWVudUVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBkcm9wRG93blRvZ2dsZShkcm9wZG93blRvZ2dsZTp7ZWw6RWxlbWVudFJlZn0pIHtcclxuICAgIC8vIGluaXQgdG9nZ2xlIGVsZW1lbnRcclxuICAgIHRoaXMudG9nZ2xlRWwgPSBkcm9wZG93blRvZ2dsZS5lbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGUob3Blbj86Ym9vbGVhbik6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc09wZW4gPSBhcmd1bWVudHMubGVuZ3RoID8gISFvcGVuIDogIXRoaXMuaXNPcGVuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzRHJvcGRvd25FbnRyeShrZXlDb2RlOm51bWJlcik6dm9pZCB7XHJcbiAgICAvLyBJZiBhcHBlbmQgdG8gYm9keSBpcyB1c2VkLlxyXG4gICAgbGV0IGhvc3RFbCA9IHRoaXMubWVudUVsID9cclxuICAgICAgdGhpcy5tZW51RWwubmF0aXZlRWxlbWVudCA6XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuXHJcbiAgICBpZiAoIWhvc3RFbCkge1xyXG4gICAgICAvLyB0b2RvOiB0aHJvdyBleGNlcHRpb24/XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWxlbXMgPSBob3N0RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcclxuICAgIGlmICghZWxlbXMgfHwgIWVsZW1zLmxlbmd0aCkge1xyXG4gICAgICAvLyB0b2RvOiB0aHJvdyBleGNlcHRpb24/XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2RvOiB1c2UgcGFyc2VJbnQgdG8gZGV0ZWN0IGlzTnVtYmVyP1xyXG4gICAgLy8gdG9kbzogb3IgaW1wbGVtZW50IHNlbGVjdGVkT3B0aW9uIGFzIGEgZ2V0XFxzZXQgcGFpciB3aXRoIHBhcnNlSW50IG9uIHNldFxyXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgKDQwKTpcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRPcHRpb24gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IGVsZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbisrO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgzOCk6XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkT3B0aW9uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcclxuICAgICAgICAgIC8vIHRvZG86IHJldHVybj9cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbi0tO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1zW3RoaXMuc2VsZWN0ZWRPcHRpb25dLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXNUb2dnbGVFbGVtZW50KCk6dm9pZCB7XHJcbiAgICBpZiAodGhpcy50b2dnbGVFbCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZUVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
