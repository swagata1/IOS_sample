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
var validationMessages_1 = require('../shared/validationMessages');
var common_service_1 = require('../shared/services/common.service');
var combined_chart_service_1 = require('./combined-chart.service');
var componentCommunicationService_1 = require('../shared/componentCommunicationService');
var CombinedChartComponent = (function () {
    function CombinedChartComponent(CombinedChartService, _validationMessageComp, ccs, commonService, localStorageService) {
        this.CombinedChartService = CombinedChartService;
        this._validationMessageComp = _validationMessageComp;
        this.ccs = ccs;
        this.commonService = commonService;
        this.localStorageService = localStorageService;
        this.chartData = [];
        this.dateReadyFlag = false;
        this.commonService = commonService;
        this.CombinedChartService = CombinedChartService;
        this._validationMessageComp = _validationMessageComp;
    }
    CombinedChartComponent.prototype.ngOnInit = function () {
        this.dateReadyFlag = false;
        this.site = this.localStorageService.get('locationData');
        this.getCombinedChartData();
    };
    CombinedChartComponent.prototype.getCombinedChartData = function () {
        var _this = this;
        this.CombinedChartService.getCombinedChartData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            _this.combinedChartData = data.AssessmentLocationList[0].LocAssessment.WaterSupplyDetail;
            var unitObj = _this.getRFSUnits(data.RFSUnitType, data.RFSDetails.WORKING_PRESSURE_CD);
            _this.xUnit = unitObj.rfsUnit;
            _this.yUnit = unitObj.rfsPressureUnit;
            _this.drawCombinedChart(_this.combinedChartData);
        }, function (err) { return console.error(err); }, function () { return console.log("Combined chart loading data ------ Done loading data."); });
    };
    CombinedChartComponent.prototype.getRFSUnits = function (rfsUnitType, rfsWorkingPressureCD) {
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
    CombinedChartComponent.prototype.drawCombinedChart = function (combinedChartData) {
        console.log('combinedChartData - ', combinedChartData);
        this.chartData = [];
        var xSprinklersList = [];
        if (combinedChartData.SprinklerDetailPage && combinedChartData.SprinklerDetailPage.SprinklerDataList) {
            var sprinklersData = combinedChartData.SprinklerDetailPage.SprinklerDataList;
            if (sprinklersData.length > 0) {
                var tempCount = 0;
                for (var i = 0; i < sprinklersData.length; i++) {
                    if (sprinklersData[i].IncludeThisSection == "true" || sprinklersData[i].IncludeThisSection == true) {
                        tempCount++;
                        var key = 'Sprinklers' + tempCount;
                        var xOne = sprinklersData[i].BOR_FLOW_WITH_HOSE_QT || sprinklersData[i].BOR_FLOW_WITHOUT_HOSE_QT;
                        var xTwo = Number(xOne) + Number(sprinklersData[i].HOSE_QT);
                        xSprinklersList.push(xTwo);
                        var yBoth = sprinklersData[i].ADJUSTED_BOR_PRESSURE_QT;
                        var pOne = {
                            x: Math.round(xOne * 100) / 100,
                            y: Math.round(yBoth * 100) / 100
                        };
                        var pTwo = {
                            x: Math.round(xTwo * 100) / 100,
                            y: Math.round(yBoth * 100) / 100
                        };
                        this.chartData.push({
                            key: key,
                            values: [pOne, pTwo]
                        });
                    }
                }
            }
        }
        if (combinedChartData.WaterSupplyDetailsPage && combinedChartData.WaterSupplyDetailsPage.WaterSupplyList) {
            var waterSupplyData = combinedChartData.WaterSupplyDetailsPage.WaterSupplyList;
            if (waterSupplyData.length > 0) {
                var tempCount = 0;
                for (var i = 0; i < waterSupplyData.length; i++) {
                    if (waterSupplyData[i].WaterSupplyPerfData && waterSupplyData[i].WaterSupplyPerfData.length > 0) {
                        var testDataList = waterSupplyData[i].WaterSupplyPerfData;
                        var latestIndex = -1;
                        for (var j = 0; j < testDataList.length; j++) {
                            if (j == 0 && (testDataList[j].IncludeThisSection == "true" || testDataList[j].IncludeThisSection == true)) {
                                latestIndex = 0;
                            }
                            else if (testDataList[j].IncludeThisSection == "true" || testDataList[j].IncludeThisSection == true) {
                                var dateOne = new Date(testDataList[j - 1].WATER_SUPPLY_TEST_DT);
                                var dateTwo = new Date(testDataList[j].WATER_SUPPLY_TEST_DT);
                                if (dateTwo > dateOne) {
                                    latestIndex = j;
                                }
                            }
                        }
                        if (latestIndex != -1) {
                            tempCount++;
                            var key = 'Water Supply' + tempCount;
                            var tempValuesArray = [];
                            var calculatedFlow = 0;
                            var calculatedPressure = 0;
                            var staticFlow = 0;
                            var staticPressure = Number(testDataList[latestIndex].STATIC_PRESSURE_QT);
                            var residualFlow = Number(testDataList[latestIndex].RESIDUAL_FLOW_RATE_QT);
                            var residualPressure = Number(testDataList[latestIndex].RESIDUAL_PRESSURE_QT);
                            var highIndex = -1;
                            if (xSprinklersList.length > 1) {
                                highIndex = 0;
                                for (var k = 1; k < xSprinklersList.length; k++) {
                                    if (xSprinklersList[k] > xSprinklersList[k - 1]) {
                                        highIndex = k;
                                    }
                                }
                            }
                            else if (xSprinklersList.length == 1) {
                                highIndex = 0;
                            }
                            if (highIndex == -1) {
                                calculatedFlow = 1000;
                            }
                            else {
                                calculatedFlow = xSprinklersList[highIndex] + 1000;
                            }
                            calculatedPressure = ((Math.pow(calculatedFlow, 1.85)) / (Math.pow(residualFlow, 1.85)) / (residualPressure - staticPressure)) + staticPressure;
                            if (residualFlow < calculatedFlow) {
                                tempValuesArray = [{
                                        x: Math.round(staticFlow * 100) / 100,
                                        y: Math.round(staticPressure * 100) / 100
                                    },
                                    {
                                        x: Math.round(residualFlow * 100) / 100,
                                        y: Math.round(residualPressure * 100) / 100
                                    },
                                    {
                                        x: Math.round(calculatedFlow * 100) / 100,
                                        y: Math.round(calculatedPressure * 100) / 100
                                    }];
                            }
                            else {
                                tempValuesArray = [{
                                        x: Math.round(staticFlow * 100) / 100,
                                        y: Math.round(staticPressure * 100) / 100
                                    },
                                    {
                                        x: Math.round(calculatedFlow * 100) / 100,
                                        y: Math.round(calculatedPressure * 100) / 100
                                    }];
                            }
                            this.chartData.push({
                                key: key,
                                values: tempValuesArray
                            });
                        }
                    }
                }
            }
        }
        if (combinedChartData.FirePumpDetailsPage && combinedChartData.FirePumpDetailsPage.FirePumpDetailsList) {
            var firePumpData = combinedChartData.FirePumpDetailsPage.FirePumpDetailsList;
            if (firePumpData.length > 0) {
                var tempCount = 0;
                for (var i = 0; i < firePumpData.length; i++) {
                    if (firePumpData[i].FirePumpPerfList && firePumpData[i].FirePumpPerfList.length > 0) {
                        var latestIndex = -1;
                        if (firePumpData[i].FirePumpPerfList.length == 1) {
                            latestIndex = 0;
                        }
                        else {
                            latestIndex = 0;
                            for (var j = 1; j < firePumpData[i].FirePumpPerfList.length; j++) {
                                var dateOne = new Date(firePumpData[i].FirePumpPerfList[j - 1].FIRE_PUMP_TEST_DT);
                                var dateTwo = new Date(firePumpData[i].FirePumpPerfList[j].FIRE_PUMP_TEST_DT);
                                if (dateTwo > dateOne) {
                                    latestIndex = j;
                                }
                            }
                        }
                        if (latestIndex != -1) {
                            if (firePumpData[i].FirePumpPerfList[latestIndex].FirePumpTestPointsList.length > 0) {
                                tempCount++;
                                var testPointList = firePumpData[i].FirePumpPerfList[latestIndex].FirePumpTestPointsList;
                                var key = 'Fire Pump' + tempCount;
                                var valuesList = [];
                                for (var k = 0; k < testPointList.length; k++) {
                                    var measuredFlow = Number(testPointList[k].MEASURED_FLOW_QT);
                                    var dischargePressure = Number(testPointList[k].DISCHARGE_PRESSURE_QT);
                                    valuesList.push({
                                        x: Math.round(measuredFlow * 100) / 100,
                                        y: Math.round(dischargePressure * 100) / 100
                                    });
                                }
                                this.chartData.push({
                                    key: key,
                                    values: valuesList
                                });
                            }
                        }
                    }
                }
            }
        }
        var xLabel = 'Flow (' + this.xUnit + ')';
        var yLabel = 'Pressure (' + this.yUnit + ')';
        this.optionsData = {
            chart: {
                type: 'lineChart',
                height: 300,
                margin: {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 100
                },
                useInteractiveGuideline: true,
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: xLabel,
                    tickFormat: function (d) {
                        return d3.format(',2r')(d);
                    },
                },
                yAxis: {
                    axisLabel: yLabel,
                    axisLabelDistance: -10
                }
            }
        };
        this.dateReadyFlag = true;
    };
    CombinedChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'combined-chart',
            templateUrl: 'combined-chart.component.html',
            providers: [configuration_1.Configuration, localStorageService_1.LocalStorageService, validationMessages_1.ValidationMessages, combined_chart_service_1.CombinedChartService],
        }), 
        __metadata('design:paramtypes', [combined_chart_service_1.CombinedChartService, validationMessages_1.ValidationMessages, componentCommunicationService_1.ComponentCommunicationService, common_service_1.CommonService, localStorageService_1.LocalStorageService])
    ], CombinedChartComponent);
    return CombinedChartComponent;
}());
exports.CombinedChartComponent = CombinedChartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSxtQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQUNsRSx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRSw4Q0FBOEMseUNBQXlDLENBQUMsQ0FBQTtBQVd4RjtJQVNFLGdDQUFvQixvQkFBMkMsRUFBVSxzQkFBMEMsRUFBVSxHQUFpQyxFQUFVLGFBQTJCLEVBQVUsbUJBQXVDO1FBQWhPLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFSNU8sY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQU9yQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3ZELENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxREFBb0IsR0FBcEI7UUFB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QUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxrQkFBa0IsRUFBRSxHQUFHO2dCQUN2QixLQUFLLEVBQUU7b0JBQ0gsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFVBQVUsRUFBRSxVQUFVLENBQU07d0JBQ3hCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixDQUFDO2lCQUNKO2dCQUNELEtBQUssRUFBRTtvQkFDSCxTQUFTLEVBQUUsTUFBTTtvQkFDakIsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFO2lCQUN6QjthQUNKO1NBQ0osQ0FBQTtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUE5UUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw2QkFBYSxFQUFFLHlDQUFtQixFQUFFLHVDQUFrQixFQUFFLDZDQUFvQixDQUFDO1NBQzFGLENBQUM7OzhCQUFBO0lBMlFGLDZCQUFDO0FBQUQsQ0F6UUEsQUF5UUMsSUFBQTtBQXpRWSw4QkFBc0IseUJBeVFsQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xvY2FsU3RvcmFnZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbWJpbmVkQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9jb21iaW5lZC1jaGFydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wQ29tbUludGVyZmFjZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbWJpbmVkLWNoYXJ0JywgIFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tYmluZWQtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0NvbmZpZ3VyYXRpb24sIExvY2FsU3RvcmFnZVNlcnZpY2UsIFZhbGlkYXRpb25NZXNzYWdlcywgQ29tYmluZWRDaGFydFNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJpbmVkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgY2hhcnREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgY29tYmluZWRDaGFydERhdGE6IGFueTtcclxuICBwcml2YXRlIGRhdGVSZWFkeUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHNpdGU6YW55O1xyXG4gIHByaXZhdGUgeFVuaXQ6IHN0cmluZztcclxuICBwcml2YXRlIHlVbml0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBvcHRpb25zRGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIENvbWJpbmVkQ2hhcnRTZXJ2aWNlIDogQ29tYmluZWRDaGFydFNlcnZpY2UsIHByaXZhdGUgX3ZhbGlkYXRpb25NZXNzYWdlQ29tcDogVmFsaWRhdGlvbk1lc3NhZ2VzLCBwcml2YXRlIGNjczpDb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblNlcnZpY2UsIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNvbW1vblNlcnZpY2UgPSBjb21tb25TZXJ2aWNlO1xyXG4gICAgdGhpcy5Db21iaW5lZENoYXJ0U2VydmljZSA9IENvbWJpbmVkQ2hhcnRTZXJ2aWNlO1xyXG4gICAgdGhpcy5fdmFsaWRhdGlvbk1lc3NhZ2VDb21wID0gX3ZhbGlkYXRpb25NZXNzYWdlQ29tcDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlUmVhZHlGbGFnID0gZmFsc2U7XHJcbiAgICB0aGlzLnNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgIHRoaXMuZ2V0Q29tYmluZWRDaGFydERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldENvbWJpbmVkQ2hhcnREYXRhKCkge1xyXG4gICAgICB0aGlzLkNvbWJpbmVkQ2hhcnRTZXJ2aWNlLmdldENvbWJpbmVkQ2hhcnREYXRhKHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuV2F0ZXJTdXBwbHlEZXRhaWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJpbmVkQ2hhcnREYXRhID0gZGF0YS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuV2F0ZXJTdXBwbHlEZXRhaWw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdW5pdE9iaiA9IHRoaXMuZ2V0UkZTVW5pdHMoZGF0YS5SRlNVbml0VHlwZSwgZGF0YS5SRlNEZXRhaWxzLldPUktJTkdfUFJFU1NVUkVfQ0QpO1xyXG4gICAgICAgICAgICB0aGlzLnhVbml0ID0gdW5pdE9iai5yZnNVbml0O1xyXG4gICAgICAgICAgICB0aGlzLnlVbml0ID0gdW5pdE9iai5yZnNQcmVzc3VyZVVuaXQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdDb21iaW5lZENoYXJ0KHRoaXMuY29tYmluZWRDaGFydERhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkNvbWJpbmVkIGNoYXJ0IGxvYWRpbmcgZGF0YSAtLS0tLS0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRSRlNVbml0cyhyZnNVbml0VHlwZSwgcmZzV29ya2luZ1ByZXNzdXJlQ0QpIHtcclxuICAgICAgICBsZXQgdW5pdE9iajphbnkgPSB7XHJcbiAgICAgICAgICAgIHJmc1VuaXQ6JycsXHJcbiAgICAgICAgICAgIHJmc1ByZXNzdXJlVW5pdDogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHJmc1VuaXRUeXBlICYmIHJmc1VuaXRUeXBlID09IFwiSW1wZXJpYWxcIikge1xyXG4gICAgICAgICAgICB1bml0T2JqLnJmc1VuaXQgPSBcImdwbVwiO1xyXG4gICAgICAgIH1lbHNlIGlmKHJmc1VuaXRUeXBlICYmIHJmc1VuaXRUeXBlID09IFwiTWV0cmljXCIpIHtcclxuICAgICAgICAgICAgdW5pdE9iai5yZnNVbml0ID0gXCJMcG1cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAocmZzV29ya2luZ1ByZXNzdXJlQ0QpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlBTSVwiOlxyXG4gICAgICAgICAgICAgICAgdW5pdE9iai5yZnNQcmVzc3VyZVVuaXQgPSBcInBzaVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJLUEFcIjpcclxuICAgICAgICAgICAgICAgIHVuaXRPYmoucmZzUHJlc3N1cmVVbml0ID0gXCJrUGFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTVBBXCI6XHJcbiAgICAgICAgICAgICAgICB1bml0T2JqLnJmc1ByZXNzdXJlVW5pdCA9IFwiTXBhXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJBUlwiOlxyXG4gICAgICAgICAgICAgICAgdW5pdE9iai5yZnNQcmVzc3VyZVVuaXQgPSBcImJhclwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bml0T2JqO1xyXG4gICAgfVxyXG5cclxuICBkcmF3Q29tYmluZWRDaGFydChjb21iaW5lZENoYXJ0RGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbWJpbmVkQ2hhcnREYXRhIC0gJyxjb21iaW5lZENoYXJ0RGF0YSk7XHJcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IFtdO1xyXG4gICAgLy9tYXAgc3ByaW5rbGVycyBjdXJ2ZSBkYXRhXHJcbiAgICBsZXQgeFNwcmlua2xlcnNMaXN0OiBhbnlbXSA9IFtdO1xyXG4gICAgaWYoY29tYmluZWRDaGFydERhdGEuU3ByaW5rbGVyRGV0YWlsUGFnZSAmJiBjb21iaW5lZENoYXJ0RGF0YS5TcHJpbmtsZXJEZXRhaWxQYWdlLlNwcmlua2xlckRhdGFMaXN0KSB7XHJcbiAgICAgICAgbGV0IHNwcmlua2xlcnNEYXRhID0gY29tYmluZWRDaGFydERhdGEuU3ByaW5rbGVyRGV0YWlsUGFnZS5TcHJpbmtsZXJEYXRhTGlzdDtcclxuICAgICAgICBpZihzcHJpbmtsZXJzRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ByaW5rbGVyc0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHNwcmlua2xlcnNEYXRhW2ldLkluY2x1ZGVUaGlzU2VjdGlvbiA9PSBcInRydWVcIiB8fCBzcHJpbmtsZXJzRGF0YVtpXS5JbmNsdWRlVGhpc1NlY3Rpb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSAnU3ByaW5rbGVycycgKyB0ZW1wQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhPbmUgPSBzcHJpbmtsZXJzRGF0YVtpXS5CT1JfRkxPV19XSVRIX0hPU0VfUVQgfHwgc3ByaW5rbGVyc0RhdGFbaV0uQk9SX0ZMT1dfV0lUSE9VVF9IT1NFX1FUO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4VHdvID0gTnVtYmVyKHhPbmUpICsgTnVtYmVyKHNwcmlua2xlcnNEYXRhW2ldLkhPU0VfUVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhTcHJpbmtsZXJzTGlzdC5wdXNoKHhUd28pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5Qm90aCA9IHNwcmlua2xlcnNEYXRhW2ldLkFESlVTVEVEX0JPUl9QUkVTU1VSRV9RVDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcE9uZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5yb3VuZCh4T25lICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5yb3VuZCh5Qm90aCAqIDEwMCkgLyAxMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBUd28gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGgucm91bmQoeFR3byAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGgucm91bmQoeUJvdGggKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbcE9uZSwgcFR3b11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbWFwIHdhdGVyIHN1cHBseSBjdXJ2ZXMgZGF0YVxyXG4gICAgaWYoY29tYmluZWRDaGFydERhdGEuV2F0ZXJTdXBwbHlEZXRhaWxzUGFnZSAmJiBjb21iaW5lZENoYXJ0RGF0YS5XYXRlclN1cHBseURldGFpbHNQYWdlLldhdGVyU3VwcGx5TGlzdCkge1xyXG4gICAgICAgIGxldCB3YXRlclN1cHBseURhdGEgPSBjb21iaW5lZENoYXJ0RGF0YS5XYXRlclN1cHBseURldGFpbHNQYWdlLldhdGVyU3VwcGx5TGlzdDtcclxuICAgICAgICBpZih3YXRlclN1cHBseURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcENvdW50ID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdhdGVyU3VwcGx5RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYod2F0ZXJTdXBwbHlEYXRhW2ldLldhdGVyU3VwcGx5UGVyZkRhdGEgJiYgd2F0ZXJTdXBwbHlEYXRhW2ldLldhdGVyU3VwcGx5UGVyZkRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0RGF0YUxpc3QgPSB3YXRlclN1cHBseURhdGFbaV0uV2F0ZXJTdXBwbHlQZXJmRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGF0ZXN0SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGVzdERhdGFMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGogPT0gMCAmJiAodGVzdERhdGFMaXN0W2pdLkluY2x1ZGVUaGlzU2VjdGlvbiA9PSBcInRydWVcIiB8fCB0ZXN0RGF0YUxpc3Rbal0uSW5jbHVkZVRoaXNTZWN0aW9uID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRlc3REYXRhTGlzdFtqXS5JbmNsdWRlVGhpc1NlY3Rpb24gPT0gXCJ0cnVlXCIgfHwgdGVzdERhdGFMaXN0W2pdLkluY2x1ZGVUaGlzU2VjdGlvbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZU9uZSA9IG5ldyBEYXRlKHRlc3REYXRhTGlzdFtqLTFdLldBVEVSX1NVUFBMWV9URVNUX0RUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlVHdvID0gbmV3IERhdGUodGVzdERhdGFMaXN0W2pdLldBVEVSX1NVUFBMWV9URVNUX0RUKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0ZVR3byA+IGRhdGVPbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RJbmRleCA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobGF0ZXN0SW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSAnV2F0ZXIgU3VwcGx5JyArIHRlbXBDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBWYWx1ZXNBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGN1bGF0ZWRGbG93OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsY3VsYXRlZFByZXNzdXJlOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdGljRmxvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0aWNQcmVzc3VyZSA9IE51bWJlcih0ZXN0RGF0YUxpc3RbbGF0ZXN0SW5kZXhdLlNUQVRJQ19QUkVTU1VSRV9RVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNpZHVhbEZsb3cgPSBOdW1iZXIodGVzdERhdGFMaXN0W2xhdGVzdEluZGV4XS5SRVNJRFVBTF9GTE9XX1JBVEVfUVQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzaWR1YWxQcmVzc3VyZSA9IE51bWJlcih0ZXN0RGF0YUxpc3RbbGF0ZXN0SW5kZXhdLlJFU0lEVUFMX1BSRVNTVVJFX1FUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4U3ByaW5rbGVyc0xpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgayA9IDE7IGsgPCB4U3ByaW5rbGVyc0xpc3QubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih4U3ByaW5rbGVyc0xpc3Rba10gPiB4U3ByaW5rbGVyc0xpc3Rbay0xXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoSW5kZXggPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoeFNwcmlua2xlcnNMaXN0Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhpZ2hJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZEZsb3cgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkRmxvdyA9IHhTcHJpbmtsZXJzTGlzdFtoaWdoSW5kZXhdICsgMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUHJlc3N1cmUgPSAoKGNhbGN1bGF0ZWRGbG93ICoqIDEuODUpIC8gKHJlc2lkdWFsRmxvdyAqKiAxLjg1KSAvIChyZXNpZHVhbFByZXNzdXJlIC0gc3RhdGljUHJlc3N1cmUpKSArIHN0YXRpY1ByZXNzdXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNpZHVhbEZsb3cgPCBjYWxjdWxhdGVkRmxvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZhbHVlc0FycmF5ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLnJvdW5kKHN0YXRpY0Zsb3cgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGgucm91bmQoc3RhdGljUHJlc3N1cmUgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGgucm91bmQocmVzaWR1YWxGbG93ICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJvdW5kKHJlc2lkdWFsUHJlc3N1cmUgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGgucm91bmQoY2FsY3VsYXRlZEZsb3cgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGgucm91bmQoY2FsY3VsYXRlZFByZXNzdXJlICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWYWx1ZXNBcnJheSA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5yb3VuZChzdGF0aWNGbG93ICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJvdW5kKHN0YXRpY1ByZXNzdXJlICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLnJvdW5kKGNhbGN1bGF0ZWRGbG93ICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGNhbGN1bGF0ZWRQcmVzc3VyZSAqIDEwMCkgLyAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB0ZW1wVmFsdWVzQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9tYXAgZmlyZSBwdW1wIGN1cnZlcyBkYXRhXHJcbiAgICBpZihjb21iaW5lZENoYXJ0RGF0YS5GaXJlUHVtcERldGFpbHNQYWdlICYmIGNvbWJpbmVkQ2hhcnREYXRhLkZpcmVQdW1wRGV0YWlsc1BhZ2UuRmlyZVB1bXBEZXRhaWxzTGlzdCkge1xyXG4gICAgICAgIGxldCBmaXJlUHVtcERhdGEgPSBjb21iaW5lZENoYXJ0RGF0YS5GaXJlUHVtcERldGFpbHNQYWdlLkZpcmVQdW1wRGV0YWlsc0xpc3Q7XHJcbiAgICAgICAgaWYoZmlyZVB1bXBEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaXJlUHVtcERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0ICYmIGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGF0ZXN0SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAvL0luY2x1ZGUgaW4gZ3JhcGggcGFyYW1ldGVyIG5vdCB5ZXQgaW4gc2VydmljZSByZXNwb25zZSwgd2lsbCBjaGVjayBpdCBsYXRlclxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMTsgaiA8IGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZU9uZSA9IG5ldyBEYXRlKGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0W2otMV0uRklSRV9QVU1QX1RFU1RfRFQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVUd28gPSBuZXcgRGF0ZShmaXJlUHVtcERhdGFbaV0uRmlyZVB1bXBQZXJmTGlzdFtqXS5GSVJFX1BVTVBfVEVTVF9EVClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGVUd28gPiBkYXRlT25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0SW5kZXggPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxhdGVzdEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpcmVQdW1wRGF0YVtpXS5GaXJlUHVtcFBlcmZMaXN0W2xhdGVzdEluZGV4XS5GaXJlUHVtcFRlc3RQb2ludHNMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RQb2ludExpc3QgPSBmaXJlUHVtcERhdGFbaV0uRmlyZVB1bXBQZXJmTGlzdFtsYXRlc3RJbmRleF0uRmlyZVB1bXBUZXN0UG9pbnRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSAnRmlyZSBQdW1wJyArIHRlbXBDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXNMaXN0OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBrID0gMDsgayA8IHRlc3RQb2ludExpc3QubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVhc3VyZWRGbG93ID0gTnVtYmVyKHRlc3RQb2ludExpc3Rba10uTUVBU1VSRURfRkxPV19RVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpc2NoYXJnZVByZXNzdXJlID0gTnVtYmVyKHRlc3RQb2ludExpc3Rba10uRElTQ0hBUkdFX1BSRVNTVVJFX1FUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLnJvdW5kKG1lYXN1cmVkRmxvdyAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGgucm91bmQoZGlzY2hhcmdlUHJlc3N1cmUgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHhMYWJlbCA9ICdGbG93ICgnICsgdGhpcy54VW5pdCArICcpJztcclxuICAgIGxldCB5TGFiZWwgPSAnUHJlc3N1cmUgKCcgKyB0aGlzLnlVbml0ICsgJyknO1xyXG4gICAgdGhpcy5vcHRpb25zRGF0YSA9IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZUNoYXJ0JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIC8vd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1c2VJbnRlcmFjdGl2ZUd1aWRlbGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgeDogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeTogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1ZhbHVlczogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWVGb3JtYXQ6IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoJywuNGYnKShkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHhMYWJlbCwvLydGbG93IChncG0pJyxcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ6IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KCcsMnInKShkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHlMYWJlbCwvLydQcmVzc3VyZSAocHNpKScsXHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWxEaXN0YW5jZTogLTEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGVSZWFkeUZsYWcgPSB0cnVlO1xyXG4gIH0gXHJcblxyXG59Il19
