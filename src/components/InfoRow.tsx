export function InfoRow({ label, data, isImg }: { label: string, data: string | number | undefined, isImg: boolean }) {
  return (
    <div className="my-8 mx-3">
      <p className="capitalize font-semibold">{label}</p>
      {isImg ? <img className="size-40 border-2 outline border-double flex justify-center items-center m-2" src={data as string} alt={'image not available'} /> : <p className="capitalize">{data}</p>}
    </div>
  )
}