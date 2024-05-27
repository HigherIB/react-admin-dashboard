import React from "react"
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";



const Ecommerce = () => {
    return(
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap flex-col justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-gray-400">Earnings</p>
                                <p className="text-2xl">$63,448.78</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button 
                                color="white"
                                bgColor="blue"
                                text="Download"
                                borderRadius="10px"
                                size="md"
                            />
                        </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white dark:text-gray-200 dark:bg-secondary-bg md:w-56 p-4 pt-9 rounded-2xl"
                        >
                            <button
                                type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg}}
                                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                {/* text-${item.pcColor} */}
                                <span className={`text-sm text-red-600 ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                    <div className="flex justify-between">
                        <p className="font-semi-bold text-xl">Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce