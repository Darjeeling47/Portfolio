export default function ContentBox({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-2 gap-5 hover:bg-gray-100 p-4 rounded-2xl transition-all duration-200">
      <div className="bg-gray-50 shadow-sm border border-gray-50 w-full h-[150px] rounded-xl flex justify-center items-center">
        Image
      </div>
      <div className="flex flex-col">
        <h1 className="font-medium text-md md:text-lg text-my-gray-300">
          {data.topic}
        </h1>
        <h2 className="font-light text-sm">{data.secondaryTopic}</h2>
        <p className="font-light text-sm line-clamp-3 mt-4">
          {data.description}
        </p>
      </div>
    </div>
  );
}
