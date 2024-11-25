import { EmbedRemotionPlayer } from "@/components/section/video";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Player } from "@remotion/player";
import { Ellipsis, Settings, Share, Undo2 } from "lucide-react";

// app/course/[courseID]/page.tsx
export default async function ({
	params,
}: {
	params: Promise<{ courseID: string; sectionID: string }>;
}) {
	const courseID = (await params).courseID;
	const sectionID = (await params).sectionID;

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<div className="py-8 border-b border-border flex items-center">
					<div className="flex-1 px-4">
						<h1 className="text-3xl font-semibold mb-2">Studium Course Page</h1>
						<p className="">
							This section is description of the course with ID: {courseID}
						</p>
					</div>
					<div className="">
						<Button className="" size="icon" variant="ghost">
							<Settings size={48} />
						</Button>
						<Button className="" size="icon" variant="ghost">
							<Share size={48} />
						</Button>
					</div>
				</div>
				<div className="flex-1 flex flex-row w-full">
					<div className="min-w-48 w-1/4 border-r border-border divide-y h-full">
						{[
							{
								id: "1",
								title: "Introduction",
								description: "This is the introduction to the course",
							},
							{
								id: "2",
								title: "Section 1",
								description: "This is the first section of the course",
							},
							{
								id: "3",
								title: "Section 2",
								description: "This is the second section of the course",
							},
							{
								id: "4",
								title: "Section 3",
								description: "This is the third section of the course",
							},
							{
								id: "5",
								title: "Section 4",
								description: "This is the fourth section of the course",
							},
							{
								id: "6",
								title: "Section 5",
								description: "This is the fifth section of the course",
							},
							{
								id: "7",
								title: "Section 6",
								description: "This is the sixth section of the course",
							},
							{
								id: "8",
								title: "Section 7",
								description: "This is the seventh section of the course",
							},
							{
								id: "9",
								title: "Section 8",
								description: "This is the eighth section of the course",
							},
							{
								id: "10",
								title: "Section 9",
								description: "This is the ninth section of the course",
							},
							{
								id: "11",
								title: "Section 10",
								description: "This is the tenth section of the course",
							},
							{
								id: "12",
								title: "Section 11",
								description: "This is the eleventh section of the course",
							},
							{
								id: "13",
								title: "Section 12",
								description: "This is the twelfth section of the course",
							},
							{
								id: "14",
								title: "Section 13",
								description: "This is the thirteenth section of the course",
							},
							{
								id: "15",
								title: "Section 14",
								description: "This is the fourteenth section of the course",
							},
							{
								id: "16",
								title: "Section 15",
								description: "This is the fifteenth section of the course",
							},
						].map((section, index) => (
							<div
								key={section.id}
								className={cn(
									"p-2 flex items-center cursor-pointer hover:bg-primary/20 ",
									sectionID === section.id
										? "bg-primary text-primary-foreground hover:bg-primary"
										: "",
								)}
							>
								<div>
									<h2 className="text-lg font-medium">{section.title}</h2>
									<p className="text-sm font-light">{section.description}</p>
								</div>
							</div>
						))}
					</div>
					<div className="flex-1 p-4 w-full max-w-full">
						<EmbedRemotionPlayer />
						<div className=" prose prose-sm max-w-full mt-6">
							<h1>Garlic bread with cheese: What the science tells us</h1>
							<p>
								For years parents have espoused the health benefits of eating
								garlic bread with cheese to their children, with the food
								earning such an iconic status in our culture that kids will
								often dress up as warm, cheesy loaf for Halloween.
							</p>
							<p>
								But a recent study shows that the celebrated appetizer may be
								linked to a series of rabies cases springing up around the
								country.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
