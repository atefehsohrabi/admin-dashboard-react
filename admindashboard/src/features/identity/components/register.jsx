import logo from '@assets/images/logo.svg';
import { Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
// import { httpService } from '../../../core/http-service';

const Register = () => {
 const {register,watch, handleSubmit, formState:{errors}} = useForm();
 const submitForm = useSubmit();
 const onSubmit = (data) => {
  const {confirmPassword, ...userData} = data;
  submitForm(userData, {method:'post'})
 }

const navigation = useNavigation();
const isSubmiting = navigation.state !== 'idle';
const isSuccesOperator = useActionData();
const navigate = useNavigate();
useEffect(()=>{
 if (isSuccesOperator){
  setTimeout(()=> navigate('/login'),2000)
   
  }
},[isSuccesOperator]);
const errorRoute = useRouteError();
    return(
        <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
            <Link to="/login" className="me-2">ثبت نام کنید </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input {...register('mobile', {
                  required:"موبایل الزامی است",
                  minLength:11,
                  maxLength:11
                })} className={`form-control form-control-lg ${errors.mobile && 'is-invalid'}`}
                />
                {
                  errors.mobile && errors.mobile.type === 'required' && (
                    <p>{errors.mobile?.message}</p>
                  )
                }
                 {
                  errors.mobile && (errors.mobile.type === 'minLength' | errors.mobile.type === 'maxLength') && (
                    <p>موبایل باید 11 رقم باشد.</p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input {...register('password', {
                  required:'رمز عبور الزامی است.',
                  minLength:6,
                  maxLength:6
                })}
                  className={`form-control form-control-lg ${errors.password && 'is-invalid'}`}
                  type="password"
                />
                {
                  errors.mobile && errors.password.type === 'required' && (
                    <p>{errors.mobile?.message}</p>
                  )
                }
                {
                  errors.mobile && (errors.password.type === 'minLength' | errors.password.type === 'maxLength') && (
                    <p>‍سورد باید 6 رقم باشد.</p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input {...register('confirmPassword', {
                  required:'تکرار رمز عبور الزامی است.',
                  validate:(value) => {
                    if(watch('password') !== value){
                      return 'عدم تطابق با رمز وارد شده'
                    }
                  },
                  minLength:6,
                  maxLength:6
                })}
                  className={`form-control form-control-lg ${errors.confirmPassword && 'is-invalid'}`}
                  type="password"
                />
               {
                  errors.mobile && errors.confirmPassword.type === 'required' && (
                    <p>{errors.confirmPassword?.message}</p>
                  )
                }
                {
                  errors.mobile && errors.confirmPassword.type === 'validate' && (
                    <p>{errors.confirmPassword?.message}</p>
                  )
                }
              </div>
              <div className="text-center mt-3">
                <button type="submit" disabled={isSubmiting} className="btn btn-lg btn-primary">
                 {isSubmiting ? 'در حال ثبت نام' : 'ثبت نام کنید'} 
                </button>
              </div>
              {isSuccesOperator && (
                <div className='alert alert-success text-success p-2 mt-3'>عملیات با موفقیت انجام شد و به صفحه لاگین می روید.</div>
              )}
              {errorRoute && (
                <div className='alert alert-danger text-danger '>
                  {errorRoute.response?.data.map(error=> <p>{errorRoute.description}</p>)}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
    )
}
export default Register;

// export async function registerAction({request}){
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  // const response = await httpService.post('/Users', data) ;
  // return response.status === 200;
// }