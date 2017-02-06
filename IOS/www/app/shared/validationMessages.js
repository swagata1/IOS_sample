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
var ValidationMessages = (function () {
    function ValidationMessages() {
        this.validationMessages =
            {
                "error": {
                    "MSG1": "Please enter a value",
                    "MSG2": "Value should not exceed 365 days",
                    "MSG3": "Value should not exceed 24 hours",
                    "MSG4": "Static Pressure should be greater than Residual Pressure",
                    "MSG8": "All blocks within an UW Risk Group must be selected when adding the NLE for the UWRiskGroup",
                    "MSG10": "Sum of Sprinkler Protection (%) and In Adequate Protction  (%) should be less than 100 ",
                    "MSG11": "Percentage Should be Less than 100 or Equal to 100",
                    "MSG12": "Sprinkler Protection (%) Adequate cannot exceed Sprinkler Protection (%)",
                    "MSG13": "Total Area of building should be greater than 0",
                    "MSG14": "Please enter valid 4 digit Year Built number",
                    "MSG15": "Upgraded year should be greater than or equal to year built ",
                    "MSG16": "Please enter a valid date in the format MM/DD/YYYY",
                    "MSG17": "Survey Completed Date cannot be greater than the Report Due Date",
                    "MSG19": "Please verify the name of the engineer who completed the survey",
                    "MSG21": "Atleast one hazard should be linked to a \"Hazard\" type Risk Improvement",
                    "MSG26": "The Location cannot be downloaded to avoid data override issues intill the In-Progress <<RFS ID>> is closed or this location is deselected from that RFS by Assigned Engineer <<RFS Completed By>>",
                    "ConstructionYearBuiltInTheFuture": "Building year build should be less than current date",
                },
                "warning": {
                    "MSG5": "Current Rating is \"Adequate\" or  less than \"Adequate\"",
                    "MSG6": "The  Hazard Rating is \"Low\" or less  consider adding R/I",
                    "MSG7": "The Pre domiant trade sector has changed ,Please review the Hazards and their ratings",
                    "MSG9": "The Predominant trade sector has changed. Please review all Hazards to ensure a Hazard Category has been selected and all R/Is to ensure a Sub Type has been selected",
                    "MSG18": "Please fill Survey Completed Date in Request Details screen to auto generate the RI Number",
                    "MSG20": "Finished Floor Elevation should not be greater than  Basement Floor Elevation "
                }
            };
    }
    ValidationMessages.prototype.getMessages = function (data) {
        if (data == "error")
            return this.validationMessages.error;
        else if (data == "warning")
            return this.validationMessages.warning;
        else
            return this.validationMessages;
    };
    ValidationMessages = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ValidationMessages);
    return ValidationMessages;
}());
exports.ValidationMessages = ValidationMessages;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFNM0M7SUFJSTtRQUNJLElBQUksQ0FBQyxrQkFBa0I7WUFDdkI7Z0JBQ0ksT0FBTyxFQUNQO29CQUNJLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLE1BQU0sRUFBRSxrQ0FBa0M7b0JBQzFDLE1BQU0sRUFBRSxrQ0FBa0M7b0JBQzFDLE1BQU0sRUFBRSwwREFBMEQ7b0JBQ2xFLE1BQU0sRUFBRSw2RkFBNkY7b0JBQ3JHLE9BQU8sRUFBRSx5RkFBeUY7b0JBQ2xHLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELE9BQU8sRUFBRSwwRUFBMEU7b0JBQ25GLE9BQU8sRUFBRSxpREFBaUQ7b0JBQzFELE9BQU8sRUFBRSw4Q0FBOEM7b0JBQ3ZELE9BQU8sRUFBRSw4REFBOEQ7b0JBQ3ZFLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELE9BQU8sRUFBRSxrRUFBa0U7b0JBQzNFLE9BQU8sRUFBRSxpRUFBaUU7b0JBQzFFLE9BQU8sRUFBRSwyRUFBMkU7b0JBQ3BGLE9BQU8sRUFBRSxvTUFBb007b0JBQzdNLGtDQUFrQyxFQUFFLHNEQUFzRDtpQkFDN0Y7Z0JBQ0QsU0FBUyxFQUNUO29CQUNJLE1BQU0sRUFBRSwyREFBMkQ7b0JBQ25FLE1BQU0sRUFBRSw0REFBNEQ7b0JBQ3BFLE1BQU0sRUFBRSx1RkFBdUY7b0JBQy9GLE1BQU0sRUFBRSx1S0FBdUs7b0JBQy9LLE9BQU8sRUFBRSw0RkFBNEY7b0JBQ3JHLE9BQU8sRUFBRSxnRkFBZ0Y7aUJBQzVGO2FBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBSTtRQUVaLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1FBQ25FLElBQUk7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7SUE3Q0w7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQStDYix5QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksMEJBQWtCLHFCQThDOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3ZhbGlkYXRpb25NZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4vY29tcENvbW1JbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk1lc3NhZ2VzIFxyXG57ICAgIFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZXMgOiB7fTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlcyA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIk1TRzFcIjogXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cyXCI6IFwiVmFsdWUgc2hvdWxkIG5vdCBleGNlZWQgMzY1IGRheXNcIixcclxuICAgICAgICAgICAgICAgIFwiTVNHM1wiOiBcIlZhbHVlIHNob3VsZCBub3QgZXhjZWVkIDI0IGhvdXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1TRzRcIjogXCJTdGF0aWMgUHJlc3N1cmUgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBSZXNpZHVhbCBQcmVzc3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0c4XCI6IFwiQWxsIGJsb2NrcyB3aXRoaW4gYW4gVVcgUmlzayBHcm91cCBtdXN0IGJlIHNlbGVjdGVkIHdoZW4gYWRkaW5nIHRoZSBOTEUgZm9yIHRoZSBVV1Jpc2tHcm91cFwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxMFwiOiBcIlN1bSBvZiBTcHJpbmtsZXIgUHJvdGVjdGlvbiAoJSkgYW5kIEluIEFkZXF1YXRlIFByb3RjdGlvbiAgKCUpIHNob3VsZCBiZSBsZXNzIHRoYW4gMTAwIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxMVwiOiBcIlBlcmNlbnRhZ2UgU2hvdWxkIGJlIExlc3MgdGhhbiAxMDAgb3IgRXF1YWwgdG8gMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1TRzEyXCI6IFwiU3ByaW5rbGVyIFByb3RlY3Rpb24gKCUpIEFkZXF1YXRlIGNhbm5vdCBleGNlZWQgU3ByaW5rbGVyIFByb3RlY3Rpb24gKCUpXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1TRzEzXCI6IFwiVG90YWwgQXJlYSBvZiBidWlsZGluZyBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDBcIixcclxuICAgICAgICAgICAgICAgIFwiTVNHMTRcIjogXCJQbGVhc2UgZW50ZXIgdmFsaWQgNCBkaWdpdCBZZWFyIEJ1aWx0IG51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxNVwiOiBcIlVwZ3JhZGVkIHllYXIgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB5ZWFyIGJ1aWx0IFwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxNlwiOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgaW4gdGhlIGZvcm1hdCBNTS9ERC9ZWVlZXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1TRzE3XCI6IFwiU3VydmV5IENvbXBsZXRlZCBEYXRlIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gdGhlIFJlcG9ydCBEdWUgRGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxOVwiOiBcIlBsZWFzZSB2ZXJpZnkgdGhlIG5hbWUgb2YgdGhlIGVuZ2luZWVyIHdobyBjb21wbGV0ZWQgdGhlIHN1cnZleVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cyMVwiOiBcIkF0bGVhc3Qgb25lIGhhemFyZCBzaG91bGQgYmUgbGlua2VkIHRvIGEgXFxcIkhhemFyZFxcXCIgdHlwZSBSaXNrIEltcHJvdmVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIk1TRzI2XCI6IFwiVGhlIExvY2F0aW9uIGNhbm5vdCBiZSBkb3dubG9hZGVkIHRvIGF2b2lkIGRhdGEgb3ZlcnJpZGUgaXNzdWVzIGludGlsbCB0aGUgSW4tUHJvZ3Jlc3MgPDxSRlMgSUQ+PiBpcyBjbG9zZWQgb3IgdGhpcyBsb2NhdGlvbiBpcyBkZXNlbGVjdGVkIGZyb20gdGhhdCBSRlMgYnkgQXNzaWduZWQgRW5naW5lZXIgPDxSRlMgQ29tcGxldGVkIEJ5Pj5cIixcclxuICAgICAgICAgICAgICAgIFwiQ29uc3RydWN0aW9uWWVhckJ1aWx0SW5UaGVGdXR1cmVcIjogXCJCdWlsZGluZyB5ZWFyIGJ1aWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gY3VycmVudCBkYXRlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIk1TRzVcIjogXCJDdXJyZW50IFJhdGluZyBpcyBcXFwiQWRlcXVhdGVcXFwiIG9yICBsZXNzIHRoYW4gXFxcIkFkZXF1YXRlXFxcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0c2XCI6IFwiVGhlICBIYXphcmQgUmF0aW5nIGlzIFxcXCJMb3dcXFwiIG9yIGxlc3MgIGNvbnNpZGVyIGFkZGluZyBSL0lcIixcclxuICAgICAgICAgICAgICAgIFwiTVNHN1wiOiBcIlRoZSBQcmUgZG9taWFudCB0cmFkZSBzZWN0b3IgaGFzIGNoYW5nZWQgLFBsZWFzZSByZXZpZXcgdGhlIEhhemFyZHMgYW5kIHRoZWlyIHJhdGluZ3NcIixcclxuICAgICAgICAgICAgICAgIFwiTVNHOVwiOiBcIlRoZSBQcmVkb21pbmFudCB0cmFkZSBzZWN0b3IgaGFzIGNoYW5nZWQuIFBsZWFzZSByZXZpZXcgYWxsIEhhemFyZHMgdG8gZW5zdXJlIGEgSGF6YXJkIENhdGVnb3J5IGhhcyBiZWVuIHNlbGVjdGVkIGFuZCBhbGwgUi9JcyB0byBlbnN1cmUgYSBTdWIgVHlwZSBoYXMgYmVlbiBzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cxOFwiOiBcIlBsZWFzZSBmaWxsIFN1cnZleSBDb21wbGV0ZWQgRGF0ZSBpbiBSZXF1ZXN0IERldGFpbHMgc2NyZWVuIHRvIGF1dG8gZ2VuZXJhdGUgdGhlIFJJIE51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJNU0cyMFwiOiBcIkZpbmlzaGVkIEZsb29yIEVsZXZhdGlvbiBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhhbiAgQmFzZW1lbnQgRmxvb3IgRWxldmF0aW9uIFwiICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9OyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXMoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBcImVycm9yXCIpIHJldHVybiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlcy5lcnJvcjtcclxuICAgICAgICBlbHNlIGlmIChkYXRhID09IFwid2FybmluZ1wiKSByZXR1cm4gdGhpcy52YWxpZGF0aW9uTWVzc2FnZXMud2FybmluZztcclxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlcztcclxuICAgIH1cclxuXHJcbn0iXX0=
