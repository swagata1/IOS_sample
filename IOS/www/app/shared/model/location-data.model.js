"use strict";
var LocationDataModel = (function () {
    function LocationDataModel(rfsParentId, rfsId, sourceName) {
        this.rfsId = rfsId;
        this.rfsParentId = rfsParentId;
        this.sourceName = sourceName;
    }
    LocationDataModel.prototype.setRawData = function (jsonData) {
        this.rawData = jsonData;
    };
    LocationDataModel.prototype.getRawData = function () {
        return this.rawData;
    };
    LocationDataModel.prototype.getRfsParentId = function () {
        return this.rfsParentId;
    };
    LocationDataModel.prototype.getRfsId = function () {
        return this.rfsId;
    };
    LocationDataModel.prototype.getSourceName = function () {
        return this.sourceName;
    };
    return LocationDataModel;
}());
exports.LocationDataModel = LocationDataModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWwvbG9jYXRpb24tZGF0YS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFPSSwyQkFBWSxXQUFtQixFQUFFLEtBQWEsRUFBRSxVQUFrQjtRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLFFBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLHlCQUFpQixvQkFpQzdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbC9sb2NhdGlvbi1kYXRhLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvY2F0aW9uRGF0YU1vZGVsIHtcclxuICAgIHByaXZhdGUgcmZzUGFyZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmZzSWQ6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHJhd0RhdGE6IGFueTtcclxuICAgIHByaXZhdGUgc291cmNlTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJmc1BhcmVudElkOiBzdHJpbmcsIHJmc0lkOiBzdHJpbmcsIHNvdXJjZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmZzSWQgPSByZnNJZDtcclxuICAgICAgICB0aGlzLnJmc1BhcmVudElkID0gcmZzUGFyZW50SWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlTmFtZSA9IHNvdXJjZU5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFJhd0RhdGEoanNvbkRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMucmF3RGF0YSA9IGpzb25EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhd0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmF3RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZnNQYXJlbnRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZnNQYXJlbnRJZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZnNJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZnNJZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3VyY2VOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5hbWU7XHJcbiAgICB9XHJcbn0iXX0=
