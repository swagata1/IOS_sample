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
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var WaterSupply_service_1 = require('./WaterSupply.service');
var validationMessages_1 = require('../shared/validationMessages');
var other_data_map_pipe_1 = require('./../shared/pipes/other-data-map.pipe');
var common_service_1 = require('../shared/services/common.service');
var location_data_model_1 = require('../shared/model/location-data.model');
var offline_service_1 = require('../shared/services/offline.service');
var event_model_1 = require('../shared/model/event.model');
var dateConverterService_1 = require('../shared/dateConverterService');
var WaterSupplyComponent = (function () {
    function WaterSupplyComponent(WaterSupplyService, _validationMessageComp, ccs, commonService, localStorageService, offlineService) {
        this.WaterSupplyService = WaterSupplyService;
        this._validationMessageComp = _validationMessageComp;
        this.ccs = ccs;
        this.commonService = commonService;
        this.localStorageService = localStorageService;
        this.offlineService = offlineService;
        this.supplyCount = 1;
        this.wsCurrentRatings = [];
        this.wsPostRIRatings = [];
        this.wsStableRatings = [];
        this.riMatrixList = [];
        this.tradeSectors = [];
        this.toggleEditWsCurrentRating = false;
        this.toggleEditWsPostRIRating = false;
        this.WaterSupplyService = WaterSupplyService;
        this._validationMessageComp = _validationMessageComp;
        this.commonService = commonService;
    }
    WaterSupplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewType = "small";
        this.commonService.globalNarrative = '';
        this.site = this.localStorageService.get('locationData');
        this.getWaterSupplyDropdownData();
        this.validationMessagesObject = this._validationMessageComp.getMessages('error');
        this.warningMessagesObject = this._validationMessageComp.getMessages('warning');
        this.getWSCurrentRatings();
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting water supply to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    WaterSupplyComponent.prototype.ngOnDestroy = function () {
        this.commonService.setModuleProperties('Water Supplies', false);
        if (this.waterSupplyData.length > 0) {
            for (var i = 0; i < this.waterSupplyData.length; i++) {
                if (this.waterSupplyData[i].WaterSupplyPerfData.length > 0) {
                    for (var j = 0; j < this.waterSupplyData[i].WaterSupplyPerfData.length; j++) {
                        if (this.waterSupplyData[i].WaterSupplyPerfData[j].STATIC_PRESSURE_QT < this.waterSupplyData[i].WaterSupplyPerfData[j].RESIDUAL_PRESSURE_QT) {
                            this.commonService.setModuleProperties('Water Supplies', true);
                        }
                    }
                }
            }
        }
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            var site = this.localStorageService.get('locationData');
            this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for water supply.");
        }
    };
    WaterSupplyComponent.prototype.deleteSupply = function (waterIndex) {
        this.waterSupplyData.splice(waterIndex, 1);
    };
    WaterSupplyComponent.prototype.deleteTest = function (waterIndex, testIndex) {
        if (this.waterSupplyData[waterIndex].WaterSupplyPerfData.length > 1) {
            this.waterSupplyData[waterIndex].WaterSupplyPerfData.splice(testIndex, 1);
        }
        else if (this.waterSupplyData[waterIndex].WaterSupplyPerfData.length == 1) {
            this.copiedValue = {
                "CACULATED_FLOW_QT": '',
                "CREATE_TS": '',
                "CREATE_USER_ID": '',
                "IncludeThisSection": '',
                "LOCATION_ASSESSMENT_ID": '',
                "LOCATION_FLOW_RDNG_TX": '',
                "LOCATION_PRESSURE_RDNG_TX": '',
                "PRESSURE_LOSS_QT": '',
                "pxObjClass": '',
                "RESIDUAL_FLOW_RATE_QT": '',
                "RESIDUAL_PRESSURE_QT": '',
                "SelectIndicator": '',
                "STATIC_PRESSURE_QT": '',
                "WATER_SUPPLY_SQN": '',
                "WATER_SUPPLY_TEST_DT": '',
                "WATER_SUPPLY_TEST_NM": '',
                "WATER_SUPPLY_TEST_SQN": '',
                "WATER_SUPPLY_TESTER_NM": ''
            };
            this.waterSupplyData[waterIndex].WaterSupplyPerfData.splice(testIndex, 1, this.copiedValue);
        }
    };
    WaterSupplyComponent.prototype.copyTest = function (value, waterIndex, testIndex) {
        this.copiedValue = {
            "CACULATED_FLOW_QT": value.CACULATED_FLOW_QT,
            "CREATE_TS": value.CREATE_TS,
            "CREATE_USER_ID": value.CREATE_USER_ID,
            "IncludeThisSection": value.IncludeThisSection,
            "LOCATION_ASSESSMENT_ID": value.LOCATION_ASSESSMENT_ID,
            "LOCATION_FLOW_RDNG_TX": value.LOCATION_FLOW_RDNG_TX,
            "LOCATION_PRESSURE_RDNG_TX": value.LOCATION_PRESSURE_RDNG_TX,
            "PRESSURE_LOSS_QT": value.PRESSURE_LOSS_QT,
            "pxObjClass": value.pxObjClass,
            "RESIDUAL_FLOW_RATE_QT": value.RESIDUAL_FLOW_RATE_QT,
            "RESIDUAL_PRESSURE_QT": value.RESIDUAL_PRESSURE_QT,
            "SelectIndicator": value.SelectIndicator,
            "STATIC_PRESSURE_QT": value.STATIC_PRESSURE_QT,
            "WATER_SUPPLY_SQN": value.WATER_SUPPLY_SQN,
            "WATER_SUPPLY_TEST_DT": value.WATER_SUPPLY_TEST_DT,
            "WATER_SUPPLY_TEST_NM": value.WATER_SUPPLY_TEST_NM,
            "WATER_SUPPLY_TEST_SQN": value.WATER_SUPPLY_TEST_SQN,
            "WATER_SUPPLY_TESTER_NM": value.WATER_SUPPLY_TESTER_NM
        };
        this.waterSupplyData[waterIndex].WaterSupplyPerfData.splice(testIndex + 1, 0, this.copiedValue);
    };
    WaterSupplyComponent.prototype.addSupplies = function () {
        for (var i = 0; i < this.supplyCount; i++) {
            this.waterSupplyData.push({ "ACTIVE_IN": "",
                "ASSOCIATED_PUMP_TYPE_CD": "",
                "CREATE_TS": "",
                "CREATE_USER_ID": "",
                "GRAPH_SQN": "",
                "GRAPH_TYPE_CD": "",
                "IncludeThisSection": "",
                "IncludeThisSectionExternal": "",
                "LOCATION_ASSESSMENT_ID": "",
                "pxObjClass": "",
                "showStatus": "",
                "UPDATE_TS": "",
                "UPDATE_USER_ID": "",
                "WATER_SUPPLY_ADEQUACY_CD": "",
                "WATER_SUPPLY_POINTS_QT": "",
                "WATER_SUPPLY_SQN": "",
                "WATER_SUPPLY_TYPE_CD": "",
                "WaterSupplyPerfData": [],
                "testCount": 1
            });
        }
    };
    WaterSupplyComponent.prototype.addTests = function (index, count) {
        for (var i = 0; i < count; i++) {
            this.waterSupplyData[index].WaterSupplyPerfData.push({ "CACULATED_FLOW_QT": "",
                "CREATE_TS": "",
                "CREATE_USER_ID": "",
                "IncludeThisSection": "true",
                "LOCATION_ASSESSMENT_ID": "",
                "LOCATION_FLOW_RDNG_TX": "",
                "LOCATION_PRESSURE_RDNG_TX": "",
                "PRESSURE_LOSS_QT": "",
                "pxObjClass": "",
                "RESIDUAL_FLOW_RATE_QT": "",
                "RESIDUAL_PRESSURE_QT": "",
                "SelectIndicator": "true",
                "STATIC_PRESSURE_QT": "",
                "WATER_SUPPLY_SQN": "",
                "WATER_SUPPLY_TEST_DT": "",
                "WATER_SUPPLY_TEST_NM": "",
                "WATER_SUPPLY_TEST_SQN": "",
                "WATER_SUPPLY_TESTER_NM": ""
            });
        }
    };
    WaterSupplyComponent.prototype.getWaterSupplyData = function () {
        var _this = this;
        this.WaterSupplyService.getWaterSupplyData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            var unit = data.RFSUnitType;
            if (unit == "Imperial") {
                _this.rfsUnit = "gpm";
            }
            else if (unit == "Metric") {
                _this.rfsUnit = "Lpm";
            }
            var pressureUnit = data.RFSDetails.WORKING_PRESSURE_CD;
            switch (pressureUnit) {
                case "PSI":
                    _this.rfsPressureUnit = "psi";
                    break;
                case "KPA":
                    _this.rfsPressureUnit = "kPa";
                    break;
                case "MPA":
                    _this.rfsPressureUnit = "Mpa";
                    break;
                case "BAR":
                    _this.rfsPressureUnit = "bar";
                    break;
            }
            var waterSupplyDetailsCheck = data.AssessmentLocationList[0].LocAssessment.WaterSupplyDetail.WaterSupplyDetailsPage;
            _this.availableWaterSupply = waterSupplyDetailsCheck.WATER_SUPPLY_POINTS_QT;
            _this.requiredWaterSupply = waterSupplyDetailsCheck.RequiredWaterSupplyPoints;
            if (waterSupplyDetailsCheck && waterSupplyDetailsCheck.CommentList) {
                _this.commonService.globalNarrative = waterSupplyDetailsCheck.CommentList[0].PrimaryLanguage;
            }
            if (!waterSupplyDetailsCheck.WaterSupplyList || waterSupplyDetailsCheck.WaterSupplyList.length == 0) {
                _this.waterSupplyData = [{ "ACTIVE_IN": "",
                        "ASSOCIATED_PUMP_TYPE_CD": "",
                        "CREATE_TS": "",
                        "CREATE_USER_ID": "",
                        "GRAPH_SQN": "",
                        "GRAPH_TYPE_CD": "",
                        "IncludeThisSection": "",
                        "IncludeThisSectionExternal": "",
                        "LOCATION_ASSESSMENT_ID": "",
                        "pxObjClass": "",
                        "showStatus": "",
                        "UPDATE_TS": "",
                        "UPDATE_USER_ID": "",
                        "WATER_SUPPLY_ADEQUACY_CD": "",
                        "WATER_SUPPLY_POINTS_QT": "",
                        "WATER_SUPPLY_SQN": "",
                        "WATER_SUPPLY_TYPE_CD": "",
                        "WaterSupplyPerfData": []
                    }];
            }
            else {
                _this.waterSupplyData = waterSupplyDetailsCheck.WaterSupplyList;
            }
            _this.preTradeSectorCode = data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD;
            console.log('this.preTradeSectorCode - ', _this.preTradeSectorCode);
            _this.preProcessData();
        }, function (err) { return console.error(err); }, function () { return console.log(_this.waterSupplyData); });
    };
    WaterSupplyComponent.prototype.preProcessData = function () {
        for (var i = 0; i < this.waterSupplyData.length; i++) {
            this.waterSupplyData[i].WATER_SUPPLY_TYPE_CD_VALUE = new other_data_map_pipe_1.OtherDataMapPipe().transform(this.waterSupplyData[i].WATER_SUPPLY_TYPE_CD, this.type);
            this.waterSupplyData[i].ASSOCIATED_PUMP_TYPE_CD_VALUE = new other_data_map_pipe_1.OtherDataMapPipe().transform(this.waterSupplyData[i].ASSOCIATED_PUMP_TYPE_CD, this.pumpAssociated);
            this.waterSupplyData[i].WATER_SUPPLY_ADEQUACY_CD_VALUE = new other_data_map_pipe_1.OtherDataMapPipe().transform(this.waterSupplyData[i].WATER_SUPPLY_ADEQUACY_CD, this.adequate);
            if (this.waterSupplyData[i].WaterSupplyPerfData) {
                for (var j = 0; j < this.waterSupplyData[i].WaterSupplyPerfData.length; j++) {
                    if (this.waterSupplyData[i].WaterSupplyPerfData[j].WATER_SUPPLY_TEST_DT.indexOf('-') == -1) {
                        this.waterSupplyData[i].WaterSupplyPerfData[j].WATER_SUPPLY_TEST_DT = '';
                        this.waterSupplyData[i].WaterSupplyPerfData[j].WATER_SUPPLY_TEST_DT = new dateConverterService_1.DateConverterService().graspToISO(this.waterSupplyData[i].WaterSupplyPerfData[j].WATER_SUPPLY_TEST_DT);
                    }
                }
            }
            this.waterSupplyData[i].testCount = 1;
        }
    };
    WaterSupplyComponent.prototype.getWaterSupplyDropdownData = function () {
        var _this = this;
        this.WaterSupplyService.getWaterSupplyDropdownData().subscribe(function (data) {
            _this.type = data.filter(function (item) { return item.ElementName == "SUCTION_SOURCE"; });
            _this.pumpAssociated = data.filter(function (item) { return item.ElementName == "PUMP_ASSOCIATED"; });
            _this.adequate = data.filter(function (item) { return item.ElementName == "WATER_ADEQ"; });
        }, function (err) { return console.error(err); }, function () { return _this.getWaterSupplyData(); });
    };
    WaterSupplyComponent.prototype.typeHandler = function (typeObj, index) {
        this.waterSupplyData[index].WATER_SUPPLY_TYPE_CD = typeObj.Code;
    };
    WaterSupplyComponent.prototype.pumpHandler = function (pumpObj, index) {
        this.waterSupplyData[index].ASSOCIATED_PUMP_TYPE_CD = pumpObj.Code;
    };
    WaterSupplyComponent.prototype.adequacyHandler = function (adequacyObj, index) {
        this.waterSupplyData[index].WATER_SUPPLY_ADEQUACY_CD = adequacyObj.Code;
    };
    WaterSupplyComponent.prototype.setTodaysDate = function (testData, args) {
        testData.showDatePicker = !testData.showDatePicker;
        testData.WATER_SUPPLY_TEST_DT = args;
    };
    WaterSupplyComponent.prototype.clearSelectedDate = function (testData) {
        testData.showDatePicker = !testData.showDatePicker;
        testData.WATER_SUPPLY_TEST_DT = null;
    };
    WaterSupplyComponent.prototype.setDate = function (date) {
        if (date == '') {
            date = null;
        }
        else {
            return date;
        }
    };
    WaterSupplyComponent.prototype.getWSCurrentRatings = function () {
        var _this = this;
        this.WaterSupplyService.getWaterSupplyRatings().subscribe(function (data) {
            _this.wsStableRatings = data.filter(function (item) { return item.RatQueCategory == "Water Supply"; });
            _this.wsCurrentRatings = _this.wsStableRatings;
            _this.wsPostRIRatings = _this.wsCurrentRatings;
        }, function (err) { return console.error(err); }, function () { return console.log("Water Suppoy Current Ratings - Done loading data."); });
    };
    WaterSupplyComponent.prototype.wsCurrentRatingHandler = function (ratingObj) {
        var currentRatingScore = ratingObj.Scores;
        if (this.wsStableRatings && this.wsStableRatings.length > 0) {
            this.wsPostRIRatings = [];
            for (var i = 0; i < this.wsStableRatings.length; i++) {
                if (Number(this.wsStableRatings[i].Scores) >= Number(currentRatingScore)) {
                    this.wsPostRIRatings.push(this.wsStableRatings[i]);
                }
            }
        }
        this.wsCurrentRatingValue = ratingObj.RatNarrative;
        this.toggleEditWsCurrentRating = false;
    };
    WaterSupplyComponent.prototype.wsCurrentRatingBlank = function (value) {
        if (value == '') {
            this.wsPostRIRatings = this.wsStableRatings;
        }
    };
    WaterSupplyComponent.prototype.wsPostRIRatingHandler = function (ratingObj) {
        var currentRatingScore = ratingObj.Scores;
        if (this.wsStableRatings && this.wsStableRatings.length > 0) {
            this.wsCurrentRatings = [];
            for (var i = 0; i < this.wsStableRatings.length; i++) {
                if (Number(this.wsStableRatings[i].Scores) <= Number(currentRatingScore)) {
                    this.wsCurrentRatings.push(this.wsStableRatings[i]);
                }
            }
        }
        this.wsPostRIRatingValue = ratingObj.RatNarrative;
        this.toggleEditWsPostRIRating = false;
    };
    WaterSupplyComponent.prototype.wsPostRIRatingBlank = function (value) {
        if (value == '') {
            this.wsCurrentRatings = this.wsStableRatings;
        }
    };
    WaterSupplyComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                locData.LocationAssessment.LAWorkPageList[0].
                    AssessmentLocationList[0].
                    LocAssessment.
                    WaterSupplyDetail.
                    WaterSupplyDetailsPage.WaterSupplyList = _this.waterSupplyData;
                locData.LocationAssessment.LAWorkPageList[0].
                    AssessmentLocationList[0].
                    LocAssessment.
                    WaterSupplyDetail.
                    WaterSupplyDetailsPage.CommentList[0].PrimaryLanguage = _this.commonService.globalNarrative;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'water-supply');
                locationDataModel.setRawData(locData);
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    WaterSupplyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'water-supply',
            templateUrl: 'WaterSupply.component.html',
            styleUrls: ['WaterSupply.component.css'],
            providers: [WaterSupply_service_1.WaterSupplyService, validationMessages_1.ValidationMessages, other_data_map_pipe_1.OtherDataMapPipe, localStorageService_1.LocalStorageService, dateConverterService_1.DateConverterService]
        }), 
        __metadata('design:paramtypes', [WaterSupply_service_1.WaterSupplyService, validationMessages_1.ValidationMessages, componentCommunicationService_1.ComponentCommunicationService, common_service_1.CommonService, localStorageService_1.LocalStorageService, offline_service_1.OfflineService])
    ], WaterSupplyComponent);
    return WaterSupplyComponent;
}());
exports.WaterSupplyComponent = WaterSupplyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRlclN1cHBseS93YXRlclN1cHBseS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRSxlQUFlLENBQUMsQ0FBQTtBQUkxRixvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQUd4RixvQ0FBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSxvQ0FBK0IsdUNBQXVDLENBQUMsQ0FBQTtBQUN2RSwrQkFBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQUNsRSxvQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUV4RSxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUNwRSw0QkFBc0IsNkJBQTZCLENBQUMsQ0FBQTtBQUNwRCxxQ0FBcUMsZ0NBQWdDLENBQUMsQ0FBQTtBQVV0RTtJQTJCSSw4QkFBb0Isa0JBQXFDLEVBQVUsc0JBQTBDLEVBQVUsR0FBaUMsRUFBVSxhQUE0QixFQUFVLG1CQUF3QyxFQUFVLGNBQThCO1FBQXBRLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsQnhSLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRWhCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN0Qiw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDM0MsNkJBQXdCLEdBQVksS0FBSyxD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Q3hDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztvQkFDekIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7Z0JBRS9GLElBQUksaUJBQWlCLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBbmRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHdDQUFrQixFQUFFLHVDQUFrQixFQUFFLHNDQUFnQixFQUFFLHlDQUFtQixFQUFFLDJDQUFvQixDQUFDO1NBQ25ILENBQUM7OzRCQUFBO0lBOGNGLDJCQUFDO0FBQUQsQ0E1Y0EsQUE0Y0MsSUFBQTtBQTVjWSw0QkFBb0IsdUJBNGNoQyxDQUFBIiwiZmlsZSI6ImFwcC93YXRlclN1cHBseS93YXRlclN1cHBseS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy9pbXBvcnQgeyBDb25zdHJ1Y3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25zdHJ1Y3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGUgfSBmcm9tICcuLi9zaGFyZWQvY29tcENvbW1JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2F0ZXJTdXBwbHlTZXJ2aWNlIH0gZnJvbSAnLi9XYXRlclN1cHBseS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb25NZXNzYWdlcyc7XHJcbmltcG9ydCB7T3RoZXJEYXRhTWFwUGlwZX0gZnJvbSAnLi8uLi9zaGFyZWQvcGlwZXMvb3RoZXItZGF0YS1tYXAucGlwZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkRhdGFNb2RlbCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbC9sb2NhdGlvbi1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgU2F2ZWRUb0ZpbGVTeXN0ZW0gfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlL3NhdmVkLXRvLWZzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL2V2ZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgRGF0ZUNvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0ZUNvbnZlcnRlclNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd3YXRlci1zdXBwbHknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdXYXRlclN1cHBseS5jb21wb25lbnQuaHRtbCcsIFxyXG4gICAgc3R5bGVVcmxzOiBbJ1dhdGVyU3VwcGx5LmNvbXBvbmVudC5jc3MnXSwgICBcclxuICAgIHByb3ZpZGVyczogW1dhdGVyU3VwcGx5U2VydmljZSwgVmFsaWRhdGlvbk1lc3NhZ2VzLCBPdGhlckRhdGFNYXBQaXBlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBEYXRlQ29udmVydGVyU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXYXRlclN1cHBseUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgU2F2ZWRUb0ZpbGVTeXN0ZW0ge1xyXG4gICAgcmZzVW5pdDogYW55O1xyXG4gICAgcmZzUHJlc3N1cmVVbml0OiBhbnk7XHJcbiAgICB3YXRlclN1cHBseURhdGEgOiBhbnk7XHJcbiAgICB0eXBlIDogYW55O1xyXG4gICAgcHVtcEFzc29jaWF0ZWQgOiBhbnk7XHJcbiAgICBhZGVxdWF0ZSA6IGFueTtcclxuICAgIHZhbGlkYXRpb25NZXNzYWdlc09iamVjdDoge307XHJcbiAgICB3YXJuaW5nTWVzc2FnZXNPYmplY3Q6IHt9O1xyXG4gICAgc3VwcGx5Q291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBzaXRlOmFueTtcclxuICAgIHByaXZhdGUgd3NDdXJyZW50UmF0aW5nczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgd3NQb3N0UklSYXRpbmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB3c1N0YWJsZVJhdGluZ3M6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIHJpTWF0cml4TGlzdDogYW55W10gPSBbXTtcclxuXHRwcml2YXRlIHRyYWRlU2VjdG9yczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgdG9nZ2xlRWRpdFdzQ3VycmVudFJhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVFZGl0V3NQb3N0UklSYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgd3NDdXJyZW50UmF0aW5nVmFsdWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgd3NQb3N0UklSYXRpbmdWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2aWV3VHlwZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2aWV3TWV0YURhdGE6IE9iamVjdDtcclxuXHRwcml2YXRlIHByZVRyYWRlU2VjdG9yQ29kZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIHNhdmVJbnRlcnZhbDogYW55O1xyXG4gICAgcHJpdmF0ZSBhdmFpbGFibGVXYXRlclN1cHBseTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZXF1aXJlZFdhdGVyU3VwcGx5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBXYXRlclN1cHBseVNlcnZpY2U6V2F0ZXJTdXBwbHlTZXJ2aWNlLCBwcml2YXRlIF92YWxpZGF0aW9uTWVzc2FnZUNvbXA6IFZhbGlkYXRpb25NZXNzYWdlcywgcHJpdmF0ZSBjY3M6Q29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSkge1xyXG5cdFx0dGhpcy5XYXRlclN1cHBseVNlcnZpY2UgPSBXYXRlclN1cHBseVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wID0gX3ZhbGlkYXRpb25NZXNzYWdlQ29tcDtcclxuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2UgPSBjb21tb25TZXJ2aWNlO1xyXG5cdH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMudmlld1R5cGUgPSBcInNtYWxsXCI7XHJcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdGhpcy52aWV3TWV0YURhdGEgPSB7XHJcbiAgICAgICAgICAgIFwiUmVjTWFpblR5cGVDb2RlXCI6IFwiUFBcIixcclxuICAgICAgICAgICAgXCJSZWNNYWluVHlwZVwiOiBcIlBoeXNpY2FsIFByb3RlY3Rpb25cIixcclxuICAgICAgICAgICAgXCJSZWNUeXBlQ29kZVwiOiBcIjE2MFwiLFxyXG4gICAgICAgICAgICBcIlJlY1R5cGVcIjogXCJXYXRlciBTdXBwbHlcIixcclxuICAgICAgICAgICAgXCJUcmFkZVNlY3Rvck9yT2NjdXBhbmN5XCI6IFwiR2VuZXJhbCpcIixcclxuICAgICAgICAgICAgXCJSZWNTdWJUeXBlQ29kZVwiOiBcIjU2OVwiLFxyXG4gICAgICAgICAgICBcIlJlY1N1YlR5cGVcIjogXCJXYXRlciBTdXBwbHlcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICBcdFx0Ly8gdGhpcy5nZXRSSU1hdHJpeExpc3QoKVxyXG5cdFx0Ly8gdGhpcy5nZXRUcmFkZVNlY3RvcnMoKTtcclxuICAgICAgICB0aGlzLmdldFdhdGVyU3VwcGx5RHJvcGRvd25EYXRhKCk7XHJcbiAgICAgICAgLy8gZmV0Y2hpbmcgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbGlkYXRpb24gbWVzc2FnZXMgZnJvbSB2YWxpZGF0aW9uU2VydmljZVxyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzT2JqZWN0ID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wLmdldE1lc3NhZ2VzKCdlcnJvcicpO1xyXG4gICAgICAgIHRoaXMud2FybmluZ01lc3NhZ2VzT2JqZWN0ID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wLmdldE1lc3NhZ2VzKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgLy90aGlzLmNjcy5zZXRSSVR5cGVzRGF0YSh0aGlzLnZpZXdNZXRhRGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZXRXU0N1cnJlbnRSYXRpbmdzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2F2ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3Rpbmcgd2F0ZXIgc3VwcGx5IHRvIHNhdmUgZm9yIHJmcyBwYXJlbnQ6XCIsIHNpdGUuUkZTX1BBUkVOVF9JRCwgXCJhbmQgcmZzOlwiLCBzaXRlLlJGU19JRCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhdmVEYXRhVG9GaWxlKG5ldyBFdmVudChzaXRlLlJGU19QQVJFTlRfSUQsIHNpdGUuUkZTX0lELCAnc2F2ZScpKTtcclxuICAgICAgICB9LCAzMDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNldE1vZHVsZVByb3BlcnRpZXMoJ1dhdGVyIFN1cHBsaWVzJywgZmFsc2UpO1xyXG4gICAgICAgIGlmKHRoaXMud2F0ZXJTdXBwbHlEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMud2F0ZXJTdXBwbHlEYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53YXRlclN1cHBseURhdGFbaV0uV2F0ZXJTdXBwbHlQZXJmRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMud2F0ZXJTdXBwbHlEYXRhW2ldLldhdGVyU3VwcGx5UGVyZkRhdGEubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMud2F0ZXJTdXBwbHlEYXRhW2ldLldhdGVyU3VwcGx5UGVyZkRhdGFbal0uU1RBVElDX1BSRVNTVVJFX1FUPCB0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XYXRlclN1cHBseVBlcmZEYXRhW2pdLlJFU0lEVUFMX1BSRVNTVVJFX1FUICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0TW9kdWxlUHJvcGVydGllcygnV2F0ZXIgU3VwcGxpZXMnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNhdmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZSBpbnRlcnZhbCBjbGVhcmVkIGFuZCBkYXRhIHNhdmVkIGZvciB3YXRlciBzdXBwbHkuYCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdXBwbHkod2F0ZXJJbmRleCl7XHJcblx0XHR0aGlzLndhdGVyU3VwcGx5RGF0YS5zcGxpY2Uod2F0ZXJJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdCh3YXRlckluZGV4LCB0ZXN0SW5kZXgpIHtcclxuXHRcdGlmKHRoaXMud2F0ZXJTdXBwbHlEYXRhW3dhdGVySW5kZXhdLldhdGVyU3VwcGx5UGVyZkRhdGEubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR0aGlzLndhdGVyU3VwcGx5RGF0YVt3YXRlckluZGV4XS5XYXRlclN1cHBseVBlcmZEYXRhLnNwbGljZSh0ZXN0SW5kZXgsIDEpO1xyXG5cdFx0fWVsc2UgaWYodGhpcy53YXRlclN1cHBseURhdGFbd2F0ZXJJbmRleF0uV2F0ZXJTdXBwbHlQZXJmRGF0YS5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29waWVkVmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgXCJDQUNVTEFURURfRkxPV19RVFwiOiAnJyxcdFxyXG4gICAgICAgICAgICAgICAgXCJDUkVBVEVfVFNcIjogJycsXHRcclxuICAgICAgICAgICAgICAgIFwiQ1JFQVRFX1VTRVJfSURcIjogJycsXHJcbiAgICAgICAgICAgICAgICBcIkluY2x1ZGVUaGlzU2VjdGlvblwiOiAnJyxcclxuICAgICAgICAgICAgICAgIFwiTE9DQVRJT05fQVNTRVNTTUVOVF9JRFwiOiAnJyxcclxuICAgICAgICAgICAgICAgIFwiTE9DQVRJT05fRkxPV19SRE5HX1RYXCI6ICcnLFxyXG4gICAgICAgICAgICAgICAgXCJMT0NBVElPTl9QUkVTU1VSRV9SRE5HX1RYXCI6ICcnLFxyXG4gICAgICAgICAgICAgICAgXCJQUkVTU1VSRV9MT1NTX1FUXCI6XHQnJyxcclxuICAgICAgICAgICAgICAgIFwicHhPYmpDbGFzc1wiOiAnJyxcclxuICAgICAgICAgICAgICAgIFwiUkVTSURVQUxfRkxPV19SQVRFX1FUXCI6ICcnLFx0XHJcbiAgICAgICAgICAgICAgICBcIlJFU0lEVUFMX1BSRVNTVVJFX1FUXCI6XHQnJyxcclxuICAgICAgICAgICAgICAgIFwiU2VsZWN0SW5kaWNhdG9yXCI6ICcnLFxyXG4gICAgICAgICAgICAgICAgXCJTVEFUSUNfUFJFU1NVUkVfUVRcIjogJycsXHRcclxuICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1NRTlwiOiAnJyxcclxuICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfRFRcIjogJycsXHRcclxuICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfTk1cIjpcdCcnLFxyXG4gICAgICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfVEVTVF9TUU5cIjogJycsXHJcbiAgICAgICAgICAgICAgICBcIldBVEVSX1NVUFBMWV9URVNURVJfTk1cIjogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy53YXRlclN1cHBseURhdGFbd2F0ZXJJbmRleF0uV2F0ZXJTdXBwbHlQZXJmRGF0YS5zcGxpY2UodGVzdEluZGV4LCAxLCB0aGlzLmNvcGllZFZhbHVlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIGNvcHlUZXN0KHZhbHVlLCB3YXRlckluZGV4LCB0ZXN0SW5kZXgpe1x0XHRcdFx0XHJcbiAgICAgICAgdGhpcy5jb3BpZWRWYWx1ZT17XHJcbiAgICAgICAgICAgIFwiQ0FDVUxBVEVEX0ZMT1dfUVRcIjogdmFsdWUuQ0FDVUxBVEVEX0ZMT1dfUVQsXHRcclxuICAgICAgICAgICAgXCJDUkVBVEVfVFNcIjogdmFsdWUuQ1JFQVRFX1RTLFx0XHJcbiAgICAgICAgICAgIFwiQ1JFQVRFX1VTRVJfSURcIjogdmFsdWUuQ1JFQVRFX1VTRVJfSUQsXHJcbiAgICAgICAgICAgIFwiSW5jbHVkZVRoaXNTZWN0aW9uXCI6IHZhbHVlLkluY2x1ZGVUaGlzU2VjdGlvbixcclxuICAgICAgICAgICAgXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6IHZhbHVlLkxPQ0FUSU9OX0FTU0VTU01FTlRfSUQsXHJcbiAgICAgICAgICAgIFwiTE9DQVRJT05fRkxPV19SRE5HX1RYXCI6IHZhbHVlLkxPQ0FUSU9OX0ZMT1dfUkROR19UWCxcclxuICAgICAgICAgICAgXCJMT0NBVElPTl9QUkVTU1VSRV9SRE5HX1RYXCI6IHZhbHVlLkxPQ0FUSU9OX1BSRVNTVVJFX1JETkdfVFgsXHJcbiAgICAgICAgICAgIFwiUFJFU1NVUkVfTE9TU19RVFwiOlx0dmFsdWUuUFJFU1NVUkVfTE9TU19RVCxcclxuICAgICAgICAgICAgXCJweE9iakNsYXNzXCI6IHZhbHVlLnB4T2JqQ2xhc3MsXHJcbiAgICAgICAgICAgIFwiUkVTSURVQUxfRkxPV19SQVRFX1FUXCI6IHZhbHVlLlJFU0lEVUFMX0ZMT1dfUkFURV9RVCxcdFxyXG4gICAgICAgICAgICBcIlJFU0lEVUFMX1BSRVNTVVJFX1FUXCI6XHR2YWx1ZS5SRVNJRFVBTF9QUkVTU1VSRV9RVCxcclxuICAgICAgICAgICAgXCJTZWxlY3RJbmRpY2F0b3JcIjogdmFsdWUuU2VsZWN0SW5kaWNhdG9yLFxyXG4gICAgICAgICAgICBcIlNUQVRJQ19QUkVTU1VSRV9RVFwiOiB2YWx1ZS5TVEFUSUNfUFJFU1NVUkVfUVQsXHRcclxuICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfU1FOXCI6IHZhbHVlLldBVEVSX1NVUFBMWV9TUU4sXHJcbiAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfRFRcIjogdmFsdWUuV0FURVJfU1VQUExZX1RFU1RfRFQsXHRcclxuICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfVEVTVF9OTVwiOlx0dmFsdWUuV0FURVJfU1VQUExZX1RFU1RfTk0sXHJcbiAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfU1FOXCI6IHZhbHVlLldBVEVSX1NVUFBMWV9URVNUX1NRTixcclxuICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfVEVTVEVSX05NXCI6IHZhbHVlLldBVEVSX1NVUFBMWV9URVNURVJfTk1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud2F0ZXJTdXBwbHlEYXRhW3dhdGVySW5kZXhdLldhdGVyU3VwcGx5UGVyZkRhdGEuc3BsaWNlKHRlc3RJbmRleCsxLCAwLCB0aGlzLmNvcGllZFZhbHVlKTtcdFx0XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3VwcGxpZXMoKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3VwcGx5Q291bnQ7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy53YXRlclN1cHBseURhdGEucHVzaCh7XCJBQ1RJVkVfSU5cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFTU09DSUFURURfUFVNUF9UWVBFX0NEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDUkVBVEVfVFNcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNSRUFURV9VU0VSX0lEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHUkFQSF9TUU5cIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdSQVBIX1RZUEVfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGVUaGlzU2VjdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZVRoaXNTZWN0aW9uRXh0ZXJuYWxcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkxPQ0FUSU9OX0FTU0VTU01FTlRfSURcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInB4T2JqQ2xhc3NcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3dTdGF0dXNcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVQREFURV9UU1wiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVVBEQVRFX1VTRVJfSURcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldBVEVSX1NVUFBMWV9BREVRVUFDWV9DRFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1BPSU5UU19RVFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1NRTlwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RZUEVfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldhdGVyU3VwcGx5UGVyZkRhdGFcIjpbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXN0Q291bnRcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdHMoaW5kZXgsIGNvdW50KXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGNvdW50O2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMud2F0ZXJTdXBwbHlEYXRhW2luZGV4XS5XYXRlclN1cHBseVBlcmZEYXRhLnB1c2goe1wiQ0FDVUxBVEVEX0ZMT1dfUVRcIjogXCJcIixcdFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1JFQVRFX1RTXCI6IFwiXCIsXHRcclxuICAgICAgICAgICAgICAgICAgICBcIkNSRUFURV9VU0VSX0lEXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlVGhpc1NlY3Rpb25cIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMT0NBVElPTl9GTE9XX1JETkdfVFhcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkxPQ0FUSU9OX1BSRVNTVVJFX1JETkdfVFhcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlBSRVNTVVJFX0xPU1NfUVRcIjpcdFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJweE9iakNsYXNzXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSRVNJRFVBTF9GTE9XX1JBVEVfUVRcIjogXCJcIixcdFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUkVTSURVQUxfUFJFU1NVUkVfUVRcIjpcdFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZWxlY3RJbmRpY2F0b3JcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTVEFUSUNfUFJFU1NVUkVfUVRcIjogXCJcIixcdFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1NRTlwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfRFRcIjogXCJcIixcdFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1RFU1RfTk1cIjpcdFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfVEVTVF9TUU5cIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIldBVEVSX1NVUFBMWV9URVNURVJfTk1cIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXRlclN1cHBseURhdGEoKSB7XHJcblx0XHR0aGlzLldhdGVyU3VwcGx5U2VydmljZS5nZXRXYXRlclN1cHBseURhdGEodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IGRhdGEuUkZTVW5pdFR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZih1bml0ID09IFwiSW1wZXJpYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmZzVW5pdCA9IFwiZ3BtXCI7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih1bml0ID09IFwiTWV0cmljXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJmc1VuaXQgPSBcIkxwbVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHByZXNzdXJlVW5pdCA9IGRhdGEuUkZTRGV0YWlscy5XT1JLSU5HX1BSRVNTVVJFX0NEO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcmVzc3VyZVVuaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUFNJXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmZzUHJlc3N1cmVVbml0ID0gXCJwc2lcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIktQQVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJmc1ByZXNzdXJlVW5pdCA9IFwia1BhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNUEFcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZnNQcmVzc3VyZVVuaXQgPSBcIk1wYVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQkFSXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmZzUHJlc3N1cmVVbml0ID0gXCJiYXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdhdGVyU3VwcGx5RGV0YWlsc0NoZWNrID0gZGF0YS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuV2F0ZXJTdXBwbHlEZXRhaWwuV2F0ZXJTdXBwbHlEZXRhaWxzUGFnZTtcclxuICAgICAgICAgICAgICAgIC8vMTEvMjkvMjAxNjogRml4IGZvciBERTIzNFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVXYXRlclN1cHBseSA9IHdhdGVyU3VwcGx5RGV0YWlsc0NoZWNrLldBVEVSX1NVUFBMWV9QT0lOVFNfUVQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVkV2F0ZXJTdXBwbHkgPSB3YXRlclN1cHBseURldGFpbHNDaGVjay5SZXF1aXJlZFdhdGVyU3VwcGx5UG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgaWYod2F0ZXJTdXBwbHlEZXRhaWxzQ2hlY2sgJiYgd2F0ZXJTdXBwbHlEZXRhaWxzQ2hlY2suQ29tbWVudExpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uU2VydmljZS5nbG9iYWxOYXJyYXRpdmUgPSB3YXRlclN1cHBseURldGFpbHNDaGVjay5Db21tZW50TGlzdFswXS5QcmltYXJ5TGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgaWYoIXdhdGVyU3VwcGx5RGV0YWlsc0NoZWNrLldhdGVyU3VwcGx5TGlzdCB8fCB3YXRlclN1cHBseURldGFpbHNDaGVjay5XYXRlclN1cHBseUxpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F0ZXJTdXBwbHlEYXRhID0gW3tcIkFDVElWRV9JTlwiOlwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQVNTT0NJQVRFRF9QVU1QX1RZUEVfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ1JFQVRFX1RTXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNSRUFURV9VU0VSX0lEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdSQVBIX1NRTlwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHUkFQSF9UWVBFX0NEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGVUaGlzU2VjdGlvblwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlVGhpc1NlY3Rpb25FeHRlcm5hbFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4T2JqQ2xhc3NcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd1N0YXR1c1wiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVUERBVEVfVFNcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVVBEQVRFX1VTRVJfSURcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX0FERVFVQUNZX0NEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldBVEVSX1NVUFBMWV9QT0lOVFNfUVRcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV0FURVJfU1VQUExZX1NRTlwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXQVRFUl9TVVBQTFlfVFlQRV9DRFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXRlclN1cHBseVBlcmZEYXRhXCI6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiQ0FDVUxBVEVEX0ZMT1dfUVRcIjogXCI1ODEuODAwMFwiLFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiQ1JFQVRFX1RTXCI6IFwiXCIsXHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJDUkVBVEVfVVNFUl9JRFwiOiBcIlBGSFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIkluY2x1ZGVUaGlzU2VjdGlvblwiOiBcImZhbHNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiTE9DQVRJT05fQVNTRVNTTUVOVF9JRFwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIkxPQ0FUSU9OX0ZMT1dfUkROR19UWFwiOiBcIkh5ZDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJMT0NBVElPTl9QUkVTU1VSRV9SRE5HX1RYXCI6IFwiSHlkMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIlBSRVNTVVJFX0xPU1NfUVRcIjpcdFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwicHhPYmpDbGFzc1wiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIlJFU0lEVUFMX0ZMT1dfUkFURV9RVFwiOiBcIjQwMC4wXCIsXHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJSRVNJRFVBTF9QUkVTU1VSRV9RVFwiOlx0XCIyMC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiU2VsZWN0SW5kaWNhdG9yXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiU1RBVElDX1BSRVNTVVJFX1FUXCI6IFwiNDAuMFwiLFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiV0FURVJfU1VQUExZX1NRTlwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcIldBVEVSX1NVUFBMWV9URVNUX0RUXCI6IFwiMDkvMTQvMjAxNlwiLFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiV0FURVJfU1VQUExZX1RFU1RfTk1cIjpcdFwiVGVzdCAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiV0FURVJfU1VQUExZX1RFU1RfU1FOXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiV0FURVJfU1VQUExZX1RFU1RFUl9OTVwiOiBcIkpPSE4yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRlclN1cHBseURhdGEgPSB3YXRlclN1cHBseURldGFpbHNDaGVjay5XYXRlclN1cHBseUxpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVUcmFkZVNlY3RvckNvZGUgPSBkYXRhLkFzc2Vzc21lbnRMb2NhdGlvbkxpc3RbMF0uTG9jQXNzZXNzbWVudC5DT1BFX1BBR0UuT0NDVVBBTkNZX0NEO1xyXG5cdFx0XHRcdC8vdGhpcy5nZXRWaWV3TWV0YURhdGEoKTsgXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMucHJlVHJhZGVTZWN0b3JDb2RlIC0gJyx0aGlzLnByZVRyYWRlU2VjdG9yQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZVByb2Nlc3NEYXRhKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMud2F0ZXJTdXBwbHlEYXRhKS8vJ1dhdGVyIHN1cHBseSBkYXRhIC0gRG9uZSBsb2FkaW5nIGRhdGEuJ1xyXG4gICAgICAgICk7IFxyXG5cdH1cclxuXHJcbiAgICBwcmVQcm9jZXNzRGF0YSgpe1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGVyU3VwcGx5RGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMud2F0ZXJTdXBwbHlEYXRhW2ldLldBVEVSX1NVUFBMWV9UWVBFX0NEX1ZBTFVFID0gbmV3IE90aGVyRGF0YU1hcFBpcGUoKS50cmFuc2Zvcm0odGhpcy53YXRlclN1cHBseURhdGFbaV0uV0FURVJfU1VQUExZX1RZUEVfQ0QsIHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMud2F0ZXJTdXBwbHlEYXRhW2ldLkFTU09DSUFURURfUFVNUF9UWVBFX0NEX1ZBTFVFID0gbmV3IE90aGVyRGF0YU1hcFBpcGUoKS50cmFuc2Zvcm0odGhpcy53YXRlclN1cHBseURhdGFbaV0uQVNTT0NJQVRFRF9QVU1QX1RZUEVfQ0QsIHRoaXMucHVtcEFzc29jaWF0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XQVRFUl9TVVBQTFlfQURFUVVBQ1lfQ0RfVkFMVUUgPSBuZXcgT3RoZXJEYXRhTWFwUGlwZSgpLnRyYW5zZm9ybSh0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XQVRFUl9TVVBQTFlfQURFUVVBQ1lfQ0QsIHRoaXMuYWRlcXVhdGUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XYXRlclN1cHBseVBlcmZEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGhpcy53YXRlclN1cHBseURhdGFbaV0uV2F0ZXJTdXBwbHlQZXJmRGF0YS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy53YXRlclN1cHBseURhdGFbaV0uV2F0ZXJTdXBwbHlQZXJmRGF0YVtqXS5XQVRFUl9TVVBQTFlfVEVTVF9EVC5pbmRleE9mKCctJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRlclN1cHBseURhdGFbaV0uV2F0ZXJTdXBwbHlQZXJmRGF0YVtqXS5XQVRFUl9TVVBQTFlfVEVTVF9EVCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XYXRlclN1cHBseVBlcmZEYXRhW2pdLldBVEVSX1NVUFBMWV9URVNUX0RUID0gbmV3IERhdGVDb252ZXJ0ZXJTZXJ2aWNlKCkuZ3Jhc3BUb0lTTyh0aGlzLndhdGVyU3VwcGx5RGF0YVtpXS5XYXRlclN1cHBseVBlcmZEYXRhW2pdLldBVEVSX1NVUFBMWV9URVNUX0RUKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53YXRlclN1cHBseURhdGFbaV0udGVzdENvdW50ID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFdhdGVyU3VwcGx5RHJvcGRvd25EYXRhKCl7XHJcblx0XHR0aGlzLldhdGVyU3VwcGx5U2VydmljZS5nZXRXYXRlclN1cHBseURyb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJTVUNUSU9OX1NPVVJDRVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVtcEFzc29jaWF0ZWQgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJQVU1QX0FTU09DSUFURURcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZXF1YXRlID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiV0FURVJfQURFUVwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRXYXRlclN1cHBseURhdGEoKVxyXG4gICAgICAgICk7IFxyXG4gICAgfVxyXG5cclxuXHR0eXBlSGFuZGxlcih0eXBlT2JqLCBpbmRleCkge1xyXG5cdFx0dGhpcy53YXRlclN1cHBseURhdGFbaW5kZXhdLldBVEVSX1NVUFBMWV9UWVBFX0NEID0gdHlwZU9iai5Db2RlO1xyXG5cdH1cclxuXHJcblx0cHVtcEhhbmRsZXIocHVtcE9iaiwgaW5kZXgpIHtcclxuXHRcdHRoaXMud2F0ZXJTdXBwbHlEYXRhW2luZGV4XS5BU1NPQ0lBVEVEX1BVTVBfVFlQRV9DRCA9IHB1bXBPYmouQ29kZTtcclxuXHR9XHJcblxyXG5cdGFkZXF1YWN5SGFuZGxlcihhZGVxdWFjeU9iaiwgaW5kZXgpIHtcclxuXHRcdHRoaXMud2F0ZXJTdXBwbHlEYXRhW2luZGV4XS5XQVRFUl9TVVBQTFlfQURFUVVBQ1lfQ0QgPSBhZGVxdWFjeU9iai5Db2RlO1xyXG5cdH1cclxuXHJcbiAgICAvLyBEYXRlIFBpY2tlciBldmVudHNcclxuICAgIHNldFRvZGF5c0RhdGUodGVzdERhdGE6YW55LCBhcmdzOmFueSkge1xyXG4gICAgICAgIHRlc3REYXRhLnNob3dEYXRlUGlja2VyID0gIXRlc3REYXRhLnNob3dEYXRlUGlja2VyO1xyXG4gICAgICAgIHRlc3REYXRhLldBVEVSX1NVUFBMWV9URVNUX0RUID0gYXJnczsgXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTZWxlY3RlZERhdGUodGVzdERhdGEpIHtcclxuICAgICAgICB0ZXN0RGF0YS5zaG93RGF0ZVBpY2tlciA9ICF0ZXN0RGF0YS5zaG93RGF0ZVBpY2tlcjtcclxuICAgICAgICB0ZXN0RGF0YS5XQVRFUl9TVVBQTFlfVEVTVF9EVCA9IG51bGw7ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRhdGU6YW55KSB7XHJcbiAgICAgICAgaWYoZGF0ZSA9PSAnJykge1xyXG4gICAgICAgICAgICBkYXRlID0gbnVsbDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXU0N1cnJlbnRSYXRpbmdzKCkge1xyXG4gICAgICAgIHRoaXMuV2F0ZXJTdXBwbHlTZXJ2aWNlLmdldFdhdGVyU3VwcGx5UmF0aW5ncygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLzExLzI5LzIwMTY6IEFkZCBmb3IgVVMxMDVcclxuICAgICAgICAgICAgICAgIHRoaXMud3NTdGFibGVSYXRpbmdzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLlJhdFF1ZUNhdGVnb3J5ID09IFwiV2F0ZXIgU3VwcGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53c0N1cnJlbnRSYXRpbmdzID0gdGhpcy53c1N0YWJsZVJhdGluZ3M7XHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0IGZvciBib3RoIGRyb3Bkb3duIGlzIHNhbWUgZm9yIG5vdy5cclxuICAgICAgICAgICAgICAgIHRoaXMud3NQb3N0UklSYXRpbmdzID0gdGhpcy53c0N1cnJlbnRSYXRpbmdzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIldhdGVyIFN1cHBveSBDdXJyZW50IFJhdGluZ3MgLSBEb25lIGxvYWRpbmcgZGF0YS5cIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHdzQ3VycmVudFJhdGluZ0hhbmRsZXIocmF0aW5nT2JqKSB7XHJcbiAgICAgICAgLy8xMS8yOS8yMDE2OiBBZGQgZm9yIFVTMTA1XHJcbiAgICAgICAgbGV0IGN1cnJlbnRSYXRpbmdTY29yZSA9IHJhdGluZ09iai5TY29yZXM7XHJcbiAgICAgICAgaWYodGhpcy53c1N0YWJsZVJhdGluZ3MgJiYgdGhpcy53c1N0YWJsZVJhdGluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndzUG9zdFJJUmF0aW5ncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy53c1N0YWJsZVJhdGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKE51bWJlcih0aGlzLndzU3RhYmxlUmF0aW5nc1tpXS5TY29yZXMpID49IE51bWJlcihjdXJyZW50UmF0aW5nU2NvcmUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53c1Bvc3RSSVJhdGluZ3MucHVzaCh0aGlzLndzU3RhYmxlUmF0aW5nc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53c0N1cnJlbnRSYXRpbmdWYWx1ZSA9IHJhdGluZ09iai5SYXROYXJyYXRpdmU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVFZGl0V3NDdXJyZW50UmF0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLzExLzI5LzIwMTY6IEFkZCBmb3IgVVMxMDVcclxuICAgIHdzQ3VycmVudFJhdGluZ0JsYW5rKHZhbHVlKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy53c1Bvc3RSSVJhdGluZ3MgPSB0aGlzLndzU3RhYmxlUmF0aW5ncztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3NQb3N0UklSYXRpbmdIYW5kbGVyKHJhdGluZ09iaikgeyBcclxuICAgICAgICAvLzExLzI5LzIwMTY6IEFkZCBmb3IgVVMxMDVcclxuICAgICAgICBsZXQgY3VycmVudFJhdGluZ1Njb3JlID0gcmF0aW5nT2JqLlNjb3JlcztcclxuICAgICAgICBpZih0aGlzLndzU3RhYmxlUmF0aW5ncyAmJiB0aGlzLndzU3RhYmxlUmF0aW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3NDdXJyZW50UmF0aW5ncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy53c1N0YWJsZVJhdGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKE51bWJlcih0aGlzLndzU3RhYmxlUmF0aW5nc1tpXS5TY29yZXMpIDw9IE51bWJlcihjdXJyZW50UmF0aW5nU2NvcmUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53c0N1cnJlbnRSYXRpbmdzLnB1c2godGhpcy53c1N0YWJsZVJhdGluZ3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3NQb3N0UklSYXRpbmdWYWx1ZSA9IHJhdGluZ09iai5SYXROYXJyYXRpdmU7XHJcbiAgICAgICAgdGhpcy50b2dnbGVFZGl0V3NQb3N0UklSYXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vMTEvMjkvMjAxNjogQWRkIGZvciBVUzEwNVxyXG4gICAgd3NQb3N0UklSYXRpbmdCbGFuayh2YWx1ZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3NDdXJyZW50UmF0aW5ncyA9IHRoaXMud3NTdGFibGVSYXRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRSSU1hdHJpeExpc3QoKSB7XHJcblx0Ly8gXHR0aGlzLmNvbW1vblNlcnZpY2UuZ2V0UklNYXRyaXgoKS5zdWJzY3JpYmUoXHJcblx0Ly8gXHRcdGRhdGEgPT4ge1xyXG5cdC8vIFx0XHR0aGlzLnJpTWF0cml4TGlzdCA9IGRhdGE7XHJcblx0Ly8gXHRcdH0sXHJcblx0Ly8gXHRcdGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcblx0Ly8gXHRcdCgpID0+IGNvbnNvbGUubG9nKCdSSU1hdHJpeCAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcblx0Ly8gXHQpO1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gZmlsdGVyUklNYXRyaXhCeVBUU25TdWJ0eXBlKHByZVRyYWRlU2VjdG9yLCBzdWJ0eXBlKSB7XHJcblx0Ly8gXHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJpTWF0cml4TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLlJlY1N1YlR5cGUgPT0gc3VidHlwZSAmJiBpdGVtLlRyYWRlU2VjdG9yT3JPY2N1cGFuY3kgPT0gcHJlVHJhZGVTZWN0b3IpO1xyXG5cdC8vIFx0aWYocmVzdWx0Lmxlbmd0aCA+IDApe1xyXG5cdC8vIFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdC8vIFx0fWVsc2V7XHJcblx0Ly8gXHRcdHJldHVybiB7fTtcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cdC8vIGdldFRyYWRlU2VjdG9ycygpIHtcclxuICAgIC8vICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0VHJhZGVTZWN0b3JzKCkuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICBkYXRhID0+IHsgdGhpcy50cmFkZVNlY3RvcnMgPSBkYXRhLmZpbHRlcih0cmFkZVNlY3RvciA9PiB0cmFkZVNlY3Rvci5MT0IgPT0gXCJDUFwiKTt9LFxyXG4gICAgLy8gICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnVHJhZGUgc2VjdG9ycyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICAvLyAgICAgKTsgIFxyXG4gICAgLy8gfVxyXG5cclxuXHQvLyBmaWx0ZXJUcmFkZVNlY3RvckJ5Q29kZShvY2N1cGFuY3lDb2RlKSB7XHJcblx0Ly8gXHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnRyYWRlU2VjdG9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtLkNvZGUgPT0gb2NjdXBhbmN5Q29kZSk7XHJcblx0Ly8gXHRyZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uRGVzY3JpcHRpb24gOiAnJztcclxuXHQvLyB9XHJcbiAgICBcclxuICAgIC8vIGdldFZpZXdNZXRhRGF0YSgpe1xyXG5cdC8vIFx0bGV0IHByZVRyYWRlU2VjdG9yVmFsdWUgPSB0aGlzLmZpbHRlclRyYWRlU2VjdG9yQnlDb2RlKHRoaXMucHJlVHJhZGVTZWN0b3JDb2RlKTtcclxuXHQvLyBcdHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUocHJlVHJhZGVTZWN0b3JWYWx1ZSwgJ1dhdGVyIFN1cHBseScpO1xyXG5cdC8vIH1cclxuXHJcbiAgICBzYXZlRGF0YVRvRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5nZXRUeXBlKCkgPT0gJ3NhdmUnICYmIGV2ZW50LmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQgJiYgZXZlbnQuZ2V0UmZzSWQoKSA9PSByZnNJZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY0RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY0RhdGEuTG9jYXRpb25Bc3Nlc3NtZW50LkxBV29ya1BhZ2VMaXN0WzBdLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NBc3Nlc3NtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXYXRlclN1cHBseURldGFpbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXJTdXBwbHlEZXRhaWxzUGFnZS5XYXRlclN1cHBseUxpc3QgPSB0aGlzLndhdGVyU3VwcGx5RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsb2NEYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jQXNzZXNzbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXJTdXBwbHlEZXRhaWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhdGVyU3VwcGx5RGV0YWlsc1BhZ2UuQ29tbWVudExpc3RbMF0uUHJpbWFyeUxhbmd1YWdlID0gdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ3dhdGVyLXN1cHBseScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YU1vZGVsLnNldFJhd0RhdGEobG9jRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS53cml0ZUxvY2F0aW9uRGF0YShsb2NhdGlvbkRhdGFNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
