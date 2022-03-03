var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';



var regex = /this/;

console.log("string1", regex.test(string1));
console.log("string2", regex.test(string2));
console.log("string3", regex.test(string3));
console.log("string4", regex.test(string4));





var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;
// To make it a regular expression,
// we put something in between those slashes.
// That can be words, it can be numbers,
// it can be various combinations and it
// can even be patterns.


//
// The test() method executes a search for
// a match between a regular expression and a
// specified string. Returns true or false

console.log( regex.test(string1) );
console.log( regex.test(string2) );
console.log( regex.test(string3) );
console.log( regex.test(string4) );

//  So what happens when we use this?
//  Is the test method looks through whatever
//  string it's passed in for this pattern which
//  is expressed in the regular expression.
//  And it reports back true or false whether
//  that pattern can be found in the string.

// add an I onto the end of this regular expression.
//  This I is called a flag when added onto
//  the end of a regular expression like this.
//  I stands for case insensitive.
//  I'm going to run this again.
regex = /this/i;



// I'm going to leave the case insensitive
// modifier but I'm going to add what's called
// a caret to the front of this. That's Shift + 6
// on an American keyboard. Now what this does is check
// if this appears at the beginning of the string.
regex = /^this/i;


// this will check whether the word this appears
// at the end of any of these strings.
regex = /this$/i;


//  I'm going to check for ever with the
//  dollar sign. Hit Return. Now I get true
//  and true for the first two, and false for the second
//  two because ever does in fact appear there at the end.


//  A dot means any character,
//  so I'm not actually matching
//  whether ever and period appears in these strings, I'm checking
//  whether ever followed by any single character appears here.

regex = /ever.$/i;

//  If I wanted to check for a literal dot,
//  I can do that but I need to escape this little dot.
regex = /ever\.$/i;

regex = /Moun.$/i;

