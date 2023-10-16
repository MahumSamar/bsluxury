import {
  americanExpress,
  callUs,
  chat,
  dinersClub,
  discover,
  facebook,
  fourColumns,
  giftCards,
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  instagram,
  mastercard,
  oneColumns,
  paypal,
  pinterest,
  shipping,
  threeColumns,
  tumblr,
  twitter,
  visa,
  youtube,
} from "@/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "shop",
    title: "Shop",
  },
  {
    id: "collections",
    title: "Collections",
  },
  {
    id: "news",
    title: "News",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const priceSelector = [
  {
    value: "lth",
    label: "Low to High",
  },
  {
    value: "htl",
    label: "High to Low",
  },
];

export const recommendedProducts = [
  {
    id: 1,
    image: img01,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 2,
    image: img02,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 3,
    image: img01,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 4,
    image: img02,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 5,
    image: img01,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 6,
    image: img02,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 7,
    image: img01,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    id: 8,
    image: img02,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
];

export const features = [
  {
    icon: shipping,
    title: "Free Shipping",
    description: "When you spend $50",
  },
  {
    icon: callUs,
    title: "Call Us Anytime",
    description: "+11223344",
  },
  {
    icon: chat,
    title: "Chat With Us",
    description: "We offer 24-hour chat support",
  },
  {
    icon: giftCards,
    title: "Gift Cards",
    description: "For your loved one, in any amount",
  },
];

// footer links
export const navigate = [
  {
    title: "Women",
    link: "/",
  },
  {
    title: "Men",
    link: "/",
  },
  {
    title: "Kids & Babies",
    link: "/",
  },
  {
    title: "Pet",
    link: "/",
  },
  {
    title: "Jewelry",
    link: "/",
  },
  {
    title: "SALE",
    link: "/",
  },
];

export const information = [
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Delievery Information",
    link: "/",
  },
  {
    title: "Returns",
    link: "/",
  },
  {
    title: "Privacy & Policy",
    link: "/",
  },
  {
    title: "Terms & Conditions",
    link: "/",
  },
];

export const customerService = [
  {
    title: "Customer Service",
    link: "/",
  },
  {
    title: "Email Sign-up",
    link: "/",
  },
  {
    title: "Size Charts",
    link: "/",
  },
  {
    title: "Cookie Preferences",
    link: "/",
  },
  {
    title: "Secure Online Shopping",
    link: "/",
  },
  {
    title: "Site Index",
    link: "/",
  },
];

export const language = [
  {
    value: "eng",
    label: "English",
  },
  {
    value: "urdu",
    label: "Urdu",
  },
];

export const socials = [
  { icon: facebook, name: "facebook", link: "https://www.facebook.com" },
  { icon: twitter, name: "twitter", link: "https://www.twitter.com" },
  { icon: instagram, name: "instagram", link: "https://www.instagram.com" },
  { icon: pinterest, name: "pinterest", link: "https://www.pinterest.com" },
  { icon: youtube, name: "youtube", link: "https://www.youtube.com" },
  { icon: tumblr, name: "tumblr", link: "https://www.tumblr.com" },
];

export const cards = [
  {
    icon: visa,
    name: "visa",
  },
  {
    icon: mastercard,
    name: "mastercard",
  },
  {
    icon: americanExpress,
    name: "americanExpress",
  },
  {
    icon: paypal,
    name: "paypal",
  },
  {
    icon: dinersClub,
    name: "dinersClub",
  },
  {
    icon: discover,
    name: "discover",
  },
];

// products selector values
export const category = [
  {
    label: "Category",
    value: "none",
  },
  {
    label: "Women",
    value: "women",
  },
  {
    label: "Men",
    value: "men",
  },
  {
    label: "Kids & Babies",
    value: "kids&babies",
  },
  {
    label: "Pet",
    value: "pet",
  },
  {
    label: "Jewelry",
    value: "jewelry",
  },
  {
    label: "SALE",
    value: "sale",
  },
];

export const size = [
  {
    label: "Size",
    value: "none",
  },
  {
    label: "X-Small",
    value: "xs",
  },
  {
    label: "Small",
    value: "sm",
  },
  {
    label: "Large",
    value: "lg",
  },
  {
    label: "X-Large",
    value: "xl",
  },
];

export const color = [
  {
    label: "Color",
    value: "none",
  },
  {
    label: "White",
    value: "white",
  },
  {
    label: "Black",
    value: "black",
  },
  {
    label: "Pink",
    value: "pink",
  },
  {
    label: "Green",
    value: "green",
  },
];

export const numberOfColumns = [
  { value: 2, icon: threeColumns, name: "three" },
  { value: 3, icon: fourColumns, name: "four" },
  { value: 1, icon: oneColumns, name: "one" },
];

export const products01 = [
  {
    image: img03,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    image: img04,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
    discount: 40,
    originalPrice: "$65.00",
  },
  {
    image: img05,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
];

export const products02 = [
  {
    image: img05,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    image: img06,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    image: img07,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
  {
    image: img08,
    category: "Women",
    title: "Floral Print Wrap Dress",
    price: "$21.50",
  },
];

export const products03 = [
  {
    image: img07,
    category: "Women",
    title: "Floral Print Wrap Dress",
    description:
      "Maecenas vel nisl blandit lorem fermentum rutrum. Phasellus consectetur lacus sodales, euismod urna non, interdum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean commodo purus neque, iaculis vestibulum mi tristique a. Donec tristique augue magna, ac gravida ligula tempus vitae. Aliquam pulvinar ex vel tellus tincidunt, in luctus turpis posuere. Nulla tincidunt scelerisque leo et consectetur.",
    price: "$21.50",
    discount: 40,
    originalPrice: "$134.00",
  },
  {
    image: img08,
    category: "Women",
    title: "Floral Print Wrap Dress",
    description:
      "Maecenas vel nisl blandit lorem fermentum rutrum. Phasellus consectetur lacus sodales, euismod urna non, interdum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean commodo purus neque, iaculis vestibulum mi tristique a. Donec tristique augue magna, ac gravida ligula tempus vitae. Aliquam pulvinar ex vel tellus tincidunt, in luctus turpis posuere. Nulla tincidunt scelerisque leo et consectetur.",
    price: "$21.50",
  },
];
