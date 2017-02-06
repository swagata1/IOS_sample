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
var FilterRiSelect = (function () {
    function FilterRiSelect() {
    }
    FilterRiSelect.prototype.transform = function (filterArray, mainTypeValue, typeValue, subTypeValue) {
        var filteredRiData = [];
        for (var i = 0; i < filterArray.length; i++) {
            if (mainTypeValue && mainTypeValue != "Please Select") {
                if (filterArray[i].RecMainType == mainTypeValue) {
                    if (typeValue && typeValue != "Please Select") {
                        if (filterArray[i].RecType == typeValue) {
                            if (subTypeValue && subTypeValue != "Please Select") {
                                if (filterArray[i].RecSubType == subTypeValue) {
                                    filteredRiData.push(filterArray[i]);
                                }
                            }
                            else {
                                filteredRiData.push(filterArray[i]);
                            }
                        }
                    }
                    else {
                        filteredRiData.push(filterArray[i]);
                    }
                }
            }
            else {
                filteredRiData.push(filterArray[i]);
            }
        }
        return filteredRiData;
    };
    FilterRiSelect = __decorate([
        core_1.Pipe({
            name: "filterriselect"
        }), 
        __metadata('design:paramtypes', [])
    ], FilterRiSelect);
    return FilterRiSelect;
}());
exports.FilterRiSelect = FilterRiSelect;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvZmlsdGVyLXJpLXNlbGVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFNcEQ7SUFBQTtJQXlDQSxDQUFDO0lBeENBLGtDQUFTLEdBQVQsVUFBVSxXQUFzQixFQUFFLGFBQW9CLEVBQUUsU0FBZ0IsRUFBRSxZQUFtQjtRQUU1RixJQUFJLGNBQWMsR0FBUyxFQUFFLENBQUM7UUFJN0IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNuQyxDQUFDO1lBQ0csRUFBRSxDQUFBLENBQUMsYUFBYSxJQUFJLGFBQWEsSUFBRSxlQUFlLENBQUMsQ0FDbkQsQ0FBQztnQkFDRyxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFFLGFBQWEsQ0FBQyxDQUM3QyxDQUFDO29CQUNHLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUUsZUFBZSxDQUFDLENBQzNDLENBQUM7d0JBQ0csRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRSxTQUFTLENBQUMsQ0FDckMsQ0FBQzs0QkFDRyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksWUFBWSxJQUFFLGVBQWUsQ0FBQyxDQUNqRCxDQUFDO2dDQUNHLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUUsWUFBWSxDQUFDLENBQzNDLENBQUM7b0NBQ0csY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEMsQ0FBQzs0QkFDTCxDQUFDOzRCQUNELElBQUksQ0FBQSxDQUFDO2dDQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDO1FBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUU1QixDQUFDO0lBNUNGO1FBQUMsV0FBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGdCQUFnQjtTQUN0QixDQUFDOztzQkFBQTtJQTJDRixxQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q1ksc0JBQWMsaUJBeUMxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGlwZXMvZmlsdGVyLXJpLXNlbGVjdC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZSA6XCJmaWx0ZXJyaXNlbGVjdFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyUmlTZWxlY3QgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG5cdHRyYW5zZm9ybShmaWx0ZXJBcnJheTpBcnJheTxhbnk+LCBtYWluVHlwZVZhbHVlOnN0cmluZywgdHlwZVZhbHVlOnN0cmluZywgc3ViVHlwZVZhbHVlOnN0cmluZylcclxuXHR7XHJcblx0XHRsZXQgZmlsdGVyZWRSaURhdGE6YW55W10gPSBbXTtcclxuXHRcdC8vbGV0IG1haW5UeXBlVmFsdWUsdHlwZVZhbHVlLHN1YlR5cGVWYWx1ZSA6IHN0cmluZyA9XCJcIjtcclxuXHJcblx0XHRcclxuXHQgIGZvcihsZXQgaT0wOyBpPGZpbHRlckFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZihtYWluVHlwZVZhbHVlICYmIG1haW5UeXBlVmFsdWUhPVwiUGxlYXNlIFNlbGVjdFwiKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlmKGZpbHRlckFycmF5W2ldLlJlY01haW5UeXBlPT1tYWluVHlwZVZhbHVlKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWYodHlwZVZhbHVlICYmIHR5cGVWYWx1ZSE9XCJQbGVhc2UgU2VsZWN0XCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlckFycmF5W2ldLlJlY1R5cGU9PXR5cGVWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdWJUeXBlVmFsdWUgJiYgc3ViVHlwZVZhbHVlIT1cIlBsZWFzZSBTZWxlY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlckFycmF5W2ldLlJlY1N1YlR5cGU9PXN1YlR5cGVWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRSaURhdGEucHVzaChmaWx0ZXJBcnJheVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRSaURhdGEucHVzaChmaWx0ZXJBcnJheVtpXSk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUmlEYXRhLnB1c2goZmlsdGVyQXJyYXlbaV0pOyAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIGZpbHRlcmVkUmlEYXRhLnB1c2goZmlsdGVyQXJyYXlbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICByZXR1cm4gZmlsdGVyZWRSaURhdGE7XHJcblx0XHRcclxuXHR9XHRcclxufSJdfQ==
