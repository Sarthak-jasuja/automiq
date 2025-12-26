import { getQueryClient } from "@/trpc/server";
import { Client } from "../app/client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
const Page = async() => {
  const queryClient = getQueryClient();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Client />
      </HydrationBoundary>
    </div>
  );
};
export default Page;