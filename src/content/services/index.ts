import type { ServiceContent } from "@/types";
import { trademark } from "./trademark";
import { patents } from "./patents";
import { copyright } from "./copyright";
import { designRegistration } from "./design-registration";
import { ipAdvisory } from "./ip-advisory";
import { companyRegistration } from "./company-registration";
import { llpRegistration } from "./llp-registration";
import { opcRegistration } from "./opc-registration";
import { proprietorshipRegistration } from "./proprietorship-registration";
import { msmeUdyamRegistration } from "./msme-udyam-registration";
import { importExportCode } from "./import-export-code";
import { startupIndiaRegistration } from "./startup-india-registration";
import { legalDocumentation } from "./legal-documentation";

export const ipServices: ServiceContent[] = [trademark, patents, copyright, designRegistration, ipAdvisory];

export const businessRegistrationServices: ServiceContent[] = [
  companyRegistration,
  llpRegistration,
  opcRegistration,
  proprietorshipRegistration,
  msmeUdyamRegistration,
  importExportCode,
  startupIndiaRegistration,
];

export const allServices: ServiceContent[] = [...ipServices, ...businessRegistrationServices, legalDocumentation];

export const serviceCategories = [
  { name: "Intellectual Property", services: ipServices },
  { name: "Business Registration", services: businessRegistrationServices },
  { name: "Legal Documentation", services: [legalDocumentation] },
] as const;

export {
  trademark,
  patents,
  copyright,
  designRegistration,
  ipAdvisory,
  companyRegistration,
  llpRegistration,
  opcRegistration,
  proprietorshipRegistration,
  msmeUdyamRegistration,
  importExportCode,
  startupIndiaRegistration,
  legalDocumentation,
};
