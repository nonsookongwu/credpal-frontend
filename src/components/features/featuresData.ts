import { creditBuilder, paymentImg, SavingsImg, virtualCards } from "../../assets";


export const featureData = [
  {
    id: crypto.randomUUID(),
    title: "Payments",
    subtitle:
      "Enjoy a secure, reliable and convenient way to pay. Whether you're paying for a purchase, subscription or any other type of payment, CredPal is designed to make the process fast and easy.",
    borderRadius: "0px",
    image: paymentImg,
  },
  {
    id: crypto.randomUUID(),
    title: "Savings",
    subtitle:
      "Simplify your savings journey by setting a budget. Save with ease by setting goals, tracking your progress, and enabling automatic transfers with your bank account. It’s that easy!",
    borderRadius: "16px",
    image: SavingsImg,
  },
  {
    id: crypto.randomUUID(),
    title: "Virtual Cards",
    subtitle:
      "Create a virtual credit or cash card, make secure online purchases, keep track of your spending, and have complete visibility of where your funds are going. With advanced security features, you have the ability to set spending limits and exert control over your spending.",
    borderRadius: "16px",
    image: virtualCards,
  },
  {
    id: crypto.randomUUID(),
    title: "Credit Builder",
    subtitle:
      "Fund your virtual card and make payments everywhere. Use your CredPal virtual card to make purchases both online and offline with ease, and benefit from our reward-rich programs.",
    borderRadius: "16px",
    image: creditBuilder,
  },
];