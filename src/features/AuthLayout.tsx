import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-0">
            <div className="w-full max-w-md">
                <div className="flex items-center justify-center mb-1.5">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logos/logo.svg" alt="Automiq Logo" width={32} height={32} />
                        <span className="text-xl font-bold">Automiq</span>
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
};
export default AuthLayout;