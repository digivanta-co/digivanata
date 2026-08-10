import { CONTACT, SOCIAL } from "@/lib/site-data";
import { Phone, Mail, SocialIcon } from "@/components/ui/Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href={CONTACT.emailHref}>
            <Mail /> {CONTACT.email}
          </a>
        </div>
        <div className="topbar__social">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              <SocialIcon name={s.label} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
