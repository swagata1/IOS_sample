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
var bootstrap_config_1 = require('../bootstrap-config');
var datepicker_inner_component_1 = require('./datepicker-inner.component');
var TEMPLATE_OPTIONS = (_a = {},
    _a[bootstrap_config_1.Ng2BootstrapTheme.BS4] = {
        ARROW_LEFT: '&lt;',
        ARROW_RIGHT: '&gt;'
    },
    _a[bootstrap_config_1.Ng2BootstrapTheme.BS3] = {
        ARROW_LEFT: "\n    <span data-isc-icon=\"arrow_back\">\n      <span class=\"material-icons \">arrow_back</span>      \n    </span>\n    ",
        ARROW_RIGHT: "\n    <span data-isc-icon=\"arrow_forward\">\n      <span class=\"material-icons \">arrow_forward</span>      \n    </span>\n    "
    },
    _a
);
var DayPickerComponent = (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.CURRENT_THEME_TEMPLATE = TEMPLATE_OPTIONS[bootstrap_config_1.Ng2BootstrapConfig.theme || bootstrap_config_1.Ng2BootstrapTheme.BS3];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBS4", {
        get: function () {
            return bootstrap_config_1.Ng2BootstrapConfig.theme === bootstrap_config_1.Ng2BootstrapTheme.BS4;
        },
        enumerable: true,
        configurable: true
    });
    DayPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = (difference > 0)
                ? 7 - difference
                : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    };
    DayPickerComponent = __decorate([
        core_1.Component({
            selector: 'daypicker',
            styles: ["\n        .full button span {\n          background-color: limegreen;\n          border-radius: 32px;\n          color: black;\n        }\n        .partially button span {\n          background-color: orange;\n          border-radius: 32px;\n          color: black;\n        }        \n       button{\n          border: none;\n          -webkit-appearance:none;\n      }\n    "],
            template: "\n<table *ngIf=\"datePicker.datepickerMode==='day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId+'-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-left\" \n                (click)=\"datePicker.move(-1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_LEFT\">\n        </button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-right\" \n                (click)=\"datePicker.move(1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_RIGHT\">\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" [ngClass]=\"{'text-xs-center':isBS4, 'text-center': !isBS4}\">\n        <small aria-label=\"labelz.full\"><b>{{labelz.abbr}}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" [ngClass]=\"{'text-xs-center':isBS4, 'text-center': !isBS4}\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" [ngClass]=\"{'text-xs-center':isBS4, 'text-center': !isBS4}\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBS4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBS4 && datePicker.isActive(dtz), 'btn-default': !isBS4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBS4 && dtz.current}\">{{dtz.label}}</span>\n          </button>\n        </td>\n      </tr>\n    </template>\n  </tbody>\n</table>\n  "
        }), 
        __metadata('design:paramtypes', [datepicker_inner_component_1.DatePickerInnerComponent])
    ], DayPickerComponent);
    return DayPickerComponent;
}());
exports.DayPickerComponent = DayPickerComponent;
var _a;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlUGlja2VyL2RheXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxpQ0FBc0QscUJBQXFCLENBQUMsQ0FBQTtBQUM1RSwyQ0FBeUMsOEJBQThCLENBQUMsQ0FBQTtBQUd4RSxJQUFNLGdCQUFnQixHQUFPO0lBQzNCLEdBQUMsb0NBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUU7UUFDdkIsVUFBVSxFQUFFLE1BQU07UUFDbEIsV0FBVyxFQUFFLE1BQU07S0FDcEI7SUFDRCxHQUFDLG9DQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFFO1FBQ3ZCLFVBQVUsRUFBRSw2SEFJWDtRQUNELFdBQVcsRUFBRSxtSUFJWjtLQUNGOztDQUNGLENBQUM7QUE4RUY7SUFTRSw0QkFBbUIsVUFBbUM7UUFQL0MsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQUV2QixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUUvQiwyQkFBc0IsR0FBTyxnQkFBZ0IsQ0FBQyxxQ0FBa0IsQ0FBQyxLQUFLLElBQUksb0NBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHdEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFXLHFDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLHFDQUFrQixDQUFDLEtBQUssS0FBSyxvQ0FBaUIsQ0FBQyxHQUFHLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFNTSxxQ0FBUSxHQUFmO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7WUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxD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QUFXO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLDBYQWVOLENBQUM7WUFDSixRQUFRLEVBQUUsMnpGQXdEVDtTQUNGLENBQUM7OzBCQUFBO0lBMEdGLHlCQUFDO0FBQUQsQ0F6R0EsQUF5R0MsSUFBQTtBQXpHWSwwQkFBa0IscUJBeUc5QixDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRlUGlja2VyL2RheXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmcyQm9vdHN0cmFwQ29uZmlnLCBOZzJCb290c3RyYXBUaGVtZSB9IGZyb20gJy4uL2Jvb3RzdHJhcC1jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuXHJcbi8vIHdyaXRlIGFuIGludGVyZmFjZSBmb3IgdGVtcGxhdGUgb3B0aW9uc1xyXG5jb25zdCBURU1QTEFURV9PUFRJT05TOmFueSA9IHtcclxuICBbTmcyQm9vdHN0cmFwVGhlbWUuQlM0XToge1xyXG4gICAgQVJST1dfTEVGVDogJyZsdDsnLFxyXG4gICAgQVJST1dfUklHSFQ6ICcmZ3Q7J1xyXG4gIH0sXHJcbiAgW05nMkJvb3RzdHJhcFRoZW1lLkJTM106IHtcclxuICAgIEFSUk9XX0xFRlQ6IGBcclxuICAgIDxzcGFuIGRhdGEtaXNjLWljb249XCJhcnJvd19iYWNrXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgXCI+YXJyb3dfYmFjazwvc3Bhbj4gICAgICBcclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBBUlJPV19SSUdIVDogYFxyXG4gICAgPHNwYW4gZGF0YS1pc2MtaWNvbj1cImFycm93X2ZvcndhcmRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBcIj5hcnJvd19mb3J3YXJkPC9zcGFuPiAgICAgIFxyXG4gICAgPC9zcGFuPlxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF5cGlja2VyJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmZ1bGwgYnV0dG9uIHNwYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRpYWxseSBidXR0b24gc3BhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICAgIH1cclxuICAgIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0nZGF5J1wiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImRhdGVQaWNrZXIudW5pcXVlSWQrJy10aXRsZSdcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJhY3RpdmVEYXRlSWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtbGVmdFwiIFxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiBcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJDVVJSRU5UX1RIRU1FX1RFTVBMQVRFLkFSUk9XX0xFRlRcIj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiNSArIChkYXRlUGlja2VyLnNob3dXZWVrcyA/IDEgOiAwKVwiPlxyXG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgpXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHRcIiBcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIiBcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJDVVJSRU5UX1RIRU1FX1RFTVBMQVRFLkFSUk9XX1JJR0hUXCI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGggKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiPjwvdGg+XHJcbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgbGFiZWx6IG9mIGxhYmVsc1wiIFtuZ0NsYXNzXT1cInsndGV4dC14cy1jZW50ZXInOmlzQlM0LCAndGV4dC1jZW50ZXInOiAhaXNCUzR9XCI+XHJcbiAgICAgICAgPHNtYWxsIGFyaWEtbGFiZWw9XCJsYWJlbHouZnVsbFwiPjxiPnt7bGFiZWx6LmFiYnJ9fTwvYj48L3NtYWxsPlxyXG4gICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICAgIDx0ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJyb3dzXCIgbGV0LXJvd3o9XCIkaW1wbGljaXRcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxyXG4gICAgICA8dHIgKm5nSWY9XCIhKGRhdGVQaWNrZXIub25seUN1cnJlbnRNb250aCAmJiByb3d6WzBdLnNlY29uZGFyeSAmJiByb3d6WzZdLnNlY29uZGFyeSlcIj5cclxuICAgICAgICA8dGQgKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiIGNsYXNzPVwiaDZcIiBbbmdDbGFzc109XCJ7J3RleHQteHMtY2VudGVyJzppc0JTNCwgJ3RleHQtY2VudGVyJzogIWlzQlM0fVwiPlxyXG4gICAgICAgICAgPGVtPnt7IHdlZWtOdW1iZXJzW2luZGV4XSB9fTwvZW0+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgW25nQ2xhc3NdPVwieyd0ZXh0LXhzLWNlbnRlcic6aXNCUzQsICd0ZXh0LWNlbnRlcic6ICFpc0JTNH1cIiByb2xlPVwiZ3JpZGNlbGxcIiBbaWRdPVwiZHR6LnVpZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tc20ge3tkdHouY3VzdG9tQ2xhc3N9fVwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgZHR6LnNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1zZWNvbmRhcnknOiBpc0JTNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCUzQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWRlZmF1bHQnOiAhaXNCUzR9XCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1tdXRlZCc6IGR0ei5zZWNvbmRhcnkgfHwgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCUzQgJiYgZHR6LmN1cnJlbnR9XCI+e3tkdHoubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF5UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIGxhYmVsczpBcnJheTxhbnk+ID0gW107XHJcbiAgcHVibGljIHRpdGxlOnN0cmluZztcclxuICBwdWJsaWMgcm93czpBcnJheTxhbnk+ID0gW107XHJcbiAgcHVibGljIHdlZWtOdW1iZXJzOkFycmF5PG51bWJlcj4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZVBpY2tlcjpEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XHJcbiAgcHVibGljIENVUlJFTlRfVEhFTUVfVEVNUExBVEU6YW55ID0gVEVNUExBVEVfT1BUSU9OU1tOZzJCb290c3RyYXBDb25maWcudGhlbWUgfHwgTmcyQm9vdHN0cmFwVGhlbWUuQlMzXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6RGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0JTNCgpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIE5nMkJvb3RzdHJhcENvbmZpZy50aGVtZSA9PT0gTmcyQm9vdHN0cmFwVGhlbWUuQlM0O1xyXG4gIH1cclxuXHJcbiAgLypwcml2YXRlIGdldERheXNJbk1vbnRoKHllYXI6bnVtYmVyLCBtb250aDpudW1iZXIpIHtcclxuICAgcmV0dXJuICgobW9udGggPT09IDEpICYmICh5ZWFyICUgNCA9PT0gMCkgJiZcclxuICAgKCh5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCkpKSA/IDI5IDogREFZU19JTl9NT05USFttb250aF07XHJcbiAgIH0qL1xyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwRGF5ID0ge21vbnRoczogMX07XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbiAoKTp2b2lkIHtcclxuICAgICAgbGV0IHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgbGV0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgIGxldCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydGluZ0RheSAtIGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKTtcclxuICAgICAgbGV0IG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID0gKGRpZmZlcmVuY2UgPiAwKVxyXG4gICAgICAgID8gNyAtIGRpZmZlcmVuY2VcclxuICAgICAgICA6IC1kaWZmZXJlbmNlO1xyXG4gICAgICBsZXQgZmlyc3REYXRlID0gbmV3IERhdGUoZmlyc3REYXlPZk1vbnRoLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XHJcbiAgICAgICAgZmlyc3REYXRlLnNldERhdGUoLW51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoICsgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDQyIGlzIHRoZSBudW1iZXIgb2YgZGF5cyBvbiBhIHNpeC13ZWVrIGNhbGVuZGFyXHJcbiAgICAgIGxldCBfZGF5czpBcnJheTxEYXRlPiA9IHNlbGYuZ2V0RGF0ZXMoZmlyc3REYXRlLCA0Mik7XHJcbiAgICAgIGxldCBkYXlzOkFycmF5PGFueT4gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IF9kYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KF9kYXlzW2ldLCB0aGlzLmZvcm1hdERheSk7XHJcbiAgICAgICAgX2RhdGVPYmplY3Quc2Vjb25kYXJ5ID0gX2RheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGg7XHJcbiAgICAgICAgX2RhdGVPYmplY3QudWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XHJcbiAgICAgICAgZGF5c1tpXSA9IF9kYXRlT2JqZWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmxhYmVscyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG4gICAgICAgIHNlbGYubGFiZWxzW2pdID0ge307XHJcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uYWJiciA9IHRoaXMuZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsIHRoaXMuZm9ybWF0RGF5SGVhZGVyKTtcclxuICAgICAgICBzZWxmLmxhYmVsc1tqXS5mdWxsID0gdGhpcy5kYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0RGF5VGl0bGUpO1xyXG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KGRheXMsIDcpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hvd1dlZWtzKSB7XHJcbiAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IFtdO1xyXG4gICAgICAgIGxldCB0aHVyc2RheUluZGV4ID0gKDQgKyA3IC0gdGhpcy5zdGFydGluZ0RheSkgJSA3O1xyXG4gICAgICAgIGxldCBudW1XZWVrcyA9IHNlbGYucm93cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgY3VyV2VlayA9IDA7IGN1cldlZWsgPCBudW1XZWVrczsgY3VyV2VlaysrKSB7XHJcbiAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLnB1c2goc2VsZi5nZXRJU084NjAxV2Vla051bWJlcihzZWxmLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgJ2RheScpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbiAoZGF0ZTE6RGF0ZSwgZGF0ZTI6RGF0ZSk6bnVtYmVyIHtcclxuICAgICAgbGV0IGQxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKTtcclxuICAgICAgbGV0IGQyID0gbmV3IERhdGUoZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmV0dXJuIGQxLmdldFRpbWUoKSAtIGQyLmdldFRpbWUoKTtcclxuICAgIH0sICdkYXknKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZXMoc3RhcnREYXRlOkRhdGUsIG46bnVtYmVyKTpBcnJheTxEYXRlPiB7XHJcbiAgICBsZXQgZGF0ZXM6QXJyYXk8RGF0ZT4gPSBuZXcgQXJyYXkobik7XHJcbiAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IGRhdGU6RGF0ZTtcclxuICAgIHdoaWxlIChpIDwgbikge1xyXG4gICAgICBkYXRlID0gbmV3IERhdGUoY3VycmVudC5nZXRUaW1lKCkpO1xyXG4gICAgICBkYXRlID0gdGhpcy5kYXRlUGlja2VyLmZpeFRpbWVab25lKGRhdGUpO1xyXG4gICAgICBkYXRlc1tpKytdID0gZGF0ZTtcclxuICAgICAgY3VycmVudCA9IG5ldyBEYXRlKGN1cnJlbnQuZ2V0RnVsbFllYXIoKSwgY3VycmVudC5nZXRNb250aCgpLCBjdXJyZW50LmdldERhdGUoKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJU084NjAxV2Vla051bWJlcihkYXRlOkRhdGUpOm51bWJlciB7XHJcbiAgICBsZXQgY2hlY2tEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgLy8gVGh1cnNkYXlcclxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgKyA0IC0gKGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3KSk7XHJcbiAgICBsZXQgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAvLyBDb21wYXJlIHdpdGggSmFuIDFcclxuICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTtcclxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgodGltZSAtIGNoZWNrRGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxyXG59Il19
