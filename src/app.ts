import cors, { CorsOptions } from 'cors';
import express, { Request, Response } from 'express';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import ApiError from './errors/ApiError';
import httpStatus from 'http-status';

const app = express();

// whitelist of allowed origins for CORS
const whitelist = ['http://localhost:5173', 'https://edu-fusion.netlify.app'];

// CORS options to allow requests only from whitelisted origins
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist?.indexOf(origin as string) !== -1) {
      callback(null, true); // Allow request
    } else {
      callback(
        new ApiError(
          httpStatus?.FORBIDDEN,
          'CORS request strictly prohibited from this origin',
        ),
      ); // Deny request
    }
  },
};

// Middlewares
app.use(express.json()); // for parse JSON bodies in incoming requests
app.use(cors(corsOptions)); // for enable CORS with specified options

// Default route for the root URL
app.get('/', (req: Request, res: Response) => {
  const serverStatus = {
    status: 'running',
    message: 'Edu Fusion API is operational and running smoothly.',
    timestamp: new Date().toISOString(),
    version: 'v1.0.1',
    uptime: process.uptime(),
    author: {
      name: 'Ibrahim Khalil',
      email: 'iibrahiim.dev@gmail.com',
      website: 'https://iibrahim-dev.netlify.app/',
    },
    contact: {
      support: 'iibrahiim.dev@gmail.com',
      website: 'https://edu-fusion.netlify.app/',
    },
  };

  res.json(serverStatus);
});

// Application routes under the '/api/v1' path
app.use('/api/v1', router);

// Error-handling Middlewares
app.use(globalErrorHandler); // Global error handler middleware
app.use(notFound); // Middleware to handle 404 - Not Found errors

export default app;
