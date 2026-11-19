/**
 * 全站毛玻璃样式。
 *
 * 底色是橙色到奶油色的固定渐变，半透明白 + 背景模糊才能让玻璃感可见。
 * 长文区域用 strong 版本提高不透明度，保证小字号文字的可读性。
 */
export const glassPanel =
  "border border-white/60 bg-linear-to-br from-white/80 via-white/65 to-white/50 shadow-[0_24px_60px_-28px_rgba(93,51,16,0.45),0_6px_18px_-10px_rgba(93,51,16,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150";

export const glassPanelStrong =
  "border border-white/70 bg-linear-to-br from-white/90 via-white/80 to-white/70 shadow-[0_24px_60px_-28px_rgba(93,51,16,0.35),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl backdrop-saturate-150";

export const glassInteractive = `${glassPanel} transition-all duration-300 hover:from-white/90 hover:via-white/75 hover:to-white/60 hover:shadow-[0_28px_70px_-28px_rgba(93,51,16,0.5),0_8px_22px_-10px_rgba(93,51,16,0.24),inset_0_1px_0_rgba(255,255,255,0.95)]`;

export const glassInset =
  "border border-white/55 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md";

export const glassControl =
  "border border-white/60 bg-white/55 shadow-[0_10px_30px_-14px_rgba(93,51,16,0.4),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition-colors hover:bg-white/85";
