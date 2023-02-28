let shops = [
    {
        name: "The Coffee House",
        address: "123 Main St",
        description: "A great place to get coffee"
    },
    {
        name: "The Tea House",
        address: "456 Main St",
        description: "A great place to get tea"
    }
]

const HomePage = (
    <div>
        <h1>Home</h1>
        <ul class="">
            {shops.map((shop, index) => (
                <li>
                    <ShopCard shop={shop} />
                </li>
            ))}
        </ul>
    </div>
);