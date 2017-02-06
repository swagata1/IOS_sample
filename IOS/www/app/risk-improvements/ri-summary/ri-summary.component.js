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
var router_1 = require('@angular/router');
var risk_improvements_service_1 = require('./../shared/risk-improvements.service');
var ri_summary_service_1 = require('./ri-summary.service');
var configuration_1 = require('../../shared/configuration');
var localStorageService_1 = require('../../shared/localStorageService');
var componentCommunicationService_1 = require('../../shared/componentCommunicationService');
var common_service_1 = require('../../shared/services/common.service');
var location_data_model_1 = require('../../shared/model/location-data.model');
var offline_service_1 = require('../../shared/services/offline.service');
var event_model_1 = require('../../shared/model/event.model');
var RISummaryComponent = (function () {
    function RISummaryComponent(router, riService, riSummaryService, localStorageService, ccs, commonService, offlineService, _changeDetectionRef) {
        this.router = router;
        this.riService = riService;
        this.riSummaryService = riSummaryService;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.commonService = commonService;
        this.offlineService = offlineService;
        this._changeDetectionRef = _changeDetectionRef;
        this.comm = { currentState: 'ri-summary', isDownloaded: false };
        this.riDataList = [];
        this.tradeSectors = [];
        this.mainTypes = [];
        this.types = [];
        this.uniqueTypes = [];
        this.categories = [];
        this.intendedActions = [];
        this.targetCompletionTimeValues = [];
        this.riStatusList = [];
        this.riMatrixList = [];
        this.router = router;
    }
    RISummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.site = this.localStorageService.get('locationData');
        this.getTradeSectors();
        this.getRIMatrixList();
        this.getMainTypes();
        this.getCategories();
        this.getRIStatusList();
        this.getIntendedActions();
        this.getTargetCompletionTimeValues();
        this.getRFSReport();
        this.getRiskImprovementsList();
        this.ccs.getRiskImprovementsData().subscribe(function (data) {
            _this.riskImprovementsData = data;
            _this.updateRIDataList();
        });
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting risk improvement to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    RISummaryComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            var site = this.localStorageService.get('locationData');
            this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for risk improvement.");
        }
    };
    RISummaryComponent.prototype.ngOnChanges = function () {
        if (this.riskImprovementsData && this.riskImprovementsData.RiskImprvmnt_PAGES) {
            this.updateRIDataList();
        }
    };
    RISummaryComponent.prototype.ngAfterViewInit = function () {
        this._changeDetectionRef.detectChanges();
    };
    RISummaryComponent.prototype.getViewMetaData = function () {
        if (this.addRIType == 'natcat-flood') {
            this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Flood', true, { 'RecTypeCode': true });
        }
        else if (this.addRIType == 'natcat-surge') {
            this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Surge', true, { 'RecTypeCode': true });
        }
        else if (this.addRIType == 'natcat-wind') {
            this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Wind', true, { 'RecTypeCode': true });
        }
        else if (this.addRIType == 'natcat-eq') {
            this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Earthquake', true, { 'RecTypeCode': true });
        }
        else if (this.addRIType == 'construction') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Construction');
        }
        else if (this.addRIType == 'sprinkler') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Sprinklers');
        }
        else if (this.addRIType == 'water-supply') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Water Supply');
        }
        this.updateRIDataList();
    };
    RISummaryComponent.prototype.filterRIMatrixByPTSnSubtype = function (preTradeSector, subtype) {
        var result = this.riMatrixList.filter(function (item) { return item.RecSubType == subtype && item.TradeSectorOrOccupancy == preTradeSector; });
        if (result.length > 0) {
            return result[0];
        }
        else {
            return {};
        }
    };
    RISummaryComponent.prototype.filterRIMatrixByPTSnMTnType = function (preTradeSector, mainType, type, selSelection, selSelectionAttr) {
        var result = this.riMatrixList.filter(function (item) { return item.RecMainType == mainType && item.RecType == type && item.TradeSectorOrOccupancy == preTradeSector; });
        if (result.length > 0) {
            if (selSelection) {
                var selectiveMetaData = this.getSelectiveMetaDataAttribute(result[0], selSelectionAttr);
                return selectiveMetaData;
            }
            else {
                return result[0];
            }
        }
        else {
            return {};
        }
    };
    RISummaryComponent.prototype.getSelectiveMetaDataAttribute = function (mdObj, selSelectionAttr) {
        var selectiveMetaDataObj = {};
        selectiveMetaDataObj.RecMainTypeCode = mdObj.RecMainTypeCode;
        selectiveMetaDataObj.RecMainType = mdObj.RecMainType;
        selectiveMetaDataObj.TradeSectorOrOccupancy = mdObj.TradeSectorOrOccupancy;
        if (selSelectionAttr.RecTypeCode) {
            selectiveMetaDataObj.RecTypeCode = mdObj.RecTypeCode;
            selectiveMetaDataObj.RecType = mdObj.RecType;
        }
        if (selSelectionAttr.RecSubTypeCode) {
            selectiveMetaDataObj.RecSubTypeCode = mdObj.RecSubTypeCode;
            selectiveMetaDataObj.RecSubType = mdObj.RecSubType;
        }
        return selectiveMetaDataObj;
    };
    RISummaryComponent.prototype.getRiskImprovementsList = function () {
        var _this = this;
        this.riService.getRiskImprovementsData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            if (data.LocationAssessment) {
                _this.riskImprovementsData = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.RiskPage;
                _this.ccs.setRiskImprovementsData(_this.riskImprovementsData);
                var occupancyCodeTemp_1 = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD;
                _this.riService.getTradeSectors().subscribe(function (tsData) {
                    _this.tradeSectors = tsData.filter(function (item) { return item.LOB == "CP"; });
                    _this.predominantTradeSector = _this.filterTradeSectorByCode(occupancyCodeTemp_1);
                    _this.localStorageService.set('predominantTradeSector', _this.predominantTradeSector);
                    console.log('this.predominantTradeSector -- ', _this.predominantTradeSector);
                    _this.getViewMetaData();
                }, function (err) { return console.error(err); }, function () { return console.log('Trade sectors - Done loading data in getRiskImprovementsList function.'); });
            }
        }, function (err) { return console.error(err); }, function () { return console.log('Risk Improvements - Done loading data.'); });
    };
    RISummaryComponent.prototype.getRFSReport = function () {
        var _this = this;
        this.riService.getRFSReportData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            if ('SurveyCompletedDate' in data) {
                _this.localStorageService.set('surveyCompletedDate', data.SurveyCompletedDate);
            }
            else {
                _this.localStorageService.set('surveyCompletedDate', '');
            }
        }, function (err) { return console.error(err); }, function () { return console.log('RFS Reports - Done loading data.'); });
    };
    RISummaryComponent.prototype.updateRIDataList = function () {
        if (this.viewMetaData && this.viewMetaData.RecMainType && this.viewMetaData.RecType && this.viewMetaData.RecSubType) {
            if (this.riskImprovementsData.RiskImprvmnt_PAGES && this.riskImprovementsData.RiskImprvmnt_PAGES.length >= 0)
                this.riDataList = this.filterRiskImprovementsList(this.riskImprovementsData.RiskImprvmnt_PAGES, this.viewMetaData);
            else
                this.riDataList = [];
        }
        else if (this.viewMetaData && this.viewMetaData.RecMainType && this.viewMetaData.RecType) {
            if (this.riskImprovementsData.RiskImprvmnt_PAGES && this.riskImprovementsData.RiskImprvmnt_PAGES.length >= 0) {
                this.riDataList = this.filterRiskImprovementsListByType(this.riskImprovementsData.RiskImprvmnt_PAGES, this.viewMetaData);
            }
            else {
                this.riDataList = [];
            }
        }
        else {
            this.riDataList = this.riskImprovementsData ? this.riskImprovementsData.RiskImprvmnt_PAGES : [];
        }
        console.log('--- riDataList --- ', this.riDataList);
    };
    RISummaryComponent.prototype.getTradeSectors = function () {
        var _this = this;
        this.riService.getTradeSectors().subscribe(function (data) {
            _this.tradeSectors = data.filter(function (item) { return item.LOB == "CP"; });
        }, function (err) { return console.error(err); }, function () { return console.log('Trade sectors - Done loading data.'); });
    };
    RISummaryComponent.prototype.getCategories = function () {
        var _this = this;
        this.riService.getCategories().subscribe(function (data) { _this.categories = data; }, function (err) { return console.error(err); }, function () { return console.log('Categories - Done loading data.'); });
    };
    RISummaryComponent.prototype.getIntendedActions = function () {
        var _this = this;
        this.riService.getIntendedActions().subscribe(function (data) { _this.intendedActions = data; }, function (err) { return console.error(err); }, function () { return console.log('Intended Actions - Done loading data.'); });
    };
    RISummaryComponent.prototype.getTargetCompletionTimeValues = function () {
        var _this = this;
        this.riService.getTargetCompletionTimeValues().subscribe(function (data) { _this.targetCompletionTimeValues = data; }, function (err) { return console.error(err); }, function () { return console.log('Target Completion Time Values - Done loading data.'); });
    };
    RISummaryComponent.prototype.getMainTypes = function () {
        var _this = this;
        this.riService.getMainTypes().subscribe(function (data) { _this.mainTypes = data; }, function (err) { return console.error(err); }, function () { return console.log('Main Types - Done loading data.'); });
    };
    RISummaryComponent.prototype.getRIMatrixList = function () {
        var _this = this;
        this.riService.getRIMatrix().subscribe(function (data) {
            _this.riMatrixList = data;
        }, function (err) { return console.error(err); }, function () { return console.log('RIMatrix - Done loading data.'); });
    };
    RISummaryComponent.prototype.getRIStatusList = function () {
        var _this = this;
        this.riService.getRIStatusList().subscribe(function (data) { _this.riStatusList = data; }, function (err) { return console.error(err); }, function () { return console.log('Status - Done loading data.'); });
    };
    RISummaryComponent.prototype.filterMainType = function (searchValue) {
        var result = this.mainTypes.filter(function (item) { return item.RILLRCode == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RISummaryComponent.prototype.filterTypesByTradeSector = function (mainTypeCode, predominantTradeSector, recTypeCode) {
        var result = this.riMatrixList.filter(function (item) { return item.RecMainTypeCode == mainTypeCode && item.TradeSectorOrOccupancy == predominantTradeSector && item.RecTypeCode == recTypeCode; });
        return result.length > 0 ? result[0].RecType : '';
    };
    RISummaryComponent.prototype.filterSubTypeByTradeSector = function (mainTypeCode, predominantTradeSector, recTypeCode, recSubTypeCode) {
        var result = this.riMatrixList.filter(function (item) { return item.RecMainTypeCode == mainTypeCode && item.TradeSectorOrOccupancy == predominantTradeSector && item.RecTypeCode == recTypeCode && item.RecSubTypeCode == recSubTypeCode; });
        return result.length > 0 ? result[0].RecSubType : '';
    };
    RISummaryComponent.prototype.filterTradeSectorByCode = function (occupancyCode) {
        var result = this.tradeSectors.filter(function (item) { return item.Code == occupancyCode; });
        return result.length > 0 ? result[0].Description : '';
    };
    RISummaryComponent.prototype.filterCategory = function (searchValue) {
        var result = this.categories.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RISummaryComponent.prototype.filterIntendedAction = function (searchValue) {
        var result = this.intendedActions.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RISummaryComponent.prototype.filterStatusByCodes = function (searchValue) {
        var result = this.riStatusList.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RISummaryComponent.prototype.filterRiskImprovementsList = function (srcList, viewMetaData) {
        return srcList.filter(function (item) { return item.SubType == viewMetaData.RecSubType; });
    };
    RISummaryComponent.prototype.filterRiskImprovementsListByType = function (srcList, viewMetaData) {
        return srcList.filter(function (item) { return item.Type == viewMetaData.RecType; });
    };
    RISummaryComponent.prototype.getIndexOf = function (arr, val, prop) {
        var l = arr.length, k = 0;
        for (k = 0; k < l; k = k + 1) {
            if (arr[k][prop] === val) {
                return k;
            }
        }
        return -1;
    };
    RISummaryComponent.prototype.removeRiskImprovementItem = function (riNumber) {
        var eleIndex = this.getIndexOf(this.riskImprovementsData.RiskImprvmnt_PAGES, riNumber, 'RI_NO');
        if (eleIndex >= 0) {
            this.riskImprovementsData.RiskImprvmnt_PAGES.splice(eleIndex, 1);
            this.ccs.setRiskImprovementsData(this.riskImprovementsData);
        }
    };
    RISummaryComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                locData.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.RiskPage = _this.riskImprovementsData;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'ri-summary');
                locationDataModel.setRawData(locData);
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    RISummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ri-summary',
            templateUrl: 'ri-summary.component.html',
            styleUrls: ['ri-summary.component.css'],
            inputs: ['viewType', 'viewMetaData', 'addRIType'],
            providers: [risk_improvements_service_1.RiskImprovementsService, ri_summary_service_1.RISummaryService, configuration_1.Configuration, localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, risk_improvements_service_1.RiskImprovementsService, ri_summary_service_1.RISummaryService, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, common_service_1.CommonService, offline_service_1.OfflineService, core_1.ChangeDetectorRef])
    ], RISummaryComponent);
    return RISummaryComponent;
}());
exports.RISummaryComponent = RISummaryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1zdW1tYXJ5L3JpLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxxQkFBa0YsZUFBZSxDQUFDLENBQUE7QUFDbEcsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFFL0QsMENBQXdDLHVDQUF1QyxDQUFDLENBQUE7QUFDaEYsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsOEJBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0Qsb0NBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFDdkUsOENBQThDLDRDQUE0QyxDQUFDLENBQUE7QUFFM0YsK0JBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFDckUsb0NBQWtDLHdDQUF3QyxDQUFDLENBQUE7QUFFM0UsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFDdkUsNEJBQXNCLGdDQUFnQyxDQUFDLENBQUE7QUFXdkQ7SUEwQkUsNEJBQW9CLE1BQWMsRUFBVSxTQUFrQyxFQUFVLGdCQUFrQyxFQUFVLG1CQUF3QyxFQUFTLEdBQWtDLEVBQVUsYUFBNEIsRUFBVSxjQUE4QixFQUFVLG1CQUF1QztRQUFsVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBeUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQStCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBekI5VSxTQUFJLEdBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFJaEYsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUd6Qixj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RyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEksQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEksQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckksQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0ksQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNC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QUUsV0FBVyxDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1EQUF1QixFQUFFLHFDQUFnQixFQUFFLDZCQUFhLEVBQUUseUNBQW1CLENBQUM7U0FDM0YsQ0FBQzs7MEJBQUE7SUFrV0YseUJBQUM7QUFBRCxDQWhXQSxBQWdXQyxJQUFBO0FBaFdZLDBCQUFrQixxQkFnVzlCLENBQUEiLCJmaWxlIjoiYXBwL3Jpc2staW1wcm92ZW1lbnRzL3JpLXN1bW1hcnkvcmktc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBweWFkYXYgb24gMTAvMzEvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFJpc2tJbXByb3ZlbWVudHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvcmlzay1pbXByb3ZlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJJU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuL3JpLXN1bW1hcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcENvbW1JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYXRpb25EYXRhTW9kZWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWwvbG9jYXRpb24tZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZS9zYXZlZC10by1mcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9vZmZsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmktc3VtbWFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICdyaS1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncmktc3VtbWFyeS5jb21wb25lbnQuY3NzJ10sXHJcbiAgaW5wdXRzOiBbJ3ZpZXdUeXBlJywgJ3ZpZXdNZXRhRGF0YScsICdhZGRSSVR5cGUnXSxcclxuICBwcm92aWRlcnM6IFtSaXNrSW1wcm92ZW1lbnRzU2VydmljZSwgUklTdW1tYXJ5U2VydmljZSwgQ29uZmlndXJhdGlvbiwgTG9jYWxTdG9yYWdlU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSSVN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTYXZlZFRvRmlsZVN5c3RlbSB7XHJcbiAgcHJpdmF0ZSBjb21tOiBDb21tdW5pY2F0ZSA9IHsgY3VycmVudFN0YXRlOiAncmktc3VtbWFyeScsIGlzRG93bmxvYWRlZDogZmFsc2UgfTtcclxuICBwcml2YXRlIHNpdGU6IGFueTtcclxuXHJcbiAgcmlza0ltcHJvdmVtZW50c0RhdGE6IGFueTsgIC8vIEdvbGRlbiBDb3B5XHJcbiAgcmlEYXRhTGlzdDogYW55W10gPSBbXTsgICAgICAgICAgICAvLyBVc2UgaXQgdG8gZHJhdyBzdW1tYXJ5IHZpZXdcclxuXHJcbiAgdHJhZGVTZWN0b3JzOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgcHJlZG9taW5hbnRUcmFkZVNlY3Rvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3VydmV5Q29tcGxldGVkRGF0ZTogYW55O1xyXG4gIG1haW5UeXBlczogYW55W10gPSBbXTtcclxuICB0eXBlczogYW55W10gPSBbXTtcclxuICB1bmlxdWVUeXBlczogYW55W10gPSBbXTtcclxuICBjYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xyXG4gIGludGVuZGVkQWN0aW9uczogYW55W10gPSBbXTtcclxuICB0YXJnZXRDb21wbGV0aW9uVGltZVZhbHVlczogYW55W10gPSBbXTtcclxuICByaVN0YXR1c0xpc3Q6IGFueVtdID0gW107XHJcbiAgcmlNYXRyaXhMaXN0OiBhbnlbXSA9IFtdO1xyXG4gIG1haW5UeXBlVmFsdWU6IHN0cmluZztcclxuICB0eXBlVmFsdWU6IHN0cmluZztcclxuICBjYXRlZ29yeVZhbHVlOiBzdHJpbmc7XHJcbiAgaW50ZW5kZWRBY3Rpb25WYWx1ZTogc3RyaW5nO1xyXG4gIHRhcmdldENvbXBsZXRpb25UaW1lVmFsdWU6IHN0cmluZztcclxuICBhZ2VWYWx1ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2F2ZUludGVydmFsOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmlTZXJ2aWNlOiBSaXNrSW1wcm92ZW1lbnRzU2VydmljZSwgcHJpdmF0ZSByaVN1bW1hcnlTZXJ2aWNlOiBSSVN1bW1hcnlTZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHB1YmxpYyBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsIHByaXZhdGUgb2ZmbGluZVNlcnZpY2U6IE9mZmxpbmVTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWYgOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAvL3RoaXMucmlEYXRhTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgIHRoaXMuZ2V0VHJhZGVTZWN0b3JzKCk7XHJcbiAgICB0aGlzLmdldFJJTWF0cml4TGlzdCgpO1xyXG4gICAgdGhpcy5nZXRNYWluVHlwZXMoKTtcclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgdGhpcy5nZXRSSVN0YXR1c0xpc3QoKTtcclxuICAgIHRoaXMuZ2V0SW50ZW5kZWRBY3Rpb25zKCk7XHJcbiAgICB0aGlzLmdldFRhcmdldENvbXBsZXRpb25UaW1lVmFsdWVzKCk7XHJcbiAgICB0aGlzLmdldFJGU1JlcG9ydCgpO1xyXG4gICAgdGhpcy5nZXRSaXNrSW1wcm92ZW1lbnRzTGlzdCgpO1xyXG4gICAgdGhpcy5jY3MuZ2V0Umlza0ltcHJvdmVtZW50c0RhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnVwZGF0ZVJJRGF0YUxpc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2F2ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHJpc2sgaW1wcm92ZW1lbnQgdG8gc2F2ZSBmb3IgcmZzIHBhcmVudDpcIiwgc2l0ZS5SRlNfUEFSRU5UX0lELCBcImFuZCByZnM6XCIsIHNpdGUuUkZTX0lEKTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhVG9GaWxlKG5ldyBFdmVudChzaXRlLlJGU19QQVJFTlRfSUQsIHNpdGUuUkZTX0lELCAnc2F2ZScpKTtcclxuICAgIH0sIDMwMDAwKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zYXZlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgbGV0IHNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNhdmUgaW50ZXJ2YWwgY2xlYXJlZCBhbmQgZGF0YSBzYXZlZCBmb3IgcmlzayBpbXByb3ZlbWVudC5gKTsgXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCl7XHJcbiAgICBpZih0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhICYmIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTKXtcclxuICAgICAgdGhpcy51cGRhdGVSSURhdGFMaXN0KCk7XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkgOiB2b2lkIHtcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vMTEvMTUvMjAxNjogQWRkIGZvciBVUzQxLCBVUzI3OSwgVVMyODEsIFVTMjgyLCBVUzI4MywgY29uc3RydWN0aW9uLCBzcHJpbmtsZXJzIGFuZCB3YXRlciBzdXBwbHkgcGFnZXMuXHJcbiAgZ2V0Vmlld01ldGFEYXRhKCkge1xyXG4gICAgaWYodGhpcy5hZGRSSVR5cGUgPT0gJ25hdGNhdC1mbG9vZCcpIHtcclxuICAgICAgdGhpcy52aWV3TWV0YURhdGEgPSB0aGlzLmZpbHRlclJJTWF0cml4QnlQVFNuTVRuVHlwZSh0aGlzLnByZWRvbWluYW50VHJhZGVTZWN0b3IsICdOQVRDQVQnLCAnRmxvb2QnLCB0cnVlLCB7ICdSZWNUeXBlQ29kZSc6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWRkUklUeXBlID09ICduYXRjYXQtc3VyZ2UnKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ1N1cmdlJywgdHJ1ZSwgeyAnUmVjVHlwZUNvZGUnOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFkZFJJVHlwZSA9PSAnbmF0Y2F0LXdpbmQnKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ1dpbmQnLCB0cnVlLCB7ICdSZWNUeXBlQ29kZSc6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWRkUklUeXBlID09ICduYXRjYXQtZXEnKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ0VhcnRocXVha2UnLCB0cnVlLCB7ICdSZWNUeXBlQ29kZSc6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWRkUklUeXBlID09ICdjb25zdHJ1Y3Rpb24nKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnQ29uc3RydWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYWRkUklUeXBlID09ICdzcHJpbmtsZXInKSB7XHJcblx0XHQgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnU3ByaW5rbGVycycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFkZFJJVHlwZSA9PSAnd2F0ZXItc3VwcGx5Jykge1xyXG4gICAgICB0aGlzLnZpZXdNZXRhRGF0YSA9IHRoaXMuZmlsdGVyUklNYXRyaXhCeVBUU25TdWJ0eXBlKHRoaXMucHJlZG9taW5hbnRUcmFkZVNlY3RvciwgJ1dhdGVyIFN1cHBseScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVSSURhdGFMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvLzExLzE1LzIwMTY6IEZvciBhZGRpbmcgcmkgZm9yIGNvbnN0cnVjdGlvbiwgc3ByaW5rbGVyIGFuZCB3YXRlciBzdXBwbHlcclxuXHRmaWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUocHJlVHJhZGVTZWN0b3IsIHN1YnR5cGUpIHtcclxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmlNYXRyaXhMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUmVjU3ViVHlwZSA9PSBzdWJ0eXBlICYmIGl0ZW0uVHJhZGVTZWN0b3JPck9jY3VwYW5jeSA9PSBwcmVUcmFkZVNlY3Rvcik7XHJcblx0XHRpZihyZXN1bHQubGVuZ3RoID4gMCl7XHJcblx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgLy8xMS8xNS8yMDE2OiBBZGQgZm9yIFVTNDEsIFVTMjc5LCBVUzI4MSwgVVMyODIsIFVTMjgzXHJcbiAgZmlsdGVyUklNYXRyaXhCeVBUU25NVG5UeXBlKHByZVRyYWRlU2VjdG9yLCBtYWluVHlwZSwgdHlwZSwgc2VsU2VsZWN0aW9uLCBzZWxTZWxlY3Rpb25BdHRyKSB7XHJcbiAgICAvL2ZpbHRlciB3aXRoIFByZWRvbWluYW50IFRyYWRlIFNlY3RvciwgVHlwZSAmIFN1YnR5cGVcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmlNYXRyaXhMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUmVjTWFpblR5cGUgPT0gbWFpblR5cGUgJiYgaXRlbS5SZWNUeXBlID09IHR5cGUgJiYgaXRlbS5UcmFkZVNlY3Rvck9yT2NjdXBhbmN5ID09IHByZVRyYWRlU2VjdG9yKTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoc2VsU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGl2ZU1ldGFEYXRhID0gdGhpcy5nZXRTZWxlY3RpdmVNZXRhRGF0YUF0dHJpYnV0ZShyZXN1bHRbMF0sIHNlbFNlbGVjdGlvbkF0dHIpO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RpdmVNZXRhRGF0YTsgLy9zZWxlY3RpdmUgYXR0cmlidXRlIGZyb20gb2JqZWN0IFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRbMF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vMTEvMTUvMjAxNjogQWRkIGZvciBVUzQxLCBVUzI3OSwgVVMyODEsIFVTMjgyLCBVUzI4M1xyXG4gIGdldFNlbGVjdGl2ZU1ldGFEYXRhQXR0cmlidXRlKG1kT2JqLCBzZWxTZWxlY3Rpb25BdHRyKSB7XHJcbiAgICBsZXQgc2VsZWN0aXZlTWV0YURhdGFPYmogPSB7fTtcclxuICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY01haW5UeXBlQ29kZSA9IG1kT2JqLlJlY01haW5UeXBlQ29kZTtcclxuICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY01haW5UeXBlID0gbWRPYmouUmVjTWFpblR5cGU7XHJcbiAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5UcmFkZVNlY3Rvck9yT2NjdXBhbmN5ID0gbWRPYmouVHJhZGVTZWN0b3JPck9jY3VwYW5jeTtcclxuXHJcbiAgICBpZiAoc2VsU2VsZWN0aW9uQXR0ci5SZWNUeXBlQ29kZSkge1xyXG4gICAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5SZWNUeXBlQ29kZSA9IG1kT2JqLlJlY1R5cGVDb2RlO1xyXG4gICAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5SZWNUeXBlID0gbWRPYmouUmVjVHlwZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxTZWxlY3Rpb25BdHRyLlJlY1N1YlR5cGVDb2RlKSB7XHJcbiAgICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY1N1YlR5cGVDb2RlID0gbWRPYmouUmVjU3ViVHlwZUNvZGU7XHJcbiAgICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY1N1YlR5cGUgPSBtZE9iai5SZWNTdWJUeXBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdGl2ZU1ldGFEYXRhT2JqO1xyXG4gIH1cclxuXHJcbiAgZ2V0Umlza0ltcHJvdmVtZW50c0xpc3QoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRSaXNrSW1wcm92ZW1lbnRzRGF0YSh0aGlzLnNpdGUuUkZTX1BBUkVOVF9JRCwgdGhpcy5zaXRlLlJGU19JRCkuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZihkYXRhLkxvY2F0aW9uQXNzZXNzbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSA9IGRhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLkFzc2Vzc21lbnRMb2NhdGlvbkxpc3RbMF0uTG9jQXNzZXNzbWVudC5SaXNrUGFnZTtcclxuICAgICAgICAgIC8vZmlsdGVyIHN1bW1hcnkgc291cmNlIHRvIGFjaGlldmUgY29tcGFjdCAmIGxhcmdlIHZpZXdcclxuICAgICAgICAgIHRoaXMuY2NzLnNldFJpc2tJbXByb3ZlbWVudHNEYXRhKHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEpO1xyXG4gICAgICAgICAgbGV0IG9jY3VwYW5jeUNvZGVUZW1wID0gZGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LkNPUEVfUEFHRS5PQ0NVUEFOQ1lfQ0Q7XHJcbiAgICAgICAgICAvLzExLzIyLzIwMTY6IEZpeCBmb3IgREUyMzVcclxuICAgICAgICAgIHRoaXMucmlTZXJ2aWNlLmdldFRyYWRlU2VjdG9ycygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgdHNEYXRhID0+IHsgXHJcbiAgICAgICAgICAgICAgdGhpcy50cmFkZVNlY3RvcnMgPSB0c0RhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5MT0IgPT0gXCJDUFwiKTtcclxuICAgICAgICAgICAgICAvL2dldCBQcmVkb21pbmFudCBUcmFkZSBTZWN0b3IgZnJvbSBvY2N1cGFuY3lcclxuICAgICAgICAgICAgICB0aGlzLnByZWRvbWluYW50VHJhZGVTZWN0b3IgPSB0aGlzLmZpbHRlclRyYWRlU2VjdG9yQnlDb2RlKG9jY3VwYW5jeUNvZGVUZW1wKTtcclxuICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdwcmVkb21pbmFudFRyYWRlU2VjdG9yJywgdGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yIC0tICcsIHRoaXMucHJlZG9taW5hbnRUcmFkZVNlY3Rvcik7XHJcbiAgICAgICAgICAgICAgLy8xMS8xNS8yMDE2OiBBZGQgZm9yIFVTNDEsIFVTMjc5LCBVUzI4MSwgVVMyODIsIFVTMjgzXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRWaWV3TWV0YURhdGEoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1RyYWRlIHNlY3RvcnMgLSBEb25lIGxvYWRpbmcgZGF0YSBpbiBnZXRSaXNrSW1wcm92ZW1lbnRzTGlzdCBmdW5jdGlvbi4nKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1Jpc2sgSW1wcm92ZW1lbnRzIC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRSRlNSZXBvcnQoKXtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldFJGU1JlcG9ydERhdGEodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCdTdXJ2ZXlDb21wbGV0ZWREYXRlJyBpbiBkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdzdXJ2ZXlDb21wbGV0ZWREYXRlJywgZGF0YS5TdXJ2ZXlDb21wbGV0ZWREYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3VydmV5Q29tcGxldGVkRGF0ZScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSRlMgUmVwb3J0cyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUklEYXRhTGlzdCgpIHtcclxuICAgIGlmICh0aGlzLnZpZXdNZXRhRGF0YSAmJiB0aGlzLnZpZXdNZXRhRGF0YS5SZWNNYWluVHlwZSAmJiB0aGlzLnZpZXdNZXRhRGF0YS5SZWNUeXBlICYmIHRoaXMudmlld01ldGFEYXRhLlJlY1N1YlR5cGUpIHtcclxuICAgICAgaWYodGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMgJiYgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMubGVuZ3RoID49MClcclxuICAgICAgICB0aGlzLnJpRGF0YUxpc3QgPSB0aGlzLmZpbHRlclJpc2tJbXByb3ZlbWVudHNMaXN0KHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTLCB0aGlzLnZpZXdNZXRhRGF0YSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnJpRGF0YUxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIC8vMTEvMTUvMjAxNjogQWRkIGZvciBVUzQxLCBVUzI3OSwgVVMyODEsIFVTMjgyLCBVUzI4M1xyXG4gICAgZWxzZSBpZih0aGlzLnZpZXdNZXRhRGF0YSAmJiB0aGlzLnZpZXdNZXRhRGF0YS5SZWNNYWluVHlwZSAmJiB0aGlzLnZpZXdNZXRhRGF0YS5SZWNUeXBlKSB7XHJcbiAgICAgIGlmKHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTICYmIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTLmxlbmd0aCA+PTApIHtcclxuICAgICAgICB0aGlzLnJpRGF0YUxpc3QgPSB0aGlzLmZpbHRlclJpc2tJbXByb3ZlbWVudHNMaXN0QnlUeXBlKHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTLCB0aGlzLnZpZXdNZXRhRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yaURhdGFMaXN0ID0gW107XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJpRGF0YUxpc3QgPSB0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhP3RoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTOltdO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJy0tLSByaURhdGFMaXN0IC0tLSAnLCB0aGlzLnJpRGF0YUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhZGVTZWN0b3JzKCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0VHJhZGVTZWN0b3JzKCkuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgdGhpcy50cmFkZVNlY3RvcnMgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uTE9CID09IFwiQ1BcIik7IFxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnVHJhZGUgc2VjdG9ycyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4geyB0aGlzLmNhdGVnb3JpZXMgPSBkYXRhIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnRlbmRlZEFjdGlvbnMoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRJbnRlbmRlZEFjdGlvbnMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4geyB0aGlzLmludGVuZGVkQWN0aW9ucyA9IGRhdGEgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0ludGVuZGVkIEFjdGlvbnMgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFRhcmdldENvbXBsZXRpb25UaW1lVmFsdWVzKCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0VGFyZ2V0Q29tcGxldGlvblRpbWVWYWx1ZXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4geyB0aGlzLnRhcmdldENvbXBsZXRpb25UaW1lVmFsdWVzID0gZGF0YSB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnVGFyZ2V0IENvbXBsZXRpb24gVGltZSBWYWx1ZXMgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE1haW5UeXBlcygpIHtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldE1haW5UeXBlcygpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7IHRoaXMubWFpblR5cGVzID0gZGF0YSB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnTWFpbiBUeXBlcyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UklNYXRyaXhMaXN0KCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0UklNYXRyaXgoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMucmlNYXRyaXhMaXN0ID0gZGF0YTtcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JJTWF0cml4IC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRSSVN0YXR1c0xpc3QoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRSSVN0YXR1c0xpc3QoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4geyB0aGlzLnJpU3RhdHVzTGlzdCA9IGRhdGEgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1N0YXR1cyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyTWFpblR5cGUoc2VhcmNoVmFsdWUpIHtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMubWFpblR5cGVzLmZpbHRlcihpdGVtID0+IGl0ZW0uUklMTFJDb2RlID09IHNlYXJjaFZhbHVlKTtcclxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXS5EZXNjcmlwdGlvbiA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyVHlwZXNCeVRyYWRlU2VjdG9yKG1haW5UeXBlQ29kZSwgcHJlZG9taW5hbnRUcmFkZVNlY3RvciwgcmVjVHlwZUNvZGUpIHtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmlNYXRyaXhMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUmVjTWFpblR5cGVDb2RlID09IG1haW5UeXBlQ29kZSAmJiBpdGVtLlRyYWRlU2VjdG9yT3JPY2N1cGFuY3kgPT0gcHJlZG9taW5hbnRUcmFkZVNlY3RvciAmJiBpdGVtLlJlY1R5cGVDb2RlID09IHJlY1R5cGVDb2RlKTtcclxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXS5SZWNUeXBlIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJTdWJUeXBlQnlUcmFkZVNlY3RvcihtYWluVHlwZUNvZGUsIHByZWRvbWluYW50VHJhZGVTZWN0b3IsIHJlY1R5cGVDb2RlLCByZWNTdWJUeXBlQ29kZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnbWFpblR5cGVDb2RlIC0nLG1haW5UeXBlQ29kZSwgJ3ByZWRvbWluYW50VHJhZGVTZWN0b3IgLScscHJlZG9taW5hbnRUcmFkZVNlY3RvciwgJ3JlY1R5cGVDb2RlIC0nLHJlY1R5cGVDb2RlLCAncmVjU3ViVHlwZUNvZGUgLScscmVjU3ViVHlwZUNvZGUpO1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy5yaU1hdHJpeExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5SZWNNYWluVHlwZUNvZGUgPT0gbWFpblR5cGVDb2RlICYmIGl0ZW0uVHJhZGVTZWN0b3JPck9jY3VwYW5jeSA9PSBwcmVkb21pbmFudFRyYWRlU2VjdG9yICYmIGl0ZW0uUmVjVHlwZUNvZGUgPT0gcmVjVHlwZUNvZGUgJiYgaXRlbS5SZWNTdWJUeXBlQ29kZSA9PSByZWNTdWJUeXBlQ29kZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uUmVjU3ViVHlwZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyVHJhZGVTZWN0b3JCeUNvZGUob2NjdXBhbmN5Q29kZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy50cmFkZVNlY3RvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5Db2RlID09IG9jY3VwYW5jeUNvZGUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdLkRlc2NyaXB0aW9uIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJDYXRlZ29yeShzZWFyY2hWYWx1ZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSBzZWFyY2hWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uRGVzY3JpcHRpb24gOiAnJztcclxuICB9XHJcblxyXG4gIGZpbHRlckludGVuZGVkQWN0aW9uKHNlYXJjaFZhbHVlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLmludGVuZGVkQWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLkNvZGUgPT0gc2VhcmNoVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdLkRlc2NyaXB0aW9uIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJTdGF0dXNCeUNvZGVzKHNlYXJjaFZhbHVlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJpU3RhdHVzTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLkNvZGUgPT0gc2VhcmNoVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdLkRlc2NyaXB0aW9uIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJSaXNrSW1wcm92ZW1lbnRzTGlzdChzcmNMaXN0LCB2aWV3TWV0YURhdGEpIHtcclxuICAgIC8vIHJldHVybiBzcmNMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUklTS19NQUlOVFlQRV9DRCA9PSB2aWV3TWV0YURhdGEuUmVjTWFpblR5cGVDb2RlICYmIGl0ZW0uVHlwZSA9PSB2aWV3TWV0YURhdGEuUmVjVHlwZSAmJiBpdGVtLlN1YlR5cGUgPT0gdmlld01ldGFEYXRhLlJlY1N1YlR5cGUpO1xyXG4gICAgcmV0dXJuIHNyY0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5TdWJUeXBlID09IHZpZXdNZXRhRGF0YS5SZWNTdWJUeXBlKTtcclxuICB9XHJcblxyXG4gIC8vMTEvMTUvMjAxNjogQWRkIGZvciBVUzQxLCBVUzI3OSwgVVMyODEsIFVTMjgyLCBVUzI4M1xyXG4gIGZpbHRlclJpc2tJbXByb3ZlbWVudHNMaXN0QnlUeXBlKHNyY0xpc3QsIHZpZXdNZXRhRGF0YSkge1xyXG4gICAgcmV0dXJuIHNyY0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5UeXBlID09IHZpZXdNZXRhRGF0YS5SZWNUeXBlKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4T2YoYXJyLCB2YWwsIHByb3ApIHtcclxuICAgIGxldCBsID0gYXJyLmxlbmd0aCxcclxuICAgICAgayA9IDA7XHJcbiAgICBmb3IgKGsgPSAwOyBrIDwgbDsgayA9IGsgKyAxKSB7XHJcbiAgICAgIGlmIChhcnJba11bcHJvcF0gPT09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICByZW1vdmVSaXNrSW1wcm92ZW1lbnRJdGVtKHJpTnVtYmVyKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdyaU51bWJlciAtJywgcmlOdW1iZXIpO1xyXG4gICAgbGV0IGVsZUluZGV4OiBudW1iZXIgPSB0aGlzLmdldEluZGV4T2YodGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMsIHJpTnVtYmVyLCAnUklfTk8nKTtcclxuICAgIGlmIChlbGVJbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTLnNwbGljZShlbGVJbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuY2NzLnNldFJpc2tJbXByb3ZlbWVudHNEYXRhKHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZURhdGFUb0ZpbGUoZXZlbnQpIHtcclxuICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgbGV0IHJmc0lkID0gdGhpcy5zaXRlLlJGU19JRDtcclxuXHJcbiAgICBpZiAoZXZlbnQuZ2V0VHlwZSgpID09ICdzYXZlJyAmJiBldmVudC5nZXRSZnNQYXJlbnRJZCgpID09IHJmc1BhcmVudElkICYmIGV2ZW50LmdldFJmc0lkKCkgPT0gcmZzSWQpIHtcclxuICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGxvY0RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgIGxvY0RhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLkFzc2Vzc21lbnRMb2NhdGlvbkxpc3RbMF0uTG9jQXNzZXNzbWVudC5SaXNrUGFnZSA9IHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGE7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBsb2NhdGlvbkRhdGFNb2RlbCA9IG5ldyBMb2NhdGlvbkRhdGFNb2RlbChyZnNQYXJlbnRJZCwgcmZzSWQsICdyaS1zdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25EYXRhTW9kZWwuc2V0UmF3RGF0YShsb2NEYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLndyaXRlTG9jYXRpb25EYXRhKGxvY2F0aW9uRGF0YU1vZGVsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
