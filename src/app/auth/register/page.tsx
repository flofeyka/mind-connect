'use client'

import Icon from "@/components/Icon/Icon";
import { useAppSelector } from "@/lib/hooks";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { FormikValues, useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import imageBackground from "../../../public/images/RegisterImageBackground.png"
import logo from "../../../public/images/logo.png"
import Email from "@/components/auth/Email";
import Fullname from "@/components/auth/Fullname";
import Password from "@/components/auth/Password";
export default function Register() {
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            repeatPassword: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().email().required(),
            userName: Yup.string().trim().required(),
            password: Yup.string().trim().required().min(8),
            repeatPassword: Yup.string().trim().required().oneOf([Yup.ref("password")], "Passwords must match")
        }),
        onSubmit: (values: FormikValues) => {
            console.log(values)
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        {/* <div className="float-right">
            <Image className="w-[40vw] h-screen w-auto" src={imageBackground} alt="image" />
        </div> */}
        <div className="flex flex-col items-center h-screen">
            <div className="flex h-[10vh] items-center"><Icon path="/icon/auth/logo-sm.svg" color="#1a1a1a" height="30px" width="190px" /></div>
            <div className="flex flex-col items-center justify-center h-[100%]">
                <div className="text-center max-w-[80%] mb-7">
                    <div className="text-2xl font-bold mb-3">Registration</div>
                    <div>If you do not have an account, you can create one in a few clicks</div>
                </div>
                <div className="min-w-[100px] w-[55%]">
                    <div>
                        <Fullname formik={formik} />
                    </div>
                    <div>
                        <Email formik={formik} />
                    </div>
                    <div>
                        <Password formik={formik}/>
                    </div>
                    <div className="mb-[10px]">
                        <Input name="repeatPassword" value={formik.values.repeatPassword}
                            onChange={formik.handleChange} placeholder="Repeat password" type="password" startContent={<Icon path={"/icon/auth/Password.svg"} color="#1a1a1a" width="24.5px" height="21px" />} />
                    </div>
                    <div className="mb-[10px]">
                        <Checkbox color="success" className="font-[5px]">I agree with <a href="#" className="underline decoration-green-600 text-green-600">privacy policy</a></Checkbox>
                    </div>
                    <div className="flex">
                        <Button className="w-[1%] ml-1"><Icon path="/icon/auth/Vector.svg" color="#1a1a1a" width="10px" height="10px" /></Button>
                        <Button className="w-[100%] text-white font-bold border-green-600 border-1" color="success" type="submit">Create an account</Button>
                    </div>
                </div>

            </div>
            <div>
                {captchaUrl != null && <div>
                    <label>Captcha</label>
                    <Input variant="underlined" />
                </div>}
            </div>
        </div>
    </form>
}