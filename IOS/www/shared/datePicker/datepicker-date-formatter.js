"use strict";
var moment = require('moment/moment');
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format) {
        return moment(date.getTime()).format(format);
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlUGlja2VyL2RhdGVwaWNrZXItZGF0ZS1mb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksTUFBTSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBRXhDO0lBQUE7SUFJQSxDQUFDO0lBSFEsOEJBQU0sR0FBYixVQUFjLElBQVMsRUFBRSxNQUFhO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCxvQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlkscUJBQWEsZ0JBSXpCLENBQUEiLCJmaWxlIjoic2hhcmVkL2RhdGVQaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWZvcm1hdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQvbW9tZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0dGVyIHtcclxuICBwdWJsaWMgZm9ybWF0KGRhdGU6RGF0ZSwgZm9ybWF0OnN0cmluZyk6c3RyaW5nIHtcclxuICAgIHJldHVybiBtb21lbnQoZGF0ZS5nZXRUaW1lKCkpLmZvcm1hdChmb3JtYXQpO1xyXG4gIH1cclxufSJdfQ==
