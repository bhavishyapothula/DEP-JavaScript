/*Question link - http://www.codewars.com/kata/new-with-apply
This function receives a constructor function and possibly some arguments and it returns a new object constructed with the function and the passed arguments.

This is another way to create the greeting object:

var greeting = construct(Greeting, 'John');
And a factory could use like this:

  function factory() {
    return {
      createGreeting() {
        return construct(Greeting, arguments);
      }
      ...
    }
  }
Your work is to implement the construct() function.
*/

function construct(Class, ...arg) {
  return new Class(...arg);
}
