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
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var firePump_service_1 = require('./firePump.service');
var validationMessages_1 = require('../shared/validationMessages');
var common_service_1 = require('../shared/services/common.service');
var location_data_model_1 = require('../shared/model/location-data.model');
var offline_service_1 = require('../shared/services/offline.service');
var event_model_1 = require('../shared/model/event.model');
var FirePumpComponent = (function () {
    function FirePumpComponent(FirePumpService, _validationMessageComp, ccs, commonService, localStorageService, offlineService) {
        this.FirePumpService = FirePumpService;
        this._validationMessageComp = _validationMessageComp;
        this.ccs = ccs;
        this.commonService = commonService;
        this.localStorageService = localStorageService;
        this.offlineService = offlineService;
        this.chartData = [];
        this.FirePumpService = FirePumpService;
        this._validationMessageComp = _validationMessageComp;
        this.commonService = commonService;
    }
    FirePumpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.site = this.localStorageService.get('locationData');
        this.commonService.globalNarrative = '';
        this.getFirePumpData();
        this.getFirePumpDropdownData();
        this.validationMessagesObject = this._validationMessageComp.getMessages('error');
        this.saveInterval = setInterval(function () {
            var site = _this.localStorageService.get('locationData');
            console.log("Requesting fire pump to save for rfs parent:", site.RFS_PARENT_ID, "and rfs:", site.RFS_ID);
            _this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
        }, 30000);
    };
    FirePumpComponent.prototype.ngOnDestroy = function () {
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            var site = this.localStorageService.get('locationData');
            this.saveDataToFile(new event_model_1.Event(site.RFS_PARENT_ID, site.RFS_ID, 'save'));
            console.log("Save interval cleared and data saved for fire pump.");
        }
    };
    FirePumpComponent.prototype.getFirePumpData = function () {
        var _this = this;
        this.FirePumpService.getFirePumpData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            var firePumpDetailsCheck = data.AssessmentLocationList[0].LocAssessment.WaterSupplyDetail.FirePumpDetailsPage;
            if (firePumpDetailsCheck && firePumpDetailsCheck.CommentList) {
                _this.commonService.globalNarrative = firePumpDetailsCheck.CommentList[0].PrimaryLanguage;
            }
            if (!firePumpDetailsCheck.FirePumpDetailsList || firePumpDetailsCheck.FirePumpDetailsList.length == 0) {
                _this.firePumpData = [
                    {
                        "churnPressure": "",
                        "maxFlow": "",
                        "pressureMaxFlow": "",
                        "ACTIVE_IN": "Y",
                        "AVG_TEST_HOUR_PER_MONTH_QT": "",
                        "CREATE_TS": "",
                        "CREATE_USER_ID": "",
                        "DRIVER_APPROVAL_LIST_CD": "",
                        "DRIVER_TYPE_CD": "",
                        "FIRE_PUMP_APPROVAL_LIST_CD": "",
                        "FIRE_PUMP_SQN": "",
                        "IncludeThisSection": "",
                        "IncludeThisSectionExternal": "",
                        "LOCATION_ASSESSMENT_ID": "",
                        "NOMINAL_PUMP_FLOW_QT": "",
                        "NOMINAL_PUMP_PRESSURE_QT": "",
                        "NOMINAL_PUMP_SPEED_QT": "",
                        "PRESSURE_TANK_CD": false,
                        "PUMP_NM": "",
                        "pxObjClass": "aig-FW-GRASP-Data-TLOC_ASSESSMENT_FIREPUMP",
                        "SHAFT_TYPE_CD": "",
                        "SUCTION_SOURCE_CD": "",
                        "TOTAL_TANK_PC": "",
                        "UPDATE_TS": "",
                        "UPDATE_USER_ID": "",
                        "FirePumpPerfList": []
                    }
                ];
            }
            else {
                _this.firePumpData = data.AssessmentLocationList[0].LocAssessment.WaterSupplyDetail.FirePumpDetailsPage.FirePumpDetailsList;
            }
            _this.addFirePumpCount = 1;
            _this.addCountArray = [];
            for (var i = 0; i < _this.firePumpData.length; i++) {
                _this.addCountArray[i] = {
                    "addTestDataCount": 1,
                    "addTestPointCount": []
                };
                if (_this.firePumpData[i].FirePumpPerfList && _this.firePumpData[i].FirePumpPerfList.length > 0) {
                    for (var j = 0; j < _this.firePumpData[i].FirePumpPerfList.length; j++) {
                        _this.addCountArray[i].addTestPointCount[j] = 1;
                    }
                }
            }
            var unitObj = _this.getRFSUnits(data.RFSUnitType, data.RFSDetails.WORKING_PRESSURE_CD);
            _this.rfsUnit = unitObj.rfsUnit;
            _this.rfsPressureUnit = unitObj.rfsPressureUnit;
        }, function (err) { return console.error(err); }, function () { return console.log("Water supplies fire pump data - Done loading data."); });
    };
    FirePumpComponent.prototype.getRFSUnits = function (rfsUnitType, rfsWorkingPressureCD) {
        var unitObj = {
            rfsUnit: '',
            rfsPressureUnit: ''
        };
        if (rfsUnitType && rfsUnitType == "Imperial") {
            unitObj.rfsUnit = "gpm";
        }
        else if (rfsUnitType && rfsUnitType == "Metric") {
            unitObj.rfsUnit = "Lpm";
        }
        switch (rfsWorkingPressureCD) {
            case "PSI":
                unitObj.rfsPressureUnit = "psi";
                break;
            case "KPA":
                unitObj.rfsPressureUnit = "kPa";
                break;
            case "MPA":
                unitObj.rfsPressureUnit = "Mpa";
                break;
            case "BAR":
                unitObj.rfsPressureUnit = "bar";
                break;
        }
        return unitObj;
    };
    FirePumpComponent.prototype.getFirePumpDropdownData = function () {
        var _this = this;
        this.FirePumpService.getFirePumpDropdownData().subscribe(function (data) {
            _this.data = data;
            _this.shaft = data.filter(function (item) { return item.ElementName == "PUMP_SHAFT"; });
            _this.suction = data.filter(function (item) { return item.ElementName == "SUCTION_SOURCE"; });
            _this.driver = data.filter(function (item) { return item.ElementName == "DRIVER_TYPE"; });
            _this.startMethod = data.filter(function (item) { return item.ElementName == "CONTROLLER_TYPE"; });
            _this.rating = data.filter(function (item) { return item.ElementName == "FIRE_PUMP_RATING"; });
            _this.driverApproval = data.filter(function (item) { return item.ElementName == "PUMP_APPROVAL"; });
            _this.approvalListing = data.filter(function (item) { return item.ElementName == "FIRE_PUMP_APPROVAL"; });
            _this.controllerApproval = data.filter(function (item) { return item.ElementName == "FIRE_PUMP_APPROVAL"; });
        }, function (err) { return console.error(err); }, function () { return console.log("Water supplies fire pump dropdown data - Done loading data."); });
    };
    FirePumpComponent.prototype.addFirePump = function (addFirePumpCount) {
        if (addFirePumpCount > 0) {
            for (var i = 0; i < addFirePumpCount; i++) {
                var length = this.firePumpData.length;
                if (length < 25) {
                    var obj = {
                        "CONTROLLER_TYPE_CD": "",
                        "CONTROLLER_APPROVAL_LIST_CD": "",
                        "churnPressure": "",
                        "maxFlow": "",
                        "pressureMaxFlow": "",
                        "ACTIVE_IN": "Y",
                        "AVG_TEST_HOUR_PER_MONTH_QT": "",
                        "CREATE_TS": "",
                        "CREATE_USER_ID": "",
                        "DRIVER_APPROVAL_LIST_CD": "",
                        "DRIVER_TYPE_CD": "",
                        "FIRE_PUMP_APPROVAL_LIST_CD": "",
                        "FIRE_PUMP_SQN": "",
                        "IncludeThisSection": "",
                        "IncludeThisSectionExternal": "",
                        "LOCATION_ASSESSMENT_ID": "",
                        "NOMINAL_PUMP_FLOW_QT": "",
                        "NOMINAL_PUMP_PRESSURE_QT": "",
                        "NOMINAL_PUMP_SPEED_QT": "",
                        "PRESSURE_TANK_CD": false,
                        "PUMP_NM": "",
                        "pxObjClass": "aig-FW-GRASP-Data-TLOC_ASSESSMENT_FIREPUMP",
                        "SHAFT_TYPE_CD": "",
                        "SUCTION_SOURCE_CD": "",
                        "TOTAL_TANK_PC": "",
                        "UPDATE_TS": "",
                        "UPDATE_USER_ID": "",
                        "FirePumpPerfList": []
                    };
                    this.firePumpData[length] = obj;
                    this.addCountArray[length] = {
                        "addTestDataCount": 1,
                        "addTestPointCount": []
                    };
                }
            }
        }
    };
    FirePumpComponent.prototype.deleteFirePump = function (firePumpInd) {
        if (this.firePumpData.length > 0) {
            this.firePumpData.splice(firePumpInd, 1);
        }
    };
    FirePumpComponent.prototype.addTestData = function (firePumpInd, addTestDataCount) {
        if (addTestDataCount > 0) {
            for (var i = 0; i < addTestDataCount; i++) {
                var length = this.firePumpData[firePumpInd].FirePumpPerfList.length;
                if (length < 25) {
                    var obj = {
                        "ACTIVE_IN": "Y",
                        "CREATE_TS": "",
                        "CREATE_USER_ID": "",
                        "FIRE_PUMP_SQN": "",
                        "FIRE_PUMP_TEST_DT": "",
                        "FIRE_PUMP_TEST_HRS_QT": "",
                        "FIRE_PUMP_TEST_SQN": "",
                        "FIRE_PUMP_TESTER_NM": "",
                        "GRAPH_SQN": "",
                        "GRAPH_TYPE_CD": "",
                        "GRAPH_INCLUSION_IN": true,
                        "GRAPHVisibleFlag": "",
                        "LOCATION_ASSESSMENT_ID": "",
                        "pxObjClass": "aig-FW-GRASP-Data-TLOC_ASSESSMENT_FP_PERF_DTL",
                        "UPDATE_TS": "",
                        "UPDATE_USER_ID": "",
                        "upload_click": "",
                        "FirePumpTestPointsList": [
                            {
                                "ACTIVE_IN": "",
                                "CORRECTED_FLOW_QT": "",
                                "CORRECTED_PRESSURE_QT": "",
                                "CREATE_TS": "",
                                "CREATE_USER_ID": "",
                                "DISCHARGE_PRESSURE_QT": "",
                                "FIRE_PUMP_SQN": "",
                                "FIRE_PUMP_TEST_PTS_NO": "",
                                "FIRE_PUMP_TEST_SQN": "",
                                "GRAPH_INCLUSION_IN": "Y",
                                "IncludeThisSection": "true",
                                "LOCATION_ASSESSMENT_ID": "",
                                "MEASURED_FLOW_QT": "0",
                                "NET_PRESSURE_QT": "",
                                "NOMINAL_FLOW_PC": "",
                                "PUMP_SPEED_QT": "",
                                "pxObjClass": "aig-FW-GRASP-Data-TLOC_ASSESSMENT_FP_PERF_POINT_DTL",
                                "pyLabel": "Churn",
                                "RATING_DS": "NA",
                                "SUCTION_PRESSURE_QT": "",
                                "UPDATE_TS": "",
                                "UPDATE_USER_ID": ""
                            }
                        ]
                    };
                    this.firePumpData[firePumpInd].FirePumpPerfList[length] = obj;
                    this.addCountArray[firePumpInd].addTestPointCount[length] = 1;
                }
            }
        }
    };
    FirePumpComponent.prototype.deleteTestData = function (firePumpInd, testDataInd) {
        this.firePumpData[firePumpInd].FirePumpPerfList.splice(testDataInd, 1);
    };
    FirePumpComponent.prototype.addTestPoint = function (firePumpInd, testDataInd, addTestPointCount) {
        if (addTestPointCount > 0) {
            for (var i = 0; i < addTestPointCount; i++) {
                var length = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList.length;
                if (length < 25) {
                    var obj = {
                        "ACTIVE_IN": "Y",
                        "CORRECTED_FLOW_QT": "",
                        "CORRECTED_PRESSURE_QT": "",
                        "CREATE_TS": "",
                        "CREATE_USER_ID": "",
                        "DISCHARGE_PRESSURE_QT": "",
                        "FIRE_PUMP_SQN": "",
                        "FIRE_PUMP_TEST_PTS_NO": "",
                        "FIRE_PUMP_TEST_SQN": "",
                        "GRAPH_INCLUSION_IN": "Y",
                        "IncludeThisSection": "true",
                        "LOCATION_ASSESSMENT_ID": "",
                        "MEASURED_FLOW_QT": "",
                        "NET_PRESSURE_QT": "",
                        "NOMINAL_FLOW_PC": "",
                        "PUMP_SPEED_QT": "",
                        "pxObjClass": "aig-FW-GRASP-Data-TLOC_ASSESSMENT_FP_PERF_POINT_DTL",
                        "pyLabel": "",
                        "RATING_DS": "Not Applicable",
                        "SUCTION_PRESSURE_QT": "",
                        "UPDATE_TS": "",
                        "UPDATE_USER_ID": ""
                    };
                    this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[length] = obj;
                }
            }
        }
    };
    FirePumpComponent.prototype.copyTestPoint = function (testPoint, firePumpInd, testDataInd, testPointInd) {
        var obj1 = testPoint;
        if (!obj1.RATING_DS || obj1.RATING_DS == 'NA') {
            obj1.RATING_DS = 'Not Applicable';
        }
        var obj2 = Object.assign({}, obj1);
        var length = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList.length;
        this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[length] = obj2;
    };
    FirePumpComponent.prototype.deleteTestPoint = function (firePumpInd, testDataInd, testPointInd) {
        if (this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList.length > 1 && testPointInd > 0) {
            this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList.splice(testPointInd, 1);
        }
    };
    FirePumpComponent.prototype.setTodaysDate = function (testData, args) {
        testData.showDatePicker = !testData.showDatePicker;
        testData.FIRE_PUMP_TEST_DT = args;
    };
    FirePumpComponent.prototype.clearSelectedDate = function (testData) {
        testData.showDatePicker = !testData.showDatePicker;
        testData.FIRE_PUMP_TEST_DT = null;
    };
    FirePumpComponent.prototype.setDate = function (date) {
        if (date == '') {
            date = null;
        }
        else {
            return date;
        }
    };
    FirePumpComponent.prototype.ratedFlowChange = function (firePumpInd) {
        var firePump = this.firePumpData[firePumpInd];
        if (firePump.FirePumpPerfList.length > 0) {
            for (var i = 0; i < firePump.FirePumpPerfList.length; i++) {
                var testData = firePump.FirePumpPerfList[i];
                if (testData.FirePumpTestPointsList.length > 0) {
                    for (var j = 0; j < testData.FirePumpTestPointsList.length; j++) {
                        var testPoint = testData.FirePumpTestPointsList[j];
                        testPoint.NOMINAL_FLOW_PC = this.unformatNumber(testPoint.MEASURED_FLOW_QT) / firePump.NOMINAL_PUMP_FLOW_QT;
                        this.calculateRatingDropdown(firePump, testPoint);
                    }
                }
            }
        }
    };
    FirePumpComponent.prototype.ratedSpeedChange = function (firePumpInd) {
        var firePump = this.firePumpData[firePumpInd];
        if (firePump.FirePumpPerfList.length > 0) {
            for (var i = 0; i < firePump.FirePumpPerfList.length; i++) {
                var testData = firePump.FirePumpPerfList[i];
                if (testData.FirePumpTestPointsList.length > 0) {
                    for (var j = 0; j < testData.FirePumpTestPointsList.length; j++) {
                        var testPoint = testData.FirePumpTestPointsList[j];
                        testPoint.CORRECTED_FLOW_QT = this.unformatNumber(testPoint.MEASURED_FLOW_QT) * firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT);
                        testPoint.CORRECTED_PRESSURE_QT = testPoint.NET_PRESSURE_QT * (Math.pow((firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT)), 2));
                        this.calculateRatingDropdown(firePump, testPoint);
                    }
                }
            }
        }
    };
    FirePumpComponent.prototype.ratedPressureChange = function (firePumpInd) {
        var firePump = this.firePumpData[firePumpInd];
        if (firePump.FirePumpPerfList.length > 0) {
            for (var i = 0; i < firePump.FirePumpPerfList.length; i++) {
                var testData = firePump.FirePumpPerfList[i];
                if (testData.FirePumpTestPointsList.length > 0) {
                    for (var j = 0; j < testData.FirePumpTestPointsList.length; j++) {
                        var testPoint = testData.FirePumpTestPointsList[j];
                        this.calculateRatingDropdown(firePump, testPoint);
                    }
                }
            }
        }
    };
    FirePumpComponent.prototype.restrictInvalidInput = function (firePumpInd, testDataInd, testPointInd, field) {
        var testPoint = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd];
        if (field == 'measuredFlow') {
            testPoint.MEASURED_FLOW_QT = testPoint.MEASURED_FLOW_QT.replace(/[^0-9.]+/g, "");
            this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd].MEASURED_FLOW_QT = testPoint.MEASURED_FLOW_QT;
        }
        if (field == 'dischargePressure') {
            testPoint.DISCHARGE_PRESSURE_QT = testPoint.DISCHARGE_PRESSURE_QT.replace(/[^0-9.]+/g, "");
            this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd].DISCHARGE_PRESSURE_QT = testPoint.DISCHARGE_PRESSURE_QT;
        }
    };
    FirePumpComponent.prototype.measuredFlowChange = function (firePumpInd, testDataInd, testPointInd) {
        var firePump = this.firePumpData[firePumpInd];
        var testPoint = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd];
        testPoint.NOMINAL_FLOW_PC = this.unformatNumber(testPoint.MEASURED_FLOW_QT) / firePump.NOMINAL_PUMP_FLOW_QT;
        testPoint.CORRECTED_FLOW_QT = this.unformatNumber(testPoint.MEASURED_FLOW_QT) * firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT);
        this.calculateRatingDropdown(firePump, testPoint);
        testPoint.MEASURED_FLOW_QT = this.formatNumberWithCommas(testPoint.MEASURED_FLOW_QT);
    };
    FirePumpComponent.prototype.suctionPressureChange = function (firePumpInd, testDataInd, testPointInd) {
        var firePump = this.firePumpData[firePumpInd];
        var testPoint = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd];
        testPoint.NET_PRESSURE_QT = this.unformatNumber(testPoint.DISCHARGE_PRESSURE_QT) - this.unformatNumber(testPoint.SUCTION_PRESSURE_QT);
        testPoint.CORRECTED_PRESSURE_QT = testPoint.NET_PRESSURE_QT * (Math.pow((firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT)), 2));
        this.calculateRatingDropdown(firePump, testPoint);
        testPoint.SUCTION_PRESSURE_QT = this.formatNumberWithCommas(testPoint.SUCTION_PRESSURE_QT);
    };
    FirePumpComponent.prototype.dischargePressureChange = function (firePumpInd, testDataInd, testPointInd) {
        var firePump = this.firePumpData[firePumpInd];
        var testPoint = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd];
        testPoint.NET_PRESSURE_QT = this.unformatNumber(testPoint.DISCHARGE_PRESSURE_QT) - this.unformatNumber(testPoint.SUCTION_PRESSURE_QT);
        testPoint.CORRECTED_PRESSURE_QT = testPoint.NET_PRESSURE_QT * (Math.pow((firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT)), 2));
        this.calculateRatingDropdown(firePump, testPoint);
        testPoint.DISCHARGE_PRESSURE_QT = this.formatNumberWithCommas(testPoint.DISCHARGE_PRESSURE_QT);
    };
    FirePumpComponent.prototype.speedChange = function (firePumpInd, testDataInd, testPointInd) {
        var firePump = this.firePumpData[firePumpInd];
        var testPoint = this.firePumpData[firePumpInd].FirePumpPerfList[testDataInd].FirePumpTestPointsList[testPointInd];
        testPoint.CORRECTED_FLOW_QT = this.unformatNumber(testPoint.MEASURED_FLOW_QT) * firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT);
        testPoint.CORRECTED_PRESSURE_QT = testPoint.NET_PRESSURE_QT * (Math.pow((firePump.NOMINAL_PUMP_SPEED_QT / this.unformatNumber(testPoint.PUMP_SPEED_QT)), 2));
        this.calculateRatingDropdown(firePump, testPoint);
        testPoint.PUMP_SPEED_QT = this.formatNumberWithCommas(testPoint.PUMP_SPEED_QT);
    };
    FirePumpComponent.prototype.formatNumberWithCommas = function (num) {
        if (num != '') {
            num = this.unformatNumber(num);
            if (num.toString().indexOf('.') >= 0) {
                var p = num.toString().split(".");
                return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
                    return num + (i && !(i % 3) ? "," : "") + acc;
                }, "") + "." + p[1];
            }
            else {
                var p = num.toString();
                return p.split("").reverse().reduce(function (acc, num, i, orig) {
                    return num + (i && !(i % 3) ? "," : "") + acc;
                }, "");
            }
        }
        return num;
    };
    FirePumpComponent.prototype.unformatNumber = function (num) {
        if (num == null)
            num = "0";
        num = num.replace(/,/g, '');
        return num;
    };
    FirePumpComponent.prototype.calculateRatingDropdown = function (firePump, testPoint) {
        if (testPoint.MEASURED_FLOW_QT && firePump.NOMINAL_PUMP_FLOW_QT && firePump.NOMINAL_PUMP_FLOW_QT != 0
            && testPoint.CORRECTED_PRESSURE_QT && firePump.NOMINAL_PUMP_PRESSURE_QT && firePump.NOMINAL_PUMP_PRESSURE_QT != 0) {
            var x = this.unformatNumber(testPoint.MEASURED_FLOW_QT) / firePump.NOMINAL_PUMP_FLOW_QT;
            var highReductionCurve = -0.1727 * (Math.pow(x, 2)) - 0.2281 * x + 1.3388;
            var lowReductionCurve = -0.1727 * (Math.pow(x, 2)) - 0.2281 * x + 1.2888;
            var correctedPressure = testPoint.CORRECTED_PRESSURE_QT / firePump.NOMINAL_PUMP_PRESSURE_QT;
            if (correctedPressure >= highReductionCurve) {
                testPoint.RATING_DS = "Excellent";
            }
            else if (correctedPressure >= lowReductionCurve && correctedPressure < highReductionCurve) {
                testPoint.RATING_DS = "Good";
            }
            else if (correctedPressure < lowReductionCurve) {
                testPoint.RATING_DS = "Poor";
            }
            else {
                testPoint.RATING_DS = "Not Applicable";
            }
        }
    };
    FirePumpComponent.prototype.saveDataToFile = function (event) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        if (event.getType() == 'save' && event.getRfsParentId() == rfsParentId && event.getRfsId() == rfsId) {
            this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
                var locData = data;
                locData.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].
                    LocAssessment.
                    WaterSupplyDetail.
                    FirePumpDetailsPage.FirePumpDetailsList = _this.firePumpData;
                locData.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].
                    LocAssessment.
                    WaterSupplyDetail.
                    FirePumpDetailsPage.CommentList[0].PrimaryLanguage = _this.commonService.globalNarrative;
                var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'fire-pump');
                locationDataModel.setRawData(locData);
                _this.offlineService.writeLocationData(locationDataModel);
            });
        }
    };
    FirePumpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fire-pump',
            templateUrl: 'firePump.component.html',
            styleUrls: ['firePump.component.css'],
            providers: [firePump_service_1.FirePumpService, configuration_1.Configuration, validationMessages_1.ValidationMessages, localStorageService_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [firePump_service_1.FirePumpService, validationMessages_1.ValidationMessages, componentCommunicationService_1.ComponentCommunicationService, common_service_1.CommonService, localStorageService_1.LocalStorageService, offline_service_1.OfflineService])
    ], FirePumpComponent);
    return FirePumpComponent;
}());
exports.FirePumpComponent = FirePumpComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9maXJlUHVtcC9maXJlUHVtcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUc3RCw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQUd4RixpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxtQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQUdsRSxvQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUV4RSxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUVwRSw0QkFBc0IsNkJBQTZCLENBQUMsQ0FBQTtBQVVwRDtJQW1CSSwyQkFBb0IsZUFBaUMsRUFBVSxzQkFBMEMsRUFBVSxHQUFpQyxFQUFVLGFBQTJCLEVBQVUsbUJBQXVDLEVBQVUsY0FBOEI7UUFBOVAsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQThCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSGxSLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDakMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFFRSxvQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFYRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFB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QUFlLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7Z0JBRTVGLElBQUksaUJBQWlCLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUMvRSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBampCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDZCQUFhLEVBQUUsdUNBQWtCLEVBQUUseUNBQW1CLENBQUM7U0FDdkYsQ0FBQzs7eUJBQUE7SUE0aUJGLHdCQUFDO0FBQUQsQ0ExaUJBLEFBMGlCQyxJQUFBO0FBMWlCWSx5QkFBaUIsb0JBMGlCN0IsQ0FBQSIsImZpbGUiOiJhcHAvZmlyZVB1bXAvZmlyZVB1bXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IENvbnN0cnVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbnN0cnVjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wQ29tbUludGVyZmFjZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaXJlUHVtcFNlcnZpY2UgfSBmcm9tICcuL2ZpcmVQdW1wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbi8vaW1wb3J0IHsgRmlyZVB1bXBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vZmlyZVB1bXBDaGFydC5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uRGF0YU1vZGVsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL2xvY2F0aW9uLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBTYXZlZFRvRmlsZVN5c3RlbSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2Uvc2F2ZWQtdG8tZnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2ZmbGluZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvb2ZmbGluZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL2V2ZW50Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZmlyZS1wdW1wJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlyZVB1bXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2ZpcmVQdW1wLmNvbXBvbmVudC5jc3MnXSwgICBcclxuICAgIHByb3ZpZGVyczogW0ZpcmVQdW1wU2VydmljZSwgQ29uZmlndXJhdGlvbiwgVmFsaWRhdGlvbk1lc3NhZ2VzLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmVQdW1wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFNhdmVkVG9GaWxlU3lzdGVtIHtcclxuICAgIHJmc1VuaXQ6IGFueTtcclxuICAgIHJmc1ByZXNzdXJlVW5pdDogYW55O1xyXG4gICAgZmlyZVB1bXBEYXRhOiBhbnk7XHJcbiAgICBzaGFmdDogYW55O1xyXG4gICAgYXBwcm92YWxMaXN0aW5nOiBhbnk7XHJcbiAgICBzdWN0aW9uOiBhbnk7XHJcbiAgICBkcml2ZXI6IGFueTtcclxuICAgIHN0YXJ0TWV0aG9kOiBhbnk7XHJcbiAgICByYXRpbmc6IGFueTtcclxuICAgIGRyaXZlckFwcHJvdmFsOiBhbnk7XHJcbiAgICBjb250cm9sbGVyQXBwcm92YWw6IGFueTtcclxuICAgIGFkZEZpcmVQdW1wQ291bnQ6IGFueTtcclxuICAgIGFkZENvdW50QXJyYXk6IGFueTtcclxuICAgIHZhbGlkYXRpb25NZXNzYWdlc09iamVjdDoge307XHJcbiAgICBzaXRlOmFueTtcclxuICAgIGNoYXJ0RGF0YTogYW55ID0gW107XHJcbiAgICBwcml2YXRlIHNhdmVJbnRlcnZhbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRmlyZVB1bXBTZXJ2aWNlIDogRmlyZVB1bXBTZXJ2aWNlLCBwcml2YXRlIF92YWxpZGF0aW9uTWVzc2FnZUNvbXA6IFZhbGlkYXRpb25NZXNzYWdlcywgcHJpdmF0ZSBjY3M6Q29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY29tbW9uU2VydmljZTpDb21tb25TZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBvZmZsaW5lU2VydmljZTogT2ZmbGluZVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuRmlyZVB1bXBTZXJ2aWNlID0gRmlyZVB1bXBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25NZXNzYWdlQ29tcCA9IF92YWxpZGF0aW9uTWVzc2FnZUNvbXA7XHJcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlID0gY29tbW9uU2VydmljZTtcclxuXHR9XHJcblxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHRoaXMuc2l0ZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2F0aW9uRGF0YScpO1xyXG4gICAgICAgIHRoaXMuY29tbW9uU2VydmljZS5nbG9iYWxOYXJyYXRpdmUgPSAnJztcclxuICAgICAgICB0aGlzLmdldEZpcmVQdW1wRGF0YSgpOyAgICAgICBcclxuICAgICAgICB0aGlzLmdldEZpcmVQdW1wRHJvcGRvd25EYXRhKCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXNPYmplY3QgPSB0aGlzLl92YWxpZGF0aW9uTWVzc2FnZUNvbXAuZ2V0TWVzc2FnZXMoJ2Vycm9yJyk7XHJcbiAgICAgICAgdGhpcy5zYXZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyBmaXJlIHB1bXAgdG8gc2F2ZSBmb3IgcmZzIHBhcmVudDpcIiwgc2l0ZS5SRlNfUEFSRU5UX0lELCBcImFuZCByZnM6XCIsIHNpdGUuUkZTX0lEKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgIH0sIDMwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zYXZlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNhdmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGxldCBzaXRlID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYXRpb25EYXRhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUb0ZpbGUobmV3IEV2ZW50KHNpdGUuUkZTX1BBUkVOVF9JRCwgc2l0ZS5SRlNfSUQsICdzYXZlJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZSBpbnRlcnZhbCBjbGVhcmVkIGFuZCBkYXRhIHNhdmVkIGZvciBmaXJlIHB1bXAuYCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJlUHVtcERhdGEoKSB7XHJcblx0XHR0aGlzLkZpcmVQdW1wU2VydmljZS5nZXRGaXJlUHVtcERhdGEodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7IC8vZGF0YS5GaXJlUHVtcERldGFpbHNQYWdlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpcmVQdW1wRGV0YWlsc0NoZWNrID0gZGF0YS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuV2F0ZXJTdXBwbHlEZXRhaWwuRmlyZVB1bXBEZXRhaWxzUGFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihmaXJlUHVtcERldGFpbHNDaGVjayAmJiBmaXJlUHVtcERldGFpbHNDaGVjay5Db21tZW50TGlzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZSA9IGZpcmVQdW1wRGV0YWlsc0NoZWNrLkNvbW1lbnRMaXN0WzBdLlByaW1hcnlMYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighZmlyZVB1bXBEZXRhaWxzQ2hlY2suRmlyZVB1bXBEZXRhaWxzTGlzdCB8fCBmaXJlUHVtcERldGFpbHNDaGVjay5GaXJlUHVtcERldGFpbHNMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlUHVtcERhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2h1cm5QcmVzc3VyZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhGbG93XCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXNzdXJlTWF4Rmxvd1wiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBQ1RJVkVfSU5cIjpcIllcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQVZHX1RFU1RfSE9VUl9QRVJfTU9OVEhfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJDUkVBVEVfVFNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJDUkVBVEVfVVNFUl9JRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkRSSVZFUl9BUFBST1ZBTF9MSVNUX0NEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRFJJVkVSX1RZUEVfQ0RcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGSVJFX1BVTVBfQVBQUk9WQUxfTElTVF9DRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkZJUkVfUFVNUF9TUU5cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJJbmNsdWRlVGhpc1NlY3Rpb25cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJJbmNsdWRlVGhpc1NlY3Rpb25FeHRlcm5hbFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkxPQ0FUSU9OX0FTU0VTU01FTlRfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJOT01JTkFMX1BVTVBfRkxPV19RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIk5PTUlOQUxfUFVNUF9QUkVTU1VSRV9RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIk5PTUlOQUxfUFVNUF9TUEVFRF9RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlBSRVNTVVJFX1RBTktfQ0RcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlBVTVBfTk1cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJweE9iakNsYXNzXCI6XCJhaWctRlctR1JBU1AtRGF0YS1UTE9DX0FTU0VTU01FTlRfRklSRVBVTVBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiU0hBRlRfVFlQRV9DRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlNVQ1RJT05fU09VUkNFX0NEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiVE9UQUxfVEFOS19QQ1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9UU1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9VU0VSX0lEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRmlyZVB1bXBQZXJmTGlzdFwiOltdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YSA9IGRhdGEuQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LldhdGVyU3VwcGx5RGV0YWlsLkZpcmVQdW1wRGV0YWlsc1BhZ2UuRmlyZVB1bXBEZXRhaWxzTGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmlyZVB1bXBDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvdW50QXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZpcmVQdW1wRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnRBcnJheVtpXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRUZXN0RGF0YUNvdW50XCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkVGVzdFBvaW50Q291bnRcIjogW11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maXJlUHVtcERhdGFbaV0uRmlyZVB1bXBQZXJmTGlzdCAmJiB0aGlzLmZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMuZmlyZVB1bXBEYXRhW2ldLkZpcmVQdW1wUGVyZkxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnRBcnJheVtpXS5hZGRUZXN0UG9pbnRDb3VudFtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVuaXRPYmogPSB0aGlzLmdldFJGU1VuaXRzKGRhdGEuUkZTVW5pdFR5cGUsIGRhdGEuUkZTRGV0YWlscy5XT1JLSU5HX1BSRVNTVVJFX0NEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmZzVW5pdCA9IHVuaXRPYmoucmZzVW5pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmZzUHJlc3N1cmVVbml0ID0gdW5pdE9iai5yZnNQcmVzc3VyZVVuaXQ7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIldhdGVyIHN1cHBsaWVzIGZpcmUgcHVtcCBkYXRhIC0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpXHJcbiAgICAgICAgKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0UkZTVW5pdHMocmZzVW5pdFR5cGUsIHJmc1dvcmtpbmdQcmVzc3VyZUNEKSB7XHJcbiAgICAgICAgbGV0IHVuaXRPYmo6YW55ID0ge1xyXG4gICAgICAgICAgICByZnNVbml0OicnLFxyXG4gICAgICAgICAgICByZnNQcmVzc3VyZVVuaXQ6ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihyZnNVbml0VHlwZSAmJiByZnNVbml0VHlwZSA9PSBcIkltcGVyaWFsXCIpIHtcclxuICAgICAgICAgICAgdW5pdE9iai5yZnNVbml0ID0gXCJncG1cIjtcclxuICAgICAgICB9ZWxzZSBpZihyZnNVbml0VHlwZSAmJiByZnNVbml0VHlwZSA9PSBcIk1ldHJpY1wiKSB7XHJcbiAgICAgICAgICAgIHVuaXRPYmoucmZzVW5pdCA9IFwiTHBtXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHJmc1dvcmtpbmdQcmVzc3VyZUNEKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQU0lcIjpcclxuICAgICAgICAgICAgICAgIHVuaXRPYmoucmZzUHJlc3N1cmVVbml0ID0gXCJwc2lcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiS1BBXCI6XHJcbiAgICAgICAgICAgICAgICB1bml0T2JqLnJmc1ByZXNzdXJlVW5pdCA9IFwia1BhXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIk1QQVwiOlxyXG4gICAgICAgICAgICAgICAgdW5pdE9iai5yZnNQcmVzc3VyZVVuaXQgPSBcIk1wYVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCQVJcIjpcclxuICAgICAgICAgICAgICAgIHVuaXRPYmoucmZzUHJlc3N1cmVVbml0ID0gXCJiYXJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5pdE9iajtcclxuICAgIH1cclxuICBcclxuICAgIGdldEZpcmVQdW1wRHJvcGRvd25EYXRhKCl7XHJcblx0XHR0aGlzLkZpcmVQdW1wU2VydmljZS5nZXRGaXJlUHVtcERyb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFmdCA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5FbGVtZW50TmFtZSA9PSBcIlBVTVBfU0hBRlRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y3Rpb24gPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJTVUNUSU9OX1NPVVJDRVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVyID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiRFJJVkVSX1RZUEVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0TWV0aG9kID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiQ09OVFJPTExFUl9UWVBFXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpbmcgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJGSVJFX1BVTVBfUkFUSU5HXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcml2ZXJBcHByb3ZhbCA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5FbGVtZW50TmFtZSA9PSBcIlBVTVBfQVBQUk9WQUxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcHJvdmFsTGlzdGluZyA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5FbGVtZW50TmFtZSA9PSBcIkZJUkVfUFVNUF9BUFBST1ZBTFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlckFwcHJvdmFsID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09IFwiRklSRV9QVU1QX0FQUFJPVkFMXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIldhdGVyIHN1cHBsaWVzIGZpcmUgcHVtcCBkcm9wZG93biBkYXRhIC0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpXHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlyZVB1bXAoYWRkRmlyZVB1bXBDb3VudCl7XHJcbiAgICAgICAgaWYoYWRkRmlyZVB1bXBDb3VudCA+IDApe1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWRkRmlyZVB1bXBDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoIDogbnVtYmVyID0gdGhpcy5maXJlUHVtcERhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoIDwgMjUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqIDogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09OVFJPTExFUl9UWVBFX0NEXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDT05UUk9MTEVSX0FQUFJPVkFMX0xJU1RfQ0RcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNodXJuUHJlc3N1cmVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heEZsb3dcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXNzdXJlTWF4Rmxvd1wiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQUNUSVZFX0lOXCI6XCJZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJBVkdfVEVTVF9IT1VSX1BFUl9NT05USF9RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJDUkVBVEVfVFNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ1JFQVRFX1VTRVJfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRFJJVkVSX0FQUFJPVkFMX0xJU1RfQ0RcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRFJJVkVSX1RZUEVfQ0RcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX0FQUFJPVkFMX0xJU1RfQ0RcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1NRTlwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJJbmNsdWRlVGhpc1NlY3Rpb25cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiSW5jbHVkZVRoaXNTZWN0aW9uRXh0ZXJuYWxcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiTE9DQVRJT05fQVNTRVNTTUVOVF9JRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJOT01JTkFMX1BVTVBfRkxPV19RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJOT01JTkFMX1BVTVBfUFJFU1NVUkVfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiTk9NSU5BTF9QVU1QX1NQRUVEX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlBSRVNTVVJFX1RBTktfQ0RcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJQVU1QX05NXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcInB4T2JqQ2xhc3NcIjpcImFpZy1GVy1HUkFTUC1EYXRhLVRMT0NfQVNTRVNTTUVOVF9GSVJFUFVNUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiU0hBRlRfVFlQRV9DRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJTVUNUSU9OX1NPVVJDRV9DRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJUT1RBTF9UQU5LX1BDXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9UU1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJVUERBVEVfVVNFUl9JRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGaXJlUHVtcFBlcmZMaXN0XCI6W11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YVtsZW5ndGhdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnRBcnJheVtsZW5ndGhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZFRlc3REYXRhQ291bnRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRUZXN0UG9pbnRDb3VudFwiOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaXJlUHVtcChmaXJlUHVtcEluZCl7XHJcbiAgICAgICAgaWYodGhpcy5maXJlUHVtcERhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLmZpcmVQdW1wRGF0YS5zcGxpY2UoZmlyZVB1bXBJbmQsIDEpO1xyXG5cdFx0fVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5maXJlUHVtcERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3REYXRhKGZpcmVQdW1wSW5kLCBhZGRUZXN0RGF0YUNvdW50KXtcclxuICAgICAgICBpZihhZGRUZXN0RGF0YUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWRkVGVzdERhdGFDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoIDogbnVtYmVyID0gdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdLkZpcmVQdW1wUGVyZkxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoIDwgMjUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqIDogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQUNUSVZFX0lOXCI6XCJZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJDUkVBVEVfVFNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ1JFQVRFX1VTRVJfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1NRTlwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGSVJFX1BVTVBfVEVTVF9EVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGSVJFX1BVTVBfVEVTVF9IUlNfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1RFU1RfU1FOXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkZJUkVfUFVNUF9URVNURVJfTk1cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiR1JBUEhfU1FOXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkdSQVBIX1RZUEVfQ0RcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiR1JBUEhfSU5DTFVTSU9OX0lOXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJHUkFQSFZpc2libGVGbGFnXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkxPQ0FUSU9OX0FTU0VTU01FTlRfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwicHhPYmpDbGFzc1wiOlwiYWlnLUZXLUdSQVNQLURhdGEtVExPQ19BU1NFU1NNRU5UX0ZQX1BFUkZfRFRMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJVUERBVEVfVFNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiVVBEQVRFX1VTRVJfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwidXBsb2FkX2NsaWNrXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkZpcmVQdW1wVGVzdFBvaW50c0xpc3RcIjpbIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFDVElWRV9JTlwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkNPUlJFQ1RFRF9GTE9XX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ09SUkVDVEVEX1BSRVNTVVJFX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ1JFQVRFX1RTXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ1JFQVRFX1VTRVJfSURcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJESVNDSEFSR0VfUFJFU1NVUkVfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGSVJFX1BVTVBfU1FOXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1RFU1RfUFRTX05PXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1RFU1RfU1FOXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiR1JBUEhfSU5DTFVTSU9OX0lOXCI6XCJZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkluY2x1ZGVUaGlzU2VjdGlvblwiOlwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiTUVBU1VSRURfRkxPV19RVFwiOlwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJORVRfUFJFU1NVUkVfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJOT01JTkFMX0ZMT1dfUENcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJQVU1QX1NQRUVEX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwicHhPYmpDbGFzc1wiOlwiYWlnLUZXLUdSQVNQLURhdGEtVExPQ19BU1NFU1NNRU5UX0ZQX1BFUkZfUE9JTlRfRFRMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcInB5TGFiZWxcIjpcIkNodXJuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlJBVElOR19EU1wiOlwiTkFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiU1VDVElPTl9QUkVTU1VSRV9RVFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9UU1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9VU0VSX0lEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFtsZW5ndGhdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnRBcnJheVtmaXJlUHVtcEluZF0uYWRkVGVzdFBvaW50Q291bnRbbGVuZ3RoXSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdERhdGEoZmlyZVB1bXBJbmQsIHRlc3REYXRhSW5kKXtcclxuXHRcdHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0LnNwbGljZSh0ZXN0RGF0YUluZCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdFBvaW50KGZpcmVQdW1wSW5kLCB0ZXN0RGF0YUluZCwgYWRkVGVzdFBvaW50Q291bnQpe1xyXG4gICAgICAgIGlmKGFkZFRlc3RQb2ludENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYWRkVGVzdFBvaW50Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA6IG51bWJlciA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0W3Rlc3REYXRhSW5kXS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmKGxlbmd0aCA8IDI1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFDVElWRV9JTlwiOlwiWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ09SUkVDVEVEX0ZMT1dfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiQ09SUkVDVEVEX1BSRVNTVVJFX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkNSRUFURV9UU1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJDUkVBVEVfVVNFUl9JRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJESVNDSEFSR0VfUFJFU1NVUkVfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1NRTlwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJGSVJFX1BVTVBfVEVTVF9QVFNfTk9cIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiRklSRV9QVU1QX1RFU1RfU1FOXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIkdSQVBIX0lOQ0xVU0lPTl9JTlwiOlwiWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiSW5jbHVkZVRoaXNTZWN0aW9uXCI6XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIk1FQVNVUkVEX0ZMT1dfUVRcIjpcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiTkVUX1BSRVNTVVJFX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIk5PTUlOQUxfRkxPV19QQ1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJQVU1QX1NQRUVEX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcInB4T2JqQ2xhc3NcIjpcImFpZy1GVy1HUkFTUC1EYXRhLVRMT0NfQVNTRVNTTUVOVF9GUF9QRVJGX1BPSU5UX0RUTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwicHlMYWJlbFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJSQVRJTkdfRFNcIjpcIk5vdCBBcHBsaWNhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJTVUNUSU9OX1BSRVNTVVJFX1FUXCI6XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcIlVQREFURV9UU1wiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJVUERBVEVfVVNFUl9JRFwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdFtsZW5ndGhdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHlUZXN0UG9pbnQodGVzdFBvaW50LCBmaXJlUHVtcEluZCwgdGVzdERhdGFJbmQsIHRlc3RQb2ludEluZCl7XHJcbiAgICAgICAgdmFyIG9iajEgPSB0ZXN0UG9pbnQ7XHJcbiAgICAgICAgLy9OZWVkIG1vZGlmaWNhdGlvbiBsYXRlclxyXG4gICAgICAgIGlmKCFvYmoxLlJBVElOR19EUyB8fCBvYmoxLlJBVElOR19EUyA9PSAnTkEnKSB7XHJcbiAgICAgICAgICAgIG9iajEuUkFUSU5HX0RTID0gJ05vdCBBcHBsaWNhYmxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9iajIgOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LG9iajEpO1xyXG4gICAgICAgIHZhciBsZW5ndGggOiBudW1iZXIgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdLkZpcmVQdW1wUGVyZkxpc3RbdGVzdERhdGFJbmRdLkZpcmVQdW1wVGVzdFBvaW50c0xpc3RbbGVuZ3RoXSA9IG9iajI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdFBvaW50KGZpcmVQdW1wSW5kLCB0ZXN0RGF0YUluZCwgdGVzdFBvaW50SW5kKXtcclxuICAgICAgICBpZih0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdC5sZW5ndGggPiAxICYmIHRlc3RQb2ludEluZCA+IDApIHtcclxuXHRcdFx0dGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdLkZpcmVQdW1wUGVyZkxpc3RbdGVzdERhdGFJbmRdLkZpcmVQdW1wVGVzdFBvaW50c0xpc3Quc3BsaWNlKHRlc3RQb2ludEluZCwgMSk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGF0ZSBQaWNrZXIgZXZlbnRzXHJcbiAgICBzZXRUb2RheXNEYXRlKHRlc3REYXRhOmFueSwgYXJnczphbnkpIHtcclxuICAgICAgICB0ZXN0RGF0YS5zaG93RGF0ZVBpY2tlciA9ICF0ZXN0RGF0YS5zaG93RGF0ZVBpY2tlcjtcclxuICAgICAgICB0ZXN0RGF0YS5GSVJFX1BVTVBfVEVTVF9EVCA9IGFyZ3M7IFxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0ZWREYXRlKHRlc3REYXRhKSB7XHJcbiAgICAgICAgdGVzdERhdGEuc2hvd0RhdGVQaWNrZXIgPSAhdGVzdERhdGEuc2hvd0RhdGVQaWNrZXI7XHJcbiAgICAgICAgdGVzdERhdGEuRklSRV9QVU1QX1RFU1RfRFQgPSBudWxsOyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZShkYXRlOmFueSkge1xyXG4gICAgICAgIGlmKGRhdGUgPT0gJycpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG51bGw7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9EZXJpdmUgYW5kIGNhbGN1bGF0ZSBmaWVsZHMgdmFsdWVcclxuICAgIC8vZmlyZVB1bXAuTk9NSU5BTF9QVU1QX0ZMT1dfUVRcclxuICAgIHJhdGVkRmxvd0NoYW5nZShmaXJlUHVtcEluZCkge1xyXG4gICAgICAgIGxldCBmaXJlUHVtcCA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXTtcclxuICAgICAgICBpZihmaXJlUHVtcC5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpcmVQdW1wLkZpcmVQdW1wUGVyZkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXN0RGF0YSA9IGZpcmVQdW1wLkZpcmVQdW1wUGVyZkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZih0ZXN0RGF0YS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGVzdERhdGEuRmlyZVB1bXBUZXN0UG9pbnRzTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdFBvaW50ID0gdGVzdERhdGEuRmlyZVB1bXBUZXN0UG9pbnRzTGlzdFtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdFBvaW50Lk5PTUlOQUxfRkxPV19QQyA9IHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50Lk1FQVNVUkVEX0ZMT1dfUVQpIC8gZmlyZVB1bXAuTk9NSU5BTF9QVU1QX0ZMT1dfUVQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nRHJvcGRvd24oZmlyZVB1bXAsIHRlc3RQb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vZmlyZVB1bXAuTk9NSU5BTF9QVU1QX1NQRUVEX1FUXHJcbiAgICByYXRlZFNwZWVkQ2hhbmdlKGZpcmVQdW1wSW5kKSB7XHJcbiAgICAgICAgbGV0IGZpcmVQdW1wID0gdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdO1xyXG4gICAgICAgIGlmKGZpcmVQdW1wLkZpcmVQdW1wUGVyZkxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlyZVB1bXAuRmlyZVB1bXBQZXJmTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlc3REYXRhID0gZmlyZVB1bXAuRmlyZVB1bXBQZXJmTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmKHRlc3REYXRhLkZpcmVQdW1wVGVzdFBvaW50c0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0ZXN0RGF0YS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0UG9pbnQgPSB0ZXN0RGF0YS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0UG9pbnQuQ09SUkVDVEVEX0ZMT1dfUVQgPSB0aGlzLnVuZm9ybWF0TnVtYmVyKHRlc3RQb2ludC5NRUFTVVJFRF9GTE9XX1FUKSAqIGZpcmVQdW1wLk5PTUlOQUxfUFVNUF9TUEVFRF9RVCAvIHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50LlBVTVBfU1BFRURfUVQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0UG9pbnQuQ09SUkVDVEVEX1BSRVNTVVJFX1FUID0gdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCAqICgoZmlyZVB1bXAuTk9NSU5BTF9QVU1QX1NQRUVEX1FUIC8gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuUFVNUF9TUEVFRF9RVCkpICoqIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVJhdGluZ0Ryb3Bkb3duKGZpcmVQdW1wLCB0ZXN0UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9maXJlUHVtcC5OT01JTkFMX1BVTVBfUFJFU1NVUkVfUVRcclxuICAgIHJhdGVkUHJlc3N1cmVDaGFuZ2UoZmlyZVB1bXBJbmQpIHtcclxuICAgICAgICBsZXQgZmlyZVB1bXAgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF07XHJcbiAgICAgICAgaWYoZmlyZVB1bXAuRmlyZVB1bXBQZXJmTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaXJlUHVtcC5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVzdERhdGEgPSBmaXJlUHVtcC5GaXJlUHVtcFBlcmZMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYodGVzdERhdGEuRmlyZVB1bXBUZXN0UG9pbnRzTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRlc3REYXRhLkZpcmVQdW1wVGVzdFBvaW50c0xpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RQb2ludCA9IHRlc3REYXRhLkZpcmVQdW1wVGVzdFBvaW50c0xpc3Rbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nRHJvcGRvd24oZmlyZVB1bXAsIHRlc3RQb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RyaWN0SW52YWxpZElucHV0KGZpcmVQdW1wSW5kLCB0ZXN0RGF0YUluZCwgdGVzdFBvaW50SW5kLCBmaWVsZCl7XHJcbiAgICAgICAgbGV0IHRlc3RQb2ludCA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0W3Rlc3REYXRhSW5kXS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0W3Rlc3RQb2ludEluZF07XHJcbiAgICAgICAgaWYoZmllbGQgPT0gJ21lYXN1cmVkRmxvdycpe1xyXG4gICAgICAgICAgICB0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCA9IHRlc3RQb2ludC5NRUFTVVJFRF9GTE9XX1FULnJlcGxhY2UoL1teMC05Ll0rL2csIFwiXCIpOyAvL3JlcGxhY2UoL1teMC05XSsvZywgXCJcIik7ICBPUiByZXBsYWNlKC9bXjAtOV0rL2csIFwiXCIpOyAvLyBOb24gRGlnaXRzIFxyXG4gICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdFt0ZXN0UG9pbnRJbmRdLk1FQVNVUkVEX0ZMT1dfUVQgPSB0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmllbGQgPT0gJ2Rpc2NoYXJnZVByZXNzdXJlJyl7XHJcbiAgICAgICAgICAgIHRlc3RQb2ludC5ESVNDSEFSR0VfUFJFU1NVUkVfUVQgPSB0ZXN0UG9pbnQuRElTQ0hBUkdFX1BSRVNTVVJFX1FULnJlcGxhY2UoL1teMC05Ll0rL2csIFwiXCIpOyAvL3JlcGxhY2UoL1teMC05XSsvZywgXCJcIik7ICBPUiByZXBsYWNlKC9bXjAtOV0rL2csIFwiXCIpOyAvLyBOb24gRGlnaXRzIFxyXG4gICAgICAgICAgICB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdFt0ZXN0UG9pbnRJbmRdLkRJU0NIQVJHRV9QUkVTU1VSRV9RVCA9IHRlc3RQb2ludC5ESVNDSEFSR0VfUFJFU1NVUkVfUVQ7IFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuIFxyXG4gICAgbWVhc3VyZWRGbG93Q2hhbmdlKGZpcmVQdW1wSW5kLCB0ZXN0RGF0YUluZCwgdGVzdFBvaW50SW5kKSB7XHJcbiAgICAgICAgbGV0IGZpcmVQdW1wID0gdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdO1xyXG4gICAgICAgIGxldCB0ZXN0UG9pbnQgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF0uRmlyZVB1bXBQZXJmTGlzdFt0ZXN0RGF0YUluZF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdFt0ZXN0UG9pbnRJbmRdOyAgICAgICAgXHJcbiAgICAgICAgdGVzdFBvaW50Lk5PTUlOQUxfRkxPV19QQyA9IHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50Lk1FQVNVUkVEX0ZMT1dfUVQpIC8gZmlyZVB1bXAuTk9NSU5BTF9QVU1QX0ZMT1dfUVQ7XHJcbiAgICAgICAgdGVzdFBvaW50LkNPUlJFQ1RFRF9GTE9XX1FUID0gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCkgKiBmaXJlUHVtcC5OT01JTkFMX1BVTVBfU1BFRURfUVQgLyB0aGlzLnVuZm9ybWF0TnVtYmVyKHRlc3RQb2ludC5QVU1QX1NQRUVEX1FUKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJhdGluZ0Ryb3Bkb3duKGZpcmVQdW1wLCB0ZXN0UG9pbnQpO1xyXG4gICAgICAgIHRlc3RQb2ludC5NRUFTVVJFRF9GTE9XX1FUID0gdGhpcy5mb3JtYXROdW1iZXJXaXRoQ29tbWFzKHRlc3RQb2ludC5NRUFTVVJFRF9GTE9XX1FUKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rlc3RQb2ludC5TVUNUSU9OX1BSRVNTVVJFX1FUXHJcbiAgICBzdWN0aW9uUHJlc3N1cmVDaGFuZ2UoZmlyZVB1bXBJbmQsIHRlc3REYXRhSW5kLCB0ZXN0UG9pbnRJbmQpIHtcclxuICAgICAgICBsZXQgZmlyZVB1bXAgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF07XHJcbiAgICAgICAgbGV0IHRlc3RQb2ludCA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0W3Rlc3REYXRhSW5kXS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0W3Rlc3RQb2ludEluZF07XHJcbiAgICAgICAgdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCA9IHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50LkRJU0NIQVJHRV9QUkVTU1VSRV9RVCkgLSB0aGlzLnVuZm9ybWF0TnVtYmVyKHRlc3RQb2ludC5TVUNUSU9OX1BSRVNTVVJFX1FUKTtcclxuICAgICAgICB0ZXN0UG9pbnQuQ09SUkVDVEVEX1BSRVNTVVJFX1FUID0gdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCAqICgoZmlyZVB1bXAuTk9NSU5BTF9QVU1QX1NQRUVEX1FUIC8gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuUFVNUF9TUEVFRF9RVCkpICoqIDIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nRHJvcGRvd24oZmlyZVB1bXAsIHRlc3RQb2ludCk7XHJcbiAgICAgICAgdGVzdFBvaW50LlNVQ1RJT05fUFJFU1NVUkVfUVQgPSB0aGlzLmZvcm1hdE51bWJlcldpdGhDb21tYXModGVzdFBvaW50LlNVQ1RJT05fUFJFU1NVUkVfUVQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGVzdFBvaW50LkRJU0NIQVJHRV9QUkVTU1VSRV9RVFxyXG4gICAgZGlzY2hhcmdlUHJlc3N1cmVDaGFuZ2UoZmlyZVB1bXBJbmQsIHRlc3REYXRhSW5kLCB0ZXN0UG9pbnRJbmQpIHtcclxuICAgICAgICBsZXQgZmlyZVB1bXAgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF07XHJcbiAgICAgICAgbGV0IHRlc3RQb2ludCA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0W3Rlc3REYXRhSW5kXS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0W3Rlc3RQb2ludEluZF07XHJcbiAgICAgICAgdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCA9IHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50LkRJU0NIQVJHRV9QUkVTU1VSRV9RVCkgLSB0aGlzLnVuZm9ybWF0TnVtYmVyKHRlc3RQb2ludC5TVUNUSU9OX1BSRVNTVVJFX1FUKTtcclxuICAgICAgICB0ZXN0UG9pbnQuQ09SUkVDVEVEX1BSRVNTVVJFX1FUID0gdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCAqICgoZmlyZVB1bXAuTk9NSU5BTF9QVU1QX1NQRUVEX1FUIC8gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuUFVNUF9TUEVFRF9RVCkpICoqIDIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nRHJvcGRvd24oZmlyZVB1bXAsIHRlc3RQb2ludCk7XHJcbiAgICAgICAgdGVzdFBvaW50LkRJU0NIQVJHRV9QUkVTU1VSRV9RVCA9IHRoaXMuZm9ybWF0TnVtYmVyV2l0aENvbW1hcyh0ZXN0UG9pbnQuRElTQ0hBUkdFX1BSRVNTVVJFX1FUKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy90ZXN0UG9pbnQuUFVNUF9TUEVFRF9RVFxyXG4gICAgc3BlZWRDaGFuZ2UoZmlyZVB1bXBJbmQsIHRlc3REYXRhSW5kLCB0ZXN0UG9pbnRJbmQpIHtcclxuICAgICAgICBsZXQgZmlyZVB1bXAgPSB0aGlzLmZpcmVQdW1wRGF0YVtmaXJlUHVtcEluZF07XHJcbiAgICAgICAgbGV0IHRlc3RQb2ludCA9IHRoaXMuZmlyZVB1bXBEYXRhW2ZpcmVQdW1wSW5kXS5GaXJlUHVtcFBlcmZMaXN0W3Rlc3REYXRhSW5kXS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0W3Rlc3RQb2ludEluZF07XHJcbiAgICAgICAgdGVzdFBvaW50LkNPUlJFQ1RFRF9GTE9XX1FUID0gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCkgKiBmaXJlUHVtcC5OT01JTkFMX1BVTVBfU1BFRURfUVQgLyB0aGlzLnVuZm9ybWF0TnVtYmVyKHRlc3RQb2ludC5QVU1QX1NQRUVEX1FUKTtcclxuICAgICAgICB0ZXN0UG9pbnQuQ09SUkVDVEVEX1BSRVNTVVJFX1FUID0gdGVzdFBvaW50Lk5FVF9QUkVTU1VSRV9RVCAqICgoZmlyZVB1bXAuTk9NSU5BTF9QVU1QX1NQRUVEX1FUIC8gdGhpcy51bmZvcm1hdE51bWJlcih0ZXN0UG9pbnQuUFVNUF9TUEVFRF9RVCkpICoqIDIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nRHJvcGRvd24oZmlyZVB1bXAsIHRlc3RQb2ludCk7XHJcbiAgICAgICAgdGVzdFBvaW50LlBVTVBfU1BFRURfUVQgPSB0aGlzLmZvcm1hdE51bWJlcldpdGhDb21tYXModGVzdFBvaW50LlBVTVBfU1BFRURfUVQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBmb3JtYXROdW1iZXIobnVtKSB7ICAgICAgICBcclxuICAgIC8vICAgICBudW0gPSB0aGlzLm51bWJlcldpdGhDb21tYXMobnVtKTtcclxuICAgIC8vICAgICByZXR1cm4gbnVtOyAgICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIGZvcm1hdE51bWJlcldpdGhDb21tYXMobnVtKXsgICAgICAgXHJcbiAgICAgICAgaWYobnVtICE9ICcnKXtcclxuICAgICAgICAgICAgLy8gdmFyIHAgPSBOdW1iZXIobnVtKS50b0ZpeGVkKDIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy51bmZvcm1hdE51bWJlcihudW0pO1xyXG4gICAgICAgICAgICBpZiAobnVtLnRvU3RyaW5nKCkuaW5kZXhPZignLicpID49IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIHAgPSBudW0udG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcFswXS5zcGxpdChcIlwiKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uKGFjYywgbnVtLCBpLCBvcmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBudW0gKyAoaSAmJiAhKGkgJSAzKSA/IFwiLFwiIDogXCJcIikgKyBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJcIikgKyBcIi5cIiArIHBbMV07IFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBwID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5zcGxpdChcIlwiKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uKGFjYywgbnVtLCBpLCBvcmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBudW0gKyAoaSAmJiAhKGkgJSAzKSA/IFwiLFwiIDogXCJcIikgKyBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJcIik7IFxyXG4gICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVuZm9ybWF0TnVtYmVyKG51bSl7XHJcbiAgICAgICAgaWYobnVtID09IG51bGwpXHJcbiAgICAgICAgICAgIG51bSA9IFwiMFwiO1xyXG4gICAgICAgIG51bSA9IG51bS5yZXBsYWNlKC8sL2csICcnKTtcclxuICAgICAgICAvLyBpZihudW0gIT0gJycpXHJcbiAgICAgICAgLy8gICAgIHJldHVybiBwYXJzZUludChudW0pO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9ybWF0TnVtYmVyKGZpcmVQdW1wSW5kLCB0ZXN0RGF0YUluZCwgdGVzdFBvaW50SW5kKSB7ICAgICAgICBcclxuICAgIC8vICAgICBsZXQgdGVzdFBvaW50ID0gdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdLkZpcmVQdW1wUGVyZkxpc3RbdGVzdERhdGFJbmRdLkZpcmVQdW1wVGVzdFBvaW50c0xpc3RbdGVzdFBvaW50SW5kXTtcclxuICAgIC8vICAgICB0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCA9IHRoaXMubnVtYmVyV2l0aENvbW1hcyh0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCk7XHJcbiAgICAvLyAgICAgdGhpcy5maXJlUHVtcERhdGFbZmlyZVB1bXBJbmRdLkZpcmVQdW1wUGVyZkxpc3RbdGVzdERhdGFJbmRdLkZpcmVQdW1wVGVzdFBvaW50c0xpc3RbdGVzdFBvaW50SW5kXS5NRUFTVVJFRF9GTE9XX1FUID0gdGVzdFBvaW50Lk1FQVNVUkVEX0ZMT1dfUVQ7IFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG51bWJlcldpdGhDb21tYXMobnVtKXsgICAgICAgXHJcbiAgICAvLyAgICAgaWYobnVtICE9ICcnKXtcclxuICAgIC8vICAgICAgICAgLy8gdmFyIHAgPSBOdW1iZXIobnVtKS50b0ZpeGVkKDIpLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vICAgICAgICAgaWYgKG51bS50b1N0cmluZygpLmluZGV4T2YoJy4nKSA+PSAwKXtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBwID0gbnVtLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHBbMF0uc3BsaXQoXCJcIikucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbihhY2MsIG51bSwgaSwgb3JpZykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAgbnVtICsgKGkgJiYgIShpICUgMykgPyBcIixcIiA6IFwiXCIpICsgYWNjO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIFwiXCIpICsgXCIuXCIgKyBwWzFdOyBcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgcCA9IG51bS50b1N0cmluZygpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHAuc3BsaXQoXCJcIikucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbihhY2MsIG51bSwgaSwgb3JpZykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAgbnVtICsgKGkgJiYgIShpICUgMykgPyBcIixcIiA6IFwiXCIpICsgYWNjO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIFwiXCIpOyBcclxuICAgIC8vICAgICAgICAgfSAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbnVtO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNhbGN1bGF0ZVJhdGluZ0Ryb3Bkb3duKGZpcmVQdW1wLCB0ZXN0UG9pbnQpIHtcclxuICAgICAgICBpZih0ZXN0UG9pbnQuTUVBU1VSRURfRkxPV19RVCAmJiBmaXJlUHVtcC5OT01JTkFMX1BVTVBfRkxPV19RVCAmJiBmaXJlUHVtcC5OT01JTkFMX1BVTVBfRkxPV19RVCAhPSAwIFxyXG4gICAgICAgICAgICAmJiB0ZXN0UG9pbnQuQ09SUkVDVEVEX1BSRVNTVVJFX1FUICYmIGZpcmVQdW1wLk5PTUlOQUxfUFVNUF9QUkVTU1VSRV9RVCAmJiBmaXJlUHVtcC5OT01JTkFMX1BVTVBfUFJFU1NVUkVfUVQgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMudW5mb3JtYXROdW1iZXIodGVzdFBvaW50Lk1FQVNVUkVEX0ZMT1dfUVQpIC8gZmlyZVB1bXAuTk9NSU5BTF9QVU1QX0ZMT1dfUVQ7XHJcbiAgICAgICAgICAgIGxldCBoaWdoUmVkdWN0aW9uQ3VydmUgPSAtMC4xNzI3Kih4KioyKSAtIDAuMjI4MSp4ICsgMS4zMzg4OyAvLzUlIHJlZHVjdGlvbiBjdXJ2ZVxyXG4gICAgICAgICAgICBsZXQgbG93UmVkdWN0aW9uQ3VydmUgPSAtMC4xNzI3Kih4KioyKSAtIDAuMjI4MSp4ICsgMS4yODg4OyAvLzEwJSByZWR1Y3Rpb24gY3VydmVcclxuICAgICAgICAgICAgbGV0IGNvcnJlY3RlZFByZXNzdXJlID0gdGVzdFBvaW50LkNPUlJFQ1RFRF9QUkVTU1VSRV9RVCAvIGZpcmVQdW1wLk5PTUlOQUxfUFVNUF9QUkVTU1VSRV9RVDtcclxuICAgICAgICAgICAgaWYoY29ycmVjdGVkUHJlc3N1cmUgPj0gaGlnaFJlZHVjdGlvbkN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0UG9pbnQuUkFUSU5HX0RTID0gXCJFeGNlbGxlbnRcIjsvL1wiRVhDRUxcIjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSBpZihjb3JyZWN0ZWRQcmVzc3VyZSA+PSBsb3dSZWR1Y3Rpb25DdXJ2ZSAmJiBjb3JyZWN0ZWRQcmVzc3VyZSA8IGhpZ2hSZWR1Y3Rpb25DdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGVzdFBvaW50LlJBVElOR19EUyA9IFwiR29vZFwiOy8vXCJHT09EXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjb3JyZWN0ZWRQcmVzc3VyZSA8IGxvd1JlZHVjdGlvbkN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0UG9pbnQuUkFUSU5HX0RTID0gXCJQb29yXCI7Ly9cIlBPT1JcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlc3RQb2ludC5SQVRJTkdfRFMgPSBcIk5vdCBBcHBsaWNhYmxlXCI7Ly9cIk5BXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBzYXZlRGF0YVRvRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5nZXRUeXBlKCkgPT0gJ3NhdmUnICYmIGV2ZW50LmdldFJmc1BhcmVudElkKCkgPT0gcmZzUGFyZW50SWQgJiYgZXZlbnQuZ2V0UmZzSWQoKSA9PSByZnNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVTZXJ2aWNlLnJlYWRMb2NhdGlvbkRhdGEocmZzUGFyZW50SWQsIHJmc0lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9jRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jRGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jQXNzZXNzbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXJTdXBwbHlEZXRhaWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcmVQdW1wRGV0YWlsc1BhZ2UuRmlyZVB1bXBEZXRhaWxzTGlzdCA9IHRoaXMuZmlyZVB1bXBEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgbG9jRGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jQXNzZXNzbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXJTdXBwbHlEZXRhaWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcmVQdW1wRGV0YWlsc1BhZ2UuQ29tbWVudExpc3RbMF0uUHJpbWFyeUxhbmd1YWdlID0gdGhpcy5jb21tb25TZXJ2aWNlLmdsb2JhbE5hcnJhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ2ZpcmUtcHVtcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YU1vZGVsLnNldFJhd0RhdGEobG9jRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS53cml0ZUxvY2F0aW9uRGF0YShsb2NhdGlvbkRhdGFNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
