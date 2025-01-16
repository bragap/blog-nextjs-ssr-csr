"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"


const formSchema = z.object({
    content: z.string().min(1).max(5000),
    title: z.string().min(1).max(100),
    userId: z.number().int().positive(),
    id: z.number().int().positive(),
})

export function CreatePost() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
            title: "",
            userId: 1,
            id: 1
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        axios.post("/api/posts", values)


        console.log(values)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Post title</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert the title here" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert the content here" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your content.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
