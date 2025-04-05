import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Terms of Service" }} />
      <main className='p-2 prose'>
        <p>
          Welcome to the BlossomCraft Unofficial Wiki (BCUW)! These Terms of
          Service ("ToS") govern your use of our platform. By accessing or using
          BCUW, you agree to comply with these terms. If you do not agree, you
          may not use the platform.
        </p>
        <p>
          Please note that BCUW is an independent, community-driven project and
          is not officially affiliated with BlossomCraft or its staff. While
          many BlossomCraft staff members use and share BCUW, this platform is
          managed and maintained by its own team.
        </p>
        <h2>Liability Disclaimer</h2>
        <p>
          BCUW is provided "as is" without warranties of any kind. We are not
          responsible for:
        </p>
        <ul>
          <li>
            Downtime, bugs, or technical issues that may affect the platform.
          </li>
          <li>
            Content posted by users, including its accuracy, legality, or
            quality.
          </li>
          <li>
            Any damages resulting from the use of BCUW, including but not
            limited to loss of data or account access.
          </li>
        </ul>

        <h2>User Responsibilities</h2>
        <p>By using BCUW, you agree to the following:</p>
        <ul>
          <li>
            You will not engage in any illegal activities, including but not
            limited to posting illegal content or violating copyright laws.
          </li>
          <li>You will not harass, bully, or otherwise harm other users.</li>
          <li>
            You will not post spam, advertisements, or other disruptive content.
          </li>
          <li>
            You are solely responsible for the content you post on BCUW. This
            includes ensuring that your content does not violate any laws or the
            rights of others.
          </li>
          <li>
            You will respect the intellectual property of others. Do not post
            copyrighted material without proper permission or attribution.
          </li>
        </ul>
        <h2>User-Generated Content</h2>
        <p>
          BCUW relies on user-generated content to build and maintain the
          platform. By submitting content to BCUW, you agree to the following:
        </p>
        <ul>
          <li>
            You retain ownership of any content you create and submit to BCUW.
          </li>
          <li>
            By submitting content, you grant BCUW a non-exclusive, worldwide,
            royalty-free license to display, store, and use your content for the
            purpose of operating the platform.
          </li>
          <li>
            BCUW is not responsible for the accuracy, legality, or quality of
            user-generated content. All content is the sole responsibility of
            the user who posted it.
          </li>
        </ul>
        <h2>Account Management</h2>
        <p>
          To contribute to BCUW, you may need to create an account. By creating
          an account, you agree to the following:
        </p>
        <ul>
          <li>
            You will provide accurate and truthful information when creating
            your account.
          </li>
          <li>
            Users under the age of 13 are not allowed to create accounts, in
            compliance with the Discord Terms of Service and COPPA regulations.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate
            these Terms of Service or our Community Guidelines.
          </li>
          <li>
            If you wish to delete your account, please contact us. Note that
            some data, such as audit logs, may be retained for safety and
            compliance purposes.
          </li>
        </ul>
        <h2>Moderation</h2>
        <p>
          To maintain a safe and welcoming environment, we reserve the right to
          moderate content and enforce these Terms of Service. This includes:
        </p>
        <ul>
          <li>
            Removing content that violates our rules or is otherwise
            objectionable.
          </li>
          <li>
            Suspending or banning users who violate these Terms of Service or
            our Community Guidelines.
          </li>
          <li>
            Making final decisions on moderation actions. Moderation decisions
            are not subject to appeal.
          </li>
        </ul>
        <p>
          If you encounter content or behavior that violates these terms, please
          report it to us.
        </p>
        <h2>Changes to the Terms of Service</h2>
        <p>
          We may update these Terms of Service from time to time. If we make
          significant changes, we will notify users via a notice on the website.
          By continuing to use BCUW after changes are made, you agree to the
          updated terms.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <Link href='mailto:contact@email.bcuw.xyz'>
            contact@email.bcuw.xyz
          </Link>
          .
        </p>
      </main>
    </>
  );
}
