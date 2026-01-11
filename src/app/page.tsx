"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
const Page = () => {
  const Data = authClient.useSession();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(Data)}
      {Data && (<Button onClick={() => authClient.signOut()}>Sign Out</Button>)}


    </div>
  )
} 

export default Page
