export interface ViewerLocationContext {
  locale: string;
  timeZone: string;
  utcOffsetMinutes: number;
}

export const getViewerLocationContext = (): ViewerLocationContext => {
  if (typeof window === "undefined") {
    return {
      locale: "en-US",
      timeZone: "UTC",
      utcOffsetMinutes: 0,
    };
  }

  const locale = navigator.language || "en-US";
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const utcOffsetMinutes = -new Date().getTimezoneOffset();

  return {
    locale,
    timeZone,
    utcOffsetMinutes,
  };
};

export const formatViewerTime = (
  context: ViewerLocationContext,
  date: Date = new Date(),
  includeSeconds: boolean = true
): string => {
  return new Intl.DateTimeFormat(context.locale, {
    hour: "2-digit",
    minute: "2-digit",
    ...(includeSeconds ? { second: "2-digit" as const } : {}),
    hour12: false,
    timeZone: context.timeZone,
  }).format(date);
};
