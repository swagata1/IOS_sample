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
var configuration_1 = require('../configuration');
var location_data_model_1 = require('../model/location-data.model');
var rfs_report_data_model_1 = require('../model/rfs-report-data.model');
var ipcSenderService_1 = require('./../ipcSenderService');
var OfflineService = (function () {
    function OfflineService(http, configuration, ipcSS) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.ipcSS = ipcSS;
        this.online = true;
        this.locationDataStore = [];
        this.rfsReportDataStore = [];
        var interval = setInterval(function () {
        }, 30000);
        var saveInterval = setInterval(function () {
            for (var i = 0; i < _this.locationDataStore.length; i = i + 1) {
                _this.save(_this.locationDataStore[i]);
            }
            console.log("Save to FS finished for total loc: ", _this.locationDataStore.length);
            for (var i = 0; i < _this.rfsReportDataStore.length; i = i + 1) {
                _this.saveRfsReport(_this.rfsReportDataStore[i]);
            }
            console.log("Save to FS finished for total rfs-report: ", _this.rfsReportDataStore.length);
        }, 30000);
    }
    OfflineService.prototype.checkHeartbeat = function () {
        var _this = this;
        return this.http.get(this.configuration.server + 'prweb/PRServlet').subscribe(function (data) {
            _this.online = true;
            console.log("Is heatbeat availalbe?", _this.online);
        }, function (error) {
            _this.online = false;
            console.log("Is heatbeat availalbe?", _this.online);
        }, function () { });
    };
    OfflineService.prototype.onlineWithGrasp = function () {
        return this.online;
    };
    OfflineService.prototype.readLocationData = function (rfsParentId, rfsId) {
        var _this = this;
        if (this.configuration && this.configuration.dirPath && this.configuration.dirPath.result) {
            var locationData_1;
            if (this.locationDataStore.length > 0) {
                for (var i = 0; i < this.locationDataStore.length; i = i + 1) {
                    if (this.locationDataStore[i].getRfsParentId() == rfsParentId) {
                        locationData_1 = this.locationDataStore[i];
                    }
                }
            }
            if (locationData_1) {
                console.log("Data is retrieved from offline store for rfs parent:", rfsParentId, "and rfs:", rfsId);
                return Observable_1.Observable.create(function (observer) {
                    observer.next(locationData_1.rawData);
                    observer.complete();
                });
            }
            else {
                return Observable_1.Observable.create(function (observer) {
                    _this.http.request(_this.configuration.dirPath.result + '/' + rfsParentId + '-' + rfsId + '/upstream/location-assessment.json').subscribe(function (data) {
                        var result = data.json();
                        var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'offline-service');
                        locationDataModel.setRawData(result);
                        _this.locationDataStore.push(locationDataModel);
                        console.log("Data is retrieved from FS for rfs parent:", rfsParentId, "and rfs:", rfsId);
                        observer.next(result);
                        observer.complete();
                    }, function (err) { return console.error(err); }, function () { });
                });
            }
        }
        else {
            return this.http.request("json/test-data/RFS-30939-SUBRFS-24266/location-assessment.json").map(function (res) { return res.json(); });
        }
    };
    OfflineService.prototype.readRfsReportData = function (rfsParentId, rfsId) {
        var _this = this;
        if (this.configuration && this.configuration.dirPath && this.configuration.dirPath.result) {
            var rfsReportData_1;
            if (this.rfsReportDataStore.length > 0) {
                for (var i = 0; i < this.rfsReportDataStore.length; i = i + 1) {
                    if (this.rfsReportDataStore[i].getRfsParentId() == rfsParentId) {
                        rfsReportData_1 = this.rfsReportDataStore[i];
                    }
                }
            }
            if (rfsReportData_1) {
                console.log("Data is retrieved from offline store for rfs parent:", rfsParentId, "and rfs:", rfsId);
                return Observable_1.Observable.create(function (observer) {
                    observer.next(rfsReportData_1.rawData);
                    observer.complete();
                });
            }
            else {
                return Observable_1.Observable.create(function (observer) {
                    _this.http.request(_this.configuration.dirPath.result + '/' + rfsParentId + '-' + rfsId + '/upstream/rfs-report.json').subscribe(function (data) {
                        var result = data.json();
                        var rfsReportDataModel = new rfs_report_data_model_1.RfsReportDataModel(rfsParentId, rfsId, 'offline-service');
                        rfsReportDataModel.setRawData(result);
                        _this.rfsReportDataStore.push(rfsReportDataModel);
                        console.log("Data is retrieved from FS for rfs parent:", rfsParentId, "and rfs:", rfsId);
                        observer.next(result);
                        observer.complete();
                    }, function (err) { return console.error(err); }, function () { });
                });
            }
        }
        else {
            return this.http.request("json/test-data/RFS-30939-SUBRFS-24266/rfs-report.json").map(function (res) { return res.json(); });
        }
    };
    OfflineService.prototype.writeLocationData = function (locationDataModel) {
        if (this.locationDataStore.length > 0) {
            for (var i = 0; i < this.locationDataStore.length; i = i + 1) {
                if (this.locationDataStore[i].getRfsParentId() == locationDataModel.getRfsParentId()) {
                    this.locationDataStore[i] = locationDataModel;
                }
            }
        }
    };
    OfflineService.prototype.writeRfsReportData = function (rfsReportDataModel) {
        if (this.rfsReportDataStore.length > 0) {
            for (var i = 0; i < this.rfsReportDataStore.length; i = i + 1) {
                if (this.rfsReportDataStore[i].getRfsParentId() == rfsReportDataModel.getRfsParentId()) {
                    this.rfsReportDataStore[i] = rfsReportDataModel;
                }
            }
        }
    };
    OfflineService.prototype.save = function (locationDataModel) {
        var rfsDirName = locationDataModel.getRfsParentId() + '-' + locationDataModel.getRfsId();
        var upstreamDirPath = '/' + rfsDirName + '/' + this.configuration.upstreamDirName;
        var ipcOperation = {
            "doAction": "saveData",
            "data": locationDataModel.getRawData(),
            "contentType": 'json',
            "dirRelativePath": upstreamDirPath,
            "fileName": "/location-assessment.json"
        };
        console.log("Requesting FS to save loc for rfs parent:", locationDataModel.getRfsParentId(), "and rfs:", locationDataModel.getRfsId(), "source:", locationDataModel.getSourceName());
        this.ipcSS.ipcAsyncSend(ipcOperation);
    };
    OfflineService.prototype.saveRfsReport = function (rfsReportDataModel) {
        var rfsDirName = rfsReportDataModel.getRfsParentId() + '-' + rfsReportDataModel.getRfsId();
        var upstreamDirPath = '/' + rfsDirName + '/' + this.configuration.upstreamDirName;
        var ipcOperation = {
            "doAction": "saveData",
            "data": rfsReportDataModel.getRawData(),
            "contentType": 'json',
            "dirRelativePath": upstreamDirPath,
            "fileName": "/rfs-report.json"
        };
        console.log("Requesting FS to save rfs-report for rfs parent:", rfsReportDataModel.getRfsParentId(), "and rfs:", rfsReportDataModel.getRfsId(), "source:", rfsReportDataModel.getSourceName());
        this.ipcSS.ipcAsyncSend(ipcOperation);
    };
    OfflineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration, ipcSenderService_1.ipcSenderService])
    ], OfflineService);
    return OfflineService;
}());
exports.OfflineService = OfflineService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBa0MsOEJBQThCLENBQUMsQ0FBQTtBQUNqRSxzQ0FBbUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVwRSxpQ0FBaUMsdUJBQXVCLENBQUMsQ0FBQTtBQUd6RDtJQUtJLHdCQUFvQixJQUFVLEVBQVUsYUFBNEIsRUFBVSxLQUF1QjtRQUx6RyxpQkF5TEM7UUFwTHVCLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBSjdGLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsc0JBQWlCLEdBQXdCLEVBQUUsQ0FBQztRQUM1Qyx1QkFBa0IsR0FBeUIsRUFBRSxDQUFDO1FBSWxELElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUUzQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFVixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsS0FBSSxDQUFDLGlCQUFp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LENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBekxMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUEwTGIscUJBQUM7QUFBRCxDQXpMQSxBQXlMQyxJQUFBO0FBekxZLHNCQUFjLGlCQXlMMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkRhdGFNb2RlbCB9IGZyb20gJy4uL21vZGVsL2xvY2F0aW9uLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBSZnNSZXBvcnREYXRhTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9yZnMtcmVwb3J0LWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IGlwY1NlbmRlclNlcnZpY2UgfSBmcm9tICcuLy4uL2lwY1NlbmRlclNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT2ZmbGluZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBvbmxpbmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbkRhdGFTdG9yZTogTG9jYXRpb25EYXRhTW9kZWxbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZnNSZXBvcnREYXRhU3RvcmU6IFJmc1JlcG9ydERhdGFNb2RlbFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24sIHByaXZhdGUgaXBjU1M6IGlwY1NlbmRlclNlcnZpY2UpIHtcclxuICAgICAgICAvL3RoaXMuY2hlY2tIZWFydGJlYXQoKTtcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jaGVja0hlYXJ0YmVhdCgpO1xyXG4gICAgICAgIH0sIDMwMDAwKTtcclxuXHJcbiAgICAgICAgbGV0IHNhdmVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvY2F0aW9uRGF0YVN0b3JlLmxlbmd0aDsgaSA9IGkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmUodGhpcy5sb2NhdGlvbkRhdGFTdG9yZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTYXZlIHRvIEZTIGZpbmlzaGVkIGZvciB0b3RhbCBsb2M6IFwiLCB0aGlzLmxvY2F0aW9uRGF0YVN0b3JlLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmZzUmVwb3J0RGF0YVN0b3JlLmxlbmd0aDsgaSA9IGkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVSZnNSZXBvcnQodGhpcy5yZnNSZXBvcnREYXRhU3RvcmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSB0byBGUyBmaW5pc2hlZCBmb3IgdG90YWwgcmZzLXJlcG9ydDogXCIsIHRoaXMucmZzUmVwb3J0RGF0YVN0b3JlLmxlbmd0aCk7XHJcbiAgICAgICAgfSwgMzAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLnNlcnZlciArICdwcndlYi9QUlNlcnZsZXQnKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJcyBoZWF0YmVhdCBhdmFpbGFsYmU/XCIsIHRoaXMub25saW5lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXMgaGVhdGJlYXQgYXZhaWxhbGJlP1wiLCB0aGlzLm9ubGluZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25saW5lV2l0aEdyYXNwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ubGluZTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGggJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGgucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2F0aW9uRGF0YVN0b3JlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2NhdGlvbkRhdGFTdG9yZS5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2F0aW9uRGF0YVN0b3JlW2ldLmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhID0gdGhpcy5sb2NhdGlvbkRhdGFTdG9yZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpcyByZXRyaWV2ZWQgZnJvbSBvZmZsaW5lIHN0b3JlIGZvciByZnMgcGFyZW50OlwiLCByZnNQYXJlbnRJZCwgXCJhbmQgcmZzOlwiLCByZnNJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobG9jYXRpb25EYXRhLnJhd0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QodGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGgucmVzdWx0ICsgJy8nICsgcmZzUGFyZW50SWQgKyAnLScgKyByZnNJZCArICcvdXBzdHJlYW0vbG9jYXRpb24tYXNzZXNzbWVudC5qc29uJykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ29mZmxpbmUtc2VydmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhTW9kZWwuc2V0UmF3RGF0YShyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25EYXRhU3RvcmUucHVzaChsb2NhdGlvbkRhdGFNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2F0aW9uRGF0YVN0b3JlJywgdGhpcy5sb2NhdGlvbkRhdGFTdG9yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzIHJldHJpZXZlZCBmcm9tIEZTIGZvciByZnMgcGFyZW50OlwiLCByZnNQYXJlbnRJZCwgXCJhbmQgcmZzOlwiLCByZnNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdGhpcmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGNvbXBsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3Rlc3QtZGF0YS9SRlMtMzA5MzktU1VCUkZTLTI0MjY2L2xvY2F0aW9uLWFzc2Vzc21lbnQuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWRSZnNSZXBvcnREYXRhKHJmc1BhcmVudElkLCByZnNJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGggJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGgucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCByZnNSZXBvcnREYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZnNSZXBvcnREYXRhU3RvcmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJmc1JlcG9ydERhdGFTdG9yZS5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJmc1JlcG9ydERhdGFTdG9yZVtpXS5nZXRSZnNQYXJlbnRJZCgpID09IHJmc1BhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJmc1JlcG9ydERhdGEgPSB0aGlzLnJmc1JlcG9ydERhdGFTdG9yZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZnNSZXBvcnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgcmV0cmlldmVkIGZyb20gb2ZmbGluZSBzdG9yZSBmb3IgcmZzIHBhcmVudDpcIiwgcmZzUGFyZW50SWQsIFwiYW5kIHJmczpcIiwgcmZzSWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJmc1JlcG9ydERhdGEucmF3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCh0aGlzLmNvbmZpZ3VyYXRpb24uZGlyUGF0aC5yZXN1bHQgKyAnLycgKyByZnNQYXJlbnRJZCArICctJyArIHJmc0lkICsgJy91cHN0cmVhbS9yZnMtcmVwb3J0Lmpzb24nKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmZzUmVwb3J0RGF0YU1vZGVsID0gbmV3IFJmc1JlcG9ydERhdGFNb2RlbChyZnNQYXJlbnRJZCwgcmZzSWQsICdvZmZsaW5lLXNlcnZpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJmc1JlcG9ydERhdGFNb2RlbC5zZXRSYXdEYXRhKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZnNSZXBvcnREYXRhU3RvcmUucHVzaChyZnNSZXBvcnREYXRhTW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdyZnNSZXBvcnREYXRhU3RvcmUnLCB0aGlzLnJmc1JlcG9ydERhdGFTdG9yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzIHJldHJpZXZlZCBmcm9tIEZTIGZvciByZnMgcGFyZW50OlwiLCByZnNQYXJlbnRJZCwgXCJhbmQgcmZzOlwiLCByZnNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdGhpcmQgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIGNvbXBsZXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGBqc29uL3Rlc3QtZGF0YS9SRlMtMzA5MzktU1VCUkZTLTI0MjY2L3Jmcy1yZXBvcnQuanNvbmApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YU1vZGVsOiBMb2NhdGlvbkRhdGFNb2RlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uRGF0YVN0b3JlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvY2F0aW9uRGF0YVN0b3JlLmxlbmd0aDsgaSA9IGkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhdGlvbkRhdGFTdG9yZVtpXS5nZXRSZnNQYXJlbnRJZCgpID09IGxvY2F0aW9uRGF0YU1vZGVsLmdldFJmc1BhcmVudElkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uRGF0YVN0b3JlW2ldID0gbG9jYXRpb25EYXRhTW9kZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVSZnNSZXBvcnREYXRhKHJmc1JlcG9ydERhdGFNb2RlbDogUmZzUmVwb3J0RGF0YU1vZGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmZzUmVwb3J0RGF0YVN0b3JlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJmc1JlcG9ydERhdGFTdG9yZS5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmZzUmVwb3J0RGF0YVN0b3JlW2ldLmdldFJmc1BhcmVudElkKCkgPT0gcmZzUmVwb3J0RGF0YU1vZGVsLmdldFJmc1BhcmVudElkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJmc1JlcG9ydERhdGFTdG9yZVtpXSA9IHJmc1JlcG9ydERhdGFNb2RlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKGxvY2F0aW9uRGF0YU1vZGVsKSB7XHJcbiAgICAgICAgbGV0IHJmc0Rpck5hbWUgPSBsb2NhdGlvbkRhdGFNb2RlbC5nZXRSZnNQYXJlbnRJZCgpICsgJy0nICsgbG9jYXRpb25EYXRhTW9kZWwuZ2V0UmZzSWQoKTtcclxuICAgICAgICBsZXQgdXBzdHJlYW1EaXJQYXRoID0gJy8nICsgcmZzRGlyTmFtZSArICcvJyArIHRoaXMuY29uZmlndXJhdGlvbi51cHN0cmVhbURpck5hbWU7XHJcblxyXG4gICAgICAgIGxldCBpcGNPcGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIFwiZG9BY3Rpb25cIjogXCJzYXZlRGF0YVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogbG9jYXRpb25EYXRhTW9kZWwuZ2V0UmF3RGF0YSgpLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6ICdqc29uJyxcclxuICAgICAgICAgICAgXCJkaXJSZWxhdGl2ZVBhdGhcIjogdXBzdHJlYW1EaXJQYXRoLCAvLyB3aGVuIG5lZWRlZCBwYXNzIHZhbHVlIHdpdGggcHJlY2VkaW5nIGZvcndhcmQgc2xhc2hcclxuICAgICAgICAgICAgXCJmaWxlTmFtZVwiOiBcIi9sb2NhdGlvbi1hc3Nlc3NtZW50Lmpzb25cIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyBGUyB0byBzYXZlIGxvYyBmb3IgcmZzIHBhcmVudDpcIiwgbG9jYXRpb25EYXRhTW9kZWwuZ2V0UmZzUGFyZW50SWQoKSwgXCJhbmQgcmZzOlwiLCBsb2NhdGlvbkRhdGFNb2RlbC5nZXRSZnNJZCgpLCBcInNvdXJjZTpcIiwgbG9jYXRpb25EYXRhTW9kZWwuZ2V0U291cmNlTmFtZSgpKTtcclxuICAgICAgICB0aGlzLmlwY1NTLmlwY0FzeW5jU2VuZChpcGNPcGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZVJmc1JlcG9ydChyZnNSZXBvcnREYXRhTW9kZWwpIHtcclxuICAgICAgICBsZXQgcmZzRGlyTmFtZSA9IHJmc1JlcG9ydERhdGFNb2RlbC5nZXRSZnNQYXJlbnRJZCgpICsgJy0nICsgcmZzUmVwb3J0RGF0YU1vZGVsLmdldFJmc0lkKCk7XHJcbiAgICAgICAgbGV0IHVwc3RyZWFtRGlyUGF0aCA9ICcvJyArIHJmc0Rpck5hbWUgKyAnLycgKyB0aGlzLmNvbmZpZ3VyYXRpb24udXBzdHJlYW1EaXJOYW1lO1xyXG5cclxuICAgICAgICBsZXQgaXBjT3BlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICBcImRvQWN0aW9uXCI6IFwic2F2ZURhdGFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IHJmc1JlcG9ydERhdGFNb2RlbC5nZXRSYXdEYXRhKCksXHJcbiAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogJ2pzb24nLFxyXG4gICAgICAgICAgICBcImRpclJlbGF0aXZlUGF0aFwiOiB1cHN0cmVhbURpclBhdGgsIC8vIHdoZW4gbmVlZGVkIHBhc3MgdmFsdWUgd2l0aCBwcmVjZWRpbmcgZm9yd2FyZCBzbGFzaFxyXG4gICAgICAgICAgICBcImZpbGVOYW1lXCI6IFwiL3Jmcy1yZXBvcnQuanNvblwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIEZTIHRvIHNhdmUgcmZzLXJlcG9ydCBmb3IgcmZzIHBhcmVudDpcIiwgcmZzUmVwb3J0RGF0YU1vZGVsLmdldFJmc1BhcmVudElkKCksIFwiYW5kIHJmczpcIiwgcmZzUmVwb3J0RGF0YU1vZGVsLmdldFJmc0lkKCksIFwic291cmNlOlwiLCByZnNSZXBvcnREYXRhTW9kZWwuZ2V0U291cmNlTmFtZSgpKTtcclxuICAgICAgICB0aGlzLmlwY1NTLmlwY0FzeW5jU2VuZChpcGNPcGVyYXRpb24pO1xyXG4gICAgfVxyXG59Il19
