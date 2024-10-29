import React, { useState } from 'react';

const CreateOrder = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        symbol: 'AAPL',
        order_type: 'LMT',
        sell_or_buy: 'BUY',
        quantity: 10,
        price: 100,
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:9125/order?symbol=${formData.symbol}&order_type=${formData.order_type}&sell_or_buy=${formData.sell_or_buy}&quantity=${formData.quantity}&price=${formData.price}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                }
            );

            if (response.ok) {
                alert('Order placed successfully!');
                setIsModalOpen(false); // Close modal on success
            } else {
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="App">
            {/* Trigger Button */}
            <div>
                <button
                    className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    onClick={toggleModal}
                >
                    <span className="sr-only">Place Order</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Symbol</label>
                                <input
                                    type="text"
                                    name="symbol"
                                    value={formData.symbol}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Order Type</label>
                                <input
                                    type="text"
                                    name="order_type"
                                    value={formData.order_type}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Buy or Sell</label>
                                <select
                                    name="sell_or_buy"
                                    value={formData.sell_or_buy}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="BUY">Buy</option>
                                    <option value="SELL">Sell</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 bg-gray-500 text-white py-2 px-4 rounded"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white py-2 px-4 rounded"
                                >
                                    Submit Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

};

export default CreateOrder;