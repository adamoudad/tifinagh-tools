# coding: utf-8

# Transliterator for tifinagh
# Copyright(c) 2019 Adam Oudad <adam.oudad@gmail.com>
# MIT Licensed

require "jekyll"

$tifinagh_latin = {
  'ⴱ' => 'b',
  'ⵎ' => 'm',
  'ⴼ' => 'f',
  'ⵜ' => 't',
  'ⴷ' => 'd',
  'ⵟ' => 'ṭ',
  'ⵙ' => 's',
  'ⵣ' => 'z',
  'ⵕ' => 'ṛ',
  'ⴹ' => 'ḍ',
  'ⵏ' => 'n',
  'ⵍ' => 'l',
  'ⵔ' => 'r',
  'ⴳ' => 'ɡ',
  'ⵚ' => 'ṣ',
  'ⵛ' => 'ch',
  'ⵊ' => 'j',
  'ⵅ' => 'kh',
  'ⵃ' => 'ḥ',
  'ⵄ' => '3',
  'ⵡ' => 'w',
  'ⵖ' => 'gh',
  'ⵀ' => 'h',
  'ⵯ' => 'w',
  'ⴽ' => 'k',
  'ⵥ' => 'ẓ',
  'ⵇ' => 'q',
  'ⵢ' => 'y',
  'ⴰ' => 'a',
  'ⵉ' => 'i',
  'ⵓ' => 'u',
  'ⴻ' => 'e'
}

class TifinaghTag < Liquid::Tag
  def initialize(tagName, content, tokens)
    super
    @content = content.strip
    @transliteration = ""
  end

  def render(context)
    @content.split('').each do |c|
      @transliteration += if $tifinagh_latin.key?(c) then $tifinagh_latin[c] else c end
    end
    %Q{<span data-toggle="tooltip" title="#{@transliteration}">#{@content}</span>}
  end

  Liquid::Template.register_tag "tifinagh", self
end
