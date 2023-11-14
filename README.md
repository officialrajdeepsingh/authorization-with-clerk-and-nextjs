

# Getting Started
First clone the [authorization-with-clerk-and-nextjs](https://github.com/officialrajdeepsingh/authorization-with-clerk-and-nextjs) github repository locally.


## Setup

### clone and Install package

```bash
git clone https://github.com/officialrajdeepsingh/authorization-with-clerk-and-nextjs.git

# change the folder
cd authorization-with-clerk-and-nextjs

# install the packages
pnpm install
or
yarn install
```

### Environment Variable
Copy your environment variable from the clerk dashboard and paste it inside the .env.local file.

```env
# enname .env.example to .env.local

#  ---- paste here ----

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_******************************udHMuZGV2JA # add your NEXT PUBLIC CLERK PUBLISHABLE KEY
CLERK_SECRET_KEY=sk_test_******************f2WqqL # add your CLERK SECRET KEY

# ---- 

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

```


## development server
lastly, run your local development server:

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
