/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","cad219f84e0e98b227e2daf1a8815c13"],["bower_components/app-layout/app-drawer/app-drawer.html","9347e6a5178b672c040b54df2806befa"],["bower_components/app-layout/app-header-layout/app-header-layout.html","6901fbc31ce398b1eb08b0465b505431"],["bower_components/app-layout/app-header/app-header.html","2cd5d5d7c9bdabc63ac870d0b1ae8610"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","68c44a7d0ce56eec5179385ddd1fcad5"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","b50a6011f9cb492c9e2a83d2f8955399"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","cb65065f730d76538be3d15794650adf"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","d7fe94ca7c381f0d814ae8f03e7a1707"],["bower_components/app-layout/app-scroll-effects/effects/material.html","93d85d4f6d42fd57d73fda270f8b8b5d"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","cb919252b3b9eb1c7d57fc7022353c9a"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","e1917db70703c8af036b1a29fd7d6237"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","91cbbf08e10ad1d60804d5403f10b679"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","af6cf17fbb4f94216eea9d2e6c26a775"],["bower_components/app-layout/app-toolbar/app-toolbar.html","1969068eeac3ed606025f04bf7871282"],["bower_components/app-layout/helpers/helpers.html","1da38888481edb36a5d7f15a8633dd9f"],["bower_components/app-route/app-location.html","77bdb903ec70eece5e41c911c355d0cf"],["bower_components/app-route/app-route-converter-behavior.html","67ec6daf2bbe9f59beecbdd5b863af14"],["bower_components/app-route/app-route.html","bee92f77d4503b43a33d1761a33936d7"],["bower_components/app-storage/app-network-status-behavior.html","974bc78cfcc967de98b5d7b54826d079"],["bower_components/app-storage/app-storage-behavior.html","50424b44ed5f5b55a9de73a4ac768970"],["bower_components/file-fire/file-fire-behavior.html","7251a0015d1ba6719b9952c6834b45cc"],["bower_components/file-fire/file-fire.html","66a24c2d5c963438cbe1bf353ac8649f"],["bower_components/firebase/firebase-storage.js","900ddb425d4459d3863e0ca2d628669d"],["bower_components/font-roboto/roboto.html","22fe760d42278ca3b2b3718390fbb1bd"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","1844b46b152179da8a8d2b8a8093f06c"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","a24bf8c46c679f2e930cf169497b7c73"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","f226902b75093c63a564b691039ee77b"],["bower_components/iron-behaviors/iron-button-state.html","7f7f96935de5deaf9a51264225eb1a5a"],["bower_components/iron-behaviors/iron-control-state.html","f1329af310a186a0c3ce264937c34c5e"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","9ce917fa978d3e488b33ef5183bc6631"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","3d9322684cb93917f911c343e30160de"],["bower_components/iron-dropdown/iron-dropdown.html","e9d6b888ba82fa42b45c28f3cad57785"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","dfdc7f12b3a37df3b4157f90e90d1218"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","7fdc2ab3c7921949621e8374a86e2af4"],["bower_components/iron-flex-layout/iron-flex-layout.html","3e285c2698feec264710fffd609630ad"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","2f0a609a52c3b90dc78d529858f04445"],["bower_components/iron-icon/iron-icon.html","0d81dc84af38dfdaa7eca375ab7a9b9e"],["bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","856c951561d9f77e9f307080f926b2ad"],["bower_components/iron-input/iron-input.html","43ca22a55b95d37f6025a31835fd5137"],["bower_components/iron-location/iron-location.html","253d51cc4db35f8179fc351936db8e90"],["bower_components/iron-location/iron-query-params.html","41964ce091583f5f99f9e257dbb86fb2"],["bower_components/iron-media-query/iron-media-query.html","0082aca119880bf33ce3ffd1fa0e9011"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","61c40d8afd7005551b12d8dacef77f8b"],["bower_components/iron-meta/iron-meta.html","8b63ecf8a80ec25f3890f7377f9b263c"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","a55e602c014791189a4dfa7bca7672e6"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","b48170aa9276dbdc4a0bc76c3bb65cfe"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","576daf19e2a688c069fc0816c2c7bd9b"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","0fea9b9f299c61c4597fb5cb9e3540c7"],["bower_components/iron-pages/iron-pages.html","aeb0aff1b1109fc353d8b7af89792220"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","376560355a693e2b10cbe51d0f52c1f6"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","9971205eaf94e97c3a987be2d4e50e52"],["bower_components/iron-selector/iron-multi-selectable.html","196a7c658213a28e6924e9152628b50c"],["bower_components/iron-selector/iron-selectable.html","b0803b285eb65f6a9689918d8df735fe"],["bower_components/iron-selector/iron-selection.html","19a051eb5d88baed09f6439512841bda"],["bower_components/iron-selector/iron-selector.html","76e80b0f3e145257b34de6fde1addd1a"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","15574530462b9f0c2ae512b078c596a2"],["bower_components/neon-animation/animations/fade-in-animation.html","036c85fbf438281e2bc9efca073fdf48"],["bower_components/neon-animation/animations/fade-out-animation.html","834a2368655face5daff331858b56d46"],["bower_components/neon-animation/animations/scale-up-animation.html","4547496c1da1bfb8f805638a65252024"],["bower_components/neon-animation/neon-animatable-behavior.html","ca326c00077a9ef323071b2fdab2abd9"],["bower_components/neon-animation/neon-animation-behavior.html","d9bf2a660049a7db3f3f0187ee1e29d7"],["bower_components/neon-animation/neon-animation-runner-behavior.html","7a5255aa592101dfb7866c144e01deab"],["bower_components/neon-animation/web-animations.html","aa5266664b17a9a7d7ebf0c4e6fcf8c9"],["bower_components/paper-behaviors/paper-button-behavior.html","d3c9b2685f6e6585da6cf1e632c50574"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","6bacfe845e0be777b4ae80f02ff85115"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","52c2ca1ef155e8bca281d806fc9a8673"],["bower_components/paper-behaviors/paper-ripple-behavior.html","360acdba9e68fb7bf5c2be15f3fc5845"],["bower_components/paper-button/paper-button.html","e56a59ed88bb90e19df8338c53e984a5"],["bower_components/paper-chip/paper-chip-input-autocomplete.html","afc30dce294f002f27fbbd822769874f"],["bower_components/paper-chip/paper-chip-input.html","63b769d3c3d3abbebc1fd154cb1f7462"],["bower_components/paper-chip/paper-chip.html","4ab1cdf336e06c594de1bf806e988fec"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","12a9c2cbcaa2ab006b982eb68ffcf1ae"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","583a2b1fd983174e12159eec8a1e5c46"],["bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","6dbdf7b633a98273c971d15bda39bf11"],["bower_components/paper-dialog/paper-dialog.html","ac695cffca742abf9322a326c4a763b6"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","bd8d99e625c1baab3431ae830d788c72"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","62226dde51d0f26f0ccab279cfb89b58"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","7f0211e5e0a93682e83188c89d0591a8"],["bower_components/paper-fab/paper-fab.html","d2179fce15722c8defad314178fb03d7"],["bower_components/paper-icon-button/paper-icon-button.html","419e5af09e5a1ecfe47a7f1e431c3842"],["bower_components/paper-input/paper-input-addon-behavior.html","db9171b2bf4fdb8327dd4f311ccc0296"],["bower_components/paper-input/paper-input-behavior.html","67889a88ef1e8a20fb80c9dc3a880232"],["bower_components/paper-input/paper-input-char-counter.html","3cd45d4dbda33d1d0fc8252be47fc1ed"],["bower_components/paper-input/paper-input-container.html","70762e4c7a010b67eb2d87d4fb6cd838"],["bower_components/paper-input/paper-input-error.html","19103517e283f3c553437b1b82a5bcd2"],["bower_components/paper-input/paper-input.html","3d1cf6f58cb45937aed21fdc70f8374f"],["bower_components/paper-input/paper-textarea.html","c594834b8ca9f60fe130ed798eec0fa2"],["bower_components/paper-item/paper-item-behavior.html","ccdc3fce427156a1795b26da08a50d06"],["bower_components/paper-item/paper-item-shared-styles.html","b5104778f1e5f558777d7558623493db"],["bower_components/paper-item/paper-item.html","b81e400f53e1f76d7e2629781773abb3"],["bower_components/paper-listbox/paper-listbox.html","93927bd9e8bbfa08b9d8b8e9d9b66ab8"],["bower_components/paper-material/paper-material-shared-styles.html","0880145bd868df7784d5cd49963468f6"],["bower_components/paper-material/paper-material.html","93846e9b646f5acc9e8e8c45eebb9031"],["bower_components/paper-menu-button/paper-menu-button-animations.html","14091ce3c8f8008b87e0684ff082d514"],["bower_components/paper-menu-button/paper-menu-button.html","bd51ab08de56b4de9abf2fb491beb296"],["bower_components/paper-ripple/paper-ripple.html","4101ea573f9fe2526b3938aad9c804c0"],["bower_components/paper-styles/color.html","549925227bc04f9c17b52e2e35cd2e26"],["bower_components/paper-styles/default-theme.html","5357609d26772a270098c0e3ebb1bb98"],["bower_components/paper-styles/element-styles/paper-material-styles.html","8d8d619e6f98be2c5d7e49ca022e423c"],["bower_components/paper-styles/paper-styles.html","3a86674df8b40032fc42fe95649bbec6"],["bower_components/paper-styles/shadow.html","1f23a65a20ed44812df26a9c16468e3f"],["bower_components/paper-styles/typography.html","195497070df39ff889ce243627cf6589"],["bower_components/paper-toggle-button/paper-toggle-button.html","50aa3711cb29dc7cab1a0b74600bbaa4"],["bower_components/polymer/lib/elements/array-selector.html","7618aaa704e73edac157cee421c17a0a"],["bower_components/polymer/lib/elements/custom-style.html","1fe93e63fc91760b8df9362e7812317c"],["bower_components/polymer/lib/elements/dom-bind.html","39cab02466b779bb63f50ea61300804b"],["bower_components/polymer/lib/elements/dom-if.html","30db79f1a42aaa74306798d117f70db6"],["bower_components/polymer/lib/elements/dom-module.html","03d709239d9f30b27a38f6ad51eb3cf0"],["bower_components/polymer/lib/elements/dom-repeat.html","78f72276051d00d6d246e8811d480c3e"],["bower_components/polymer/lib/legacy/class.html","305714b06cee743c0ab3b9ef790f573d"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","13074f3bfaa45b78e282bc4495651b44"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","187499217d653ed9aff4c0da51d4e969"],["bower_components/polymer/lib/legacy/polymer-fn.html","4ecb6f82dd2003974ec5004dcb5644f0"],["bower_components/polymer/lib/legacy/polymer.dom.html","0005f6a862578cf790a9056dccd4b571"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","e0c287b296192f5a97986da66a967806"],["bower_components/polymer/lib/mixins/element-mixin.html","b745427717600bf208b14c66d69238e1"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","8f7381b32a0c6f5aab3d89eb5044c0a8"],["bower_components/polymer/lib/mixins/mutable-data.html","2ca671488013c7b8b1b5d9f30bf3429c"],["bower_components/polymer/lib/mixins/property-accessors.html","d47d88376e32c461ed97fb9a5d304c18"],["bower_components/polymer/lib/mixins/property-effects.html","c8cafd666f7190c0fd65249351f235d4"],["bower_components/polymer/lib/mixins/template-stamp.html","a6a8e6c37a9d5c42b698c5b66c467dd8"],["bower_components/polymer/lib/utils/array-splice.html","39cacec8c29827b7238d2926ccf35eeb"],["bower_components/polymer/lib/utils/async.html","964f41ccd907d5d57106685d618f8262"],["bower_components/polymer/lib/utils/boot.html","b3fede816782ec1791b4930fbccdec92"],["bower_components/polymer/lib/utils/case-map.html","fbcc9191460c40f56274059303f240f5"],["bower_components/polymer/lib/utils/debounce.html","b82b45dd67d803863875428273dbd278"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","e10bc8cb0d1a12559be3202329f96383"],["bower_components/polymer/lib/utils/flush.html","3f1ae81bfde1d720931126833dcb6c12"],["bower_components/polymer/lib/utils/gestures.html","16e91b5fe996ac31c34f888025afb705"],["bower_components/polymer/lib/utils/import-href.html","ab67a53713c709ca6422271643e5c6ef"],["bower_components/polymer/lib/utils/mixin.html","9f59315d38d7dec796445d0c68ab3bae"],["bower_components/polymer/lib/utils/path.html","c6c703f031a793a1d013efb629f13f7f"],["bower_components/polymer/lib/utils/render-status.html","f1d2f69c7dc8114d8daa841c9a85bf70"],["bower_components/polymer/lib/utils/resolve-url.html","9655e21ed83a0b9c7daab6e150001dda"],["bower_components/polymer/lib/utils/style-gather.html","9f4cd12fe5270dc69517f18028194cd4"],["bower_components/polymer/lib/utils/templatize.html","ded99a88d03eb05c9d7ff2d36811722b"],["bower_components/polymer/lib/utils/unresolved.html","2ed3277470301933b1af10d413d8c614"],["bower_components/polymer/polymer-element.html","7e714c300932fa5c6d7bee1c8da03721"],["bower_components/polymer/polymer.html","041f02f3388a7a3c087298fde431df80"],["bower_components/polymerfire/firebase-app-script.html","5536d8eedb936d30ad2a020fb2273b13"],["bower_components/polymerfire/firebase-app.html","251301a34120bf378941824c3e3bf579"],["bower_components/polymerfire/firebase-auth-script.html","9924449b330db4df58818df442e5443f"],["bower_components/polymerfire/firebase-auth.html","c64ec9b44032c3e65c2861764cd8952d"],["bower_components/polymerfire/firebase-common-behavior.html","3a2eb38c75233229a8e9632307346e27"],["bower_components/polymerfire/firebase-database-behavior.html","a0f518c13c6d0e855c3b7d17caa62d0f"],["bower_components/polymerfire/firebase-database-script.html","6d6c43e4fc201c5c83b978e7156449ec"],["bower_components/polymerfire/firebase-document.html","694a5d5464bc149b0d2e7942d9758677"],["bower_components/polymerfire/firebase-messaging-script.html","b5e252590b702b6fd0fb92f87cf55b21"],["bower_components/polymerfire/firebase-query.html","5ebf8ffef74766f64b871e4046cfa893"],["bower_components/polymerfire/firebase-storage-script.html","73903c0e578289a5910eaad341a730ca"],["bower_components/polymerfire/firebase.html","623d97c5658242cfe0074fa062797e8e"],["bower_components/shadycss/apply-shim.html","5b73ef5bfcac4955f6c24f55ea322eb1"],["bower_components/shadycss/apply-shim.min.js","8bb5a28c885996aabb743614a8f8d64b"],["bower_components/shadycss/custom-style-interface.html","7e28230b85cdcc2488e87172c3395d52"],["bower_components/shadycss/custom-style-interface.min.js","37ba0713aea23ba692812056e862ba41"],["bower_components/social-media-icons/social-media-icons.html","99d286c9a00666aea49a9606ceeaa644"],["bower_components/vaadin-button/vaadin-button.html","1f146fa465d7bcbe0c4a359942ae8d78"],["bower_components/vaadin-control-state-mixin/vaadin-control-state-mixin.html","aec260f82f66a8e8cc764fbbe6c7d9b6"],["bower_components/vaadin-date-picker/vaadin-date-picker-helper.html","c673b9035c2f68656e0502d2f82051b7"],["bower_components/vaadin-date-picker/vaadin-date-picker-mixin.html","b1a62ec8e3a6a2b6b819d44433c8a435"],["bower_components/vaadin-date-picker/vaadin-date-picker-overlay.html","acf7da78f01801cc27836de9aed8df51"],["bower_components/vaadin-date-picker/vaadin-date-picker-styles.html","137a2b3ce5a0fba1b2d20b693cda2f73"],["bower_components/vaadin-date-picker/vaadin-date-picker.html","6122cf59b3bab07630ffc6cc83fcf454"],["bower_components/vaadin-date-picker/vaadin-infinite-scroller.html","77ad5235d01de5277de295c754f71e41"],["bower_components/vaadin-date-picker/vaadin-month-calendar.html","78bdea31d0e5bd212d1b26db60d6c5d4"],["bower_components/vaadin-grid/iron-list-behavior.html","1c100b92b56f2472e6d2d6cfa15cef1a"],["bower_components/vaadin-grid/vaadin-grid-active-item-behavior.html","2e2f9491710d2a716f0fea8cfc6f2550"],["bower_components/vaadin-grid/vaadin-grid-array-data-provider-behavior.html","59fe05b679af8ad0f3ba62a8206b0efc"],["bower_components/vaadin-grid/vaadin-grid-cell-click-behavior.html","68d71fce872432d6cd3de4fbc4f4d26d"],["bower_components/vaadin-grid/vaadin-grid-column-reordering-behavior.html","a41d232aeb245b95382de4626e338823"],["bower_components/vaadin-grid/vaadin-grid-column.html","afe24f1fcf7c93a0aeb35fd3adc531f1"],["bower_components/vaadin-grid/vaadin-grid-data-provider-behavior.html","6f44f65eb09984cb7350786eab55927f"],["bower_components/vaadin-grid/vaadin-grid-dynamic-columns-behavior.html","ec739f6bdfd7babad315de0b43ff6782"],["bower_components/vaadin-grid/vaadin-grid-filter-behavior.html","744009d69632df43e8a56d310747c30b"],["bower_components/vaadin-grid/vaadin-grid-focusable-cell-container-behavior.html","12e19dd887e61bc2154213d0adde7727"],["bower_components/vaadin-grid/vaadin-grid-keyboard-navigation-behavior.html","e17c9e7392824aa5fa8d418213e7cc23"],["bower_components/vaadin-grid/vaadin-grid-row-details-behavior.html","12e628ffd6950639110efabcf29ef2b8"],["bower_components/vaadin-grid/vaadin-grid-selection-behavior.html","7e56df0d84ea9e5003daf1b677f16a87"],["bower_components/vaadin-grid/vaadin-grid-sizer.html","1a378aea2e4c264a1f93448cf80e76b2"],["bower_components/vaadin-grid/vaadin-grid-sort-behavior.html","4c8f49c3ca77ea601d1be45df308f0af"],["bower_components/vaadin-grid/vaadin-grid-table-cell.html","e9f39f206818c72c47498fa888d1dc3c"],["bower_components/vaadin-grid/vaadin-grid-table-focus-trap.html","728047dab2160ab0e5325dc3360f0b24"],["bower_components/vaadin-grid/vaadin-grid-table-header-footer.html","09b0b5de5328318a79544a262139bd22"],["bower_components/vaadin-grid/vaadin-grid-table-outer-scroller.html","c01390a0671dfd4d4529cffe5db66436"],["bower_components/vaadin-grid/vaadin-grid-table-row.html","3c3369d18ba32fc0e330b26c40c74346"],["bower_components/vaadin-grid/vaadin-grid-table-scroll-behavior.html","db04228921778bb9b9dc4d92c1e26f93"],["bower_components/vaadin-grid/vaadin-grid-table.html","c0cbd608bca092e8f6190be6e848e506"],["bower_components/vaadin-grid/vaadin-grid-templatizer.html","843ce89aa1dc6f28c35ccf8caef42593"],["bower_components/vaadin-grid/vaadin-grid.html","d2a1874ba6f532466723f3a341dfa4c7"],["bower_components/vaadin-text-field/vaadin-form-element-mixin.html","4f6e56e651530d1a3df714e9ec2583c9"],["bower_components/vaadin-text-field/vaadin-text-field.html","ade85dab25ec55feab376fb84492d00b"],["bower_components/vaadin-themable-mixin/vaadin-themable-mixin.html","3f7f5e0edf0a05806c03873126a35bb5"],["bower_components/web-animations-js/web-animations-next-lite.min.js","af49292cf4e004b70ec80330912f8154"],["bower_components/webcomponentsjs/custom-elements-es5-adapter.js","e6324a1b9a6f7dbac892a472464088db"],["bower_components/webcomponentsjs/gulpfile.js","5b9593e6c3a2a87a866c1169114c745e"],["bower_components/webcomponentsjs/webcomponents-hi-ce.js","495de81020abfefd4f0e3dcff6b7fd3e"],["bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js","68bc22bcb5543e6caabd1d66dc9e1ca9"],["bower_components/webcomponentsjs/webcomponents-hi.js","0ac538bae69f6beb629d2357350041e7"],["bower_components/webcomponentsjs/webcomponents-lite.js","c89f66cb63a098895f4b1b42eb371673"],["bower_components/webcomponentsjs/webcomponents-loader.js","f13bbbbf647b7922575a7894367ddaaf"],["bower_components/webcomponentsjs/webcomponents-sd-ce.js","c5f6fe397db634cde89f66c2f1bc2f62"],["index.html","4b264bceb2040eb417d58f83be39830e"],["manifest.json","65c6ed44d22ef2be477029f833b1b1b9"],["src/components/socmov-admin-login.html","b20f8ddf33cbda5a50485e840039a4c8"],["src/shared-styles.html","bf8d22c7102f6709a411b2d353523d99"],["src/socmov-admin-agenda-sessions.html","47e8b8bd58640d98f86a07b7908fd6ae"],["src/socmov-admin-agendas.html","1cd0d4e442e8e0a3ce6b2d98ca8f804d"],["src/socmov-admin-app.html","028610a2c05bd5d8f340df032aafedea"],["src/socmov-admin-details.html","5a67f30386e4db3f6bcb43ffc6f72a93"],["src/socmov-admin-icons.html","6d1153bf065fd00dbe8aba0bb0dab40c"],["src/socmov-admin-sessions.html","0fdef5c8d6b90430233a63a291dde124"],["src/socmov-admin-speakers.html","b9fb55ccb67b5cadefdb163285fa919a"],["src/socmov-admin-sponsors.html","c4eae6886ffcc0f650aab1e5d357da28"],["src/socmov-admin-view404.html","1a7a4fc7f845b11119d0210d1399f28e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







