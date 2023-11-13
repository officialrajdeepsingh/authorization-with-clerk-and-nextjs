import { currentUser } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs';
// import { useUser } from "@clerk/nextjs";

export default async function Dashboard() {

  // const user = auth();
  const user = await currentUser();


  // if (!isLoaded || !isSignedIn) {
  //   return (<main className="flex flex-col items-center justify-between p-24">
  //     <h1> Login </h1>
  //   </main>)
  // }
  // publicRoutes: ["/dashboard"]
  // console.log("my get user : ", user)

  if (!user) return <div> Not logged in </div>;

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1> Dashboard </h1>
      <div>Hello, welcome to {user?.firstName} {user?.lastName}</div>
    </main>
  )

}
