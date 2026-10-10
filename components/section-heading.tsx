type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-red-600">
          <span className="h-px w-8 bg-red-600" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-zinc-900 sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-5 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
