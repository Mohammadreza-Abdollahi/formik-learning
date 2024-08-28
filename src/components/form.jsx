import { useFormik } from 'formik';
import '../assets/css/layout.css'

const AddForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values)=>{
            console.log(formik.values);
        },
        validate: (values)=>{
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
    })
    return ( 
        <>
            <div className="my-form py-10 rounded-lg">
                <h1 className="text-3xl text-purple-600 text-center">ثبت نام</h1>
                <form onSubmit={formik.handleSubmit} className='px-12'>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="name">نام :</label>
                        <input value={formik.values.name} onChange={formik.handleChange} id='name' type="text" name="name" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."></input>
                        {formik.errors.name ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.name}</span> : null}
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="email">ایمیل :</label>
                        <input value={formik.values.email} onChange={formik.handleChange} id='email' type="text" name="email" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="ایمیل خود را وارد کنید..."></input>
                        {formik.errors.email ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.email}</span> : null}
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="password">رمزعبور :</label>
                        <input value={formik.values.password} onChange={formik.handleChange} id='password' type="password" name="password" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="رمزعبور خود را وارد کنید..."></input>
                        {formik.errors.password ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.password}</span> : null}
                    </div>
                    <input className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none' type="submit" value={'ثبت نام'}/>
                </form>
            </div>
        </>
     );
}
 
export default AddForm;