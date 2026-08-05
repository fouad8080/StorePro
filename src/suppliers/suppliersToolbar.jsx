import { Search, ChevronDown, Filter, Download } from 'lucide-react'

function Toolbar() {
    return (
        <div className="flex pr-1.5 items-center gap-2 flex-wrap py-4">

            {/* Search */}
            <div className="flex  items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1 ">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm w-full"
                />
            </div>

            {/* Category */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                Category
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Status */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                Country
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Brand */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                Status
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            

            {/* Filter */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                <Filter className="w-4 h-4" />
                Filter
            </button>

            {/* Export */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                <Download className="w-4 h-4" />
                Export
            </button>

        </div>
    )
}

export default Toolbar
