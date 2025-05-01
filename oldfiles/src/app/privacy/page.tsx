import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Privacy" }} />
      <main className='p-2 prose'>
        <p>
          This privacy policy provides a clear and concise overview of the data
          we collect, how we use it, and your rights regarding your data. A more
          formal and detailed privacy policy is currently being developed and
          will be available soon. In the meantime, this document outlines the
          key points you need to know.
        </p>
        <h2>Disclaimer</h2>
        <p>
          The BlossomCraft Unofficial Wiki (BCUW) is provided "as is" without
          warranties of any kind. We are not responsible for:
        </p>
        <ul>
          <li>Downtime or technical issues.</li>
          <li>User-generated content, including posts or profiles.</li>
          <li>Any damages resulting from the use of this website.</li>
        </ul>
        <h2>What we collect:</h2>
        We collect the following infomation from the following sources:
        <ul>
          <li>
            Emails | Collected on user signup from clerk auth (and discord), if
            you dont have an account, we dont have your email.
          </li>
          <li>
            Discord | We collect your discord username, id, if you are in the
            blossomcraft discord server, and what roles you have in the
            blossomcraft discord server.
          </li>
          <li>
            We will also use tools like Sentry and Posthog to collect anonymous
            data about how people use the website.
          </li>
          <li>
            Any other information you provide | this may include, but is not
            limited to, your name, age, gender
          </li>
        </ul>
        <h2>Why we collect this information:</h2>
        <p>
          We collect this information solely for the purpose of allowing certain
          features to be used on the website.
        </p>
        <h2>Who we share this information with:</h2>
        <p>
          We will never sell any data we collect. The third party services we
          use may collect data from you, but we will never provide it to them.
        </p>
        <h2>What do we store? Where do we store it?</h2>
        <p>
          We do store some data in a database hosted by{" "}
          <Link href='https://turso.tech/'>Turso</Link>. This database is based
          in Denver, Colorado (US) with read replicas in Miami, Florida (US) and
          Seattle, Washington (US). We are unable to access this data, if we
          find out about a data breach, we will notify you promptly via email.
          we may store the following data:
        </p>
        <ul>
          <li>Discord Username</li>
          <li>Discord ID</li>
          <li>Discord Roles</li>
          <li>Minecraft Username</li>
          <li>
            information you provide such as what BlossomItems you own, what
            BlossomItems you are looking for, What Player Warps you own/work
            for, your age, etc.
          </li>
        </ul>
        <p>
          You may request a full copy of your data at any time, and we will
          respond to your request within 30 days. Please send requests to{" "}
          <Link href='mailto:contact@email.bcuw.xyz?subject=Data%20Request'>
            contact@email.bcuw.xyz
          </Link>
        </p>
        <h2>How do we use this information?</h2>
        <p>
          We use this information to allow certain features to be used on the
          website. We also use certain information to improve the saftey of the
          website.
        </p>
        <h3>Protecting minors</h3>
        <p>
          The BlossomCraft community is full of people of all ages, as we would
          like to make sure that BCUW is a safe place we may ask for your age
          before we allow you to use certain features. We will not allow anyone
          to see your age, unless you have put it in a public place like your
          bio.
        </p>
        <h4>What can't minors do?</h4>
        <p>
          Anyone under the age of 13 is not allowed to have an account, this is
          per the Discord ToS, if you are under 13 and you have an account, you
          will be removed from BCUW and your discord account may be reported. We
          will limit features such as forums to people over 16, we know this is
          not ideal however we may not be able to moderate these features as
          thoroughly as other features.
        </p>
        <h2>Other notes</h2>
        <p>
          We may change this privacy policy at any time, we will notify users of
          any (major) changes to this policy via a notice on the website. For
          small and wording changes, it is your responsibility to keep up to
          date with this policy.
        </p>
        <p>
          If you have any questions or concerns about this policy, please
          contact us at{" "}
          <Link href='mailto:contact@email.bcuw.xyz?subject=Privacy%20Questions'>
            contact@email.bcuw.xyz
          </Link>
        </p>
        <h2>Complete list of Third Party Services</h2>
        <ul>
          <li>
            <Link href='https://clerk.com/'>Clerk</Link> | Auth
          </li>
          <li>
            <Link href='https://sentry.io/'>Sentry</Link> | Analytics
          </li>
          <li>
            <Link href='https://posthog.com/'>Posthog</Link> | Analytics
          </li>
          <li>
            <Link href='https://www.cloudflare.com/'>Cloudflare</Link> |
            Analytics
          </li>
          <li>
            <Link href='https://turso.tech/'>Turso</Link> | Database
          </li>
          <li>
            <Link href='https://uploadthing.com/'>Uploadthing</Link> | File
            Storage
          </li>
          <li>
            <Link href='https://netlify.com/'>Netlify</Link> | Hosting/CDN
          </li>
          <li>
            <Link href='https://discord.com/'>Discord</Link> | Discord API/Auth
          </li>
        </ul>
        <h3>Third Party Services' Privacy Policies</h3>
        <ul>
          <li>
            <Link href='https://clerk.com/privacy'>Clerk</Link> | Auth
          </li>
          <li>
            <Link href='https://sentry.io/privacy'>Sentry</Link> | Analytics
          </li>
          <li>
            <Link href='https://posthog.com/privacy'>Posthog</Link> | Analytics
          </li>
          <li>
            <Link href='https://www.cloudflare.com/privacypolicy/'>
              Cloudflare
            </Link>{" "}
            | Analytics
          </li>
          <li>
            <Link href='https://turso.tech/privacy'>Turso</Link> | Database
          </li>
          <li>UploadThing (no available privacy policy)</li>
          <li>
            <Link href='https://netlify.com/privacy'>Netlify</Link> |
            Hosting/CDN
          </li>
          <li>
            <Link href='https://discord.com/privacy'>Discord</Link> | Discord
            API/Auth
          </li>
        </ul>
        <h2>Complete list of data we collect/store</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>How its collected</TableHead>
              <TableHead>Where its stored</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Discord Username</TableCell>
              <TableCell>Clerk Auth</TableCell>
              <TableCell>Turso Database</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discord ID</TableCell>
              <TableCell>Clerk Auth</TableCell>
              <TableCell>Clerk Auth</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discord Roles</TableCell>
              <TableCell>Discord API</TableCell>
              <TableCell>Turso Database</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Minecraft Username</TableCell>
              <TableCell>
                BlossomCraft Discord Server Nickname (Discord API)
              </TableCell>
              <TableCell>Turso Database</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>User Provided Birth Date</TableCell>
              <TableCell>Turso Database</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Generated/Provided Content</TableCell>
              <TableCell>User Provided</TableCell>
              <TableCell>Turso Database</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email Address</TableCell>
              <TableCell>Clerk Auth</TableCell>
              <TableCell>Clerk Auth</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Profile Picture</TableCell>
              <TableCell>Clerk Auth (Discord Auth)</TableCell>
              <TableCell>Clerk Auth</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>All Analytics data is anonymized and is not tracked to any user.</p>
        <p>
          All wiki content is created by authorized users and is only tracked to
          users for safety purposes. Audit Logs are kept forever wether or not
          the user is still active. We do not share audit logs with the public
          nor third party services.
        </p>
        <h2>Requesting Data/Deletion</h2>
        <p>
          You may request a full copy of your data at any time, and we will
          respond to your request within 30 days. Please send requests to{" "}
          <Link href='mailto:contact@email.bcuw.xyz?subject=Data%20Request'>
            contact@email.bcuw.xyz
          </Link>
        </p>
        <p>
          We are working on making it easier to delete your data, but for now
          you may contact us at{" "}
          <Link href='mailto:contact@email.bcuw.xyz?subject=Data%20Deletion'>
            contact@email.bcuw.xyz
          </Link>{" "}
          to request deletion of your data. You may delete your account at any
          time through Clerk Auth. We recommend you do not delete your account
          until you have gotten your data deleted and your account on our end on
          hold.
        </p>
        <h2>Legal Compliance</h2>
        <p>
          We strive to comply with applicable privacy and platform laws,
          including:
        </p>
        <ul>
          <li>
            <strong>COPPA:</strong> We do not knowingly collect data from
            children under 13. Users under 13 are not allowed to create
            accounts.
          </li>
          <li>
            <strong>GDPR:</strong> Users in the European Union have the right to
            request access to their data, request deletion, and object to data
            processing.
          </li>
          <li>
            <strong>CCPA:</strong> California residents have the right to
            request access to their data, request deletion, and opt out of data
            collection.
          </li>
          <li>
            <strong>Section 230 of the Communications Decency Act:</strong> As a
            platform hosting user-generated content (UGC), we are protected
            under Section 230 of the Communications Decency Act. This means:
            <ul>
              <li>
                We are not legally responsible for content created and posted by
                users.
              </li>
              <li>
                We reserve the right to moderate, remove, or restrict content
                that violates our community guidelines or is otherwise
                objectionable, as long as moderation is done in good faith.
              </li>
              <li>
                Users are solely responsible for the content they post on the
                platform.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          If you have questions about your rights under these laws, please
          contact us at{" "}
          <Link href='mailto:contact@email.bcuw.xyz?subject=Privacy%20Questions'>
            contact@email.bcuw.xyz
          </Link>
          .
        </p>
        <h2>Cookies</h2>
        <p>
          We use cookies to improve your experience on our website. These
          cookies may include:
        </p>
        <ul>
          <li>
            <strong>Authentication Cookies:</strong> Used to keep you logged in.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Used to track anonymous usage
            data through tools like Sentry and Posthog.
          </li>
        </ul>
        <p>
          You can manage your cookie preferences through your browser settings.
        </p>
      </main>
    </>
  );
}
