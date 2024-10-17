export default function DataStatus({ status }: { status: string }) {
  return (
    <div className='flex flex-row gap-x-2 items-center text-sm'>
      <div
        className={`rounded-full size-3 flex items-center justify-center ${
          status == "Done" ? "bg-green-500/30" : "bg-yellow-500/30"
        }`}>
        <div
          className={`rounded-full size-1.5 ${
            status == "Done" ? "bg-green-500" : "bg-yellow-500"
          }`}></div>
      </div>
      {status}
    </div>
  )
}
