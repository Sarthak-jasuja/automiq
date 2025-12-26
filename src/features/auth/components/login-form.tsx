"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image" 
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useForm } from "react-hook-form"; 
import { toast } from "sonner"; 
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
//import {auth-client} from "@/lib/auth/client";
import { cn } from "@/lib/utils";
import { TypeOutline } from "lucide-react";
const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginFormValues = z.infer<typeof loginSchema>;
export function LoginForm() {
    const router = useRouter();
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = async (values: LoginFormValues) => {
        console.log(values);
    };
    const isPending = form.formState.isSubmitting;
    return (
        <Card className="w-full">
        <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl mb-2">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground text-sm sm:text-base">
                Sign in to your account
            </CardDescription>
        </CardHeader>
                <CardContent className="px-4 sm:px-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-4 sm:gap-6">
                                <div className="flex flex-col gap-3 sm:gap-4">
                                    <Button variant="outline"
                                        className="w-full h-10 sm:h-11 text-sm sm:text-base"
                                        type="button"
                                        disabled={isPending}>
                                            <Image src="/logos/google.svg" alt="Google Icon" width={16} height={16} className="mr-2 sm:w-5 sm:h-5" />Continue with Google
                                    </Button>
                                    <Button variant="outline"
                                        className="w-full h-10 sm:h-11 text-sm sm:text-base"
                                        type="button"
                                        disabled={isPending}>
                                            <Image src="/logos/github.svg" alt="Github Icon" width={16} height={16} className="mr-2 sm:w-5 sm:h-5" />Continue with Github
                                    </Button>
                                </div>
                                <div className="grid gap-4 sm:gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="name@example.com" 
                                                        className="h-10 sm:h-11 text-sm sm:text-base" 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm sm:text-base">Password</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="password" 
                                                        placeholder="••••••••" 
                                                        className="h-10 sm:h-11 text-sm sm:text-base" 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button 
                                        type="submit" 
                                        disabled={isPending}
                                        className="w-full h-10 sm:h-11 text-sm sm:text-base"
                                    >
                                        Log In
                                    </Button>
                                </div>
                                <div className="text-center text-xs sm:text-sm">
                                    Don't have an account?{" "}
                                    <Link href="/signup" className="text-primary hover:underline">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
    </Card>
    )
}
export default LoginForm;