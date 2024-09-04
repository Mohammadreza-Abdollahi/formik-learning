import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";
import { Fragment } from "react";

const FormCheckbox = (props) => {
    const { label , name , type , option } = props
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg' htmlFor={name}>{label}</label>
                <FastField name={name} as={type} type={type}>
                    {
                        (props)=>{
                            return option.map((item)=>(
                                    <div key={item.id}>
                                        <input {...props.field} type="checkbox" id={`check${item.id}`} {...props.field} className="h-5 w-5 mx-2 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-purple-500 checked:border-purple-500"/>
                                        <label htmlFor={`check${item.id}`}>{item.value}</label>
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
 
export default FormCheckbox;