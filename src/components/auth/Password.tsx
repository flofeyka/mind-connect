import { Input } from "@nextui-org/react";
import Icon from "../Icon/Icon";

export default function Password({formik}: {formik: any}) {
    return <div className="mb-[14px]">
        <Input name="password" value={formik.values.password}
            onChange={formik.handleChange} placeholder="Password" type="password"
            startContent={<Icon path={"/icon/auth/Password.svg"} color="#1a1a1a" width="24.5px" height="21px" />} />
    </div>
}