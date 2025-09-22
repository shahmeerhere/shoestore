"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLock, FaCreditCard, FaMobile, FaCheckCircle } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext';


export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, itemCount, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan'
  });
  const [paymentDetails, setPaymentDetails] = useState({
    jazzcashNumber: '',
    easypaisaNumber: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Validate shipping info
      const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city'];
      const isValid = required.every(field => formData[field].trim() !== '');
      if (isValid) {
        setCurrentStep(2);
      } else {
        alert('Please fill in all required fields');
      }
    } else if (currentStep === 2) {
      // Validate payment method
      if (selectedPayment) {
        setCurrentStep(3);
      } else {
        alert('Please select a payment method');
      }
    }
  };

  const handlePlaceOrder = () => {
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      router.push('/order-confirmation');
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(.{2})/, '$1/').substring(0, 5);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">No Items to Checkout</h1>
          <p className="text-gray-500 mb-8">Your cart is empty.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              { step: 1, title: 'Shipping', icon: '📍' },
              { step: 2, title: 'Payment', icon: '💳' },
              { step: 3, title: 'Review', icon: '✅' }
            ].map(({ step, title, icon }) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > step ? '✓' : step}
                </div>
                <span className={`ml-2 font-medium ${currentStep >= step ? 'text-black' : 'text-gray-500'}`}>
                  {title}
                </span>
                {step < 3 && <div className="w-8 h-0.5 bg-gray-300 ml-4"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="+92 300 1234567"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Payment Method</h2>
                <div className="space-y-4">
                  {/* JazzCash */}
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'jazzcash' ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  }`} onClick={() => setSelectedPayment('jazzcash')}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                        {selectedPayment === 'jazzcash' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMobile className="w-6 h-6 text-green-600" />
                        <span className="font-semibold text-lg">JazzCash</span>
                      </div>
                    </div>
                    {selectedPayment === 'jazzcash' && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">JazzCash Number</label>
                        <input
                          type="tel"
                          name="jazzcashNumber"
                          value={paymentDetails.jazzcashNumber}
                          onChange={handlePaymentInputChange}
                          placeholder="0300 1234567"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <p className="text-sm text-gray-600 mt-2">Enter your JazzCash mobile number</p>
                      </div>
                    )}
                  </div>

                  {/* EasyPaisa */}
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'easypaisa' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`} onClick={() => setSelectedPayment('easypaisa')}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                        {selectedPayment === 'easypaisa' && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMobile className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold text-lg">EasyPaisa</span>
                      </div>
                    </div>
                    {selectedPayment === 'easypaisa' && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">EasyPaisa Number</label>
                        <input
                          type="tel"
                          name="easypaisaNumber"
                          value={paymentDetails.easypaisaNumber}
                          onChange={handlePaymentInputChange}
                          placeholder="0300 1234567"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <p className="text-sm text-gray-600 mt-2">Enter your EasyPaisa mobile number</p>
                      </div>
                    )}
                  </div>

                  {/* Credit Card */}
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPayment === 'card' ? 'border-gray-800 bg-gray-50' : 'border-gray-300'
                  }`} onClick={() => setSelectedPayment('card')}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                        {selectedPayment === 'card' && <div className="w-3 h-3 rounded-full bg-gray-800"></div>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCreditCard className="w-6 h-6 text-gray-600" />
                        <span className="font-semibold text-lg">Credit/Debit Card</span>
                      </div>
                    </div>
                    {selectedPayment === 'card' && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentDetails.cardNumber}
                            onChange={(e) => setPaymentDetails(prev => ({
                              ...prev,
                              cardNumber: formatCardNumber(e.target.value)
                            }))}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={paymentDetails.expiryDate}
                              onChange={(e) => setPaymentDetails(prev => ({
                                ...prev,
                                expiryDate: formatExpiryDate(e.target.value)
                              }))}
                              placeholder="MM/YY"
                              maxLength={5}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                            <input
                              type="text"
                              name="cvv"
                              value={paymentDetails.cvv}
                              onChange={handlePaymentInputChange}
                              placeholder="123"
                              maxLength={4}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            name="cardName"
                            value={paymentDetails.cardName}
                            onChange={handlePaymentInputChange}
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Review Your Order</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.cartId} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img src={item.image || "https://placehold.co/300x200/000000/ffffff?text=No+Image"} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.brand} • {item.color} • Size {item.size}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Rs. {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handlePlaceOrder}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <FaLock className="w-4 h-4" />
                    <span>Place Order</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">Rs. {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Rs. 0</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                <FaLock className="w-4 h-4" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}