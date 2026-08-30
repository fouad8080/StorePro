

import { useState, useEffect, useContext } from 'react'
import { inform } from '../App'
import { Box,CheckCircle,AlertCircle ,XSquare,DollarSignIcon} from 'lucide-react'


function Cards() {
    const { info } = useContext(inform)
    const [getinfo, setgetinfo] = useState([])

    useEffect(() => {
        try {
            setgetinfo(info.summary)
        } catch (error) {
            console.log(error)
        }
    }, [info])

    const isLoading = getinfo.length === 0

    const cardsData = [
        {
            title: "Total Items",
            value: isLoading ? "Loading..." : "40",
            icon: <Box /> ,
            iconAlt: "trending up",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "+18.4%",
            trendType: "up",
            description: "of totoal",
        },
        {
            title: "in Stock",
            value: isLoading ? "Loading..." : getinfo.totalOrders,
            icon: <CheckCircle/>,
            iconAlt: "trending up",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "13.2%",
            trendType: "up",
            description: "of totoal",
        },
        {
            title: "Low Stock",
            value: isLoading ? "Loading..." : getinfo.productsSold,
            icon: <AlertCircle/>,
            iconAlt: "trending up",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "+15.7%",
            trendType: "down",
            description: "of totoal",
        },
        {
            title: "Out of Stock",
            value: isLoading ? "Loading..." : getinfo.lowStockItems,
            icon: <XSquare/>,
            iconAlt: "trending down",
            iconClass: "bg-orange-100 text-orange-600",
            imgClass: "w-20 h-full",
            trend: isLoading ? "Loading..." : "25%",
            trendType: "up",
            description: "of totoal",
        },
        {
            title: "Stock Value",
            value: isLoading ? "Loading..." : getinfo.lowStockItems,
            icon: <DollarSignIcon/>,
            iconAlt: "trending down",
            iconClass: "bg-orange-100 text-orange-600",
            imgClass: "w-20 h-full",
            trend: isLoading ? "Loading..." : "25%",
            trendType: "up",
            description: "of totoal",
        }
    ]

    return (
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-1 w-full">
            {cardsData.map((card, i) => (
                <div className="card" key={i}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="card-title">{card.title}</p>
                            <h2 className="card-value text-2xl">{card.value}</h2>
                        </div>
                        <div className={`card-icon ${card.iconClass}`}>
                        {card.icon}
                        </div>
                    </div>

                    <div className="card-footer">
                        <span className={card.trendType === "up" ? "card-trend-up" : "card-trend-down"}>
                            {card.trend}
                        </span>
                        <span className="card-description">{card.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
