ckan.module("tweaks-scrollbar", function ($, _) {
    "use strict";
    return {
        options: {
            className: "os-theme-dark",
            normalizeRTL: true,
            autoHide: "never",
            autoHideDelay: 800
        },
        initialize: function () {
            OverlayScrollbars($(this.el), {
                className: this.options.className,
                normalizeRTL: this.options.normalizeRTL,
                scrollbars: {
                    autoHide: this.options.autoHide,
                    autoHideDelay: this.options.autoHideDelay
                }
            })
        },
    };
});
