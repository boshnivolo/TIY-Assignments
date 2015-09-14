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

### `Event` -- A show of what transpired through a function implemented within a webpage

An event bubbles from the deepest element through the nesting order of parental elements. This can be thought of as triggering dominoes. An event bubble can be stopped by using `event.stopPropagation`.

        document.getElementsByClass("cedar").addEventListener("click", function(){
        
        }

#### `target` - indicant of what launched the event.

`Event.target` can delegate actions to a specific course rather than executing all events at once.

#### `drop` - allows for an item on a webpage to be dragged to a specified area and dropped

By creating a pre-determined dropzone, the drop event can make certain targets moveable to those locations. 

#### `scroll` - moves screen 

This allows the movement of a document in order to allow the audience to see the viewable content that is not initially shown in the window

#### `click` - reacts to specified area being hard-clicked

Waits on an Event Listener to react and change based on an item being clicked on a webpage. 

#### `change` - manipulates an element based on trigger

Upon activation through either a click or through a keyboard command, an element reacts and has its value manipulated.

#### `load` - occurs upon the completion of a resource loading

Can indicate improper execution of code if it fails to load. 

#### `unload` - the removal of items or elements upon specified event

Does not permanently delete objects upon unloading, but does remove them from the visable window. 

### `form` -- fillable options on screen

#### `reset` - clears existing data from inside forms

Can be used to erase all information sitting in a form box. 

#### `submit` - sends inputted data inside forms

Can be used to send all the added information placed into a form box. 




