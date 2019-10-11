// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// Sandi Metz:
// If you find yourself in this situation, resist being driven by sunk costs.
// When dealing with the wrong abstraction, the fastest way forward is back.
// Do the following:
// 1. Re-introduce duplication by inlining the abstracted code back into every
//    caller.
// 2. Within each caller, use the parameters being passed to determine the
//    subset of the inlined code that this specific caller executes.
// 3. Delete the bits that aren't needed for this particular caller.

// source: https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction

// Let's go back!

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}

// navigation.js
// ...
const navDisplayName = `${phil.name.first.slice(0, 1)}. ${phil.name.last}`
console.log(navDisplayName)
// ...

// profile.js
// ...
const profileDisplayName = `${phil.name.first} ${phil.name.last}`
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = phil.username
console.log(cardDisplayName)
// ...
