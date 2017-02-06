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
    useExisting: core_1.forwardRef(function () { return SegmentControlComponent; }),
    multi: true
};
var SegmentControlComponent = (function () {
    function SegmentControlComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'small';
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(SegmentControlComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentControlComponent.prototype, "disabled", {
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
    SegmentControlComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
    };
    SegmentControlComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.innerValue = obj;
            for (var i = 0; i < this.controlArr.length; i++) {
                if (this.controlArr[i] == this.innerValue) {
                    this.selectedIndex = i;
                }
            }
        }
    };
    SegmentControlComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SegmentControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SegmentControlComponent.prototype.segmentSelected = function (control, controlIndex) {
        if (this.disabled)
            return;
        this.innerValue = control;
        this.selectedIndex = controlIndex;
        this.change.emit(this.innerValue);
        this.onChangeCallback(this.innerValue);
        this.onTouchedCallback(this.innerValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SegmentControlComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SegmentControlComponent.prototype, "disabled", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SegmentControlComponent.prototype, "onToggle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SegmentControlComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SegmentControlComponent.prototype, "controlArr", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SegmentControlComponent.prototype, "change", void 0);
    SegmentControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'segment-control',
            templateUrl: 'segment.component.html',
            styles: ["\n        .active {\n            color: #00a4e4;\n        }        \n        .disabled label{\n            opacity: .45;            \n            cursor: not-allowed;  \n        }\n    "],
            providers: [TOGGLE_SWITCH_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], SegmentControlComponent);
    return SegmentControlComponent;
}());
exports.SegmentControlComponent = SegmentControlComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZWdtZW50Q29udHJvbC9zZWdtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlGLGVBQWUsQ0FBQyxDQUFBO0FBQ2pHLHNCQUF3RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXpFLElBQU0sb0NBQW9DLEdBQVE7SUFDOUMsT0FBTyxFQUFFLHlCQUFpQjtJQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLENBQUM7SUFDdEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBaUJGO0lBQUE7UUFFWSxzQkFBaUIsR0FBRyxVQUFDLENBQU07UUFDbkMsQ0FBQyxDQUFDO1FBQ00scUJBQWdCLEdBQUcsVUFBQyxDQUFNO1FBQ2xDLENBQUMsQ0FBQztRQWdDTyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBRXRCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQTZCbkQsQ0FBQztJQXhEWSxzQkFBSSwwQ0FBSzthQU9sQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFUUSxVQUFVLENBQVM7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQU1RLHNCQUFJLDZDQUFRO2FBSXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQU5RLFVBQWEsQ0FBVTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7O0lBT0QsMENBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZCxNQUFNLENBQUM7SUFDZixDQUFDO0lBTUQsNENBQVUsR0FBVixVQUFXLEdBQVE7UUFDZixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG1EQUFpQixHQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELGlEQUFlLEdBQWYsVUFBZ0IsT0FBVyxFQUFFLFlBQWdCO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZCxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF2REQ7UUFBQyxZQUFLLEVBQUU7Ozt3REFBQTtJQVdSO1FBQUMsWUFBSyxFQUFFOzs7MkRBQUE7SUFRUjtRQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7OzJEQUFBO0lBTXRCO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQXREYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLDJMQVFSLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDOzsrQkFBQTtJQXFFRiw4QkFBQztBQUFELENBcEVBLEFBb0VDLElBQUE7QUFwRVksK0JBQXVCLDBCQW9FbkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VnbWVudENvbnRyb2wvc2VnbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IFRPR0dMRV9TV0lUQ0hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWdtZW50Q29udHJvbENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZWdtZW50LWNvbnRyb2wnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzZWdtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMGE0ZTQ7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmRpc2FibGVkIGxhYmVse1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNDU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7ICBcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHByb3ZpZGVyczogW1RPR0dMRV9TV0lUQ0hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGlubmVyVmFsdWU6IGFueTtcclxuICAgIHByaXZhdGUgYWN0aXZlQ2xhc3M6IGFueTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJbmRleDogYW55O1xyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHZhbHVlKHY6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdjtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcclxuICAgIH1cclxuICAgXHJcbiAgICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdiAhPT0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICAgIG9uVG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZyA9ICdzbWFsbCc7ICAgIFxyXG4gICAgQElucHV0KCkgY29udHJvbEFycjogYW55O1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7ICAgICAgICBcclxuICAgICAgICBpZihvYmopIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gb2JqO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb250cm9sQXJyLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250cm9sQXJyW2ldID09IHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbiAgICBzZWdtZW50U2VsZWN0ZWQoY29udHJvbDphbnksIGNvbnRyb2xJbmRleDphbnkpIHsgXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxyXG4gICAgICAgICAgICByZXR1cm47ICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IGNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gY29udHJvbEluZGV4O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5pbm5lclZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5pbm5lclZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKHRoaXMuaW5uZXJWYWx1ZSk7ICAgICAgICBcclxuICAgIH1cclxufSJdfQ==
