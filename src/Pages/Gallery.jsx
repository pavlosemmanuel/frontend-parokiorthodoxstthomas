import React, { useState, useEffect } from "react";
import NavbarComponents from "../components/Navbar";
import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const GalleryPages = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const getGallery = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Gagal ambil gallery", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role === "admin") setIsAdmin(true);
      } catch (err) {
        console.error("Token tidak valid:", err);
        setIsAdmin(false);
      }
    }
    getGallery();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Harap upload gambar");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Upload berhasil");
      setTitle("");
      setImage(null);
      setShowForm(false);
      getGallery();
    } catch (error) {
      console.log(error);
      alert("Upload gagal");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus foto?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Foto berhasil dihapus");
      getGallery();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus foto");
    }
  };

  return (
    <>
      {/* Navbar fixed */}
      <div className="w-full fixed bg-white z-[21]">
        <NavbarComponents />
      </div>

      <div className="px-6 pt-[100px] font-poppins md:pt-[140px] flex flex-col gap-4">
        {/* Tombol upload hanya untuk admin */}
        {isAdmin && (
          <div className="flex justify-center items-center">
            <button
              className="px-6 py-4 bg-red-500 text-white rounded-full font-semibold"
              onClick={() => setShowForm(true)}
            >
              Upload Foto Gallery
            </button>
          </div>
        )}

        {/* Form popup upload */}
        {isAdmin && showForm && (
          <div className="fixed inset-0 z-[30] bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-[300px] bg-gray-300 flex flex-col gap-4 justify-center items-center rounded-xl p-4 relative md:w-[400px]">
              <button
                className="absolute top-2 right-2 text-gray-700 text-xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-lg font-bold">Upload Foto Gallery Baru</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-4">
                <InputComponent
                  textLabel={"Judul Foto (opsional)"}
                  type={"text"}
                  inputValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <InputComponent
                  textLabel={"Pilih Gambar"}
                  type={"file"}
                  accept={"image/*"}
                  onChange={(e) => setImage(e.target.files[0])}
                />

                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold"
                >
                  Upload Foto
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="md:text-[24px]">Gallery Paroki</p>
          <h2 className="font-bold text-2xl md:text-3xl">
            <span className="text-[#BFA142]">Gereja Orthodox Russia</span> St Thomas Jakarta
          </h2>
        </div>

        {/* Grid gallery */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          {galleryItems.map((item) => (
            <CardComponent
              key={item._id}
              imageUrl={item.imageUrl}
              isAdmin={isAdmin}
              onDelete={() => handleDelete(item._id)}
              isGallery={true} // Penting supaya tampil foto saja
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPages;
