// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when the navigation needs the first initial instead of first name?

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
  return displayName
}

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
