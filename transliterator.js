/*!
 * Transliterator for tifinagh
 * Copyright(c) 2017 Adam Oudad <adam.oudad@gmail.com>
 * MIT Licensed
 */
function transliterateWord(word){
    // Replace each char by its corresponding transliteration
    var transliteration = "";
    for(c of word){
	switch(c){
	case 'ⵜ' :
	    transliteration = transliteration + "t";
	    break;
	case 'ⵉ':
	    transliteration = transliteration + "i";
	    break;
	case 'ⴼ':
	    transliteration = transliteration + "f";
	    break;
	case 'ⵏ':
	    transliteration = transliteration + "n";
	    break;
	case 'ⴰ':
	    transliteration = transliteration + "a";
	    break;
	case 'ⵖ':
	    transliteration = transliteration + "gh";
	    break;
	default :
	    transliteration = transliteration + "?";
	}
    }
    transliteration = "";
    // Dictionary is following the transliteration rules from IRCAM
    var dictionary = {
	'ⴱ': 'b',
	'ⵎ': 'm',
	'ⴼ': 'f',
	'ⵜ': 't',
	'ⴷ': 'd',
	'ⵟ': 'ṭ',
	'ⵙ': 's',
	'ⵣ': 'z',
	'ⵕ': 'ṛ',
	'ⴹ': 'ḍ',
	'ⵏ': 'n',
	'ⵍ': 'l',
	'ⵔ': 'r',
	'ⴳ': 'ɡ',
	'ⵚ': 'ṣ',
	'ⵛ': 'ch',
	'ⵊ': 'j',
	'ⵅ': 'kh',
	'ⵃ': 'ḥ',
	'ⵄ': '3',
	'ⵡ': 'w',
	'ⵖ': 'gh',
	'ⵀ': 'h',
	'ⵯ': 'w',
	'ⴽ': 'k',
	'ⵥ': 'ẓ',
	'ⵇ': 'q',
	'ⵢ': 'y',
	'ⴰ': 'a',
	'ⵉ': 'i',
	'ⵓ': 'u',
	'ⴻ': 'e',
	' ': ' ',
	',': ',',
	'.': '.',
	':': ':'		// etc. pour ( [ /, ..
    };
    for(c of word){
	transliteration += (c in dictionary ? dictionary[c] : '?');
    }
    return transliteration;
}

function makeTooltip(string, transliteration){
    return '<span data-toggle="tooltip" style="text-decoration: dotted underline;" data-placement="top" title="' + transliteration + '">' + string + "</span>";
}

function capitalizeFirstLetter(string) {
    // Not needed though...
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript?page=1&tab=votes#tab-top
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function transliterateString(string){
    // Find all tifinagh and replace it by with a tooltip span element containing word and its transliteration
    // the processMatch function is needed to interpret the matched '$&' literal as the matched string instead of literally '$&'
    // 'Using an inline function that modifies the matched characters' from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    function processMatch(match, offset, string){
	// match: the matched string
	// offset: character index in the original string
	// string: the original string
	return makeTooltip(match, transliterateWord(match));
    }
    var pattern = /[ⴱⵎⴼⵜⴷⵟⵙⵣⵕⴹⵏⵍⵔⴳⵚⵛⵊⵅⵃⵄⵡⵖⵀⵯⴽⵥⵇⵢⴰⵉⵓⴻ]+/g;
    return string.replace(pattern, processMatch);
}

function transliterateBody(){
    document.body.innerHTML = transliterateString(document.body.innerHTML);
}
// Next is to select element by ID or class and transliterate it. https://stackoverflow.com/questions/11489716/how-to-use-innerhtml-with-class



function testChars(){
    
}
