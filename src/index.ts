import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { usersRoutes } from "./routes/users.routes";

const swaggerDocument = YAML.load(path.join(__dirname, "/swagger.yaml"));

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
