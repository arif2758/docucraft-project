"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IntegrationDirPage() {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: "Stripe",
      description: "একটি অনলাইন পেমেন্ট প্রসেসিং প্ল্যাটফর্ম",
      category: "পেমেন্ট",
      logo: "/stripe-logo.png",
      link: "https://stripe.com/",
    },
    {
      id: 2,
      name: "PayPal",
      description: "আরেকটি জনপ্রিয় অনলাইন পেমেন্ট প্রসেসিং প্ল্যাটফর্ম",
      category: "পেমেন্ট",
      logo: "/paypal-logo.png",
      link: "https://www.paypal.com/",
    },
    {
      id: 3,
      name: "Mailchimp",
      description: "একটি ইমেইল মার্কেটিং প্ল্যাটফর্ম",
      category: "মার্কেটিং",
      logo: "/mailchimp-logo.png",
      link: "https://mailchimp.com/",
    },
    {
      id: 4,
      name: "Zapier",
      description: "বিভিন্ন অ্যাপ্লিকেশনকে সংযুক্ত করার জন্য একটি automation platform",
      category: "অটোমেশন",
      logo: "/zapier-logo.png",
      link: "https://zapier.com/",
    },
  ]);
  
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Integrations Directory</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white rounded-md shadow-md p-4 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <Image
                src={integration.logo}
                alt={integration.name}
                height={500}
                width={500}
                className="w-12 h-12 rounded-md"
              />
              <h3 className="text-lg font-medium">{integration.name}</h3>
            </div>
            <p className="text-gray-700 mb-2">{integration.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">{integration.category}</span>
              <Link
                href={integration.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
