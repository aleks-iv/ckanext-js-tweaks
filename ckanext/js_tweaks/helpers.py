from typing import List
import ckan.plugins.toolkit as tk


_helpers = {}


def helper(fn):
    _helpers[f"tweaks_{fn.__name__}"] = fn
    return fn


def get_helpers():
    return _helpers.copy()


@helper
def is_searchable_facet(name: str) -> bool:
    fields: str = tk.config.get("tweaks.searchable_facets", "")
    return name in {
        field.strip() for field in fields.split(",")
    }
