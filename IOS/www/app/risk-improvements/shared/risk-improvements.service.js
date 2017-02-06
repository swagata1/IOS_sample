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
var configuration_1 = require('../../shared/configuration');
var offline_service_1 = require('../../shared/services/offline.service');
var RiskImprovementsService = (function () {
    function RiskImprovementsService(offlineService, http, configuration) {
        this.offlineService = offlineService;
        this.http = http;
        this.configuration = configuration;
    }
    RiskImprovementsService.prototype.getRiskImprovementsData = function (rfsParentId, rfsId) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) { return console.error(err); }, function () { });
        });
    };
    RiskImprovementsService.prototype.getRFSReportData = function (rfsParentId, rfsId) {
        if (this.configuration && this.configuration.dirPath && this.configuration.dirPath.result) {
            return this.http.request(this.configuration.dirPath.result + '/' + rfsParentId + '-' + rfsId + '/upstream/rfs-report.json').map(function (res) { return res.json().RFSWorkPage; });
        }
        else {
            return this.http.request("json/test-data/RFS-30918-SUBRFS-24258/rfs-report.json").map(function (res) { return res.json().RFSWorkPage; });
        }
    };
    RiskImprovementsService.prototype.getMainTypes = function () {
        return this.http.request("json/reference-data/ri-main-type.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getCategories = function () {
        return this.http.request("json/reference-data/ri-category.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getIntendedActions = function () {
        return this.http.request("json/reference-data/ri-intended-action.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getTargetCompletionTimeValues = function () {
        return this.http.request("json/reference-data/ri-target-time.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getRIStatusList = function () {
        return this.http.request("json/reference-data/ri-status.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getTradeSectors = function () {
        return this.http.request("json/reference-data/occupancy.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getRIMatrix = function () {
        return this.http.request("json/reference-data/ri-matrix.json").map(function (res) { return res.json(); });
    };
    RiskImprovementsService.prototype.getStandardRI = function () {
        return this.http.request('json/reference-data/ri-standard-improvements.json').map(function (res) { return res.json(); });
    };
    RiskImprovementsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offline_service_1.OfflineService, http_1.Http, configuration_1.Configuration])
    ], RiskImprovementsService);
    return RiskImprovementsService;
}());
exports.RiskImprovementsService = RiskImprovementsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9zaGFyZWQvcmlzay1pbXByb3ZlbWVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsOEJBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFHdkU7SUFFSSxpQ0FBb0IsY0FBOEIsRUFBVSxJQUFVLEVBQVUsYUFBNEI7UUFBeEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQzVHLENBQUM7SUFFRCx5REFBdUIsR0FBdkIsVUFBd0IsV0FBVyxFQUFFLEtBQUs7UUFBMUMsaUJBY0M7UUFiRyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FFOUQsVUFBQSxJQUFJO2dCQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBRUQsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUV6QixjQUFPLENBQUMsQ0FDWCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLFdBQVcsRUFBRSxLQUFLO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxD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SUFpRWIsOEJBQUM7QUFBRCxDQWhFQSxBQWdFQyxJQUFBO0FBaEVZLCtCQUF1QiwwQkFnRW5DLENBQUEiLCJmaWxlIjoiYXBwL3Jpc2staW1wcm92ZW1lbnRzL3NoYXJlZC9yaXNrLWltcHJvdmVtZW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9vZmZsaW5lLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmlza0ltcHJvdmVtZW50c1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb2ZmbGluZVNlcnZpY2U6IE9mZmxpbmVTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJpc2tJbXByb3ZlbWVudHNEYXRhKHJmc1BhcmVudElkLCByZnNJZCkge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2UucmVhZExvY2F0aW9uRGF0YShyZnNQYXJlbnRJZCwgcmZzSWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGVycm9yXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHRoaXJkIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBjb21wbGV0aW9uXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJGU1JlcG9ydERhdGEocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uZGlyUGF0aCAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uZGlyUGF0aC5yZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoLnJlc3VsdCArICcvJyArIHJmc1BhcmVudElkICsgJy0nICsgcmZzSWQgKyAnL3Vwc3RyZWFtL3Jmcy1yZXBvcnQuanNvbicpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5SRlNXb3JrUGFnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3Rlc3QtZGF0YS9SRlMtMzA5MTgtU1VCUkZTLTI0MjU4L3Jmcy1yZXBvcnQuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKS5SRlNXb3JrUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1haW5UeXBlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmktbWFpbi10eXBlLmpzb25gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldFR5cGVzKCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9yaS1tYXRyaXguanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmktY2F0ZWdvcnkuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW50ZW5kZWRBY3Rpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChganNvbi9yZWZlcmVuY2UtZGF0YS9yaS1pbnRlbmRlZC1hY3Rpb24uanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFyZ2V0Q29tcGxldGlvblRpbWVWYWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3JlZmVyZW5jZS1kYXRhL3JpLXRhcmdldC10aW1lLmpzb25gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJJU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoYGpzb24vcmVmZXJlbmNlLWRhdGEvcmktc3RhdHVzLmpzb25gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYWRlU2VjdG9ycygpIHtcclxuICAgIFx0cmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3JlZmVyZW5jZS1kYXRhL29jY3VwYW5jeS5qc29uYCkubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1x0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UklNYXRyaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3JlZmVyZW5jZS1kYXRhL3JpLW1hdHJpeC5qc29uYCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGFuZGFyZFJJKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdqc29uL3JlZmVyZW5jZS1kYXRhL3JpLXN0YW5kYXJkLWltcHJvdmVtZW50cy5qc29uJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxufSJdfQ==
