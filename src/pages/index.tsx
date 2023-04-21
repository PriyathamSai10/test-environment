import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Hello World!
      <p>
        This is <strong>{process.env.NEXT_PUBLIC_NODE_ENV}</strong> environment
      </p>
      <p>
        This is <strong>{process.env.PRIVATE_ENV}</strong> varibale
      </p>
    </main>
  );
}
