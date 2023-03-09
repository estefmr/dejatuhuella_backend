import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

/* si no existe entonces aplicar port 4000 */
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
   console.log(`servidor funcionando en puerto ${PORT}`); 
});