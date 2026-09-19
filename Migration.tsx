import { SectionLabel } from "../components/ui";

const collections = [
  ["Architect-Designed Homes", "Unique residences developed with architects, combining vision, craftsmanship, and post-and-beam construction."],
  ["Barn Homes", "Traditional barn-inspired homes with open timber volumes and modern family spaces."],
  ["Carriage Houses", "Flexible secondary residences, guest homes, and multi-purpose structures."],
  ["Barn Homes", "Traditional barn-inspired homes with open timber volumes and modern family spaces."],
  ["Coastal Homes", "Custom residences designed around views, natural light, and relaxed living."],
  ["Mountain Retreats", "Timber homes designed for challenging landscapes and year-round comfort."],
  ["Contemporary Homes", "Modern architectural expressions using the warmth of post and beam construction."],
  ["Cottages", "Smaller handcrafted homes that maximize character and efficiency."],
  ["Custom Designs", "Fully personalized homes developed around each owner's lifestyle."]
];

const projects = [
  ["Timber Residence", "A handcrafted post-and-beam residence combining exposed timber, open planning, and natural materials."],
  ["Barn Collection Home", "A modern interpretation of classic barn architecture with flexible living spaces."],
  ["Contemporary Retreat", "A refined timber home blending modern design with traditional craftsmanship."]
];

export function AboutMigration(){
return <section className="bg-paper py-24" id="about">
<div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
<SectionLabel index="01" title="About Yankee Barn Homes"/>
<div className="mt-10 grid lg:grid-cols-2 gap-12">
<h2 className="font-display text-5xl font-light">Generations of craftsmanship creating timeless timber homes.</h2>
<p className="text-lg leading-loose text-ink/70">Yankee Barn Homes creates custom post and beam residences using a combination of architectural design, traditional timber craftsmanship, and precision panelized construction. Every home is designed around the owner's vision, location, and lifestyle.</p>
</div>
</div>
</section>
}

export function CollectionsMigration(){
return <section className="bg-paper-2 py-24" id="collections">
<div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
<SectionLabel index="02" title="Home Collections"/>
<div className="mt-12 grid md:grid-cols-3 gap-8">{collections.map(([t,d])=><article key={t} className="border border-ink/10 p-8"><h3 className="font-display text-3xl">{t}</h3><p className="mt-4 text-ink/70">{d}</p></article>)}</div>
</div></section>
}

export function ProjectsMigration(){
return <section className="bg-paper py-24" id="projects">
<div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
<SectionLabel index="03" title="Featured Homes"/>
<div className="mt-12 grid md:grid-cols-3 gap-8">{projects.map(([t,d])=><article key={t} className="border border-ink/10 p-8"><h3 className="font-display text-3xl">{t}</h3><p className="mt-4 text-ink/70">{d}</p></article>)}</div>
</div></section>
}

export function ProcessMigration(){
return <section className="bg-paper-2 py-24" id="migration-process">
<div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
<SectionLabel index="04" title="The Building Process"/>
<div className="grid md:grid-cols-4 gap-6 mt-12">
{["Consultation","Architectural Design","Precision Construction","Site Assembly"].map((x,i)=><div key={x} className="p-7 border border-ink/10"><span>0{i+1}</span><h3 className="mt-4 text-2xl font-display">{x}</h3></div>)}
</div>
</div></section>
}

export function ContactMigration(){
return <section className="py-24 bg-paper" id="contact-migration">
<div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
<SectionLabel index="06" title="Begin Your Home Journey"/>
<h2 className="mt-10 max-w-3xl font-display text-5xl font-light">Discuss your custom timber home with our design team.</h2>
<p className="mt-6 max-w-xl text-ink/70">Start with your ideas, location, and lifestyle goals. Every project begins with a conversation.</p>
</div></section>
}
