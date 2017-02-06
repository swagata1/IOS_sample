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
var datepicker_date_formatter_1 = require('./datepicker-date-formatter');
var FORMAT_DAY = 'DD';
var FORMAT_MONTH = 'MMMM';
var FORMAT_YEAR = 'YYYY';
var FORMAT_DAY_HEADER = 'dd';
var FORMAT_DAY_TITLE = 'MMMM YYYY';
var FORMAT_MONTH_TITLE = 'YYYY';
var DATEPICKER_MODE = 'day';
var MIN_MODE = 'day';
var MAX_MODE = 'year';
var SHOW_WEEKS = true;
var ONLY_CURRENT_MONTH = false;
var STARTING_DAY = 0;
var YEAR_RANGE = 20;
var SHORTCUT_PROPAGATION = false;
var DatePickerInnerComponent = (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new core_1.EventEmitter(undefined);
        this.update = new core_1.EventEmitter(false);
        this.dismissDatepicker = new core_1.EventEmitter(false);
        this.clearSelectedDate = new core_1.EventEmitter(false);
        this.triggerTodaysDate = new core_1.EventEmitter(undefined);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new datepicker_date_formatter_1.DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerInnerComponent.prototype.ngOnInit = function () {
        this.formatDay = this.formatDay || FORMAT_DAY;
        this.formatMonth = this.formatMonth || FORMAT_MONTH;
        this.formatYear = this.formatYear || FORMAT_YEAR;
        this.formatDayHeader = this.formatDayHeader || FORMAT_DAY_HEADER;
        this.formatDayTitle = this.formatDayTitle || FORMAT_DAY_TITLE;
        this.formatMonthTitle = this.formatMonthTitle || FORMAT_MONTH_TITLE;
        this.showWeeks = (this.showWeeks === undefined
            ? SHOW_WEEKS
            : this.showWeeks);
        this.onlyCurrentMonth = (this.onlyCurrentMonth === undefined
            ? ONLY_CURRENT_MONTH
            : this.onlyCurrentMonth);
        this.startingDay = this.startingDay || STARTING_DAY;
        this.yearRange = this.yearRange || YEAR_RANGE;
        this.shortcutPropagation = this.shortcutPropagation || SHORTCUT_PROPAGATION;
        this.datepickerMode = this.datepickerMode || DATEPICKER_MODE;
        this.minMode = this.minMode || MIN_MODE;
        this.maxMode = this.maxMode || MAX_MODE;
        this.uniqueId = 'datepicker-' + '-' + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format);
    };
    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    DatePickerInnerComponent.prototype.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    DatePickerInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
        }
    };
    DatePickerInnerComponent.prototype.toggleMode = function (direction) {
        direction = direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        var customClassObject = this.customClass
            .find(function (customClass) {
            return customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode;
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    DatePickerInnerComponent.prototype.isDisabled = function (date) {
        return ((this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.prototype.closeDatepicker = function () {
        this.dismissDatepicker.emit();
    };
    DatePickerInnerComponent.prototype.clearDatepicker = function () {
        this.clearSelectedDate.emit();
    };
    DatePickerInnerComponent.prototype.setTodaysDate = function () {
        var todayDate = new Date();
        this.triggerTodaysDate.emit(todayDate);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "datepickerMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatePickerInnerComponent.prototype, "startingDay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatePickerInnerComponent.prototype, "yearRange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerInnerComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerInnerComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "minMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "maxMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerInnerComponent.prototype, "showWeeks", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatDay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatYear", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerInnerComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerInnerComponent.prototype, "onlyCurrentMonth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatePickerInnerComponent.prototype, "shortcutPropagation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatePickerInnerComponent.prototype, "customClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePickerInnerComponent.prototype, "dateDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerInnerComponent.prototype, "initDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerInnerComponent.prototype, "selectionDone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerInnerComponent.prototype, "update", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerInnerComponent.prototype, "dismissDatepicker", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerInnerComponent.prototype, "clearSelectedDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatePickerInnerComponent.prototype, "triggerTodaysDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatePickerInnerComponent.prototype, "activeDate", null);
    DatePickerInnerComponent = __decorate([
        core_1.Component({
            selector: 'datepicker-inner',
            template: "\n    <div class=\"datepickerBorder\">\n      <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" ><!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n        <ng-content></ng-content>\n      </div>\n      <div>\n        <div class='DateButton'>\n          <button (click)=\"setTodaysDate()\">Today</button>\n          <button (click)=\"clearDatepicker()\">Clear</button>\n          <button (click)=\"closeDatepicker()\">Done</button>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .DateButton {\n          padding:0 35px;\n      }\n    .DateButton  button{\n           -webkit-appearance: none;\n           color: #fff;\n           border-radius: 3px;\n            padding: 5px 10px;\n            border-width: 1px;\n            border-style: none;\n      }\n      .DateButton button:nth-child(1){\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n        background: #31b0d5;\n      }\n      .DateButton button:nth-child(2){\n            background: #b30000;\n            margin-left: -6px;\n            border-bottom-left-radius: 0;\n            border-top-left-radius: 0;\n      }\n      .DateButton button:nth-child(3){\n        float: right;\n        background-color: #0d864b;\n      }\n      .well {\n        border: none;\n      }\n      .datepickerBorder {\n            border: 1px solid #00a4e4;\n            padding-bottom: 25px;\n            border-radius: 3px;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerInnerComponent);
    return DatePickerInnerComponent;
}());
exports.DatePickerInnerComponent = DatePickerInnerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlUGlja2VyL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUYsZUFBZSxDQUFDLENBQUE7QUFFekcsMENBQThCLDZCQUE2QixDQUFDLENBQUE7QUFFNUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztBQUM1QixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDM0IsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUM7QUFDL0IsSUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7QUFDckMsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUM7QUFDbEMsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDeEIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFHdEIsSUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUM7QUF3RW5DO0lBQUE7UUF1Qm1CLGtCQUFhLEdBQXVCLElBQUksbUJBQVksQ0FBTyxTQUFTLENBQUMsQ0FBQztRQUV0RSxXQUFNLEdBQXVCLElBQUksbUJBQVksQ0FBTyxLQUFLLENBQUMsQ0FBQztRQUMzRCxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxDQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLHNCQUFpQixHQUFxQixJQUFJLG1CQUFZLENBQU0sS0FBSyxDQUFDLENBQUM7UUFDbkUsc0JBQWlCLEdBQXNCLElBQUksbUJBQVksQ0FBTyxTQUFTLENBQUMsQ0FBQztRQUVuRixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xC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cGlja2VyLWlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vZGF0ZXBpY2tlci1kYXRlLWZvcm1hdHRlcic7XHJcblxyXG5jb25zdCBGT1JNQVRfREFZID0gJ0REJztcclxuY29uc3QgRk9STUFUX01PTlRIID0gJ01NTU0nO1xyXG5jb25zdCBGT1JNQVRfWUVBUiA9ICdZWVlZJztcclxuY29uc3QgRk9STUFUX0RBWV9IRUFERVIgPSAnZGQnO1xyXG5jb25zdCBGT1JNQVRfREFZX1RJVExFID0gJ01NTU0gWVlZWSc7XHJcbmNvbnN0IEZPUk1BVF9NT05USF9USVRMRSA9ICdZWVlZJztcclxuY29uc3QgREFURVBJQ0tFUl9NT0RFID0gJ2RheSc7XHJcbmNvbnN0IE1JTl9NT0RFID0gJ2RheSc7XHJcbmNvbnN0IE1BWF9NT0RFID0gJ3llYXInO1xyXG5jb25zdCBTSE9XX1dFRUtTID0gdHJ1ZTtcclxuY29uc3QgT05MWV9DVVJSRU5UX01PTlRIID0gZmFsc2U7XHJcbmNvbnN0IFNUQVJUSU5HX0RBWSA9IDA7XHJcbmNvbnN0IFlFQVJfUkFOR0UgPSAyMDtcclxuLy8gY29uc3QgTUlOX0RBVEU6RGF0ZSA9IHZvaWQgMDtcclxuLy8gY29uc3QgTUFYX0RBVEU6RGF0ZSA9IHZvaWQgMDtcclxuY29uc3QgU0hPUlRDVVRfUFJPUEFHQVRJT04gPSBmYWxzZTtcclxuXHJcbi8vIGNvbnN0IERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcblxyXG4vKlxyXG4gY29uc3QgS0VZUyA9IHtcclxuIDEzOiAnZW50ZXInLFxyXG4gMzI6ICdzcGFjZScsXHJcbiAzMzogJ3BhZ2V1cCcsXHJcbiAzNDogJ3BhZ2Vkb3duJyxcclxuIDM1OiAnZW5kJyxcclxuIDM2OiAnaG9tZScsXHJcbiAzNzogJ2xlZnQnLFxyXG4gMzg6ICd1cCcsXHJcbiAzOTogJ3JpZ2h0JyxcclxuIDQwOiAnZG93bidcclxuIH07XHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWlubmVyJywgICAgXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyQm9yZGVyXCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyTW9kZVwiIGNsYXNzPVwid2VsbCB3ZWxsLXNtIGJnLWZhZGVkIHAtYSBjYXJkXCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgPjwhLS0mbHQ7ISZuZGFzaDtuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nRGF0ZUJ1dHRvbic+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzZXRUb2RheXNEYXRlKClcIj5Ub2RheTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xlYXJEYXRlcGlja2VyKClcIj5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xvc2VEYXRlcGlja2VyKClcIj5Eb25lPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCwgIFxyXG4gIHN0eWxlczogW2BcclxuICAgIC5EYXRlQnV0dG9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6MCAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAuRGF0ZUJ1dHRvbiAgYnV0dG9ue1xyXG4gICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5EYXRlQnV0dG9uIGJ1dHRvbjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMxYjBkNTtcclxuICAgICAgfVxyXG4gICAgICAuRGF0ZUJ1dHRvbiBidXR0b246bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgICAuRGF0ZUJ1dHRvbiBidXR0b246bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4NjRiO1xyXG4gICAgICB9XHJcbiAgICAgIC53ZWxsIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGVwaWNrZXJCb3JkZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBhNGU0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZXBpY2tlck1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgc3RhcnRpbmdEYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgeWVhclJhbmdlOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5EYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhEYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5Nb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1heE1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd1dlZWtzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtYXREYXk6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0TW9udGg6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0WWVhcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzczogQXJyYXk8e2RhdGU6IERhdGUsIG1vZGU6IHN0cmluZywgY2xheno6IHN0cmluZ30+O1xyXG4gIC8vIHRvZG86IGNoYW5nZSB0eXBlIGR1cmluZyBpbXBsZW1lbnRhdGlvblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRlRGlzYWJsZWQ6IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgaW5pdERhdGU6IERhdGU7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBkaXNtaXNzRGF0ZXBpY2tlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xlYXJTZWxlY3RlZERhdGU6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdHJpZ2dlclRvZGF5c0RhdGU6RXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpOyAgXHJcblxyXG4gIHB1YmxpYyBzdGVwRGF5OiBhbnkgPSB7fTtcclxuICBwdWJsaWMgc3RlcE1vbnRoOiBhbnkgPSB7fTtcclxuICBwdWJsaWMgc3RlcFllYXI6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIG1vZGVzOiBBcnJheTxzdHJpbmc+ID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xyXG4gIHByaXZhdGUgZGF0ZUZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlciA9IG5ldyBEYXRlRm9ybWF0dGVyKCk7XHJcbiAgcHJpdmF0ZSB1bmlxdWVJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IERhdGU7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgcHJpdmF0ZSBhY3RpdmVEYXRlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSByZWZyZXNoVmlld0hhbmRsZXJEYXk6IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgY29tcGFyZUhhbmRsZXJEYXk6IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgcmVmcmVzaFZpZXdIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xyXG4gIHByaXZhdGUgY29tcGFyZUhhbmRsZXJNb250aDogRnVuY3Rpb247XHJcbiAgcHJpdmF0ZSByZWZyZXNoVmlld0hhbmRsZXJZZWFyOiBGdW5jdGlvbjtcclxuICBwcml2YXRlIGNvbXBhcmVIYW5kbGVyWWVhcjogRnVuY3Rpb247ICAgXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IGFkZCBmb3JtYXR0ZXIgdmFsdWUgdG8gRGF0ZSBvYmplY3RcclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1hdERheSA9IHRoaXMuZm9ybWF0RGF5IHx8IEZPUk1BVF9EQVk7XHJcbiAgICB0aGlzLmZvcm1hdE1vbnRoID0gdGhpcy5mb3JtYXRNb250aCB8fCBGT1JNQVRfTU9OVEg7XHJcbiAgICB0aGlzLmZvcm1hdFllYXIgPSB0aGlzLmZvcm1hdFllYXIgfHwgRk9STUFUX1lFQVI7XHJcbiAgICB0aGlzLmZvcm1hdERheUhlYWRlciA9IHRoaXMuZm9ybWF0RGF5SGVhZGVyIHx8IEZPUk1BVF9EQVlfSEVBREVSO1xyXG4gICAgdGhpcy5mb3JtYXREYXlUaXRsZSA9IHRoaXMuZm9ybWF0RGF5VGl0bGUgfHwgRk9STUFUX0RBWV9USVRMRTtcclxuICAgIHRoaXMuZm9ybWF0TW9udGhUaXRsZSA9IHRoaXMuZm9ybWF0TW9udGhUaXRsZSB8fCBGT1JNQVRfTU9OVEhfVElUTEU7XHJcbiAgICB0aGlzLnNob3dXZWVrcyA9ICh0aGlzLnNob3dXZWVrcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gU0hPV19XRUVLU1xyXG4gICAgICA6IHRoaXMuc2hvd1dlZWtzKTtcclxuICAgIHRoaXMub25seUN1cnJlbnRNb250aCA9ICh0aGlzLm9ubHlDdXJyZW50TW9udGggPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IE9OTFlfQ1VSUkVOVF9NT05USFxyXG4gICAgICA6IHRoaXMub25seUN1cnJlbnRNb250aCk7XHJcbiAgICB0aGlzLnN0YXJ0aW5nRGF5ID0gdGhpcy5zdGFydGluZ0RheSB8fCBTVEFSVElOR19EQVk7XHJcbiAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMueWVhclJhbmdlIHx8IFlFQVJfUkFOR0U7XHJcbiAgICB0aGlzLnNob3J0Y3V0UHJvcGFnYXRpb24gPSB0aGlzLnNob3J0Y3V0UHJvcGFnYXRpb24gfHwgU0hPUlRDVVRfUFJPUEFHQVRJT047XHJcbiAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5kYXRlcGlja2VyTW9kZSB8fCBEQVRFUElDS0VSX01PREU7XHJcbiAgICB0aGlzLm1pbk1vZGUgPSB0aGlzLm1pbk1vZGUgfHwgTUlOX01PREU7XHJcbiAgICB0aGlzLm1heE1vZGUgPSB0aGlzLm1heE1vZGUgfHwgTUFYX01PREU7XHJcblxyXG4gICAgLy8gdG9kbzogdXNlIGRhdGUgZm9yIHVuaXF1ZSB2YWx1ZVxyXG4gICAgdGhpcy51bmlxdWVJZCA9ICdkYXRlcGlja2VyLScgKyAnLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5pdERhdGUpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5pbml0RGF0ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpIGFzIG51bWJlcik7XHJcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVEYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRoaXMucmVmcmVzaFZpZXcgc2hvdWxkIGJlIGNhbGxlZCBoZXJlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgb24gdGhlIGZseVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtdmFyaWFibGVcclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbXBhcmVIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xyXG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5ID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcclxuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlclllYXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBhcmUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIGlmIChkYXRlMSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTEsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFJlZnJlc2hWaWV3SGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyID0gaGFuZGxlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVGaWx0ZXIoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXQoZGF0ZSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShkYXRlT2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbXBhcmUoZGF0ZU9iamVjdC5kYXRlLCB0aGlzLmFjdGl2ZURhdGUpID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUlkID0gZGF0ZU9iamVjdC51aWQ7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVEYXRlT2JqZWN0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCBkYXRlT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgIGRhdGVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XHJcbiAgICBkYXRlT2JqZWN0LmxhYmVsID0gdGhpcy5kYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCk7XHJcbiAgICBkYXRlT2JqZWN0LnNlbGVjdGVkID0gdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSA9PT0gMDtcclxuICAgIGRhdGVPYmplY3QuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XHJcbiAgICBkYXRlT2JqZWN0LmN1cnJlbnQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDA7XHJcbiAgICBkYXRlT2JqZWN0LmN1c3RvbUNsYXNzID0gdGhpcy5nZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZU9iamVjdC5kYXRlKTtcclxuICAgIHJldHVybiBkYXRlT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNwbGl0KGFycjogQXJyYXk8YW55Piwgc2l6ZTogbnVtYmVyKTogQXJyYXk8YW55PiB7XHJcbiAgICBsZXQgYXJyYXlzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXJyYXlzLnB1c2goYXJyLnNwbGljZSgwLCBzaXplKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlzO1xyXG4gIH1cclxuXHJcbiAgLy8gRml4IGEgaGFyZC1yZXByb2R1Y2libGUgYnVnIHdpdGggdGltZXpvbmVzXHJcbiAgLy8gVGhlIGJ1ZyBkZXBlbmRzIG9uIE9TLCBicm93c2VyLCBjdXJyZW50IHRpbWV6b25lIGFuZCBjdXJyZW50IGRhdGVcclxuICAvLyBpLmUuXHJcbiAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgyMDE0LCAwLCAxKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksXHJcbiAgLy8gZGF0ZS5nZXRIb3VycygpKTsgY2FuIHJlc3VsdCBpbiBcIjIwMTMgMTEgMzEgMjNcIiBiZWNhdXNlIG9mIHRoZSBidWcuXHJcbiAgcHVibGljIGZpeFRpbWVab25lKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGhvdXJzID09PSAyMyA/IGhvdXJzICsgMiA6IDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdChkYXRlOiBEYXRlLCBpc01hbnVhbDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUpIHtcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgaWYgKGlzTWFudWFsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpIGFzIG51bWJlcik7XHJcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZShkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGV4cGVjdGVkU3RlcDogYW55O1xyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknKSB7XHJcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcERheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBNb250aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcFllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4cGVjdGVkU3RlcCkge1xyXG4gICAgICBsZXQgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC55ZWFycyB8fCAwKTtcclxuICAgICAgbGV0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLm1vbnRocyB8fCAwKTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG5cclxuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZU1vZGUoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAxO1xyXG5cclxuICAgIGlmICgodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5tYXhNb2RlICYmIGRpcmVjdGlvbiA9PT0gMSkgfHxcclxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSAmJiBkaXJlY3Rpb24gPT09IC0xKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpICsgZGlyZWN0aW9uXTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIC8vIHRvZG86IGJ1aWxkIGEgaGFzaCBvZiBjdXN0b20gY2xhc3NlcywgaXQgd2lsbCB3b3JrIGZhc3RlclxyXG4gICAgY29uc3QgY3VzdG9tQ2xhc3NPYmplY3Q6IHtkYXRlOiBEYXRlLCBtb2RlOiBzdHJpbmcsIGNsYXp6OiBzdHJpbmd9ID0gdGhpcy5jdXN0b21DbGFzc1xyXG4gICAgICAuZmluZCgoY3VzdG9tQ2xhc3M6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXN0b21DbGFzcy5kYXRlLnZhbHVlT2YoKSA9PT0gZGF0ZS52YWx1ZU9mKCkgJiZcclxuICAgICAgICAgIGN1c3RvbUNsYXNzLm1vZGUgPT09IHRoaXMuZGF0ZXBpY2tlck1vZGU7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgcmV0dXJuIGN1c3RvbUNsYXNzT2JqZWN0ID09PSB1bmRlZmluZWQgPyAnJyA6IGN1c3RvbUNsYXNzT2JqZWN0LmNsYXp6O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIC8vIHRvZG86IGltcGxlbWVudCBkYXRlRGlzYWJsZWQgYXR0cmlidXRlXHJcbiAgICByZXR1cm4gKCh0aGlzLm1pbkRhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPCAwKSB8fFxyXG4gICAgKHRoaXMubWF4RGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA+IDApKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZURhdGVwaWNrZXIoKSB7ICAgIFxyXG4gICAgdGhpcy5kaXNtaXNzRGF0ZXBpY2tlci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJEYXRlcGlja2VyKCkgeyAgICBcclxuICAgIHRoaXMuY2xlYXJTZWxlY3RlZERhdGUuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRvZGF5c0RhdGUoKSB7XHJcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTsgXHJcbiAgICB0aGlzLnRyaWdnZXJUb2RheXNEYXRlLmVtaXQodG9kYXlEYXRlKTtcclxuICB9XHJcbn0iXX0=
