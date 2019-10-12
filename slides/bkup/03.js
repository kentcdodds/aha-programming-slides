// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when profile.js needs to include an honorific?

const phil = {
  name: {honorific: 'Dr.', first: 'Philip', last: 'Rodriquez'},
  username: 'philipr',
}

function getDisplayName(user, {includeHonorific = false} = {}) {
  let displayName = `${user.name.first} ${user.name.last}`
  if (includeHonorific) {
    displayName = `${user.name.honorific} ${displayName}`
  }
  return displayName
}

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
