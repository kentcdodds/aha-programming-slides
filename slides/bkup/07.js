// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// And now the user-card.js has changed to only need to display the username

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
    onlyUsername = false,
  } = {},
) =>
  onlyUsername
    ? user.username
    : [
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
const profileDisplayName = getDisplayName(phil)
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = getDisplayName(phil, {onlyUsername: true})
console.log(cardDisplayName)
// ...
