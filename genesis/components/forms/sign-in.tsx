'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"

const signInSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.refine((password) => /[A-Z]/.test(password), {
			message: 'Password must contain at least one uppercase English letter.',
		})
		.refine((password) => /[a-z]/.test(password), {
			message: 'Password must contain at least one lowercase English letter.',
		})
		.refine((password) => /[0-9]/.test(password), {
			message: 'Password must contain at least one digit.',
		})
		.refine((password) => /[#?!@$%^&*-]/.test(password), {
			message: "Password must contain at least one special character",
		})
});

const SignInForm = () => {

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof signInSchema>) => {
		// try {
		// 	// await signIn(data);
		// 	toast('Signed in successfully');
		// } catch (error) {
		// 	toast(error.message);
		// }
		toast({
			title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
		})
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
			<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem className=''>
							<FormControl>
								<Input placeholder="Email Address" type='email' {...field} className='rounded-lg' />
							</FormControl>
							<FormMessage className='text-[85%] mt-[0.5rem]' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem className=''>
							<FormControl>
								<Input placeholder="Enter password" type='password'  {...field} className='rounded-lg' />
							</FormControl>
							<FormMessage className='text-[85%] mt-[0.5rem]' />
						</FormItem>
					)}
				/>
				<Button type='submit' className='mb-4 bg-primary text-primary-foreground w-full shadow-primary rounded-lg'>Sign In</Button>
			</form>
		</Form>
	);
}


export default SignInForm