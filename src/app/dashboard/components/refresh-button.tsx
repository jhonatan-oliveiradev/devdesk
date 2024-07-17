"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { RefreshCwIcon } from "lucide-react";
import { useState } from "react";

const RefreshButton = () => {
  const [enabled, setEnabled] = useState(false);

  const router = useRouter();

  const handleRefreshPage = () => {
    setEnabled(true);

    router.refresh();

    setTimeout(() => {
      setEnabled(false);
    }, 1000);
  };

  const animateRefreshButtonIcon = enabled
    ? "group-enabled:animate-spin text-rose-600"
    : "";

  return (
    <Button
      className="group"
      variant="outline"
      size="icon"
      onClick={handleRefreshPage}
    >
      <RefreshCwIcon className={`size-4 ${animateRefreshButtonIcon}`} />
    </Button>
  );
};

export default RefreshButton;
