import { useState } from "react";

function InfoCard() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      tier: "INICIO",
      price: { monthly: "Gratis", annual: "Gratis" },
      features: [
        "1 proyecto",
        "100 MB de almacenamiento",
        "Soporte por email",
      ],
      description: "Para probar la plataforma",
      highlighted: false,
      popular: false,
    },
    {
      tier: "PRO",
      price: { monthly: "$38", annual: "$29" },
      features: [
        "10 proyectos activos",
        "5 GB de almacenamiento",
        "Soporte prioritario",
      ],
      description: "Para profesionales",
      highlighted: true,
      popular: true,
    },
    {
      tier: "BUSINESS",
      price: { monthly: "$56", annual: "$45" },
      features: [
        "Proyectos ilimitados",
        "50 GB de almacenamiento",
        "Soporte 24/7",
      ],
      description: "Para equipos",
      highlighted: false,
      popular: false,
    },
    {
      tier: "ENTERPRISE",
      price: { monthly: "$99", annual: "$79" },
      features: [
        "Todo en Business",
        "Almacenamiento ilimitado",
        "Manager dedicado"
      ],
      description: "Para grandes empresas.",
      highlighted: false,
      popular: false,
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Elige tu plan
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Selecciona el plan .
        </p>
        <div className="inline-flex rounded-lg border-2 border-indigo-500 overflow-hidden">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`py-2 px-5 text-sm font-medium transition-colors duration-150 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
              ${billingCycle === "monthly" ? "bg-indigo-500 text-white" : "text-gray-600 hover:bg-indigo-50"}
            `}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`py-2 px-5 text-sm font-medium transition-colors duration-150 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
              ${billingCycle === "annual" ? "bg-indigo-500 text-white" : "text-gray-600 hover:bg-indigo-50"}
            `}
          >
            Anual
            <span className="ml-1 text-xs opacity-75">(-20%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const isSelected = selectedPlan === index;
          const price = billingCycle === "monthly" ? plan.price.monthly : plan.price.annual;
          const period = price === "Gratis" ? "" : "/mes";

          return (
            <div
              key={index}
              className={`
                relative rounded-xl p-6 flex flex-col
                transition-all duration-200
                ${plan.highlighted
                  ? "border-2 border-indigo-500 shadow-lg shadow-indigo-500/10"
                  : "border-2 border-gray-200 hover:border-gray-300"
                }
                ${isSelected ? "ring-2 ring-indigo-300 ring-offset-2" : ""}
              `}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-2">
                {plan.tier}
              </h3>

              <div className="flex items-baseline pb-4 mb-4 border-b border-gray-100">
                <span className="text-4xl font-bold text-gray-900">{price}</span>
                {period && <span className="text-sm text-gray-400 ml-1">{period}</span>}
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-indigo-500" : "text-gray-400"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(isSelected ? null : index)}
                className={`
                  w-full py-2.5 px-4 rounded-lg text-sm font-semibold
                  transition-all duration-200 cursor-pointer
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                  ${plan.highlighted
                    ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-md shadow-indigo-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                  active:scale-[0.98]
                `}
              >
                {isSelected ? "✓ Seleccionado" : "Elegir plan"}
              </button>

              <p className="text-xs text-gray-400 mt-3 text-center">{plan.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfoCard;