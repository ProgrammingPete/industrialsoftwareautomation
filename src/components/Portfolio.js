import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Configruation, Application, and Pricing Tools</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our Configuration Tool is a robust and easily scalable system that streamlines business operations, increase efficiency, and ultimately drive growth and profitability for your business.
                                    With features such as Pricing, Quoting and many more modules to effectively manage all aspects of a business.
                                    All data is stored in the cloud and as such it is easily accessible from all devices and from any location, and allows for easy scalability.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Lead Generation System</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    The Lead Generation System was built for a Fortune 500 company. Its use consists of create leads for your Sales Team to efficiently increase their customer base.
                                    Another feature of our Lead Generation Software is maintenance and auto-emails to the subsequent sales manager of the region, It can also integrate into an existing management system through well-structured APIs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Personal Websites</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    We use the most up-to-date frontend frameworks to create website for our small clients that allows them to make a name for themselves in their industry.
                                    Some example industries compose of Modeling, Power washing, and other small IT/Industrial companies. Please contant for more information. One main feasutre of our personal wesbite is SEO and a Contact page that allows users to contact the respective sales manager.  
                                </p>
                            </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Data-Driven Applications</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    One of our most renown data-driven applications was for our Amazon client, which enabled them to efficiently use data generated at warehouses. 
                                    This data was then used to determine the efficiency of workers in a warehouse, and quickly notify the regional manager of the warehouse of any loss of headcount. We also included other metrics such as throughput and fullfilment of packages. 
                                </p>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;