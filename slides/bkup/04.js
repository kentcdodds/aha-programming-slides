// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when the user-card.js needs the username?

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}
const getDisplayName = (
  user,
  {includeHonorific = false, includeUsername = false} = {},
) =>
  [
    includeHonorific ? user.name.honorific : null,
    user.name.first,
    user.name.last,
    includeUsername ? `(${user.username})` : null,
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
const cardDisplayName = getDisplayName(phil, {includeUsername: true})
console.log(cardDisplayName)
// ...
