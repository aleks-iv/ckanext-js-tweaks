ckan.module("tweaks-toggle-class", function ($, _) {
    return {
        options: {
            target: null,
            className: "active",
            event: "click",
            distinct: false,
        },
        initialize: function () {
            this._target = this.options.target ? $(this.options.target) : this.el;
            $.proxyAll(this, /_on/);

            if (this.options.distinct) {
                var events = this.options.event.split(" ");
                if (events.length !== 2) {
                    console.error(
                        "[tweaks-toggle-class] distinct option requires exactly two events"
                    );
                    return;
                }
                this.el.on(events[0], this._onAdd);
                this.el.on(events[1], this._onRemove);
            } else {
                this.el.on(this.options.event, this._onToggle);
            }
        },
        _onToggle: function (e) {
            this._target.toggleClass(this.options.className);
        },
        _onAdd: function (e) {
            this._target.addClass(this.options.className);
        },
        _onRemove: function (e) {
            this._target.removeClass(this.options.className);
        },
    };
});
