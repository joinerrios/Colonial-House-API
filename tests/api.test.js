
const request = require("supertest");
const app = require("../src/app");

describe("API de Colonial House", () => {
    test("GET / debe confirmar que la API funciona", async () => {
        const respuesta = await request(app).get("/");

        expect(respuesta.status).toBe(200);
        expect(respuesta.body.mensaje).toBe(
            "API de Colonial House funcionando correctamente"
        );
    });

    test("GET /api/dispositivos debe devolver los dispositivos", async () => {
        const respuesta = await request(app).get("/api/dispositivos");

        expect(respuesta.status).toBe(200);
        expect(Array.isArray(respuesta.body)).toBe(true);
        expect(respuesta.body.length).toBeGreaterThan(0);
    });

    test("POST /api/usuarios/registro debe rechazar datos incompletos", async () => {
        const respuesta = await request(app)
            .post("/api/usuarios/registro")
            .send({});

        expect(respuesta.status).toBe(400);
        expect(respuesta.body.mensaje).toBeDefined();
    });

    test("PUT /api/dispositivos/1 debe rechazar una solicitud sin estado", async () => {
        const respuesta = await request(app)
            .put("/api/dispositivos/1")
            .send({});

        expect(respuesta.status).toBe(400);
        expect(respuesta.body.mensaje).toBeDefined();
    });

    test("PUT /api/dispositivos/999 debe indicar que no existe el dispositivo", async () => {
        const respuesta = await request(app)
            .put("/api/dispositivos/999")
            .send({ estado: "Encendido" });

        expect(respuesta.status).toBe(404);
        expect(respuesta.body.mensaje).toBeDefined();
    });
});
