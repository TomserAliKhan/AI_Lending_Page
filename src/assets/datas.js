import { code, email, imgIcon, message, tabImage1, tabImage1Dark, tabImage2, tabImage2Dark, tabImage3, tabImage3Dark, tabImage4, tabImage4Dark, tabImage5, tabImage5Dark, video } from ".";

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


export let fingurtipdata=[
    {img:message,text:"Text Generator",path:tabImage1, darkPath: tabImage1Dark},
    {img:imgIcon,text:"Image Generator",path:tabImage2, darkPath: tabImage2Dark},
     {img:code,text:"Code Generator",path:tabImage3, darkPath: tabImage3Dark},
    {img:video,text:"Video Generator",path:tabImage4, darkPath: tabImage4Dark},
    {img:email,text:"Email Generator", path:tabImage5, darkPath: tabImage5Dark}
  ]