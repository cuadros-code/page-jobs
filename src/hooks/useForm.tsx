import { useState } from "react"

const useForm = <I extends Object>( initialState : I ) => {

  const [formValue, setFormValue] = useState(initialState)

  const onChange = (value: string, field : keyof I) => {
    setFormValue({
      ...formValue,
      [field]: value
    })
  }

  return{
    formValue,
    onChange,
  }

}

export default useForm
