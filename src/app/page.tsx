import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center">
      <div className="mb-8 flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-medium">Gerencie sua empresa</h2>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Atendimentos, clientes
        </h1>
      </div>
      <Image
        src="/banner.svg"
        alt="Gerencie sua empresa, Atendimentos e clientes"
        width={607}
        height={419}
        priority
        sizes="100vw"
      />
    </main>
  );
}
