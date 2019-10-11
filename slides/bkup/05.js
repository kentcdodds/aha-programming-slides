// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when the navigation needs the first initial instead of first name?

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}
const getDisplayName = (
  user,
  {
    includeHonorific = false,
    includeUsername = false,
    firstInitial = false,
  } = {},
) =>
  [
    includeHonorific ? user.name.honorific : null,
    firstInitial ? `${user.name.first.slice(0, 1)}.` : user.name.first,
    user.name.last,
    includeUsername ? `(${user.username})` : null,
  ]
    .filter(Boolean)
    .join(' ')

// navigation.js
// ...
const navDisplayName = getDisplayName(phil, {firstInitial: true})
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

// Note that now none of these is doing what the function was originally intended
// to do. They're not as alike as was once assumed.
