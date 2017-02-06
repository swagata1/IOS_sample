"use strict";
exports.ALWAYS = 'always';
exports.DISABLED = 'disabled';
exports.OUTSIDECLICK = 'outsideClick';
exports.NONINPUT = 'nonInput';
var KeyboardEvent = global.KeyboardEvent;
var MouseEvent = global.MouseEvent;
var DropdownService = (function () {
    function DropdownService() {
        this.closeDropdownBind = this.closeDropdown.bind(this);
        this.keybindFilterBind = this.keybindFilter.bind(this);
    }
    DropdownService.prototype.open = function (dropdownScope) {
        if (!this.openScope) {
            window.document.addEventListener('click', this.closeDropdownBind, true);
            window.document.addEventListener('keydown', this.keybindFilterBind);
        }
        if (this.openScope && this.openScope !== dropdownScope) {
            this.openScope.isOpen = false;
        }
        this.openScope = dropdownScope;
    };
    DropdownService.prototype.close = function (dropdownScope) {
        if (this.openScope !== dropdownScope) {
            return;
        }
        this.openScope = void 0;
        window.document.removeEventListener('click', this.closeDropdownBind, true);
        window.document.removeEventListener('keydown', this.keybindFilterBind);
    };
    DropdownService.prototype.closeDropdown = function (event) {
        if (!this.openScope) {
            return;
        }
        if (event && this.openScope.autoClose === exports.DISABLED) {
            return;
        }
        if (event && this.openScope.toggleEl &&
            this.openScope.toggleEl.nativeElement.contains(event.target)) {
            return;
        }
        if (event && this.openScope.autoClose === exports.NONINPUT &&
            this.openScope.menuEl &&
            /input|textarea/i.test(event.target.tagName) &&
            this.openScope.menuEl.nativeElement.contains(event.target)) {
            return;
        }
        if (event && this.openScope.autoClose === exports.OUTSIDECLICK &&
            this.openScope.menuEl &&
            this.openScope.menuEl.nativeElement.contains(event.target)) {
            return;
        }
        this.openScope.isOpen = false;
    };
    DropdownService.prototype.keybindFilter = function (event) {
        if (event.which === 27) {
            this.openScope.focusToggleElement();
            this.closeDropdown(void 0);
            return;
        }
        if (this.openScope.keyboardNav && this.openScope.isOpen &&
            (event.which === 38 || event.which === 40)) {
            event.preventDefault();
            event.stopPropagation();
            this.openScope.focusDropdownEntry(event.which);
        }
    };
    return DropdownService;
}());
exports.DropdownService = DropdownService;
exports.dropdownService = new DropdownService();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBYSxjQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLG9CQUFZLEdBQUcsY0FBYyxDQUFDO0FBQzlCLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBS25DLElBQU0sYUFBYSxHQUFJLE1BQWMsQ0FBQyxhQUE4QixDQUFDO0FBRXJFLElBQU0sVUFBVSxHQUFJLE1BQWMsQ0FBQyxVQUF3QixDQUFDO0FBRTVEO0lBQUE7UUFHVSxzQkFBaUIsR0FBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsc0JBQWlCLEdBQWlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBcUUxRSxDQUFDO0lBbkVRLDhCQUFJLEdBQVgsVUFBWSxhQUErQjtRQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUNqQyxDQUFDO0lBRU0sK0JBQUssR0FBWixVQUFhLGFBQStCO1FBQzFDLEVB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QWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDIiwiZmlsZSI6InNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICdhbHdheXMnO1xyXG5leHBvcnQgY29uc3QgRElTQUJMRUQgPSAnZGlzYWJsZWQnO1xyXG5leHBvcnQgY29uc3QgT1VUU0lERUNMSUNLID0gJ291dHNpZGVDbGljayc7XHJcbmV4cG9ydCBjb25zdCBOT05JTlBVVCA9ICdub25JbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG5jb25zdCBLZXlib2FyZEV2ZW50ID0gKGdsb2JhbCBhcyBhbnkpLktleWJvYXJkRXZlbnQgYXMgS2V5Ym9hcmRFdmVudDtcclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbmNvbnN0IE1vdXNlRXZlbnQgPSAoZ2xvYmFsIGFzIGFueSkuTW91c2VFdmVudCBhcyBNb3VzZUV2ZW50O1xyXG5cclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvcGVuU2NvcGU6RHJvcGRvd25EaXJlY3RpdmU7XHJcblxyXG4gIHByaXZhdGUgY2xvc2VEcm9wZG93bkJpbmQ6RXZlbnRMaXN0ZW5lciA9IHRoaXMuY2xvc2VEcm9wZG93bi5iaW5kKHRoaXMpO1xyXG4gIHByaXZhdGUga2V5YmluZEZpbHRlckJpbmQ6RXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5YmluZEZpbHRlci5iaW5kKHRoaXMpO1xyXG5cclxuICBwdWJsaWMgb3Blbihkcm9wZG93blNjb3BlOkRyb3Bkb3duRGlyZWN0aXZlKTp2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcGVuU2NvcGUpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duQmluZCwgdHJ1ZSk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXliaW5kRmlsdGVyQmluZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3BlblNjb3BlICYmIHRoaXMub3BlblNjb3BlICE9PSBkcm9wZG93blNjb3BlKSB7XHJcbiAgICAgIHRoaXMub3BlblNjb3BlLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3BlblNjb3BlID0gZHJvcGRvd25TY29wZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZShkcm9wZG93blNjb3BlOkRyb3Bkb3duRGlyZWN0aXZlKTp2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wZW5TY29wZSAhPT0gZHJvcGRvd25TY29wZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcGVuU2NvcGUgPSB2b2lkIDA7XHJcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25CaW5kLCB0cnVlKTtcclxuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXliaW5kRmlsdGVyQmluZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlRHJvcGRvd24oZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3BlblNjb3BlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQgJiYgdGhpcy5vcGVuU2NvcGUuYXV0b0Nsb3NlID09PSBESVNBQkxFRCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50ICYmIHRoaXMub3BlblNjb3BlLnRvZ2dsZUVsICYmXHJcbiAgICAgIHRoaXMub3BlblNjb3BlLnRvZ2dsZUVsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50ICYmIHRoaXMub3BlblNjb3BlLmF1dG9DbG9zZSA9PT0gTk9OSU5QVVQgJiZcclxuICAgICAgdGhpcy5vcGVuU2NvcGUubWVudUVsICYmXHJcbiAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUpICYmXHJcbiAgICAgIHRoaXMub3BlblNjb3BlLm1lbnVFbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudCAmJiB0aGlzLm9wZW5TY29wZS5hdXRvQ2xvc2UgPT09IE9VVFNJREVDTElDSyAmJlxyXG4gICAgICB0aGlzLm9wZW5TY29wZS5tZW51RWwgJiZcclxuICAgICAgdGhpcy5vcGVuU2NvcGUubWVudUVsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcGVuU2NvcGUuaXNPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGtleWJpbmRGaWx0ZXIoZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XHJcbiAgICAgIHRoaXMub3BlblNjb3BlLmZvY3VzVG9nZ2xlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24odm9pZCAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wZW5TY29wZS5rZXlib2FyZE5hdiAmJiB0aGlzLm9wZW5TY29wZS5pc09wZW4gJiZcclxuICAgICAgKGV2ZW50LndoaWNoID09PSAzOCB8fCBldmVudC53aGljaCA9PT0gNDApKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLm9wZW5TY29wZS5mb2N1c0Ryb3Bkb3duRW50cnkoZXZlbnQud2hpY2gpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBkcm9wZG93blNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XHJcbiJdfQ==