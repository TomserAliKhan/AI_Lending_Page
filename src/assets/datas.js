import { code, email, imgIcon, message, video } from ".";

export let navdata=[
  {label:"Home",link:"/home", subdata:[]},
  {label:"Products",link:"" , subdata:[
    {img:message,text:"Text Generator",link:'/text-generator'},
    {img:imgIcon,text:"Image Generator",link:'/image-generator'},
     {img:code,text:"Code Generator",link:'/code-generator'},
    {img:video,text:"Video Generator",link:'/video-generator'},
    {img:email,text:"Email Generator",link:'/email-generator'}

  ]},
  {label:"Pages",link:'',subdata:[
    {text:"Dashbord",link:'/dashbord'},
    {text:"Pricing",link:'/pricing'},
    {text:"Blog Grids",link:'/blog'},
    {text:"Sign In",link:'/sign-in'},
    {text:"Sign Up",link:'/sign-up'},
    {text:"Reset Password",link:'/reset-password'},
    {text:"Privacy Policy",link:'/policy'},
    {text:"404 Error",link:'/404'},
    
  ]},
   {label:"Contect",link:"/contect",subdata:[]},
  

]