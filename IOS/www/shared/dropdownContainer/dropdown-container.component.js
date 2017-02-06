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
var forms_1 = require('@angular/forms');
var DropdownContainerComponent = (function () {
    function DropdownContainerComponent() {
        this.isSearchable = false;
        this.isDisabled = false;
        this.isSearchableWithDelete = false;
        this.elementToBeDeleted = false;
        this.searchProperty = '';
        this.inputData = '';
        this.placeholder = '';
        this.inputDataChange = new core_1.EventEmitter();
        this.instanceDeleted = new core_1.EventEmitter();
        this.suggestions = [];
        this.isOpen = false;
        this.isRequiredFlag = false;
        this.toggleShow = false;
        this.suggestionSelected = new core_1.EventEmitter();
        this.displayData = '';
    }
    DropdownContainerComponent.prototype.updateData = function (event) {
        this.inputData = event;
        this.inputDataChange.emit(event);
    };
    DropdownContainerComponent.prototype.ngOnInit = function () {
        this.displayProperty = this.displayProperty.split(",");
        if (this.keyProperty) {
            this.keyProperty = this.keyProperty.split(",");
        }
        if (this.isSearchable) {
            this.searchProperty = this.searchProperty.split(",");
        }
        if (this.inputData != undefined && this.inputData != null && this.list && this.list.length) {
            var index = -1;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i][this.displayProperty] != null && this.list[i][this.displayProperty] == this.inputData) {
                    index = i;
                }
            }
            if (index > -1) {
                this.selectSuggestion(this.list[index]);
                if (this.keyProperty) {
                    this.displayData = this.list[index][this.keyProperty[0]];
                }
            }
        }
        else if (!this.placeholder && !this.inputData && this.list.length) {
            this.inputData = this.list[0][this.displayProperty[0]];
        }
        if (!this.isDisabled)
            this.checkIsRequired();
    };
    DropdownContainerComponent.prototype.deleteTriggered = function (event) {
        this.toggleShow = !this.toggleShow;
        this.instanceDeleted.emit(event);
    };
    DropdownContainerComponent.prototype.loadData = function () {
        if (!this.isSearchable) {
            this.suggestions = this.list;
        }
        else {
            if (this.inputData) {
                this.populateSuggestions();
            }
            else {
                this.suggestions = this.list;
            }
        }
        this.checkIsRequired();
    };
    DropdownContainerComponent.prototype.setActiveSuggestion = function (suggestion) {
        this.activeSuggestion = suggestion;
    };
    DropdownContainerComponent.prototype.selectSuggestion = function (suggestion) {
        this.selectedSuggestion = suggestion;
        this.suggestionSelected.emit(suggestion);
        this.isOpen = false;
        if (!this.isSearchable) {
            this.placeholder = "";
        }
        if (this.selectedSuggestion != null) {
            this.inputData = suggestion[this.displayProperty[0]];
            if (this.keyProperty) {
                this.displayData = suggestion[this.keyProperty[0]];
            }
            this.inputDataChange.emit(this.inputData);
            this.isRequiredFlag = false;
        }
    };
    DropdownContainerComponent.prototype.indexOfObject = function (array, property, value) {
        if (array == null || array.length === 0)
            return -1;
        var index = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i][property] != null && array[i][property] === value) {
                index = i;
            }
        }
        return index;
    };
    DropdownContainerComponent.prototype.populateSuggestions = function () {
        var searchProperty = this.searchProperty;
        var filterData = this.inputData;
        if (searchProperty == null || searchProperty.length === 0) {
            console.error('The input attribute `searchProperty` must be provided');
            return;
        }
        if (this.list == null || this.list.length === 0)
            return;
        this.suggestions = this.list.filter(function (item) {
            for (var _i = 0, searchProperty_1 = searchProperty; _i < searchProperty_1.length; _i++) {
                var key = searchProperty_1[_i];
                if (item[key].toLowerCase().indexOf(filterData.toLowerCase()) > -1) {
                    return true;
                }
            }
        });
        if (this.suggestions.length !== 0) {
            this.activeSuggestion = this.suggestions[0];
        }
    };
    DropdownContainerComponent.prototype.checkIsRequired = function () {
        if (this.isRequired && !this.inputData) {
            this.isRequiredFlag = true;
        }
        if (this.isRequired && this.inputData) {
            this.isRequiredFlag = false;
        }
    };
    DropdownContainerComponent.prototype.inputKeyUp = function (event) {
        this.isOpen = true;
        this.checkIsRequired();
        if (event.which === 9 || event.keyCode === 9 ||
            event.which === 38 || event.keyCode === 38 ||
            event.which === 40 || event.keyCode === 40) {
            return;
        }
        if (this.inputData == null || this.inputData.length === 0) {
            this.populateSuggestions();
            return;
        }
        if (this.selectedSuggestion != null) {
            if (this.selectedSuggestion[this.displayProperty[0]] === this.inputData) {
                return;
            }
        }
        this.populateSuggestions();
    };
    DropdownContainerComponent.prototype.clearInput = function () {
        this.inputData = "";
        if (this.keyProperty) {
            this.displayData = "";
        }
        this.isOpen = true;
        this.inputDataChange.emit(this.inputData);
        this.populateSuggestions();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownContainerComponent.prototype, "isSearchable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownContainerComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownContainerComponent.prototype, "isSearchableWithDelete", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownContainerComponent.prototype, "elementToBeDeleted", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownContainerComponent.prototype, "searchProperty", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownContainerComponent.prototype, "inputData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownContainerComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownContainerComponent.prototype, "inputDataChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownContainerComponent.prototype, "instanceDeleted", void 0);
    DropdownContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown-container',
            directives: [forms_1.FORM_DIRECTIVES],
            inputs: ['list', 'displayProperty', 'keyProperty', 'isRequired'],
            outputs: ['suggestionSelected'],
            templateUrl: 'dropdown-container.component.html',
            styleUrls: ['dropdown-container.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownContainerComponent);
    return DropdownContainerComponent;
}());
exports.DropdownContainerComponent = DropdownContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFDL0Usc0JBQWlDLGdCQUFnQixDQUFDLENBQUE7QUFZbEQ7SUEyQkM7UUExQlMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFDeEMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDdkIsb0JBQWUsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDekQsb0JBQWUsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFMUQsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFHeEIsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTNCLHVCQUFrQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUUzRCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQU9YLENBQUM7SUFMZiwrQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFJRCw2Q0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFHRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUMxRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2RyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDRixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztZQUNGLENBQUM7UUFDRixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sNkNBQVEsR0FBZjtRQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNMLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUM7UUFDRixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx3REFBbUIsR0FBMUIsVUFBMkIsVUFBZTtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxxREFBZ0IsR0FBdkIsVUFBd0IsVUFBZTtRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDbEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVNLGtEQUFhLEdBQXBCLFVBQXFCLEtBQVksRUFBRSxRQUFnQixFQUFFLEtBQWE7UUFDaEUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDO1FBQ0osQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sd0RBQW1CLEdBQTFCO1FBQ0UsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN6QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUM7UUFDVixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRXhELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFJO1lBQy9DLEdBQUcsQ0FBQSxDQUFZLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQsSUFBYyxDQUFDO2dCQUExQixJQUFJLEdBQUcsdUJBQUE7Z0JBQ1AsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUVPLG9EQUFlLEdBQXZCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRU0sK0NBQVUsR0FBakIsVUFBa0IsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBR3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQztZQUN6QyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUU7WUFDMUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNWLENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNWLENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLENBQUM7WUFDVixDQUFDO1FBQ0osQ0FBQztRQUdELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTywrQ0FBVSxHQUFsQjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQXJMRDtRQUFDLFlBQUssRUFBRTs7b0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7a0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7OEVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MEVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7c0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7bUVBQUE7SUFDUDtRQUFDLGFBQU0sRUFBRTs7dUVBQUE7SUFDVjtRQUFDLGFBQU0sRUFBRTs7dUVBQUE7SUFuQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsVUFBVSxFQUFDLENBQUMsdUJBQWUsQ0FBQztZQUM1QixNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztZQUNoRSxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUMvQixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7O2tDQUFBO0lBeUxGLGlDQUFDO0FBQUQsQ0F2TEEsQUF1TEMsSUFBQTtBQXZMWSxrQ0FBMEIsNkJBdUx0QyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kcm9wZG93bkNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duLWNvbnRhaW5lcicsXHJcbiAgZGlyZWN0aXZlczpbRk9STV9ESVJFQ1RJVkVTXSxcclxuICBpbnB1dHM6IFsnbGlzdCcsICdkaXNwbGF5UHJvcGVydHknLCAna2V5UHJvcGVydHknLCAnaXNSZXF1aXJlZCddLFxyXG4gIG91dHB1dHM6IFsnc3VnZ2VzdGlvblNlbGVjdGVkJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICdkcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydkcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LmNzcyddICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgaXNTZWFyY2hhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGlzU2VhcmNoYWJsZVdpdGhEZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBlbGVtZW50VG9CZURlbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcdFxyXG5cdEBJbnB1dCgpIHNlYXJjaFByb3BlcnR5OiBzdHJpbmcgPSAnJztcdFxyXG5cdEBJbnB1dCgpIGlucHV0RGF0YTogc3RyaW5nID0gJyc7XHJcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1x0XHJcbiBcdEBPdXRwdXQoKSBpbnB1dERhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1x0XHJcblx0QE91dHB1dCgpIGluc3RhbmNlRGVsZXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHRcclxuXHJcblx0cHJpdmF0ZSBzdWdnZXN0aW9uczogYW55W10gPSBbXTtcdFxyXG5cdHByaXZhdGUgc2VsZWN0ZWRTdWdnZXN0aW9uOiBhbnk7XHJcblx0cHJpdmF0ZSBhY3RpdmVTdWdnZXN0aW9uOiBhbnk7IFxyXG5cdHByaXZhdGUgaXNPcGVuOiBib29sZWFuPSBmYWxzZTsgXHJcblx0cHJpdmF0ZSBpc1JlcXVpcmVkRmxhZzogYm9vbGVhbj0gZmFsc2U7XHJcblx0cHJpdmF0ZSB0b2dnbGVTaG93ID0gZmFsc2U7XHRcclxuXHJcblx0c3VnZ2VzdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRcclxuXHRkaXNwbGF5RGF0YTogc3RyaW5nID0gJyc7XHJcblxyXG5cdHVwZGF0ZURhdGEoZXZlbnQpIHtcclxuXHRcdHRoaXMuaW5wdXREYXRhID0gZXZlbnQ7XHJcblx0XHR0aGlzLmlucHV0RGF0YUNoYW5nZS5lbWl0KGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0dGhpcy5kaXNwbGF5UHJvcGVydHkgPSB0aGlzLmRpc3BsYXlQcm9wZXJ0eS5zcGxpdChcIixcIik7XHJcblx0XHRpZiAodGhpcy5rZXlQcm9wZXJ0eSkge1xyXG5cdFx0XHR0aGlzLmtleVByb3BlcnR5ID0gdGhpcy5rZXlQcm9wZXJ0eS5zcGxpdChcIixcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5pc1NlYXJjaGFibGUpe1xyXG5cdFx0XHR0aGlzLnNlYXJjaFByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eS5zcGxpdChcIixcIik7XHJcblx0XHR9XHRcdFx0XHJcblxyXG5cdFx0Ly9SZWZpbmVkIGNvbmRpdGlvbiB0byBoYW5kbGUgMCBhcyB2YWxpZCBpbnB1dERhdGEuXHJcblx0XHRpZih0aGlzLmlucHV0RGF0YSAhPSB1bmRlZmluZWQgJiYgdGhpcy5pbnB1dERhdGEgIT0gbnVsbCAmJiB0aGlzLmxpc3QgJiYgdGhpcy5saXN0Lmxlbmd0aCl7XHJcblx0XHRcdGxldCBpbmRleCA9IC0xO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxpc3RbaV1bdGhpcy5kaXNwbGF5UHJvcGVydHldICE9IG51bGwgJiYgdGhpcy5saXN0W2ldW3RoaXMuZGlzcGxheVByb3BlcnR5XSA9PSB0aGlzLmlucHV0RGF0YSkge1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5saXN0W2luZGV4XSk7XHJcblx0XHRcdFx0aWYgKHRoaXMua2V5UHJvcGVydHkpIHtcclxuXHRcdFx0XHRcdHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmxpc3RbaW5kZXhdW3RoaXMua2V5UHJvcGVydHlbMF1dO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmKCF0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmlucHV0RGF0YSAmJiB0aGlzLmxpc3QubGVuZ3RoKXtcclxuXHRcdFx0dGhpcy5pbnB1dERhdGEgPSB0aGlzLmxpc3RbMF1bdGhpcy5kaXNwbGF5UHJvcGVydHlbMF1dO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCF0aGlzLmlzRGlzYWJsZWQpXHJcblx0XHRcdHRoaXMuY2hlY2tJc1JlcXVpcmVkKCk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVUcmlnZ2VyZWQoZXZlbnQpe1xyXG5cdFx0dGhpcy50b2dnbGVTaG93ID0gIXRoaXMudG9nZ2xlU2hvdztcclxuXHRcdHRoaXMuaW5zdGFuY2VEZWxldGVkLmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvYWREYXRhKCkge1xyXG5cdFx0aWYgKCF0aGlzLmlzU2VhcmNoYWJsZSkge1xyXG5cdFx0XHR0aGlzLnN1Z2dlc3Rpb25zID0gdGhpcy5saXN0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmlucHV0RGF0YSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdWxhdGVTdWdnZXN0aW9ucygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc3VnZ2VzdGlvbnMgPSB0aGlzLmxpc3Q7XHRcclxuXHRcdFx0fVx0XHJcblx0XHR9XHRcclxuXHRcdHRoaXMuY2hlY2tJc1JlcXVpcmVkKCk7XHQgICBcdFxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEFjdGl2ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogYW55KSB7XHJcblx0ICB0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogYW55KSB7XHRcdFxyXG5cdCAgdGhpcy5zZWxlY3RlZFN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uO1x0ICBcclxuXHQgIHRoaXMuc3VnZ2VzdGlvblNlbGVjdGVkLmVtaXQoc3VnZ2VzdGlvbik7XHJcblx0ICB0aGlzLmlzT3Blbj1mYWxzZTtcclxuXHQgIGlmKCF0aGlzLmlzU2VhcmNoYWJsZSl7XHJcblx0ICBcdHRoaXMucGxhY2Vob2xkZXI9XCJcIjtcclxuXHQgIH1cdCAgXHJcblx0ICBpZiAodGhpcy5zZWxlY3RlZFN1Z2dlc3Rpb24gIT0gbnVsbCkge1xyXG5cdFx0dGhpcy5pbnB1dERhdGEgPSBzdWdnZXN0aW9uW3RoaXMuZGlzcGxheVByb3BlcnR5WzBdXTtcclxuXHRcdGlmICh0aGlzLmtleVByb3BlcnR5KSB7XHJcblx0XHRcdHRoaXMuZGlzcGxheURhdGEgPSBzdWdnZXN0aW9uW3RoaXMua2V5UHJvcGVydHlbMF1dO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbnB1dERhdGFDaGFuZ2UuZW1pdCh0aGlzLmlucHV0RGF0YSk7XHJcblx0XHR0aGlzLmlzUmVxdWlyZWRGbGFnPWZhbHNlO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0cHVibGljIGluZGV4T2ZPYmplY3QoYXJyYXk6IGFueVtdLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcblx0ICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPT09IDApIHJldHVybiAtMTtcclxuXHQgIGxldCBpbmRleCA9IC0xO1xyXG5cdCAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgaWYgKGFycmF5W2ldW3Byb3BlcnR5XSAhPSBudWxsICYmIGFycmF5W2ldW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcclxuXHQgICAgICAgIGluZGV4ID0gaTtcclxuXHQgICAgIH1cclxuXHQgIH1cclxuXHQgIHJldHVybiBpbmRleDtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHBvcHVsYXRlU3VnZ2VzdGlvbnMoKSB7XHJcblx0ICBsZXQgc2VhcmNoUHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5O1xyXG5cdCAgbGV0IGZpbHRlckRhdGEgPSB0aGlzLmlucHV0RGF0YTtcclxuXHQgIGlmIChzZWFyY2hQcm9wZXJ0eSA9PSBudWxsIHx8IHNlYXJjaFByb3BlcnR5Lmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgY29uc29sZS5lcnJvcignVGhlIGlucHV0IGF0dHJpYnV0ZSBgc2VhcmNoUHJvcGVydHlgIG11c3QgYmUgcHJvdmlkZWQnKTtcclxuXHQgICAgIHJldHVybjtcclxuXHQgIH1cclxuXHJcblx0ICBpZiAodGhpcy5saXN0ID09IG51bGwgfHwgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cdCAgXHJcblx0ICB0aGlzLnN1Z2dlc3Rpb25zID0gdGhpcy5saXN0LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcblx0ICAgIGZvcih2YXIga2V5IG9mIHNlYXJjaFByb3BlcnR5KSB7XHJcblx0ICAgICAgICBpZihpdGVtW2tleV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlckRhdGEudG9Mb3dlckNhc2UoKSkgPiAtMSl7XHQgICAgICAgIFx0XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHQgIH0pO1xyXG5cclxuXHQgIGlmICh0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCAhPT0gMCkge1xyXG5cdCAgXHR0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24gPSB0aGlzLnN1Z2dlc3Rpb25zWzBdO1x0ICBcdFxyXG5cdCAgfSBcdCBcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tJc1JlcXVpcmVkKCl7XHJcblx0ICBpZih0aGlzLmlzUmVxdWlyZWQgJiYgIXRoaXMuaW5wdXREYXRhKXtcclxuXHRcdHRoaXMuaXNSZXF1aXJlZEZsYWcgPSB0cnVlO1xyXG5cdCAgfVxyXG5cdCAgaWYodGhpcy5pc1JlcXVpcmVkICYmIHRoaXMuaW5wdXREYXRhKXtcclxuXHRcdHRoaXMuaXNSZXF1aXJlZEZsYWcgPSBmYWxzZTtcclxuXHQgIH1cdFxyXG5cdH1cclxuXHJcblx0cHVibGljIGlucHV0S2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuXHQgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuXHQgIC8vIGNoZWNrIGZvciByZXF1aXJlZCBmaWVsZCB2YWxpZGF0aW9uXHJcblx0ICB0aGlzLmNoZWNrSXNSZXF1aXJlZCgpO1xyXG5cclxuXHQgIC8vIElnbm9yZSBUQUIsIFVQLCBhbmQgRE9XTiBzaW5jZSB0aGV5IGFyZSBwcm9jZXNzZWQgYnkgdGhlIGtleWRvd24gaGFuZGxlclxyXG5cdCAgaWYgKGV2ZW50LndoaWNoID09PSA5IHx8IGV2ZW50LmtleUNvZGUgPT09IDkgfHxcclxuXHQgICAgIGV2ZW50LndoaWNoID09PSAzOCB8fCBldmVudC5rZXlDb2RlID09PSAzOCB8fFxyXG5cdCAgICAgZXZlbnQud2hpY2ggPT09IDQwIHx8IGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XHJcblx0ICAgICByZXR1cm47XHJcblx0ICB9XHJcblxyXG5cdCAgLy8gV2hlbiB0aGUgaW5wdXQgaXMgY2xlYXJlZFxyXG5cdCAgaWYgKHRoaXMuaW5wdXREYXRhID09IG51bGwgfHwgdGhpcy5pbnB1dERhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0ICAgICB0aGlzLnBvcHVsYXRlU3VnZ2VzdGlvbnMoKTtcclxuXHQgICAgIHJldHVybjtcclxuXHQgIH1cclxuXHJcblx0ICAvLyBJZiB0aGUgc3VnZ2VzdGlvbiBtYXRjaGVzIHRoZSBpbnB1dCwgdGhlbiByZXR1cm5cclxuXHQgIGlmICh0aGlzLnNlbGVjdGVkU3VnZ2VzdGlvbiAhPSBudWxsKSB7XHJcblx0ICAgICBpZiAodGhpcy5zZWxlY3RlZFN1Z2dlc3Rpb25bdGhpcy5kaXNwbGF5UHJvcGVydHlbMF1dID09PSB0aGlzLmlucHV0RGF0YSkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIC8vIFJlcG9wdWxhdGUgdGhlIHN1Z2dlc3Rpb25zXHQgXHJcblx0ICB0aGlzLnBvcHVsYXRlU3VnZ2VzdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2xlYXJJbnB1dCgpe1xyXG5cdFx0dGhpcy5pbnB1dERhdGEgPSBcIlwiO1xyXG5cdFx0aWYgKHRoaXMua2V5UHJvcGVydHkpIHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5RGF0YSA9IFwiXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzT3Blbj10cnVlO1xyXG5cdFx0dGhpcy5pbnB1dERhdGFDaGFuZ2UuZW1pdCh0aGlzLmlucHV0RGF0YSk7XHJcblx0XHQvLyBSZXBvcHVsYXRlIHRoZSBzdWdnZXN0aW9uc1x0IFxyXG5cdCAgICB0aGlzLnBvcHVsYXRlU3VnZ2VzdGlvbnMoKTtcclxuXHR9XHRcclxufSJdfQ==
