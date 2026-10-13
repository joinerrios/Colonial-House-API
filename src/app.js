
const express = require("express");

const usuarioRoutes = require("./routes/usuarioRoutes");
const dispositivoRoutes = require("./routes/dispositivoRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Colonial House funcionando correctamente"
    });
});

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/dispositivos", dispositivoRoutes);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
}

module.exports = app;
