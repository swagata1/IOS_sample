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
var accordion_component_1 = require('./accordion.component');
var MouseEvent = global.MouseEvent;
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'isc-panel-default';
        this.iconPlacement = this.iconPlacement || 'right';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionPanelComponent.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionPanelComponent.prototype, "panelClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionPanelComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionPanelComponent.prototype, "iconPlacement", void 0);
    __decorate([
        core_1.HostBinding('class.isc-panel-open'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionPanelComponent.prototype, "isOpen", null);
    AccordionPanelComponent = __decorate([
        core_1.Component({
            selector: 'isc-accordion-group, isc-accordion-panel',
            template: "\n    <div class=\"isc-accordion-wrapper isc-panel\" [ngClass]=\"{'isc-accordion-icon-left' : iconPlacement=='left', 'isc-accordion-icon-right' : iconPlacement=='right'}\">\n      <div class=\"isc-panel-heading\" (click)=\"toggleOpen($event)\">\n        <h4 class=\"isc-panel-title\">\n          <a href tabindex=\"0\" class=\"isc-accordion-toggle\">\n            <span class=\"material-icons\" *ngIf=\"!isOpen\">expand_more</span>\n            <span class=\"material-icons\" *ngIf=\"isOpen\">expand_less</span>\n            <span *ngIf=\"heading\" [ngClass]=\"{'_text-muted': isDisabled}\">{{heading}}</span>\n            <ng-content select=\"[accordion-heading]\"></ng-content>\n          </a>\n        </h4>\n      </div>\n      <div class=\"isc-panel-collapse\" [ngClass]=\"{'collapse': !isOpen}\" [collapse]=\"!isOpen\">\n        <div class=\"isc-panel-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(accordion_component_1.AccordionComponent)), 
        __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
    ], AccordionPanelComponent);
    return AccordionPanelComponent;
}());
exports.AccordionPanelComponent = AccordionPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBRU8sZUFBZSxDQUFDLENBQUE7QUFFdkIsb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFHM0QsSUFBTSxVQUFVLEdBQUksTUFBYyxDQUFDLFVBQXdCLENBQUM7QUF5QjVEO0lBdUJFLGlDQUErQyxTQUE0QjtRQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBaEJELHNCQUFXLDJDQUFNO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWtCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDOzs7T0FQQTtJQWdCTSwwQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLG1CQUFtQixDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRDQUFVLEdBQWpCLFVBQWtCLEtBQWdCO1FBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBekNEO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUdSO1FBQUMsa0JBQVcsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxZQUFLLEVBQUU7O3lEQUFBO0lBOUJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsUUFBUSxFQUFFLHM3QkFrQlQ7U0FDRixDQUFDO21CQXdCb0IsYUFBTSxDQUFDLHdDQUFrQixDQUFDOzsrQkF4QjlDO0lBNENGLDhCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSwrQkFBdUIsMEJBMkNuQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuY29uc3QgTW91c2VFdmVudCA9IChnbG9iYWwgYXMgYW55KS5Nb3VzZUV2ZW50IGFzIE1vdXNlRXZlbnQ7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3ItbmFtZSAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lzYy1hY2NvcmRpb24tZ3JvdXAsIGlzYy1hY2NvcmRpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXNjLWFjY29yZGlvbi13cmFwcGVyIGlzYy1wYW5lbFwiIFtuZ0NsYXNzXT1cInsnaXNjLWFjY29yZGlvbi1pY29uLWxlZnQnIDogaWNvblBsYWNlbWVudD09J2xlZnQnLCAnaXNjLWFjY29yZGlvbi1pY29uLXJpZ2h0JyA6IGljb25QbGFjZW1lbnQ9PSdyaWdodCd9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpc2MtcGFuZWwtaGVhZGluZ1wiIChjbGljayk9XCJ0b2dnbGVPcGVuKCRldmVudClcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJpc2MtcGFuZWwtdGl0bGVcIj5cclxuICAgICAgICAgIDxhIGhyZWYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJpc2MtYWNjb3JkaW9uLXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgKm5nSWY9XCIhaXNPcGVuXCI+ZXhwYW5kX21vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiAqbmdJZj1cImlzT3BlblwiPmV4cGFuZF9sZXNzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImhlYWRpbmdcIiBbbmdDbGFzc109XCJ7J190ZXh0LW11dGVkJzogaXNEaXNhYmxlZH1cIj57e2hlYWRpbmd9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FjY29yZGlvbi1oZWFkaW5nXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlzYy1wYW5lbC1jb2xsYXBzZVwiIFtuZ0NsYXNzXT1cInsnY29sbGFwc2UnOiAhaXNPcGVufVwiIFtjb2xsYXBzZV09XCIhaXNPcGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlzYy1wYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGhlYWRpbmc6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwYW5lbENsYXNzOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpY29uUGxhY2VtZW50OnN0cmluZztcclxuXHJcbiAgLy8gUXVlc3Rpb25hYmxlLCBtYXliZSAucGFuZWwtb3BlbiBzaG91bGQgYmUgb24gY2hpbGQgZGl2LnBhbmVsIGVsZW1lbnQ/XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pc2MtcGFuZWwtb3BlbicpXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcclxuICBwcml2YXRlIGFjY29yZGlvbjpBY2NvcmRpb25Db21wb25lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOkFjY29yZGlvbkNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTphbnkge1xyXG4gICAgdGhpcy5wYW5lbENsYXNzID0gdGhpcy5wYW5lbENsYXNzIHx8ICdpc2MtcGFuZWwtZGVmYXVsdCc7XHJcbiAgICB0aGlzLmljb25QbGFjZW1lbnQgPSB0aGlzLmljb25QbGFjZW1lbnQgfHwgJ3JpZ2h0JztcclxuICAgIHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6YW55IHtcclxuICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZU9wZW4oZXZlbnQ6TW91c2VFdmVudCk6YW55IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
