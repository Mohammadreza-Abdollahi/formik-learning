import { ErrorMessage, FastField, Form, Formik } from 'formik';
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
            validateOnMount
            >
            {
                Formik=>{
                    console.log(Formik);
                    return(
                        <div className="my-form py-8 rounded-lg">
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
                                <div className='flex flex-row gap-3'>
                                    <div className='mb-6 basis-1/2'>
                                        <label className='text-lg' htmlFor="city">شهر :</label>
                                        <FastField name='address.city'>
                                            {props=><FormInput {...props} placeholder={"شهر خود را وارد کنید..."} type={'text'} id={'city'}/>}
                                        </FastField>
                                        <ErrorMessage name='address.city' component={FormError}/>
                                    </div>
                                    <div className='mb-6 basis-1/2'>
                                        <label className='text-lg' htmlFor="postcode">کدپستی :</label>
                                        <FastField name='address.postcode'>
                                            {props=><FormInput {...props} placeholder={"کدپستی خود را وارد کنید..."} type={'number'} id={'postcode'}/>}
                                        </FastField>
                                        <ErrorMessage name='address.postcode' component={FormError}/>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3'>
                                    <div className='mb-6 basis-1/2'>
                                        <label className='text-lg' htmlFor="phone1">تلفن همراه :</label>
                                        <FastField name='phone[0]'>
                                            {props=><FormInput {...props} placeholder={"تلفن همراه خود را وارد کنید..."} type={'number'} id={'phone1'}/>}
                                        </FastField>
                                        <ErrorMessage name='phone[0]' component={FormError}/>
                                    </div>
                                    <div className='mb-6 basis-1/2'>
                                        <label className='text-lg' htmlFor="phone2">تلفن ثابت :</label>
                                        <FastField name='phone[1]'>
                                            {props=><FormInput {...props} placeholder={"تلفن ثابت خود را وارد کنید..."} type={'number'} id={'phone2'}/>}
                                        </FastField>
                                        <ErrorMessage name='phone[1]' component={FormError}/>
                                    </div>
                                </div>
                                <button disabled={!Formik.isValid} type="submit" className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none hover:cursor-pointer disabled:hover:cursor-auto disabled:bg-purple-300 disabled:hover:text-slate-700 disabled:border-purple-300    '>
                                    {
                                        Formik.isSubmitting ? (
                                            'درحال ارسال...'
                                        ) : (
                                            "ثبت نام"
                                        )
                                    }
                                </button>
                            </Form>
                        </div>
                    )
                }
            }
            </Formik>
        </>
     );
}
 
export default AddForm;