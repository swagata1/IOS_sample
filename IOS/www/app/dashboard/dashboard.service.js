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
var configuration_1 = require('../shared/configuration');
var offline_service_1 = require('../shared/services/offline.service');
var DashboardService = (function () {
    function DashboardService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    DashboardService.prototype.getDashboardData = function () {
        return this.http.request('json/my-worklist.json').map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBRS9CLDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELGdDQUErQixvQ0FBb0MsQ0FBQyxDQUFBO0FBR3BFO0lBRUksMEJBQW9CLGNBQThCLEVBQVUsSUFBVSxFQUFVLGFBQTRCO1FBQXhGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUM1RyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBU0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBWSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFoQkw7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQWlCYix1QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksd0JBQWdCLG1CQWdCNUIsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9vZmZsaW5lLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKXtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXNoYm9hcmREYXRhKCl7XHJcbiAgICBcdC8vIGlmICh0aGlzLm9mZmxpbmVTZXJ2aWNlLm9ubGluZVdpdGhHcmFzcCgpKSB7XHJcblx0ICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3VyYXRpb24uc2VydmVyICsgJ3Byd2ViL1BSUmVzdFNlcnZpY2UvR1JBU1BBUEkvdjEvbXktd29ya2xpc3Q/RU1QTE9ZRUVfSUQ9JyArIHRoaXMuY29uZmlndXJhdGlvbi5laWQgKyAnJkxhbmd1YWdlX0NEPUVORycpLm1hcChyZXM9PiByZXMuanNvbigpKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdC8vIGdldCB3b3JrbGlzdCBmcm9tIGxvY2FsIGlmIGFwcCBpcyBvZmZsaW5lLlxyXG5cdCAgICAvLyAgICAgaWYodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoICYmIHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoLnJlc3VsdCkge1xyXG5cdFx0Ly8gXHRcdHJldHVybiB0aGlzLmh0dHAucmVxdWVzdCh0aGlzLmNvbmZpZ3VyYXRpb24uZGlyUGF0aC5yZXN1bHQgKyAnL215LXdvcmtsaXN0Lmpzb24nKS5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcblx0ICAgIC8vICAgICB9XHJcbiAgICBcdC8vIH1cclxuXHRcdHJldHVybiB0aGlzLmh0dHAucmVxdWVzdCgnanNvbi9teS13b3JrbGlzdC5qc29uJykubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59Il19
