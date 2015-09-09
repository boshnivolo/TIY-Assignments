## `Window` - object

#### `location`

Stores urls to alert someone of where their document has gone. Can confirm the location of the document. Can reload pages if the location listed is not being loaded properly due to miscommunication with the server. Can also help you locate where other parts of the document will go. 

    location.assign("https://www.youtube.com")

#### `window.document`

References back to a document. Stores text from preceding code. 

    var doc = window.document

#### `history`

References back into the page history of the given tab. 

    history.back(3) // goes back 3 times

#### `document` 



properties like head and body
methods like
getElementById and getElementsByClassName
querySelector and querySelectorAll
appendChild and the create* family
write and writeln

the HTMLElement type
properties like
id and className
innerHTML and outerHTML
children, parent, nextSibling, and firstChild
methods like
addEventListener and dispatchEvent
the *Attribute family
the HTMLCollection and NodeList types
how they differ from Array
how they can be used like an Array
the item method
