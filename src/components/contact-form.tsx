"use client";

import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useRef, useState } from "react";
import useAlert from "./use-alert";

const isEmpty = (value: string) => value.trim() === "";

export function ContactForm() {
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const { launchError, launchSuccess, AlertComponent } = useAlert();

  const ref = useRef<HTMLDivElement>(null);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      setSendStatus("sending");
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const formData = new FormData(target);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      const recaptcha = formData.get("g-recaptcha-response") as string;

      if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
        launchError("Please fill up all fields.");
        setSendStatus("idle");
        return;
      }

      if (recaptcha === "") {
        launchError("Please complete the reCAPTCHA.");
        setSendStatus("idle");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          recaptcha,
        }),
      });

      if (response.ok) {
        launchSuccess("Message sent!");
        target.reset();
        setSendStatus("sent");
      } else {
        //reset recaptcha
        setSendStatus("idle");
        const data = await response.json();
        launchError(data.message);
      }
      grecaptcha.reset();
    },
    [launchError, launchSuccess]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Card color="transparent" shadow={false} ref={ref}>
        <form className="mb-2 max-w-screen-lg text-white" onSubmit={onSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3">
              Your Name
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              type="text"
              className=" focus:!border-t-yellow focus:border-yellow focus:!border-[3px] text-black placeholder-white bg-white"
              name="name"
            />
            <Typography variant="h6" className="-mb-3">
              Your Email
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              type="email"
              className=" focus:!border-t-yellow focus:border-yellow focus:!border-[3px] text-black placeholder-white  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
            />
            <Typography variant="h6" className="-mb-3">
              Message
            </Typography>
            <Textarea
              size="lg"
              className=" focus:!border-t-yellow focus:border-yellow focus:!border-[3px] text-black placeholder-white bg-white"
              resize
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="message"
            />
            <div
              className="g-recaptcha"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
            ></div>
          </div>
          <div className="text-end lg:text-start mt-6">
            <Button
              className="bg-maroon w-full sm:w-fit px-20"
              size="lg"
              type="submit"
            >
              {sendStatus === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Card>
      <AlertComponent />
    </>
  );
}
