import YieldForm from "@/components/yield-form";
import YieldTable from "@/components/yield-table";
import { getBuenBitPrice, scrapeBuenBit, scrapeMercadoPago } from "@/lib/scrapper";
import { Platform } from "@/lib/types";

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const MP_APY = await scrapeMercadoPago();
  const BB_APY = await scrapeBuenBit();
  const BB_PRICE = (await getBuenBitPrice()).totalAsk;

  const data : Platform[] = [
    {platform: "MercadoPago", currency: "ARS", APY: MP_APY},
    {platform: "BuenBit", currency: "USD", APY: BB_APY, price: BB_PRICE},
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-row gap-8 justify-center">
      <h1 className="text-4xl">Calculadora de inversion</h1>
      </div>
      <article className="flex flex-col gap-12">
        <div>
          Ingresa el monto en pesos:
          <YieldForm />
        </div>
        <YieldTable data={data} />
      </article>
    </main>
  );
}
