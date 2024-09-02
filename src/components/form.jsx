import { Form, Formik } from 'formik';
import { initialValues , onSubmit , validationSchema } from '../formik/FormikLounching';
import '../assets/css/layout.css'
import loadingImg from '../assets/img/load.gif'
import { useEffect, useState } from 'react';
import FormikControler from '../formikElements/FormikControler';

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
                                <FormikControler control={'input'} label={'نام :'} name={'name'} type={'text'} placeholder={"نام خود را وارد کنید..."}/>
                                <FormikControler control={'input'} label={'ایمیل :'} name={'email'} type={'text'} placeholder={"ایمیل خود را وارد کنید..."}/>
                                <FormikControler control={'input'} label={'رمزعبور :'} name={'password'} type={'password'} placeholder={"رمزعبور خود را وارد کنید..."}/>
                                <FormikControler control={'textarea'} label={'بیوگرافی(اختیاری) :'} name={'bio'} type={'bio'} placeholder={"بیوگرافی خود را وارد کنید..."}/>
                                <div className='flex flex-row gap-3'>
                                    <div className='basis-1/2'>
                                        <FormikControler control={'input'} label={'شهر :'} name={'address.city'} type={'text'} placeholder={"شهر خود را وارد کنید..."}/>
                                    </div>
                                    <div className='basis-1/2'>
                                        <FormikControler control={'input'} label={'کدپستی :'} name={'address.postcode'} type={'number'} placeholder={"کدپستی خود را وارد کنید..."}/>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3'>
                                    <div className='basis-1/2'>
                                        <FormikControler control={'input'} label={'تلفن همراه :'} name={'phone[0]'} type={'number'} placeholder={"تلفن همراه خود را وارد کنید!"}/>
                                    </div>
                                    <div className='basis-1/2'>
                                        <FormikControler control={'input'} label={'تلفن ثابت :'} name={'phone[1]'} type={'number'} placeholder={"تلفن ثابت خود را وارد کنید!"}/>
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
                                                جایگذاری اطلاعات
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