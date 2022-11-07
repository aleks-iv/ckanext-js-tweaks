ckan.module("tweaks-select", function ($, _) {
    return {
        options: {
            selectId: null,
            selectOptions: null
        },
        initialize: function () {
            var select = this.$("#" + this.options.selectId);
            if (!select.length) {
                log.debug("Element with id #%s does not exist", this.options.selectId);
                return
            }

            var options = this.$("." + this.options.selectOptions);

            this.$(".pseudo-select-selected").text(
                select.find("option").eq(select[0].selectedIndex).text()
            );

            select.find("option").each(function (idx, el) {
                options.append(
                    $("<div>", {
                        text: el.textContent,
                        "data-index": idx,
                        "data-value": el.value,
                        "tabindex": '-1',
                        "role": "button",
                        "class": select[0].selectedIndex === idx ? "active" : "",
                        on: {
                            click: function () {
                                select[0].selectedIndex = idx;

                                if (select[0].form) {
                                    select[0].form.submit();
                                }
                            },
                            keypress: function(e) {
                                var key = e.which;
                                if(key == 13) {
                                    $(this).click();
                                }
                            }
                        },
                    })
                );
            });
        },
    };
});
