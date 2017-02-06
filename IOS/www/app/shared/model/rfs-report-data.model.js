"use strict";
var RfsReportDataModel = (function () {
    function RfsReportDataModel(rfsParentId, rfsId, sourceName) {
        this.rfsId = rfsId;
        this.rfsParentId = rfsParentId;
        this.sourceName = sourceName;
    }
    RfsReportDataModel.prototype.setRawData = function (jsonData) {
        this.rawData = jsonData;
    };
    RfsReportDataModel.prototype.getRawData = function () {
        return this.rawData;
    };
    RfsReportDataModel.prototype.getRfsParentId = function () {
        return this.rfsParentId;
    };
    RfsReportDataModel.prototype.getRfsId = function () {
        return this.rfsId;
    };
    RfsReportDataModel.prototype.getSourceName = function () {
        return this.sourceName;
    };
    return RfsReportDataModel;
}());
exports.RfsReportDataModel = RfsReportDataModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWwvcmZzLXJlcG9ydC1kYXRhLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQU9JLDRCQUFZLFdBQW1CLEVBQUUsS0FBYSxFQUFFLFVBQWtCO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsUUFBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDTCx5QkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMEJBQWtCLHFCQWlDOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVsL3Jmcy1yZXBvcnQtZGF0YS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZnNSZXBvcnREYXRhTW9kZWwge1xyXG4gICAgcHJpdmF0ZSByZnNQYXJlbnRJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZnNJZDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgcmF3RGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSBzb3VyY2VOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmZzUGFyZW50SWQ6IHN0cmluZywgcmZzSWQ6IHN0cmluZywgc291cmNlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZnNJZCA9IHJmc0lkO1xyXG4gICAgICAgIHRoaXMucmZzUGFyZW50SWQgPSByZnNQYXJlbnRJZDtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gc291cmNlTmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UmF3RGF0YShqc29uRGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yYXdEYXRhID0ganNvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF3RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yYXdEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJmc1BhcmVudElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJmc1BhcmVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJmc0lkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJmc0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTmFtZTtcclxuICAgIH1cclxufSJdfQ==
