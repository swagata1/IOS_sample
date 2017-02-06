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
var progress_directive_1 = require('./progress.directive');
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BarComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BarComponent.prototype, "value", null);
    BarComponent = __decorate([
        core_1.Component({
            selector: 'bar',
            template: "\n  <div class=\"isc-progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ngClass]=\"type && 'isc-progress-bar-' + type\"\n    [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"><ng-content></ng-content></div>\n"
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [progress_directive_1.ProgressDirective])
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wcm9ncmVzc2Jhci9iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFFMUUsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFrQnpEO0lBdUJFLHNCQUEyQixRQUEwQjtRQU45QyxZQUFPLEdBQVUsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFwQkQsc0JBQVcsK0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBaUIsQ0FBUTtZQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQVJBO0lBb0JNLCtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNENBQXFCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBWSxFQUFFLEdBQWdCO1lBQ3RGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUE1Q0Q7UUFBQyxZQUFLLEVBQUU7OzhDQUFBO0lBR1I7UUFBQyxZQUFLLEVBQUU7OzZDQUFBO0lBbEJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHFhQVVYO1NBQ0EsQ0FBQzttQkF3Qm9CLFdBQUksRUFBRTs7b0JBeEIxQjtJQStDRixtQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksb0JBQVksZUE4Q3hCLENBQUEiLCJmaWxlIjoic2hhcmVkL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XHJcblxyXG4vLyB0b2RvOiBudW1iZXIgcGlwZVxyXG4vLyB0b2RvOiB1c2UgcXVlcnkgZnJvbSBwcm9ncmVzcz9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdiYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImlzYy1wcm9ncmVzcy1iYXJcIlxyXG4gICAgc3R5bGU9XCJtaW4td2lkdGg6IDA7XCJcclxuICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXHJcbiAgICBbbmdDbGFzc109XCJ0eXBlICYmICdpc2MtcHJvZ3Jlc3MtYmFyLScgKyB0eXBlXCJcclxuICAgIFtuZ1N0eWxlXT1cInt3aWR0aDogKHBlcmNlbnQgPCAxMDAgPyBwZXJjZW50IDogMTAwKSArICclJywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbn1cIlxyXG4gICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJ2YWx1ZVwiXHJcbiAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJwZXJjZW50LnRvRml4ZWQoMCkgKyAnJSdcIlxyXG4gICAgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJtYXhcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgcHVibGljIG1heDpudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOm51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHZhbHVlKHY6bnVtYmVyKSB7XHJcbiAgICBpZiAoIXYgJiYgdiAhPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBlcmNlbnQ6bnVtYmVyID0gMDtcclxuICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XHJcbiAgcHVibGljIHByb2dyZXNzOlByb2dyZXNzRGlyZWN0aXZlO1xyXG5cclxuICBwcml2YXRlIF92YWx1ZTpudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASG9zdCgpIHByb2dyZXNzOlByb2dyZXNzRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XHJcbiAgICB0aGlzLnByb2dyZXNzLnJlbW92ZUJhcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTp2b2lkIHtcclxuICAgIHRoaXMucGVyY2VudCA9ICsoMTAwICogdGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4KS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIGxldCB0b3RhbFBlcmNlbnRhZ2UgPSB0aGlzLnByb2dyZXNzLmJhcnMucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDpudW1iZXIsIGJhcjpCYXJDb21wb25lbnQpOm51bWJlciB7XHJcbiAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgaWYgKHRvdGFsUGVyY2VudGFnZSA+IDEwMCkge1xyXG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
