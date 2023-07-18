import React from 'react';
import Footer from './Footer';



const Services = ({  }) => {
    const data = [
        {
            title: "Consultas y exámenes de rutina",
            description: "La clínica puede ofrecer servicios de chequeo y exámenes de salud para mascotas, incluyendo exámenes físicos, análisis de sangre y orina, y otros procedimientos.",
            imageUrl: "https://images.pexels.com/photos/6235011/pexels-photo-6235011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Vacunación y prevención",
            description: "La clínica puede ofrecer una variedad de vacunas para prevenir enfermedades comunes en mascotas, así como tratamientos para pulgas, garrapatas y otros parásitos.",
            imageUrl: "https://images.pexels.com/photos/7155697/pexels-photo-7155697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Cirugía y procedimientos",
            description: "La clínica puede realizar cirugías de rutina como esterilizaciones y castraciones, así como otros procedimientos necesarios para tratar lesiones o enfermedades en mascotas.",
            imageUrl: "https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Odontología",
            description: "La clínica puede ofrecer servicios dentales para mascotas, como limpiezas y extracciones de dientes.",
            imageUrl: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Cuidado de emergencia",
            description: "La clínica puede ofrecer servicios de cuidado de emergencia para mascotas que necesitan atención inmediata debido a lesiones, enfermedades o accidentes.",
            imageUrl: "https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Hospedaje y cuidado diurno",
            description: "La clínica puede ofrecer servicios de hospedaje y cuidado diurno para mascotas cuando los propietarios no puedan cuidar de ellas por un período de tiempo.",
            imageUrl: "https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Terapia y rehabilitación",
            description: "La clínica puede ofrecer terapia física y rehabilitación para mascotas que han sufrido lesiones o enfermedades y necesitan recuperarse.",
            imageUrl: "https://images.pexels.com/photos/6235114/pexels-photo-6235114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Consejería y educación",
            description: "La clínica puede ofrecer consejos y educación sobre el cuidado de mascotas, incluyendo nutrición, ejercicio y comportamiento.",
            imageUrl: "https://images.pexels.com/photos/7470752/pexels-photo-7470752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Servicios de laboratorio",
            description: "La clínica puede ofrecer servicios de laboratorio, como análisis de sangre, análisis de orina y otros tipos de pruebas para diagnosticar enfermedades en mascotas.",
            imageUrl: "https://images.pexels.com/photos/6235239/pexels-photo-6235239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Eutanasia y cuidado al final de la vida",
            description: "Lla clínica puede ofrecer servicios para ayudar a los propietarios a tomar decisiones difíciles en el final de la vida de sus mascotas, incluyendo la eutanasia y otros servicios de cuidado paliativo.",
            imageUrl: "https://images.pexels.com/photos/6235119/pexels-photo-6235119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
  return (
    <div className='services-container'>
        <div className='services-banner'>
            <img src={require("../images/banner.png")}></img>
        </div>
    <div className="grid-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image" style={{backgroundImage: `url(${item.imageUrl})`}}>
            <div className="card-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
    
  );
};

export default Services;