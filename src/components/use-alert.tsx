"use client";
import { Alert } from "@material-tailwind/react";
import { setServers } from "dns";
import { useState } from "react";

type AlertType = "success" | "error";

interface Alert {
  message: string;
  type: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<Alert | null>(null);

  const launchAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 8000); // Alert disappears after 8 seconds
  };

  const launchSuccess = (message: string) => {
    launchAlert(message, "success");
  };

  const launchError = (message: string) => {
    launchAlert(message, "error");
  };

  const AlertComponent = () =>
    alert && (
      <div
        onClick={() => setAlert(null)}
        className={`${
          alert.type === "success"
            ? "bg-green text-white"
            : "bg-yellow text-black"
        } fixed bottom-0 md:bottom-[5%] start-0 md:start-auto md:end-[5%] w-full md:w-fit p-4 md:px-8 rounded-lg `}
      >
        {alert.message}
      </div>
    );

  return { launchSuccess, launchError, AlertComponent };
};

export default useAlert;
