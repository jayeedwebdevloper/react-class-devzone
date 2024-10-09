const Counter = () => {

    const counterData = [
        {
            id: 1,
            title: "happy client",
            total: "1800+",
            icon: '/assets/thumb-icon.svg'
        },
        {
            id: 2,
            title: "finished projects",
            total: "600+",
            icon: '/assets/bag-icon.svg'
        },
        {
            id: 3,
            title: "skilled experts",
            total: "200+",
            icon: '/assets/two-person.svg'
        },
        {
            id: 4,
            title: "client satisfaction",
            total: "100%",
            icon: '/assets/trophy-icon.svg'
        }
    ]

    return (
        <div className="bg-white">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="py-24">
                    <div className="flex flex-wrap justify-center items-center">
                        {
                            counterData?.map((counter) => (
                                <div key={counter.id} className="lg:w-1/4 py-3 sm:w-1/2 w-full px-3 xl:px-8 flex items-center max-sm:justify-start justify-center gap-3">
                                    <div className="p-4 bg-blue-200/50 rounded-lg">
                                        <img src={counter?.icon} className="w-10 h-10 xl:w-10" alt="" />
                                    </div>
                                    <div className="w-auto">
                                        <h1 className="text-blue-950 max-sm:text-4xl text-xl xl:text-5xl font-semibold">{counter?.total}</h1>
                                        <p className="pt-1 text-md text-black/40 capitalize">{counter?.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;