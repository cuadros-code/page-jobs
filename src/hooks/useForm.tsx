import { useState } from "react"

const useForm = <I extends Object>( initialState : I ) => {

  const [formValue, setFormValue] = useState(initialState)

  const onChange = (value: string, field : keyof I) => {
    setFormValue({
      ...formValue,
      [field]: value
    })
  }

  const setValues = (data :any) => {
    setFormValue(data)
  }

  const reset = () => {
    setFormValue(initialState)
  }

  return{
    formValue,
    reset,
    onChange,
    setValues,
  }

}

export default useForm
