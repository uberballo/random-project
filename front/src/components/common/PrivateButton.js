import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

const CustomButton = ({
  label,
  className,
  func,
  params,
  toShow = true,
}) => {
  return toShow ? (
    <Button
      className={className}
      onClick={() => func(params)}
    >
      {label}
    </Button>
  ) : null
}

export default CustomButton
