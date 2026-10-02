import { redirect } from "next/navigation";

export default function AccountRedirect({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}`);
}
