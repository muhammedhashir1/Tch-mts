This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<div className="flex space-x-4 overflow-hidden p-8 mb-12">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative bg-white overflow-hidden w-80 h-314.2 px-10 py-6">
            {/* Quote Images */}
            <Image
              src="/quotes/left.svg" // Add the correct path for your left quote image
              alt="Left Quote"
              width={40}
              height={40}
              className="absolute top-0 left-4"
            />

            <Image
              src="/quotes/right.svg" // Add the correct path for your right quote image
              alt="Right Quote"
              width={40}
              height={40}
              className="absolute bottom-0 right-4"
            />

            {/* Inner Div */}
            <div className="h-271 bg-white">
              {/* Quote */}
              <p className="font-barlow text-15 font-medium text-center text-gray-600">
                The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area.
                Their Chat function is what has been missing from online home search. The experts are always available
                with correct answers to anything.
              </p>

              {/* Author */}
              <p className="font-barlow text-18 font-bold text-center text-black">John Brown</p>
            </div>
          </div>
        ))}
      </div>