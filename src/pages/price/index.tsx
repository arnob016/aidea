import React from 'react';

interface PricingPlanData {
  title: string;
  price: string;
  features: string[];
}

const PricingTable: React.FC = () => {
  const plansData: PricingPlanData[] = [
    { 
      title: 'BASIC', 
      price: '$20', 
      features: [
        'Lorem ipsum dolor',
        '15GB ',
        '256mb ',
        '1 Min',
        '24/7 '
      ]
    },
    { 
      title: 'STANDARD', 
      price: '$36', 
      features: [
        'Lorem ipsum dolor',
        '25GB ',
        '512mb ',
        '3 Min',
        '24/7 '
      ]
    },
    { 
      title: 'PREMIUM', 
      price: '$52', 
      features: [
        'Lorem ipsum dolor',
        '40GB ',
        '1Gb ',
        '5 Min',
        '24/7 '
      ]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 m-8 justify-center items-center">
      {/* Empty grid item */}
      <div className="p-4"></div>
      {plansData.map((plan, index) => (
        <div key={index} className="border rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
          <div className={`w-full rounded-t-lg bg-${plan.title.toLowerCase()}-500 text-white text-center p-4 mb-4`}>
            <h2 className="text-2xl font-semibold">{plan.title}</h2>
            <p className="text-4xl font-bold mt-2">{plan.price}</p>
          </div>
          <ul className="mt-2 text-center">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="mb-1">{feature}</li>
            ))}
          </ul>
          <button className="mt-4 w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">Buy</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
