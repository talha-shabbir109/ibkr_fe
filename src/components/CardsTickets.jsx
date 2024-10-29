// import React, { useEffect, useState } from 'react';
import Card from '../shared/Card';

function CardsTickets({totalOrders, totalBuy, totalSells}) {

    // const [trades, setCards] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     const fetchTrades = async () => {
    //         try {
    //             const response = await fetch('http://localhost:9125/stats', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                 },
    //             });

    //             if (!response.ok) {
    //                 // setTrades([]);
    //                 throw new Error('Network response was not ok ' + response.statusText);

    //             }

    //             const resp = await response.json();
    //             setCards(resp['data']); // Set the trades data
    //         } catch (err) {
    //             setError(err.message); // Set the error message
    //         } finally {
    //             setLoading(false); // Set loading to false
    //         }
    //     };

    //     fetchTrades();
    // }, []); // Empty dependency array means this runs once on mount

    // if (loading) {
    //     return <div>Loading...</div>; // Loading state
    // }

    // if (error) {
    //     return <div>Error: {error}</div>; // Error state
    // }

    return (
        <div className="lg:flex flex-wrap gap-4">
            <Card
                title="Total Trades"
                value={totalOrders}
                // percentage="67.81"
                // isUpward={true}
                description="Since last week"
            />
            <Card
                title="Total Buy"
                value={totalBuy}
                // isUpward={null}
                description="Since last week"
            />
            <Card
                title="Total Sell"
                value={totalSells}
                isUpward={false}
                description="Since last week"
            />
        </div>
    );
}

export default CardsTickets;