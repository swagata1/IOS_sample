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
var hazards_service_1 = require('../../shared/hazards.service');
var localStorageService_1 = require('../../../shared/localStorageService');
var hazard_model_1 = require('../../../shared/model/hazard.model');
var componentCommunicationService_1 = require('../../../shared/componentCommunicationService');
var offline_service_1 = require('../../../shared/services/offline.service');
var location_data_model_1 = require('../../../shared/model/location-data.model');
var commercial_cooking_component_1 = require('./hazard-types/commercial-cooking/commercial-cooking.component');
var boilers_component_1 = require('./hazard-types/boilers/boilers.component');
var rack_storage_component_1 = require('./hazard-types/rack-storage/rack-storage.component');
var battery_room_component_1 = require('./hazard-types/battery-room/battery-room.component');
var ovens_furnaces_component_1 = require('./hazard-types/ovens-furnaces/ovens-furnaces.component');
var floor_non_rack_component_1 = require('./hazard-types/floor-non-rack/floor-non-rack.component');
var indoor_idle_pallet_component_1 = require('./hazard-types/indoor-idle-pallet/indoor-idle-pallet.component');
var outdoor_idle_pallet_component_1 = require('./hazard-types/outdoor-idle-pallet/outdoor-idle-pallet.component');
var ammonia_refrigeration_component_1 = require('./hazard-types/ammonia-refrigeration/ammonia-refrigeration.component');
var aircraft_hangar_component_1 = require('./hazard-types/aircraft-hangar/aircraft-hangar.component');
var electrical_systems_component_1 = require('./hazard-types/electrical-systems/electrical-systems.component');
var hydraulic_fluid_systems_component_1 = require('./hazard-types/hydraulic-fluid-systems/hydraulic-fluid-systems.component');
var flammable_gas_storage_component_1 = require('./hazard-types/flammable-gas-storage/flammable-gas-storage.component');
var flammable_liquids_storage_component_1 = require('./hazard-types/flammable-liquids-storage/flammable-liquids-storage.component');
var flammables_bulk_storage_component_1 = require('./hazard-types/flammables-bulk-storage/flammables-bulk-storage.component');
var plastic_lined_tanks_component_1 = require('./hazard-types/plastic-lined-tanks/plastic-lined-tanks.component');
var roll_paper_storage_component_1 = require('./hazard-types/roll-paper-storage/roll-paper-storage.component');
var rubber_tire_storage_component_1 = require('./hazard-types/rubber-tire-storage/rubber-tire-storage.component');
var HazardsAddComponent = (function () {
    function HazardsAddComponent(hazardsService, localStorageService, ccs, offlineService) {
        this.hazardsService = hazardsService;
        this.localStorageService = localStorageService;
        this.ccs = ccs;
        this.offlineService = offlineService;
        this.mainType = [];
        this.addModalObject = { "HAZARD_MAIN_TYPE_CD": "", "HAZARD_TYPE_CD": "", "HAZARD_CATEGORY_CD": "", "HAZARD_CLASS_CD": "", "STORAGE_ARRANGEMENT_CD": "", "PREDOMINANT_CLASS_CD": "" };
        this.sprinklersData = [];
        this.transporter = { "hazardObj": "", "state": "", "index": "" };
        this.isLinked = [];
        this.parentModel = {};
        this.riDataList = [];
        this.modalVisible = false;
        this.key = "";
        this.cancel = new core_1.EventEmitter();
    }
    HazardsAddComponent.prototype.showModal = function (state, data, index) {
        this.populateSystemAndAdequacy();
        this.ngOnInit();
        this.state = state;
        this.index = index;
        this.riDataList = [];
        if (state == "Update") {
            this.updateValues(data);
        }
        this.modal.show();
        this.modalVisible = true;
    };
    HazardsAddComponent.prototype.updateValues = function (data) {
        this.hazardModel.HAZARD_MAIN_TYPE_CD = data.HAZARD_MAIN_TYPE_CD;
        this.hazardModel.HAZARD_TYPE_CD = data.HAZARD_TYPE_CD;
        this.hazardModel.HAZARD_CLASS_CD = data.HAZARD_CLASS_CD;
        this.hazardModel.STORAGE_ARRANGEMENT_CD = data.STORAGE_ARRANGEMENT_CD;
        this.hazardModel.PREDOMINANT_CLASS_CD = data.PREDOMINANT_CLASS_CD;
        this.hazardModel.SPECIFIC_LOCATION_NM = data.SPECIFIC_LOCATION_NM;
        this.hazardModel.HAZARD_AREA_SIZE_QT = data.HAZARD_AREA_SIZE_QT;
        this.hazardModel.STORAGE_HEIGHT_QT = data.STORAGE_HEIGHT_QT;
        this.hazardModel.CEILING_HEIGHT_QT = data.CEILING_HEIGHT_QT;
        this.hazardModel.HazardComments[0].PrimaryLanguage = data.HazardComments[0].PrimaryLanguage;
        this.hazardModel.HAZARD_RANDOM_ID_TOLINK = data.HAZARD_RANDOM_ID_TOLINK;
        this.hazardModel.sprinklers = data.sprinklers;
        for (var i = 0; i < this.catOccData.length; i++) {
            if (this.catOccData[i].ELEMENT_CD == data.HAZARD_CATEGORY_CD) {
                this.hazardModel.HAZARD_CATEGORY_CD = data.HAZARD_CATEGORY_CD;
            }
        }
        this.state = "Update";
        this.getRIData();
        this.setHazardTypesData(data);
    };
    HazardsAddComponent.prototype.setHazardTypesData = function (data) {
        if (data.HAZARD_TYPE_CD) {
            var getHazardType = this.type.filter(function (item) { return item.Code == data.HAZARD_TYPE_CD; });
            this.hazardType = getHazardType[0].Description;
            this.key = this.hazardType;
            this.key = this.key.replace(/-|\s/g, "");
            this.hazardModel[this.key] = data[this.key] ? data[this.key] : {};
        }
    };
    HazardsAddComponent.prototype.hideModal = function () {
        this.modalVisible = false;
        this.modal.hide();
    };
    HazardsAddComponent.prototype.ngOnInit = function () {
        this.site = this.localStorageService.get('locationData');
        this.getDropdownData();
        this.viewType = 'readonly';
        this.getDropdownData();
        this.hazardModel = new hazard_model_1.Hazard();
        this.isLinked = [];
    };
    HazardsAddComponent.prototype.getDropdownData = function () {
        this.getCategoryDropdownData();
        this.getMainTypeDropdownData();
        this.getTypeDropdownData();
        this.getClassDropdownData();
    };
    HazardsAddComponent.prototype.getMainTypeDropdownData = function () {
        var _this = this;
        this.hazardsService.getMainTypeDropdownData().subscribe(function (data) {
            _this.mainType = data;
        }, function (err) { return console.error(err); });
    };
    HazardsAddComponent.prototype.getCategoryDropdownData = function () {
        var _this = this;
        this.hazardsService.getCategoryOccupancyDropdownData().subscribe(function (data) {
            _this.catOccData = data.filter(function (item) { return item.OCCUPANCY_CD == _this.occupancy_cd; });
        }, function (err) { return console.error(err); });
    };
    HazardsAddComponent.prototype.getOccupancyData = function () {
        var _this = this;
        this.hazardsService.getSprinklersData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            _this.occupancy_cd = data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD;
        }, function (err) { return console.error(err); });
    };
    HazardsAddComponent.prototype.getTypeDropdownData = function () {
        var _this = this;
        this.hazardsService.getTypeDropdownData().subscribe(function (data) {
            _this.type = data;
        }, function (err) { return console.error(err); });
    };
    HazardsAddComponent.prototype.getClassDropdownData = function () {
        var _this = this;
        this.hazardsService.getClassDropdownData().subscribe(function (data) {
            _this.hazardClass = data.filter(function (item) { return item.ElementName == "HAZARD_CLASS_CD"; });
            _this.storageArrangement = data.filter(function (item) { return item.ElementName == "STORAGE_ARRANGEMENT_CD"; });
            _this.predominantCommodityClass = data.filter(function (item) { return item.ElementName == "PREDOMINANT_CLASS_CD"; });
        }, function (err) { return console.error(err); });
    };
    HazardsAddComponent.prototype.populateSystemAndAdequacy = function () {
        var _this = this;
        this.hazardsService.getSprinklersDropdownData().subscribe(function (data) {
            _this.systemTypes = data.filter(function (item) { return item.ElementName == "SYSTEMTYPE"; });
            _this.adequacyValues = data.filter(function (item) { return item.ElementName == "WATER_ADEQ"; });
        }, function (err) { return console.error(err); }, function () { return _this.getSprinklersData(); });
    };
    HazardsAddComponent.prototype.getSprinklersData = function () {
        var _this = this;
        var response = [];
        this.hazardsService.getSprinklersData(this.site.RFS_PARENT_ID, this.site.RFS_ID).subscribe(function (data) {
            _this.occupancy_cd = data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.OCCUPANCY_CD;
            console.log('this.preTradeSectorCode - ', _this.preTradeSectorCode);
            if (data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.SprinklerDataPage && data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.SprinklerDataPage.SprinklerDataList) {
                response = data.AssessmentLocationList[0].LocAssessment.COPE_PAGE.SprinklerDataPage.SprinklerDataList;
            }
            else {
                response = [];
            }
        }, function (err) { return console.error(err); }, function () { return _this.sprinklersDataHandler(response); });
    };
    HazardsAddComponent.prototype.sprinklersDataHandler = function (response) {
        var _this = this;
        if (response.length > 0) {
            if (response.length > 0) {
                var count = 0;
                this.randomIDGeneratorInterval = setInterval(function () {
                    if (count < response.length) {
                        if (!('SPRINKLER_RANDOM_ID_TOLINK' in response[count])) {
                            var timestampkey = new Date();
                            response[count].SPRINKLER_RANDOM_ID_TOLINK = timestampkey.getTime();
                        }
                        if (count == response.length - 1) {
                            clearInterval(_this.randomIDGeneratorInterval);
                            _this.saveSprinklerDataToFile(response);
                        }
                        count++;
                    }
                }, 1);
            }
            var _loop_1 = function(index) {
                response[index]['SYSTEM_TYPE_DESCRIPTION'] = '';
                response[index]['SPRINKLER_ADEQUACY_DESCRIPTION'] = '';
                response[index].IncludeThisSection = true;
                if (response[index].SYSTEM_TYPE) {
                    var filteredSystemType = this_1.systemTypes.filter(function (systemType) { return systemType.Code == response[index].SYSTEM_TYPE; })[0];
                    response[index]['SYSTEM_TYPE_DESCRIPTION'] = filteredSystemType.Description;
                }
                if (response[index].SPRINKLER_ADEQUACY_CD)
                    response[index]['SPRINKLER_ADEQUACY_DESCRIPTION'] = this_1.adequacyValues.filter(function (adequacy) { return adequacy.Code == response[index].SPRINKLER_ADEQUACY_CD; })[0].Description;
                if (this_1.hazardModel.sprinklers && this_1.hazardModel.sprinklers.indexOf(response[index]['SPRINKLER_RANDOM_ID_TOLINK']) !== -1) {
                    response[index]["isLinked"] = true;
                }
                else {
                    response[index]["isLinked"] = false;
                }
            };
            var this_1 = this;
            for (var index in response) {
                _loop_1(index);
            }
        }
        this.sprinklersData = response;
        console.log("Sprinklers - Done loading data.");
    };
    HazardsAddComponent.prototype.getRIData = function () {
        var riDataCheck = this.ccs.getRiskImprovementsUpdatedData();
        this.riDataList = [];
        if (riDataCheck && this.state == 'Update' && this.hazardModel.HAZARD_RANDOM_ID_TOLINK && riDataCheck.RiskImprvmnt_PAGES && riDataCheck.RiskImprvmnt_PAGES.length >= 0) {
            for (var index in riDataCheck.RiskImprvmnt_PAGES) {
                if (riDataCheck.RiskImprvmnt_PAGES[index].LINKED_HAZARDS && riDataCheck.RiskImprvmnt_PAGES[index].LINKED_HAZARDS.length > 0) {
                    if (riDataCheck.RiskImprvmnt_PAGES[index].LINKED_HAZARDS.indexOf(this.hazardModel.HAZARD_RANDOM_ID_TOLINK) > -1)
                        this.riDataList.push(riDataCheck.RiskImprvmnt_PAGES[index]);
                }
            }
        }
    };
    HazardsAddComponent.prototype.saveSprinklerDataToFile = function (sprinklerData) {
        var _this = this;
        var rfsParentId = this.site.RFS_PARENT_ID;
        var rfsId = this.site.RFS_ID;
        this.offlineService.readLocationData(rfsParentId, rfsId).subscribe(function (data) {
            var locData = data;
            locData.LocationAssessment.LAWorkPageList[0].
                AssessmentLocationList[0].LocAssessment.COPE_PAGE.
                SprinklerDataPage.SprinklerDataList = sprinklerData;
            var locationDataModel = new location_data_model_1.LocationDataModel(rfsParentId, rfsId, 'sprinkler');
            locationDataModel.setRawData(locData);
            _this.offlineService.writeLocationData(locationDataModel);
        });
    };
    HazardsAddComponent.prototype.dropDownChangeHandler = function (event) {
        if (!event) {
            this.hazardType = "";
        }
    };
    HazardsAddComponent.prototype.dropDownHandler = function (event, data) {
        if (data == 'type') {
            this.hazardModel.HAZARD_TYPE_CD = event.Code;
            this.hazardType = event.Description;
            this.key = event.Description;
            this.key = this.key.replace(/-|\s/g, "");
            this.hazardModel[this.key] = this.hazardModel[this.key] ? this.hazardModel[this.key] : {};
        }
        else if (data == 'class') {
            this.classTemp = event.Code;
        }
    };
    HazardsAddComponent.prototype.saveData = function () {
        for (var i in this.sprinklersData) {
            if (this.sprinklersData[i].isLinked) {
                if (this.hazardModel.sprinklers) {
                    this.hazardModel.sprinklers.push(this.sprinklersData[i].SPRINKLER_RANDOM_ID_TOLINK);
                }
                else {
                    this.hazardModel.sprinklers = [];
                    this.hazardModel.sprinklers.push(this.sprinklersData[i].SPRINKLER_RANDOM_ID_TOLINK);
                }
            }
        }
        this.hazardModel.HAZARD_CLASS_CD = this.classTemp;
        this.transporter.hazardObj = this.hazardModel;
        console.log(this.hazardModel);
        this.transporter.index = this.index;
        this.transporter.state = this.state;
        if (this.transporter.state == 'New') {
            var randomID = new Date();
            this.transporter.hazardObj.HAZARD_RANDOM_ID_TOLINK = randomID.getTime();
        }
        this.ccs.setHazardAddData(this.transporter);
        this.hideModal();
    };
    __decorate([
        core_1.ViewChild('hazardsAddModal'), 
        __metadata('design:type', core_1.ElementRef)
    ], HazardsAddComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HazardsAddComponent.prototype, "cancel", void 0);
    HazardsAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hazards-add',
            templateUrl: 'hazards-add.component.html',
            providers: [hazards_service_1.HazardsService, localStorageService_1.LocalStorageService, offline_service_1.OfflineService],
            directives: [commercial_cooking_component_1.CommercialCookingComponent, boilers_component_1.BoilersComponent, rack_storage_component_1.RackStorageComponent, battery_room_component_1.BatteryRoomComponent, ovens_furnaces_component_1.OvensFurnacesComponent, floor_non_rack_component_1.FloorNonRackComponent, indoor_idle_pallet_component_1.IndoorIdlePalletComponent, outdoor_idle_pallet_component_1.OutdoorIdlePalletComponent, ammonia_refrigeration_component_1.AmmoniaRefrigerationComponent, aircraft_hangar_component_1.AircraftHangarComponent, electrical_systems_component_1.ElectricalSystemsComponent, hydraulic_fluid_systems_component_1.HydraulicFluidSystemsComponent, flammable_gas_storage_component_1.FlammableGasStorageComponent, flammable_liquids_storage_component_1.FlammableLiquidsStorageComponent, flammables_bulk_storage_component_1.FlammablesBulkStorageComponent, plastic_lined_tanks_component_1.PlasticLinedTanksComponent, roll_paper_storage_component_1.RollPaperStorageComponent, rubber_tire_storage_component_1.RubberTireStorageComponent]
        }), 
        __metadata('design:paramtypes', [hazards_service_1.HazardsService, localStorageService_1.LocalStorageService, componentCommunicationService_1.ComponentCommunicationService, offline_service_1.OfflineService])
    ], HazardsAddComponent);
    return HazardsAddComponent;
}());
exports.HazardsAddComponent = HazardsAddComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkcy1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFJcEcsZ0NBQW9GLDhCQUE4QixDQUFDLENBQUE7QUFDbkgsb0NBQW9GLHFDQUFxQyxDQUFDLENBQUE7QUFDMUgsNkJBQW9GLG9DQUFvQyxDQUFDLENBQUE7QUFDekgsOENBQW9GLCtDQUErQyxDQUFDLENBQUE7QUFDcEksZ0NBQStCLDBDQUEwQyxDQUFDLENBQUE7QUFFMUUsb0NBQWtDLDJDQUEyQyxDQUFDLENBQUE7QUFFOUUsNkNBQTJDLGdFQUFnRSxDQUFDLENBQUE7QUFDNUcsa0NBQWlDLDBDQUEwQyxDQUFDLENBQUE7QUFDNUUsdUNBQXFDLG9EQUFvRCxDQUFDLENBQUE7QUFDMUYsdUNBQXFDLG9EQUFvRCxDQUFDLENBQUE7QUFDMUYseUNBQXVDLHdEQUF3RCxDQUFDLENBQUE7QUFDaEcseUNBQXNDLHdEQUF3RCxDQUFDLENBQUE7QUFDL0YsNkNBQTBDLGdFQUFnRSxDQUFDLENBQUE7QUFDM0csOENBQTJDLGtFQUFrRSxDQUFDLENBQUE7QUFDOUcsZ0RBQThDLHNFQUFzRSxDQUFDLENBQUE7QUFHckgsMENBQWdELDBEQUEwRCxDQUFDLENBQUE7QUFDM0csNkNBQWdELGdFQUFnRSxDQUFDLENBQUE7QUFDakgsa0RBQWlELDBFQUEwRSxDQUFDLENBQUE7QUFDNUgsZ0RBQWdELHNFQUFzRSxDQUFDLENBQUE7QUFDdkgsb0RBQWlELDhFQUE4RSxDQUFDLENBQUE7QUFDaEksa0RBQWdELDBFQUEwRSxDQUFDLENBQUE7QUFDM0gsOENBQTRDLGtFQUFrRSxDQUFDLENBQUE7QUFDL0csNkNBQTZDLGdFQUFnRSxDQUFDLENBQUE7QUFDOUcsOENBQTRDLGtFQUFrRSxDQUFDLENBQUE7QUFXL0c7SUE0QkUsNkJBQW9CLGNBQStCLEVBQVUsbUJB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QUFFLGdEQUFxQixFQUFFLHdEQUF5QixFQUFFLDBEQUEwQixFQUFFLCtEQUE2QixFQUFFLG1EQUF1QixFQUFFLHlEQUEwQixFQUFFLGtFQUE4QixFQUFFLDhEQUE0QixFQUFFLHNFQUFnQyxFQUFFLGtFQUE4QixFQUFFLDBEQUEwQixFQUFFLHdEQUF5QixFQUFFLDBEQUEwQixDQUFDO1NBQ3BmLENBQUM7OzJCQUFBO0lBb1ZGLDBCQUFDO0FBQUQsQ0FsVkEsQUFrVkMsSUFBQTtBQWxWWSwyQkFBbUIsc0JBa1YvQixDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkcy1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2Ryb3Bkb3duQ29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYXphcmRzU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vc2hhcmVkL2hhemFyZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IEhhemFyZCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWwvaGF6YXJkLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRDb21tdW5pY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IE9mZmxpbmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhdmVkVG9GaWxlU3lzdGVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZS9zYXZlZC10by1mcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkRhdGFNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbC9sb2NhdGlvbi1kYXRhLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IENvbW1lcmNpYWxDb29raW5nQ29tcG9uZW50IH0gZnJvbSAnLi9oYXphcmQtdHlwZXMvY29tbWVyY2lhbC1jb29raW5nL2NvbW1lcmNpYWwtY29va2luZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb2lsZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9oYXphcmQtdHlwZXMvYm9pbGVycy9ib2lsZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhY2tTdG9yYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9oYXphcmQtdHlwZXMvcmFjay1zdG9yYWdlL3JhY2stc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYXR0ZXJ5Um9vbUNvbXBvbmVudCB9IGZyb20gJy4vaGF6YXJkLXR5cGVzL2JhdHRlcnktcm9vbS9iYXR0ZXJ5LXJvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlbnNGdXJuYWNlc0NvbXBvbmVudCB9IGZyb20gJy4vaGF6YXJkLXR5cGVzL292ZW5zLWZ1cm5hY2VzL292ZW5zLWZ1cm5hY2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZsb29yTm9uUmFja0NvbXBvbmVudCB9IGZyb20gJy4vaGF6YXJkLXR5cGVzL2Zsb29yLW5vbi1yYWNrL2Zsb29yLW5vbi1yYWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZG9vcklkbGVQYWxsZXRDb21wb25lbnQgfSBmcm9tICcuL2hhemFyZC10eXBlcy9pbmRvb3ItaWRsZS1wYWxsZXQvaW5kb29yLWlkbGUtcGFsbGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGRvb3JJZGxlUGFsbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9oYXphcmQtdHlwZXMvb3V0ZG9vci1pZGxlLXBhbGxldC9vdXRkb29yLWlkbGUtcGFsbGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFtbW9uaWFSZWZyaWdlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9oYXphcmQtdHlwZXMvYW1tb25pYS1yZWZyaWdlcmF0aW9uL2FtbW9uaWEtcmVmcmlnZXJhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuLy8gLy9cclxuaW1wb3J0IHsgQWlyY3JhZnRIYW5nYXJDb21wb25lbnQgfSBcdFx0ICAgICAgZnJvbSAnLi9oYXphcmQtdHlwZXMvYWlyY3JhZnQtaGFuZ2FyL2FpcmNyYWZ0LWhhbmdhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbGVjdHJpY2FsU3lzdGVtc0NvbXBvbmVudCB9IFx0ICAgIGZyb20gJy4vaGF6YXJkLXR5cGVzL2VsZWN0cmljYWwtc3lzdGVtcy9lbGVjdHJpY2FsLXN5c3RlbXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHlkcmF1bGljRmx1aWRTeXN0ZW1zQ29tcG9uZW50IH0gICBmcm9tICcuL2hhemFyZC10eXBlcy9oeWRyYXVsaWMtZmx1aWQtc3lzdGVtcy9oeWRyYXVsaWMtZmx1aWQtc3lzdGVtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbGFtbWFibGVHYXNTdG9yYWdlQ29tcG9uZW50IH0gXHQgIGZyb20gJy4vaGF6YXJkLXR5cGVzL2ZsYW1tYWJsZS1nYXMtc3RvcmFnZS9mbGFtbWFibGUtZ2FzLXN0b3JhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmxhbW1hYmxlTGlxdWlkc1N0b3JhZ2VDb21wb25lbnQgfSBmcm9tICcuL2hhemFyZC10eXBlcy9mbGFtbWFibGUtbGlxdWlkcy1zdG9yYWdlL2ZsYW1tYWJsZS1saXF1aWRzLXN0b3JhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmxhbW1hYmxlc0J1bGtTdG9yYWdlQ29tcG9uZW50IH0gXHRmcm9tICcuL2hhemFyZC10eXBlcy9mbGFtbWFibGVzLWJ1bGstc3RvcmFnZS9mbGFtbWFibGVzLWJ1bGstc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQbGFzdGljTGluZWRUYW5rc0NvbXBvbmVudCB9IFx0ZnJvbSAnLi9oYXphcmQtdHlwZXMvcGxhc3RpYy1saW5lZC10YW5rcy9wbGFzdGljLWxpbmVkLXRhbmtzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvbGxQYXBlclN0b3JhZ2VDb21wb25lbnQgfSBcdCAgZnJvbSAnLi9oYXphcmQtdHlwZXMvcm9sbC1wYXBlci1zdG9yYWdlL3JvbGwtcGFwZXItc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSdWJiZXJUaXJlU3RvcmFnZUNvbXBvbmVudCB9IFx0ZnJvbSAnLi9oYXphcmQtdHlwZXMvcnViYmVyLXRpcmUtc3RvcmFnZS9ydWJiZXItdGlyZS1zdG9yYWdlLmNvbXBvbmVudCc7XHJcbi8vIC8vXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnaGF6YXJkcy1hZGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaGF6YXJkcy1hZGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0hhemFyZHNTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPZmZsaW5lU2VydmljZV0sXHJcbiAgZGlyZWN0aXZlczogW0NvbW1lcmNpYWxDb29raW5nQ29tcG9uZW50LCBCb2lsZXJzQ29tcG9uZW50LCBSYWNrU3RvcmFnZUNvbXBvbmVudCwgQmF0dGVyeVJvb21Db21wb25lbnQsIE92ZW5zRnVybmFjZXNDb21wb25lbnQsIEZsb29yTm9uUmFja0NvbXBvbmVudCwgSW5kb29ySWRsZVBhbGxldENvbXBvbmVudCwgT3V0ZG9vcklkbGVQYWxsZXRDb21wb25lbnQsIEFtbW9uaWFSZWZyaWdlcmF0aW9uQ29tcG9uZW50LCBBaXJjcmFmdEhhbmdhckNvbXBvbmVudCwgRWxlY3RyaWNhbFN5c3RlbXNDb21wb25lbnQsIEh5ZHJhdWxpY0ZsdWlkU3lzdGVtc0NvbXBvbmVudCwgRmxhbW1hYmxlR2FzU3RvcmFnZUNvbXBvbmVudCwgRmxhbW1hYmxlTGlxdWlkc1N0b3JhZ2VDb21wb25lbnQsIEZsYW1tYWJsZXNCdWxrU3RvcmFnZUNvbXBvbmVudCwgUGxhc3RpY0xpbmVkVGFua3NDb21wb25lbnQsIFJvbGxQYXBlclN0b3JhZ2VDb21wb25lbnQsIFJ1YmJlclRpcmVTdG9yYWdlQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhemFyZHNBZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIFNhdmVkVG9GaWxlU3lzdGVtXHJcbntcclxuICBwcml2YXRlIHNpdGU6YW55O1xyXG4gIHByaXZhdGUgdmlld1R5cGU6IHN0cmluZztcclxuICBwcml2YXRlIG1haW5UeXBlIDogYW55IFtdPVtdO1xyXG4gIHByaXZhdGUgaGF6YXJkQ2xhc3MgOiBhbnk7XHJcbiAgcHJpdmF0ZSB0eXBlIDogYW55O1xyXG4gIHByaXZhdGUgY2xhc3NUZW1wIDogYW55O1xyXG4gIHByaXZhdGUgY2F0T2NjRGF0YSA6IGFueTtcclxuICBwcml2YXRlIGFkZE1vZGFsT2JqZWN0IDogYW55ID0ge1wiSEFaQVJEX01BSU5fVFlQRV9DRFwiIDogXCJcIiwgXCJIQVpBUkRfVFlQRV9DRFwiIDogXCJcIiwgXCJIQVpBUkRfQ0FURUdPUllfQ0RcIiA6IFwiXCIsIFwiSEFaQVJEX0NMQVNTX0NEXCIgOiBcIlwiLCBcIlNUT1JBR0VfQVJSQU5HRU1FTlRfQ0RcIiA6IFwiXCIsIFwiUFJFRE9NSU5BTlRfQ0xBU1NfQ0RcIiA6IFwiXCIgfTtcclxuICBwcml2YXRlIG9jY3VwYW5jeV9jZCA6IGFueTtcclxuICBwcml2YXRlIHN0b3JhZ2VBcnJhbmdlbWVudCA6IGFueSA7XHJcbiAgcHJpdmF0ZSBwcmVkb21pbmFudENvbW1vZGl0eUNsYXNzIDogYW55O1xyXG4gIHByaXZhdGUgaGF6YXJkVHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgaGF6YXJkTW9kZWwgOiBhbnk7XHJcbiAgcHJpdmF0ZSBzcHJpbmtsZXJzRGF0YTogYW55W10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRlIDogYW55O1xyXG4gIHByaXZhdGUgaW5kZXggOiBhbnk7XHJcbiAgcHJpdmF0ZSB0cmFuc3BvcnRlciA6IGFueSA9IHtcImhhemFyZE9ialwiIDogXCJcIiwgXCJzdGF0ZVwiIDogXCJcIiwgXCJpbmRleFwiIDogXCJcIn1cclxuICBwcml2YXRlIGlzTGlua2VkOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgcGFyZW50TW9kZWw6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgcmlEYXRhTGlzdDogYW55W10gPSBbXTtcclxuICBtb2RhbFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGtleTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaGF6YXJkc0FkZE1vZGFsJykgbW9kYWw6RWxlbWVudFJlZjtcclxuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhemFyZHNTZXJ2aWNlIDogSGF6YXJkc1NlcnZpY2UsIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBjY3M6IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIG9mZmxpbmVTZXJ2aWNlOiBPZmZsaW5lU2VydmljZSlcclxuICB7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHN0YXRlLCBkYXRhLCBpbmRleClcclxuICB7XHJcbiAgICB0aGlzLnBvcHVsYXRlU3lzdGVtQW5kQWRlcXVhY3koKTtcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMucmlEYXRhTGlzdCA9IFtdO1xyXG4gICAgaWYoc3RhdGUgPT0gXCJVcGRhdGVcIilcclxuICAgIHsgICAgICBcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoZGF0YSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGFsLnNob3coKTtcclxuICAgIHRoaXMubW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhbHVlcyhkYXRhKVxyXG4gIHtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuSEFaQVJEX01BSU5fVFlQRV9DRCA9IGRhdGEuSEFaQVJEX01BSU5fVFlQRV9DRDtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuSEFaQVJEX1RZUEVfQ0QgPSBkYXRhLkhBWkFSRF9UWVBFX0NEO1xyXG4gICAgdGhpcy5oYXphcmRNb2RlbC5IQVpBUkRfQ0xBU1NfQ0QgPSBkYXRhLkhBWkFSRF9DTEFTU19DRDtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuU1RPUkFHRV9BUlJBTkdFTUVOVF9DRCA9IGRhdGEuU1RPUkFHRV9BUlJBTkdFTUVOVF9DRDtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuUFJFRE9NSU5BTlRfQ0xBU1NfQ0QgPSBkYXRhLlBSRURPTUlOQU5UX0NMQVNTX0NEO1xyXG4gICAgdGhpcy5oYXphcmRNb2RlbC5TUEVDSUZJQ19MT0NBVElPTl9OTSA9IGRhdGEuU1BFQ0lGSUNfTE9DQVRJT05fTk07XHJcbiAgICB0aGlzLmhhemFyZE1vZGVsLkhBWkFSRF9BUkVBX1NJWkVfUVQgPSBkYXRhLkhBWkFSRF9BUkVBX1NJWkVfUVQ7XHJcbiAgICB0aGlzLmhhemFyZE1vZGVsLlNUT1JBR0VfSEVJR0hUX1FUID0gZGF0YS5TVE9SQUdFX0hFSUdIVF9RVDsgXHJcbiAgICB0aGlzLmhhemFyZE1vZGVsLkNFSUxJTkdfSEVJR0hUX1FUID0gZGF0YS5DRUlMSU5HX0hFSUdIVF9RVDtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuSGF6YXJkQ29tbWVudHNbMF0uUHJpbWFyeUxhbmd1YWdlID0gZGF0YS5IYXphcmRDb21tZW50c1swXS5QcmltYXJ5TGFuZ3VhZ2U7XHJcbiAgICB0aGlzLmhhemFyZE1vZGVsLkhBWkFSRF9SQU5ET01fSURfVE9MSU5LID0gZGF0YS5IQVpBUkRfUkFORE9NX0lEX1RPTElOSztcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwuc3ByaW5rbGVycyA9IGRhdGEuc3ByaW5rbGVycztcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0T2NjRGF0YS5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgaWYodGhpcy5jYXRPY2NEYXRhW2ldLkVMRU1FTlRfQ0QgPT0gZGF0YS5IQVpBUkRfQ0FURUdPUllfQ0QpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmhhemFyZE1vZGVsLkhBWkFSRF9DQVRFR09SWV9DRCA9IGRhdGEuSEFaQVJEX0NBVEVHT1JZX0NEO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBcIlVwZGF0ZVwiO1xyXG4gICAgdGhpcy5nZXRSSURhdGEoKTtcclxuICAgIHRoaXMuc2V0SGF6YXJkVHlwZXNEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2V0SGF6YXJkVHlwZXNEYXRhKGRhdGEpe1xyXG4gICAgaWYoZGF0YS5IQVpBUkRfVFlQRV9DRCl7XHJcbiAgICAgIGxldCBnZXRIYXphcmRUeXBlID0gdGhpcy50eXBlLmZpbHRlcihpdGVtID0+IGl0ZW0uQ29kZSA9PSBkYXRhLkhBWkFSRF9UWVBFX0NEKTsgIFxyXG4gICAgICB0aGlzLmhhemFyZFR5cGUgPSBnZXRIYXphcmRUeXBlWzBdLkRlc2NyaXB0aW9uOyAgXHJcbiAgICAgIHRoaXMua2V5ID0gdGhpcy5oYXphcmRUeXBlO1xyXG4gICAgICB0aGlzLmtleSA9IHRoaXMua2V5LnJlcGxhY2UoLy18XFxzL2csXCJcIik7XHJcbiAgICAgIHRoaXMuaGF6YXJkTW9kZWxbdGhpcy5rZXldID0gZGF0YVt0aGlzLmtleV0gPyBkYXRhW3RoaXMua2V5XSA6IHt9O1xyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gIGhpZGVNb2RhbCgpXHJcbiAge1xyXG4gICAgdGhpcy5tb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMubW9kYWwuaGlkZSgpO1xyXG4gIH1cclxuICAgXHJcbiAgbmdPbkluaXQoKVxyXG4gIHtcclxuICAgIC8vdGhpcy5vY2N1cGFuY3lfY2QgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvY2N1cGFuY3lfY29kZScpOyAgXHJcbiAgICB0aGlzLnNpdGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhdGlvbkRhdGEnKTtcclxuICAgIHRoaXMuZ2V0RHJvcGRvd25EYXRhKCk7XHJcbiAgICBcclxuICAgIHRoaXMudmlld1R5cGUgPSAncmVhZG9ubHknO1xyXG4gICAgdGhpcy5nZXREcm9wZG93bkRhdGEoKTtcclxuICAgIHRoaXMuaGF6YXJkTW9kZWwgPSBuZXcgSGF6YXJkKCk7XHJcbiAgICB0aGlzLmlzTGlua2VkID0gW107XHJcbiAgfVxyXG5cclxuICBnZXREcm9wZG93bkRhdGEoKVxyXG4gIHtcclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcnlEcm9wZG93bkRhdGEoKTtcclxuICAgIHRoaXMuZ2V0TWFpblR5cGVEcm9wZG93bkRhdGEoKTtcclxuICAgIHRoaXMuZ2V0VHlwZURyb3Bkb3duRGF0YSgpO1xyXG4gICAgdGhpcy5nZXRDbGFzc0Ryb3Bkb3duRGF0YSgpO1xyXG4gIH1cclxuICBcclxuICBnZXRNYWluVHlwZURyb3Bkb3duRGF0YSgpXHJcbiAge1xyXG4gICAgdGhpcy5oYXphcmRzU2VydmljZS5nZXRNYWluVHlwZURyb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICBkYXRhID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5tYWluVHlwZSA9IGRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2F0ZWdvcnlEcm9wZG93bkRhdGEoKVxyXG4gIHtcclxuICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0Q2F0ZWdvcnlPY2N1cGFuY3lEcm9wZG93bkRhdGEoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgZGF0YSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuY2F0T2NjRGF0YSA9ICBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uT0NDVVBBTkNZX0NEID09IHRoaXMub2NjdXBhbmN5X2NkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRPY2N1cGFuY3lEYXRhKCkgeyAgICAgIFxyXG4gICAgICB0aGlzLmhhemFyZHNTZXJ2aWNlLmdldFNwcmlua2xlcnNEYXRhKHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lELCB0aGlzLnNpdGUuUkZTX0lEKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgICB0aGlzLm9jY3VwYW5jeV9jZCA9IGRhdGEuQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LkNPUEVfUEFHRS5PQ0NVUEFOQ1lfQ0Q7IFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLy8sXHJcbiAgICAgICAgICAgIC8vKCkgPT4gdGhpcy5zcHJpbmtsZXJzRGF0YUhhbmRsZXIocmVzcG9uc2UpXHJcbiAgICAgICAgKTtcclxuICB9XHJcblxyXG4gIGdldFR5cGVEcm9wZG93bkRhdGEoKVxyXG4gIHtcclxuICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0VHlwZURyb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICBkYXRhID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy50eXBlID0gZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc0Ryb3Bkb3duRGF0YSgpXHJcbiAge1xyXG4gICAgdGhpcy5oYXphcmRzU2VydmljZS5nZXRDbGFzc0Ryb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICBkYXRhID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5oYXphcmRDbGFzcyA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5FbGVtZW50TmFtZSA9PSBcIkhBWkFSRF9DTEFTU19DRFwiKTtcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZUFycmFuZ2VtZW50ID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLkVsZW1lbnROYW1lID09ICBcIlNUT1JBR0VfQVJSQU5HRU1FTlRfQ0RcIik7XHJcbiAgICAgICAgICB0aGlzLnByZWRvbWluYW50Q29tbW9kaXR5Q2xhc3MgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gIFwiUFJFRE9NSU5BTlRfQ0xBU1NfQ0RcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICApO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVTeXN0ZW1BbmRBZGVxdWFjeSgpIHtcclxuICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0U3ByaW5rbGVyc0Ryb3Bkb3duRGF0YSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgIHRoaXMuc3lzdGVtVHlwZXMgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJTWVNURU1UWVBFXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRlcXVhY3lWYWx1ZXMgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uRWxlbWVudE5hbWUgPT0gXCJXQVRFUl9BREVRXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRTcHJpbmtsZXJzRGF0YSgpXHJcbiAgICAgICAgKTtcclxuICB9XHJcblxyXG4gIGdldFNwcmlua2xlcnNEYXRhKCkgeyAgICAgIFxyXG4gICAgICBsZXQgcmVzcG9uc2U6IGFueVtdID0gW107XHJcbiAgICAgIHRoaXMuaGF6YXJkc1NlcnZpY2UuZ2V0U3ByaW5rbGVyc0RhdGEodGhpcy5zaXRlLlJGU19QQVJFTlRfSUQsIHRoaXMuc2l0ZS5SRlNfSUQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub2NjdXBhbmN5X2NkID0gZGF0YS5Bc3Nlc3NtZW50TG9jYXRpb25MaXN0WzBdLkxvY0Fzc2Vzc21lbnQuQ09QRV9QQUdFLk9DQ1VQQU5DWV9DRDsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5wcmVUcmFkZVNlY3RvckNvZGUgLSAnLHRoaXMucHJlVHJhZGVTZWN0b3JDb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LkNPUEVfUEFHRS5TcHJpbmtsZXJEYXRhUGFnZSAmJiBkYXRhLkFzc2Vzc21lbnRMb2NhdGlvbkxpc3RbMF0uTG9jQXNzZXNzbWVudC5DT1BFX1BBR0UuU3ByaW5rbGVyRGF0YVBhZ2UuU3ByaW5rbGVyRGF0YUxpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGRhdGEuQXNzZXNzbWVudExvY2F0aW9uTGlzdFswXS5Mb2NBc3Nlc3NtZW50LkNPUEVfUEFHRS5TcHJpbmtsZXJEYXRhUGFnZS5TcHJpbmtsZXJEYXRhTGlzdDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnNwcmlua2xlcnNEYXRhSGFuZGxlcihyZXNwb25zZSlcclxuICAgICAgICApO1xyXG4gIH0gIFxyXG5cclxuICBzcHJpbmtsZXJzRGF0YUhhbmRsZXIocmVzcG9uc2UpIHtcclxuICAgIGlmKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYocmVzcG9uc2UubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnJhbmRvbUlER2VuZXJhdG9ySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgaWYoY291bnQgPCByZXNwb25zZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZighKCdTUFJJTktMRVJfUkFORE9NX0lEX1RPTElOSycgaW4gcmVzcG9uc2VbY291bnRdKSkge1xyXG4gICAgICAgICAgICAgIHZhciB0aW1lc3RhbXBrZXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlW2NvdW50XS5TUFJJTktMRVJfUkFORE9NX0lEX1RPTElOSyA9IHRpbWVzdGFtcGtleS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09IHJlc3BvbnNlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmFuZG9tSURHZW5lcmF0b3JJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zYXZlU3ByaW5rbGVyRGF0YVRvRmlsZShyZXNwb25zZSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IobGV0IGluZGV4IGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzcG9uc2VbaW5kZXhdWydTWVNURU1fVFlQRV9ERVNDUklQVElPTiddID0gJyc7XHJcbiAgICAgICAgcmVzcG9uc2VbaW5kZXhdWydTUFJJTktMRVJfQURFUVVBQ1lfREVTQ1JJUFRJT04nXSA9ICcnOyAgICAgICAgXHJcbiAgICAgICAgcmVzcG9uc2VbaW5kZXhdLkluY2x1ZGVUaGlzU2VjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgaWYocmVzcG9uc2VbaW5kZXhdLlNZU1RFTV9UWVBFKSB7XHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRTeXN0ZW1UeXBlID0gdGhpcy5zeXN0ZW1UeXBlcy5maWx0ZXIoc3lzdGVtVHlwZSA9PiBzeXN0ZW1UeXBlLkNvZGUgPT0gcmVzcG9uc2VbaW5kZXhdLlNZU1RFTV9UWVBFKVswXTtcclxuICAgICAgICAgIHJlc3BvbnNlW2luZGV4XVsnU1lTVEVNX1RZUEVfREVTQ1JJUFRJT04nXSA9IGZpbHRlcmVkU3lzdGVtVHlwZS5EZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmVzcG9uc2VbaW5kZXhdLlNQUklOS0xFUl9BREVRVUFDWV9DRCkgXHJcbiAgICAgICAgICByZXNwb25zZVtpbmRleF1bJ1NQUklOS0xFUl9BREVRVUFDWV9ERVNDUklQVElPTiddID0gdGhpcy5hZGVxdWFjeVZhbHVlcy5maWx0ZXIoYWRlcXVhY3kgPT4gYWRlcXVhY3kuQ29kZSA9PSByZXNwb25zZVtpbmRleF0uU1BSSU5LTEVSX0FERVFVQUNZX0NEKVswXS5EZXNjcmlwdGlvbjsgXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaGF6YXJkTW9kZWwuc3ByaW5rbGVycyAmJiB0aGlzLmhhemFyZE1vZGVsLnNwcmlua2xlcnMuaW5kZXhPZihyZXNwb25zZVtpbmRleF1bJ1NQUklOS0xFUl9SQU5ET01fSURfVE9MSU5LJ10pICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXNwb25zZVtpbmRleF1bXCJpc0xpbmtlZFwiXSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICByZXNwb25zZVtpbmRleF1bXCJpc0xpbmtlZFwiXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIH1cclxuICAgIHRoaXMuc3ByaW5rbGVyc0RhdGEgPSByZXNwb25zZTsgICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTcHJpbmtsZXJzIC0gRG9uZSBsb2FkaW5nIGRhdGEuXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UklEYXRhKCkge1xyXG4gICAgdmFyIHJpRGF0YUNoZWNrID0gdGhpcy5jY3MuZ2V0Umlza0ltcHJvdmVtZW50c1VwZGF0ZWREYXRhKCk7XHJcbiAgICB0aGlzLnJpRGF0YUxpc3QgPSBbXTtcclxuICAgIGlmKHJpRGF0YUNoZWNrICYmIHRoaXMuc3RhdGUgPT0gJ1VwZGF0ZScgJiYgdGhpcy5oYXphcmRNb2RlbC5IQVpBUkRfUkFORE9NX0lEX1RPTElOSyAmJiByaURhdGFDaGVjay5SaXNrSW1wcnZtbnRfUEFHRVMgJiYgcmlEYXRhQ2hlY2suUmlza0ltcHJ2bW50X1BBR0VTLmxlbmd0aCA+PTApIHtcclxuICAgICAgZm9yKGxldCBpbmRleCBpbiByaURhdGFDaGVjay5SaXNrSW1wcnZtbnRfUEFHRVMpIHtcclxuICAgICAgICBpZihyaURhdGFDaGVjay5SaXNrSW1wcnZtbnRfUEFHRVNbaW5kZXhdLkxJTktFRF9IQVpBUkRTICYmIHJpRGF0YUNoZWNrLlJpc2tJbXBydm1udF9QQUdFU1tpbmRleF0uTElOS0VEX0hBWkFSRFMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaWYocmlEYXRhQ2hlY2suUmlza0ltcHJ2bW50X1BBR0VTW2luZGV4XS5MSU5LRURfSEFaQVJEUy5pbmRleE9mKHRoaXMuaGF6YXJkTW9kZWwuSEFaQVJEX1JBTkRPTV9JRF9UT0xJTkspID4gLTEpXHJcbiAgICAgICAgICAgIHRoaXMucmlEYXRhTGlzdC5wdXNoKHJpRGF0YUNoZWNrLlJpc2tJbXBydm1udF9QQUdFU1tpbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlU3ByaW5rbGVyRGF0YVRvRmlsZShzcHJpbmtsZXJEYXRhKSB7XHJcbiAgICAgIGxldCByZnNQYXJlbnRJZCA9IHRoaXMuc2l0ZS5SRlNfUEFSRU5UX0lEO1xyXG4gICAgICBsZXQgcmZzSWQgPSB0aGlzLnNpdGUuUkZTX0lEO1xyXG4gICAgICAgdGhpcy5vZmZsaW5lU2VydmljZS5yZWFkTG9jYXRpb25EYXRhKHJmc1BhcmVudElkLCByZnNJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgbGV0IGxvY0RhdGEgPSBkYXRhOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBsb2NEYXRhLkxvY2F0aW9uQXNzZXNzbWVudC5MQVdvcmtQYWdlTGlzdFswXS5cclxuICAgICAgICAgIEFzc2Vzc21lbnRMb2NhdGlvbkxpc3RbMF0uTG9jQXNzZXNzbWVudC5DT1BFX1BBR0UuXHJcbiAgICAgICAgICBTcHJpbmtsZXJEYXRhUGFnZS5TcHJpbmtsZXJEYXRhTGlzdCA9IHNwcmlua2xlckRhdGE7XHJcblxyXG4gICAgICAgICAgbGV0IGxvY2F0aW9uRGF0YU1vZGVsID0gbmV3IExvY2F0aW9uRGF0YU1vZGVsKHJmc1BhcmVudElkLCByZnNJZCwgJ3Nwcmlua2xlcicpO1xyXG4gICAgICAgICAgbG9jYXRpb25EYXRhTW9kZWwuc2V0UmF3RGF0YShsb2NEYXRhKTtcclxuICAgICAgICAgIHRoaXMub2ZmbGluZVNlcnZpY2Uud3JpdGVMb2NhdGlvbkRhdGEobG9jYXRpb25EYXRhTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGRyb3BEb3duQ2hhbmdlSGFuZGxlcihldmVudCkgXHJcbiAge1xyXG4gICAgaWYoIWV2ZW50KXtcclxuICAgICAgdGhpcy5oYXphcmRUeXBlID0gXCJcIjtcclxuICAgIH0gICAgICBcclxuICB9XHJcbiAgXHJcbiAgZHJvcERvd25IYW5kbGVyKGV2ZW50LCBkYXRhKSBcclxuICB7XHJcbiAgICAvKmlmIChkYXRhID09ICdtYWluVHlwZScpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuaGF6YXJkTW9kZWwuSEFaQVJEX01BSU5fVFlQRV9DRCA9IGV2ZW50LkNvZGU7XHJcbiAgICB9Ki9cclxuICAgIGlmIChkYXRhID09ICd0eXBlJylcclxuICAgIHtcclxuICAgICAgdGhpcy5oYXphcmRNb2RlbC5IQVpBUkRfVFlQRV9DRCA9IGV2ZW50LkNvZGU7XHJcbiAgICAgIHRoaXMuaGF6YXJkVHlwZSA9IGV2ZW50LkRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmtleSA9IGV2ZW50LkRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmtleSA9IHRoaXMua2V5LnJlcGxhY2UoLy18XFxzL2csXCJcIik7XHJcbiAgICAgIHRoaXMuaGF6YXJkTW9kZWxbdGhpcy5rZXldID0gdGhpcy5oYXphcmRNb2RlbFt0aGlzLmtleV0gPyB0aGlzLmhhemFyZE1vZGVsW3RoaXMua2V5XSA6IHt9O1xyXG4gICAgfVxyXG4gICAgIGVsc2UgaWYgKGRhdGEgPT0gJ2NsYXNzJylcclxuICAgIHtcclxuICAgICAgdGhpcy5jbGFzc1RlbXAgPSBldmVudC5Db2RlO1xyXG4gICAgfVxyXG4gICAgLyplbHNlIGlmIChkYXRhID09ICdjYXRlZ29yeScpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuaGF6YXJkTW9kZWwuSEFaQVJEX0NBVEVHT1JZX0NEID0gZXZlbnQuRUxFTUVOVF9DRDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRhdGEgPT0gJ2NsYXNzJylcclxuICAgIHtcclxuICAgICAgdGhpcy5oYXphcmRNb2RlbC5IQVpBUkRfQ0xBU1NfQ0QgPSBldmVudC5Db2RlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGF0YSA9PSAncGNjJylcclxuICAgIHtcclxuICAgICAgdGhpcy5oYXphcmRNb2RlbC5QUkVET01JTkFOVF9DTEFTU19DRCA9IGV2ZW50LkNvZGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXRhID09ICdzdG9yYWdlJylcclxuICAgIHtcclxuICAgICAgdGhpcy5oYXphcmRNb2RlbC5TVE9SQUdFX0FSUkFOR0VNRU5UX0NEID0gZXZlbnQuQ29kZTtcclxuICAgIH0qL1xyXG5cclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKClcclxuICB7XHJcbiAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnNwcmlua2xlcnNEYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaW5rbGVyc0RhdGFbaV0uaXNMaW5rZWQpIHtcclxuICAgICAgICAgIGlmKHRoaXMuaGF6YXJkTW9kZWwuc3ByaW5rbGVycykge1xyXG4gICAgICAgICAgICB0aGlzLmhhemFyZE1vZGVsLnNwcmlua2xlcnMucHVzaCh0aGlzLnNwcmlua2xlcnNEYXRhW2ldLlNQUklOS0xFUl9SQU5ET01fSURfVE9MSU5LKTtcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYXphcmRNb2RlbC5zcHJpbmtsZXJzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaGF6YXJkTW9kZWwuc3ByaW5rbGVycy5wdXNoKHRoaXMuc3ByaW5rbGVyc0RhdGFbaV0uU1BSSU5LTEVSX1JBTkRPTV9JRF9UT0xJTkspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oYXphcmRNb2RlbC5IQVpBUkRfQ0xBU1NfQ0QgPSB0aGlzLmNsYXNzVGVtcDtcclxuICAgICAgdGhpcy50cmFuc3BvcnRlci5oYXphcmRPYmogPSB0aGlzLmhhemFyZE1vZGVsO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhhemFyZE1vZGVsKTtcclxuICAgICAgdGhpcy50cmFuc3BvcnRlci5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgIHRoaXMudHJhbnNwb3J0ZXIuc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgICBpZih0aGlzLnRyYW5zcG9ydGVyLnN0YXRlID09ICdOZXcnKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbUlEID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnRyYW5zcG9ydGVyLmhhemFyZE9iai5IQVpBUkRfUkFORE9NX0lEX1RPTElOSyA9IHJhbmRvbUlELmdldFRpbWUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNjcy5zZXRIYXphcmRBZGREYXRhKHRoaXMudHJhbnNwb3J0ZXIpOyAgICAgIFxyXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
