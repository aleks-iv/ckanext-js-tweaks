ckan.module("tweaks-select", function ($, _) {
    return {
        options: {
            selectId: null,
            selectOptions: null
        },
        initialize: function () {
            var select = this.$("#" + this.options.selectId);
            var options = this.$("." + this.options.selectOptions);

            this.$(".pseudo-select-selected").text(
                select.find("option").eq(select[0].selectedIndex).text()
            );

            select.find("option").each(function (idx, el) {
                options.append(
                    $("<li>", {
                        text: el.textContent,
                        "data-index": idx,
                        "data-value": el.value,
                        "class": select[0].selectedIndex === idx ? "active" : "",
                        on: {
                            click: function () {
                                select[0].selectedIndex = idx;

                                if (select[0].form) {
                                    select[0].form.submit();
                                }
                            },
                        },
                    })
                );
            });
        },
    };
});
