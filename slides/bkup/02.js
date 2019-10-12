// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// Refactor the code to apply DRY to save us from the bug
const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}

const getDisplayName = user => `${user.name.first} ${user.name.last}`

// navigation.js
// ...
const navDisplayName = getDisplayName(phil)
console.log(navDisplayName)
// ...

// profile.js
// ...
const profileDisplayName = getDisplayName(phil)
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = getDisplayName(phil)
console.log(cardDisplayName)
// ...
