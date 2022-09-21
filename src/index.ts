/**
 * The rock paper scissors game.
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// input
const USERS_HAND_STRING = prompt('Choose rock (1), paper (2) or scissors (3): ')
const USERS_HAND = parseInt(USERS_HAND_STRING)

// Random number
const min = 1
const max = 3
const ROBOT_HAND = Math.floor(Math.random() * max + min)

// process
if (USERS_HAND === ROBOT_HAND) {
  console.log('\nits a tie')
} else if (
  (USERS_HAND === 1 && ROBOT_HAND === 3) ||
  (USERS_HAND === 2 && ROBOT_HAND === 1) ||
  (USERS_HAND === 3 && ROBOT_HAND === 2)
) {
  console.log('\nYOU WIN!!')
} else if (
  (USERS_HAND === 1 && ROBOT_HAND === 2) ||
  (USERS_HAND === 2 && ROBOT_HAND === 3) ||
  (USERS_HAND === 3 && ROBOT_HAND === 1)
) {
  console.log('\nyou lose :(')
} else {
  console.log('\ninvalid input')
}

// output
if (ROBOT_HAND === 1) {
  console.log('ai chose rock')
} else if (ROBOT_HAND === 2) {
  console.log('ai chose paper')
} else {
  console.log('ai chose scissor')
}

console.log('\ndone.')
