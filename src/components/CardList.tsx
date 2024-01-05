import Image from "next/image";

interface CardListProps {
  image: string;
  name: string;
}

export function CardList({ image, name }: CardListProps) {
  return (
    <div
      className="bg-cello-50 border-cello-50 flex flex-col gap-5 
                        rounded-md border px-5 py-6 shadow-lg transition-transform
                        duration-300 hover:scale-[1.025]"
    >
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="h-12 w-12 rounded-full"
            src={image}
            alt="avatar"
            width={62}
            height={62}
          />
          <div>
            <h1 className="text-md font-bold"> {name} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
