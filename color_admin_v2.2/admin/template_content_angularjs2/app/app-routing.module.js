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
var routes = [
    { path: '', redirectTo: '/dashboard/v2', pathMatch: 'full' },
    { path: 'dashboard/v1', component: dashboard_v1_1.DashboardV1Page, data: { title: 'Dashboard V1' } },
    { path: 'dashboard/v2', component: dashboard_v2_1.DashboardV2Page, data: { title: 'Dashboard V2' } },
    { path: 'email/inbox/v1', component: email_inbox_v1_1.EmailInboxV1Page, data: { title: 'Email Inbox V1' } },
    { path: 'email/inbox/v2', component: email_inbox_v2_1.EmailInboxV2Page, data: { title: 'Email Inbox V2' } },
    { path: 'email/compose', component: email_compose_1.EmailComposePage, data: { title: 'Email Compose' } },
    { path: 'email/detail', component: email_detail_1.EmailDetailPage, data: { title: 'Email Detail' } },
    { path: 'ui/general', component: general_1.UIGeneralPage, data: { title: 'UI General' } },
    { path: 'ui/typography', component: typography_1.UITypographyPage, data: { title: 'UI Typography' } },
    { path: 'ui/tabs-accordions', component: tabs_accordions_1.UITabsAccordionsPage, data: { title: 'UI Tabs & Accordions' } },
    { path: 'ui/unlimited-nav-tabs', component: unlimited_nav_tabs_1.UIUnlimitedNavTabsPage, data: { title: 'UI Unlimited Nav Tabs' } },
    { path: 'ui/modal-notification', component: modal_notification_1.UIModalNotificationPage, data: { title: 'UI Modal & Notification' } },
    { path: 'ui/widget-boxes', component: widget_boxes_1.UIWidgetBoxesPage, data: { title: 'UI Widget Boxes' } },
    { path: 'ui/media-object', component: media_object_1.UIMediaObjectPage, data: { title: 'UI Media Object' } },
    { path: 'ui/buttons', component: buttons_1.UIButtonsPage, data: { title: 'UI Buttons' } },
    { path: 'ui/icons', component: icons_1.UIIconsPage, data: { title: 'UI Icons' } },
    { path: 'ui/simple-line-icons', component: simple_line_icons_1.UISimpleLineIconsPage, data: { title: 'UI SimpleLineIcons' } },
    { path: 'ui/ionicons', component: ionicons_1.UIIoniconsPage, data: { title: 'UI Ionicons' } },
    { path: 'ui/tree-view', component: tree_view_1.UITreeViewPage, data: { title: 'UI Tree View' } },
    { path: 'ui/language-bar-icon', component: language_bar_icon_1.UILanguageBarIconPage, data: { title: 'UI Language Bar Icon' } },
    { path: 'ui/social-buttons', component: social_buttons_1.UISocialButtonsPage, data: { title: 'UI Social Buttons' } },
    { path: 'ui/intro-js', component: intro_js_1.UIIntroJsPage, data: { title: 'Intro JS' } },
    { path: 'form/elements', component: form_elements_1.FormElementsPage, data: { title: 'Form Elements' } },
    { path: 'form/plugins', component: form_plugins_1.FormPluginsPage, data: { title: 'Form Plugins' } },
    { path: 'form/slider-switcher', component: form_slider_switcher_1.FormSliderSwitcherPage, data: { title: 'Form Slider Switcher' } },
    { path: 'form/summernote', component: form_summernote_1.FormSummernotePage, data: { title: 'Form Summernote' } },
    { path: 'form/wysiwyg', component: form_wysiwyg_1.FormWysiwygPage, data: { title: 'Form WYSIWYG' } },
    { path: 'form/validation', component: form_validation_1.FormValidationPage, data: { title: 'Form Validation' } },
    { path: 'table/basic', component: table_basic_1.TableBasicPage, data: { title: 'Basic Tables' } },
    { path: 'table/manage/default', component: table_manage_default_1.TableManageDefaultPage, data: { title: 'Managed Table Default' } },
    { path: 'table/manage/autofill', component: table_manage_autofill_1.TableManageAutofillPage, data: { title: 'Managed Table Autofill' } },
    { path: 'table/manage/buttons', component: table_manage_buttons_1.TableManageButtonsPage, data: { title: 'Managed Table Buttons' } },
    { path: 'table/manage/colreorder', component: table_manage_colreorder_1.TableManageColReorderPage, data: { title: 'Managed Table ColReorder' } },
    { path: 'table/manage/fixed-columns', component: table_manage_fixed_columns_1.TableManageFixedColumnsPage, data: { title: 'Managed Table Fixed Column' } },
    { path: 'table/manage/fixed-header', component: table_manage_fixed_header_1.TableManageFixedHeaderPage, data: { title: 'Managed Table Fixed Header' } },
    { path: 'table/manage/keytable', component: table_manage_keytable_1.TableManageKeyTablePage, data: { title: 'Managed Table KeyTable' } },
    { path: 'table/manage/responsive', component: table_manage_responsive_1.TableManageResponsivePage, data: { title: 'Managed Table Responsive' } },
    { path: 'table/manage/rowreorder', component: table_manage_rowreorder_1.TableManageRowReorderPage, data: { title: 'Managed Table RowReorder' } },
    { path: 'table/manage/scroller', component: table_manage_scroller_1.TableManageScrollerPage, data: { title: 'Managed Table Scroller' } },
    { path: 'table/manage/select', component: table_manage_select_1.TableManageSelectPage, data: { title: 'Managed Table Select' } },
    { path: 'table/manage/combine', component: table_manage_combine_1.TableManageCombinePage, data: { title: 'Managed Table Extension Combination' } },
    { path: 'chart/flot', component: chart_flot_1.ChartFlotPage, data: { title: 'Chart Flot' } },
    { path: 'chart/morris', component: chart_morris_1.ChartMorrisPage, data: { title: 'Chart Morris' } },
    { path: 'chart/js', component: chart_js_1.ChartJsPage, data: { title: 'Chart JS' } },
    { path: 'chart/d3', component: chart_d3_1.ChartD3Page, data: { title: 'Chart D3' } },
    { path: 'calendar', component: calendar_1.CalendarPage, data: { title: 'Calendar' } },
    { path: 'map/vector', component: map_vector_1.MapVectorPage, data: { title: 'Vector Map' } },
    { path: 'map/google', component: map_google_1.MapGooglePage, data: { title: 'Google Map' } },
    { path: 'gallery/v1', component: gallery_v1_1.GalleryV1Page, data: { title: 'Gallery V1' } },
    { path: 'gallery/v2', component: gallery_v2_1.GalleryV2Page, data: { title: 'Gallery V2' } },
    { path: 'extra/timeline', component: extra_timeline_1.ExtraTimelinePage, data: { title: 'Timeline' } },
    { path: 'extra/coming-soon', component: extra_coming_soon_1.ExtraComingSoonPage, data: { title: 'Coming Soon Page' } },
    { path: 'extra/search', component: extra_search_results_1.ExtraSearchResultsPage, data: { title: 'Search Results Page' } },
    { path: 'extra/error', component: extra_error_1.ExtraErrorPage, data: { title: 'Error Page' } },
    { path: 'extra/invoice', component: extra_invoice_1.ExtraInvoicePage, data: { title: 'Invoice' } },
    { path: 'extra/profile', component: extra_profile_1.ExtraProfilePage, data: { title: 'Profile Page' } },
    { path: 'page/blank', component: page_blank_1.BlankPage, data: { title: 'Blank Page' } },
    { path: 'page/with-minified-sidebar', component: page_with_minified_sidebar_1.SidebarMinifiedPage, data: { title: 'Page with Minified Sidebar' } },
    { path: 'page/full-height-content', component: full_height_content_1.FullHeightContentPage, data: { title: 'Full Height Content' } },
    { path: 'page/with-wide-sidebar', component: page_with_wide_sidebar_1.WideSidebarPage, data: { title: 'Page with Wide Sidebar' } },
    { path: 'page/with-footer', component: page_with_footer_1.FooterPage, data: { title: 'Page with Footer' } },
    { path: 'page/with-light-sidebar', component: page_with_light_sidebar_1.LightSidebarPage, data: { title: 'Page with Light Sidebar' } },
    { path: 'page/with-transparent-sidebar', component: page_with_transparent_sidebar_1.TransparentSidebarPage, data: { title: 'Page with Transparent Sidebar' } },
    { path: 'page/with-right-sidebar', component: page_with_right_sidebar_1.RightSidebarPage, data: { title: 'Page with Right Sidebar' } },
    { path: 'page/with-top-menu', component: page_with_top_menu_1.TopMenuPage, data: { title: 'Page with Top Menu' } },
    { path: 'page/without-sidebar', component: page_without_sidebar_1.WithoutSidebarPage, data: { title: 'Page without Sidebar' } },
    { path: 'page/with-two-sidebar', component: page_with_two_sidebar_1.TwoSidebarPage, data: { title: 'Page with Two Sidebar' } },
    { path: 'page/with-boxed-layout', component: page_with_boxed_layout_1.BoxedLayoutPage, data: { title: 'Page with Boxed Layout' } },
    { path: 'page/with-mixed-menu', component: page_with_mixed_menu_1.MixedMenuPage, data: { title: 'Page with Mixed Menu' } },
    { path: 'page/with-mega-menu', component: page_with_mega_menu_1.MegaMenuPage, data: { title: 'Page with Mega Menu' } },
    { path: 'page/boxed-layout-with-mixed-menu', component: page_boxed_layout_with_mixed_menu_1.BoxedLayoutMixedMenuPage, data: { title: 'Page Boxed Layout with Mixed Menu' } },
    { path: 'user/login', component: login_1.LoginPage, data: { title: 'Login Page' } },
    { path: 'user/login-v2', component: login_v2_1.LoginV2Page, data: { title: 'Login V2 Page' } },
    { path: 'user/login-v3', component: login_v3_1.LoginV3Page, data: { title: 'Login V3 Page' } },
    { path: 'user/register-v3', component: register_v3_1.RegisterV3Page, data: { title: 'Register V3 Page' } },
    { path: 'helper/css', component: helper_css_1.HelperCssPage, data: { title: 'Helper CSS' } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map