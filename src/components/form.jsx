import { ErrorMessage, FastField, Form, Formik } from 'formik';
import { initialValues , onSubmit , validationSchema } from '../formik/FormikLounching';
import '../assets/css/layout.css'

const AddForm = () => {
    return ( 
        <>
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <div className="my-form py-10 rounded-lg">
                    <h1 className="text-3xl text-purple-600 text-center">ثبت نام</h1>
                    <Form className='px-12'>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="name">نام :</label>
                            <FastField name='name' id='name' type="text" className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."/>
                            <div className='block mt-1 text-red-500 text-sm'>
                                <ErrorMessage name='name'/>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="email">ایمیل :</label>
                            <FastField name='email' id='email' type="text" className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."/>
                            <div className='block mt-1 text-red-500 text-sm'>
                                <ErrorMessage name='email'/>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="password">رمزعبور :</label>
                            <FastField name='password' id='password' type="password" className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."/>
                            <div className='block mt-1 text-red-500 text-sm'>
                                <ErrorMessage name='password'/>
                            </div>
                        </div>
                        <input className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none' type="submit" value={'ثبت نام'}/>
                    </Form>
                </div>
            </Formik>
        </>
     );
}
 
export default AddForm;