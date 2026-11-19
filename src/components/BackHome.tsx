'use client'

import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

import { localizePath } from "@/lib/i18n/config"
import type { Locale } from "@/lib/i18n/config"
import { messages } from "@/lib/i18n/messages"
import { glassControl } from "@/lib/ui"

/** 返回首页按钮：按当前语种回到对应语言的首页 */
export default function BackHome({ locale = "zh" }: { locale?: Locale }) {
    return (
        <>
            <Link
                href={localizePath(locale, "/")}
                className={`inline-flex size-8 items-center justify-center rounded-full text-zinc-600 hover:text-brand ${glassControl}`}
                aria-label={messages[locale].common.backHome}
            >
                <ChevronLeftIcon className="size-4" />
            </Link>
        </>
    )
}
