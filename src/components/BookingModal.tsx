import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}

export default function BookingModal({ isOpen, onClose, price }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    instructions: '',
    agreeToTerms: false
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            instructions: '',
            agreeToTerms: false
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const fieldName = name === 'name' ? 'fullName' : name;
    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Book Your Cleaning</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <input type="hidden" name="access_key" value="a5015144-12e1-4cd1-ab77-87cd9ea1d0bb" />
              <input type="hidden" name="subject" value="New CleanHub Cleaning Booking - Eugene, OR" />
              <input type="hidden" name="from_name" value="CleanHub Booking" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="hidden" name="price" value={`$${price}`} />
              <input type="hidden" name="service" value="Deep Clean" />
              <input type="hidden" name="home_size" value="3 bed, 2 bath" />
              <input type="hidden" name="frequency" value="Bi-Weekly (Save 10%)" />

              <div className="bg-sky-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold text-gray-900">Deep Clean</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Home:</span>
                  <span className="font-semibold text-gray-900">3 bed, 2 bath</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-semibold text-gray-900">Bi-Weekly (Save 10%)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-sky-200">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-2xl text-sky-400">${price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="5125550123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-4pm)</option>
                      <option value="evening">Evening (4pm-7pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none"
                    placeholder="Any specific requirements or areas of focus?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-sky-400 focus:ring-sky-400 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the Terms of Service and understand that payment will be processed after the cleaning is complete.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF8C00] hover:bg-[#FF7A00] text-white px-6 py-4 rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg"
              >
                Confirm Booking
              </button>
            </form>
          </>
        ) : (
          <div className="p-12 text-center space-y-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
            <p className="text-lg text-gray-600">
              We will call you shortly to confirm your appointment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
