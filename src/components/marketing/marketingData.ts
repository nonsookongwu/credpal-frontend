import {
  move,
  orangeButton,
  travel,
  shop,
  pay,
  payButton,
  shopButton,
  travelButton,
} from "../../assets";

export const marketData = [
  {
    id: crypto.randomUUID(),
    title: "Move with",
    subtitle:
      "CredPal enables users to pay for Bolt rides and food orders, with the option to pay now or pay later, based on the available payment options.",
    headerIcon: move,
    ctaIcon: orangeButton,
    bgColor: "#F6F0EF",
  },
  {
    id: crypto.randomUUID(),
    title: "Travel with",
    subtitle:
      "CredPal users can pay for bills and services with the option to pay now or pay later, depending on the payment options available.",
    headerIcon: travel,
    ctaIcon: travelButton,
    bgColor: "#F4F1F7",
  },
  {
    id: crypto.randomUUID(),
    title: "Pay with",
    subtitle:
      "CredPal users have the flexibility to pay for bills and services with the option to pay now or pay later, depending on the available payment options.",
    headerIcon: pay,
    ctaIcon: payButton,
    bgColor: "#E8F4FF",
  },
  {
    id: crypto.randomUUID(),
    title: "Shop with",
    subtitle:
      "Credpal’s marketplace offers a wide range of products from various merchants, and users can choose to pay for their purchases in instalments.",
    headerIcon: shop,
    ctaIcon: shopButton,
    bgColor: "#EBF1FF",
  },
];