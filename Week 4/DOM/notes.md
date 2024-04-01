**Key Concepts:**

**Document Object Model (DOM)** - A programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document.
**Node:** A basic unit of the DOM tree. Elements, attributes, and text are all types of nodes.
**Element:** Represents an HTML or XML element on a web page.
**Attribute:** Characteristics of an element that are defined in the HTML or XML code.
**Event:** An action or occurrence on a web page that can be detected and handled by JavaScript.

Javascript - implementation of ECMAScript Spec

Commonly Used Methods:

**Accessing Elements:**
getElementById(id)
getElementsByClassName(className)
getElementsByTagName(tagName)
querySelector(selectors)
querySelectorAll(selectors)

**Manipulating Elements:**
innerHTML
textContent
setAttribute(name, value)
getAttribute(name)
removeAttribute(name)
appendChild(node)
removeChild(node)
replaceChild(newNode, oldNode)

**Traversing the DOM:**
parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling

**Creating Elements:**
createElement(tagName)
createTextNode(text)

**Event Handling:**
addEventListener(event, function)
removeEventListener(event, function)

**CSS Classes:**
classList.add(className)
classList.remove(className)
classList.toggle(className)
classList.contains(className)

**Style Manipulation:**
style.property
getComputedStyle(element)

**Window and Document Object:**
window
document
alert(message)
confirm(message)
prompt(message, default)










**Debouncing and throtling**
Debouncing and throttling are techniques used in web development to control the rate at which a particular function is executed, especially in response to events like scrolling, resizing, or typing. 

**Debouncing:**
Debouncing is a practice used to ensure that time-consuming tasks do not fire so often, making them more efficient by delaying the execution of a function until after a certain amount of time has passed since the last time the function was invoked.

**Throttling:**
Throttling is a technique used to control the rate at which a function is executed. It ensures that the function is not called more than once in a specified time interval, regardless of how many times the event triggering the function is fired.