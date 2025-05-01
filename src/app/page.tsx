import { FiveCrates } from "@/components/home-crate-5";
import { FiveItems } from "@/components/home-item-5";
import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<TitleDataUpdater data={{ title: "Main Page" }} />
			<main className="p-2">
				<div className="flex h-1/2 flex-col-reverse justify-center md:flex-row">
					<div className="prose flex flex-col items-center justify-center text-center md:basis-1/2 ">
						<h1>BCUW</h1>
						<p>
							BlossomCraft Unofficial Wiki
							<br />
							<>
								Owned and maintained by{" "}
								<span className="mention">@🌸 Altie122</span>
							</>
						</p>
						<p>
							{/* Now with a total of{" "}
              <span className='text-ranks-celestial'>{allItems.length}</span> items
              and <span className='text-ranks-celestial'>{allCrates.length}</span>{" "}
              crates! (and we are always adding more) */}
							We are currently working on rewriting the entire site from scratch
							for V5. We are working on getting pages and page counts for crates
							and items up, sorry for the inconvenience. please check{" "}
							<Link href="https://hub.bcuw.xyz">V3 or V4</Link> for complete
							information.
						</p>
					</div>
					<div className="flex items-center justify-center md:basis-1/2 ">
						<img
							src="/bcuwTitleNormal.png"
							alt="BCUW"
							className="h-auto w-1/2"
							style={{
								filter: "drop-shadow(0 0 3rem hsla(306, 66%, 66%, 0.2))",
							}}
							width={400}
							height={400}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<FiveItems />
					<FiveCrates />
				</div>
			</main>
		</>
	);
}
