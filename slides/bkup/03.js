// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when profile.js needs to include an honorific?

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}
const getDisplayName = (user, {includeHonorific = false} = {}) =>
  [
    includeHonorific ? user.name.honorific : null,
    user.name.first,
    user.name.last,
  ]
    .filter(Boolean)
    .join(' ')

// navigation.js
// ...
const navDisplayName = getDisplayName(phil)
console.log(navDisplayName)
// ...

// profile.js
// ...
const profileDisplayName = getDisplayName(phil, {includeHonorific: true})
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = getDisplayName(phil)
console.log(cardDisplayName)
// ...
