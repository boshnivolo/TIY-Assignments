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

The head contains things like the title and information the programmer needs to see, ie. notes. The body contains things like the text that will be viewable on the actual website, images, links, and buttons. getElementByID pulls items by their ID which can be helpful for changing one particular item in the file rather than every single one of that tag. getElementsByClassName pulls multiple items by their class name at the same time. querySelector returns the first element node based on the set search. querySelectorAll pulls all element nodes that match up.

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
