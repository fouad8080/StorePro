import { useState, useEffect, useContext } from 'react'
import { inform } from '../App'
import {Check, BoxIcon,AlertTriangle ,XSquare } from 'lucide-react'

function Cards() {
    const { info } = useContext(inform)
    const [getinfo, setgetinfo] = useState([])

    useEffect(() => {
        try {
            console.log(info.summary)
            setgetinfo(info.summary)
        } catch (error) {
            console.log(error)
        }
    }, [info])

    const isLoading = getinfo.length === 0

    const cardsData = [
        {
            title: "Total Products",
            value: isLoading ? "Loading..." : "3124",
            icon: <BoxIcon />,
            iconAlt: "trending up",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "+12.4%",
            trendType: "up",
            description: "Compared to last month",
        },
        {
            title: "In Stock",
            value: isLoading ? "Loading..." : getinfo.totalOrders,
            icon: <Check />,
            iconAlt: "trending up",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "+8.2%",
            trendType: "up",
            description: "Compared to last month",
        },
        {
            title: "Low Stock",
            value: isLoading ? "Loading..." : getinfo.productsSold,
            icon: <AlertTriangle />,
            iconAlt: "trending down",
            iconClass: "",
            imgClass: "w-17 h-full",
            trend: isLoading ? "Loading..." : "+15.7%",
            trendType: "down",
            description: "Compared to last month",
        },
        {
            title: "Out of Stock",
            value: isLoading ? "Loading..." : getinfo.lowStockItems,
            icon: <XSquare />,
            iconAlt: "trending down",
            iconClass: "bg-orange-100 text-orange-600",
            imgClass: "w-20 h-full",
            trend: isLoading ? "Loading..." : "-3%",
            trendType: "down",
            description: "Need restocking",
        },
    ]

    return (
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 w-full">
            {cardsData.map((card, i) => (
                <div className="card" key={i}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="card-title text-md">{card.title}</p>
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
