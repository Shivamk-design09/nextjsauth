This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



// ye same case mongoose.model ka h
## how to connect mongodb atlas in Nextjs
step 1 -Basic Idea
next js is a full stack framework hai
matlab ye forntend ke saath backedn bhi handle karta h

jab ham backend part me mongoDB se connect karte h 
to ham mongoose.connect() call karte h

leking next js me ek problem aati h
har baar file change hone pe ye new api call karta h 
aur agat hum seedha mongoose.connect() likh dete h to
har baar ek naya data baase connect hoga ye same 

# Next js use server less funcitons 
Server se data lene ke baad vo server se disconnec ho jata
fir jese hi ham dubara code run karenge next js dubara se connect hoga lekin mongo db me connections ki limit hoti h or 
 to many connections errro, app slow, app crash , and warning

## soluion to connection errors
ek baar connection bana lo or use cache me store karlo
ye caching ham global object me karte h
## agli baar jab code chale to check karo 
agar pehle se connection h to use karo
agar nahi h to new connection banao


## what is global in nextjs
in global we can acces anyewhere in project it is an object
we can add variables in global

global.name = 'shviam'
console.log(global.name) = 'shivam'

we can store data 
jo pure server par life time milega 






