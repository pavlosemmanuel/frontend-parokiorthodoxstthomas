import React from "react";

const CardComponent = ({
  imageUrl,
  name,
  date,
  time,
  location,
  isAdmin,
  onDelete,
  isGallery = false, // default false, kalau true tampil gallery
}) => {
  if (isGallery) {
    // Card untuk gallery: hanya foto tanpa teks
    return (
      <div className="w-[140px] h-[140px] md:w-[250px] md:h-[250px] bg-white rounded-xl shadow-md overflow-hidden relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex justify-center items-center w-full h-full bg-gray-200">
            <span className="text-xs text-gray-500">No Image</span>
          </div>
        )}
        {isAdmin && (
          <button
            onClick={onDelete}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs"
          >
            ✕
          </button>
        )}
      </div>
    );
  }

  // Card untuk event/liturgy: tampil lengkap
  return (
    <div className="w-[140px] h-[230px] md:w-[250px] md:h-[350px] bg-white flex flex-col items-center rounded-xl shadow-[-3px_29px_39px_-9px_rgba(3,_3,_3,_0.25)] relative">
      <div className="w-[120px] h-[160px] md:w-[200px] md:h-[200px] bg-gray-200 mt-4 rounded-xl flex justify-center items-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <span className="text-xs text-gray-500">No Image</span>
        )}
      </div>

      <div className="self-start px-4 py-2 md:px-6 w-full">
        <h2 className="text-[12px] font-semibold md:text-[20px]">{name}</h2>

        <div className="text-[8px] flex flex-col gap-1 pt-2 md:gap-2">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-[10px] h-[10px] md:w-[16px] md:h-[16px]"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p className="text-[8px] md:text-[12px]">{time} WIB</p>
          </div>

          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-[10px] h-[10px] md:w-[16px] md:h-[16px]"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
            <p className="text-[8px] md:text-[12px]">{date}</p>
          </div>

          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-[10px] h-[10px] md:w-[16px] md:h-[16px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p className="text-[8px] md:text-[12px]">{location || "Paroki St Thomas"}</p>
          </div>
        </div>
      </div>

      {isAdmin && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default CardComponent;
