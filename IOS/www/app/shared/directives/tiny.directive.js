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
var platform_browser_1 = require('@angular/platform-browser');
exports.TinyMceValueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TinyMceDirective; }),
    multi: true
};
var TinyMceDirective = (function () {
    function TinyMceDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.init = false;
        this.uniqueId = "tinymce-host-" + TinyMceDirective.nextUniqueId++;
    }
    Object.defineProperty(TinyMceDirective.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TinyMceDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: "[data-tinymce-uniqueid=" + this.uniqueId + "]",
            schema: 'html5',
            mode: 'exact',
            elementpath: false,
            height: 125,
            menubar: false,
            resize: false,
            plugins: ['paste wordcount'],
            toolbar: 'insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
            setup: function (ed) {
                ed.on('init', function (ed2) {
                    if (_this.innerValue) {
                        ed2.target.setContent(_this.innerValue);
                    }
                    ;
                    _this.init = true;
                });
            }
        });
        tinymce.activeEditor.on('blur', function () { return _this.updateValue(); });
    };
    TinyMceDirective.prototype.updateValue = function () {
        var content = tinymce.activeEditor.getContent();
        var sanitized = this.sanitizer.bypassSecurityTrustHtml(content);
        this.value = sanitized.changingThisBreaksApplicationSecurity;
    };
    TinyMceDirective.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            if (this.init && value)
                tinymce.activeEditor.setContent(value);
        }
    };
    TinyMceDirective.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TinyMceDirective.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TinyMceDirective.prototype.ngOnDestroy = function () {
        if (this.init)
            tinymce.remove("[data-tinymce-uniqueid=" + this.uniqueId + "]");
    };
    TinyMceDirective.nextUniqueId = 0;
    __decorate([
        core_1.HostBinding('attr.data-tinymce-uniqueid'), 
        __metadata('design:type', String)
    ], TinyMceDirective.prototype, "uniqueId", void 0);
    TinyMceDirective = __decorate([
        core_1.Directive({
            selector: '[htmlEditor]',
            providers: [exports.TinyMceValueAccessor]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], TinyMceDirective);
    return TinyMceDirective;
}());
exports.TinyMceDirective = TinyMceDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlyZWN0aXZlcy90aW55LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBT08sZUFBZSxDQUFDLENBQUE7QUFDdkIsc0JBQXdELGdCQUFnQixDQUFDLENBQUE7QUFDekUsaUNBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFJNUMsNEJBQW9CLEdBQWE7SUFDMUMsT0FBTyxFQUFFLHlCQUFpQjtJQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBUUY7SUFTSSwwQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUwzQyxzQkFBaUIsR0FBZSxjQUFRLENBQUMsQ0FBQztRQUMxQyxxQkFBZ0IsR0FBcUIsY0FBUSxDQUFDLENBQUM7UUFFL0MsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdULElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWdCLGdCQUFnQixDQUFDLFlBQVksRUFBSSxDQUFDO0lBQ3RFLENBQUM7SUFHRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUdELFVBQVUsQ0FBTTtZQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQzs7O09BUkE7O0lBVUQsMENBQWUsR0FBZjtRQUFBLGlCQXNCQztRQXJCRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUEwQixJQUFJLENBQUMsUUFBUSxNQUFHO1lBQ3BELE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixXQUFXLEVBQUUsS0FBSztZQUNsQixNQUFNLEVBQUUsR0FBRztZQUNYLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixPQUFPLEVBQUUscUhBQXFIO1lBQzlILEtBQUssRUFBRSxVQUFBLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQSxHQUFHO29CQUNiLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQUEsQ0FBQztvQkFBQSxDQUFDO29CQUM1QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBR0gsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxxQ0FBcUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7Z0JBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBRTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw0QkFBMEIsSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQXhFTSw2QkFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QjtRQUFDLGtCQUFXLENBQUMsNEJBQTRCLENBQUM7O3NEQUFBO0lBUDlDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLDRCQUFvQixDQUFDO1NBQ3BDLENBQUM7O3dCQUFBO0lBNEVGLHVCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFWSx3QkFBZ0IsbUJBMEU1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZGlyZWN0aXZlcy90aW55LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgUHJvdmlkZXIsXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW55TWNlVmFsdWVBY2Nlc3NvcjogUHJvdmlkZXIgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbnlNY2VEaXJlY3RpdmUpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8vIFRpbnltY2UgZGlyZWN0aXZlXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaHRtbEVkaXRvcl0nLFxyXG4gICAgcHJvdmlkZXJzOiBbVGlueU1jZVZhbHVlQWNjZXNzb3JdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGlueU1jZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgc3RhdGljIG5leHRVbmlxdWVJZCA9IDA7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS10aW55bWNlLXVuaXF1ZWlkJykgdW5pcXVlSWQ6c3RyaW5nO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIGlubmVyVmFsdWU6YW55O1xyXG4gICAgaW5pdCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gYHRpbnltY2UtaG9zdC0ke1RpbnlNY2VEaXJlY3RpdmUubmV4dFVuaXF1ZUlkKyt9YDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBhY2Nlc3NvclxyXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy9zZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgaWYgKHYgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2O1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogYFtkYXRhLXRpbnltY2UtdW5pcXVlaWQ9JHt0aGlzLnVuaXF1ZUlkfV1gLFxyXG4gICAgICAgICAgICBzY2hlbWE6ICdodG1sNScsXHJcbiAgICAgICAgICAgIG1vZGU6ICdleGFjdCcsXHJcbiAgICAgICAgICAgIGVsZW1lbnRwYXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjUsXHJcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwbHVnaW5zOiBbJ3Bhc3RlIHdvcmRjb3VudCddLFxyXG4gICAgICAgICAgICB0b29sYmFyOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCcsXHJcbiAgICAgICAgICAgIHNldHVwOiBlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZC5vbignaW5pdCcsIGVkMiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZDIudGFyZ2V0LnNldENvbnRlbnQodGhpcy5pbm5lclZhbHVlKX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEkgY2hvc2UgdG8gc2VuZCBhbiB1cGRhdGUgb24gYmx1ciwgeW91IG1heSBjaG9vc2Ugb3RoZXJ3aXNlXHJcbiAgICAgICAgdGlueW1jZS5hY3RpdmVFZGl0b3Iub24oJ2JsdXInLCAoKSA9PiB0aGlzLnVwZGF0ZVZhbHVlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aW55bWNlLmFjdGl2ZUVkaXRvci5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgbGV0IHNhbml0aXplZCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzYW5pdGl6ZWQuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXQgJiYgdmFsdWUpIHRpbnltY2UuYWN0aXZlRWRpdG9yLnNldENvbnRlbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdCkgdGlueW1jZS5yZW1vdmUoYFtkYXRhLXRpbnltY2UtdW5pcXVlaWQ9JHt0aGlzLnVuaXF1ZUlkfV1gKTtcclxuICAgIH1cclxufSJdfQ==
