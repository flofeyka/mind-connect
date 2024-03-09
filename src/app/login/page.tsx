'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useFormik } from "formik";
import styles from "./login.module.css";
import { setCaptchaUrl } from "@/lib/auth/authSlice";
import * as Yup from "yup";

export default function Auth() {
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            captcha: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().email().required(),
            password: Yup.string().trim().required()
        }),
        onSubmit: (values) => {
            //send data for logging 
            console.log(values)
        }
    })

    return <form onSubmit={formik.handleSubmit} className={styles.loginBlock}>
        <input className={styles.loginInput} name="email" value={formik.values.email} onChange={formik.handleChange}
            placeholder="E-mail" />
        <input className={styles.loginInput} name="password" value={formik.values.password} onChange={formik.handleChange} 
            placeholder="Password" />
        {captchaUrl !== null && <div>
            <input className={styles.captchaInput} name="captcha" value={formik.values.captcha} onChange={formik.handleChange}
            placeholder="captcha"/>
        </div>}
        <div>
            <button type="submit">Log in</button>
        </div>
    </form>
}