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
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.addClass = true;
        this.groups = [];
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "closeOthers", void 0);
    __decorate([
        core_1.HostBinding('class.isc-panel-group'), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "addClass", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'isc-accordion-group-wrapper',
            template: "<div class=\"isc-accordion-group-wrapper\">\n                <div class=\"isc-panel-group\">\n                  <ng-content></ng-content>\n                </div>\n              </div>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBYzlEO0lBQUE7UUFLUyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLFdBQU0sR0FBa0MsRUFBRSxDQUFDO0lBd0JyRCxDQUFDO0lBdEJRLDZDQUFnQixHQUF2QixVQUF3QixTQUFpQztRQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQTZCO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQVEsR0FBZixVQUFnQixLQUE2QjtRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sd0NBQVcsR0FBbEIsVUFBbUIsS0FBNkI7UUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUE5QkQ7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBR1I7UUFBQyxrQkFBVyxDQUFDLHVCQUF1QixDQUFDOzt3REFBQTtJQWJ2QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFFBQVEsRUFBRSx5TUFLRztTQUNkLENBQUM7OzBCQUFBO0lBaUNGLHlCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSwwQkFBa0IscUJBZ0M5QixDQUFBIiwiZmlsZSI6InNoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG4vLyB0b2RvOiBzdXBwb3J0IHRlbXBsYXRlIHVybFxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lzYy1hY2NvcmRpb24tZ3JvdXAtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaXNjLWFjY29yZGlvbi1ncm91cC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXNjLXBhbmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT3RoZXJzOmJvb2xlYW47XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXNjLXBhbmVsLWdyb3VwJylcclxuICBwdWJsaWMgYWRkQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cclxuXHJcbiAgcHJpdmF0ZSBncm91cHM6QXJyYXk8QWNjb3JkaW9uUGFuZWxDb21wb25lbnQ+ID0gW107XHJcblxyXG4gIHB1YmxpYyBjbG9zZU90aGVyUGFuZWxzKG9wZW5Hcm91cDpBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6dm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwOkFjY29yZGlvblBhbmVsQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XHJcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEdyb3VwKGdyb3VwOkFjY29yZGlvblBhbmVsQ29tcG9uZW50KTp2b2lkIHtcclxuICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUdyb3VwKGdyb3VwOkFjY29yZGlvblBhbmVsQ29tcG9uZW50KTp2b2lkIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
