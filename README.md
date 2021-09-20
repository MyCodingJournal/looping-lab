# looping-lab
- <a href="https://github.com/VGDJP-07/phase-0-intro-to-js-2-looping-code-along">Link to lab</a>

Learning Goals
- Build a for loop.
- Build a while loop.
- Explain the purpose of a loop.
- Understand when to use each type of loop

### The for loop
Of the loops in JavaScript, the for loop is the most common. The for loop is made up of four statements in the following structure:

Syntax:

for ([initialization]; [condition]; [iteration]) {<br>
  [loop body]<br>
}

Initialization<br>
- Typically used to initialize a counter variable.

Condition<br>
- An expression evaluated before each pass through the loop. If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.

Iteration<br>
- An expression executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to completion.

Loop body<br>
- Code that runs on each pass through the loop.
<br>
Usage: Use a for loop when you know how many times you want the loop to run (for example, when you're looping through elements in an array).

### The while loop

Recall from the earlier lesson that the while loop is similar to a for loop, repeating an action in a loop based on a condition. Both will continue to loop until that condition evaluates to false. Unlike for, while only requires condition and loop statements:

while ([condition]) {<br>
  [loop body]<br>
}

CAUTION: When using while loops, it is easy to forget to involve iteration. Leaving iteration out can result in a condition that always evaluates to true, causing an infinite loop!

### When to Use for and while

JavaScript, like many programming languages, provides a variety of looping options. Loops like for and while are actually just slight variations of the same process. By providing a variety, we as programmers have a larger vocabulary to work with.

Often, you will see while loops simply being used as an alternative to for loops:

let countup = 0;<br>
    while (countup < 10) {<br>
    console.log(countup++);<br>
}

This is perfectly fine as an alternative way to describe:

for (let countup = 0; countup < 10; countup++) {<br>
  console.log(countup);<br>
}


If you're feeling a bit lost about when to use a for vs. a while loop, take a deep breath. Most of the time, a regular for loop will suffice. It's by far the most common looping construct in JavaScript. A general heuristic for choosing which loop to use is to first try a for loop. If that doesn't serve your purposes, then go ahead and try a while loop. Also, remember that you can always refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"> documentation on these loops</a> at any time.

##### Just don't forget: with while, make sure you are updating the condition on each loop so that the loop eventually terminates!

##### Resources

##### Codecademy
- <a href="https://www.codecademy.com/articles/glossary-javascript#loops">for loop</a> 
- <a href="https://www.codecademy.com/articles/glossary-javascript#loops">while loop</a>

##### MDN
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">for loop</a> 
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while">while loop</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration">Loops and iteration</a>
