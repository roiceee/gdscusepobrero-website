"use client";

import Link from "next/link";

interface Props {
  linkUrl?: string;
  linkMessage?: string;
  message: string;
}

export function AlertDismissible({ linkUrl, linkMessage, message }: Props) {
  return (
    <>
      <div className="bg-maroon text-white p-4 rounded-none justify-center text-sm sm:text-md md:text-lg">
        <div className="text-center mx-auto mr-0">
          {message}
          {linkUrl && (
            <Link href={linkUrl} className="underline ml-2 font-bold" target="_blank">
              {linkMessage}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
