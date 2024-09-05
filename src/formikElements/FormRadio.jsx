import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormRadio = (props) => {
    const { label , name , option } = props;
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-lg' htmlFor={name}>{label}</label>
                <FastField name={name} id={name}>
                {
                    ({field})=>{
                            return option.map((item)=>(
                                    <div key={item.id} className="inline-block ms-3 text-lg">
                                        <label htmlFor={`radio${item.id}`} className="mx-2">
                                            <input {...field} name={name} value={item.id} checked={field.value == item.id} id={`radio${item.id}`} type="radio" className="align-middle me-1 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:outline-slate-900 checked:before:bg-gray-900 checked:bg-purple-500 hover:before:opacity-10"/>
                                            {item.value}
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
 
export default FormRadio;