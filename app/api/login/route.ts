import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";
import {pb} from "@/lib/pb";




export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {email, password} = await req.json();

        pb.authStore.clear()

        const authData = await pb.admins
            .authWithPassword(email, password)
            .catch((error) => {
                console.error("Login attempt -----authData----- Error", error);
                return null;
            });


        if (pb.authStore.isValid) {

            console.log(authData, "--------Login successful-------");

            cookies().set('pb_auth', pb.authStore.exportToCookie(), {path: "/"})

            return NextResponse.json({message: `Logged in successfully`},
                {headers: {"Set-cookie": pb.authStore.exportToCookie()}});

        }

    } catch (error) {
        console.error("An error occurred during login:", error);
        return NextResponse.json({status: 500, message: "login failed"});
    }
}