import { UserProfile } from "@clerk/nextjs";

function ProfilePage() {

  return (<div className="mt-16 flex items-center justify-center">
    <UserProfile path="/profile" routing="path" />
  </div>)

}

export default ProfilePage;