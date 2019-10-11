// I'm using the Quokka.js extension for VSCode
// AHA Programming: Avoid Hasty Abstractions

// What happens when the profile no longer needs the honorific?

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
const profileDisplayName = getDisplayName(phil)
console.log(profileDisplayName)
// ...

// user-card.js
// ...
const cardDisplayName = getDisplayName(phil, {includeUsername: true})
console.log(cardDisplayName)
// ...

// Note that it's easy to add use cases to an abstraction, but it's much harder to
// remove use cases from an abstraction because:
// - the impact is not always clear
// - you may forget
// - the cost of leaving it in there feels low
// - there's the lingering "but what if we need to support that again?"
