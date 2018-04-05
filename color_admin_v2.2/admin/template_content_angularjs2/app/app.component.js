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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_sidebar_transparent = false;
        this.page_with_wide_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                _this.clearSettings();
            }
        });
    }
    AppComponent.prototype.setPageSidebarMinified = function (setting) {
        this.page_sidebar_minified = setting;
    };
    AppComponent.prototype.setPageFooter = function (setting) {
        this.page_with_footer = setting;
    };
    AppComponent.prototype.setPageWideSidebar = function (setting) {
        this.page_with_wide_sidebar = setting;
    };
    AppComponent.prototype.setPageContentFullHeight = function (setting) {
        this.page_content_full_height = setting;
    };
    AppComponent.prototype.setPageContentFullWidth = function (setting) {
        this.page_content_full_width = setting;
    };
    AppComponent.prototype.setPageSidebarTransparent = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    AppComponent.prototype.setPageLightSidebar = function (setting) {
        this.page_with_light_sidebar = setting;
    };
    AppComponent.prototype.setPageRightSidebar = function (setting) {
        this.page_with_right_sidebar = setting;
    };
    AppComponent.prototype.setPageWithoutSidebar = function (setting) {
        this.page_without_sidebar = setting;
    };
    AppComponent.prototype.setPageTwoSidebar = function (setting) {
        this.page_with_two_sidebar = setting;
    };
    AppComponent.prototype.setPageTopMenu = function (setting) {
        this.page_with_top_menu = setting;
    };
    AppComponent.prototype.setPageTransparentSidebar = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    AppComponent.prototype.setPageMegaMenu = function (setting) {
        this.page_with_mega_menu = setting;
    };
    AppComponent.prototype.setPageContentInverseMode = function (setting) {
        this.page_content_inverse_mode = setting;
    };
    AppComponent.prototype.setPageBoxedLayout = function (setting) {
        this.page_boxed_layout = setting;
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
    };
    AppComponent.prototype.setPageBgWhite = function (setting) {
        this.page_bg_white = setting;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
    };
    AppComponent.prototype.setPageWithoutHeader = function (setting) {
        this.page_without_header = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
    };
    AppComponent.prototype.setPagePaceTop = function (setting) {
        this.page_pace_top = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    AppComponent.prototype.clearSettings = function () {
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_with_wide_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_sidebar_transparent = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_sidebar_transparent = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
        if (this.page_pace_top) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map