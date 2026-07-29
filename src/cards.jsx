

function Cards() {
    return (
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 pl-5 pr-5 w-full">
        <div className="card">
                            <div className="flex justify-between items-start">
                        <div>
                                    <p className="card-title">Total Sales</p>
                                    <h2 className="card-value">
                                        $24,580
                                    </h2>
                                </div>
                                <div className="card-icon">
                                    <img src="./icon/icon/total-sales.png" alt="trending up" className="w-17 h-full" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <span className="card-trend-up">
                                    +12.4%
                                </span>
                                <span className="card-description">
                                    Compared to last month
                                </span>
                            </div>
                        </div>
                        <div className="card">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="card-title">Orders</p>
                                <h2 className="card-value">
                                    1,248
                                </h2>
                            </div>
                            <div className="card-icon">
                                <img src="./icon/icon/orders.png" alt="trending up" className="w-17 h-full" />
                            </div>

                        </div>

                        <div className="card-footer">

                            <span className="card-trend-up">
                                +8.2%
                            </span>

                            <span className="card-description">
                                Compared to last month
                            </span>

                        </div>
                    </div>
                    <div className="card">
                        <div className="flex justify-between items-start">

                            <div>
                                <p className="card-title">Products Sold</p>

                                <h2 className="card-value">
                                    8,940
                                </h2>
                            </div>

                            <div className="card-icon">
                                <img src="./icon/icon/products-sold.png" alt="trending up" className="w-17 h-full" />
                            </div>

                        </div>

                        <div className="card-footer">

                            <span className="card-trend-up">
                                +15.7%
                            </span>

                            <span className="card-description">
                                Compared to last month
                            </span>

                        </div>
                    </div>
                    <div className="card">
                        <div className="flex justify-between items-start">

                            <div>
                                <p className="card-title">Low Stock Items</p>

                                <h2 className="card-value">
                                    26
                                </h2>
                            </div>

                            <div className="card-icon bg-orange-100 text-orange-600">
                                <img src="./icon/icon/low-stock.png" alt="trending down" className="w-20 h-full" />
                            </div>

                        </div>

                        <div className="card-footer">

                            <span className="card-trend-down">
                                -3%
                            </span>

                            <span className="card-description">
                                Need restocking
                            </span>

                        </div>
                    </div>
                    </div>
    )
}
export default Cards