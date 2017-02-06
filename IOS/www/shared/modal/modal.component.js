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
var components_helper_service_1 = require('../utils/components-helper.service');
var utils_class_1 = require('../utils/utils.class');
var modal_backdrop_component_1 = require('./modal-backdrop.component');
var modal_options_class_1 = require('./modal-options.class');
var browser_1 = require('../utils/facade/browser');
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
var ModalDirective = (function () {
    function ModalDirective(element, renderer, componentsHelper) {
        this.element = element;
        this.renderer = renderer;
        this.componentsHelper = componentsHelper;
        this.onShow = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "document", {
        get: function () {
            return this.componentsHelper.getDocument();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this.element.nativeElement) {
            return;
        }
        this.hide(event);
    };
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
        }
        this._isShown = void 0;
        this.isBodyOverflowing = void 0;
        this.originalBodyPadding = void 0;
        this.scrollbarWidth = void 0;
        this.timerHideModal = void 0;
        this.timerRmBackDrop = void 0;
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        this._config = this._config || this.getConfig();
    };
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, modal_options_class_1.ClassName.OPEN, true);
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, false);
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modal_options_class_1.modalConfigDefaults, config);
    };
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        if (!this.element.nativeElement.parentNode ||
            (this.element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            if (this.document && this.document.body) {
                this.document.body.appendChild(this.element.nativeElement);
            }
        }
        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'false');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
        this.renderer.setElementProperty(this.element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            utils_class_1.Utils.reflow(this.element.nativeElement);
        }
        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, true);
        this.onShown.emit(this);
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this.element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'true');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (_this.document && _this.document.body) {
                _this.renderer.setElementClass(_this.document.body, modal_options_class_1.ClassName.OPEN, false);
            }
            _this.resetAdjustments();
            _this.resetScrollbar();
            _this.onHidden.emit(_this);
        });
    };
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this.backdrop = this.componentsHelper
                .appendNextToRoot(modal_backdrop_component_1.ModalBackdropComponent, modal_backdrop_component_1.ModalBackdropOptions, new modal_backdrop_component_1.ModalBackdropOptions({ animate: false }));
            if (this.isAnimated) {
                this.backdrop.instance.isAnimated = this.isAnimated;
                utils_class_1.Utils.reflow(this.backdrop.instance.element.nativeElement);
            }
            this.backdrop.instance.isShown = true;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    ModalDirective.prototype.removeBackdrop = function () {
        if (this.backdrop) {
            this.backdrop.destroy();
            this.backdrop = void 0;
        }
    };
    ModalDirective.prototype.resetAdjustments = function () {
        this.renderer.setElementStyle(this.element.nativeElement, 'paddingLeft', '');
        this.renderer.setElementStyle(this.element.nativeElement, 'paddingRight', '');
    };
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = this.document.body.clientWidth < browser_1.window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!this.document) {
            return;
        }
        var fixedEl = this.document.querySelector(modal_options_class_1.Selector.FIXED_CONTENT);
        if (!fixedEl) {
            return;
        }
        var bodyPadding = parseInt(utils_class_1.Utils.getStyles(fixedEl).paddingRight || 0, 10);
        this.originalBodyPadding = parseInt(this.document.body.style.paddingRight || 0, 10);
        if (this.isBodyOverflowing) {
            this.document.body.style.paddingRight = (bodyPadding + this.scrollbarWidth) + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        this.document.body.style.paddingRight = this.originalBodyPadding;
    };
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this.renderer.createElement(this.document.body, 'div', void 0);
        scrollDiv.className = modal_options_class_1.ClassName.SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ModalDirective.prototype, "config", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalDirective.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalDirective.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalDirective.prototype, "onHide", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalDirective.prototype, "onHidden", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ModalDirective.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('keydown.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ModalDirective.prototype, "onEsc", null);
    ModalDirective = __decorate([
        core_1.Directive({
            selector: '[bsModal]',
            exportAs: 'bs-modal'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, components_helper_service_1.ComponentsHelper])
    ], ModalDirective);
    return ModalDirective;
}());
exports.ModalDirective = ModalDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLHFCQVdPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLDBDQUFpQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3RFLDRCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLHlDQUE2RCw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFGLG9DQUF1RSx1QkFBdUIsQ0FBQyxDQUFBO0FBRS9GLHdCQUF1Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRWpELElBQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQ2hDLElBQU0sNEJBQTRCLEdBQUcsR0FBRyxDQUFDO0FBTXpDO0lBK0RFLHdCQUEyQixPQUFtQixFQUNuQixRQUFrQixFQUNsQixnQkFBa0M7UUFGbEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUEzRDVDLFdBQU0sR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBQzFFLFlBQU8sR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBQzNFLFdBQU0sR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBQzFFLGFBQVEsR0FBaUMsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBUXRGLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFVeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUU1QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBSzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO0lBNkJwQyxDQUFDO0lBaEVELHNCQUFXLGtDQUFNO2FBU2pCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFdEIsQ0FBQzthQVpE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YWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdG9kbzogc2hvdWxkIHdlIHN1cHBvcnQgZW5mb3JjZSBmb2N1cyBpbj9cclxuLy8gdG9kbzogaW4gb3JpZ2luYWwgYnMgdGhlcmUgYXJlIHdhcyBhIHdheSB0byBwcmV2ZW50IG1vZGFsIGZyb20gc2hvd2luZ1xyXG4vLyB0b2RvOiBvcmlnaW5hbCBtb2RhbCBoYWQgcmVzaXplIGV2ZW50c1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNIZWxwZXIgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnRzLWhlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscy91dGlscy5jbGFzcyc7XHJcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQmFja2Ryb3BPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGFzc05hbWUsIG1vZGFsQ29uZmlnRGVmYXVsdHMsIE1vZGFsT3B0aW9ucywgU2VsZWN0b3IgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xyXG5cclxuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xyXG5cclxuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMDtcclxuY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzTW9kYWxdJyxcclxuICBleHBvcnRBczogJ2JzLW1vZGFsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBjb25maWcoY29uZjogTW9kYWxPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmdldENvbmZpZyhjb25mKTtcclxuICB9O1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvdzogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgY29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIHNlZW1zIGxpa2UgYW4gT3B0aW9uc1xyXG4gIHB1YmxpYyBpc0FuaW1hdGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd247XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBpbXBsZW1lbnQgX2RpYWxvZ1xyXG4gIHByb3RlY3RlZCBfZGlhbG9nOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBfY29uZmlnOiBNb2RhbE9wdGlvbnM7XHJcbiAgcHJvdGVjdGVkIF9pc1Nob3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXNCb2R5T3ZlcmZsb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIG9yaWdpbmFsQm9keVBhZGRpbmc6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxiYXJXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgLy8gcmVmZXJlbmNlIHRvIGJhY2tkcm9wIGNvbXBvbmVudFxyXG4gIHByaXZhdGUgYmFja2Ryb3A6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lckhpZGVNb2RhbDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHRpbWVyUm1CYWNrRHJvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgZG9jdW1lbnQoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNIZWxwZXIuZ2V0RG9jdW1lbnQoKTtcclxuICB9O1xyXG5cclxuICAvKiogSG9zdCBlbGVtZW50IG1hbmlwdWxhdGlvbnMgKi9cclxuICAvLyBASG9zdEJpbmRpbmcoYGNsYXNzLiR7Q2xhc3NOYW1lLklOfWApIHByaXZhdGUgX2FkZENsYXNzSW46Ym9vbGVhbjtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhpZGUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogY29uc2lkZXIgcHJldmVudGluZyBkZWZhdWx0IGFuZCBzdG9wcGluZyBwcm9wYWdhdGlvblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJylcclxuICBwdWJsaWMgb25Fc2MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRzSGVscGVyOiBDb21wb25lbnRzSGVscGVyKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgIHRoaXMuY29uZmlnID0gdm9pZCAwO1xyXG4gICAgLy8gdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IG51bGxcclxuICAgIC8vIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBudWxsXHJcbiAgICAvLyB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxyXG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNTaG93biA9IHZvaWQgMDtcclxuICAgIHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcgPSB2b2lkIDA7XHJcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSB2b2lkIDA7XHJcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdm9pZCAwO1xyXG4gICAgdGhpcy50aW1lckhpZGVNb2RhbCA9IHZvaWQgMDtcclxuICAgIHRoaXMudGltZXJSbUJhY2tEcm9wID0gdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fY29uZmlnIHx8IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICAvKiogUHVibGljIG1ldGhvZHMgKi9cclxuXHJcbiAgcHVibGljIHRvZ2dsZSgvKnJlbGF0ZWRUYXJnZXQ/OlZpZXdDb250YWluZXJSZWYqLyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygvKnJlbGF0ZWRUYXJnZXQqLyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdygvKnJlbGF0ZWRUYXJnZXQ/OlZpZXdDb250YWluZXJSZWYqLyk6IHZvaWQge1xyXG4gICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcclxuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XHJcblxyXG4gICAgdGhpcy5faXNTaG93biA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpO1xyXG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiB0aGlzLmRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBDbGFzc05hbWUuT1BFTiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFbGVtZW50KC8qcmVsYXRlZFRhcmdldCovKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAvLyB0b2RvOiBhZGQgYW4gb3B0aW9uIHRvIHByZXZlbnQgaGlkaW5nXHJcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XHJcblxyXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENsYXNzTmFtZS5JTiwgZmFsc2UpO1xyXG4gICAgLy8gdGhpcy5fYWRkQ2xhc3NJbiA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgdGhpcy50aW1lckhpZGVNb2RhbCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlTW9kYWwoKSwgVFJBTlNJVElPTl9EVVJBVElPTik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFByaXZhdGUgbWV0aG9kcyAqL1xyXG4gIHByaXZhdGUgZ2V0Q29uZmlnKGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBTaG93IGRpYWxvZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnQoLypyZWxhdGVkVGFyZ2V0PzpWaWV3Q29udGFpbmVyUmVmKi8pOiB2b2lkIHtcclxuICAgIC8vIHRvZG86IHJlcGxhY2UgdGhpcyB3aXRoIGNvbXBvbmVudCBoZWxwZXIgdXNhZ2UgYGFkZCB0byByb290YFxyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIHx8XHJcbiAgICAgICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkpIHtcclxuICAgICAgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXHJcbiAgICAgIGlmICh0aGlzLmRvY3VtZW50ICYmIHRoaXMuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbFRvcCcsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgVXRpbHMucmVmbG93KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gdHJ1ZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDbGFzc05hbWUuSU4sIHRydWUpO1xyXG5cclxuICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25Db21wbGV0ZSwgVFJBTlNJVElPTl9EVVJBVElPTik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIHRoaXMuc2hvd0JhY2tkcm9wKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQgJiYgdGhpcy5kb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBDbGFzc05hbWUuT1BFTiwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xyXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XHJcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogb3JpZ2luYWwgc2hvdyB3YXMgY2FsbGluZyBhIGNhbGxiYWNrIHdoZW4gZG9uZSwgYnV0IHdlIGNhbiB1c2UgcHJvbWlzZVxyXG4gIHByaXZhdGUgc2hvd0JhY2tkcm9wKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuY29uZmlnLmJhY2tkcm9wICYmICghdGhpcy5iYWNrZHJvcCB8fCAhdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duKSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLmNvbXBvbmVudHNIZWxwZXJcclxuICAgICAgICAuYXBwZW5kTmV4dFRvUm9vdChcclxuICAgICAgICAgIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsXHJcbiAgICAgICAgICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcclxuICAgICAgICAgIG5ldyBNb2RhbEJhY2tkcm9wT3B0aW9ucyh7YW5pbWF0ZTogZmFsc2V9KSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc0FuaW1hdGVkID0gdGhpcy5pc0FuaW1hdGVkO1xyXG4gICAgICAgIFV0aWxzLnJlZmxvdyh0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93biA9IHRydWU7XHJcbiAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy5pc0FuaW1hdGVkKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNBbmltYXRlZCkge1xyXG4gICAgICAgIHRoaXMudGltZXJSbUJhY2tEcm9wID0gc2V0VGltZW91dChjYWxsYmFja1JlbW92ZSwgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEV2ZW50cyB0cmlja3MgKi9cclxuXHJcbiAgLy8gbm8gbmVlZCBmb3IgaXRcclxuICAvLyBwcml2YXRlIHNldEVzY2FwZUV2ZW50KCk6dm9pZCB7XHJcbiAgLy8gICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcclxuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xyXG4gIC8vICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcclxuICAvLyAgICAgICAgIHRoaXMuaGlkZSgpXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vXHJcbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XHJcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0UmVzaXplRXZlbnQoKTp2b2lkIHtcclxuICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnJywgRXZlbnQuUkVTSVpFKSk7XHJcbiAgLy8gaWYgKHRoaXMuX2lzU2hvd24pIHtcclxuICAvLyAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsICQucHJveHkodGhpcy5faGFuZGxlVXBkYXRlLCB0aGlzKSlcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXHJcbiAgLy8gfVxyXG4gIC8vIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEFkanVzdG1lbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nTGVmdCcsICcnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncGFkZGluZ1JpZ2h0JywgJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXHJcblxyXG4gIHByaXZhdGUgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gdGhpcy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpeGVkRWwgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuRklYRURfQ09OVEVOVCk7XHJcblxyXG4gICAgaWYgKCFmaXhlZEVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5UGFkZGluZyA9IHBhcnNlSW50KFV0aWxzLmdldFN0eWxlcyhmaXhlZEVsKS5wYWRkaW5nUmlnaHQgfHwgMCwgMTApO1xyXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nID0gcGFyc2VJbnQodGhpcy5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAwLCAxMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcclxuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2JvZHlQYWRkaW5nICsgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZztcclxuICB9XHJcblxyXG4gIC8vIHRoeCBkLndhbHNoXHJcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgJ2RpdicsIHZvaWQgMCk7XHJcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUjtcclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XHJcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XHJcbiAgfVxyXG59XHJcbiJdfQ==
