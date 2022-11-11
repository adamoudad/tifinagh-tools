Set of tools for input of ⵜⵉⴼⵉⵏⴰⵖ ([tifinagh](https://en.wikipedia.org/wiki/Tifinagh)), and transliteration into latin alphabet.

## Javascript script ##
The `transliterator.js` file is a javascript code for parsing the whole file searching for text written in tifinagh, and transliterate it to latin alphabet
.
It provides functions to add a tooltip for [Bootstrap v4.1](https://getbootstrap.com/docs/4.1/components/tooltips/) with the generated transliteration.

## Jekyll plugin ##
The `tifinagh_tag.rb` file is a plugin for Jekyll.

To use it, just place the `.rb` file inside your `_plugins/` directory, then use it inside your markdown files with
```
{% tifinagh ⴰⵡⴰⵍ %}
```
Which will produce
```html
<span data-toggle="tooltip" title="awal">ⴰⵡⴰⵍ</span>
```

"ⴰⵡⴰⵍ" will therefore be converted to "awal" and placed inside a tooltip. The markup integrates in a Bootstrapv4 theme.

## Input method for Emacs ##
The file `tifinagh.el` provides an input method for the Emacs editor. To use it, load it inside Emacs.
```elisp
(load-file "tifinagh.el")
```
Then type `M-x set-input-method` and select `tifinagh`.

## Notes ##
The letter ⵄ (corresponding in arab to ع) in tifinagh is transliterated into "3" (character for number three).

## TODO ##
- Split jekyll plugin into a transliterator and formatters
- Add other output formats, in addition to the tooltip
- Use an external json data file (for example https://github.com/parlr/tifinagh-data/blob/master/src/data-latin.json)
