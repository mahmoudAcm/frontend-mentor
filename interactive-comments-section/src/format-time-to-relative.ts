export default function formatTimeToRelative(createdAt: number) {
  let diff = Math.round((Date.now() - createdAt) / 1000);
  var out;

  if (diff <= 59) {
    if (import.meta.env.DEV) console.info(`now`);
    return `now`;
  }

  if (diff / 60 <= 59) {
    out = Math.floor(diff / 60);
    if (import.meta.env.DEV)
      console.info(out + ` minute${out == 1 ? "" : "s"} ago`);
    return out + ` minute${out == 1 ? "" : "s"} ago`;
  }

  if (diff / (60 * 60) <= 23) {
    out = Math.floor(diff / (60 * 60));
    if (import.meta.env.DEV)
      console.info(out + ` hour${out == 1 ? "" : "s"} ago`);
    return out + ` hour${out == 1 ? "" : "s"} ago`;
  }

  if (diff / (24 * 60 * 60) <= 30) {
    out = Math.floor(diff / (24 * 60 * 60));
    if (import.meta.env.DEV)
      console.info(out + ` day${out == 1 ? "" : "s"} ago`);
    return out + ` day${out == 1 ? "" : "s"} ago`;
  }

  if (diff / (30 * 24 * 60 * 60) <= 12) {
    out = Math.floor(diff / (30 * 24 * 60 * 60));
    if (import.meta.env.DEV)
      console.info(out + ` month${out == 1 ? "" : "s"} ago`);
    return out + ` month${out == 1 ? "" : "s"} ago`;
  }

  out = Math.floor(diff / (12 * 30 * 24 * 60 * 60));
  if (import.meta.env.DEV)
    console.info(out + ` year${out == 1 ? "" : "s"} ago`);
  return out + ` year${out == 1 ? "" : "s"} ago`;
}
