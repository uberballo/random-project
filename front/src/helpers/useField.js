import { useState } from 'react'

const useField = type => {
  const [value, setField] = useState('')

  const onChange = event => {
    setField(event.target.value)
  }

  const reset = () => {
    setField('')
  }
  return {
    type,
    value,
    onChange,
    reset
  }
}

export default useField
