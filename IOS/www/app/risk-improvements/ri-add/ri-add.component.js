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
var risk_improvements_service_1 = require('./../shared/risk-improvements.service');
var ri_add_service_1 = require('./ri-add.service');
var componentCommunicationService_1 = require('../../shared/componentCommunicationService');
var localStorageService_1 = require('../../shared/localStorageService');
var validationMessages_1 = require('../../shared/validationMessages');
var hazards_service_1 = require('../../hazards/shared/hazards.service');
var RIAddComponent = (function () {
    function RIAddComponent(riService, _validationMessageComp, riAddService, localStorageService, datePipe, ccs, hazardsService) {
        this.riService = riService;
        this._validationMessageComp = _validationMessageComp;
        this.riAddService = riAddService;
        this.localStorageService = localStorageService;
        this.datePipe = datePipe;
        this.ccs = ccs;
        this.hazardsService = hazardsService;
        this.lossEstimateType = 'Manual';
        this.narrativeType = 'Manual';
        this.narrativeClientResponse = '';
        this.mainTypes = [];
        this.types = [];
        this.subTypes = [];
        this.uniqueTypes = [];
        this.categories = [];
        this.statuses = [];
        this.intendedActions = [];
        this.targetCompletionTimeValues = [];
        this.standardRiData = [];
        this.actualRiData = [];
        this.newRiskImp = {
            "AREA_INVOLVED_QT": '',
            "BENEFIT_RATIO_RT": '',
            "Category": '',
            "CONTACT_ID": '',
            "HideSLEinLEReport_IN": '',
            "INTENDED_ACTION_CD": '',
            "IntendedAction": '',
            "LARGE_LOSS_POTENTIAL_IN": '',
            "LOCATION_ASSESSMENT_ID": '',
            "LOSS_REDUCTION_LIKELIHOOD_CD": '',
            "NON_AIG_SOURCE_IN": '',
            "PREV_LOAD_REC_IN": '',
            "pxObjClass": '',
            "RecFollowUp": '',
            "RI_NO": '',
            "RISK_CATEGORY_CD": '',
            "RISK_IMPRVMNT_ID": '',
            "RISK_IMPRVMNT_NM": '',
            "RISK_MAINTYPE_CD": '',
            "RISK_OUTSTANDING_CD": '',
            "RISK_STATUS_CD": '',
            "RISK_SUBTYPE_CD": '',
            "RISK_TYPE_CD": '',
            "Riskoutnm": '',
            "SHOW_PORTAL_IN": '',
            "ShowEstimatedCTC": '',
            "ShowInAccRevReport": '',
            "ShowInLEReport": '',
            "Status": '',
            "SubType": '',
            "TARGET_COMPLETION_TIME_CD": '',
            "TOT_LOSS_EST_BFR_RI_AM": '',
            "Type": '',
            "VERSION_NO": '',
            "RICommentList": [
                {
                    Memo_Field_usedspace: " ",
                    PrimaryLanguage: {
                        changingThisBreaksApplicationSecurity: ''
                    },
                    SECTION_NM: "RI Summary",
                    SecondaryComments: "false",
                    pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                    pyNote: "BODY"
                },
                {
                    Memo_Field_usedspace: " ",
                    PrimaryLanguage: {
                        changingThisBreaksApplicationSecurity: ''
                    },
                    SECTION_NM: "RI Details",
                    SecondaryComments: "false",
                    pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                    pyNote: "DETAIL"
                },
                {
                    Memo_Field_usedspace: " ",
                    PrimaryLanguage: "",
                    SECTION_NM: "Client Exit Conference Comments",
                    SecondaryComments: "false",
                    pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                    pyNote: "EXIT"
                },
                {
                    DisplayFlag: "false",
                    Memo_Field_usedspace: " ",
                    PrimaryLanguage: "",
                    SECTION_NM: "Client Response (from ENGage)",
                    SecondaryComments: "false",
                    pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                    pyNote: "ACTION"
                },
                {
                    Memo_Field_usedspace: " ",
                    PrimaryLanguage: "",
                    SECTION_NM: "Engineering Comments (Internal & Onscreen only)",
                    SecondaryComments: "false",
                    pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                    pyNote: "ENG"
                }
            ],
            "isDeletable": true,
            "PRPTY_LOSS_EST_BEFORE_RI_AM": '',
            "BIZ_INTRPT_LSS_EST_BFR_RI_AM": '',
            "TOT_LOSS_EST_AFTER_RI_AM": '',
            "EST_COST_TO_COMPLETE_AM": ''
        };
        this.tradeSectors = [];
        this.riMatrixList = [];
        this.lossReductions = [{ 'code': '0', 'Description': 'Low' }, { 'code': '1', 'Description': 'Moderate' }, { 'code': '2', 'Description': 'Significant' }];
        this.fireLossEstimates = [];
        this.selectedFireLEIndex = -1;
        this.hazardMainTypes = [];
        this.hazardTypes = [];
        this.hazardCategories = [];
        this.hazardsData = [];
        this.riService = riService;
        this._validationMessageComp = _validationMessageComp;
    }
    RIAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.site = this.localStorageService.get('locationData');
        this.validationMessagesObject = this._validationMessageComp.getMessages('error');
        this.validationWarnObj = this._validationMessageComp.getMessages('warning');
        this.getRiskImprovementsList();
        this.getMainTypes();
        this.getRIMatrixList();
        this.getCategories();
        this.getIntendedActions();
        this.getTargetCompletionTimeValues();
        this.getStandardRI();
        this.getRIStatusList();
        this.getHazardCategories();
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        this.hazardsService.getHazardsData(rfsParentId, rfsId).subscribe(function (data) {
            if (data.hazards.length > 0) {
                var count = 0;
                _this.randomIDGeneratorInterval = setInterval(function () {
                    if (count < data.hazards.length) {
                        if (!('HAZARD_RANDOM_ID_TOLINK' in data.hazards[count])) {
                            var timestampkey = new Date();
                            data.hazards[count].HAZARD_RANDOM_ID_TOLINK = timestampkey.getTime();
                        }
                        if (count == data.hazards.length - 1) {
                            clearInterval(_this.randomIDGeneratorInterval);
                            _this.ccs.setHazardsData(data);
                        }
                        count++;
                    }
                }, 1);
            }
            else {
                _this.ccs.setHazardsData(data);
            }
        }, function (err) { return console.error(err); }, function () { });
        this.ccs.getHazardsData().subscribe(function (data) {
            _this.setHazardsSummaryData(data);
        });
    };
    RIAddComponent.prototype.selectedLossReduction = function (lossReduction) {
        this.newRiskImp.LOSS_REDUCTION_LIKELIHOOD_CD = lossReduction.code;
    };
    RIAddComponent.prototype.sleChangeHandler = function (sleValue) {
        if (sleValue) {
            this.newRiskImp.LARGE_LOSS_POTENTIAL_IN = "Yes";
        }
        else {
            this.newRiskImp.LARGE_LOSS_POTENTIAL_IN = "No";
        }
    };
    RIAddComponent.prototype.calculateData = function () {
        var rinPDLEBeforeInput = this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM || 0;
        var rinBILEBeforeInput = this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM || 0;
        this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM = Math.round(rinPDLEBeforeInput);
        this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM = Math.round(rinBILEBeforeInput);
        var totalLEAfter = this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM || 0;
        var estimatedCost = this.newRiskImp.EST_COST_TO_COMPLETE_AM || 0;
        this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM = Math.round(totalLEAfter);
        this.newRiskImp.EST_COST_TO_COMPLETE_AM = Math.round(estimatedCost);
        this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM = this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM + this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM;
        if (this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM && this.newRiskImp.EST_COST_TO_COMPLETE_AM) {
            this.newRiskImp.BENEFIT_RATIO_RT = (this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM - this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM) / this.newRiskImp.EST_COST_TO_COMPLETE_AM;
            this.newRiskImp.BENEFIT_RATIO_RT = (this.newRiskImp.BENEFIT_RATIO_RT).toFixed(1);
        }
        else {
            this.newRiskImp.BENEFIT_RATIO_RT = "0.00";
        }
    };
    RIAddComponent.prototype.resetPopup = function () {
        this.mainTypeValue = 'Please Select';
        this.typeValue = 'Please Select';
        this.subTypeValue = 'Please Select';
        this.statusValue = 'Please Select';
        this.intendedActionValue = 'Please Select';
        this.categoryValue = 'Please Select';
        this.targetCompletionTimeValue = 'Select Time';
        this.types = [];
        this.subTypes = [];
        this.sleValue = false;
        this.selectedFireLEIndex = -1;
        this.narrativeType = 'Manual';
        this.newRiskImp.RI_NO = '';
        this.newRiskImp.RISK_IMPRVMNT_NM = '';
        this.newRiskImp.RISK_MAINTYPE_CD = '';
        this.newRiskImp.RISK_TYPE_CD = '';
        this.newRiskImp.RISK_SUBTYPE_CD = '';
        this.newRiskImp.RISK_STATUS_CD = '';
        this.newRiskImp.INTENDED_ACTION_CD = '';
        this.newRiskImp.RISK_CATEGORY_CD = '';
        this.newRiskImp.TARGET_COMPLETION_TIME_CD = '';
        this.newRiskImp.SHOW_PORTAL_IN = '';
        this.newRiskImp.TARGET_COMPLETION_DT = '';
        this.newRiskImp.COMPLETION_DT = '';
        this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM = '';
        this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM = '';
        this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM = '';
        this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM = '';
        this.newRiskImp.EST_COST_TO_COMPLETE_AM = '';
        this.newRiskImp.RICommentList = [
            {
                Memo_Field_usedspace: " ",
                PrimaryLanguage: {
                    changingThisBreaksApplicationSecurity: ''
                },
                SECTION_NM: "RI Summary",
                SecondaryComments: "false",
                pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                pyNote: "BODY"
            },
            {
                Memo_Field_usedspace: " ",
                PrimaryLanguage: {
                    changingThisBreaksApplicationSecurity: ''
                },
                SECTION_NM: "RI Details",
                SecondaryComments: "false",
                pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                pyNote: "DETAIL"
            },
            {
                Memo_Field_usedspace: " ",
                PrimaryLanguage: "",
                SECTION_NM: "Client Exit Conference Comments",
                SecondaryComments: "false",
                pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                pyNote: "EXIT"
            },
            {
                DisplayFlag: "false",
                Memo_Field_usedspace: " ",
                PrimaryLanguage: "",
                SECTION_NM: "Client Response (from ENGage)",
                SecondaryComments: "false",
                pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                pyNote: "ACTION"
            },
            {
                Memo_Field_usedspace: " ",
                PrimaryLanguage: "",
                SECTION_NM: "Engineering Comments (Internal & Onscreen only)",
                SecondaryComments: "false",
                pxObjClass: "aig-FW-GRASP-Data-TRISK_COMMENTS_BLOB",
                pyNote: "ENG"
            }
        ];
        if (this.hazardsData && this.hazardsData.length > 0) {
            for (var index in this.hazardsData)
                this.hazardsData[index].checked = false;
        }
    };
    RIAddComponent.prototype.showModal = function (riObject, state, currState) {
        this.predominantTradeSector = this.localStorageService.get('predominantTradeSector');
        this.title = state;
        if (state == 'Add') {
            this.resetPopup();
            if (this.riskImprovementsData) {
                if (!('RiskImprvmnt_PAGES' in this.riskImprovementsData)) {
                    this.riskImprovementsData.RiskImprvmnt_PAGES = [];
                }
            }
            else if (typeof this.riskImprovementsData === 'undefined') {
                this.riskImprovementsData = {};
                this.riskImprovementsData.RiskImprvmnt_PAGES = [];
                this.newRiskImp.RI_NO = this.generateRINumber(this.localStorageService.get('surveyCompletedDate'), this.riskImprovementsData.RiskImprvmnt_PAGES);
            }
            this.newRiskImp.RISK_OUTSTANDING_CD = 'New';
            this.newRiskImp.NON_AIG_SOURCE_IN = false;
            this.newRiskImp.LINKED_HAZARDS = [];
            if (riObject) {
                this.mainTypeValue = this.filterMainType(riObject.RecMainTypeCode) || 'Please Select';
                this.newRiskImp.RISK_MAINTYPE_CD = riObject.RecMainTypeCode;
                this.getTypes();
                this.typeValue = this.filterType(riObject.RecTypeCode) || 'Please Select';
                this.newRiskImp.RISK_TYPE_CD = riObject.RecTypeCode;
                this.getSubTypes();
                this.subTypeValue = this.filterSubType(riObject.RecSubTypeCode) || 'Please Select';
                this.newRiskImp.Type = riObject.RecType;
                this.newRiskImp.SubType = this.subTypeValue;
                this.newRiskImp.RISK_SUBTYPE_CD = riObject.RecSubTypeCode;
            }
            else if (currState == 'construction' || currState == 'sprinklers' || currState == 'waterSupply' || currState == 'nat-cat') {
                this.natcatTabIndex = this.ccs.getNatcatTabIndex();
                this.getViewMetaData(currState, this.natcatTabIndex);
                riObject = this.viewMetaData;
                if (riObject) {
                    this.mainTypeValue = this.filterMainType(riObject.RecMainTypeCode) || 'Please Select';
                    this.newRiskImp.RISK_MAINTYPE_CD = riObject.RecMainTypeCode;
                    this.getTypes();
                    this.typeValue = this.filterType(riObject.RecTypeCode) || 'Please Select';
                    this.newRiskImp.RISK_TYPE_CD = riObject.RecTypeCode;
                    this.getSubTypes();
                    this.subTypeValue = this.filterSubType(riObject.RecSubTypeCode) || 'Please Select';
                    this.newRiskImp.Type = riObject.RecType;
                    this.newRiskImp.SubType = this.subTypeValue;
                    this.newRiskImp.RISK_SUBTYPE_CD = riObject.RecSubTypeCode;
                }
            }
        }
        else {
            this.newRiskImp.RI_NO = riObject.RI_NO;
            this.newRiskImp.RISK_IMPRVMNT_NM = riObject.RISK_IMPRVMNT_NM;
            this.newRiskImp.RISK_OUTSTANDING_CD = riObject.RISK_OUTSTANDING_CD.charAt(0).toUpperCase() + riObject.RISK_OUTSTANDING_CD.substr(1).toLowerCase();
            this.newRiskImp.NON_AIG_SOURCE_IN = JSON.parse(riObject.NON_AIG_SOURCE_IN);
            this.newRiskImp.SHOW_PORTAL_IN = riObject.SHOW_PORTAL_IN;
            this.newRiskImp.LARGE_LOSS_POTENTIAL_IN = riObject.LARGE_LOSS_POTENTIAL_IN;
            if (riObject.COMPLETION_DT) {
                this.newRiskImp.COMPLETION_DT = new common_1.DatePipe().transform(riObject.COMPLETION_DT, 'MM/dd/yyyy');
            }
            if (riObject.COMPLETION_DT) {
                this.newRiskImp.TARGET_COMPLETION_DT = new common_1.DatePipe().transform(riObject.COMPLETION_DT, 'MM/dd/yyyy');
            }
            this.mainTypeValue = this.filterMainType(riObject.RISK_MAINTYPE_CD);
            this.newRiskImp.RISK_MAINTYPE_CD = riObject.RISK_MAINTYPE_CD;
            this.getTypes();
            this.typeValue = this.filterType(riObject.RISK_TYPE_CD);
            this.newRiskImp.RISK_TYPE_CD = riObject.RISK_TYPE_CD;
            this.newRiskImp.Type = riObject.Type;
            this.getSubTypes();
            this.subTypeValue = this.filterSubType(riObject.RISK_SUBTYPE_CD);
            this.newRiskImp.RISK_SUBTYPE_CD = riObject.RISK_SUBTYPE_CD;
            this.newRiskImp.SubType = this.subTypeValue;
            this.statusValue = this.filterStatusByCodes(riObject.RISK_STATUS_CD);
            this.newRiskImp.RISK_STATUS_CD = riObject.RISK_STATUS_CD;
            this.intendedActionValue = this.filterIntendedAction(riObject.INTENDED_ACTION_CD);
            this.newRiskImp.INTENDED_ACTION_CD = riObject.INTENDED_ACTION_CD;
            this.categoryValue = this.filterCategory(riObject.RISK_CATEGORY_CD);
            this.newRiskImp.RISK_CATEGORY_CD = riObject.RISK_CATEGORY_CD;
            this.targetCompletionTimeValue = this.filterCompTimeByCode(riObject.TARGET_COMPLETION_TIME_CD) || 'Select Time';
            this.newRiskImp.TARGET_COMPLETION_TIME_CD = riObject.TARGET_COMPLETION_TIME_CD;
            this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM = riObject.PRPTY_LOSS_EST_BEFORE_RI_AM;
            this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM = riObject.BIZ_INTRPT_LSS_EST_BFR_RI_AM;
            this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM = riObject.TOT_LOSS_EST_BFR_RI_AM;
            this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM = riObject.TOT_LOSS_EST_AFTER_RI_AM;
            this.newRiskImp.EST_COST_TO_COMPLETE_AM = riObject.EST_COST_TO_COMPLETE_AM;
            this.newRiskImp.LOSS_REDUCTION_LIKELIHOOD_CD = riObject.LOSS_REDUCTION_LIKELIHOOD_CD;
            this.newRiskImp.LINKED_HAZARDS = riObject.LINKED_HAZARDS ? riObject.LINKED_HAZARDS : [];
            for (var x = 0; x < this.hazardsData.length; x++) {
                if (this.newRiskImp.LINKED_HAZARDS.indexOf(this.hazardsData[x].HAZARD_RANDOM_ID_TOLINK) > -1) {
                    this.hazardsData[x].checked = true;
                }
                else {
                    this.hazardsData[x].checked = false;
                }
            }
            this.getNarrativeContent(riObject);
        }
        if (this.mainTypeValue == "Physical Protection" || this.mainTypeValue == "NATCAT" || this.mainTypeValue == "Human Element") {
            this.checkMainType = true;
        }
        else {
            this.checkMainType = false;
        }
        this.modal.show();
    };
    RIAddComponent.prototype.hideModal = function () {
        this.modal.hide();
    };
    RIAddComponent.prototype.getViewMetaData = function (currState, natcatTabIndex) {
        if (currState == 'construction') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Construction');
        }
        else if (currState == 'sprinklers') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Sprinklers');
        }
        else if (currState == 'waterSupply') {
            this.viewMetaData = this.filterRIMatrixByPTSnSubtype(this.predominantTradeSector, 'Water Supply');
        }
        else if (currState == 'nat-cat' && natcatTabIndex) {
            if (natcatTabIndex == 1) {
                this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Flood', true, { 'RecTypeCode': true });
            }
            else if (natcatTabIndex == 2) {
                this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Surge', true, { 'RecTypeCode': true });
            }
            else if (natcatTabIndex == 3) {
                this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Wind', true, { 'RecTypeCode': true });
            }
            else if (natcatTabIndex == 4) {
                this.viewMetaData = this.filterRIMatrixByPTSnMTnType(this.predominantTradeSector, 'NATCAT', 'Earthquake', true, { 'RecTypeCode': true });
            }
            else {
                this.viewMetaData = {
                    "RecMainTypeCode": "NATCAT",
                    "RecMainType": "NATCAT",
                };
            }
        }
    };
    RIAddComponent.prototype.getSelectiveMetaDataAttribute = function (mdObj, selSelectionAttr) {
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
    RIAddComponent.prototype.filterRIMatrixByPTSnSubtype = function (preTradeSector, subtype) {
        var result = this.riMatrixList.filter(function (item) { return item.RecSubType == subtype && item.TradeSectorOrOccupancy == preTradeSector; });
        if (result.length > 0) {
            return result[0];
        }
        else {
            return {};
        }
    };
    RIAddComponent.prototype.filterRIMatrixByPTSnMTnType = function (preTradeSector, mainType, type, selSelection, selSelectionAttr) {
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
    RIAddComponent.prototype.getNarrativeContent = function (riObject) {
        if (riObject.RICommentList && riObject.RICommentList.length > 0) {
            for (var i = 0; i < riObject.RICommentList.length; i++) {
                if (riObject.RICommentList[i].SECTION_NM == 'RI Details') {
                    if (riObject.RICommentList[i].PrimaryLanguage && riObject.RICommentList[i].PrimaryLanguage.changingThisBreaksApplicationSecurity) {
                        this.newRiskImp.RICommentList[1].PrimaryLanguage = riObject.RICommentList[i].PrimaryLanguage;
                    }
                    else {
                        this.newRiskImp.RICommentList[1].PrimaryLanguage = {
                            changingThisBreaksApplicationSecurity: riObject.RICommentList[i].PrimaryLanguage || ''
                        };
                    }
                }
                else if (riObject.RICommentList[i].SECTION_NM == 'RI Summary') {
                    if (riObject.RICommentList[i].PrimaryLanguage && riObject.RICommentList[i].PrimaryLanguage.changingThisBreaksApplicationSecurity) {
                        this.newRiskImp.RICommentList[0].PrimaryLanguage = riObject.RICommentList[i].PrimaryLanguage;
                    }
                    else {
                        this.newRiskImp.RICommentList[0].PrimaryLanguage = {
                            changingThisBreaksApplicationSecurity: riObject.RICommentList[i].PrimaryLanguage || ''
                        };
                    }
                }
                else if (riObject.RICommentList[i].SECTION_NM == 'Client Response (from ENGage)') {
                    this.narrativeClientResponse = riObject.RICommentList[i].PrimaryLanguage || '';
                }
            }
        }
    };
    RIAddComponent.prototype.getRiskImprovementsList = function () {
        var _this = this;
        this.riService.getRiskImprovementsData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            if (data.LocationAssessment) {
                if (data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD)
                    _this.occupancyCode = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD;
                _this.fireLossEstimatesData = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.LossEstimates_PAGE;
                _this.riskImprovementsData = data.LocationAssessment.LAWorkPageList[0].AssessmentLocationList[0].LocAssessment.RiskPage;
                _this.ccs.setRiskImprovementsData(_this.riskImprovementsData);
            }
        }, function (err) { return console.error(err); }, function () { return console.log('Risk Improvements - Done loading data.'); });
    };
    RIAddComponent.prototype.getRIMatrixList = function () {
        var _this = this;
        this.riService.getRIMatrix().subscribe(function (data) {
            _this.riMatrixList = data;
        }, function (err) { return console.error(err); }, function () { return console.log('RIMatrix - Done loading data.'); });
    };
    RIAddComponent.prototype.getTradeSectors = function () {
        var _this = this;
        this.riService.getTradeSectors().subscribe(function (data) { _this.tradeSectors = data.filter(function (item) { return item.LOB == "CP"; }); }, function (err) { return console.error(err); }, function () { return console.log('Trade sectors - Done loading data.'); });
    };
    RIAddComponent.prototype.getRIStatusList = function () {
        var _this = this;
        this.riService.getRIStatusList().subscribe(function (data) { _this.statuses = data; }, function (err) { return console.error(err); }, function () { return console.log('Status - Done loading data.'); });
    };
    RIAddComponent.prototype.getCategories = function () {
        var _this = this;
        this.riService.getCategories().subscribe(function (data) { _this.categories = data; }, function (err) { return console.error(err); }, function () { return console.log('Categories - Done loading data.'); });
    };
    RIAddComponent.prototype.getIntendedActions = function () {
        var _this = this;
        this.riService.getIntendedActions().subscribe(function (data) { _this.intendedActions = data; }, function (err) { return console.error(err); }, function () { return console.log('Intended Actions - Done loading data.'); });
    };
    RIAddComponent.prototype.getTargetCompletionTimeValues = function () {
        var _this = this;
        this.riService.getTargetCompletionTimeValues().subscribe(function (data) { _this.targetCompletionTimeValues = data; }, function (err) { return console.error(err); }, function () { return console.log('Target Completion Time Values - Done loading data.'); });
    };
    RIAddComponent.prototype.getHazardCategories = function () {
        var _this = this;
        this.hazardsService.getCategoryOccupancyDropdownData().subscribe(function (data) {
            if (_this.occupancyCode)
                _this.hazardCategories = data.filter(function (item) { return item.OCCUPANCY_CD == _this.occupancyCode; });
        }, function (err) { return console.error(err); }, function () { return _this.getHazardMainTypes(); });
    };
    RIAddComponent.prototype.getHazardMainTypes = function () {
        var _this = this;
        this.hazardsService.getMainTypeDropdownData().subscribe(function (data) {
            _this.hazardMainTypes = data;
        }, function (err) { return console.error(err); }, function () { return _this.getHazardTypes(); });
    };
    RIAddComponent.prototype.getHazardTypes = function () {
        var _this = this;
        this.hazardsService.getTypeDropdownData().subscribe(function (data) {
            _this.hazardTypes = data;
        }, function (err) { return console.error(err); }, function () { return console.log("Hazard Types for RI - Done loading data."); });
    };
    RIAddComponent.prototype.setHazardsSummaryData = function (data) {
        var _this = this;
        this.hazardsData = data.hazards;
        var _loop_1 = function(i) {
            if (this_1.hazardMainTypes && this_1.hazardMainTypes.length > 0) {
                var hazardMainType = this_1.hazardMainTypes.filter(function (item) { return item.Code == _this.hazardsData[i].HAZARD_MAIN_TYPE_CD; });
                this_1.hazardsData[i].HAZARD_MAIN_TYPE_Desc = hazardMainType.length > 0 ? hazardMainType[0].Description : "";
            }
            if (this_1.hazardTypes && this_1.hazardTypes.length > 0) {
                var hazardType = this_1.hazardTypes.filter(function (item) { return item.Code == _this.hazardsData[i].HAZARD_TYPE_CD; });
                this_1.hazardsData[i].HAZARD_TYPE_Desc = hazardType.length > 0 ? hazardType[0].Description : "";
            }
            if (this_1.hazardCategories && this_1.hazardCategories.length > 0) {
                var hazardCategory = this_1.hazardCategories.filter(function (item) { return item.ELEMENT_CD == _this.hazardsData[i].HAZARD_CATEGORY_CD; });
                this_1.hazardsData[i].HAZARD_CATEGORY_Desc = hazardCategory.length > 0 ? hazardCategory[0].Description : "";
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.hazardsData.length; i++) {
            _loop_1(i);
        }
    };
    RIAddComponent.prototype.getMainTypes = function () {
        var _this = this;
        this.riService.getMainTypes().subscribe(function (data) { _this.mainTypes = data; }, function (err) { return console.error(err); }, function () { return console.log('Main Types - Done loading data.'); });
    };
    RIAddComponent.prototype.getTypes = function () {
        var uniqueRecTypes = [];
        this.types = [];
        this.typeValue = 'Please Select';
        this.subTypes = [];
        this.subTypeValue = 'Please Select';
        for (var i = 0; i < this.riMatrixList.length; i++) {
            if (this.riMatrixList[i].TradeSectorOrOccupancy == this.predominantTradeSector && uniqueRecTypes.indexOf(this.riMatrixList[i].RecType) === -1 && this.riMatrixList[i].RecMainTypeCode == this.newRiskImp.RISK_MAINTYPE_CD) {
                this.types.push(this.riMatrixList[i]);
                this.uniqueTypes.push(this.riMatrixList[i]);
                uniqueRecTypes.push(this.riMatrixList[i].RecType);
            }
        }
    };
    RIAddComponent.prototype.getSubTypes = function () {
        var _this = this;
        this.subTypes = [];
        this.subTypeValue = 'Please Select';
        this.subTypes = this.riMatrixList.filter(function (item) { return item.RecMainTypeCode == _this.newRiskImp.RISK_MAINTYPE_CD &&
            item.RecTypeCode == _this.newRiskImp.RISK_TYPE_CD &&
            item.TradeSectorOrOccupancy == _this.predominantTradeSector; });
    };
    RIAddComponent.prototype.filterMainType = function (searchValue) {
        var result = this.mainTypes.filter(function (item) { return item.RILLRCode == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterType = function (searchValue) {
        var result = this.types.filter(function (item) { return item.RecTypeCode == searchValue; });
        return result.length > 0 ? result[0].RecType : '';
    };
    RIAddComponent.prototype.filterSubType = function (searchValue) {
        var result = this.subTypes.filter(function (item) { return item.RecSubTypeCode == searchValue; });
        return result.length > 0 ? result[0].RecSubType : '';
    };
    RIAddComponent.prototype.filterStatusByCodes = function (searchValue) {
        var result = this.statuses.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterIntendedAction = function (searchValue) {
        var result = this.intendedActions.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterCompTimeByCode = function (searchValue) {
        var result = this.targetCompletionTimeValues.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterCategory = function (searchValue) {
        var result = this.categories.filter(function (item) { return item.Code == searchValue; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterTradeSectorByCode = function (occupancyCode) {
        var result = this.tradeSectors.filter(function (item) { return item.Code == occupancyCode; });
        return result.length > 0 ? result[0].Description : '';
    };
    RIAddComponent.prototype.filterOnMainType = function (mainTypeObj) {
        this.newRiskImp.RISK_MAINTYPE_CD = mainTypeObj.RILLRCode;
        this.getTypes();
        if (mainTypeObj.Description == "Physical Protection" || mainTypeObj.Description == "NATCAT" || mainTypeObj.Description == "Human Element") {
            this.checkMainType = true;
        }
        else {
            this.checkMainType = false;
        }
    };
    RIAddComponent.prototype.filterOnType = function (typeObj) {
        this.newRiskImp.RISK_TYPE_CD = typeObj.RecTypeCode;
        this.getSubTypes();
    };
    RIAddComponent.prototype.filterOnSubType = function (subTypeObj) {
        this.newRiskImp.RISK_SUBTYPE_CD = subTypeObj.RecSubTypeCode;
    };
    RIAddComponent.prototype.filterOnCategory = function (catObj) {
        this.newRiskImp.RISK_CATEGORY_CD = catObj.Code;
    };
    RIAddComponent.prototype.filterOnIntAct = function (actObj) {
        this.newRiskImp.INTENDED_ACTION_CD = actObj.Code;
    };
    RIAddComponent.prototype.filterTargetComp = function (compObj) {
        this.newRiskImp.TARGET_COMPLETION_TIME_CD = compObj.Code;
    };
    RIAddComponent.prototype.filterOnStatus = function (statusObj) {
        this.newRiskImp.RISK_STATUS_CD = statusObj.Code;
    };
    RIAddComponent.prototype.setTargetToTodaysDate = function (testData, args) {
        testData.showTargetDatePicker = !testData.showTargetDatePicker;
        testData.TARGET_COMPLETION_DT = args;
    };
    RIAddComponent.prototype.clearTargetDate = function (testData) {
        testData.showTargetDatePicker = !testData.showTargetDatePicker;
        testData.TARGET_COMPLETION_DT = null;
    };
    RIAddComponent.prototype.setTargetDate = function (date) {
        if (date == '') {
            date = null;
        }
        else {
            return date;
        }
    };
    RIAddComponent.prototype.setActualToTodaysDate = function (testData, args) {
        testData.showActualDatePicker = !testData.showActualDatePicker;
        testData.COMPLETION_DT = args;
    };
    RIAddComponent.prototype.clearActualDate = function (testData) {
        testData.showActualDatePicker = !testData.showActualDatePicker;
        testData.COMPLETION_DT = null;
    };
    RIAddComponent.prototype.setActualDate = function (date) {
        if (date == '') {
            date = null;
        }
        else {
            return date;
        }
    };
    RIAddComponent.prototype.getStandardRI = function () {
        var _this = this;
        this.riService.getStandardRI().subscribe(function (data) {
            _this.standardRiData = data;
            _this.actualRiData = data;
            _this.selectedStdRi = data[0];
        }, function (err) { return console.error(err); }, function () { return console.log('Standard RI - Done loading data.'); });
    };
    RIAddComponent.prototype.generateRINumber = function (surveyCompletedDate, riList) {
        var riNumber = null;
        if (surveyCompletedDate) {
            var formatedSCDateInitials = this.datePipe.transform(surveyCompletedDate, 'yy-MM');
            if (riList && riList.length > 0) {
                var maxPointer = 0;
                for (var i = 0; i < riList.length; i++) {
                    if (riList[i].RI_NO) {
                        var cntOffset = this.getRICountOffset(riList[i].RI_NO);
                        if (cntOffset > maxPointer)
                            maxPointer = cntOffset;
                    }
                }
                riNumber = formatedSCDateInitials + '-' + this.paddy((maxPointer + 1), 3, '0');
            }
            else {
                riNumber = formatedSCDateInitials + '-' + this.paddy(1, 3, '0');
            }
        }
        return riNumber;
    };
    RIAddComponent.prototype.paddy = function (n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    };
    RIAddComponent.prototype.getIndexOf = function (arr, val, prop) {
        var l = arr.length, k = 0;
        for (k = 0; k < l; k = k + 1) {
            if (arr[k][prop] === val) {
                return k;
            }
        }
        return -1;
    };
    RIAddComponent.prototype.addRiskImprovement = function () {
        for (var j = 0; j < this.hazardsData.length; j++) {
            var hazardIndex = this.newRiskImp.LINKED_HAZARDS.indexOf(this.hazardsData[j].HAZARD_RANDOM_ID_TOLINK);
            if (this.hazardsData[j].checked && hazardIndex == -1) {
                this.newRiskImp.LINKED_HAZARDS.push(this.hazardsData[j].HAZARD_RANDOM_ID_TOLINK);
            }
            if (!this.hazardsData[j].checked && hazardIndex > -1) {
                this.newRiskImp.LINKED_HAZARDS.splice(hazardIndex, 1);
            }
        }
        var updatedRI = JSON.parse(JSON.stringify(this.newRiskImp));
        if (this.title == 'Add') {
            this.riskImprovementsData.RiskImprvmnt_PAGES.push(updatedRI);
            this.ccs.setRiskImprovementsData(this.riskImprovementsData);
        }
        else {
            var eleIndex = this.getIndexOf(this.riskImprovementsData.RiskImprvmnt_PAGES, updatedRI.RI_NO, 'RI_NO');
            if (eleIndex >= 0) {
                this.riskImprovementsData.RiskImprvmnt_PAGES[eleIndex] = updatedRI;
                this.ccs.setRiskImprovementsData(this.riskImprovementsData);
            }
        }
        this.modal.hide();
    };
    RIAddComponent.prototype.disableSubmit = function () {
        return !this.newRiskImp.RI_NO || !this.newRiskImp.RISK_IMPRVMNT_NM;
    };
    RIAddComponent.prototype.getRICountOffset = function (riNumber) {
        if (riNumber.indexOf('-') > 0) {
            var cntOffsetArr = riNumber.split('-');
            return parseInt(cntOffsetArr[cntOffsetArr.length - 1]);
        }
        else {
            return 0;
        }
    };
    RIAddComponent.prototype.lossEstimateHandler = function (lossEstimateType) {
        if (lossEstimateType == 'Link' && this.fireLossEstimatesData) {
            this.fireLossEstimates = [];
            if (this.fireLossEstimatesData.LossEstimatesMAS_PAGE && parseInt(this.fireLossEstimatesData.LossEstimatesMAS_PAGE.TOTAL_AM) && parseInt(this.fireLossEstimatesData.LossEstimatesMAS_PAGE.TOTAL_AM) > 0) {
                if (!this.fireLossEstimatesData.LossEstimatesMAS_PAGE.leType)
                    this.fireLossEstimatesData.LossEstimatesMAS_PAGE["leType"] = "MAS";
                this.fireLossEstimates.push(this.fireLossEstimatesData.LossEstimatesMAS_PAGE);
            }
            if (this.fireLossEstimatesData.LossEstimatesPML_PAGE && parseInt(this.fireLossEstimatesData.LossEstimatesPML_PAGE.TOTAL_AM) && parseInt(this.fireLossEstimatesData.LossEstimatesPML_PAGE.TOTAL_AM) > 0) {
                if (!this.fireLossEstimatesData.LossEstimatesPML_PAGE.leType)
                    this.fireLossEstimatesData.LossEstimatesPML_PAGE["leType"] = "PML";
                this.fireLossEstimates.push(this.fireLossEstimatesData.LossEstimatesPML_PAGE);
            }
            if (this.fireLossEstimatesData.LossEstimatesMFL_PAGE && parseInt(this.fireLossEstimatesData.LossEstimatesMFL_PAGE.TOTAL_AM) && parseInt(this.fireLossEstimatesData.LossEstimatesMFL_PAGE.TOTAL_AM) > 0) {
                if (!this.fireLossEstimatesData.LossEstimatesMFL_PAGE.leType)
                    this.fireLossEstimatesData.LossEstimatesMFL_PAGE["leType"] = "MFL";
                this.fireLossEstimates.push(this.fireLossEstimatesData.LossEstimatesMFL_PAGE);
            }
            if (this.fireLossEstimatesData.LossEstimatesNLE_PAGE && parseInt(this.fireLossEstimatesData.LossEstimatesNLE_PAGE.TOTAL_AM) && parseInt(this.fireLossEstimatesData.LossEstimatesNLE_PAGE.TOTAL_AM) > 0) {
                if (!this.fireLossEstimatesData.LossEstimatesNLE_PAGE.leType)
                    this.fireLossEstimatesData.LossEstimatesNLE_PAGE["leType"] = "NLE";
                this.fireLossEstimates.push(this.fireLossEstimatesData.LossEstimatesNLE_PAGE);
            }
        }
    };
    RIAddComponent.prototype.fireLEHandler = function () {
        if (this.selectedFireLEIndex != -1) {
            this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM = this.fireLossEstimates[this.selectedFireLEIndex].TOTAL_PRPTY_DMG_AM;
            this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM = this.fireLossEstimates[this.selectedFireLEIndex].TOTAL_BIZ_INTRPT_AM;
            this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM = this.fireLossEstimates[this.selectedFireLEIndex].TOTAL_AM;
        }
    };
    RIAddComponent.prototype.deLinkLE = function () {
        this.selectedFireLEIndex = -1;
        this.newRiskImp.PRPTY_LOSS_EST_BEFORE_RI_AM = '';
        this.newRiskImp.BIZ_INTRPT_LSS_EST_BFR_RI_AM = '';
        this.newRiskImp.TOT_LOSS_EST_BFR_RI_AM = '';
        this.newRiskImp.TOT_LOSS_EST_AFTER_RI_AM = '';
        this.newRiskImp.EST_COST_TO_COMPLETE_AM = '';
        this.newRiskImp.BENEFIT_RATIO_RT = "0.00";
        this.newRiskImp.LOSS_REDUCTION_LIKELIHOOD_CD = this.lossReductions[0].Description;
    };
    RIAddComponent.prototype.selectRiFrom = function () {
        this.mainTypeValue = this.selectedStdRi.RecMainType;
        this.typeValue = this.selectedStdRi.RecType;
        this.subTypeValue = this.selectedStdRi.RecSubType;
        this.newRiskImp.RISK_IMPRVMNT_NM = this.selectedStdRi.title;
        this.newRiskImp.RICommentList[0].PrimaryLanguage = '<p>' + this.selectedStdRi.body + '</p>';
        this.newRiskImp.RICommentList[1].PrimaryLanguage = '<p>' + this.selectedStdRi.details + '</p>';
    };
    RIAddComponent.prototype.riFilterChange = function () {
        this.standardRiData = [];
        if (this.riFilter) {
            if (this.riFilter == "") {
                this.standardRiData = this.actualRiData;
            }
            if (this.actualRiData) {
                for (var i = 0; i < this.actualRiData.length; i++) {
                    for (var key in this.actualRiData[i]) {
                        if (this.riFilter) {
                            if (this.actualRiData[i][key].indexOf(this.riFilter) != -1) {
                                this.standardRiData.push(this.actualRiData[i]);
                                break;
                            }
                        }
                    }
                }
            }
        }
        else {
            this.standardRiData = this.actualRiData;
        }
        this.selectedStdRi = this.standardRiData[0];
        this.selectRiFrom();
    };
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', core_1.ElementRef)
    ], RIAddComponent.prototype, "modal", void 0);
    RIAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ri-add-modal',
            templateUrl: 'ri-add.component.html',
            providers: [risk_improvements_service_1.RiskImprovementsService, ri_add_service_1.RIAddService, localStorageService_1.LocalStorageService, validationMessages_1.ValidationMessages, common_1.DatePipe, hazards_service_1.HazardsService]
        }), 
        __metadata('design:paramtypes', [risk_improvements_service_1.RiskImprovementsService, validationMessages_1.ValidationMessages, ri_add_service_1.RIAddService, localStorageService_1.LocalStorageService, common_1.DatePipe, componentCommunicationService_1.ComponentCommunicationService, hazards_service_1.HazardsService])
    ], RIAddComponent);
    return RIAddComponent;
}());
exports.RIAddComponent = RIAddComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yaXNrLWltcHJvdmVtZW50cy9yaS1hZGQvcmktYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBRXpFLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRzNDLDBDQUF3Qyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ2hGLCtCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELDhDQUE4Qyw0Q0FBNEMsQ0FBQyxDQUFBO0FBRTNGLG9DQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLG1DQUFtQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JFLGdDQUErQixzQ0FBc0MsQ0FBQyxDQUFBO0FBU3RFO0lBc0tFLHdCQUFvQixTQUFrQyxFQUFVLHNCQUEwQyxFQUFVLFlBQTBCLEVBQVUsbUJBQXdDLEVBQVUsUUFBa0IsRUFBUyxHQUFrQyxFQUFVLGNBQThCO1FBQTNSLGNBQVMsR0FBVCxTQUFTLENBQXlCO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFvQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5LL1MscUJBQWdCLEdBQVcsUUFBUSxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsUUFBUSxDQUFDO1FBQ2pDLDRCQUF1QixHQUFXLEVBQUUsQ0FBQztRQUNyQyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBVSxFQUFFLENBQUM7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LENBQUMsQ0FBQyxDQUFDLENBQ3hELENBQUM7Z0NBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUMvQyxLQUFLLENBQUM7NEJBQ1IsQ0FBQzt3QkFDSCxDQUFDO29CQUVILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQTcxQkM7UUFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7aURBQUE7SUEzS3ZCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1EQUF1QixFQUFFLDZCQUFZLEVBQUUseUNBQW1CLEVBQUUsdUNBQWtCLEVBQUUsaUJBQVEsRUFBRSxnQ0FBYyxDQUFDO1NBQ3RILENBQUM7O3NCQUFBO0lBb2dDRixxQkFBQztBQUFELENBbGdDQSxBQWtnQ0MsSUFEQTtBQWpnQ1ksc0JBQWMsaUJBaWdDMUIsQ0FBQSIsImZpbGUiOiJhcHAvcmlzay1pbXByb3ZlbWVudHMvcmktYWRkL3JpLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJpc2tJbXByb3ZlbWVudHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvcmlzay1pbXByb3ZlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJJQWRkU2VydmljZSB9IGZyb20gJy4vcmktYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xvY2FsU3RvcmFnZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuLi8uLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgSGF6YXJkc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9oYXphcmRzL3NoYXJlZC9oYXphcmRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JpLWFkZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdyaS1hZGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1Jpc2tJbXByb3ZlbWVudHNTZXJ2aWNlLCBSSUFkZFNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFZhbGlkYXRpb25NZXNzYWdlcywgRGF0ZVBpcGUsIEhhemFyZHNTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJJQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHNpdGU6IGFueTtcclxuICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcbiAgbG9zc0VzdGltYXRlVHlwZTogc3RyaW5nID0gJ01hbnVhbCc7XHJcbiAgbmFycmF0aXZlVHlwZTogc3RyaW5nID0gJ01hbnVhbCc7XHJcbiAgbmFycmF0aXZlQ2xpZW50UmVzcG9uc2U6IHN0cmluZyA9ICcnO1xyXG4gIG1haW5UeXBlczogYW55W10gPSBbXTtcclxuICB0eXBlczogYW55W10gPSBbXTtcclxuICBzdWJUeXBlczogYW55W10gPSBbXTtcclxuICB1bmlxdWVUeXBlczogYW55W10gPSBbXTtcclxuICBjYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xyXG4gIHN0YXR1c2VzOiBhbnlbXSA9IFtdO1xyXG4gIGludGVuZGVkQWN0aW9uczogYW55W10gPSBbXTtcclxuICB0YXJnZXRDb21wbGV0aW9uVGltZVZhbHVlczogYW55W10gPSBbXTtcclxuICBtYWluVHlwZVZhbHVlOiBzdHJpbmc7XHJcbiAgdHlwZVZhbHVlOiBzdHJpbmc7XHJcbiAgc3ViVHlwZVZhbHVlOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnlWYWx1ZTogc3RyaW5nO1xyXG4gIGludGVuZGVkQWN0aW9uVmFsdWU6IHN0cmluZztcclxuICBzdGF0dXNWYWx1ZTogc3RyaW5nO1xyXG4gIHRhcmdldENvbXBsZXRpb25UaW1lVmFsdWU6IHN0cmluZztcclxuICAvL2FnZVZhbHVlOiBzdHJpbmc7XHJcbiAgcmVjRm9sbG93VXBWYWx1ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3RhbmRhcmRSaURhdGE6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBhY3R1YWxSaURhdGE6YW55W10gPSBbXTtcclxuICBwcml2YXRlIHNlbGVjdGVkU3RkUmkgOiBhbnk7XHJcbiAgcHJpdmF0ZSB2aWV3TWV0YURhdGE6IGFueTtcclxuICBwcml2YXRlIG5hdGNhdFRhYkluZGV4OiBudW1iZXI7XHJcbiAgLypuZXdSaXNrSW1wOiBhbnkgPSB7XHJcbiAgICAnUklfTk8nOiAnJyxcclxuICAgICdSSVNLX0lNUFJWTU5UX05NJzogJycsXHJcbiAgICAnUklTS19NQUlOVFlQRV9DRCc6ICcnLFxyXG4gICAgJ1JJU0tfVFlQRV9DRCc6ICcnLFxyXG4gICAgJ1JJU0tfU1VCVFlQRV9DRCc6ICcnLFxyXG4gICAgJ1JJU0tfQ0FURUdPUllfQ0QnOiAnJyxcclxuICAgICdJTlRFTkRFRF9BQ1RJT05fQ0QnOiAnJyxcclxuICAgICdUQVJHRVRfQ09NUExFVElPTl9USU1FX0NEJzogJycsXHJcbiAgICAnVEFSR0VUX0NPTVBMRVRJT05fRFQnOiAnJyxcclxuICAgICdDT01QTEVUSU9OX0RUJzogJycsXHJcbiAgICAnUklTS19PVVRTVEFORElOR19DRCc6ICcnLFxyXG4gICAgJ1JJU0tfU1RBVFVTX0NEJzogJycsXHJcbiAgICAnTk9OX0FJR19TT1VSQ0VfSU4nOiAnJyxcclxuICAgICdTSE9XX1BPUlRBTF9JTic6ICcnLFxyXG4gICAgJ0xBUkdFX0xPU1NfUE9URU5USUFMX0lOJzogJycsXHJcbiAgICAnUFJQVFlfTE9TU19FU1RfQkVGT1JFX1JJX0FNJzogJycsXHJcbiAgICAnQklaX0lOVFJQVF9MU1NfRVNUX0JGUl9SSV9BTSc6ICcnLFxyXG4gICAgJ1RPVF9MT1NTX0VTVF9CRlJfUklfQU0nOiAnJyxcclxuICAgICdUT1RfTE9TU19FU1RfQUZURVJfUklfQU0nOiAnJyxcclxuICAgICdFU1RfQ09TVF9UT19DT01QTEVURV9BTSc6ICcnLFxyXG4gICAgJ0JFTkVGSVRfUkFUSU9fUlQnOiAnJyxcclxuICAgICdMT1NTX1JFRFVDVElPTl9MSUtFTElIT09EX0NEJzogJycsXHJcbiAgICAnU2hvd0luTEVSZXBvcnQnOiAnJyxcclxuICAgICdTaG93RXN0aW1hdGVkQ1RDJzogJycsXHJcbiAgICAnUHJpbWFyeUxhbmd1YWdlJzogJycsXHJcbiAgICAnaXNEZWxldGFibGUnOiB0cnVlICAgICAgICAgICAgICAgLy8gUkkgYWRkZWQgZnJvbSBvZmZsaW5lIHRvb2wgY2FuIGJlIGRlbGV0ZWQuIFxyXG4gIH07Ki9cclxuICBuZXdSaXNrSW1wOiBhbnkgPSB7XHJcbiAgICBcIkFSRUFfSU5WT0xWRURfUVRcIjonJyxcclxuICAgIFwiQkVORUZJVF9SQVRJT19SVFwiOicnLFxyXG4gICAgXCJDYXRlZ29yeVwiOicnLFxyXG4gICAgXCJDT05UQUNUX0lEXCI6JycsXHJcbiAgICBcIkhpZGVTTEVpbkxFUmVwb3J0X0lOXCI6JycsXHJcbiAgICBcIklOVEVOREVEX0FDVElPTl9DRFwiOicnLFxyXG4gICAgXCJJbnRlbmRlZEFjdGlvblwiOicnLFxyXG4gICAgXCJMQVJHRV9MT1NTX1BPVEVOVElBTF9JTlwiOicnLFxyXG4gICAgXCJMT0NBVElPTl9BU1NFU1NNRU5UX0lEXCI6JycsXHJcbiAgICBcIkxPU1NfUkVEVUNUSU9OX0xJS0VMSUhPT0RfQ0RcIjonJyxcclxuICAgIFwiTk9OX0FJR19TT1VSQ0VfSU5cIjonJyxcclxuICAgIFwiUFJFVl9MT0FEX1JFQ19JTlwiOicnLFxyXG4gICAgXCJweE9iakNsYXNzXCI6JycsXHJcbiAgICBcIlJlY0ZvbGxvd1VwXCI6JycsXHJcbiAgICBcIlJJX05PXCI6JycsXHJcbiAgICBcIlJJU0tfQ0FURUdPUllfQ0RcIjonJyxcclxuICAgIFwiUklTS19JTVBSVk1OVF9JRFwiOicnLFxyXG4gICAgXCJSSVNLX0lNUFJWTU5UX05NXCI6JycsXHJcbiAgICBcIlJJU0tfTUFJTlRZUEVfQ0RcIjonJyxcclxuICAgIFwiUklTS19PVVRTVEFORElOR19DRFwiOicnLFxyXG4gICAgXCJSSVNLX1NUQVRVU19DRFwiOicnLFxyXG4gICAgXCJSSVNLX1NVQlRZUEVfQ0RcIjonJyxcclxuICAgIFwiUklTS19UWVBFX0NEXCI6JycsXHJcbiAgICBcIlJpc2tvdXRubVwiOicnLFxyXG4gICAgXCJTSE9XX1BPUlRBTF9JTlwiOicnLFxyXG4gICAgXCJTaG93RXN0aW1hdGVkQ1RDXCI6JycsXHJcbiAgICBcIlNob3dJbkFjY1JldlJlcG9ydFwiOicnLFxyXG4gICAgXCJTaG93SW5MRVJlcG9ydFwiOicnLFxyXG4gICAgXCJTdGF0dXNcIjonJyxcclxuICAgIFwiU3ViVHlwZVwiOicnLFxyXG4gICAgXCJUQVJHRVRfQ09NUExFVElPTl9USU1FX0NEXCI6JycsXHJcbiAgICBcIlRPVF9MT1NTX0VTVF9CRlJfUklfQU1cIjonJyxcclxuICAgIFwiVHlwZVwiOicnLFxyXG4gICAgXCJWRVJTSU9OX05PXCI6JycsXHJcbiAgICBcIlJJQ29tbWVudExpc3RcIjpbXHJcbiAgICAgIHtcclxuICAgICAgICBNZW1vX0ZpZWxkX3VzZWRzcGFjZTogXCIgXCIsXHJcbiAgICAgICAgUHJpbWFyeUxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJSSSBTdW1tYXJ5XCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiQk9EWVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBNZW1vX0ZpZWxkX3VzZWRzcGFjZTogXCIgXCIsXHJcbiAgICAgICAgUHJpbWFyeUxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJSSSBEZXRhaWxzXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiREVUQUlMXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIE1lbW9fRmllbGRfdXNlZHNwYWNlOiBcIiBcIixcclxuICAgICAgICBQcmltYXJ5TGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJDbGllbnQgRXhpdCBDb25mZXJlbmNlIENvbW1lbnRzXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiRVhJVFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBEaXNwbGF5RmxhZzpcImZhbHNlXCIsXHJcbiAgICAgICAgTWVtb19GaWVsZF91c2Vkc3BhY2U6IFwiIFwiLFxyXG4gICAgICAgIFByaW1hcnlMYW5ndWFnZTogXCJcIixcclxuICAgICAgICBTRUNUSU9OX05NOiBcIkNsaWVudCBSZXNwb25zZSAoZnJvbSBFTkdhZ2UpXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiQUNUSU9OXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIE1lbW9fRmllbGRfdXNlZHNwYWNlOiBcIiBcIixcclxuICAgICAgICBQcmltYXJ5TGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJFbmdpbmVlcmluZyBDb21tZW50cyAoSW50ZXJuYWwgJiBPbnNjcmVlbiBvbmx5KVwiLFxyXG4gICAgICAgIFNlY29uZGFyeUNvbW1lbnRzOiBcImZhbHNlXCIsXHJcbiAgICAgICAgcHhPYmpDbGFzczogXCJhaWctRlctR1JBU1AtRGF0YS1UUklTS19DT01NRU5UU19CTE9CXCIsXHJcbiAgICAgICAgcHlOb3RlOiBcIkVOR1wiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImlzRGVsZXRhYmxlXCI6IHRydWUsICAgICAgICAgICAgICAgLy8gUkkgYWRkZWQgZnJvbSBvZmZsaW5lIHRvb2wgY2FuIGJlIGRlbGV0ZWQuXHJcbiAgICBcIlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTVwiOicnLFxyXG4gICAgXCJCSVpfSU5UUlBUX0xTU19FU1RfQkZSX1JJX0FNXCI6JycsXHJcbiAgICBcIlRPVF9MT1NTX0VTVF9BRlRFUl9SSV9BTVwiOicnLFxyXG4gICAgXCJFU1RfQ09TVF9UT19DT01QTEVURV9BTVwiOicnICAgXHJcbiAgfTtcclxuICByaXNrSW1wcm92ZW1lbnRzRGF0YTogYW55O1xyXG4gIHByZWRvbWluYW50VHJhZGVTZWN0b3I6IHN0cmluZztcclxuICB0cmFkZVNlY3RvcnM6IGFueVtdID0gW107XHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzT2JqZWN0OiB7fTtcclxuICB2YWxpZGF0aW9uV2Fybk9iajoge307XHJcbiAgcmlNYXRyaXhMaXN0OiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgbG9zc1JlZHVjdGlvbnM6IGFueVtdID0gW3snY29kZSc6JzAnLCdEZXNjcmlwdGlvbic6J0xvdyd9LCB7J2NvZGUnOicxJywnRGVzY3JpcHRpb24nOidNb2RlcmF0ZSd9LCB7J2NvZGUnOicyJywnRGVzY3JpcHRpb24nOidTaWduaWZpY2FudCd9XTtcclxuICBwcml2YXRlIGNoZWNrTWFpblR5cGU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzbGVWYWx1ZTogYm9vbGVhbjtcclxuICBwcml2YXRlIGZpcmVMb3NzRXN0aW1hdGVzRGF0YTogT2JqZWN0O1xyXG4gIHByaXZhdGUgZmlyZUxvc3NFc3RpbWF0ZXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEZpcmVMRUluZGV4OiBOdW1iZXIgPSAtMTtcclxuICBwcml2YXRlIGxpbmtlZEZpcmVMRTogT2JqZWN0O1xyXG4gIHByaXZhdGUgaGF6YXJkTWFpblR5cGVzOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgaGF6YXJkVHlwZXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBoYXphcmRDYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgb2NjdXBhbmN5Q29kZSA6IGFueTtcclxuICBwcml2YXRlIGhhemFyZHNEYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmFuZG9tSURHZW5lcmF0b3JJbnRlcnZhbDogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCdsZ01vZGFsJykgbW9kYWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmlTZXJ2aWNlOiBSaXNrSW1wcm92ZW1lbnRzU2VydmljZSwgcHJpdmF0ZSBfdmFsaWRhdGlvbk1lc3NhZ2VDb21wOiBWYWxpZGF0aW9uTWVzc2FnZXMsIHByaXZhdGUgcmlBZGRTZXJ2aWNlOiBSSUFkZFNlcnZpY2UsIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsIHB1YmxpYyBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGhhemFyZHNTZXJ2aWNlOiBIYXphcmRzU2VydmljZSkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UgPSByaVNlcnZpY2U7XHJcbiAgICB0aGlzLl92YWxpZGF0aW9uTWVzc2FnZUNvbXAgPSBfdmFsaWRhdGlvbk1lc3NhZ2VDb21wO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzT2JqZWN0ID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wLmdldE1lc3NhZ2VzKCdlcnJvcicpOyAvLyBmZXRjaGluZyBvYmplY3QgY29udGFpbmluZyB0aGUgdmFsaWRhdGlvbiBtZXNzYWdlcyBmcm9tIHZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICB0aGlzLnZhbGlkYXRpb25XYXJuT2JqID0gdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wLmdldE1lc3NhZ2VzKCd3YXJuaW5nJyk7XHJcbiAgICAvL3RoaXMuZ2V0VHJhZGVTZWN0b3JzKCk7XHJcbiAgICB0aGlzLmdldFJpc2tJbXByb3ZlbWVudHNMaXN0KCk7XHJcbiAgICB0aGlzLmdldE1haW5UeXBlcygpO1xyXG4gICAgdGhpcy5nZXRSSU1hdHJpeExpc3QoKTtcclxuICAgIC8vdGhpcy5nZXRUeXBlcygpO1xyXG4gICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICB0aGlzLmdldEludGVuZGVkQWN0aW9ucygpO1xyXG4gICAgdGhpcy5nZXRUYXJnZXRDb21wbGV0aW9uVGltZVZhbHVlcygpO1xyXG4gICAgdGhpcy5nZXRTdGFuZGFyZFJJKCk7XHJcbiAgICB0aGlzLmdldFJJU3RhdHVzTGlzdCgpO1xyXG4gICAgdGhpcy5nZXRIYXphcmRDYXRlZ29yaWVzKCk7XHJcbiAgICBsZXQgcmZzUGFyZW50SWQgPSB0aGlzLnNpdGUuUkZTX1BBUkVOVF9JRDtcclxuICAgIGxldCByZnNJZCA9IHRoaXMuc2l0ZS5SRlNfSUQ7XHJcbiAgICB0aGlzLmhhemFyZHNTZXJ2aWNlLmdldEhhemFyZHNEYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICAgIGlmKGRhdGEuaGF6YXJkcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21JREdlbmVyYXRvckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICBpZihjb3VudCA8IGRhdGEuaGF6YXJkcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgaWYoISgnSEFaQVJEX1JBTkRPTV9JRF9UT0xJTksnIGluIGRhdGEuaGF6YXJkc1tjb3VudF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB0aW1lc3RhbXBrZXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmhhemFyZHNbY291bnRdLkhBWkFSRF9SQU5ET01fSURfVE9MSU5LID0gdGltZXN0YW1wa2V5LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT0gZGF0YS5oYXphcmRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJhbmRvbUlER2VuZXJhdG9ySW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNjcy5zZXRIYXphcmRzRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2NzLnNldEhhemFyZHNEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiB7fVxyXG4gICAgKTtcclxuICAgIHRoaXMuY2NzLmdldEhhemFyZHNEYXRhKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0SGF6YXJkc1N1bW1hcnlEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICAvLzExLzIxLzIwMTYgRml4IGZvciBERTIzNVxyXG4gICAgLy8gdGhpcy5jY3MuZ2V0Umlza0ltcHJvdmVtZW50c0RhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAvLyAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEgPSBkYXRhO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tIGdldFJpc2tJbXByb3ZlbWVudHNEYXRhIGludm9rZWQgZnJvbSBSSSBBZGQgLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkTG9zc1JlZHVjdGlvbihsb3NzUmVkdWN0aW9uKXtcclxuICAgIHRoaXMubmV3Umlza0ltcC5MT1NTX1JFRFVDVElPTl9MSUtFTElIT09EX0NEID0gbG9zc1JlZHVjdGlvbi5jb2RlO1xyXG4gIH1cclxuXHJcbiAgc2xlQ2hhbmdlSGFuZGxlcihzbGVWYWx1ZSl7ICAgIFxyXG4gICAgaWYoc2xlVmFsdWUpe1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuTEFSR0VfTE9TU19QT1RFTlRJQUxfSU4gPSBcIlllc1wiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5MQVJHRV9MT1NTX1BPVEVOVElBTF9JTiA9IFwiTm9cIjtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZURhdGEoKXsgICAgXHJcbiAgICBsZXQgcmluUERMRUJlZm9yZUlucHV0ID0gdGhpcy5uZXdSaXNrSW1wLlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTSB8fCAwOyBcclxuICAgIGxldCByaW5CSUxFQmVmb3JlSW5wdXQgPSB0aGlzLm5ld1Jpc2tJbXAuQklaX0lOVFJQVF9MU1NfRVNUX0JGUl9SSV9BTSB8fCAwO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTSA9IE1hdGgucm91bmQocmluUERMRUJlZm9yZUlucHV0KTtcclxuICAgIHRoaXMubmV3Umlza0ltcC5CSVpfSU5UUlBUX0xTU19FU1RfQkZSX1JJX0FNID0gTWF0aC5yb3VuZChyaW5CSUxFQmVmb3JlSW5wdXQpOyAgICBcclxuXHJcbiAgICBsZXQgdG90YWxMRUFmdGVyID0gdGhpcy5uZXdSaXNrSW1wLlRPVF9MT1NTX0VTVF9BRlRFUl9SSV9BTSB8fCAwO1xyXG4gICAgbGV0IGVzdGltYXRlZENvc3QgPSB0aGlzLm5ld1Jpc2tJbXAuRVNUX0NPU1RfVE9fQ09NUExFVEVfQU0gfHwgMDtcclxuICAgIHRoaXMubmV3Umlza0ltcC5UT1RfTE9TU19FU1RfQUZURVJfUklfQU0gPSBNYXRoLnJvdW5kKHRvdGFsTEVBZnRlcik7IFxyXG4gICAgdGhpcy5uZXdSaXNrSW1wLkVTVF9DT1NUX1RPX0NPTVBMRVRFX0FNID0gTWF0aC5yb3VuZChlc3RpbWF0ZWRDb3N0KTtcclxuXHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuVE9UX0xPU1NfRVNUX0JGUl9SSV9BTSA9IHRoaXMubmV3Umlza0ltcC5QUlBUWV9MT1NTX0VTVF9CRUZPUkVfUklfQU0gKyB0aGlzLm5ld1Jpc2tJbXAuQklaX0lOVFJQVF9MU1NfRVNUX0JGUl9SSV9BTTtcclxuICAgIGlmKHRoaXMubmV3Umlza0ltcC5UT1RfTE9TU19FU1RfQUZURVJfUklfQU0gJiYgdGhpcy5uZXdSaXNrSW1wLkVTVF9DT1NUX1RPX0NPTVBMRVRFX0FNKXtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLkJFTkVGSVRfUkFUSU9fUlQgPSAodGhpcy5uZXdSaXNrSW1wLlRPVF9MT1NTX0VTVF9CRlJfUklfQU0gLSB0aGlzLm5ld1Jpc2tJbXAuVE9UX0xPU1NfRVNUX0FGVEVSX1JJX0FNKS90aGlzLm5ld1Jpc2tJbXAuRVNUX0NPU1RfVE9fQ09NUExFVEVfQU07XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5CRU5FRklUX1JBVElPX1JUID0gKHRoaXMubmV3Umlza0ltcC5CRU5FRklUX1JBVElPX1JUKS50b0ZpeGVkKDEpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLkJFTkVGSVRfUkFUSU9fUlQgPSBcIjAuMDBcIjtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICByZXNldFBvcHVwKCkge1xyXG4gICAgdGhpcy5tYWluVHlwZVZhbHVlID0gJ1BsZWFzZSBTZWxlY3QnO1xyXG4gICAgdGhpcy50eXBlVmFsdWUgPSAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICB0aGlzLnN1YlR5cGVWYWx1ZSA9ICdQbGVhc2UgU2VsZWN0JztcclxuICAgIHRoaXMuc3RhdHVzVmFsdWUgPSAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICB0aGlzLmludGVuZGVkQWN0aW9uVmFsdWUgPSAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICB0aGlzLmNhdGVnb3J5VmFsdWUgPSAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICB0aGlzLnRhcmdldENvbXBsZXRpb25UaW1lVmFsdWUgPSAnU2VsZWN0IFRpbWUnOyAvL0RFMTkzIC0gMTEvMTYvMjAxNlxyXG4gICAgdGhpcy50eXBlcyA9IFtdO1xyXG4gICAgdGhpcy5zdWJUeXBlcyA9IFtdO1xyXG4gICAgdGhpcy5zbGVWYWx1ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpcmVMRUluZGV4ID0gLTE7XHJcbiAgICB0aGlzLm5hcnJhdGl2ZVR5cGUgPSAnTWFudWFsJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5SSV9OTyA9ICcnO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfSU1QUlZNTlRfTk0gPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX01BSU5UWVBFX0NEID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19UWVBFX0NEID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19TVUJUWVBFX0NEID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19TVEFUVVNfQ0QgPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5JTlRFTkRFRF9BQ1RJT05fQ0QgPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX0NBVEVHT1JZX0NEID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuVEFSR0VUX0NPTVBMRVRJT05fVElNRV9DRCA9ICcnO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlNIT1dfUE9SVEFMX0lOID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuVEFSR0VUX0NPTVBMRVRJT05fRFQgPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5DT01QTEVUSU9OX0RUID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUFJQVFlfTE9TU19FU1RfQkVGT1JFX1JJX0FNID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuQklaX0lOVFJQVF9MU1NfRVNUX0JGUl9SSV9BTSA9ICcnO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlRPVF9MT1NTX0VTVF9CRlJfUklfQU0gPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5UT1RfTE9TU19FU1RfQUZURVJfUklfQU0gPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5FU1RfQ09TVF9UT19DT01QTEVURV9BTSA9ICcnO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlJJQ29tbWVudExpc3QgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBNZW1vX0ZpZWxkX3VzZWRzcGFjZTogXCIgXCIsXHJcbiAgICAgICAgUHJpbWFyeUxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJSSSBTdW1tYXJ5XCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiQk9EWVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBNZW1vX0ZpZWxkX3VzZWRzcGFjZTogXCIgXCIsXHJcbiAgICAgICAgUHJpbWFyeUxhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJSSSBEZXRhaWxzXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiREVUQUlMXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIE1lbW9fRmllbGRfdXNlZHNwYWNlOiBcIiBcIixcclxuICAgICAgICBQcmltYXJ5TGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJDbGllbnQgRXhpdCBDb25mZXJlbmNlIENvbW1lbnRzXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiRVhJVFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBEaXNwbGF5RmxhZzpcImZhbHNlXCIsXHJcbiAgICAgICAgTWVtb19GaWVsZF91c2Vkc3BhY2U6IFwiIFwiLFxyXG4gICAgICAgIFByaW1hcnlMYW5ndWFnZTogXCJcIixcclxuICAgICAgICBTRUNUSU9OX05NOiBcIkNsaWVudCBSZXNwb25zZSAoZnJvbSBFTkdhZ2UpXCIsXHJcbiAgICAgICAgU2Vjb25kYXJ5Q29tbWVudHM6IFwiZmFsc2VcIixcclxuICAgICAgICBweE9iakNsYXNzOiBcImFpZy1GVy1HUkFTUC1EYXRhLVRSSVNLX0NPTU1FTlRTX0JMT0JcIixcclxuICAgICAgICBweU5vdGU6IFwiQUNUSU9OXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIE1lbW9fRmllbGRfdXNlZHNwYWNlOiBcIiBcIixcclxuICAgICAgICBQcmltYXJ5TGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgU0VDVElPTl9OTTogXCJFbmdpbmVlcmluZyBDb21tZW50cyAoSW50ZXJuYWwgJiBPbnNjcmVlbiBvbmx5KVwiLFxyXG4gICAgICAgIFNlY29uZGFyeUNvbW1lbnRzOiBcImZhbHNlXCIsXHJcbiAgICAgICAgcHhPYmpDbGFzczogXCJhaWctRlctR1JBU1AtRGF0YS1UUklTS19DT01NRU5UU19CTE9CXCIsXHJcbiAgICAgICAgcHlOb3RlOiBcIkVOR1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIC8vUmVzZXQgSGF6YXJkcyBzZWxlY3Rpb24uXHJcbiAgICBpZih0aGlzLmhhemFyZHNEYXRhICYmIHRoaXMuaGF6YXJkc0RhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGluZGV4IGluIHRoaXMuaGF6YXJkc0RhdGEpXHJcbiAgICAgICAgdGhpcy5oYXphcmRzRGF0YVtpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHJpT2JqZWN0LCBzdGF0ZSwgY3VyclN0YXRlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCctLS0gY3VyclN0YXRlJywgY3VyclN0YXRlKTsgXHJcbiAgICB0aGlzLnByZWRvbWluYW50VHJhZGVTZWN0b3IgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdwcmVkb21pbmFudFRyYWRlU2VjdG9yJyk7XHJcbiAgICB0aGlzLnRpdGxlID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKHN0YXRlID09ICdBZGQnKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQb3B1cCgpO1xyXG4gICAgICAvLyBpZiAodGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMubGVuZ3RoID4gMCAmJiB0aGlzLnN1cnZleUNvbXBsZXRlZERhdGUpIHtcclxuICAgICAgLy8gICB0aGlzLm5ld1Jpc2tJbXAuUklfTk8gPSB0aGlzLmdlbmVyYXRlUklOdW1iZXIodGhpcy5zdXJ2ZXlDb21wbGV0ZWREYXRlLCB0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhLlJpc2tJbXBydm1udF9QQUdFUyk7XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy5zdXJ2ZXlDb21wbGV0ZWREYXRlICYmICEoJ1Jpc2tJbXBydm1udF9QQUdFUycgaW4gdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSkpIHtcclxuICAgICAgLy8gICB0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhLlJpc2tJbXBydm1udF9QQUdFUyA9IFtdO1xyXG4gICAgICAvLyAgIHRoaXMubmV3Umlza0ltcC5SSV9OTyA9IHRoaXMuZ2VuZXJhdGVSSU51bWJlcih0aGlzLnN1cnZleUNvbXBsZXRlZERhdGUsIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZih0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhKSB7XHJcbiAgICAgICAgaWYgKCEoJ1Jpc2tJbXBydm1udF9QQUdFUycgaW4gdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSkpIHtcclxuICAgICAgICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZSBpZih0eXBlb2YgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSA9IHt9O1xyXG4gICAgICAgICAgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMgPSBbXTtcclxuICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuUklfTk8gPSB0aGlzLmdlbmVyYXRlUklOdW1iZXIodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3VydmV5Q29tcGxldGVkRGF0ZScpLCB0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhLlJpc2tJbXBydm1udF9QQUdFUyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfT1VUU1RBTkRJTkdfQ0QgPSAnTmV3JztcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLk5PTl9BSUdfU09VUkNFX0lOID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5MSU5LRURfSEFaQVJEUyA9IFtdO1xyXG4gICAgICBcclxuICAgICAgaWYocmlPYmplY3QpIHtcclxuICAgICAgICB0aGlzLm1haW5UeXBlVmFsdWUgPSB0aGlzLmZpbHRlck1haW5UeXBlKHJpT2JqZWN0LlJlY01haW5UeXBlQ29kZSkgfHwgJ1BsZWFzZSBTZWxlY3QnO1xyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX01BSU5UWVBFX0NEID0gcmlPYmplY3QuUmVjTWFpblR5cGVDb2RlO1xyXG4gICAgICAgIHRoaXMuZ2V0VHlwZXMoKTtcclxuICAgICAgICB0aGlzLnR5cGVWYWx1ZSA9IHRoaXMuZmlsdGVyVHlwZShyaU9iamVjdC5SZWNUeXBlQ29kZSkgfHwgJ1BsZWFzZSBTZWxlY3QnO1xyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX1RZUEVfQ0QgPSByaU9iamVjdC5SZWNUeXBlQ29kZTtcclxuICAgICAgICB0aGlzLmdldFN1YlR5cGVzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJUeXBlVmFsdWUgPSB0aGlzLmZpbHRlclN1YlR5cGUocmlPYmplY3QuUmVjU3ViVHlwZUNvZGUpIHx8ICdQbGVhc2UgU2VsZWN0JztcclxuICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuVHlwZSA9IHJpT2JqZWN0LlJlY1R5cGU7IC8vVHlwZVxyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5TdWJUeXBlID0gdGhpcy5zdWJUeXBlVmFsdWU7IC8vU3VidHlwZVxyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX1NVQlRZUEVfQ0QgPSByaU9iamVjdC5SZWNTdWJUeXBlQ29kZTtcclxuICAgICAgfVxyXG4gICAgICAvLzExLzIxLzIwMTYgRml4IGZvciBERTIzNVxyXG4gICAgICBlbHNlIGlmKGN1cnJTdGF0ZSA9PSAnY29uc3RydWN0aW9uJyB8fCBjdXJyU3RhdGUgPT0gJ3Nwcmlua2xlcnMnIHx8IGN1cnJTdGF0ZSA9PSAnd2F0ZXJTdXBwbHknIHx8IGN1cnJTdGF0ZSA9PSAnbmF0LWNhdCcpIHtcclxuICAgICAgICB0aGlzLm5hdGNhdFRhYkluZGV4ID0gdGhpcy5jY3MuZ2V0TmF0Y2F0VGFiSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmdldFZpZXdNZXRhRGF0YShjdXJyU3RhdGUsIHRoaXMubmF0Y2F0VGFiSW5kZXgpO1xyXG4gICAgICAgIHJpT2JqZWN0ID0gdGhpcy52aWV3TWV0YURhdGE7XHJcbiAgICAgICAgaWYocmlPYmplY3QpIHtcclxuICAgICAgICAgIHRoaXMubWFpblR5cGVWYWx1ZSA9IHRoaXMuZmlsdGVyTWFpblR5cGUocmlPYmplY3QuUmVjTWFpblR5cGVDb2RlKSB8fCAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19NQUlOVFlQRV9DRCA9IHJpT2JqZWN0LlJlY01haW5UeXBlQ29kZTtcclxuICAgICAgICAgIHRoaXMuZ2V0VHlwZXMoKTtcclxuICAgICAgICAgIHRoaXMudHlwZVZhbHVlID0gdGhpcy5maWx0ZXJUeXBlKHJpT2JqZWN0LlJlY1R5cGVDb2RlKSB8fCAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19UWVBFX0NEID0gcmlPYmplY3QuUmVjVHlwZUNvZGU7XHJcbiAgICAgICAgICB0aGlzLmdldFN1YlR5cGVzKCk7XHJcbiAgICAgICAgICB0aGlzLnN1YlR5cGVWYWx1ZSA9IHRoaXMuZmlsdGVyU3ViVHlwZShyaU9iamVjdC5SZWNTdWJUeXBlQ29kZSkgfHwgJ1BsZWFzZSBTZWxlY3QnO1xyXG4gICAgICAgICAgdGhpcy5uZXdSaXNrSW1wLlR5cGUgPSByaU9iamVjdC5SZWNUeXBlOyAvL1R5cGVcclxuICAgICAgICAgIHRoaXMubmV3Umlza0ltcC5TdWJUeXBlID0gdGhpcy5zdWJUeXBlVmFsdWU7IC8vU3VidHlwZVxyXG4gICAgICAgICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfU1VCVFlQRV9DRCA9IHJpT2JqZWN0LlJlY1N1YlR5cGVDb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlJJX05PID0gcmlPYmplY3QuUklfTk87XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX0lNUFJWTU5UX05NID0gcmlPYmplY3QuUklTS19JTVBSVk1OVF9OTTtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfT1VUU1RBTkRJTkdfQ0QgPSByaU9iamVjdC5SSVNLX09VVFNUQU5ESU5HX0NELmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmlPYmplY3QuUklTS19PVVRTVEFORElOR19DRC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLk5PTl9BSUdfU09VUkNFX0lOID0gSlNPTi5wYXJzZShyaU9iamVjdC5OT05fQUlHX1NPVVJDRV9JTik7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5TSE9XX1BPUlRBTF9JTiA9IHJpT2JqZWN0LlNIT1dfUE9SVEFMX0lOO1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuTEFSR0VfTE9TU19QT1RFTlRJQUxfSU4gPSByaU9iamVjdC5MQVJHRV9MT1NTX1BPVEVOVElBTF9JTjtcclxuICAgICAgXHJcbiAgICAgIC8vRGF0ZXBpY2tlcnNcclxuICAgICAgaWYocmlPYmplY3QuQ09NUExFVElPTl9EVCkge1xyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5DT01QTEVUSU9OX0RUID0gbmV3IERhdGVQaXBlKCkudHJhbnNmb3JtKHJpT2JqZWN0LkNPTVBMRVRJT05fRFQsICdNTS9kZC95eXl5Jyk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgaWYocmlPYmplY3QuQ09NUExFVElPTl9EVCkge1xyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5UQVJHRVRfQ09NUExFVElPTl9EVCA9IG5ldyBEYXRlUGlwZSgpLnRyYW5zZm9ybShyaU9iamVjdC5DT01QTEVUSU9OX0RULCAnTU0vZGQveXl5eScpO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvL0Ryb3Bkb3duc1xyXG4gICAgICB0aGlzLm1haW5UeXBlVmFsdWUgPSB0aGlzLmZpbHRlck1haW5UeXBlKHJpT2JqZWN0LlJJU0tfTUFJTlRZUEVfQ0QpOyAvL01haW5UeXBlXHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX01BSU5UWVBFX0NEID0gcmlPYmplY3QuUklTS19NQUlOVFlQRV9DRDsgLy9NYWluVHlwZVxyXG4gICAgICB0aGlzLmdldFR5cGVzKCk7XHJcbiAgICAgIHRoaXMudHlwZVZhbHVlID0gdGhpcy5maWx0ZXJUeXBlKHJpT2JqZWN0LlJJU0tfVFlQRV9DRCk7IC8vVHlwZVxyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19UWVBFX0NEID0gcmlPYmplY3QuUklTS19UWVBFX0NEOyAvL1R5cGVcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlR5cGUgPSByaU9iamVjdC5UeXBlOyAvL1R5cGVcclxuICAgICAgdGhpcy5nZXRTdWJUeXBlcygpO1xyXG4gICAgICB0aGlzLnN1YlR5cGVWYWx1ZSA9IHRoaXMuZmlsdGVyU3ViVHlwZShyaU9iamVjdC5SSVNLX1NVQlRZUEVfQ0QpOyAvL1N1YnR5cGVcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfU1VCVFlQRV9DRCA9IHJpT2JqZWN0LlJJU0tfU1VCVFlQRV9DRDsgLy9TdWJ0eXBlXHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5TdWJUeXBlID0gdGhpcy5zdWJUeXBlVmFsdWU7IC8vU3VidHlwZVxyXG5cclxuICAgICAgdGhpcy5zdGF0dXNWYWx1ZSA9IHRoaXMuZmlsdGVyU3RhdHVzQnlDb2RlcyhyaU9iamVjdC5SSVNLX1NUQVRVU19DRCk7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX1NUQVRVU19DRCA9IHJpT2JqZWN0LlJJU0tfU1RBVFVTX0NEO1xyXG4gICAgICB0aGlzLmludGVuZGVkQWN0aW9uVmFsdWUgPSB0aGlzLmZpbHRlckludGVuZGVkQWN0aW9uKHJpT2JqZWN0LklOVEVOREVEX0FDVElPTl9DRCk7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5JTlRFTkRFRF9BQ1RJT05fQ0QgPSByaU9iamVjdC5JTlRFTkRFRF9BQ1RJT05fQ0Q7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlWYWx1ZSA9IHRoaXMuZmlsdGVyQ2F0ZWdvcnkocmlPYmplY3QuUklTS19DQVRFR09SWV9DRCk7XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5SSVNLX0NBVEVHT1JZX0NEID0gcmlPYmplY3QuUklTS19DQVRFR09SWV9DRDtcclxuICAgICAgdGhpcy50YXJnZXRDb21wbGV0aW9uVGltZVZhbHVlID0gdGhpcy5maWx0ZXJDb21wVGltZUJ5Q29kZShyaU9iamVjdC5UQVJHRVRfQ09NUExFVElPTl9USU1FX0NEKSB8fCAnU2VsZWN0IFRpbWUnO1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuVEFSR0VUX0NPTVBMRVRJT05fVElNRV9DRCA9IHJpT2JqZWN0LlRBUkdFVF9DT01QTEVUSU9OX1RJTUVfQ0Q7XHJcblxyXG4gICAgICAvL0xvc3MgRXN0aW1hdGVcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTSA9IHJpT2JqZWN0LlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTTtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLkJJWl9JTlRSUFRfTFNTX0VTVF9CRlJfUklfQU0gPSByaU9iamVjdC5CSVpfSU5UUlBUX0xTU19FU1RfQkZSX1JJX0FNO1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuVE9UX0xPU1NfRVNUX0JGUl9SSV9BTSA9IHJpT2JqZWN0LlRPVF9MT1NTX0VTVF9CRlJfUklfQU07XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5UT1RfTE9TU19FU1RfQUZURVJfUklfQU0gPSByaU9iamVjdC5UT1RfTE9TU19FU1RfQUZURVJfUklfQU07XHJcbiAgICAgIHRoaXMubmV3Umlza0ltcC5FU1RfQ09TVF9UT19DT01QTEVURV9BTSA9IHJpT2JqZWN0LkVTVF9DT1NUX1RPX0NPTVBMRVRFX0FNO1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuTE9TU19SRURVQ1RJT05fTElLRUxJSE9PRF9DRCA9IHJpT2JqZWN0LkxPU1NfUkVEVUNUSU9OX0xJS0VMSUhPT0RfQ0Q7XHJcblxyXG4gICAgICAvL09mZmxpbmUgbGlua2luZ1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuTElOS0VEX0hBWkFSRFMgPSByaU9iamVjdC5MSU5LRURfSEFaQVJEUyA/IHJpT2JqZWN0LkxJTktFRF9IQVpBUkRTIDogW107XHJcblxyXG4gICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5oYXphcmRzRGF0YS5sZW5ndGg7IHgrKyl7XHJcbiAgICAgICAgaWYodGhpcy5uZXdSaXNrSW1wLkxJTktFRF9IQVpBUkRTLmluZGV4T2YodGhpcy5oYXphcmRzRGF0YVt4XS5IQVpBUkRfUkFORE9NX0lEX1RPTElOSykgPiAtMSl7XHJcbiAgICAgICAgICB0aGlzLmhhemFyZHNEYXRhW3hdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhhemFyZHNEYXRhW3hdLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vbmFycmF0aXZlc1xyXG4gICAgICB0aGlzLmdldE5hcnJhdGl2ZUNvbnRlbnQocmlPYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5tYWluVHlwZVZhbHVlID09IFwiUGh5c2ljYWwgUHJvdGVjdGlvblwiIHx8IHRoaXMubWFpblR5cGVWYWx1ZSA9PSBcIk5BVENBVFwiIHx8IHRoaXMubWFpblR5cGVWYWx1ZSA9PSBcIkh1bWFuIEVsZW1lbnRcIil7XHJcbiAgICAgIHRoaXMuY2hlY2tNYWluVHlwZSA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5jaGVja01haW5UeXBlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGFsLnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGVNb2RhbCgpIHtcclxuICAgIHRoaXMubW9kYWwuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8xMS8yMS8yMDE2IEZpeCBmb3IgREUyMzVcclxuICBnZXRWaWV3TWV0YURhdGEoY3VyclN0YXRlLCBuYXRjYXRUYWJJbmRleCkge1xyXG4gICAgaWYoY3VyclN0YXRlID09ICdjb25zdHJ1Y3Rpb24nKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnQ29uc3RydWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJTdGF0ZSA9PSAnc3ByaW5rbGVycycpIHtcclxuXHRcdCAgdGhpcy52aWV3TWV0YURhdGEgPSB0aGlzLmZpbHRlclJJTWF0cml4QnlQVFNuU3VidHlwZSh0aGlzLnByZWRvbWluYW50VHJhZGVTZWN0b3IsICdTcHJpbmtsZXJzJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJTdGF0ZSA9PSAnd2F0ZXJTdXBwbHknKSB7XHJcbiAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnV2F0ZXIgU3VwcGx5Jyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN1cnJTdGF0ZSA9PSAnbmF0LWNhdCcgJiYgbmF0Y2F0VGFiSW5kZXgpIHtcclxuICAgICAgaWYobmF0Y2F0VGFiSW5kZXggPT0gMSkge1xyXG4gICAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ0Zsb29kJywgdHJ1ZSwgeyAnUmVjVHlwZUNvZGUnOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobmF0Y2F0VGFiSW5kZXggPT0gMikge1xyXG4gICAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ1N1cmdlJywgdHJ1ZSwgeyAnUmVjVHlwZUNvZGUnOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobmF0Y2F0VGFiSW5kZXggPT0gMykge1xyXG4gICAgICAgIHRoaXMudmlld01ldGFEYXRhID0gdGhpcy5maWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUodGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yLCAnTkFUQ0FUJywgJ1dpbmQnLCB0cnVlLCB7ICdSZWNUeXBlQ29kZSc6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihuYXRjYXRUYWJJbmRleCA9PSA0KSB7XHJcbiAgICAgICAgdGhpcy52aWV3TWV0YURhdGEgPSB0aGlzLmZpbHRlclJJTWF0cml4QnlQVFNuTVRuVHlwZSh0aGlzLnByZWRvbWluYW50VHJhZGVTZWN0b3IsICdOQVRDQVQnLCAnRWFydGhxdWFrZScsIHRydWUsIHsgJ1JlY1R5cGVDb2RlJzogdHJ1ZSB9KTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHRoaXMudmlld01ldGFEYXRhID0ge1xyXG4gICAgICAgICAgXCJSZWNNYWluVHlwZUNvZGVcIjogXCJOQVRDQVRcIixcclxuICAgICAgICAgIFwiUmVjTWFpblR5cGVcIjogXCJOQVRDQVRcIixcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vdGhpcy51cGRhdGVSSURhdGFMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvLzExLzIxLzIwMTYgRml4IGZvciBERTIzNVxyXG4gIGdldFNlbGVjdGl2ZU1ldGFEYXRhQXR0cmlidXRlKG1kT2JqLCBzZWxTZWxlY3Rpb25BdHRyKSB7XHJcbiAgICBsZXQgc2VsZWN0aXZlTWV0YURhdGFPYmogPSB7fTtcclxuICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY01haW5UeXBlQ29kZSA9IG1kT2JqLlJlY01haW5UeXBlQ29kZTtcclxuICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY01haW5UeXBlID0gbWRPYmouUmVjTWFpblR5cGU7XHJcbiAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5UcmFkZVNlY3Rvck9yT2NjdXBhbmN5ID0gbWRPYmouVHJhZGVTZWN0b3JPck9jY3VwYW5jeTtcclxuXHJcbiAgICBpZiAoc2VsU2VsZWN0aW9uQXR0ci5SZWNUeXBlQ29kZSkge1xyXG4gICAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5SZWNUeXBlQ29kZSA9IG1kT2JqLlJlY1R5cGVDb2RlO1xyXG4gICAgICBzZWxlY3RpdmVNZXRhRGF0YU9iai5SZWNUeXBlID0gbWRPYmouUmVjVHlwZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxTZWxlY3Rpb25BdHRyLlJlY1N1YlR5cGVDb2RlKSB7XHJcbiAgICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY1N1YlR5cGVDb2RlID0gbWRPYmouUmVjU3ViVHlwZUNvZGU7XHJcbiAgICAgIHNlbGVjdGl2ZU1ldGFEYXRhT2JqLlJlY1N1YlR5cGUgPSBtZE9iai5SZWNTdWJUeXBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdGl2ZU1ldGFEYXRhT2JqO1xyXG4gIH1cclxuXHJcbiAgLy8xMS8yMS8yMDE2IEZpeCBmb3IgREUyMzVcclxuXHRmaWx0ZXJSSU1hdHJpeEJ5UFRTblN1YnR5cGUocHJlVHJhZGVTZWN0b3IsIHN1YnR5cGUpIHtcclxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmlNYXRyaXhMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUmVjU3ViVHlwZSA9PSBzdWJ0eXBlICYmIGl0ZW0uVHJhZGVTZWN0b3JPck9jY3VwYW5jeSA9PSBwcmVUcmFkZVNlY3Rvcik7XHJcblx0XHRpZihyZXN1bHQubGVuZ3RoID4gMCl7XHJcblx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgLy8xMS8yMS8yMDE2IEZpeCBmb3IgREUyMzVcclxuICBmaWx0ZXJSSU1hdHJpeEJ5UFRTbk1UblR5cGUocHJlVHJhZGVTZWN0b3IsIG1haW5UeXBlLCB0eXBlLCBzZWxTZWxlY3Rpb24sIHNlbFNlbGVjdGlvbkF0dHIpIHtcclxuICAgIC8vZmlsdGVyIHdpdGggUHJlZG9taW5hbnQgVHJhZGUgU2VjdG9yLCBUeXBlICYgU3VidHlwZVxyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy5yaU1hdHJpeExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5SZWNNYWluVHlwZSA9PSBtYWluVHlwZSAmJiBpdGVtLlJlY1R5cGUgPT0gdHlwZSAmJiBpdGVtLlRyYWRlU2VjdG9yT3JPY2N1cGFuY3kgPT0gcHJlVHJhZGVTZWN0b3IpO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChzZWxTZWxlY3Rpb24pIHtcclxuICAgICAgICBsZXQgc2VsZWN0aXZlTWV0YURhdGEgPSB0aGlzLmdldFNlbGVjdGl2ZU1ldGFEYXRhQXR0cmlidXRlKHJlc3VsdFswXSwgc2VsU2VsZWN0aW9uQXR0cik7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGl2ZU1ldGFEYXRhOyAvL3NlbGVjdGl2ZSBhdHRyaWJ1dGUgZnJvbSBvYmplY3QgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFswXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmFycmF0aXZlQ29udGVudChyaU9iamVjdCkge1xyXG4gICAgaWYocmlPYmplY3QuUklDb21tZW50TGlzdCAmJiByaU9iamVjdC5SSUNvbW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJpT2JqZWN0LlJJQ29tbWVudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihyaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlNFQ1RJT05fTk0gPT0gJ1JJIERldGFpbHMnKSB7XHJcbiAgICAgICAgICBpZihyaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlByaW1hcnlMYW5ndWFnZSAmJiByaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlByaW1hcnlMYW5ndWFnZS5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3Umlza0ltcC5SSUNvbW1lbnRMaXN0WzFdLlByaW1hcnlMYW5ndWFnZSA9IHJpT2JqZWN0LlJJQ29tbWVudExpc3RbaV0uUHJpbWFyeUxhbmd1YWdlO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuUklDb21tZW50TGlzdFsxXS5QcmltYXJ5TGFuZ3VhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTogcmlPYmplY3QuUklDb21tZW50TGlzdFtpXS5QcmltYXJ5TGFuZ3VhZ2UgfHwgJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihyaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlNFQ1RJT05fTk0gPT0gJ1JJIFN1bW1hcnknKSB7XHJcbiAgICAgICAgICBpZihyaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlByaW1hcnlMYW5ndWFnZSAmJiByaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlByaW1hcnlMYW5ndWFnZS5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3Umlza0ltcC5SSUNvbW1lbnRMaXN0WzBdLlByaW1hcnlMYW5ndWFnZSA9IHJpT2JqZWN0LlJJQ29tbWVudExpc3RbaV0uUHJpbWFyeUxhbmd1YWdlO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1Jpc2tJbXAuUklDb21tZW50TGlzdFswXS5QcmltYXJ5TGFuZ3VhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTogcmlPYmplY3QuUklDb21tZW50TGlzdFtpXS5QcmltYXJ5TGFuZ3VhZ2UgfHwgJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihyaU9iamVjdC5SSUNvbW1lbnRMaXN0W2ldLlNFQ1RJT05fTk0gPT0gJ0NsaWVudCBSZXNwb25zZSAoZnJvbSBFTkdhZ2UpJykge1xyXG4gICAgICAgICAgdGhpcy5uYXJyYXRpdmVDbGllbnRSZXNwb25zZSA9IHJpT2JqZWN0LlJJQ29tbWVudExpc3RbaV0uUHJpbWFyeUxhbmd1YWdlIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Umlza0ltcHJvdmVtZW50c0xpc3QoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRSaXNrSW1wcm92ZW1lbnRzRGF0YSh0aGlzLnNpdGUuUkZTX1BBUkVOVF9JRCwgdGhpcy5zaXRlLlJGU19JRCkuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZihkYXRhLkxvY2F0aW9uQXNzZXNzbWVudCkge1xyXG4gICAgICAgICAgaWYoZGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LkNPUEVfUEFHRS5PQ0NVUEFOQ1lfQ0QpIFxyXG4gICAgICAgICAgICB0aGlzLm9jY3VwYW5jeUNvZGUgPSBkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuQ09QRV9QQUdFLk9DQ1VQQU5DWV9DRDtcclxuICAgICAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhID0gZGF0YS5Mb2NhdGlvbkFzc2Vzc21lbnQuTEFXb3JrUGFnZUxpc3RbMF0uQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50Lkxvc3NFc3RpbWF0ZXNfUEFHRTtcclxuICAgICAgICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEgPSBkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuUmlza1BhZ2U7XHJcbiAgICAgICAgICB0aGlzLmNjcy5zZXRSaXNrSW1wcm92ZW1lbnRzRGF0YSh0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSAtICcsdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZ2V0IFByZWRvbWluYW50IFRyYWRlIFNlY3RvciBmcm9tIG9jY3VwYW5jeVxyXG4gICAgICAgIC8vdGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yID0gdGhpcy5maWx0ZXJUcmFkZVNlY3RvckJ5Q29kZShkYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuQ09QRV9QQUdFLk9DQ1VQQU5DWV9DRCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSaXNrIEltcHJvdmVtZW50cyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UklNYXRyaXhMaXN0KCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0UklNYXRyaXgoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMucmlNYXRyaXhMaXN0ID0gZGF0YTtcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JJTWF0cml4IC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFkZVNlY3RvcnMoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRUcmFkZVNlY3RvcnMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4geyB0aGlzLnRyYWRlU2VjdG9ycyA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5MT0IgPT0gXCJDUFwiKTsgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1RyYWRlIHNlY3RvcnMgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFJJU3RhdHVzTGlzdCgpIHtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldFJJU3RhdHVzTGlzdCgpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7IHRoaXMuc3RhdHVzZXMgPSBkYXRhOyB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3RhdHVzIC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7IHRoaXMuY2F0ZWdvcmllcyA9IGRhdGEgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0NhdGVnb3JpZXMgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEludGVuZGVkQWN0aW9ucygpIHtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldEludGVuZGVkQWN0aW9ucygpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7IHRoaXMuaW50ZW5kZWRBY3Rpb25zID0gZGF0YSB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnSW50ZW5kZWQgQWN0aW9ucyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFyZ2V0Q29tcGxldGlvblRpbWVWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLnJpU2VydmljZS5nZXRUYXJnZXRDb21wbGV0aW9uVGltZVZhbHVlcygpLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7IHRoaXMudGFyZ2V0Q29tcGxldGlvblRpbWVWYWx1ZXMgPSBkYXRhIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdUYXJnZXQgQ29tcGxldGlvbiBUaW1lIFZhbHVlcyAtIERvbmUgbG9hZGluZyBkYXRhLicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGF6YXJkQ2F0ZWdvcmllcygpIHtcclxuICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0Q2F0ZWdvcnlPY2N1cGFuY3lEcm9wZG93bkRhdGEoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT5cclxuICAgICAge1xyXG4gICAgICAgIGlmKHRoaXMub2NjdXBhbmN5Q29kZSlcclxuICAgICAgICAgIHRoaXMuaGF6YXJkQ2F0ZWdvcmllcyA9ICBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uT0NDVVBBTkNZX0NEID09IHRoaXMub2NjdXBhbmN5Q29kZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0SGF6YXJkTWFpblR5cGVzKCkgXHJcbiAgICApOyAgICBcclxuICB9XHJcblxyXG4gIGdldEhhemFyZE1haW5UeXBlcygpIHtcclxuICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0TWFpblR5cGVEcm9wZG93bkRhdGEoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT5cclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuaGF6YXJkTWFpblR5cGVzID0gZGF0YTtcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXRIYXphcmRUeXBlcygpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGF6YXJkVHlwZXMoKSB7XHJcbiAgICB0aGlzLmhhemFyZHNTZXJ2aWNlLmdldFR5cGVEcm9wZG93bkRhdGEoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT5cclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuaGF6YXJkVHlwZXMgPSBkYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLCBcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJIYXphcmQgVHlwZXMgZm9yIFJJIC0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpIFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEhhemFyZHNTdW1tYXJ5RGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLmhhemFyZHNEYXRhID0gZGF0YS5oYXphcmRzO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuaGF6YXJkc0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5oYXphcmRNYWluVHlwZXMgJiYgdGhpcy5oYXphcmRNYWluVHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBoYXphcmRNYWluVHlwZSA9IHRoaXMuaGF6YXJkTWFpblR5cGVzLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSB0aGlzLmhhemFyZHNEYXRhW2ldLkhBWkFSRF9NQUlOX1RZUEVfQ0QpO1xyXG4gICAgICAgIHRoaXMuaGF6YXJkc0RhdGFbaV0uSEFaQVJEX01BSU5fVFlQRV9EZXNjID0gaGF6YXJkTWFpblR5cGUubGVuZ3RoID4gMCA/IGhhemFyZE1haW5UeXBlWzBdLkRlc2NyaXB0aW9uIDogXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5oYXphcmRUeXBlcyAmJiB0aGlzLmhhemFyZFR5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgaGF6YXJkVHlwZSA9IHRoaXMuaGF6YXJkVHlwZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5Db2RlID09IHRoaXMuaGF6YXJkc0RhdGFbaV0uSEFaQVJEX1RZUEVfQ0QpO1xyXG4gICAgICAgIHRoaXMuaGF6YXJkc0RhdGFbaV0uSEFaQVJEX1RZUEVfRGVzYyA9IGhhemFyZFR5cGUubGVuZ3RoID4gMCA/IGhhemFyZFR5cGVbMF0uRGVzY3JpcHRpb24gOiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIGlmKHRoaXMuaGF6YXJkQ2F0ZWdvcmllcyAmJiB0aGlzLmhhemFyZENhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBoYXphcmRDYXRlZ29yeSA9IHRoaXMuaGF6YXJkQ2F0ZWdvcmllcy5maWx0ZXIoaXRlbSA9PiBpdGVtLkVMRU1FTlRfQ0QgPT0gdGhpcy5oYXphcmRzRGF0YVtpXS5IQVpBUkRfQ0FURUdPUllfQ0QpO1xyXG4gICAgICAgIHRoaXMuaGF6YXJkc0RhdGFbaV0uSEFaQVJEX0NBVEVHT1JZX0Rlc2MgPSBoYXphcmRDYXRlZ29yeS5sZW5ndGggPiAwID8gaGF6YXJkQ2F0ZWdvcnlbMF0uRGVzY3JpcHRpb24gOiBcIlwiOyBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gaWYoJ0xJTktFRF9IQVpBUkRTJyBpbiB0aGlzLm5ld1Jpc2tJbXAgJiYgdGhpcy5uZXdSaXNrSW1wLkxJTktFRF9IQVpBUkRTLmluZGV4T2YodGhpcy5oYXphcmRzRGF0YVtpXS5IQVpBUkRfUkFORE9NX0lEX1RPTElOSykgPiAtMSkge1xyXG4gICAgICAvLyAgIHRoaXMuaGF6YXJkc0RhdGFbaV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIC8vIH1lbHNlIHtcclxuICAgICAgLy8gICB0aGlzLmhhemFyZHNEYXRhW2ldLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TWFpblR5cGVzKCkge1xyXG4gICAgdGhpcy5yaVNlcnZpY2UuZ2V0TWFpblR5cGVzKCkuc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHsgdGhpcy5tYWluVHlwZXMgPSBkYXRhIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdNYWluIFR5cGVzIC0gRG9uZSBsb2FkaW5nIGRhdGEuJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlcygpIHtcclxuICAgIGxldCB1bmlxdWVSZWNUeXBlcyA9IFtdO1xyXG4gICAgdGhpcy50eXBlcyA9IFtdO1xyXG4gICAgdGhpcy50eXBlVmFsdWUgPSAnUGxlYXNlIFNlbGVjdCc7XHJcbiAgICB0aGlzLnN1YlR5cGVzID0gW107XHJcbiAgICB0aGlzLnN1YlR5cGVWYWx1ZSA9ICdQbGVhc2UgU2VsZWN0JztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yaU1hdHJpeExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucmlNYXRyaXhMaXN0W2ldLlRyYWRlU2VjdG9yT3JPY2N1cGFuY3kgPT0gdGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yICYmIHVuaXF1ZVJlY1R5cGVzLmluZGV4T2YodGhpcy5yaU1hdHJpeExpc3RbaV0uUmVjVHlwZSkgPT09IC0xICYmIHRoaXMucmlNYXRyaXhMaXN0W2ldLlJlY01haW5UeXBlQ29kZSA9PSB0aGlzLm5ld1Jpc2tJbXAuUklTS19NQUlOVFlQRV9DRCkge1xyXG4gICAgICAgIHRoaXMudHlwZXMucHVzaCh0aGlzLnJpTWF0cml4TGlzdFtpXSk7XHJcbiAgICAgICAgdGhpcy51bmlxdWVUeXBlcy5wdXNoKHRoaXMucmlNYXRyaXhMaXN0W2ldKTtcclxuICAgICAgICB1bmlxdWVSZWNUeXBlcy5wdXNoKHRoaXMucmlNYXRyaXhMaXN0W2ldLlJlY1R5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdWJUeXBlcygpIHtcclxuICAgIHRoaXMuc3ViVHlwZXMgPSBbXTtcclxuICAgIHRoaXMuc3ViVHlwZVZhbHVlID0gJ1BsZWFzZSBTZWxlY3QnO1xyXG4gICAgdGhpcy5zdWJUeXBlcyA9IHRoaXMucmlNYXRyaXhMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uUmVjTWFpblR5cGVDb2RlID09IHRoaXMubmV3Umlza0ltcC5SSVNLX01BSU5UWVBFX0NEICYmXHJcbiAgICAgIGl0ZW0uUmVjVHlwZUNvZGUgPT0gdGhpcy5uZXdSaXNrSW1wLlJJU0tfVFlQRV9DRCAmJlxyXG4gICAgICBpdGVtLlRyYWRlU2VjdG9yT3JPY2N1cGFuY3kgPT0gdGhpcy5wcmVkb21pbmFudFRyYWRlU2VjdG9yKTtcclxuICB9XHJcblxyXG4gIGZpbHRlck1haW5UeXBlKHNlYXJjaFZhbHVlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLm1haW5UeXBlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLlJJTExSQ29kZSA9PSBzZWFyY2hWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uRGVzY3JpcHRpb24gOiAnJztcclxuICB9XHJcblxyXG4gIGZpbHRlclR5cGUoc2VhcmNoVmFsdWUpIHtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMudHlwZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5SZWNUeXBlQ29kZSA9PSBzZWFyY2hWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uUmVjVHlwZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyU3ViVHlwZShzZWFyY2hWYWx1ZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy5zdWJUeXBlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLlJlY1N1YlR5cGVDb2RlID09IHNlYXJjaFZhbHVlKTtcclxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXS5SZWNTdWJUeXBlIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJTdGF0dXNCeUNvZGVzKHNlYXJjaFZhbHVlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnN0YXR1c2VzLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSBzZWFyY2hWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uRGVzY3JpcHRpb24gOiAnJztcclxuICB9XHJcblxyXG4gIGZpbHRlckludGVuZGVkQWN0aW9uKHNlYXJjaFZhbHVlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLmludGVuZGVkQWN0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLkNvZGUgPT0gc2VhcmNoVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdLkRlc2NyaXB0aW9uIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJDb21wVGltZUJ5Q29kZShzZWFyY2hWYWx1ZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy50YXJnZXRDb21wbGV0aW9uVGltZVZhbHVlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLkNvZGUgPT0gc2VhcmNoVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdLkRlc2NyaXB0aW9uIDogJyc7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJDYXRlZ29yeShzZWFyY2hWYWx1ZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55ID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSBzZWFyY2hWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0uRGVzY3JpcHRpb24gOiAnJztcclxuICB9XHJcblxyXG4gIGZpbHRlclRyYWRlU2VjdG9yQnlDb2RlKG9jY3VwYW5jeUNvZGUpIHtcclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMudHJhZGVTZWN0b3JzLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSBvY2N1cGFuY3lDb2RlKTtcclxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXS5EZXNjcmlwdGlvbiA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyT25NYWluVHlwZShtYWluVHlwZU9iaikge1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfTUFJTlRZUEVfQ0QgPSBtYWluVHlwZU9iai5SSUxMUkNvZGU7XHJcbiAgICB0aGlzLmdldFR5cGVzKCk7XHJcbiAgICBpZihtYWluVHlwZU9iai5EZXNjcmlwdGlvbiA9PSBcIlBoeXNpY2FsIFByb3RlY3Rpb25cIiB8fCBtYWluVHlwZU9iai5EZXNjcmlwdGlvbiA9PSBcIk5BVENBVFwiIHx8IG1haW5UeXBlT2JqLkRlc2NyaXB0aW9uID09IFwiSHVtYW4gRWxlbWVudFwiKXtcclxuICAgICAgdGhpcy5jaGVja01haW5UeXBlID0gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmNoZWNrTWFpblR5cGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck9uVHlwZSh0eXBlT2JqKSB7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19UWVBFX0NEID0gdHlwZU9iai5SZWNUeXBlQ29kZTtcclxuICAgIHRoaXMuZ2V0U3ViVHlwZXMoKTtcclxuICB9XHJcblxyXG4gIGZpbHRlck9uU3ViVHlwZShzdWJUeXBlT2JqKSB7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19TVUJUWVBFX0NEID0gc3ViVHlwZU9iai5SZWNTdWJUeXBlQ29kZTtcclxuICB9XHJcblxyXG4gIGZpbHRlck9uQ2F0ZWdvcnkoY2F0T2JqKSB7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19DQVRFR09SWV9DRCA9IGNhdE9iai5Db2RlO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyT25JbnRBY3QoYWN0T2JqKSB7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuSU5URU5ERURfQUNUSU9OX0NEID0gYWN0T2JqLkNvZGU7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJUYXJnZXRDb21wKGNvbXBPYmopIHtcclxuICAgIHRoaXMubmV3Umlza0ltcC5UQVJHRVRfQ09NUExFVElPTl9USU1FX0NEID0gY29tcE9iai5Db2RlO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyT25TdGF0dXMoc3RhdHVzT2JqKSB7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklTS19TVEFUVVNfQ0QgPSBzdGF0dXNPYmouQ29kZTtcclxuICB9XHJcblxyXG4gIC8vIERhdGUgUGlja2VyIGV2ZW50c1xyXG4gIHNldFRhcmdldFRvVG9kYXlzRGF0ZSh0ZXN0RGF0YTogYW55LCBhcmdzOiBhbnkpIHtcclxuICAgIHRlc3REYXRhLnNob3dUYXJnZXREYXRlUGlja2VyID0gIXRlc3REYXRhLnNob3dUYXJnZXREYXRlUGlja2VyO1xyXG4gICAgdGVzdERhdGEuVEFSR0VUX0NPTVBMRVRJT05fRFQgPSBhcmdzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJUYXJnZXREYXRlKHRlc3REYXRhKSB7XHJcbiAgICB0ZXN0RGF0YS5zaG93VGFyZ2V0RGF0ZVBpY2tlciA9ICF0ZXN0RGF0YS5zaG93VGFyZ2V0RGF0ZVBpY2tlcjtcclxuICAgIHRlc3REYXRhLlRBUkdFVF9DT01QTEVUSU9OX0RUID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldFRhcmdldERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICBpZiAoZGF0ZSA9PSAnJykge1xyXG4gICAgICBkYXRlID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0QWN0dWFsVG9Ub2RheXNEYXRlKHRlc3REYXRhOiBhbnksIGFyZ3M6IGFueSkge1xyXG4gICAgdGVzdERhdGEuc2hvd0FjdHVhbERhdGVQaWNrZXIgPSAhdGVzdERhdGEuc2hvd0FjdHVhbERhdGVQaWNrZXI7XHJcbiAgICB0ZXN0RGF0YS5DT01QTEVUSU9OX0RUID0gYXJncztcclxuICB9XHJcblxyXG4gIGNsZWFyQWN0dWFsRGF0ZSh0ZXN0RGF0YSkge1xyXG4gICAgdGVzdERhdGEuc2hvd0FjdHVhbERhdGVQaWNrZXIgPSAhdGVzdERhdGEuc2hvd0FjdHVhbERhdGVQaWNrZXI7XHJcbiAgICB0ZXN0RGF0YS5DT01QTEVUSU9OX0RUID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldEFjdHVhbERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICBpZiAoZGF0ZSA9PSAnJykge1xyXG4gICAgICBkYXRlID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RhbmRhcmRSSSgpIHtcclxuICAgIHRoaXMucmlTZXJ2aWNlLmdldFN0YW5kYXJkUkkoKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhbmRhcmRSaURhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuYWN0dWFsUmlEYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RkUmkgPSBkYXRhWzBdO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3RhbmRhcmQgUkkgLSBEb25lIGxvYWRpbmcgZGF0YS4nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUklOdW1iZXIoc3VydmV5Q29tcGxldGVkRGF0ZSwgcmlMaXN0KSB7XHJcbiAgICBsZXQgcmlOdW1iZXI6IGFueSA9IG51bGw7XHJcbiAgICBpZiAoc3VydmV5Q29tcGxldGVkRGF0ZSkge1xyXG4gICAgICAvL2V4cGVjdGVkIHN1cnZleUNvbXBsZXRlZERhdGUgZm9ybWF0IGV4YW1wbGUgMjAxNi0xMC0yNlQwNTowMDowMC4wMDBaXHJcbiAgICAgIGxldCBmb3JtYXRlZFNDRGF0ZUluaXRpYWxzID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oc3VydmV5Q29tcGxldGVkRGF0ZSwgJ3l5LU1NJyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtYXRTdXJ2ZXlDRGF0ZSAtJyxmb3JtYXRTdXJ2ZXlDRGF0ZSk7XHJcbiAgICAgIGlmIChyaUxpc3QgJiYgcmlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgbWF4UG9pbnRlcjogYW55ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHJpTGlzdFtpXS5SSV9OTykge1xyXG4gICAgICAgICAgICBsZXQgY250T2Zmc2V0ID0gdGhpcy5nZXRSSUNvdW50T2Zmc2V0KHJpTGlzdFtpXS5SSV9OTyk7XHJcbiAgICAgICAgICAgIGlmIChjbnRPZmZzZXQgPiBtYXhQb2ludGVyKVxyXG4gICAgICAgICAgICAgIG1heFBvaW50ZXIgPSBjbnRPZmZzZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByaU51bWJlciA9IGZvcm1hdGVkU0NEYXRlSW5pdGlhbHMgKyAnLScgKyB0aGlzLnBhZGR5KChtYXhQb2ludGVyICsgMSksIDMsICcwJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmlOdW1iZXIgPSBmb3JtYXRlZFNDRGF0ZUluaXRpYWxzICsgJy0nICsgdGhpcy5wYWRkeSgxLCAzLCAnMCcpOyAgLy8gSW5pdGlhdGUgd2l0aCAwMDFcclxuICAgICAgfVxyXG4gICAgfSAvLyBFTkQgSUZcclxuXHJcbiAgICAvL2lmIHJpTnVtYmVyIGlzIG51bGwgdGhlbiB3YXJuaW5nIHRvIGVudGVyIHJpTnVtYmVyIE1hbnVhbHkgbmVlZHMgdG8gYmUgZGlzcGxheWVkLlxyXG4gICAgcmV0dXJuIHJpTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcGFkZHkobiwgcCwgYykge1xyXG4gICAgbGV0IHBhZF9jaGFyID0gdHlwZW9mIGMgIT09ICd1bmRlZmluZWQnID8gYyA6ICcwJztcclxuICAgIGxldCBwYWQgPSBuZXcgQXJyYXkoMSArIHApLmpvaW4ocGFkX2NoYXIpO1xyXG4gICAgcmV0dXJuIChwYWQgKyBuKS5zbGljZSgtcGFkLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleE9mKGFyciwgdmFsLCBwcm9wKSB7XHJcbiAgICBsZXQgbCA9IGFyci5sZW5ndGgsXHJcbiAgICAgIGsgPSAwO1xyXG4gICAgZm9yIChrID0gMDsgayA8IGw7IGsgPSBrICsgMSkge1xyXG4gICAgICBpZiAoYXJyW2tdW3Byb3BdID09PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4gaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgYWRkUmlza0ltcHJvdmVtZW50KCl7XHJcbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IHRoaXMuaGF6YXJkc0RhdGEubGVuZ3RoOyBqKyspe1xyXG4gICAgICB2YXIgaGF6YXJkSW5kZXggPSB0aGlzLm5ld1Jpc2tJbXAuTElOS0VEX0hBWkFSRFMuaW5kZXhPZih0aGlzLmhhemFyZHNEYXRhW2pdLkhBWkFSRF9SQU5ET01fSURfVE9MSU5LKTtcclxuICAgICAgaWYodGhpcy5oYXphcmRzRGF0YVtqXS5jaGVja2VkICYmIGhhemFyZEluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5uZXdSaXNrSW1wLkxJTktFRF9IQVpBUkRTLnB1c2godGhpcy5oYXphcmRzRGF0YVtqXS5IQVpBUkRfUkFORE9NX0lEX1RPTElOSyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmhhemFyZHNEYXRhW2pdLmNoZWNrZWQgJiYgaGF6YXJkSW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMubmV3Umlza0ltcC5MSU5LRURfSEFaQVJEUy5zcGxpY2UoaGF6YXJkSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2xldCB1cGRhdGVkUkkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm5ld1Jpc2tJbXApO1xyXG4gICAgbGV0IHVwZGF0ZWRSSSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5uZXdSaXNrSW1wKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdVcGRhdGVkIFJJIC0tLS0tLS0tLS0tLSAnLCB1cGRhdGVkUkkpO1xyXG4gICAgaWYodGhpcy50aXRsZSA9PSAnQWRkJyl7XHJcbiAgICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEuUmlza0ltcHJ2bW50X1BBR0VTLnB1c2godXBkYXRlZFJJKTtcclxuICAgICAgdGhpcy5jY3Muc2V0Umlza0ltcHJvdmVtZW50c0RhdGEodGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IGVsZUluZGV4OiBudW1iZXIgPSB0aGlzLmdldEluZGV4T2YodGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVMsIHVwZGF0ZWRSSS5SSV9OTywgJ1JJX05PJyk7XHJcbiAgICAgIGlmIChlbGVJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YS5SaXNrSW1wcnZtbnRfUEFHRVNbZWxlSW5kZXhdID0gdXBkYXRlZFJJO1xyXG4gICAgICAgIHRoaXMuY2NzLnNldFJpc2tJbXByb3ZlbWVudHNEYXRhKHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGFsLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVTdWJtaXQoKXtcclxuICAgIHJldHVybiAhdGhpcy5uZXdSaXNrSW1wLlJJX05PICB8fCAhdGhpcy5uZXdSaXNrSW1wLlJJU0tfSU1QUlZNTlRfTk07XHJcbiAgfVxyXG5cclxuICBnZXRSSUNvdW50T2Zmc2V0KHJpTnVtYmVyKSB7XHJcbiAgICBpZiAocmlOdW1iZXIuaW5kZXhPZignLScpID4gMCkge1xyXG4gICAgICBsZXQgY250T2Zmc2V0QXJyID0gcmlOdW1iZXIuc3BsaXQoJy0nKTtcclxuICAgICAgLy9jb25zb2xlLmxvZygnY250T2Zmc2V0QXJyW2NudE9mZnNldEFyci5sZW5ndGggLSAxXSAtICcsIGNudE9mZnNldEFycltjbnRPZmZzZXRBcnIubGVuZ3RoIC0gMV0pO1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoY250T2Zmc2V0QXJyW2NudE9mZnNldEFyci5sZW5ndGggLSAxXSk7IC8vIHZhbHVlIGFmdGVyIGxhc3QgJy0nIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb3NzRXN0aW1hdGVIYW5kbGVyKGxvc3NFc3RpbWF0ZVR5cGUpIHtcclxuICAgIGlmKGxvc3NFc3RpbWF0ZVR5cGUgPT0gJ0xpbmsnICYmIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhKSB7XHJcbiAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXMgPSBbXTtcclxuICAgICAgLy9HZXQgRmlyZSBMb3NzIEVzdGltYXRlcyBvZiBMRSBUeXBlIC0gTUFTLCBNRkwsIFBNTCBhbmQgTkxFLiAgXHJcbiAgICAgIGlmKHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNQVNfUEFHRSAmJiBwYXJzZUludCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUFTX1BBR0UuVE9UQUxfQU0pICYmIHBhcnNlSW50KHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNQVNfUEFHRS5UT1RBTF9BTSkgPiAwKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNQVNfUEFHRS5sZVR5cGUpXHJcbiAgICAgICAgICB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUFTX1BBR0VbXCJsZVR5cGVcIl0gPSBcIk1BU1wiO1xyXG4gICAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXMucHVzaCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUFTX1BBR0UpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNQTUxfUEFHRSAmJiBwYXJzZUludCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzUE1MX1BBR0UuVE9UQUxfQU0pICYmIHBhcnNlSW50KHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNQTUxfUEFHRS5UT1RBTF9BTSkgPiAwKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNQTUxfUEFHRS5sZVR5cGUpXHJcbiAgICAgICAgICB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzUE1MX1BBR0VbXCJsZVR5cGVcIl0gPSBcIlBNTFwiO1xyXG4gICAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXMucHVzaCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzUE1MX1BBR0UpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNRkxfUEFHRSAmJiBwYXJzZUludCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUZMX1BBR0UuVE9UQUxfQU0pICYmIHBhcnNlSW50KHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNRkxfUEFHRS5UT1RBTF9BTSkgPiAwKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNNRkxfUEFHRS5sZVR5cGUpXHJcbiAgICAgICAgICB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUZMX1BBR0VbXCJsZVR5cGVcIl0gPSBcIk1GTFwiO1xyXG4gICAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXMucHVzaCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTUZMX1BBR0UpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNOTEVfUEFHRSAmJiBwYXJzZUludCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTkxFX1BBR0UuVE9UQUxfQU0pICYmIHBhcnNlSW50KHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNOTEVfUEFHRS5UT1RBTF9BTSkgPiAwKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZmlyZUxvc3NFc3RpbWF0ZXNEYXRhLkxvc3NFc3RpbWF0ZXNOTEVfUEFHRS5sZVR5cGUpXHJcbiAgICAgICAgICB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTkxFX1BBR0VbXCJsZVR5cGVcIl0gPSBcIk5MRVwiO1xyXG4gICAgICAgIHRoaXMuZmlyZUxvc3NFc3RpbWF0ZXMucHVzaCh0aGlzLmZpcmVMb3NzRXN0aW1hdGVzRGF0YS5Mb3NzRXN0aW1hdGVzTkxFX1BBR0UpOyAgICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlyZUxFSGFuZGxlcigpIHtcclxuICAgIGlmKHRoaXMuc2VsZWN0ZWRGaXJlTEVJbmRleCAhPSAtMSkge1xyXG4gICAgICB0aGlzLm5ld1Jpc2tJbXAuUFJQVFlfTE9TU19FU1RfQkVGT1JFX1JJX0FNID0gdGhpcy5maXJlTG9zc0VzdGltYXRlc1t0aGlzLnNlbGVjdGVkRmlyZUxFSW5kZXhdLlRPVEFMX1BSUFRZX0RNR19BTTtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLkJJWl9JTlRSUFRfTFNTX0VTVF9CRlJfUklfQU0gPSB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzW3RoaXMuc2VsZWN0ZWRGaXJlTEVJbmRleF0uVE9UQUxfQklaX0lOVFJQVF9BTTtcclxuICAgICAgdGhpcy5uZXdSaXNrSW1wLlRPVF9MT1NTX0VTVF9CRlJfUklfQU0gPSB0aGlzLmZpcmVMb3NzRXN0aW1hdGVzW3RoaXMuc2VsZWN0ZWRGaXJlTEVJbmRleF0uVE9UQUxfQU07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZUxpbmtMRSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRGaXJlTEVJbmRleCA9IC0xO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlBSUFRZX0xPU1NfRVNUX0JFRk9SRV9SSV9BTSA9ICcnO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLkJJWl9JTlRSUFRfTFNTX0VTVF9CRlJfUklfQU0gPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5UT1RfTE9TU19FU1RfQkZSX1JJX0FNID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuVE9UX0xPU1NfRVNUX0FGVEVSX1JJX0FNID0gJyc7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuRVNUX0NPU1RfVE9fQ09NUExFVEVfQU0gPSAnJztcclxuICAgIHRoaXMubmV3Umlza0ltcC5CRU5FRklUX1JBVElPX1JUID0gXCIwLjAwXCI7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuTE9TU19SRURVQ1RJT05fTElLRUxJSE9PRF9DRCA9IHRoaXMubG9zc1JlZHVjdGlvbnNbMF0uRGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSaUZyb20oKXtcclxuICAgIHRoaXMubWFpblR5cGVWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRTdGRSaS5SZWNNYWluVHlwZTtcclxuICAgIHRoaXMudHlwZVZhbHVlID0gdGhpcy5zZWxlY3RlZFN0ZFJpLlJlY1R5cGU7XHJcbiAgICB0aGlzLnN1YlR5cGVWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRTdGRSaS5SZWNTdWJUeXBlO1xyXG4gICAgdGhpcy5uZXdSaXNrSW1wLlJJU0tfSU1QUlZNTlRfTk0gPSB0aGlzLnNlbGVjdGVkU3RkUmkudGl0bGU7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklDb21tZW50TGlzdFswXS5QcmltYXJ5TGFuZ3VhZ2UgPSAnPHA+Jyt0aGlzLnNlbGVjdGVkU3RkUmkuYm9keSsnPC9wPic7XHJcbiAgICB0aGlzLm5ld1Jpc2tJbXAuUklDb21tZW50TGlzdFsxXS5QcmltYXJ5TGFuZ3VhZ2UgPSAnPHA+Jyt0aGlzLnNlbGVjdGVkU3RkUmkuZGV0YWlscysnPC9wPic7XHJcbiAgfVxyXG5cclxuICByaUZpbHRlckNoYW5nZSgpe1xyXG4gICAgdGhpcy5zdGFuZGFyZFJpRGF0YSA9W107XHJcbiAgICBpZih0aGlzLnJpRmlsdGVyKVxyXG4gICAge1xyXG4gICAgICBpZih0aGlzLnJpRmlsdGVyPT1cIlwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFuZGFyZFJpRGF0YSA9IHRoaXMuYWN0dWFsUmlEYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuYWN0dWFsUmlEYXRhKVxyXG4gICAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IHRoaXMuYWN0dWFsUmlEYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuYWN0dWFsUmlEYXRhW2ldKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJpRmlsdGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5hY3R1YWxSaURhdGFbaV1ba2V5XS5pbmRleE9mKHRoaXMucmlGaWx0ZXIpIT0tMSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YW5kYXJkUmlEYXRhLnB1c2godGhpcy5hY3R1YWxSaURhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5zdGFuZGFyZFJpRGF0YSA9IHRoaXMuYWN0dWFsUmlEYXRhO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFN0ZFJpID0gdGhpcy5zdGFuZGFyZFJpRGF0YVswXTtcclxuICAgIHRoaXMuc2VsZWN0UmlGcm9tKCk7XHJcblxyXG59XHJcbiJdfQ==
