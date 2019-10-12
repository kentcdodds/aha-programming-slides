// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// And now the user-card.js has changed to only need to display the username

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}

function getDisplayName(
  user,
  {
    includeHonorific = false,
    includeUsername = false,
    firstInitial = false,
    onlyUsername = false,
  } = {},
) {
  let first = user.name.first
  if (firstInitial) {
    first = `${first.slice(0, 1)}.`
  }
  let displayName = `${first} ${user.name.last}`
  if (includeHonorific) {
    displayName = `${user.name.honorific} ${displayName}`
  }
  if (includeUsername) {
    displayName = `${displayName} (${user.username})`
  }
  if (onlyUsername) {
    displayName = user.username
  }
  return displayName
}

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
