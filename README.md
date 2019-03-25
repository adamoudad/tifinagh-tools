# Tifinagh to latin transliteration #

Transliterator for ⵜⵉⴼⵉⵏⴰⵖ ([tifinagh](https://en.wikipedia.org/wiki/Tifinagh)) to latin alphabet.

Note that it transliterates for ⵄ (corresponding in arab to ع) to "3" (character for number three).

This tool is developped for the purpose of the website <http://imiksimik.toile-libre.org/>.

## Javascript script ##
The `.js` file is a javascript code for parsing the whole file searching for text written in tifinagh, and transliterate it to latin alphabet
.
It provides functions to add a tooltip for [Bootstrap v4.1](https://getbootstrap.com/docs/4.1/components/tooltips/) with the generated transliteration.

## Jekyll plugin ##
The `.rb` file is a plugin for Jekyll.

To use it, just place the `.rb` file inside your `_plugins/` directory, then use it inside your markdown files with
```
{% tifinagh ⴰⵡⴰⵍ %}
```
Which will produce
```html
<span data-toggle="tooltip" title="awal">ⴰⵡⴰⵍ</span>
```

"ⴰⵡⴰⵍ" will therefore be converted to "awal" and placed inside a tooltip.

## TODO ##
- Split jekyll plugin into a transliterator and formatters
- Add other output formats, in addition to the tooltip
- Use an external json data file (for example https://github.com/parlr/tifinagh-data/blob/master/src/data-latin.json)
