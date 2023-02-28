const ShopCard = ({ shop }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{shop.name}</h5>
                <h6 class="card-subtitle">{shop.address}</h6>
                <p class="card-text">{shop.description}</p>
            </div>
        </div>
    );
}