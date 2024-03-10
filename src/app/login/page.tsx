'use client'

import { useAppSelector } from "@/lib/hooks"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";

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

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <div>
                Sign in
            </div>
            <div>
                <Input isRequired label="Email"/>
            </div>
            <div>
                <Input isRequired label="Password"/>
            </div>

            {captchaUrl !== null && <div>
                <Input/>
            </div>}

            <div>
                <button type="submit">Log in</button>
            </div>
        </div>
    </form>
}