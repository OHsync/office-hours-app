import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";

import { healthCheckRouter } from "@/api/healthCheck/healthCheckRouter";
import { userRouter } from "@/api/user/userRouter";
import { webScraperRouter } from "./api/webScraper/webScraperRouter";
import { canvasRouter } from "./api/canvas/canvasRouter";
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import { env } from "@/common/utils/envConfig";
import { searchRouter } from "./api/search/searchRouter";
import { aiRouter } from "./api/ai/aiRouter";

const logger = pino({ name: "server start" });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

const apiRouter = express.Router();

// Routes
apiRouter.use("/health", healthCheckRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/web-scraper", webScraperRouter);
apiRouter.use("/canvas", canvasRouter);
apiRouter.use("/search", searchRouter);
apiRouter.use("/ai", aiRouter);

app.use("/api", apiRouter);
// Error handlers
app.use(errorHandler());

export { app, logger };
