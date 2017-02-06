"use strict";
var Event = (function () {
    function Event(rfsParentId, rfsId, type) {
        this.rfsId = rfsId;
        this.rfsParentId = rfsParentId;
        this.type = type;
    }
    Event.prototype.getRfsParentId = function () {
        return this.rfsParentId;
    };
    Event.prototype.getRfsId = function () {
        return this.rfsId;
    };
    Event.prototype.getType = function () {
        return this.type;
    };
    return Event;
}());
exports.Event = Event;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWwvZXZlbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBTUksZUFBWSxXQUFtQixFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUksV0FBVyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCw4QkFBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxhQUFLLFFBdUJqQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWwvZXZlbnQubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnQge1xyXG4gICAgcHJpdmF0ZSByZnNQYXJlbnRJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZnNJZDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJmc1BhcmVudElkOiBzdHJpbmcsIHJmc0lkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmZzSWQgPSByZnNJZDtcclxuICAgICAgICB0aGlzLnJmc1BhcmVudElkID0gIHJmc1BhcmVudElkO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgXHJcbiAgICB9XHJcbiAgIFx0Z2V0UmZzUGFyZW50SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmZzUGFyZW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICBcdGdldFJmc0lkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJmc0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxufSJdfQ==
