import ContentBox from "../basic/ContentBox";

export default function ActivityList({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
      {data.map((award) => (
        <ContentBox data={award} />
      ))}
    </div>
  );
}
