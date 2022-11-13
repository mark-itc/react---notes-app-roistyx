import React from 'react'

export default function DeleteButton({handleClick, key}) {
  return (
    <div>
        <div type="button" onClick={handleClick}>
            {key}
            
            </div>
    </div>
  )
}
