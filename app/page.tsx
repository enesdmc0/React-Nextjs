import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const branches = [
    {
      name: "useState",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/useState",
    },
    {
      name: "useEffect",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/useEffect",
    },
    {
      name: "useContext",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/useContext"
    },
    {
      name: "useRef",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/useRef"
    },
    {
      name: "revalidatePath && revalidateTag",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/revalidatePath-%26%26-revalidateTag"
    },
    {
      name: "Next.js Authentication",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/nextjs-authentication"
    },
    {
      name: "Local Pocketbase",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/local-pocketbase"
    },
    {
      name: "Infinite Scroll",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/infinite-scroll"
    },
    {
      name: "Card Ui",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/card-ui"
    },
    {
      name: "Alert Backend",
      link: "https://github.com/enesdmc0/React-Nextjs/tree/alert-backend"
    }


  ];

  return (
    <main className=" min-h-screen  p-10 pt-24 container mx-auto">
      <h1 className="text-white font-semibold text-2xl underline">
        You can visit other branches for different topics and mini projects
        related to nextjs and reactjs.{" "}
      </h1>

      <div className="flex flex-col mt-10">
        {branches.map((branch, index) => (
          <Link
          target="_blank"
            href={branch.link}
            key={index}
            className=" mt-5"
          >
          
         -     {branch.name}
        
          </Link>
        ))}
      </div>
    </main>
  );
}
