let shops = [];

const HomePage = (
    <div>
    <div id="home-page">
        <h1>Home</h1>
        <ul id="shop-list">
            {shops.map((shop, index) => (
                <li>
                    <ShopCard shop={shop} />
                </li>
            ))}
        </ul>
    </div>
    </div>
);

window.onload = () => {
    fetch("/api/shop", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        shops = data;
        let lis = shops.map((shop, index) => (
            <li>
                <ShopCard shop={shop} />
            </li>
        ).innerHTML)
        document.getElementById("shop-list").innerHTML = lis.join('');
    })
    .catch(error => {
        console.error("Error:", error);
    });
}