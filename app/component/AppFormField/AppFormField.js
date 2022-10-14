import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from "./../AppTextInput/AppTextInput"
import ErrorMessage from "./../ErrorMessage/ErrorMessage"

export default function AppFormField({name,...otherprops}) {
    const {handleChange,handleSubmit,errors,setFieldTouched,touched} = useFormikContext();
  return (
    <>

        <AppTextInput 
            onChangeText={handleChange(name)}
            onBlur={()=>setFieldTouched(name)}
            {...otherprops}
        >
        </AppTextInput>
        <ErrorMessage error={errors[name]} visible={touched[name]} ></ErrorMessage>
                    


    </>
  )
}