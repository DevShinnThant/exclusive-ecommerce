"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";

import { z } from "zod";
const contactFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5),
  phone: z.string().min(9).max(11),
  message: z.string(),
});

type SchemaType = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: SchemaType) {
    console.log(values);
  }

  return (
    <div className="max-width py-20 w-full">
      <div className="flex items-center gap-3">
        <Link className="text-gray-500 text-sm tracking-wide" href="/">
          Home
        </Link>
        <div className="select-none">/</div>
        <Link href="/contact" className="text-sm tracking-wide">
          Contact
        </Link>
      </div>
      <div className="flex w-full mt-10 items-center gap-8">
        <Card className="w-[340px] p-6">
          <CardContent>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-9 h-9 rounded-full bg-secondary_two flex items-center text-white justify-center">
                <PiPhoneCall />
              </div>
              <div className="font-medium tracking-wide text-sm">
                Call To Us
              </div>
            </div>
            <div className="flex text-sm flex-col items-start gap-2 text-black font-light">
              <div>We are available 24/7, 7 days a week.</div>
              <div>Phone: +959761653208</div>
            </div>
            <Separator className="mt-8" />
            <div className="flex py-6 items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-secondary_two flex items-center text-white justify-center">
                <FiMail />
              </div>
              <div className="font-medium tracking-wide text-sm">
                Write To Us
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 text-sm tracking-wide font-light text-black">
              <div>
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div>Emails: shinthantequi@gmail.com</div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 p-8">
          <CardContent className="p-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex items-center gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your Phone"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-8">
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="h-[160px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-end mt-8">
                  <Button
                    className="w-[180px] h-[44px] bg-button_two hover:bg-button_hover"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
