"use client";
import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaDownload, FaHome, FaShoppingBag } from 'react-icons/fa';

export default function OrderConfirmationPage() {
  // In a real app, this would come from the order data
  const orderNumber = `MORVA-${Date.now()}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-500">Your order has been successfully placed and is being processed.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-2">Order Details</h2>
            <p className="text-gray-600">Order Number: <span className="font-semibold text-black">{orderNumber}</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Shipping Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Name:</span> John Doe</p>
                <p><span className="font-medium">Email:</span> john@example.com</p>
                <p><span className="font-medium">Phone:</span> +92 300 1234567</p>
                <p><span className="font-medium">Address:</span> 123 Main Street, Karachi, Pakistan</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Delivery Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Estimated Delivery:</span> {estimatedDelivery.toLocaleDateString()}</p>
                <p><span className="font-medium">Shipping Method:</span> Standard Delivery</p>
                <p><span className="font-medium">Tracking:</span> Available in 24 hours</p>
                <p><span className="font-medium">Status:</span> <span className="text-green-600 font-semibold">Processing</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-lg font-semibold text-black mb-4">Payment Information</h3>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Payment Method:</span> JazzCash</p>
            <p><span className="font-medium">Transaction ID:</span> TXN{Date.now()}</p>
            <p><span className="font-medium">Amount Paid:</span> <span className="font-semibold text-black">Rs. 4,899</span></p>
            <p><span className="font-medium">Status:</span> <span className="text-green-600 font-semibold">Paid</span></p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h3>
          <div className="space-y-2 text-blue-800">
            <p>• You will receive an email confirmation shortly</p>
            <p>• Your order will be processed within 1-2 business days</p>
            <p>• You'll receive tracking information once your order ships</p>
            <p>• Expected delivery: {estimatedDelivery.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
          >
            <FaHome className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <button className="border border-gray-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <FaDownload className="w-4 h-4" />
            <span>Download Receipt</span>
          </button>
          <Link
            href="/track"
            className="bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <FaShoppingBag className="w-4 h-4" />
            <span>Track Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
}