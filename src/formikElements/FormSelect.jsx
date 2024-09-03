import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormSelect = (props) => {
    const { label , name , type , option } = props
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg' htmlFor={name}>{label}</label>
                <FastField name={name} as={type} type={type} className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-2 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl">
                    {
                        option.map((item)=>{
                            return(
                                <option key={item.id} value={item.id}>{item.value}</option>
                            )
                        })
                    }
                </FastField>
                <ErrorMessage name={name} component={FormError}/>
            </div>
        </>
    );
}
 
export default FormSelect;