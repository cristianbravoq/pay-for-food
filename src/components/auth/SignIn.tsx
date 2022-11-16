import "./styles.css";

import { Form } from "./form/Form";

export function SignIn() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="relative hidden lg:flex w-1/2 h-full items-center justify-center bg-gray-200 login-container"></div>
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2 form-container">
          <Form
            textButton="SignIn"
            account="Don´t have an account?"
            redirect="SignUp"
          />
          <p className="text-center">
            ©2022 All Rights Reserved. Política de cookies, Privacidad y
            Términos.
          </p>
        </div>
      </div>
    </>
  );
}
