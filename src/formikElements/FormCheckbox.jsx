import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormCheckbox = (props) => {
    const { label , name , option } = props
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg block' htmlFor={name}>{label}</label>
                <FastField name={name}>
                    {
                        ({field})=>{
                            return option.map((item)=>(
                                    <div key={item.id} className="inline-block w-1/5 my-1 text-lg">
                                        <label htmlFor={`check${item.id}`}>
                                            <input {...field} name={name} value={item.eValue} type="checkbox" id={`check${item.id}`} className="align-middle h-5 w-5 mx-2 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-purple-500 checked:border-purple-500"/>
                                            {item.pValue}
                                        </label>
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