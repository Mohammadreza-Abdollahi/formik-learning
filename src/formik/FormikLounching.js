import * as Yup from 'yup'
export const initialValues = {
    name: '',
    email: '',
    password: ''
};
export const onSubmit = (values)=>{
    console.log(values);
};
export const validate = (values)=>{
    let error = {}
    if(!values.name){
        error.name = 'نام نمیتواند خالی باشد!';
    }
    if(!values.email){
        error.email = 'ایمیل نمیتواند خالی باشد!';
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        error.email = 'قالب ایمیل نادرست است!';
    }
    if(!values.password){
        error.password = 'رمزعبور نمیتواند خالی باشد!';
    }
    return error;
}
export const validationSchema = Yup.object({
    name: Yup.string('نام باید هاوی یک رشته باشد!').required('نام نمیتواند خالی باشد!').min(5,'نام باید حداقل هادی 5 کاراکتر باشد!').max(15,'نام حداکثر میتواند هاوی 15 کاراکتر باشد!'),
    email: Yup.string().required('ایمیل نمیتواند خالی باشد!').email('قالب ایمیل صحیح نیست!'),
    password: Yup.string('').required('رمزعبور نمیتواند خالی باشد!').min(8,'رمزعبور باید حداقل هاوی 8 کاراکتر باشد!')
})