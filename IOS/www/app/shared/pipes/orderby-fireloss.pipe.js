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
var OrderByFireloss = (function () {
    function OrderByFireloss() {
    }
    OrderByFireloss.prototype.transform = function (array, args) {
        if (array) {
            var orderByValue_1 = args[0];
            var byVal_1 = 1;
            var order = "";
            if (args[1]) {
                order = args[1];
            }
            if (order = "desc") {
                array.sort(function (a, b) {
                    if (a[orderByValue_1] === null || a[orderByValue_1] == undefined) {
                        return 1;
                    }
                    else if (b[orderByValue_1] === null || b[orderByValue_1] == undefined) {
                        return -1;
                    }
                    else if (a[orderByValue_1] > b[orderByValue_1]) {
                        return -1 * byVal_1;
                    }
                    else if (a[orderByValue_1] < b[orderByValue_1]) {
                        return 1 * byVal_1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
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
            }
            return array;
        }
    };
    OrderByFireloss = __decorate([
        core_1.Pipe({
            name: "orderbyfireloss"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByFireloss);
    return OrderByFireloss;
}());
exports.OrderByFireloss = OrderByFireloss;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvb3JkZXJieS1maXJlbG9zcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFLcEQ7SUFBQTtJQThDQSxDQUFDO0lBN0NDLG1DQUFTLEdBQVQsVUFBVSxLQUFpQixFQUFFLElBQUs7UUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksY0FBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLE9BQUssR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUFDO2dCQUNDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUVELEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsQ0FDaEIsQ0FBQztnQkFDRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLGNBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzdELE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsY0FBWSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNYLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBSyxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFLLENBQUM7b0JBQ25CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTtvQkFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsY0FBWSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxjQUFZLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFLLENBQUM7b0JBQ3BCLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQUssQ0FBQztvQkFDbkIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNYLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBaERIO1FBQUMsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLGlCQUFpQjtTQUN4QixDQUFDOzt1QkFBQTtJQStDRixzQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksdUJBQWUsa0JBOEMzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGlwZXMvb3JkZXJieS1maXJlbG9zcy5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogXCJvcmRlcmJ5ZmlyZWxvc3NcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeUZpcmVsb3NzIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGFycmF5OiBBcnJheTxhbnk+LCBhcmdzPykge1xyXG4gICAgaWYgKGFycmF5KSB7XHJcbiAgICAgIGxldCBvcmRlckJ5VmFsdWUgPSBhcmdzWzBdO1xyXG4gICAgICBsZXQgYnlWYWwgPSAxO1xyXG4gICAgICBsZXQgb3JkZXIgPSBcIlwiO1xyXG4gICAgICBpZihhcmdzWzFdKVxyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXIgPSBhcmdzWzFdOyAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKG9yZGVyPVwiZGVzY1wiKVxyXG4gICAgICB7ICBcclxuICAgICAgICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhW29yZGVyQnlWYWx1ZV0gPT09IG51bGwgfHwgYVtvcmRlckJ5VmFsdWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJbb3JkZXJCeVZhbHVlXSA9PT0gbnVsbCB8fCBiW29yZGVyQnlWYWx1ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVtvcmRlckJ5VmFsdWVdID4gYltvcmRlckJ5VmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIC0xICogYnlWYWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVtvcmRlckJ5VmFsdWVdIDwgYltvcmRlckJ5VmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDEgKiBieVZhbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgICAgYXJyYXkuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFbb3JkZXJCeVZhbHVlXSA9PT0gbnVsbCB8fCBhW29yZGVyQnlWYWx1ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYltvcmRlckJ5VmFsdWVdID09PSBudWxsIHx8IGJbb3JkZXJCeVZhbHVlXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhW29yZGVyQnlWYWx1ZV0gPCBiW29yZGVyQnlWYWx1ZV0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gLTEgKiBieVZhbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhW29yZGVyQnlWYWx1ZV0gPiBiW29yZGVyQnlWYWx1ZV0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gMSAqIGJ5VmFsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
