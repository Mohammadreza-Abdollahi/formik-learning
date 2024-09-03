import FormInput from './FormInput'
import FormSelect from './FormSelect';
import FormTextarea from "./FormTextarea";

const FormikControler = (props) => {
    switch (props.control) {
        case 'input':
            return(
                <FormInput {...props}/>
            ) 
        case 'textarea': 
            return(
                <FormTextarea {...props}/>
            )
        case 'select': 
            return(
                <FormSelect {...props}/>
            )
        default:
            return
    }
}
 
export default FormikControler;