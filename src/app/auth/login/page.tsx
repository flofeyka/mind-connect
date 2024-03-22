'use client'

import { useAppSelector } from "@/lib/hooks"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Email from "@/components/auth/Email";
import Password from "@/components/auth/Password";
import Link from "next/link";

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

    return <form onSubmit={formik.handleSubmit} className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col h-screen max-w-[400px]">
            <div className="max-w-[80%] flex flex-col text-center mb-5">
                <div className="text-5xl flex justify-center align-center relative font-bold mb-3">
                    Log in
                </div>
                <div>
                    If you don't have an account, you can create one in a few clicks
                </div>
            </div>

            <div className="w-[300px]">
                <div>
                    <Email formik={formik} />
                </div>
                <div>
                    <Password formik={formik} />
                </div>
                <div className="flex justify-start">
                    <Checkbox color="success" size="sm">Remember me</Checkbox>
                    <div className="ml-auto">
                        <Link href="#" className="text-[13px]">Forgot password?</Link>
                    </div>
                </div>
            </div>

            {captchaUrl !== null && <div>
                <Input />
            </div>}
            <div className="flex justify-center align-center h-[25%]">
                <Button className="mt-2 w-[300px] text-white " color="success" type="submit">
                    Log in account
                </Button>
            </div>
        </div>
    </form>
}