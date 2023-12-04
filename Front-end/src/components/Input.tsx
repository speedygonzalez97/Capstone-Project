import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef(( props: InputType, ref) => {
  return (
    
    <TextField

        margin="normal"
        variant="outlined"
        inputRef={ref}
        fullWidth
        size="small"
        type='text'
        {...props}
    >
    </TextField>
    
  ) 
})

export default Input