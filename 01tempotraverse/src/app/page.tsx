import Timeline from "@/components/Timeline";

const timeline = [
  {
    title: "Heroic Arrival",
    content:
      "Witness the heroic arrival in our Discovery Mission! Unveil the challenges as our superheroes assess the strategies you've employed. No pressure, just the first step in our epic journey.",
  },
  {
    title: "Opportunity League",
    content:
      "Join our superhero league in the Opportunity Quest! Dive deep into marketing opportunities tailored just for your business. Craft a strategic plan to unlock powerful growth avenues and conquer your targeted KPIs, superhero-style.",
  },
  {
    title: "Justice Brainstorm",
    content:
      "Assemble with the Justice Brainstorming Alliance! Unleash the power of collaboration to identify quick wins and set up long-term, scalable digital marketing goals. It's all about achieving superheroic success together.",
  },
  {
    title: "Action Plan Crusade",
    content:
      "Embark on the Action Plan Crusade! Roll out our superheroic execution plan, focusing on timely and tactical implementation. This sets the stage for scalable growth opportunities, freeing you to focus on other high-impact areas of your business.",
  },
  {
    title: "Adaptation Avengers",
    content:
      "Adaptation is our superpower! Our online marketing superheroes, inspired by the likes of Superman and Batman, monitor results, leveraging insights to adapt strategies for even greater triumphs. It's a journey of learning, adjusting, and triumphing like true superheroes.",
  },
];
export default function Home() {
  return (
    <div className="bg-black">
				{timeline.map((item, id) => (
					<Timeline
						key={id}
						title={item.title}
						content={item.content}
						endpoint={timeline}
						id={id}
					/>
				))}
			</div>
  );
}
