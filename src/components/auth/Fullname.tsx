import { Input } from "@nextui-org/react";
import Icon from "../Icon/Icon";

export default function Fullname({ formik }: { formik: any }) {
    return <div className="mb-[14px]">
        <Input name="fullname" value={formik.values.fullname}
            onChange={formik.handleChange} placeholder="Full name" startContent={<Icon path={"/icon/auth/Fullname.svg"}
                color="#1a1a1a" width="22px" height="21px" />} />
    </div>
}