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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
// Main Component
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var sidebar_two_component_1 = require('./sidebar-two/sidebar-two.component');
var content_component_1 = require('./content/content.component');
var footer_component_1 = require('./footer/footer.component');
var top_menu_component_1 = require('./top-menu/top-menu.component');
var mega_menu_component_1 = require('./header/mega-menu/mega-menu.component');
var theme_panel_component_1 = require('./theme-panel/theme-panel.component');
// Dashboard
var dashboard_v1_1 = require('./pages/dashboard/v1/dashboard-v1');
var dashboard_v2_1 = require('./pages/dashboard/v2/dashboard-v2');
// Email
var email_inbox_v1_1 = require('./pages/email/inbox/v1/email-inbox-v1');
var email_inbox_v2_1 = require('./pages/email/inbox/v2/email-inbox-v2');
var email_compose_1 = require('./pages/email/compose/email-compose');
var email_detail_1 = require('./pages/email/detail/email-detail');
// UI Element
var general_1 = require('./pages/ui-elements/general/general');
var typography_1 = require('./pages/ui-elements/typography/typography');
var tabs_accordions_1 = require('./pages/ui-elements/tabs-accordions/tabs-accordions');
var unlimited_nav_tabs_1 = require('./pages/ui-elements/unlimited-nav-tabs/unlimited-nav-tabs');
var modal_notification_1 = require('./pages/ui-elements/modal-notification/modal-notification');
var widget_boxes_1 = require('./pages/ui-elements/widget-boxes/widget-boxes');
var media_object_1 = require('./pages/ui-elements/media-object/media-object');
var buttons_1 = require('./pages/ui-elements/buttons/buttons');
var icons_1 = require('./pages/ui-elements/icons/icons');
var simple_line_icons_1 = require('./pages/ui-elements/simple-line-icons/simple-line-icons');
var ionicons_1 = require('./pages/ui-elements/ionicons/ionicons');
var tree_view_1 = require('./pages/ui-elements/tree-view/tree-view');
var language_bar_icon_1 = require('./pages/ui-elements/language-bar-icon/language-bar-icon');
var social_buttons_1 = require('./pages/ui-elements/social-buttons/social-buttons');
var intro_js_1 = require('./pages/ui-elements/intro-js/intro-js');
// Form Stuff
var form_elements_1 = require('./pages/form-stuff/form-elements/form-elements');
var form_plugins_1 = require('./pages/form-stuff/form-plugins/form-plugins');
var form_slider_switcher_1 = require('./pages/form-stuff/form-slider-switcher/form-slider-switcher');
var form_summernote_1 = require('./pages/form-stuff/form-summernote/form-summernote');
var form_wysiwyg_1 = require('./pages/form-stuff/form-wysiwyg/form-wysiwyg');
var form_validation_1 = require('./pages/form-stuff/form-validation/form-validation');
// Table
var table_basic_1 = require('./pages/tables/table-basic/table-basic');
var table_manage_default_1 = require('./pages/tables/table-manage-default/table-manage-default');
var table_manage_autofill_1 = require('./pages/tables/table-manage-autofill/table-manage-autofill');
var table_manage_buttons_1 = require('./pages/tables/table-manage-buttons/table-manage-buttons');
var table_manage_colreorder_1 = require('./pages/tables/table-manage-colreorder/table-manage-colreorder');
var table_manage_combine_1 = require('./pages/tables/table-manage-combine/table-manage-combine');
var table_manage_fixed_columns_1 = require('./pages/tables/table-manage-fixed-columns/table-manage-fixed-columns');
var table_manage_fixed_header_1 = require('./pages/tables/table-manage-fixed-header/table-manage-fixed-header');
var table_manage_keytable_1 = require('./pages/tables/table-manage-keytable/table-manage-keytable');
var table_manage_responsive_1 = require('./pages/tables/table-manage-responsive/table-manage-responsive');
var table_manage_rowreorder_1 = require('./pages/tables/table-manage-rowreorder/table-manage-rowreorder');
var table_manage_scroller_1 = require('./pages/tables/table-manage-scroller/table-manage-scroller');
var table_manage_select_1 = require('./pages/tables/table-manage-select/table-manage-select');
// Chart
var chart_flot_1 = require('./pages/chart/chart-flot/chart-flot');
var chart_js_1 = require('./pages/chart/chart-js/chart-js');
var chart_morris_1 = require('./pages/chart/chart-morris/chart-morris');
var chart_d3_1 = require('./pages/chart/chart-d3/chart-d3');
// Calendar
var calendar_1 = require('./pages/calendar/calendar');
// Map
var map_vector_1 = require('./pages/map/map-vector/map-vector');
var map_google_1 = require('./pages/map/map-google/map-google');
// Gallery
var gallery_v1_1 = require('./pages/gallery/gallery-v1/gallery-v1');
var gallery_v2_1 = require('./pages/gallery/gallery-v2/gallery-v2');
// Extra Pages
var extra_timeline_1 = require('./pages/extra/extra-timeline/extra-timeline');
var extra_coming_soon_1 = require('./pages/extra/extra-coming-soon/extra-coming-soon');
var extra_search_results_1 = require('./pages/extra/extra-search-results/extra-search-results');
var extra_invoice_1 = require('./pages/extra/extra-invoice/extra-invoice');
var extra_error_1 = require('./pages/extra/extra-error/extra-error');
var extra_profile_1 = require('./pages/extra/extra-profile/extra-profile');
// Page Options
var page_blank_1 = require('./pages/page-options/page-blank/page-blank');
var full_height_content_1 = require('./pages/page-options/full-height-content/full-height-content');
var page_with_minified_sidebar_1 = require('./pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar');
var page_with_wide_sidebar_1 = require('./pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar');
var page_with_light_sidebar_1 = require('./pages/page-options/page-with-light-sidebar/page-with-light-sidebar');
var page_with_right_sidebar_1 = require('./pages/page-options/page-with-right-sidebar/page-with-right-sidebar');
var page_with_two_sidebar_1 = require('./pages/page-options/page-with-two-sidebar/page-with-two-sidebar');
var page_without_sidebar_1 = require('./pages/page-options/page-without-sidebar/page-without-sidebar');
var page_with_top_menu_1 = require('./pages/page-options/page-with-top-menu/page-with-top-menu');
var page_with_transparent_sidebar_1 = require('./pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar');
var page_with_footer_1 = require('./pages/page-options/page-with-footer/page-with-footer');
var page_with_boxed_layout_1 = require('./pages/page-options/page-with-boxed-layout/page-with-boxed-layout');
var page_with_mixed_menu_1 = require('./pages/page-options/page-with-mixed-menu/page-with-mixed-menu');
var page_with_mega_menu_1 = require('./pages/page-options/page-with-mega-menu/page-with-mega-menu');
var page_boxed_layout_with_mixed_menu_1 = require('./pages/page-options/page-boxed-layout-with-mixed-menu/page-boxed-layout-with-mixed-menu');
// User Login / Register
var login_1 = require('./pages/user/login/login');
var login_v2_1 = require('./pages/user/login-v2/login-v2');
var login_v3_1 = require('./pages/user/login-v3/login-v3');
var register_v3_1 = require('./pages/user/register-v3/register-v3');
// Helper
var helper_css_1 = require('./pages/helper/helper-css/helper-css');
var AppModule = (function () {
    function AppModule(router, titleService, route) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.route = route;
        router.events.subscribe(function (e) {
            // change page title when url change
            if (e instanceof router_1.NavigationEnd) {
                var title = 'Color Admin | ' + _this.route.snapshot.firstChild.data['title'];
                _this.titleService.setTitle(title);
                window.dispatchEvent(new CustomEvent('page-reload'));
            }
        });
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                sidebar_two_component_1.SidebarTwoComponent,
                content_component_1.ContentComponent,
                theme_panel_component_1.ThemePanelComponent,
                top_menu_component_1.TopMenuComponent,
                mega_menu_component_1.MegaMenuComponent,
                footer_component_1.FooterComponent,
                dashboard_v1_1.DashboardV1Page,
                dashboard_v2_1.DashboardV2Page,
                email_inbox_v1_1.EmailInboxV1Page,
                email_inbox_v2_1.EmailInboxV2Page,
                email_compose_1.EmailComposePage,
                email_detail_1.EmailDetailPage,
                general_1.UIGeneralPage,
                typography_1.UITypographyPage,
                tabs_accordions_1.UITabsAccordionsPage,
                unlimited_nav_tabs_1.UIUnlimitedNavTabsPage,
                modal_notification_1.UIModalNotificationPage,
                widget_boxes_1.UIWidgetBoxesPage,
                media_object_1.UIMediaObjectPage,
                buttons_1.UIButtonsPage,
                icons_1.UIIconsPage,
                simple_line_icons_1.UISimpleLineIconsPage,
                ionicons_1.UIIoniconsPage,
                tree_view_1.UITreeViewPage,
                language_bar_icon_1.UILanguageBarIconPage,
                social_buttons_1.UISocialButtonsPage,
                intro_js_1.UIIntroJsPage,
                form_elements_1.FormElementsPage,
                form_plugins_1.FormPluginsPage,
                form_slider_switcher_1.FormSliderSwitcherPage,
                form_summernote_1.FormSummernotePage,
                form_wysiwyg_1.FormWysiwygPage,
                form_validation_1.FormValidationPage,
                table_basic_1.TableBasicPage,
                table_manage_default_1.TableManageDefaultPage,
                table_manage_autofill_1.TableManageAutofillPage,
                table_manage_buttons_1.TableManageButtonsPage,
                table_manage_colreorder_1.TableManageColReorderPage,
                table_manage_combine_1.TableManageCombinePage,
                table_manage_fixed_columns_1.TableManageFixedColumnsPage,
                table_manage_fixed_header_1.TableManageFixedHeaderPage,
                table_manage_keytable_1.TableManageKeyTablePage,
                table_manage_responsive_1.TableManageResponsivePage,
                table_manage_rowreorder_1.TableManageRowReorderPage,
                table_manage_scroller_1.TableManageScrollerPage,
                table_manage_select_1.TableManageSelectPage,
                chart_flot_1.ChartFlotPage,
                chart_js_1.ChartJsPage,
                chart_morris_1.ChartMorrisPage,
                chart_d3_1.ChartD3Page,
                calendar_1.CalendarPage,
                map_vector_1.MapVectorPage,
                map_google_1.MapGooglePage,
                gallery_v1_1.GalleryV1Page,
                gallery_v2_1.GalleryV2Page,
                page_blank_1.BlankPage,
                page_with_minified_sidebar_1.SidebarMinifiedPage,
                full_height_content_1.FullHeightContentPage,
                page_with_wide_sidebar_1.WideSidebarPage,
                page_with_light_sidebar_1.LightSidebarPage,
                page_with_transparent_sidebar_1.TransparentSidebarPage,
                page_with_right_sidebar_1.RightSidebarPage,
                page_with_footer_1.FooterPage,
                page_with_top_menu_1.TopMenuPage,
                page_without_sidebar_1.WithoutSidebarPage,
                page_with_two_sidebar_1.TwoSidebarPage,
                page_with_boxed_layout_1.BoxedLayoutPage,
                page_with_mixed_menu_1.MixedMenuPage,
                page_with_mega_menu_1.MegaMenuPage,
                page_boxed_layout_with_mixed_menu_1.BoxedLayoutMixedMenuPage,
                helper_css_1.HelperCssPage,
                extra_timeline_1.ExtraTimelinePage,
                extra_coming_soon_1.ExtraComingSoonPage,
                extra_search_results_1.ExtraSearchResultsPage,
                extra_invoice_1.ExtraInvoicePage,
                extra_error_1.ExtraErrorPage,
                extra_profile_1.ExtraProfilePage,
                login_1.LoginPage,
                login_v2_1.LoginV2Page,
                login_v3_1.LoginV3Page,
                register_v3_1.RegisterV3Page
            ],
            providers: [platform_browser_1.Title],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.Title, router_1.ActivatedRoute])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map