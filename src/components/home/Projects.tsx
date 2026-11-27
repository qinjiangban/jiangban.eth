import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "lucide-react";

import { homeContent } from "@/lib/i18n/content/home";
import { pick, type LocaleProps } from "@/lib/i18n/content/types";
import { cn } from "@/lib/utils";

type ProjectRowProps = {
  title: string;
  tag: string;
  /** 平台标签，用中性色与类型标签区分 */
  platformTag?: string;
  href?: string;
  icon: ReactNode;
};

function ProjectRow({ title, tag, platformTag, href, icon }: ProjectRowProps) {
  const body = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white ring-1 ring-zinc-200/80">
        {icon}
      </span>

      <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-1.5 gap-y-1">
        <span className="mr-0.5 text-[15px] leading-6 font-medium text-zinc-900">
          {title}
        </span>
        {/* 标签作为一组参与换行，窄屏下不会只剩一个标签单独占行 */}
        <span className="flex items-center gap-1.5">
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand">
            {tag}
          </span>
          {platformTag ? (
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
              {platformTag}
            </span>
          ) : null}
        </span>
      </span>

      {href ? (
        <ArrowUpRightIcon
          className="size-4 shrink-0 text-zinc-400 transition-colors group-hover:text-brand"
          aria-hidden
        />
      ) : null}
    </>
  );

  const rowClass = "flex items-center gap-3 py-3";

  if (!href) {
    return <div className={rowClass}>{body}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={cn(rowClass, "group -mx-2 rounded-xl px-2 transition-colors hover:bg-zinc-50")}
    >
      {body}
    </a>
  );
}

export default function Projects({ locale }: LocaleProps) {
  const content = homeContent.projects;

  return (
    <section aria-labelledby="projects-title" className="w-full">
      <div className="rounded-[20px] border border-zinc-300 bg-white p-5">
        <h2
          id="projects-title"
          className="text-xl font-bold tracking-tight text-zinc-950"
        >
          {pick(content.title, locale)}
        </h2>

        <div className="mt-2 divide-y divide-zinc-100">
          <ProjectRow
            title={content.coolha.title}
            tag={pick(content.coolha.tag, locale)}
            href={content.coolha.href}
            icon={
              <Image
                src="/logo/coolha.png"
                alt=""
                width={40}
                height={40}
                className="size-full object-cover"
              />
            }
          />

          <ProjectRow
            title={pick(content.taiji.title, locale)}
            tag={pick(content.taiji.tag, locale)}
            href={content.taiji.href}
            icon={
              /* 使用项目站点自身的 logo.png */
              <Image
                src="/logo/taiji.png"
                alt=""
                width={40}
                height={40}
                className="size-full object-cover"
              />
            }
          />

          <ProjectRow
            title={pick(content.agentMerchant.title, locale)}
            tag={pick(content.agentMerchant.tag, locale)}
            platformTag={content.agentMerchant.platformTag}
            href={content.agentMerchant.href}
            icon={
              <Image
                src="/logo/agent-merchant.png"
                alt=""
                width={40}
                height={40}
                className="size-full object-cover"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
