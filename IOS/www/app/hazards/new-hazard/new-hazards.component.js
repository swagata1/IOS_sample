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
var common_1 = require('@angular/common');
var componentCommunicationService_1 = require('../../shared/componentCommunicationService');
var hazards_service_1 = require('../shared/hazards.service');
var risk_improvements_service_1 = require('../../risk-improvements/shared/risk-improvements.service');
var localStorageService_1 = require('../../shared/localStorageService');
var NewHazardsComponent = (function () {
    function NewHazardsComponent(service, localStorageService, ccs, riService) {
        this.service = service;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.riService = riService;
    }
    NewHazardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.site = this.localStorageService.get('locationData');
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        this.service.getHazardsData(rfsParentId, rfsId).subscribe(function (data) {
            _this.hazardsData = data;
            if (_this.hazardsData.hazards.length > 0) {
                var count = 0;
                _this.randomIDGeneratorInterval = setInterval(function () {
                    if (count < _this.hazardsData.hazards.length) {
                        if (!('HAZARD_RANDOM_ID_TOLINK' in _this.hazardsData.hazards[count])) {
                            var timestampkey = new Date();
                            _this.hazardsData.hazards[count].HAZARD_RANDOM_ID_TOLINK = timestampkey.getTime();
                        }
                        if (count == _this.hazardsData.hazards.length - 1) {
                            clearInterval(_this.randomIDGeneratorInterval);
                            _this.ccs.setHazardsData(_this.hazardsData);
                        }
                        count++;
                    }
                }, 1);
            }
            else {
                _this.ccs.setHazardsData(_this.hazardsData);
            }
        }, function (err) { return console.error(err); }, function () { });
        this.riService.getRiskImprovementsData(rfsParentId, rfsId).subscribe(function (data) {
            var riskImprovementsData = {};
            if (data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.RiskPage)
                riskImprovementsData = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.RiskPage;
            _this.ccs.setRiskImprovementsData(riskImprovementsData);
        }, function (err) { return console.error(err); }, function () { });
    };
    NewHazardsComponent.prototype.ngOnDestroy = function () {
        if (this.randomIDGeneratorInterval) {
            clearInterval(this.randomIDGeneratorInterval);
        }
    };
    NewHazardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-hazards',
            templateUrl: 'new-hazard.component.html',
            providers: [common_1.DatePipe, hazards_service_1.HazardsService, risk_improvements_service_1.RiskImprovementsService]
        }), 
        __metadata('design:paramtypes', [hazards_service_1.HazardsService, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, (typeof (_a = typeof risk_improvements_service_1.RiskImprovementsService !== 'undefined' && risk_improvements_service_1.RiskImprovementsService) === 'function' && _a) || Object])
    ], NewHazardsComponent);
    return NewHazardsComponent;
    var _a;
}());
exports.NewHazardsComponent = NewHazardsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvbmV3LWhhemFyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUQsZUFBZSxDQUFDLENBQUE7QUFDekUsdUJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsOENBQThDLDRDQUE0QyxDQUFDLENBQUE7QUFDM0YsZ0NBQStCLDJCQUEyQixDQUFDLENBQUE7QUFDM0QsMENBQXdDLDBEQUEwRCxDQUFDLENBQUE7QUFDbkcsb0NBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFTdkU7SUFJSSw2QkFBb0IsT0FBc0IsRUFBVSxtQkFBd0MsRUFBVSxHQUFpQyxFQUFVLFNBQWtDO1FBQS9KLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUF5QjtJQUVuTCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWdEQztRQS9DQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFJekQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FFckQsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFeEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMseUJBQXlCLEdBQUcsV0FBVyxDQUFDO29CQUMzQyxFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDMUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuRSxJQUFJLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzRCQUM5QixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ25GLENBQUM7d0JBRUQsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNoRCxhQUFhLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7NEJBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQzt3QkFDRCxLQUFLLEVBQUUsQ0FBQztvQkFDVixDQUFDO2dCQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNSLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUMsRUFFRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBRXpCLGNBQU8sQ0FBQyxDQUNYLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQ2xFLFVBQUEsSUFBSTtZQUNGLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDNUYsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3BILEtBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUN4RCxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUN6QixjQUFPLENBQUMsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVILHlDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQSxDQUFDO1lBQ2pDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBT0wsQ0FBQztJQTNFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBRSxpQkFBUSxFQUFFLGdDQUFjLEVBQUUsbURBQXVCLENBQUU7U0FDakUsQ0FBQzs7MkJBQUE7SUEwRkYsMEJBQUM7O0FBQUQsQ0F4RkEsQUF3RkMsSUFBQTtBQXhGWSwyQkFBbUIsc0JBd0YvQixDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvbmV3LWhhemFyZHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgSGF6YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaGF6YXJkcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmlza0ltcHJvdmVtZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yaXNrLWltcHJvdmVtZW50cy9zaGFyZWQvcmlzay1pbXByb3ZlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbmV3LWhhemFyZHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmV3LWhhemFyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIERhdGVQaXBlLCBIYXphcmRzU2VydmljZSwgUmlza0ltcHJvdmVtZW50c1NlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0hhemFyZHNDb21wb25lbnQgaW1wbGVtZW50cyAgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIGhhemFyZHNEYXRhOiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHJhbmRvbUlER2VuZXJhdG9ySW50ZXJ2YWw6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTpIYXphcmRzU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIGNjczpDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSwgcHJpdmF0ZSByaVNlcnZpY2U6IFJpc2tJbXByb3ZlbWVudHNTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgXHQvLyBUaGlzIGNvbXBvbmVudCByZWFkcyB0aGUgaGF6YXJkcyBmcm9tIG9mZmxpbmUgc2VydmljZSBkYXRhIGFuZCByZXNwb25zaWJsZSBmb3Igc2F2aW5nIGRhdGEgdG9vLlxyXG4gICAgXHQvLyByZWFkIHJlZmVyZW5jZSBkYXRhIGZvciBkcm9wZG93biB2YWx1ZXMgaWYgbmVlZGVkXHJcbiAgICAgIC8vIGdldCBsb2NhdGlvbiBkYXRhXHJcbiAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICBsZXQgcmZzSWQgPSB0aGlzLnNpdGUuUkZTX0lEO1xyXG4gICAgICB0aGlzLnNlcnZpY2UuZ2V0SGF6YXJkc0RhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAvLyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiB3aGljaCBydW5zIG9uIHN1Y2Nlc3NcclxuICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGF6YXJkc0RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICBpZih0aGlzLmhhemFyZHNEYXRhLmhhemFyZHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21JREdlbmVyYXRvckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgICAgaWYoY291bnQgPCB0aGlzLmhhemFyZHNEYXRhLmhhemFyZHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighKCdIQVpBUkRfUkFORE9NX0lEX1RPTElOSycgaW4gdGhpcy5oYXphcmRzRGF0YS5oYXphcmRzW2NvdW50XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lc3RhbXBrZXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXphcmRzRGF0YS5oYXphcmRzW2NvdW50XS5IQVpBUkRfUkFORE9NX0lEX1RPTElOSyA9IHRpbWVzdGFtcGtleS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IHRoaXMuaGF6YXJkc0RhdGEuaGF6YXJkcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmFuZG9tSURHZW5lcmF0b3JJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNjcy5zZXRIYXphcmRzRGF0YSh0aGlzLmhhemFyZHNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2NzLnNldEhhemFyZHNEYXRhKHRoaXMuaGF6YXJkc0RhdGEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggcnVucyBvbiBlcnJvclxyXG4gICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgIC8vIHRoZSB0aGlyZCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHJ1bnMgb24gY29tcGxldGlvblxyXG4gICAgICAgICAgKCkgPT4ge31cclxuICAgICAgKTtcclxuICAgICAgLy9GZXRjaCBsYXRlc3QgUkkgZGF0YSB0byBkZXBpY3QgbGlua2luZyB3aXRoIGhhemFyZHMuXHJcbiAgICAgIHRoaXMucmlTZXJ2aWNlLmdldFJpc2tJbXByb3ZlbWVudHNEYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgbGV0IHJpc2tJbXByb3ZlbWVudHNEYXRhID0ge307XHJcbiAgICAgICAgICBpZihkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuUmlza1BhZ2UpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJpc2tJbXByb3ZlbWVudHNEYXRhID0gZGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LlJpc2tQYWdlO1xyXG4gICAgICAgICAgdGhpcy5jY3Muc2V0Umlza0ltcHJvdmVtZW50c0RhdGEocmlza0ltcHJvdmVtZW50c0RhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICgpID0+IHt9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgICBpZih0aGlzLnJhbmRvbUlER2VuZXJhdG9ySW50ZXJ2YWwpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yYW5kb21JREdlbmVyYXRvckludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zYXZlSW50ZXJ2YWwpO1xyXG4gICAgICAvLyAgICAgbGV0IHNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgICAgLy8gICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coYFNhdmUgaW50ZXJ2YWwgY2xlYXJlZCBhbmQgZGF0YSBzYXZlZCBmb3IgcmlzayBpbXByb3ZlbWVudC5gKTsgXHJcbiAgICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8vIHNhdmVEYXRhVG9GaWxlKGV2ZW50KSB7XHJcbiAgLy8gICAgICAgbGV0IHJmc1BhcmVudElkID0gdGhpcy5zaXRlLlJGU19QQVJFTlRfSUQ7XHJcbiAgLy8gICAgICAgbGV0IHJmc0lkID0gdGhpcy5zaXRlLlJGU19JRDtcclxuXHJcbiAgLy8gICAgICAgaWYgKGV2ZW50LmdldFR5cGUoKSA9PSAnc2F2ZScgJiYgZXZlbnQuZ2V0UmZzUGFyZW50SWQoKSA9PSByZnNQYXJlbnRJZCAmJiBldmVudC5nZXRSZnNJZCgpID09IHJmc0lkKSB7XHJcblxyXG4gIC8vICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgLy8gICAgICAgICAgICAgICBkYXRhID0+IHtcclxuXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLkhhemFyZHMgPSBzZXJ2aWNlLm1hcFRvTG9jYXRpb25EYXRhKGhhemFyZHNEYXRhKTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgICBsZXQgbG9jYXRpb25EYXRhTW9kZWwgPSBuZXcgTG9jYXRpb25EYXRhTW9kZWwocmZzUGFyZW50SWQsIHJmc0lkLCAnc3ByaW5rbGVyJyk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhTW9kZWwuc2V0UmF3RGF0YShkYXRhKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLndyaXRlTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YU1vZGVsKTtcclxuICAvLyAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuIl19
