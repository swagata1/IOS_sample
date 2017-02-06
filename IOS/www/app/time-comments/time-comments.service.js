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
var Observable_1 = require('rxjs/Observable');
var configuration_1 = require('../shared/configuration');
var offline_service_1 = require('../shared/services/offline.service');
var TimeAndCommentsService = (function () {
    function TimeAndCommentsService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    TimeAndCommentsService.prototype.getConstructionDetails = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    TimeAndCommentsService.prototype.getSic = function () {
        return this.http.request("json/reference-data/sic-construction-occupancy.json").map(function (res) { return res.json(); });
    };
    TimeAndCommentsService.prototype.getCountriesSchemes = function () {
        return this.http.request("json/reference-data/countries-schemes.json").map(function (res) { return res.json(); });
    };
    TimeAndCommentsService.prototype.getCountriesSchemesByCountry = function () {
        return this.http.request("json/reference-data/construction-scheme-by-country.json").map(function (res) { return res.json(); });
    };
    TimeAndCommentsService.prototype.getConstructionRatings = function () {
        return this.http.request("json/reference-data/rating-answers.json").map(function (res) { return res.json(); });
    };
    TimeAndCommentsService.prototype.getConstructionRatingCP = function () {
        return this.http.request("json/reference-data/rating-cp.json").map(function (res) { return res.json(); });
    };
    TimeAndCommentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], TimeAndCommentsService);
    return TimeAndCommentsService;
}());
exports.TimeAndCommentsService = TimeAndCommentsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90aW1lLWNvbW1lbnRzL3RpbWUtY29tbWVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsOEJBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFHcEU7SUFHSSxnQ0FBb0IsY0FBOEIsRUFBVSxJQUFVLEVBQVUsYUFBNEI7UUFBeEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQzVHLENBQUM7SUFHRCx1REFBc0IsR0FBdEIsVUFBdUIsV0FBVyxFQUFFLEtBQUs7UUFBekMsaUJBY0M7UUFiRyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FFOUQsVUFBQSxJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBRUQsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUV6QixjQUFPLENBQUMsQ0FDWCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRUQsb0RBQW1CLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCw2REFBNEIsR0FBNUI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseURBQXlELENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUdELHVEQUFzQixHQUF0QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBR0Qsd0RBQXVCLEdBQXZCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUE1Q0w7UUFBQyxpQkFBVSxFQUFFOzs4QkFBQTtJQTZDYiw2QkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksOEJBQXNCLHlCQTRDbEMsQ0FBQSIsImZpbGUiOiJhcHAvdGltZS1jb21tZW50cy90aW1lLWNvbW1lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lQW5kQ29tbWVudHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaGVhZGVyczogSGVhZGVycztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VzIGh0dHAuZ2V0KCkgdG8gbG9hZCBhIHNpbmdsZSBKU09OIGZpbGVcclxuICAgIGdldENvbnN0cnVjdGlvbkRldGFpbHMocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHNlY29uZCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gZXJyb3JcclxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgdGhpcmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGNvbXBsZXRpb25cclxuICAgICAgICAgICAgICAgICgpID0+IHt9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2ljKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9zaWMtY29uc3RydWN0aW9uLW9jY3VwYW5jeS5qc29uYCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3VudHJpZXNTY2hlbWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9jb3VudHJpZXMtc2NoZW1lcy5qc29uYCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3VudHJpZXNTY2hlbWVzQnlDb3VudHJ5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9jb25zdHJ1Y3Rpb24tc2NoZW1lLWJ5LWNvdW50cnkuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggUmF0aW5nc1xyXG4gICAgZ2V0Q29uc3RydWN0aW9uUmF0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmF0aW5nLWFuc3dlcnMuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggUmF0aW5nIENQXHJcbiAgICBnZXRDb25zdHJ1Y3Rpb25SYXRpbmdDUCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmF0aW5nLWNwLmpzb25gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59Il19
