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
var DownloadService = (function () {
    function DownloadService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.configuration = configuration;
        this.http = http;
    }
    DownloadService.prototype.getLocationAssessment = function (rfsParentId, rfsId) {
        var locationAssessmentUrl = this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/location-assessment?RFS_PARENT_ID=' + rfsParentId + '&RFS_ID=' + rfsId;
        return this.http.get(locationAssessmentUrl).map(function (res) { return res.json(); });
    };
    DownloadService.prototype.getRfsImages = function (graspAccId, rfsId) {
        var rfsImageUrl = this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/rfs-images?GRASP_ACCOUNT_ID=' + graspAccId + '&RFS_ID=' + rfsId;
        return this.http.get(rfsImageUrl).map(function (res) { return res.json(); });
    };
    DownloadService.prototype.getRfsMetadata = function (graspAccId, rfsParentId, rfsId, langCd) {
        var rfsMetadata = this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/rfs-documents-metadata?GRASP_ACCOUNT_ID=' + graspAccId + '&RFS_PARENT_ID=' + rfsParentId + '&RFS_ID=' + rfsId + '&LANGUAGE_CD=ENG';
        return this.http.get(rfsMetadata).map(function (res) { return res.json(); });
    };
    DownloadService.prototype.viewCms = function (docPidArray) {
        var headers = new http_1.Headers();
        return this.http.post(this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/view-cms-attachments-URL/', JSON.stringify(docPidArray), headers, { 'Content-Type': 'application/json' }).map(function (res) { return res.json(); });
    };
    DownloadService.prototype.getRfsReport = function (rfsParentId, rfsId) {
        var rfsReport = this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/rfs-report?RFS_PARENT_ID=' + rfsParentId + '&RFS_ID=' + rfsId;
        return this.http.get(rfsReport).map(function (res) { return res.json(); });
    };
    DownloadService.prototype.lockRfs = function (rfsParentId, rfsId, transactionType) {
        return this.http.get(this.configuration.server + 'prweb/PRRestService/GRASPAPI/v1/rfs-locations-lock-status?RFS_ID=' + rfsId + '&RFS_PARENT_ID=' + rfsParentId + '&TRANSACTION_TYPE=' + transactionType);
    };
    DownloadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
    ], DownloadService);
    return DownloadService;
}());
exports.DownloadService = DownloadService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kb3dubG9hZC9kb3dubG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUUvQiw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUd4RDtJQUVJLHlCQUFvQixJQUFVLEVBQVUsYUFBNEI7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBcUIsR0FBckIsVUFBc0IsV0FBVyxFQUFFLEtBQUs7UUFDcEMsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQyxvRUFBb0UsR0FBQyxXQUFXLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUN4SixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxVQUFVLEVBQUUsS0FBSztRQUMxQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyw4REFBOEQsR0FBQyxVQUFVLEdBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUN6SSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTTtRQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQywwRUFBMEUsR0FBQyxVQUFVLEdBQUMsaUJBQWlCLEdBQUMsV0FBVyxHQUFDLFVBQVUsR0FBQyxLQUFLLEdBQUMsa0JBQWtCLENBQUM7UUFDcE0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFdBQVc7UUFHZixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQywyREFBMkQsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFHLE9BQU8sRUFBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2xOLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsV0FBVyxFQUFFLEtBQUs7UUFDM0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsMkRBQTJELEdBQUMsV0FBVyxHQUFDLFVBQVUsR0FBQyxLQUFLLENBQUM7UUFDbkksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFdBQVcsRUFBRSxLQUFLLEVBQUUsZUFBZTtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsbUVBQW1FLEdBQUMsS0FBSyxHQUFDLGlCQUFpQixHQUFDLFdBQVcsR0FBQyxvQkFBb0IsR0FBQyxlQUFlLENBQUMsQ0FBQztJQUVqTSxDQUFDO0lBdkNMO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUF5Q2Isc0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLHVCQUFlLGtCQXdDM0IsQ0FBQSIsImZpbGUiOiJhcHAvZG93bmxvYWQvZG93bmxvYWQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvd25sb2FkU2VydmljZSB7ICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbil7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2F0aW9uQXNzZXNzbWVudChyZnNQYXJlbnRJZCwgcmZzSWQpe1xyXG4gICAgICAgIGxldCBsb2NhdGlvbkFzc2Vzc21lbnRVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VydmVyKydwcndlYi9QUlJlc3RTZXJ2aWNlL0dSQVNQQVBJL3YxL2xvY2F0aW9uLWFzc2Vzc21lbnQ/UkZTX1BBUkVOVF9JRD0nK3Jmc1BhcmVudElkKycmUkZTX0lEPScrcmZzSWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQobG9jYXRpb25Bc3Nlc3NtZW50VXJsKS5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZnNJbWFnZXMoZ3Jhc3BBY2NJZCwgcmZzSWQpe1xyXG4gICAgICAgIGxldCByZnNJbWFnZVVybCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIgKyAncHJ3ZWIvUFJSZXN0U2VydmljZS9HUkFTUEFQSS92MS9yZnMtaW1hZ2VzP0dSQVNQX0FDQ09VTlRfSUQ9JytncmFzcEFjY0lkKycmUkZTX0lEPScrcmZzSWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmZzSW1hZ2VVcmwpLm1hcChyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJmc01ldGFkYXRhKGdyYXNwQWNjSWQsIHJmc1BhcmVudElkLCByZnNJZCwgbGFuZ0NkKSB7XHJcbiAgICAgICAgbGV0IHJmc01ldGFkYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLnNlcnZlcisncHJ3ZWIvUFJSZXN0U2VydmljZS9HUkFTUEFQSS92MS9yZnMtZG9jdW1lbnRzLW1ldGFkYXRhP0dSQVNQX0FDQ09VTlRfSUQ9JytncmFzcEFjY0lkKycmUkZTX1BBUkVOVF9JRD0nK3Jmc1BhcmVudElkKycmUkZTX0lEPScrcmZzSWQrJyZMQU5HVUFHRV9DRD1FTkcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJmc01ldGFkYXRhKS5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3Q21zKGRvY1BpZEFycmF5KSB7XHJcbiAgICAgICAgLy8gbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIrJ3Byd2ViL1BSUmVzdFNlcnZpY2UvR1JBU1BBUEkvdjEvdmlldy1jbXMtYXR0YWNobWVudHMtVVJMLycsIEpTT04uc3RyaW5naWZ5KGRvY1BpZEFycmF5KSwgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KS5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZnNSZXBvcnQocmZzUGFyZW50SWQsIHJmc0lkKSB7XHJcbiAgICAgICAgbGV0IHJmc1JlcG9ydCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIrJ3Byd2ViL1BSUmVzdFNlcnZpY2UvR1JBU1BBUEkvdjEvcmZzLXJlcG9ydD9SRlNfUEFSRU5UX0lEPScrcmZzUGFyZW50SWQrJyZSRlNfSUQ9JytyZnNJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZnNSZXBvcnQpLm1hcChyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2tSZnMocmZzUGFyZW50SWQsIHJmc0lkLCB0cmFuc2FjdGlvblR5cGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIrJ3Byd2ViL1BSUmVzdFNlcnZpY2UvR1JBU1BBUEkvdjEvcmZzLWxvY2F0aW9ucy1sb2NrLXN0YXR1cz9SRlNfSUQ9JytyZnNJZCsnJlJGU19QQVJFTlRfSUQ9JytyZnNQYXJlbnRJZCsnJlRSQU5TQUNUSU9OX1RZUEU9Jyt0cmFuc2FjdGlvblR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
