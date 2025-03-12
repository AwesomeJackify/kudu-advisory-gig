import type { Service } from "../types/services";

const services: Service[] = [
  {
    title: "Asset Protection",
    description:
      "Are you concerned that your company has substantial assets, and these may be exposed to the inevitable trials and tribulations of business?",
    features: [
      "Quarterly management report",
      "Forecast for the next three months",
      "Review of your tax position"
    ],
    url: "/services/asset-protection"
  },
  {
    title: "Tax & Compliance Package",
    isMostPopular: true,
    description:
      "The first step to developing your financial systems is high-quality compliance. You have to get the bedrock set first before you can build from there. There is no getting around this!",
    features: [
      "Financial statement preparation",
      "Income Tax return preparation and filing",
      "GST return preparation and filing"
    ],
    url: "/services/tax-compliance"
  },
  {
    title: "Regular Catchups",
    description:
      "Taking your financial maturity to the next level. If you're not reviewing your quarterly financial performance promptly, then you're missing out on extremely valuable insights your numbers are telling you.",
    features: [
      "Quarterly management report",
      "Forecast for the next three months",
      "Review of your tax position"
    ],
    url: "/services/regular-catchups"
  }
];

export default services;