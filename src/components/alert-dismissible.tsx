"use client";

import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface Props {
  linkUrl?: string;
  linkMessage?: string;
  message: string;
}

export function AlertDismissible({ linkUrl, linkMessage, message }: Props) {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="bg-maroon text-white p-4 rounded-none flex items-center justify-center text-sm sm:text-md md:text-lg">
          <div>
            {message}
            {linkUrl && (
              <Link
                href={linkUrl}
                className="underline ml-2 font-bold"
                target="_blank"
              >
                {linkMessage}
              </Link>
            )}
          </div>
          <div>
            <span
              className="w-fit ml-4 hover:opacity-90"
              onClick={() => setShow(false)}
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
