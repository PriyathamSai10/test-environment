import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Hello World!
      <p>This is {process.env.NODE_ENV} environment</p>
    </main>
  );
}
