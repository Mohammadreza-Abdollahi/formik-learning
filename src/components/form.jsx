import { useFormik } from 'formik';
import { initialValues , onSubmit , validationSchema } from '../formik/FormikLounching';
import '../assets/css/layout.css'

const AddForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema    
    })
    return ( 
        <>
            <div className="my-form py-10 rounded-lg">
                <h1 className="text-3xl text-purple-600 text-center">ثبت نام</h1>
                <form onSubmit={formik.handleSubmit} className='px-12'>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="name">نام :</label>
                        <input {...formik.getFieldProps('name')} type="text" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."></input>
                        {formik.errors.name && formik.touched.name ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.name}</span> : null}
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="email">ایمیل :</label>
                        <input {...formik.getFieldProps('email')} id='email' type="text" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="ایمیل خود را وارد کنید..."></input>
                        {formik.errors.email && formik.touched.email ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.email}</span> : null}
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="password">رمزعبور :</label>
                        <input {...formik.getFieldProps('password')} id='password' type="password" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="رمزعبور خود را وارد کنید..."></input>
                        {formik.errors.password && formik.touched.password ? <span className='block mt-1 text-red-500 text-sm'><i className='fa fa-xmark'></i> {formik.errors.password}</span> : null}
                    </div>
                    <input className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none' type="submit" value={'ثبت نام'}/>
                </form>
            </div>
        </>
     );
}
 
export default AddForm;