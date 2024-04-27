import Pocketbase from "pocketbase";
import {cookies} from "next/headers";


const initPocketbase = async () => {
    const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL)

    if(process.env.NODE_ENV === "production"){
        pb.autoCancellation(false)
    }

    const cookieStore = cookies()
    const auth = cookieStore.get("pb_auth")

    pb.authStore.loadFromCookie(`pb_auth=${auth?.value as any}`)

    if (pb.authStore.isValid) {
        return pb
    }else {
        return null
    }

}

export default initPocketbase;