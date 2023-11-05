import { SignInSignOutBundle, SignInWithGoogleRedirect, SignOutButton } from "@/components/AuthComponents";
import { PageHeading } from "@/components/Headings";

export default function SettingsPage() {
  return(
    <>
    <PageHeading heading={"settings"} />
    {/* tmp */}
    <p>Hello!</p>
    <SignInSignOutBundle />
    </>
  )
}