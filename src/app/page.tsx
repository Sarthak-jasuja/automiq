import prisma from "@/lib/db";

const Page = async() => {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      {JSON.stringify(users)}
    </div>
  );
};
export default Page;