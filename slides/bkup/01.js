// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}

// navigation.js
// ...
const navDisplayName = `${phil.name.first} ${phil.name.lest}`
console.log(navDisplayName)
// ...

// profile.js
// ...
const profileDisplayName = `${phil.name.first} ${phil.name.lest}`
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = `${phil.name.first} ${phil.name.lest}`
console.log(cardDisplayName)
// ...

// Note the bug in `name.lest` (bug could be a business logic bug that TypeScript
// wont save you from)
