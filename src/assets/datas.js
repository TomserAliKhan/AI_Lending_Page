import { code, email, imgIcon, message, tabImage1, tabImage1Dark, tabImage2, tabImage2Dark, tabImage3, tabImage3Dark, tabImage4, tabImage4Dark, tabImage5, tabImage5Dark, user1, user2, user3, user4, user5, user6, video } from "./index.js";

export let navdata = [
  { label: "Home", link: "/", subdata: [] },
  {
    label: "Products", link: "", subdata: [
      { img: message, text: "Text Generator", link: '/text-generator' },
      { img: imgIcon, text: "Image Generator", link: '/image-generator' },
      { img: code, text: "Code Generator", link: '/code-generator' },
      { img: video, text: "Video Generator", link: '/video-generator' },
      { img: email, text: "Email Generator", link: '/email-generator' }

    ]
  },
  {
    label: "Pages", link: '', subdata: [
      { text: "Dashbord", link: '/dashbord' },
      { text: "Pricing", link: '/pricing' },
      { text: "Blog Grids", link: '/blog' },
      { text: "Sign In", link: '/sign-in' },
      { text: "Sign Up", link: '/sign-up' },
      { text: "Reset Password", link: '/reset-password' },
      { text: "Privacy Policy", link: '/policy' },
      { text: "404 Error", link: '/404' },

    ]
  },
  { label: "Contect", link: "/contect", subdata: [] },


]


export let fingurtipdata = [
  { img: message, text: "Text Generator", path: tabImage1, darkPath: tabImage1Dark },
  { img: imgIcon, text: "Image Generator", path: tabImage2, darkPath: tabImage2Dark },
  { img: code, text: "Code Generator", path: tabImage3, darkPath: tabImage3Dark },
  { img: video, text: "Video Generator", path: tabImage4, darkPath: tabImage4Dark },
  { img: email, text: "Email Generator", path: tabImage5, darkPath: tabImage5Dark }
]

export let userData = [{
  name: "Ralph Edwards",
  img: user1, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}, {
  name: "Albert Flores",
  img: user2, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}
  , {
  name: "Jacob Jones",
  img: user3, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}, {
  name: "Jenny Wilson",
  img: user4, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}, {
  name: "Courtney Henry",
  img: user5, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}, {
  name: "Dianne Russell",
  img: user6, company: "Big Kahuna Burger Ltd",
  disc: "As a Senior Software Developer I found TailAdmin perfect write code that easy can be used in my projects, which some are production already."
}]


export let prices = [
  {
    status: "Free",
    price: "$0",
    discription: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis.",
    class:"border-[0.5px] text-black",
    button: "Try it for free",
    options: ["Some limited features only","400 messaging limits","Limited Projects","20,000 Words"]

  },
  {
    status: "Plus plan",
    price: "$20",
    annualPrice:"$16",
    discription: "Billed at periods under limits, see rates of people who use.",
    class:"bg-[#8c7cff] text-white",
    button: "Purchase Now",
    options: ["Everything in Free","2000 messaging limits","Unlimited Projects","Open AI Key Integration","80,000 Words","Consistent support"]

  },
    {
    status: "Pro plan",
    price: "$30",
    annualPrice:"$24",
    discription: "Billed at periods under limits, see rates of people who use.",
    class:"bg-black text-white",
    button: "Purchase Now",
    options: ["Everything in Free","5000 messaging limits","Unlimited Projects","Open AI Key Integration","1,00,000 Words","Consistent support"]

  },
    {
    status: "Enterprise",
    price: "Let's talk",
    discription: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis.",
    class:"bg-black text-white",
    button: "Contact Sales",
    options: ["Everything in Free","5000 messaging limits","Unlimited Projects","Open AI Key Integration","Unlimited Words","Consistent support"]

  }
]

export let QA=[
  {question:"Do i get free updates ?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus magna quis tellus euismod, eget pharetra leo mollis. Donec eget lacus non elit blandit pharetra vitae volutpat libero."
  },
  {question:"What does the number of Projects refer to?",
    answer:"The number of Projects refers to the total number of separate workspaces you can create and manage within your account. Each project can have its own settings, team members, and resources."
  },
  {question:"Can i upgrade to a higher plan ?",
    answer:"Yes, you can upgrade to a higher plan at any time. When you upgrade, you'll be charged the prorated difference for the remainder of your current billing cycle. Your new features will be available immediately after upgrading."
  },
  {question:"What does Unlimited Projects mean?",
    answer:"Unlimited Projects means you can create as many projects as you need without any restrictions. This allows you to organize your work efficiently without worrying about hitting a project limit."
  },
  {question:"How can i add Open Ai Key?",
    answer:"To add your OpenAI API key, go to your account settings and navigate to the API Key section. Click on Add New Key, paste your OpenAI API key, and save your changes. The key will be securely stored and used for all AI-powered features."
  },
]


export let footer=[
  {
    row1:['Services','Status','Pricing','FAQ','Help Docs','Privacy Policy','Stay in Touch']
  },
  {
    row2:['Features','HTML File Upload','HTML website hosting', 'Freee image Hosting','Upload PDF Online','Free Zip file hosting']
  },
  {row3:['Account','Login','Sign Up','Reset Password','Support']}
  
]

