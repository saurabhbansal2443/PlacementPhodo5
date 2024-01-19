# what is js 
- Javascript is a single threaded , synchronous and dynmically typed programming language 

# object - key value pair ( key is unique )
# function - function is block of code used to perform certain task 
# Hoisiting - variables and functions are moved at the top of the scope before execution they  get memory 
# let var const - hosited 
# let const are hoisted but in temporal dead zone 
# let and const cannot be redeclared 
# var and let can be reassigned 
# var can be redecalred 
# var , let , const  is function scoped 
# let and const are also blocked scoped 

# colsures 
- a function will always remember its lexical scope where it is been present irrespective of from where its  is been called 

# DOM ( Document Object Model )
- Part of Browser 
- Tree structure ( element of html ) in JS object 
- used to interact with web pages 
- Manipulate the html 

# event Delegation 
- it is the process thorugh which we can use only single event listner on parent, where we have to give mutiple event to the child we can use a property of DOM ( event.target )

# higher order functions 
- a function which take input a function is called HOF 

# pure Functions  
- a which which has no side effects (no changes in  original data ) ( map filter reduce)

# Arrow functions 
- It is just a another way of declaring a function 
- short syntax 
- it binds "THIS" keyword in a diffrent way  compared to normal function 

# How to perform asychronous task in JS 
- Callback  - function which is exectued after a certain task is completed ( event listners )
- promises  - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


# what is event loop 
- event loop used to track the stack ( when the stack is empty the event loop will send the async task present in callback and microtask queue one by one so that they are executed in stack )

# what is callback and microtsak queue 
- callback store the async call back function 
- microtsak stores the promises in the queue 

