"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isInvalidLE = function (control) {
        if (control.value) {
            return { 'required': true };
        }
        else {
            return null;
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQVBHLHVDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlkseUJBQWlCLG9CQVE3QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIGlzSW52YWxpZExFKGNvbnRyb2wpIHtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAncmVxdWlyZWQnOiB0cnVlIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
