import React, { useState, useEffect } from "react";
import NavbarComponents from "../components/Navbar";
import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LiturgyPages = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const getSchedules = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/liturgy");
      setSchedules(res.data);
    } catch (error) {
      console.error("Gagal ambil jadwal", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role === "admin") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Token tidak valid:", err);
        setIsAdmin(false);
      }
    }
    getSchedules();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image || !date || !time) {
      alert("Harap semua diisi");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("date", date);
    formData.append("time", time);

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/liturgy", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Upload berhasil");
      setName("");
      setImage(null);
      setDate("");
      setTime("");
      setShowForm(false);
      getSchedules();
    } catch (error) {
      console.log(error);
      alert("Upload gagal");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus jadwal?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/liturgy/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Jadwal berhasil dihapus");
      getSchedules();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  return (
    <>
      {/* Navbar fixed */}
      <div className="w-full fixed bg-white z-[21]">
        <NavbarComponents />
      </div>

      <div className="px-6 pt-[100px] font-poppins md:pt-[140px] flex flex-col gap-4">
        {/* Tombol hanya untuk admin */}
        {isAdmin && (
          <div className="flex justify-center items-center">
            <button
              className="px-6 py-4 bg-red-500 text-white rounded-full font-semibold"
              onClick={() => setShowForm(true)}
            >
              Buat Jadwal
            </button>
          </div>
        )}

        {/* Popup form */}
        {isAdmin && showForm && (
          <div className="fixed inset-0 z-[30] bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-[300px] h-auto bg-gray-300 flex flex-col gap-4 justify-center items-center rounded-xl p-4 relative">
              <button
                className="absolute top-2 right-2 text-gray-700 text-xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-lg font-bold">Buat Jadwal Baru</h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full px-4"
              >
                <InputComponent
                  textLabel={"Nama Liturgy"}
                  type={"text"}
                  inputValue={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputComponent
                  textLabel={"Gambar Liturgy"}
                  type={"file"}
                  accept={"image/*"}
                  onChange={(e) => setImage(e.target.files[0])}
                />

                <InputComponent
                  textLabel={"Tanggal Liturgy"}
                  type={"date"}
                  inputValue={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <InputComponent
                  textLabel={"Waktu Liturgy"}
                  type={"time"}
                  inputValue={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold"
                >
                  Simpan Jadwal
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="md:text-[24px]">Jadwal Liturgy</p>
          <h2 className="font-bold text-2xl md:text-3xl">
            <span className="text-[#BFA142]">Gereja Orthodox Russia</span> St
            Thomas Jakarta
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          {schedules.map((item) => (
            <CardComponent
              key={item._id}
              imageUrl={item.imageUrl}
              name={item.name}
              date={new Date(item.date).toLocaleDateString("id-ID")}
              time={item.time}
              isAdmin={isAdmin}
              onDelete={() => handleDelete(item._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LiturgyPages;
