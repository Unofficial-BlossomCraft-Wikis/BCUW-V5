import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "User-made Resources", UGC: true }} />
      <main className='p-2 prose'>
        <ul>
          <li>
            <Link href='https://docs.google.com/spreadsheets/d/1yf47G3E3BYSiWvWH5bD7ZWq1K1-ySP766eHpFuvJwpc/edit?usp=sharing'>
              evicuo's Jobs EXP Spreadsheet
            </Link>
          </li>
          <li>
            <Link href='https://www.pythonanywhere.com/gists/2c0915f71ab5a67ad03ce90136d2710a/BlossomCraft%20Jobs%20Calculator/ipython/'>
              evicuo's Jobs Progress Calculator
            </Link>
          </li>
          <li>
            <Link href='https://minecraftcircle.pages.dev/'>
              ZoZoCaylus's Circle Generator
            </Link>
          </li>
          <li>
            <Link href='https://docs.google.com/document/d/10_JlgOWGl-p-hZ1blvgg1395hzygosIO1pV8w0CrgJw/edit?usp=sharing'>
              Shyvalue's Unofficial Mod List
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
