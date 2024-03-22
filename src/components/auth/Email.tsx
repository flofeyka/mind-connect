import { Input } from "@nextui-org/react";
import { FC } from "react";
import Icon from "../Icon/Icon";

export default function Email({ formik }: { formik: any }) {
    return <div className="mb-[14px]">
        <Input name="email" value={formik.values.email}
            onChange={formik.handleChange} placeholder="Email" type="email" startContent={<Icon path={"/icon/auth/Email.svg"}
                color="#1a1a1a" width="24px" height="17px" />} />
    </div>
}