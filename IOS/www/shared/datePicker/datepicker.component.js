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
var datepicker_inner_component_1 = require('./datepicker-inner.component');
var forms_1 = require('@angular/forms');
var DatePickerComponent = (function () {
    function DatePickerComponent(cd) {
        this.selectionDone = new core_1.EventEmitter(undefined);
        this.dismissDatepicker = new core_1.EventEmitter(false);
        this.clearSelectedDate = new core_1.EventEmitter(false);
        this.triggerTodaysDate = new core_1.EventEmitter(undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.cd = cd;
        cd.valueAccessor = this;
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.cd.viewToModelUpdate(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onDoneButton = function (event) {
        this.dismissDatepicker.emit(event);
    };
    DatePickerComponent.prototype.onClearButton = function (event) {
        this.clearSelectedDate.emit(event);
    };
    DatePickerComponent.prototype.onTodaysDateSelected = function (event) {
        var todaysDate = new Date();
        this.triggerTodaysDate.emit(todaysDate);
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "datepickerMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerComponent.prototype, "initDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "minMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "maxMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "showWeeks", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatDay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatYear", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatePickerComponent.prototype, "startingDay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatePickerComponent.prototype, "yearRange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "onlyCurrentMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "shortcutPropagation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatePickerComponent.prototype, "customClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "dateDisabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerComponent.prototype, "selectionDone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerComponent.prototype, "dismissDatepicker", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerComponent.prototype, "clearSelectedDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerComponent.prototype, "triggerTodaysDate", void 0);
    __decorate([
        core_1.ViewChild(datepicker_inner_component_1.DatePickerInnerComponent), 
        __metadata('design:type', datepicker_inner_component_1.DatePickerInnerComponent)
    ], DatePickerComponent.prototype, "_datePicker", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerComponent.prototype, "activeDate", null);
    DatePickerComponent = __decorate([
        core_1.Component({
            selector: 'datepicker[ngModel]',
            template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (dismissDatepicker)=\"onDoneButton($event)\"\n                      (clearSelectedDate)=\"onClearButton($event)\"\n                      (triggerTodaysDate)=\"onTodaysDateSelected($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
            providers: [forms_1.NgModel]
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlUGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0UsZUFBZSxDQUFDLENBQUE7QUFDeEYsMkNBQXlDLDhCQUE4QixDQUFDLENBQUE7QUFDeEUsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUF1Qy9EO0lBeUNFLDZCQUEyQixFQUFVO1FBbkJwQixrQkFBYSxHQUFzQixJQUFJLG1CQUFZLENBQU8sU0FBUyxDQUFDLENBQUM7UUFDckUsc0JBQWlCLEdBQXFCLElBQUksbUJBQVksQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUNuRSxzQkFBaUIsR0FBcUIsSUFBSSxtQkFBWSxDQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ25FLHNCQUFpQixHQUFxQixJQUFJLG1CQUFZLENBQU0sU0FBUyxDQUFDLENBQUM7UUFJakYsYUFBUSxHQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbEMsY0FBUyxHQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFHbEMsU0FBSSxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFTN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFYixFQUFFLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBUkQsc0JBQVcsMkNBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLENBQUM7YUFRRCxVQUFzQixLQUFVO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQVZBO0lBWU0sc0NBQVEsR0FBZixVQUFnQixLQUFTO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDZDQUFlLEdBQXRCLFVBQXVCLEtBQVU7UUFDL0IsSUFBSSxDQUFD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LEFBNkZDLElBQUE7QUE3RlksMkJBQW1CLHNCQTZGL0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZGF0ZVBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBTZWxmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyW25nTW9kZWxdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRhdGVwaWNrZXItaW5uZXIgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVwaWNrZXJNb2RlXT1cImRhdGVwaWNrZXJNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpbml0RGF0ZV09XCJpbml0RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbk1vZGVdPVwibWluTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4TW9kZV09XCJtYXhNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzaG93V2Vla3NdPVwic2hvd1dlZWtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXldPVwiZm9ybWF0RGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aF09XCJmb3JtYXRNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0WWVhcl09XCJmb3JtYXRZZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlIZWFkZXJdPVwiZm9ybWF0RGF5SGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlUaXRsZV09XCJmb3JtYXREYXlUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhUaXRsZV09XCJmb3JtYXRNb250aFRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzdGFydGluZ0RheV09XCJzdGFydGluZ0RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhclJhbmdlXT1cInllYXJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VzdG9tQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVEaXNhYmxlZF09XCJkYXRlRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW29ubHlDdXJyZW50TW9udGhdPVwib25seUN1cnJlbnRNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvcnRjdXRQcm9wYWdhdGlvbl09XCJzaG9ydGN1dFByb3BhZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25Eb25lKT1cIm9uU2VsZWN0aW9uRG9uZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChkaXNtaXNzRGF0ZXBpY2tlcik9XCJvbkRvbmVCdXR0b24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xlYXJTZWxlY3RlZERhdGUpPVwib25DbGVhckJ1dHRvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICh0cmlnZ2VyVG9kYXlzRGF0ZSk9XCJvblRvZGF5c0RhdGVTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgIDxkYXlwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9kYXlwaWNrZXI+XHJcbiAgICAgIDxtb250aHBpY2tlciB0YWJpbmRleD1cIjBcIj48L21vbnRocGlja2VyPlxyXG4gICAgICA8eWVhcnBpY2tlciB0YWJpbmRleD1cIjBcIj48L3llYXJwaWNrZXI+XHJcbiAgICA8L2RhdGVwaWNrZXItaW5uZXI+XHJcbiAgICBgLFxyXG4gIHByb3ZpZGVyczogW05nTW9kZWxdXHJcbn0pXHJcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVwaWNrZXJNb2RlOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgaW5pdERhdGU6RGF0ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgbWluRGF0ZTpEYXRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhEYXRlOkRhdGU7XHJcbiAgQElucHV0KCkgcHVibGljIG1pbk1vZGU6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhNb2RlOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd1dlZWtzOmJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1hdERheTpzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1hdE1vbnRoOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0WWVhcjpzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1hdERheUhlYWRlcjpzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1hdERheVRpdGxlOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0TW9udGhUaXRsZTpzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHN0YXJ0aW5nRGF5Om51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgeWVhclJhbmdlOm51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgb25seUN1cnJlbnRNb250aDpib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG9ydGN1dFByb3BhZ2F0aW9uOmJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzOkFycmF5PHtkYXRlOkRhdGUsIG1vZGU6c3RyaW5nLCBjbGF6ejpzdHJpbmd9PjtcclxuLy8gdG9kbzogY2hhbmdlIHR5cGUgZHVyaW5nIGltcGxlbWVudGF0aW9uXHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVEaXNhYmxlZDphbnk7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uRG9uZTpFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBkaXNtaXNzRGF0ZXBpY2tlcjpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbGVhclNlbGVjdGVkRGF0ZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB0cmlnZ2VyVG9kYXlzRGF0ZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih1bmRlZmluZWQpO1xyXG5cclxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkgcHVibGljIF9kYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XHJcblxyXG4gIHB1YmxpYyBvbkNoYW5nZTphbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHVibGljIG9uVG91Y2hlZDphbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIHB1YmxpYyBjZDpOZ01vZGVsO1xyXG4gIHByaXZhdGUgX25vdzpEYXRlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9hY3RpdmVEYXRlOkRhdGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBhY3RpdmVEYXRlKCk6RGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9ub3c7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQFNlbGYoKSBjZDpOZ01vZGVsKSB7XHJcbiAgICB0aGlzLmNkID0gY2Q7XHJcbiAgICAvLyBoYWNrXHJcbiAgICBjZC52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTpEYXRlKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25VcGRhdGUoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIHRoaXMuY2Qudmlld1RvTW9kZWxVcGRhdGUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0aW9uRG9uZShldmVudDpEYXRlKTp2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkRvbmVCdXR0b24oZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIHRoaXMuZGlzbWlzc0RhdGVwaWNrZXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGVhckJ1dHRvbihldmVudDphbnkpOnZvaWQge1xyXG4gICAgdGhpcy5jbGVhclNlbGVjdGVkRGF0ZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblRvZGF5c0RhdGVTZWxlY3RlZChldmVudDpEYXRlKTp2b2lkIHtcclxuICAgIGxldCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMudHJpZ2dlclRvZGF5c0RhdGUuZW1pdCh0b2RheXNEYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IHN1cHBvcnQgbnVsbCB2YWx1ZVxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci5jb21wYXJlKHZhbHVlLCB0aGlzLl9hY3RpdmVEYXRlKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2b2lkIDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjooXzphbnkpID0+IHt9KTp2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjooKSA9PiB7fSk6dm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufSJdfQ==
