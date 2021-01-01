import { useState } from 'react'

export const resetFields = (fields) => {
  fields.forEach((field) => field.reset())
}

const useField = (type) => {
  const [value, setField] = useState('')

  const onChange = (event) => {
    setField(event.target.value)
  }

  const reset = () => {
    setField('')
  }
  return {
    type,
    value,
    onChange,
    reset,
  }
}

export default useField
