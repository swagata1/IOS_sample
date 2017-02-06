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
var YearPickerComponent = (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBS4", {
        get: function () {
            return bootstrap_config_1.Ng2BootstrapConfig.theme === bootstrap_config_1.Ng2BootstrapTheme.BS4;
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            var years = new Array(this.yearRange);
            var date;
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label,
                years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, 5);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    YearPickerComponent.prototype.getStartingYear = function (year) {
        return ((year - 1) / this.datePicker.yearRange) * this.datePicker.yearRange + 1;
    };
    YearPickerComponent = __decorate([
        core_1.Component({
            selector: 'yearpicker',
            styles: ["\n        .full button span {\n          background-color: limegreen;\n          border-radius: 32px;\n          color: black;\n        }\n        .partially button span {\n          background-color: orange;\n          border-radius: 32px;\n          color: black;\n        }\n        .glyphicon-chevron-left:before {\n            content: \"e079\";\n        }\n       button{\n          border: none;\n          -webkit-appearance:none;\n      }\n    "],
            template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <span data-isc-icon=\"arrow_back\">\n            <span class=\"material-icons \">arrow_back</span>      \n          </span>\n        </button>\n      </th>\n      <th colspan=\"3\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <span data-isc-icon=\"arrow_forward\">\n            <span class=\"material-icons \">arrow_forward</span>      \n          </span>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBS4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBS4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBS4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBS4 && dtz.current, 'text-info': !isBS4 && dtz.current}\">{{dtz.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
        }), 
        __metadata('design:paramtypes', [datepicker_inner_component_1.DatePickerInnerComponent])
    ], YearPickerComponent);
    return YearPickerComponent;
}());
exports.YearPickerComponent = YearPickerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlUGlja2VyL3llYXJwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsaUNBQXNELHFCQUFxQixDQUFDLENBQUE7QUFDNUUsMkNBQXlDLDhCQUE4QixDQUFDLENBQUE7QUFxRXhFO0lBS0UsNkJBQW1CLFVBQW1DO1FBRjlDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFHM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFXLHNDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLHFDQUFrQixDQUFDLEtBQUssS0FBSyxvQ0FBaUIsQ0FBQyxHQUFHLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFFTSxzQ0FBUSxHQUFmO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwQyxJQUFJLEtBQUssR0FBYyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakQsSUFBSSxJQUFTLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVoRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsS0FBVSxFQUFFLEtBQVU7WUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sNkNBQWUsR0FBdkIsVUFBd0IsSUFBVztRQUVqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBaEhIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxDQUFDLHVjQWtCTixDQUFDO1lBQ0osUUFBUSxFQUFFLHMvREE0Q1Q7U0FDRixDQUFDOzsyQkFBQTtJQStDRiwwQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksMkJBQW1CLHNCQThDL0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZGF0ZVBpY2tlci95ZWFycGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZzJCb290c3RyYXBDb25maWcsIE5nMkJvb3RzdHJhcFRoZW1lIH0gZnJvbSAnLi4vYm9vdHN0cmFwLWNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd5ZWFycGlja2VyJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmZ1bGwgYnV0dG9uIHNwYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRpYWxseSBidXR0b24gc3BhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZTA3OVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgICB9XHJcbiAgICBgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J3llYXInXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgPHNwYW4gZGF0YS1pc2MtaWNvbj1cImFycm93X2JhY2tcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBcIj5hcnJvd19iYWNrPC9zcGFuPiAgICAgIFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGggY29sc3Bhbj1cIjNcIj5cclxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGRhdGEtaXNjLWljb249XCJhcnJvd19mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgXCI+YXJyb3dfZm9yd2FyZDwvc3Bhbj4gICAgICBcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxyXG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQlM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JTNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQlM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JTNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JTNCAmJiBkdHouY3VycmVudH1cIj57e2R0ei5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFllYXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBkYXRlUGlja2VyOkRhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcclxuICBwcml2YXRlIHRpdGxlOnN0cmluZztcclxuICBwcml2YXRlIHJvd3M6QXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjpEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzQlM0KCk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gTmcyQm9vdHN0cmFwQ29uZmlnLnRoZW1lID09PSBOZzJCb290c3RyYXBUaGVtZS5CUzQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcFllYXIgPSB7eWVhcnM6IHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2V9O1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24gKCk6dm9pZCB7XHJcbiAgICAgIGxldCB5ZWFyczpBcnJheTxhbnk+ID0gbmV3IEFycmF5KHRoaXMueWVhclJhbmdlKTtcclxuICAgICAgbGV0IGRhdGU6RGF0ZTtcclxuICAgICAgbGV0IHN0YXJ0ID0gc2VsZi5nZXRTdGFydGluZ1llYXIodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllYXJSYW5nZTsgaSsrKSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ICsgaSwgMCwgMSk7XHJcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XHJcbiAgICAgICAgeWVhcnNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRZZWFyKTtcclxuICAgICAgICB5ZWFyc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50aXRsZSA9IFt5ZWFyc1swXS5sYWJlbCxcclxuICAgICAgICB5ZWFyc1t0aGlzLnllYXJSYW5nZSAtIDFdLmxhYmVsXS5qb2luKCcgLSAnKTtcclxuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdCh5ZWFycywgNSk7XHJcbiAgICB9LCAneWVhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbiAoZGF0ZTE6RGF0ZSwgZGF0ZTI6RGF0ZSk6bnVtYmVyIHtcclxuICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xyXG4gICAgfSwgJ3llYXInKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3RhcnRpbmdZZWFyKHllYXI6bnVtYmVyKTpudW1iZXIge1xyXG4gICAgLy8gdG9kbzogcGFyc2VJbnRcclxuICAgIHJldHVybiAoKHllYXIgLSAxKSAvIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UpICogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSArIDE7XHJcbiAgfVxyXG59Il19