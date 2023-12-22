import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"
import { redirect } from "next/navigation";

const Page = () => {
    const {getUser} = getKindeServerSession();

    const user = getUser();

    if(!user || !user) redirect("/auth-callback?origin=dashboard")

    return(<div></div>)
}

export default Page