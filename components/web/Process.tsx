"use client";

import { ProcessSection } from "@/components/design/sections/Process";
import { WEB_PROCESS_STEPS } from "@/lib/web-data";

export default function WebProcessSection() {
  return (
    <ProcessSection
      steps={WEB_PROCESS_STEPS}
      intro="A strategic, data-driven approach that turns business requirements into high-performing web applications."
      label="Development Process"
      headingTop="Our Web"
      headingAccent="process."
    />
  );
}
