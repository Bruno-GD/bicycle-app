const BikeCard = ({ bike }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{bike.name}</h5>
                <h6 class="card-subtitle">{bike.description}</h6>
            </div>
        </div>
    );
}