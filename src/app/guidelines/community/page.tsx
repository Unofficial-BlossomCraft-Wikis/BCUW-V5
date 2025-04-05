import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Community Guidelines" }} />
      <main className='p-2 prose'>
        <p>
          Welcome to the BlossomCraft Unofficial Wiki (BCUW)! These guidelines
          are here to ensure that BCUW remains a safe, welcoming, and productive
          space for everyone. By participating in BCUW, you agree to follow both
          BlossomCraft’s rules and our own community rules outlined below.
        </p>
        <p>
          Since BCUW is closely tied to the BlossomCraft community, we expect
          all users to adhere to{" "}
          <Link href='https://blossomcraft.org/wiki'>BlossomCraft’s rules</Link>
          . In addition, we have our own rules specific to BCUW to ensure the
          platform runs smoothly.
        </p>
        <h2>General Behavior</h2>
        <p>
          We want BCUW to be a positive and inclusive space for everyone. To
          achieve this, we ask all users to follow these basic rules of conduct:
        </p>
        <ul>
          <li>
            Be respectful to others. Treat everyone with kindness, regardless of
            their background, identity, or opinions.
          </li>
          <li>
            Harassment, hate speech, bullying, and discrimination of any kind
            are strictly prohibited.
          </li>
          <li>
            Be constructive in your contributions. Avoid toxic behavior,
            personal attacks, or unnecessary negativity.
          </li>
        </ul>
        <p>
          These rules align with BlossomCraft’s community standards and are
          essential for maintaining a welcoming environment.
        </p>
        <h2>Moderation</h2>
        <p>
          Our moderators are here to ensure that BCUW remains a safe and
          productive space. Moderators have the authority to enforce these
          guidelines and take action when necessary, including:
        </p>
        <ul>
          <li>Removing content that violates the rules.</li>
          <li>Issuing warnings to users who break the rules.</li>
          <li>
            Suspending or banning users for repeated or severe violations.
          </li>
        </ul>
        <p>
          If you encounter content or behavior that violates these guidelines,
          please report it to a moderator. We take all reports seriously and
          will address them as quickly as possible.
        </p>
        <h2>Following BlossomCraft’s Rules</h2>
        <p>
          As BCUW is closely tied to the BlossomCraft community, we require all
          users to follow{" "}
          <Link href='https://blossomcraft.org/wiki'>BlossomCraft’s rules</Link>
          . Violations of BlossomCraft’s rules may result in consequences on
          BCUW, including account suspension or banning.
        </p>
        <p>
          If you’re unsure about BlossomCraft’s rules, please review them before
          participating on BCUW.
        </p>
        <h2>Consequences for Violations</h2>
        <p>
          Violating these guidelines may result in the following actions,
          depending on the severity of the violation:
        </p>
        <ul>
          <li>A warning from a moderator.</li>
          <li>Removal of content that violates the rules.</li>
          <li>Temporary or permanent suspension of your account.</li>
        </ul>
        <p>
          We reserve the right to take immediate action for severe violations,
          such as posting illegal content or engaging in harassment.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these guidelines, or if
          you need to report a violation, please contact us at{" "}
          <Link href='mailto:contact@email.bcuw.xyz'>
            contact@email.bcuw.xyz
          </Link>
          .
        </p>
      </main>
    </>
  );
}
