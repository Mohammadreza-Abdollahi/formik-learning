import FormInput from './FormInput'
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
        default:
            return
    }
}
 
export default FormikControler;