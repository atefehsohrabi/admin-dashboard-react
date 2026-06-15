import logo from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Register = () => {
 const {register,watch, handleSubmit, formState:{errors}} = useForm();
 const onSubmit = (data) => console.log(data);
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
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}
export default Register;