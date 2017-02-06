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
var forms_1 = require('@angular/forms');
var TOGGLE_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return ToggleSwitchComponent; }),
    multi: true
};
var ToggleSwitchComponent = (function () {
    function ToggleSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'small';
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(ToggleSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ToggleSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    ToggleSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    ToggleSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ToggleSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ToggleSwitchComponent.prototype, "checked", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ToggleSwitchComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleSwitchComponent.prototype, "size", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToggleSwitchComponent.prototype, "change", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ToggleSwitchComponent.prototype, "onToggle", null);
    ToggleSwitchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toggle-switch',
            templateUrl: 'toggleswitch.component.html',
            styles: ["\n        .switch {\n            background-color: #767676;\n            border: 1px solid #dfdfdf;\n            position: relative;\n            display: inline-block;\n            box-sizing: content-box;\n            overflow: visible;\n            padding: 0;\n            margin: 0;            \n            cursor: pointer;\n            box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n            transition: 0.3s ease-out all;\n            -webkit-transition: 0.3s ease-out all;\n        }        \n                \n        small {\n            background-color: #fff;\n            border-radius: 100%;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: 0.3s ease-out all;\n            -webkit-transition: 0.3s ease-out all;\n        }\n               \n        .switch-small {\n            width: 33px;\n            height: 20px;\n            border-radius: 20px;\n        }\n        \n        .switch-small small {\n            width: 20px;\n            height: 20px;\n        }\n        \n        .checked {\n            background-color: #78A22F;\n        }\n        \n        .switch-small.checked small {\n            left: 13px;\n        }\n\n        .disabled {\n            opacity: .50;\n            cursor: not-allowed;\n        }\n    "],
            providers: [TOGGLE_SWITCH_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleSwitchComponent);
    return ToggleSwitchComponent;
}());
exports.ToggleSwitchComponent = ToggleSwitchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90b2dnbGVzd2l0Y2gvdG9nZ2xlc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlGLGVBQWUsQ0FBQyxDQUFBO0FBQ2pHLHNCQUF3RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXpFLElBQU0sb0NBQW9DLEdBQVE7SUFDOUMsT0FBTyxFQUFFLHlCQUFpQjtJQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBMkRGO0lBQUE7UUFDWSxzQkFBaUIsR0FBRyxVQUFDLENBQU07UUFDbkMsQ0FBQyxDQUFDO1FBQ00scUJBQWdCLEdBQUcsVUFBQyxDQUFNO1FBQ2xDLENBQUMsQ0FBQztRQXFCTyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQXlCbkQsQ0FBQztJQTFDWSxzQkFBSSwwQ0FBTzthQUlwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFOUSxVQUFZLENBQVU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTVEsc0JBQUksMkNBQVE7YUFJckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBTlEsVUFBYSxDQUFVO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTs7SUFVRCx3Q0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNkLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxHQUFRO1FBQ2YsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGlEQUFpQixHQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQXpDRDtRQUFDLFlBQUssRUFBRTs7O3dEQUFBO0lBUVI7UUFBQyxZQUFLLEVBQUU7Ozt5REFBQTtJQVFSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQUVUO1FBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7eURBQUE7SUFyRjFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLE1BQU0sRUFBRSxDQUFDLDIxQ0FrRFIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BELENBQUM7OzZCQUFBO0lBb0RGLDRCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSw2QkFBcUIsd0JBbURqQyxDQUFBIiwiZmlsZSI6InNoYXJlZC90b2dnbGVzd2l0Y2gvdG9nZ2xlc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuY29uc3QgVE9HR0xFX1NXSVRDSF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZVN3aXRjaENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd0b2dnbGUtc3dpdGNoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndG9nZ2xlc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYigyMjMsIDIyMywgMjIzKSAwIDAgMCAwIGluc2V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5zd2l0Y2gtc21hbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMzNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3dpdGNoLXNtYWxsIHNtYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhBMjJGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3dpdGNoLXNtYWxsLmNoZWNrZWQgc21hbGwge1xyXG4gICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjUwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG4gICAgcHJvdmlkZXJzOiBbVE9HR0xFX1NXSVRDSF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcclxuICAgIH07XHJcbiAgICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgX2NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2hlY2tlZCh2OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tlZCA9IHYgIT09IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjaGVja2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2ICE9PSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnc21hbGwnO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgICBvblRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5jaGVja2VkKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvYmogIT09IHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSAhIW9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxufSJdfQ==
