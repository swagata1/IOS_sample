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
var DropdownMenuDirective = (function () {
    function DropdownMenuDirective(dropdown, el) {
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownMenuDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownMenu = this;
    };
    __decorate([
        core_1.HostBinding('class.dropdown-menu'), 
        __metadata('design:type', Boolean)
    ], DropdownMenuDirective.prototype, "addClass", void 0);
    DropdownMenuDirective = __decorate([
        core_1.Directive({
            selector: '[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
    ], DropdownMenuDirective);
    return DropdownMenuDirective;
}());
exports.DropdownMenuDirective = DropdownMenuDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlFLGVBQWUsQ0FBQyxDQUFBO0FBRWpGLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBTXpEO0lBU0UsK0JBQTJCLFFBQTBCLEVBQUUsRUFBYTtRQUg3RCxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBSTdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHdDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQVhEO1FBQUMsa0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7MkRBQUE7SUFUckM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsa0JBQWtCO1NBQzdCLENBQUM7bUJBVW9CLFdBQUksRUFBRTs7NkJBVjFCO0lBa0JGLDRCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSw2QkFBcUIsd0JBaUJqQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kcm9wZG93bi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkcm9wZG93bk1lbnVdJyxcclxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLW1lbnUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBkcm9wZG93bjpEcm9wZG93bkRpcmVjdGl2ZTtcclxuICBwdWJsaWMgZWw6RWxlbWVudFJlZjtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kcm9wZG93bi1tZW51JylcclxuICBwdWJsaWMgYWRkQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBIb3N0KCkgZHJvcGRvd246RHJvcGRvd25EaXJlY3RpdmUsIGVsOkVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bjtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93bi5kcm9wRG93bk1lbnUgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iXX0=
