interface Props {
  label: string;
  title: string;
}

export default function CategoryTitle({ label, title }: Props) {
  return (
    <>
      <div className="w-[100px] flex items-center h-[50px]">
        <div className="w-[20px] h-full bg-button_two" />
        <div className="text-button_two w-fit text-sm ml-4 font-semibold">
          {label}
        </div>
      </div>
      <div className="text-2xl font-medium my-8 tracking-wide">{title}</div>
    </>
  );
}
