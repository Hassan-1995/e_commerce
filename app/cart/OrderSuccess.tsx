import React from "react";

interface OrderSuccessProps {
  onClose: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-700 mb-4">
          Thank you for your order. We will process it soon.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
