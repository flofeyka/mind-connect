'use client'

import { useAppSelector } from "@/lib/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl);

    const formik = useFormik({
        initialValues: {
            email: "",
            userName: "",
            password: "",
            repeatPassword: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().email().required(),
            userName: Yup.string().trim().required(),
            password: Yup.string().trim().required().min(8),
            repeatPassword: Yup.string().trim().required().oneOf([Yup.ref("password")], "Passwords must match")
        }),
        onSubmit: (values: any) => {
            console.log(values)
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <div>Sign up</div>
        <div>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="E-mail" type="email" />
        </div>
        <div>
            <input name="userName" value={formik.values.userName} onChange={formik.handleChange} placeholder="User name" type="text"/>
        </div>
        <div>
            <input name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" type="password" />
        </div>
        <div>
            <input name="repeatPassword" value={formik.values.repeatPassword} onChange={formik.handleChange} placeholder="Repeat password" type="password" />
        </div>
        <div>
            {captchaUrl != null && <div>
                <label>Captcha</label>
                <input/>
            </div>}
        </div>
        <div>
            <button type="submit">Sign up</button>
        </div>
    </form>
}