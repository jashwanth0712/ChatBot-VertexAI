// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "./button.jsx"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "./form.jsx"
// import { Switch } from "./switch.jsx"
// import { toast } from "./toast.jsx"

// const FormSchema = z.object({
//   marketing_emails: z.boolean().default(false).optional(),
//   security_emails: z.boolean(),
// })

// export function SwitchForm() {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       security_emails: true,
//     },
//   })

//   function onSubmit(data) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
//         <div>
//           <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                       Email handling
//                     </FormLabel>
//                     <FormDescription>
//                       allow us to handle your emails
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="security_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">Read Emails</FormLabel>
//                     <FormDescription>
//                     read see mails and analyse..
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                       disabled
//                       aria-readonly
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                     Calender handling
//                     </FormLabel>
//                     <FormDescription>
//                     allow calender handling

//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                     Add events into calender
//                     </FormLabel>
//                     <FormDescription>
//                     can add events into calender
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//            <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                     whatsapp message access
//                     </FormLabel>
//                     <FormDescription>
//                     take access to whatsapp to message when an event is scheduled

//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//            <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                     Call handling
//                     </FormLabel>
//                     <FormDescription>
//                     allow phone call handling

//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                     numbers that can be allowed
//                     </FormLabel>
//                     <FormDescription>
//                     can add events into calender
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
            
//           </div>
//         </div>
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

