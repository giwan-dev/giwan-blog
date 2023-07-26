export function OutdatedParagraph({
  outdated,
  reason,
}: {
  outdated: string
  reason: string
}) {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="leading-7 text-gray-400 line-through">{outdated}</p>
      <p className="border rounded-lg py-2 px-4 leading-7">{reason}</p>
    </div>
  )
}
