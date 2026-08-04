import { Search, ChevronDown, Filter, Download } from 'lucide-react'

function Orderstoolbar(){
    return (
        <div className="flex pr-1.5 items-center gap-2 flex-wrap py-4">

            {/* Search */}
            <div className="flex  items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1 ">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by order ID,customer or product..."
                    className="bg-transparent outline-none text-sm w-full"
                />
            </div>

            {/* Payment */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                All Payment
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Shippers */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                All Shippers
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            

            {/* Export */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-green-700 bg-[#56e6497a]">
                <Download className="w-4 h-4" />
                Export
            </button>

        </div>
    )
}
export default Orderstoolbar