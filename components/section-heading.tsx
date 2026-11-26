type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Heading className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-zinc-900 sm:text-5xl">
        {title}
      </Heading>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-5 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
