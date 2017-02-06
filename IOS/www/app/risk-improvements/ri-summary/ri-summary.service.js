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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var configuration_1 = require('../../shared/configuration');
var RISummaryService = (function () {
    function RISummaryService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    RISummaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
    ], RISummaryService);
    return RISummaryService;
}());
exports.RISummaryService = RISummaryService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1zdW1tYXJ5L3JpLXN1bW1hcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsOEJBQThCLDRCQUE0QixDQUFDLENBQUE7QUFHM0Q7SUFFSSwwQkFBb0IsSUFBVSxFQUFVLGFBQTRCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNwRSxDQUFDO0lBSkw7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQUtiLHVCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSx3QkFBZ0IsbUJBSTVCLENBQUEiLCJmaWxlIjoiYXBwL3Jpc2staW1wcm92ZW1lbnRzL3JpLXN1bW1hcnkvcmktc3VtbWFyeS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUklTdW1tYXJ5U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pe1xyXG4gICAgfVxyXG59Il19
