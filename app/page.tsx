import {revalidateAll} from "@/lib/actions";
import Users from "@/components/Users";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
      <section className="py-24 p-5">
        <div className="container">
          <div>
            <h1 className="text-3xl font-bold">On-demand Revalidation</h1>
            <h2 className="flex gap-2 font-light text-gray-700">
              <pre>
                <code>revalidatePath</code> vs <code>revalidateTag</code>
              </pre>
            </h2>
            <form action={revalidateAll}>
              <button className="mt-3 p-3 border rounded-md bg-white text-black">
                Revalidate the entire path
              </button>
            </form>
            <Users />
            <Tasks />
          </div>
        </div>
      </section>
  );
}
