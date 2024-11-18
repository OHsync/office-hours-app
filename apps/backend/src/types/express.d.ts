// src/types/express.d.ts
import { ClerkExpressAuthenticatedRequest } from "@clerk/clerk-sdk-node";

import { Request } from 'express';

// Extend Express' Request type
declare global {
  namespace Express {
    interface Request {
      auth: {
        user_id: string;
        // Add any other fields you expect to use from Clerk
        // Example: email: string;
      };
    }
  }
}