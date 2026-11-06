interface SearchBarProps {
  search: string
  onSearchChange: (value: string) => void
}

function SearchBar({
  search,
  onSearchChange
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)} 
      className="w-full rounded-lg border border-gray-300 p-3"
      />
  )
}

export default SearchBar