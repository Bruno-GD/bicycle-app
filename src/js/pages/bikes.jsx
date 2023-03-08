let bikes = []

const BikesPage = (
    <div>
        <h1>Bikes</h1>
        <ul id="bike-list">

        </ul>
    </div>
);

BikesPage.addEventListener('load', () => {
    fetch("/api/bike", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        bikes = data;
        let lis = bikes.map((bike, index) => (
            <li>
                <BikeCard bike={bike} />
            </li>
        ).innerHTML)
        document.getElementById("bike-list").innerHTML = lis.join('');
    })
    .catch(error => {
        console.error("Error:", error);
    });
});