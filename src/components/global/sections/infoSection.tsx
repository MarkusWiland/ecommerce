import { cn } from "@/lib/utils";
import { Truck, CheckCircle, DollarSign, Headset } from "lucide-react";
import { Section } from "../common/section";

export default function InfoSection() {
  return (
    <Section className={cn("py-12")}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-6 text-center">
        
        {/* Snabb leverans */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <Truck className="w-10 h-10 text-black" />
          <h3 className="font-semibold mt-2">Snabb leverans</h3>
          <p className="text-gray-500 text-sm">1-3 dagars leveranstid</p>
        </div>

        {/* Nöjda kunder */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <CheckCircle className="w-10 h-10 text-black" />
          <h3 className="font-semibold mt-2">Över 10.000 nöjda kunder!</h3>
        </div>

        {/* Klarna Betala Sen */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <DollarSign className="w-10 h-10 text-black" />
          <h3 className="font-semibold mt-2">Få först, Betala sen</h3>
          <p className="text-gray-500 text-sm">Med Klarna</p>
        </div>

        {/* Kundtjänst */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm">
          <Headset className="w-10 h-10 text-black" />
          <h3 className="font-semibold mt-2">Snabb kundtjänst</h3>
          <p className="text-gray-500 text-sm">kontakt@xn--fotbollstrjan-rmb.se</p>
        </div>

      </div>
    </Section>
  );
}
