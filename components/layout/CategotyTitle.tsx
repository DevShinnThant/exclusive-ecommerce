interface Props {
  label: string;
}

export default function CategoryTitle({ label }: Props) {
  return (
    <div className="flex h-[50px] my-6 items-center gap-4">
      <div className="w-[20px] h-full bg-button_two" />
      <div className="text-2xl  tracking-wide font-medium">{label}</div>
    </div>
  );
}
