export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return <div>Search: {searchParams.q}</div>;
}
