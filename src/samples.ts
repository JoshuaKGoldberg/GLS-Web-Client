const prepare = (strings: TemplateStringsArray): string => {
    return strings[0].trim() + "\n";
};

/* tslint:disable */

export const Samples = {
    Messaging: prepare`
create a new variable named message of type string equal to "Hello!"
add another new variable of type int named count equal to 0

write a comment: How many times will we print the message?
make a for loop on i from 0 to 9001
print the message
increment count
...and end the for loop.

protip: count is definitely nine thousand and one
if count isn't equal to 9001
log "wat"
end the if block
`,
    Classes: prepare`
we're going to start today by making a big class named Painting
first we give it a happy little private member named age of type number
and how about give it another happy little private member named color of type string
end the class
`,
    Tutorial: prepare`
Note: Chapter 1 review notes
Note: CS 101 - Professor Bob Ross 

Note: 1A - Variables
Note: Variables have a name, type, and often a value.
make a new variable named foo of type string

Note: storing values in variables is how we remember things!
set foo to "hello!"


Note: 1B - Conditions
Note: We can check whether to do things with "ifs"
if foo is equal to "wrong..."
print "wat"
end the if block

if foo is equal to "hello!"
print "hey!"
end the if block


Note: 1C - Loops
Note: We can do things a bunch of times using loops
make a for loop on i from 0 to 10
print i
end the for loop
`
};

/* tslint:enable */
