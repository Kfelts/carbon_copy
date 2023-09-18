/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'ngFileUpload',                 // File Upload
        'ngIdle',                       // Idle Timer
        'ngSanitize',                   // ngSanitize
        'ngImgCrop',                    //Image Cripping
        'ngAnimate',                    // Angular Animation
        'ngStorage',                    // Editor
        'ngFileSaver',                  // File Save
        'ngDraggable',                  // Drag and Drop
        'cgNotify',                     // Notify
        'timer',                        // Time Keeping
        'mentio',                       // Mentions
        'angucomplete-alt',
        'infinite-scroll',
        'dbaq.emoji'

    ])


})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad

