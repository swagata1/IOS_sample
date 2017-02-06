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
var tabset_component_1 = require('./tabset.component');
var TabDirective = (function () {
    function TabDirective(tabset) {
        this.select = new core_1.EventEmitter(false);
        this.deselect = new core_1.EventEmitter(false);
        this.removed = new core_1.EventEmitter(false);
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = !!this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabDirective.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "removable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabDirective.prototype, "customClass", void 0);
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "active", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "deselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabDirective.prototype, "removed", void 0);
    __decorate([
        core_1.HostBinding('class.isc-tab-pane'), 
        __metadata('design:type', Boolean)
    ], TabDirective.prototype, "addClass", void 0);
    TabDirective = __decorate([
        core_1.Directive({ selector: 'isc-tab, [isc-tab]' }), 
        __metadata('design:paramtypes', [tabset_component_1.TabsetComponent])
    ], TabDirective);
    return TabDirective;
}());
exports.TabDirective = TabDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWJzL3RhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUVPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBS3JEO0lBMENFLHNCQUFtQixNQUFzQjtRQTdCeEIsV0FBTSxHQUE4QixJQUFJLG1CQUFZLENBQWUsS0FBSyxDQUFDLENBQUM7UUFDMUUsYUFBUSxHQUE4QixJQUFJLG1CQUFZLENBQWUsS0FBSyxDQUFDLENBQUM7UUFDNUUsWUFBTyxHQUE4QixJQUFJLG1CQUFZLENBQWUsS0FBSyxDQUFDLENBQUM7UUFxQmxELGFBQVEsR0FBVyxJQUFJLENBQUM7UUFPaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXBDRCxzQkFBVyxnQ0FBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7YUFNRCxVQUFrQixNQUFjO1lBQWhDLGlCQWlCQztZQWhCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWdCO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQXZCQTtJQW9DTSwrQkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBcEREO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUdSO1FBQUMsa0JBQVcsQ0FBQyxjQUFjLENBQUM7UUFDM0IsWUFBSyxFQUFFOzs4Q0FBQTtJQUtSO1FBQUMsYUFBTSxFQUFFOztnREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztrREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztpREFBQTtJQXFCVDtRQUFDLGtCQUFXLENBQUMsb0JBQW9CLENBQUM7O2tEQUFBO0lBdENwQztRQUFDLGdCQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQzs7b0JBQUE7SUF3RDVDLG1CQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSxvQkFBWSxlQXNEeEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdGFicy90YWIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ2lzYy10YWIsIFtpc2MtdGFiXSd9KVxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkaW5nOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6Ym9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgcmVtb3ZhYmxlOmJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzOnN0cmluZztcclxuXHJcbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBhY3RpdmUoKTpib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdDpFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBkZXNlbGVjdDpFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOkV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+KGZhbHNlKTtcclxuXHJcbiAgcHVibGljIHNldCBhY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSB8fCAhYWN0aXZlKSB7XHJcbiAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKCh0YWI6VGFiRGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcclxuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pc2MtdGFiLXBhbmUnKSBwdWJsaWMgYWRkQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBoZWFkaW5nUmVmOlRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHVibGljIHRhYnNldDpUYWJzZXRDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfYWN0aXZlOmJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0YWJzZXQ6VGFic2V0Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcclxuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmFibGUgPSAhIXRoaXMucmVtb3ZhYmxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XHJcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
