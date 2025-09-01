1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-
* getElementById() -- It is mainly used to access a specific ID.
* getElementsByClassName() -- Returns an HTMLCollection that contains all elements of that    class.
* querySelector() -- The first element can be found using querySelector().
* querySelectorAll() -- It basically returns a NodeList which contains all the elements that match that selector.

2. How do you create and insert a new element into the DOM?

Ans:-
const newDivInsert = document.getElementById('parent-container');
const div = document.createElement('div');
div.innerHTML = `<h1>Kemon aco</h1>`
newDivInsert.appendChild(div);

3. What is Event Bubbling and how does it work?

Ans:- When an event is raised in a child class, it propagates to its parent class.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:- 
An event listener is placed on the parent element so that child elements can automatically handle that event.
Useful because: Performance is better, no need to add separate event listeners repeatedly.

5.What is the difference between preventDefault() and stopPropagation() methods? 

Ans:- 

preventDefault() -- Disables the default behavior of the event (form submit).
stopPropagation() -- Stops the bubbling of the event so that it cannot run its work upstream.


