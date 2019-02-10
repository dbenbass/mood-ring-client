'use strict'

const limit = (str, length) => {
  if (str.length <= length) {
    return str
  } else {
    return str.substring(0, length) + '...'
  }
}

module.exports = limit
