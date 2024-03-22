'use client'

import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import Email from "@/components/auth/Email";
import { Button } from "@nextui-org/react";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";
import Link from "next/link";
import Vector from "@/components/Vector/Vector";

export default function Auth() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().trim().email().required(),
        }),
        onSubmit: (values: FormikValues) => {
            console.log(values)
        }
    })

    return <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center">
        <div className="text-center max-w-[350px] mb-2">
            <div className="text-2xl font-bold mb-2">Log in to your account</div>
            <div>If you don't have an account, you can create one in a few clicks</div>
        </div>
        <div className="w-[300px]">
            <Email formik={formik} />
        </div>
        <div className="flex mb-3">
            <Button className="w-[50px]"><Image src="/icon/auth/Google.svg" alt="cool" width={23} height={23}/></Button>
            <Button color="success" className="text-white font-medium w-[220px]">
                Sign in <Vector className="rotate-180" color="1a1a1a"/>
            </Button>
        </div>
        <div className="flex">
            <Link href="/auth/register">
                Create an account <Vector className="rotate-180" color="#1a1a1a" />
            </Link>
        </div>
    </form>
}