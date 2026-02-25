import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon, Users, Check, CreditCard, Building, Shield, ChevronRight, X, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

const rooms = [
  {
    id: "king",
    name: "Non-Smoking King",
    image: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=srgb&fm=jpg&w=400",
    price: 99,
    capacity: 2,
    deal: "Best Value"
  },
  {
    id: "queens",
    name: "Non-Smoking 2 Queens",
    image: "https://images.unsplash.com/photo-1763419161907-1e00b2f883c5?crop=entropy&cs=srgb&fm=jpg&w=400",
    price: 119,
    capacity: 4,
    deal: "Family Favorite"
  },
  {
    id: "ada",
    name: "ADA Accessible Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?crop=entropy&cs=srgb&fm=jpg&w=400",
    price: 109,
    capacity: 2,
    deal: null
  }
];

const arrivalTimes = [
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
  "8:00 PM - 9:00 PM",
  "After 9:00 PM"
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get("room");

  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(addDays(new Date(), 1));
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 3));
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCount, setRoomCount] = useState(1);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    arrivalTime: "",
    specialRequests: ""
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    if (preselectedRoom) {
      const room = rooms.find(r => r.id === preselectedRoom);
      if (room) setSelectedRoom(room);
    }
  }, [preselectedRoom]);

  const nights = differenceInDays(checkOut, checkIn);
  const roomCharges = selectedRoom ? selectedRoom.price * nights * roomCount : 0;
  const taxes = Math.round(roomCharges * 0.12);
  const total = roomCharges + taxes;

  const handleGuestInfoChange = (field, value) => {
    setGuestInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentInfoChange = (field, value) => {
    setPaymentInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckAvailability = () => {
    if (nights < 1) {
      toast.error("Please select valid dates");
      return;
    }
    toast.success("Rooms are available for your dates!");
  };

  const handleAddRoom = (room) => {
    setSelectedRoom(room);
    toast.success(`${room.name} added to your booking`);
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedRoom) {
      toast.error("Please select a room to continue");
      return;
    }
    if (step === 2) {
      if (!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.mobile) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    if (step === 3) {
      if (!agreedToPolicy) {
        toast.error("Please agree to the hotel policy to continue");
        return;
      }
    }
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNow = () => {
    if (!agreedToPolicy) {
      toast.error("Please agree to the hotel policy");
      return;
    }
    const id = `DI${Date.now().toString(36).toUpperCase()}`;
    setBookingId(id);
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-secondary py-20" data-testid="booking-confirmation">
        <Helmet>
          <title>Booking Confirmed | Destine Inn & Suites - Destin, FL</title>
          <meta name="description" content="Your reservation at Destine Inn & Suites has been confirmed. Thank you for booking with us!" />
        </Helmet>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Reservation!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Your booking has been successfully submitted.
            </p>

            <div className="bg-secondary rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Confirmation #:</span>
                  <span className="font-semibold text-primary" data-testid="booking-id">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Room:</span>
                  <span className="font-medium">{selectedRoom?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">{format(checkIn, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-medium">{format(checkOut, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guest:</span>
                  <span className="font-medium">{guestInfo.firstName} {guestInfo.lastName}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-primary">${total}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <p className="text-blue-800 text-sm">
                A confirmation email will be sent to <strong>{guestInfo.email}</strong> shortly.
              </p>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Payment will be collected at the hotel during check-in.
            </p>

            <Button
              onClick={() => window.location.href = '/'}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3"
              data-testid="back-to-home-btn"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary" data-testid="booking-page">
      <Helmet>
        <title>Book Your Stay | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Reserve your stay at Destine Inn & Suites near the white sand beaches of Destin, Florida. Easy online booking with best rates guaranteed." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-12" data-testid="booking-hero">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
            Book Your Stay
          </h1>
          <p className="text-center text-white/80">Experience the best of Destin, Florida</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b sticky top-20 z-30" data-testid="booking-steps">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { num: 1, label: "Select Room" },
              { num: 2, label: "Guest Info" },
              { num: 3, label: "Payment" }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`booking-step ${
                      step > s.num ? "completed" : step === s.num ? "active" : "inactive"
                    }`}
                    data-testid={`step-${s.num}`}
                  >
                    {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`hidden sm:block text-sm font-medium ${
                    step >= s.num ? "text-gray-900" : "text-gray-400"
                  }`}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <ChevronRight className="w-5 h-5 text-gray-300 mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form Area */}
            <div className="lg:col-span-2">
              {/* Step 1: Room Selection */}
              {step === 1 && (
                <div data-testid="step-1-content">
                  {/* Date Selection */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h2 className="font-heading text-xl font-semibold mb-6">Select Your Dates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label className="form-label">Check-in Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal h-12"
                              data-testid="checkin-picker"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {format(checkIn, "MMM d, yyyy")}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={(date) => date && setCheckIn(date)}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label className="form-label">Check-out Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal h-12"
                              data-testid="checkout-picker"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {format(checkOut, "MMM d, yyyy")}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={(date) => date && setCheckOut(date)}
                              disabled={(date) => date <= checkIn}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex items-end">
                        <Button
                          onClick={handleCheckAvailability}
                          className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                          data-testid="check-availability-btn"
                        >
                          Check Availability
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="font-heading text-xl font-semibold mb-6">Available Rooms</h2>
                    <div className="space-y-4">
                      {rooms.map((room) => (
                        <div
                          key={room.id}
                          className={`flex flex-col md:flex-row gap-4 p-4 rounded-xl border-2 transition-all ${
                            selectedRoom?.id === room.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-100 hover:border-gray-200"
                          }`}
                          data-testid={`room-option-${room.id}`}
                        >
                          <img
                            src={room.image}
                            alt={room.name}
                            className="w-full md:w-40 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">{room.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                  <Users className="w-4 h-4" />
                                  <span>Up to {room.capacity} guests</span>
                                </div>
                              </div>
                              {room.deal && (
                                <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full pulse-badge">
                                  {room.deal}
                                </span>
                              )}
                            </div>
                            <div className="flex items-end justify-between mt-4">
                              <div>
                                <span className="text-2xl font-bold text-primary">${room.price}</span>
                                <span className="text-gray-500 text-sm">/night</span>
                              </div>
                              {selectedRoom?.id === room.id ? (
                                <Button
                                  variant="outline"
                                  className="border-primary text-primary"
                                  onClick={() => setSelectedRoom(null)}
                                  data-testid={`remove-${room.id}-btn`}
                                >
                                  <X className="w-4 h-4 mr-1" /> Remove
                                </Button>
                              ) : (
                                <Button
                                  className="bg-primary hover:bg-primary/90 text-white"
                                  onClick={() => handleAddRoom(room)}
                                  data-testid={`add-${room.id}-btn`}
                                >
                                  <Plus className="w-4 h-4 mr-1" /> Add Room
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {step === 2 && (
                <div className="bg-white rounded-xl shadow-md p-6" data-testid="step-2-content">
                  <h2 className="font-heading text-xl font-semibold mb-6">Guest Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label className="form-label">Title</Label>
                      <Select
                        value={guestInfo.title}
                        onValueChange={(v) => handleGuestInfoChange("title", v)}
                      >
                        <SelectTrigger className="h-12" data-testid="title-select">
                          <SelectValue placeholder="Select title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr.</SelectItem>
                          <SelectItem value="mrs">Mrs.</SelectItem>
                          <SelectItem value="ms">Ms.</SelectItem>
                          <SelectItem value="dr">Dr.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="form-label">First Name *</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.firstName}
                        onChange={(e) => handleGuestInfoChange("firstName", e.target.value)}
                        placeholder="John"
                        data-testid="first-name-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Last Name *</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.lastName}
                        onChange={(e) => handleGuestInfoChange("lastName", e.target.value)}
                        placeholder="Doe"
                        data-testid="last-name-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Mobile Number *</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.mobile}
                        onChange={(e) => handleGuestInfoChange("mobile", e.target.value)}
                        placeholder="(555) 123-4567"
                        data-testid="mobile-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Email Address *</Label>
                      <Input
                        type="email"
                        className="h-12"
                        value={guestInfo.email}
                        onChange={(e) => handleGuestInfoChange("email", e.target.value)}
                        placeholder="john@example.com"
                        data-testid="email-input"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="form-label">Address</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.address}
                        onChange={(e) => handleGuestInfoChange("address", e.target.value)}
                        placeholder="123 Main Street"
                        data-testid="address-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">City</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.city}
                        onChange={(e) => handleGuestInfoChange("city", e.target.value)}
                        placeholder="City"
                        data-testid="city-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">State</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.state}
                        onChange={(e) => handleGuestInfoChange("state", e.target.value)}
                        placeholder="State"
                        data-testid="state-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Zip Code</Label>
                      <Input
                        className="h-12"
                        value={guestInfo.zip}
                        onChange={(e) => handleGuestInfoChange("zip", e.target.value)}
                        placeholder="12345"
                        data-testid="zip-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Country</Label>
                      <Select
                        value={guestInfo.country}
                        onValueChange={(v) => handleGuestInfoChange("country", v)}
                      >
                        <SelectTrigger className="h-12" data-testid="country-select">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="Mexico">Mexico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="form-label">Estimated Arrival Time</Label>
                      <Select
                        value={guestInfo.arrivalTime}
                        onValueChange={(v) => handleGuestInfoChange("arrivalTime", v)}
                      >
                        <SelectTrigger className="h-12" data-testid="arrival-time-select">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {arrivalTimes.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label className="form-label">Special Requests</Label>
                      <Textarea
                        value={guestInfo.specialRequests}
                        onChange={(e) => handleGuestInfoChange("specialRequests", e.target.value)}
                        placeholder="Any special requests or notes for your stay..."
                        className="min-h-[100px]"
                        data-testid="special-requests-input"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div data-testid="step-3-content">
                  {/* Payment Form */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-heading text-xl font-semibold">Payment Information</h2>
                      <div className="flex gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-900">Your card will NOT be charged</p>
                          <p className="text-sm text-blue-700">Payment is collected at the hotel during check-in.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label className="form-label">Cardholder Name</Label>
                        <Input
                          className="h-12"
                          value={paymentInfo.cardHolder}
                          onChange={(e) => handlePaymentInfoChange("cardHolder", e.target.value)}
                          placeholder="Name on card"
                          data-testid="card-holder-input"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label className="form-label">Card Number</Label>
                        <div className="relative">
                          <Input
                            className="h-12 pl-12"
                            value={paymentInfo.cardNumber}
                            onChange={(e) => handlePaymentInfoChange("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            data-testid="card-number-input"
                          />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <Label className="form-label">Expiry Date</Label>
                        <Input
                          className="h-12"
                          value={paymentInfo.expiry}
                          onChange={(e) => handlePaymentInfoChange("expiry", e.target.value)}
                          placeholder="MM/YY"
                          data-testid="card-expiry-input"
                        />
                      </div>
                      <div>
                        <Label className="form-label">CVV</Label>
                        <Input
                          className="h-12"
                          value={paymentInfo.cvv}
                          onChange={(e) => handlePaymentInfoChange("cvv", e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          data-testid="card-cvv-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Policies */}
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h2 className="font-heading text-xl font-semibold mb-4">Hotel Policies</h2>
                    <div className="space-y-4 text-sm text-gray-600">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Check-in / Check-out</h4>
                        <p>Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Cancellation Policy</h4>
                        <p>Free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur a one-night charge.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Age Requirement</h4>
                        <p>Guests must be 21 years or older to check in.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Pet Policy</h4>
                        <p>Sorry, pets are not allowed at this property.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mt-6 pt-6 border-t">
                      <Checkbox
                        id="policy"
                        checked={agreedToPolicy}
                        onCheckedChange={setAgreedToPolicy}
                        data-testid="policy-checkbox"
                      />
                      <label htmlFor="policy" className="text-sm text-gray-700 cursor-pointer">
                        I have read and agree to the <a href="#" className="text-primary hover:underline">Hotel Policy</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(prev => prev - 1)}
                    className="rounded-full px-6"
                    data-testid="back-btn"
                  >
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 ml-auto"
                    data-testid="continue-btn"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleBookNow}
                    className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 ml-auto"
                    data-testid="book-now-final-btn"
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-40" data-testid="booking-summary">
                <h3 className="font-heading text-lg font-semibold mb-4">Booking Summary</h3>

                {selectedRoom ? (
                  <>
                    <div className="mb-4">
                      <img
                        src={selectedRoom.image}
                        alt={selectedRoom.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-gray-900">{selectedRoom.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>Up to {selectedRoom.capacity} guests</span>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-medium">{format(checkIn, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-medium">{format(checkOut, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nights:</span>
                        <span className="font-medium">{nights}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Rooms:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                            className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-100"
                            data-testid="decrease-rooms"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-medium w-6 text-center">{roomCount}</span>
                          <button
                            onClick={() => setRoomCount(roomCount + 1)}
                            className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-100"
                            data-testid="increase-rooms"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t mt-4 pt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room Charges:</span>
                        <span>${roomCharges}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & Fees:</span>
                        <span>${taxes}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t pt-3 mt-3">
                        <span>Total:</span>
                        <span className="text-primary" data-testid="total-price">${total}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Building className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>Select a room to see your booking summary</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
