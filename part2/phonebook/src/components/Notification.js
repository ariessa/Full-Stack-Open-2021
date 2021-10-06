import React from 'react'

const Notification = ({ message }) => {
  let className = "notification"

  if (message === null) {
    return null
  }

  if (message.includes("removed")) {
    className = "error"
  }

  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Notification