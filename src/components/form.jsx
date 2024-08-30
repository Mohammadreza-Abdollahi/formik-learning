import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import { initialValues , onSubmit , validationSchema } from '../formik/FormikLounching';
import '../assets/css/layout.css'
import FormError from './FormError';
import FormInput from './FormInput';

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
                            <FastField name='name'>
                                {props=><FormInput {...props} placeholder={"نام خود را وارد کنید..."} type={'text'} id={'name'}/>}
                            </FastField>
                            <ErrorMessage name='name' component={FormError}/>
                        </div>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="email">ایمیل :</label>
                            <FastField name='email'>
                                {props=><FormInput {...props} placeholder={"ایمیل خود را وارد کنید..."} type={'text'} id={'email'}/>}
                            </FastField>
                             <ErrorMessage name='email' component={FormError}/>
                        </div>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="password">رمزعبور :</label>
                            <FastField name='password'>
                                {props=><FormInput {...props} placeholder={"رمزعبور خود را وارد کنید..."} type={'password'} id={'password'}/>}
                            </FastField>
                            <ErrorMessage name='password' component={FormError}/>
                        </div>
                        <div className='mb-6'>
                            <label className='text-lg' htmlFor="bio">بیوگرافی (اختیاری) :</label>
                            <FastField component='textarea' name='bio' id='bio' type="text" placeholder="بیوگرافی خود را وارد کنید..." className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl"/>
                        </div>
                        <input className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none' type="submit" value={'ثبت نام'}/>
                    </Form>
                </div>
            </Formik>
        </>
     );
}
 
export default AddForm;