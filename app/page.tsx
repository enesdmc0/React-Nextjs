import { delay } from "@/lib/utils";

const Home = async () => {
  await delay(1000);

  return (
      <div className="h-60 rounded-xl bg-yellow-800 p-10 text-white">
        <h1 className="text-3xl font-bold">Parallel Routes</h1>
      </div>
  );
};

export default Home;
