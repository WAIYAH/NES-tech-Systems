
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type PricingOption = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const PRICING: PricingOption[] = [
  {
    name: "Starter",
    price: "Ksh 25,000",
    features: [
      "1 AI tool/app",
      "Email support",
      "1 month free updates",
      "Basic analytics"
    ],
  },
  {
    name: "Professional",
    price: "Ksh 70,000",
    features: [
      "Up to 4 apps or integrations",
      "Priority support",
      "3 months updates",
      "Advanced analytics",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited solutions",
      "Premium 24/7 support",
      "Custom features",
      "On-premise options",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-7">
          Our <span className="text-[color:#FFD700]">Pricing</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PRICING.map((opt, i) => (
            <div
              key={opt.name}
              className={`flex flex-col shadow-card rounded-2xl border border-blue-100 px-6 pt-7 pb-6 items-center bg-white transition hover:scale-105 ${opt.highlight ? "border-2 border-[color:#FFD700] bg-blue-50" : ""}`}
            >
              <div className="text-xl font-semibold mb-2 text-blue-900">{opt.name}</div>
              <div className="text-2xl font-bold mb-4 text-[color:#FFD700]">{opt.price}</div>
              <ul className="mb-6 space-y-2 w-full">
                {opt.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-blue-900/90">
                    <Check size={18} className="text-[color:#0056b3]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button variant={opt.highlight ? "default" : "outline"} className="w-full">{opt.price === "Contact Us" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
