interface CardItemContentProps {
  title: string;
  info: string;
}
export function CardItemContent({ title, info }: CardItemContentProps) {
  return (
    <div>
      <h1 className="pb-3 text-sm font-bold"> {title} </h1>
      <p className="leading-base pb-12">{info}</p>
    </div>
  );
}
