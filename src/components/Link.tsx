import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { href, navigate } from "../hooks/useRoute";
export function Link({
  to,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  function handle(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (
      !e.defaultPrevented &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.shiftKey &&
      e.button === 0
    ) {
      e.preventDefault();
      navigate(to);
    }
  }
  return <a {...props} href={href(to)} onClick={handle} />;
}
