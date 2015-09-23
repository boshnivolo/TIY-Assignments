## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* `class` -- a space-separated list of category names
* `id` -- an identifier offered to only one element
* `title` -- a short textual description of purpose

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`, `inline`, `none`
* _float_: `left`, `right`, `none`
* _position~: `relative`, `absolute`, `fixed`, `static`

. . .

### `<!DOCTYPE>` 

Tells the file what form of code it will contain.

. . .

#### `<...>`  

These arrows surround a word representing a tag in HTML. As a general rule, tags need an opening tag and a closing tag (</>). 
 
 * Some other rules are that things like links need a reference. 
 * Tags can have attributes that affect style
 * Must be a registered HTML5 code. Can't be made up by you.

#### `<head>`  

Contains the title of the webpage.

#### `<title>` 

Text written within this tag becomes the title of the webpage often seen in the tab.

#### `<body>` 

Contains the content found within the viewport. Can have text, pictures, links, etc in it. 

#### `<p>` 

Creates a block of text that can be formatted into a paragraph. Found in the body.

#### `<ul>` 

Creates an unordered list. Found in the body. 

#### `<ol>` 

Creates an ordered list. Found in the body. 
 
#### `<a>` 

Followed by an href, or reference, to the a document elsewhere. Found in the body.

#### `<li>` 

Moves on to a new line. Found in the body. 

#### `<em>` 

Emphasizes. Makes eclipsing text italizes. Found in body. 

#### `<strong>` 

Bolds. Helps make text stand out. 

#### `<h1>`

Changes stylistic format of text meant to be a header. From 1 to 6 it decreases in size. 

#### `attributes` 

Allows formatting changes to tags. Found within the < > of a tag directly after it. Use colons after attribute to signify the value of the change. 

* `color` - controls the color of text
*

#### `<dl>` 

Sets up a description list. Contains items with descriptions associated with them. Works in corelation with `<dt>` and `<dd>`.

#### `<dt>`

Sets up a term in the description list. 

#### `<dd>` 

Sets up the description of the a term that had been set up in a description list. 


###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
