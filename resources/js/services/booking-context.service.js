import React, { createContext, useContext,useState } from 'react';
import { persist } from 'mst-persist';
import { RootModel } from '../models/root.model';

const defaults = {
    dateTime:null,
    guestCount:null,
	cartLoading:false,
	tableAllocated:[],
	totalFee:0,
    cartTitle:"Please First Select Date, Time & Number Of Guests from above.",
    name:"",
    email:"",
    phone:"",
	mailing:{
		addressLine1:"",
		addressLine2:"",
		city:"",
		state:"",
		country:""
	},

	newAccount:false,
    password:"",
    confirmPassword:"",
	
	differentBilling:false,
	billing:{
		addressLine1:"",
		addressLine2:"",
		city:"",
		state:"",
		country:""
	}
};

const BookingContext = createContext(null);
const BookingContextUpdater = createContext(null);

export const BookingContextProvider = ({ children }) => {
	const [data,SetData] = useState(defaults);
    const SetBookingData = (bookingData)=>{
        SetData(bookingData)
    }
	return <BookingContext.Provider value={data}>
        <BookingContextUpdater.Provider value={SetBookingData}>
            {children}
        </BookingContextUpdater.Provider>
    </BookingContext.Provider>
};

export const useBookingContext = () => {
	const store = useContext(BookingContext);
	if (!store) {
		throw new Error('useBookingContext must be used within a BookingContextProvider.');
	}
	return store;
};
export const useBookingContextUpdater = () => {
	return useContext(BookingContextUpdater);
};
