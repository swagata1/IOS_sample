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
var dropdown_directive_1 = require('./dropdown.directive');
var MouseEvent = global.MouseEvent;
var DropdownToggleDirective = (function () {
    function DropdownToggleDirective(dropdown, el) {
        this.isDisabled = false;
        this.addToggleClass = true;
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownToggleDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownToggle = this;
    };
    Object.defineProperty(DropdownToggleDirective.prototype, "isOpen", {
        get: function () {
            return this.dropdown.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownToggleDirective.prototype.toggleDropdown = function (event) {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.dropdown.toggle();
        }
        return false;
    };
    __decorate([
        core_1.HostBinding('class.disabled'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "isDisabled", void 0);
    __decorate([
        core_1.HostBinding('class.dropdown-toggle'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "addToggleClass", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-haspopup'), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "addClass", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "isOpen", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Boolean)
    ], DropdownToggleDirective.prototype, "toggleDropdown", null);
    DropdownToggleDirective = __decorate([
        core_1.Directive({
            selector: '[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle'
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
    ], DropdownToggleDirective);
    return DropdownToggleDirective;
}());
exports.DropdownToggleDirective = DropdownToggleDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFFTyxlQUFlLENBQUMsQ0FBQTtBQUV2QixtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RCxJQUFNLFVBQVUsR0FBSSxNQUFjLENBQUMsVUFBd0IsQ0FBQztBQU01RDtJQWFFLGlDQUEyQixRQUEwQixFQUFFLEVBQWE7UUFYcEQsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUczQixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUd2QyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBTTdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLDBDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUdELHNCQUFXLDJDQUFNO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBR00sZ0RBQWMsR0FBckIsVUFBc0IsS0FBZ0I7UUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFsQ0Q7UUFBQyxrQkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLFlBQUssRUFBRTs7K0RBQUE7SUFFUjtRQUFDLGtCQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDcEMsWUFBSyxFQUFFOzttRUFBQTtJQUVSO1FBQUMsa0JBQVcsQ0FBQyxvQkFBb0IsQ0FBQzs7NkRBQUE7SUFlbEM7UUFBQyxrQkFBVyxDQUFDLG9CQUFvQixDQUFDOzt5REFBQTtJQUtsQztRQUFDLG1CQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7aUVBQUE7SUEvQnBDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO21CQWNvQixXQUFJLEVBQUU7OytCQWQxQjtJQXFDRiw4QkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksK0JBQXVCLDBCQW9DbkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZHJvcGRvd24vZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG5jb25zdCBNb3VzZUV2ZW50ID0gKGdsb2JhbCBhcyBhbnkpLk1vdXNlRXZlbnQgYXMgTW91c2VFdmVudDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Ryb3Bkb3duVG9nZ2xlXScsXHJcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi10b2dnbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXHJcbiAgQElucHV0KCkgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyb3Bkb3duLXRvZ2dsZScpXHJcbiAgQElucHV0KCkgcHVibGljIGFkZFRvZ2dsZUNsYXNzOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oYXNwb3B1cCcpXHJcbiAgcHVibGljIGFkZENsYXNzOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZHJvcGRvd246RHJvcGRvd25EaXJlY3RpdmU7XHJcbiAgcHVibGljIGVsOkVsZW1lbnRSZWY7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASG9zdCgpIGRyb3Bkb3duOkRyb3Bkb3duRGlyZWN0aXZlLCBlbDpFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgIHRoaXMuZHJvcGRvd24uZHJvcERvd25Ub2dnbGUgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5pc09wZW47XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIHRvZ2dsZURyb3Bkb3duKGV2ZW50Ok1vdXNlRXZlbnQpOmJvb2xlYW4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19
