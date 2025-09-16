import React from "react";
import type { Venue } from "../types";

interface VenueCardProps {
  venue: Venue;
  onReserve: (venueName: string) => void;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue, onReserve }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-teal-500 h-32 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-teal-600">{venue.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{venue.subtitle}</p>
        <p className="text-sm text-gray-600">Correo: {venue.email}</p>
        <p className="text-sm text-gray-600">Teléfono: {venue.phone}</p>
        <p className="text-sm text-gray-600">Ubicación: {venue.location}</p>
        <button
          onClick={() => onReserve(venue.title)}
          className="mt-4 text-teal-600 hover:underline"
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default VenueCard;