"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import cors from "cors"
const dotenv_1 = __importDefault(require("dotenv"));
// import authRoutes from "./routes/authRoutes"
dotenv_1.default.config();
const app = (0, express_1.default)();
// app.use(cors())
app.use(express_1.default.json());
// app.use("/api/auth", authRoutes)
const PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.log(err));
