'use client'

import { useAppSelector } from "@/lib/hooks"
import { useFormik } from "formik";
import styles from "./login.module.css";
import * as Yup from "yup";

export default function Auth() {
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl);
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
        <div className={styles.loginContainer}>
            <div className={styles.signInText}>
                Sign in
            </div>
            <div>
                <input className={styles.loginInput} name="email" value={formik.values.email} onChange={formik.handleChange}
                    placeholder="E-mail" type="email" />
            </div>
            <div>
                <input className={styles.loginInput} name="password" value={formik.values.password} onChange={formik.handleChange}
                    placeholder="Password" type="password" />
            </div>

            {captchaUrl !== null && <div>
                <input className={styles.captchaInput} name="captcha" value={formik.values.captcha} onChange={formik.handleChange}
                    placeholder="captcha" />
            </div>}

            <div>
                <button type="submit" className={styles.loginButton}>Log in</button>
            </div>
        </div>
    </form>
}