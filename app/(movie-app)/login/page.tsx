"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "This field has to be filled.",
    })
    .max(500, {
      message: "Password can't be longer than 500 characters.",
    }),
  password: z
    .string()
    .regex(/^.{8,20}$/, {
      message: "Minimum 8 and maximum 20 characters.",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "At least one uppercase character.",
    })
    .regex(/(?=.*[a-z])/, {
      message: "At least one lowercase character.",
    })
    .regex(/(?=.*\d)/, {
      message: "At least one digit.",
    })
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
      message: "At least one special character.",
    }),
});

const Login = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
    }

    toast.success("You are now signed in!");
  }
  return (
    <Form {...form}>
      <div className="bg-primary-800 rounded-lg h-fit w-[300px] md:w-[400px] flex justify-center py-9 mt-12 m-auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <h1 className="text-2xl font-semibold">Login</h1>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-none"
                    placeholder="Email address "
                    {...field}
                  />
                </FormControl>
                <div className="h-[1px] bg-[#5A698F]"></div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-none"
                    type="password"
                    placeholder="Passwerd "
                    {...field}
                  />
                </FormControl>
                <div className="h-[1px] bg-[#5A698F]"></div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-secondary-400 text-white" type="submit">
            Login to your account
          </Button>
          <p className="flex gap-4">
            Don’t have an account?
            <Link className="block text-secondary-400" href={"/register"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default Login;
