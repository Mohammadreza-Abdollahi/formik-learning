import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";
import { Fragment } from "react";

const FormRadio = (props) => {
    const { label , name , type , option } = props;
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg' htmlFor={name}>{label}</label>
                <FastField name={name} id={name} as='radio  ' >
                {
                        ({field})=>{
                            console.log(field);
                            return option.map((item)=>(
                                    <div key={item.id}>
                                        <input checked={field.value == item.id} {...field} type="radio" id={`radio${item.id}`} {...props.field} className="mx-2"/>
                                        <label htmlFor={`radio${item.id}`}>{item.value}</label>
                                    </div>                            
                                )
                            )}
                    }
                </FastField>
                <ErrorMessage name={name} component={FormError}/>
            </div>
        </>
    );
}
 
export default FormRadio;