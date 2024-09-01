import { ErrorMessage, FastField, Form, Formik } from 'formik';
import { initialValues , onSubmit , validationSchema } from '../formik/FormikLounching';
import '../assets/css/layout.css'
import FormError from './FormError';
import FormInput from './FormInput';
import loadingImg from '../assets/img/load.gif'
import { useEffect, useState } from 'react';

const AddForm = () => {
    const [localData , setLocalData] = useState(null);
    const [myValues , setMyValues] = useState(null);

    const handleSaveLocal = (values)=>{
        localStorage.setItem('formData' , JSON.stringify(values));
    }
    const handleGetSaveData = (dirty)=>{
        setMyValues(localData);
        dirty = true;
    }
    useEffect(()=>{
        let savedData = localStorage.getItem('formData');
        setLocalData(JSON.parse(savedData));
    },[])
    return ( 
        <>
            <Formik
            initialValues={myValues || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
            >
            {
                Formik=>{
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
                                <div className='flex flex-row gap-1'>
                                    <button disabled={Formik.isSubmitting} type="submit" className='basis-auto w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl outline-none hover:cursor-pointer disabled:hover:cursor-auto disabled:bg-purple-300 disabled:hover:text-slate-700 disabled:border-purple-300    '>
                                        {
                                            Formik.isSubmitting ? (
                                                <img className='w-1/2 m-auto' src={loadingImg} alt="" />
                                            ) : (
                                                "ثبت نام"
                                            )
                                        }
                                    </button>
                                    {
                                        Formik.dirty && Formik.isValid ? (
                                            <button type="button" onClick={()=>handleSaveLocal(Formik.values)} className='basis-auto w-full py-3 mt-4 mb-3 border rounded border-green-500 text-slate-700 transition-colors duration-300 hover:bg-green-500 hover:text-white text-2xl outline-none hover:cursor-pointer disabled:hover:cursor-auto disabled:bg-purple-300 disabled:hover:text-slate-700 disabled:border-purple-300    '>
                                                ذخیره در حافظه
                                            </button>
                                        ) : null
                                    }
                                    {
                                        localData ? (
                                            <button type="button" onClick={()=>handleGetSaveData(Formik.dirty)} className='basis-auto w-full py-3 mt-4 mb-3 border rounded border-yellow-500 text-slate-700 transition-colors duration-300 hover:bg-yellow-500 hover:text-white text-2xl outline-none hover:cursor-pointer disabled:hover:cursor-auto disabled:bg-purple-300 disabled:hover:text-slate-700 disabled:border-purple-300    '>
                                                جایگذاری اطلاعات ذخیره شده
                                            </button>
                                        ) : null
                                    }
                                    {
                                        Formik.dirty ? (
                                            <button type="button" onClick={()=>Formik.handleReset()} className='basis-auto w-full py-3 mt-4 mb-3 border rounded border-red-500 text-slate-700 transition-colors duration-300 hover:bg-red-500 hover:text-white text-2xl outline-none hover:cursor-pointer disabled:hover:cursor-auto disabled:bg-purple-300 disabled:hover:text-slate-700 disabled:border-purple-300    '>
                                                پاکسازی
                                            </button>
                                        ) : null
                                    }
                                </div>
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