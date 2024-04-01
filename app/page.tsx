import { redirect } from "next/navigation";
import { getSession, login, logout } from "../lib";


export default async function Home() {
  const session = await getSession();
  return (
    <section className="p-10 text-xl">
      <form action={async (formData) => {
        "use server"
        await login(formData);
        redirect("/")
      } }>
        <input className="text-black" type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form action={async () => {
        "use server"
        await logout()
        redirect("/")
      }} >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
