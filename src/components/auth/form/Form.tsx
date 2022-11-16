import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/states/hooks";
import { loginSlice } from "../../../features/auth/authSlice";

import { User } from "../../../common/files";
import { authUser } from '../../../services/Auth'

export function Form(props: any = "SignIn") {

  const { register, handleSubmit} = useForm<User>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (res: User) => {
    dispatch(loginSlice(res))
    const message = authUser(res)
    if (await message === 'Login exitoso') {
        setTimeout(() => {
            // 👇 Redirects to about page, note the `replace: true`
            navigate('/Dashboard', { replace: true });
          }, 1000);
    }
  }

  return (
    <>
      <div className="w-11/12 max-w-[700px] px-10 py-10 my-5 rounded-3xl border-2 border-gray-100">
        <h1 className="text-3xl font-semibold text-center">Pay 4 Food</h1>
        <p className="font-medium text-lg text-gray-500 mt-4 text-center">
          Welcome back! Please enter you details.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                {...register("usuario")}
                name="usuario"
                className="w-full border-2 rounded-xl p-4 mt-1 bg-zinc-100 border-zinc-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                {...register("contraseña")}
                name="contraseña"
                className="w-full border-2 rounded-xl p-4 mt-1 bg-zinc-100 border-zinc-500"
                placeholder="Enter your password"
                type={"password"}
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-medium text-base"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
              <button className="font-medium text-base text-orange-500">
                Forgot password
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-slate-900 rounded-xl text-white font-bold text-lg">
                {props.textButton}
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">{props.account}</p>
              <button
                type="submit"
                className="ml-2 font-medium text-base text-orange-500"
              >
                {props.redirect}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
