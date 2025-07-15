// components/pricing-card.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

// interface PricingPlan {
//   title: string;
//   price: string;
//   subtitle: string;
//   concepts: string;
//   revisions: string;
//   features: string[];
//   highlight?: boolean;
//   primaryColor?: string;
//   textColor?: string;
// }

// interface PricingCardProps {
//   plans: PricingPlan[];
// }

interface PricingPlan {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  concepts?: string;   // ✅ now optional
  revisions?: string;  // ✅ now optional
  highlight?: boolean;
  primaryColor?: string;
  textColor?: string;
}

interface PricingCardProps {
  plans: PricingPlan[];
}

export default function PricingCard({ plans }: PricingCardProps) {
  if (!plans || !Array.isArray(plans)) return null;
  return (
    <div className="border text-card-foreground bg-white rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`${plan.highlight
            ? "bg-[#8ED462] shadow-xl hover:shadow-2xl transform scale-105 -translate-y-8 z-10"
            : "border-[0] bg-white shadow-0 hover:shadow-xl"
            } rounded-3xl transition-all duration-300 relative`}
        >
          <CardContent className="p-16">
            <div className="mb-8">
              <div className="text-[#01594d] mb-2 font-[Fustat] font-bold text-[42.13px] leading-[100%]">
                {plan.price}
                <span
                  className="text-lg font-normal ml-2"
                  style={{ color: plan.textColor }}
                >
                  {plan.subtitle}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#01594d] font-satoshi">
                {plan.title}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {/* {[plan.concepts, ...plan.features, plan.revisions].map(
                (feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3"
                  >
                    <Check
                      className="bg-[#0000001f] p-[3px] rounded-full w-5 h-5"
                      style={{ color: plan.textColor }}
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-[#01594d] font-medium"
                          : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                )
              )} */}
              {[plan.concepts, ...plan.features, plan.revisions]
                .filter(Boolean)
                .map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="bg-[#0000001f] p-[3px] rounded-full w-5 h-5" style={{ color: plan.textColor }} />
                    <span className={plan.highlight ? "text-[#01594d] font-medium" : "text-gray-700"}>
                      {feature}
                    </span>
                  </div>
                ))}

            </div>

            <div className="flex justify-center w-full">
              <Button
                className={`card_button mx-auto ${plan.highlight
                  ? "bg-[#01594d] hover:bg-green-800"
                  : "bg-[#8ED462] hover:bg-green-500"
                  } text-white py-6 px-11 rounded-full text-lg`}
              >
                Choose plan
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
