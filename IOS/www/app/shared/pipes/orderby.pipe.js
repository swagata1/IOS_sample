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
var core_1 = require("@angular/core");
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (array) {
            var orderByValue_1 = args[0];
            var byVal_1 = 1;
            array.sort(function (a, b) {
                if (a[orderByValue_1] === null || a[orderByValue_1] == undefined) {
                    return 1;
                }
                else if (b[orderByValue_1] === null || b[orderByValue_1] == undefined) {
                    return -1;
                }
                else if (a[orderByValue_1] < b[orderByValue_1]) {
                    return -1 * byVal_1;
                }
                else if (a[orderByValue_1] > b[orderByValue_1]) {
                    return 1 * byVal_1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: "orderby"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvb3JkZXJieS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFLcEQ7SUFBQTtJQXNCQSxDQUFDO0lBckJDLCtCQUFTLEdBQVQsVUFBVSxLQUFpQixFQUFFLElBQUs7UUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksY0FBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLE9BQUssR0FBRyxDQUFDLENBQUE7WUFFYixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLGNBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsY0FBWSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNYLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBSyxDQUFDO2dCQUNwQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFLLENBQUM7Z0JBQ25CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUF4Qkg7UUFBQyxXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDOzttQkFBQTtJQXVCRixrQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksbUJBQVcsY0FzQnZCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9waXBlcy9vcmRlcmJ5LnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiBcIm9yZGVyYnlcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oYXJyYXk6IEFycmF5PGFueT4sIGFyZ3M/KSB7XHJcbiAgICBpZiAoYXJyYXkpIHtcclxuICAgICAgbGV0IG9yZGVyQnlWYWx1ZSA9IGFyZ3NbMF07XHJcbiAgICAgIGxldCBieVZhbCA9IDFcclxuXHJcbiAgICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgIGlmIChhW29yZGVyQnlWYWx1ZV0gPT09IG51bGwgfHwgYVtvcmRlckJ5VmFsdWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGJbb3JkZXJCeVZhbHVlXSA9PT0gbnVsbCB8fCBiW29yZGVyQnlWYWx1ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgIH0gZWxzZSBpZiAoYVtvcmRlckJ5VmFsdWVdIDwgYltvcmRlckJ5VmFsdWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xICogYnlWYWw7XHJcbiAgICAgIH0gZWxzZSBpZiAoYVtvcmRlckJ5VmFsdWVdID4gYltvcmRlckJ5VmFsdWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIDEgKiBieVZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19
