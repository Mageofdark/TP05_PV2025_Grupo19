import { createContext, useContext, useState } from "react";
import { Listado_Alumnos } from "./Listado_alumnos";

const AlumnosContext = createContext();

export function AlumnosProvider({ children }) {
  const [alumnos, setAlumnos] = useState(Listado_Alumnos);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, { ...nuevoAlumno, id: Date.now() }]);
  };

  return (
    <AlumnosContext.Provider value={{ alumnos, setAlumnos, agregarAlumno }}>
      {children}
    </AlumnosContext.Provider>
  );
}

export const useAlumnos = () => useContext(AlumnosContext);
