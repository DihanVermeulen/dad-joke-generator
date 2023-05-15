import React, { useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "../@types/BeforeInstallPrompt";
import { PWAIcon } from "../assets/icons/PWAIcon";

const InstallPWAButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    (deferredPrompt as BeforeInstallPromptEvent).prompt();
    (deferredPrompt as BeforeInstallPromptEvent).userChoice.then(
      (choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installation accepted by the user.");
          setShowInstallButton(false);
        } else {
          console.log("PWA installation dismissed by the user.");
        }
        setDeferredPrompt(null);
      }
    );
  };

  return (
    <>
      {showInstallButton && (
        <button className="clean__button" onClick={handleInstallClick}>
          <PWAIcon width={30} />
          <p style={{fontSize: 12}}>Install</p>
        </button>
      )}
    </>
  );
};

export default InstallPWAButton;
