'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
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

const SignupSchema = z.object({
	fullName: z.string().min(3).max(50),
	email: z.string().email(),
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
		}),
	confirmPassword: z
		.string(),
	terms: z.boolean().default(false).refine((data) => data === true, {
		message: 'You must agree to the terms and conditions.'
	}),
})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});


const SignUpForm = () => {

	const form = useForm<z.infer<typeof SignupSchema>>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
			terms: false,
		},
	});

	function onSubmit(values: z.infer<typeof SignupSchema>) {
		toast({
			title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
				<FormField
					control={form.control}
					name='fullName'
					render={({ field }) => (
						<FormItem className=''>
							<FormControl>
								<Input placeholder="Full Name" {...field} className='rounded-lg' />
							</FormControl>
							<FormMessage className='text-[85%] mt-[0.5rem]' />
						</FormItem>
					)}
				/>
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
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem className=''>
							<FormControl>
								<Input placeholder="Confirm password" type='password' {...field} className='rounded-lg' />
							</FormControl>
							<FormMessage className='text-[85%] mt-[0.5rem]' />
						</FormItem>
					)}
				/>
				<Button type='submit' className='mb-4 bg-primary text-primary-foreground w-full shadow-primary rounded-lg'>Create Account</Button>
				<FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center space-x-3 space-y-0 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none text-[85%]">
                <FormLabel>
                  I agree to the terms of service and privacy policy.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
			</form>
		</Form>
	)
}

export default SignUpForm