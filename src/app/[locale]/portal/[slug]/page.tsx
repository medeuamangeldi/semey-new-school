import { notFound } from "next/navigation";
import PortalPage from "../../../_components/SchoolSite/portal";
export default function Page({ params }: { params: { slug: string } }) {
  if (!["schedule", "grades", "profile"].includes(params.slug)) notFound();
  return <PortalPage />;
}
