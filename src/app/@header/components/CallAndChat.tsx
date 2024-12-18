import React from "react";
import { MessagesSquare, PhoneCall } from "lucide-react";
import Link from "next/link";

function CallAndChat() {
  return (
    <div className="flex items-center justify-end px-5 py-2 gap-4">
      <Link href="#" className="flex items-center gap-2 hover:underline group">
        <MessagesSquare className="text-white group-hover:text-actionLinkGold" />
        <span className="text-sm font-bold font-primary text-white group-hover:text-actionLinkGold group-hover:underline">
          Chat
        </span>
      </Link>
      <Link href="tel:+971582239328" className="flex items-center gap-2 hover:underline group">
        <PhoneCall className="text-white group-hover:text-actionLinkGold" />
        <span className="text-sm font-bold font-primary text-white group-hover:text-actionLinkGold group-hover:underline">
          +97-1582239328
        </span>
      </Link>
    </div>
  );
}

export default CallAndChat;
