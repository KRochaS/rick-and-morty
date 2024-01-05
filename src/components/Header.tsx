interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return <header className="text-md font-bold">{title}</header>;
}
