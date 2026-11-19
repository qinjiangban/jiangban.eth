import Link from "next/link";
import Image from "next/image";

import { localizePath } from "@/lib/i18n/config";
import { homeContent } from "@/lib/i18n/content/home";
import { pick, type LocaleProps } from "@/lib/i18n/content/types";

export default function SiteBadge({ locale }: LocaleProps) {
  const content = homeContent.siteBadge;
  const forAgentsLabel = pick(content.forAgents, locale);

  return (
    <div className="mt-12 flex flex-col items-center gap-2">
      <p className="flex flex-wrap items-center justify-center gap-x-1 text-xs leading-5 text-zinc-500">
        <span>{pick(content.accessPrefix, locale)}</span>
        <Link
          href="https://app.ens.domains/jiangban.eth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono leading-5 text-zinc-500 transition-colors hover:text-brand"
          aria-label="jiangban.eth on ENS"
        >
          <Image src="/logo/ENS.jpg" alt="ENS" width={16} height={16} className="block shrink-0 rounded-full" />
          jiangban.eth
        </Link>
        <span>{pick(content.accessSuffix, locale)}</span>
      </p>

      <Link
        href={localizePath(locale, "/for-agents")}
        className="text-[10px] font-medium tracking-wide text-zinc-400 transition-colors hover:text-brand"
        aria-label={forAgentsLabel}
        title={forAgentsLabel}
      >
        {forAgentsLabel}
      </Link>
    </div>
  );
}
