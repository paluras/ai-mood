const EntryCard = ({ entry }) => {

  const date = new Date(entry.createdAt).toDateString()
  const smallEntry = entry.content.split("\n")[2].slice(0, 100) + "..."
  return (
    <div className="divide-y divide-gray-200 overflow-hidden hover:scale-105 transition rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{smallEntry}</div>
    </div>
  )
}

export default EntryCard