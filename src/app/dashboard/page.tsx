import { currentUser } from '@clerk/nextjs';


export default async function Dashboard() {

  const user = await currentUser();

  if (!user) return <div> Not logged in </div>;

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1> Dashboard </h1>
      <div>Hello, welcome to {user?.firstName} {user?.lastName}</div>
    </main>
  )

}
