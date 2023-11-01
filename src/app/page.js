import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Entendiendo el SDK de Vercel para IA
      <Chat />
    </div>
  );
}
