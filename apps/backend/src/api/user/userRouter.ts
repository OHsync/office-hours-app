import express, { type Router } from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { validateRequest } from "@/common/utils/httpHandlers";
import { UserController } from "./userController";
import { db } from "@/database/init";
import { UserService } from "./userService";
import { UserRepository } from "@/database/userRepository";
import { CourseSchema } from "@/common/schemas/courseSchema";
import { OfficeHourSchema, PostOfficeHourSchema } from "@/common/schemas/officeHoursSchema";
import { CourseRepository } from "@/database/courseRepository";
import { OfficeHourRepository } from "@/database/officeHoursRepository";
import { UserCourseService } from "./userCourseService";
import { OfficeHourService } from "./officeHourService";
import { FeedbackService } from "./feedbackService";
import { FeedbackRepository } from "@/database/feedbackRepository";
import { PostFeedbackSchema } from "@/common/schemas/feedbackSchema";

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);

const courseRepository = new CourseRepository(db);
const courseService = new UserCourseService(courseRepository);

const officeHourRepository = new OfficeHourRepository(db)
const officeHourService = new OfficeHourService(officeHourRepository);

const feedbackRepository = new FeedbackRepository(db)
const feedbackService = new FeedbackService(feedbackRepository);



const userController = new UserController(userService, courseService, officeHourService, feedbackService);

export const userRouter: Router = express.Router();


userRouter.use(ClerkExpressRequireAuth());
userRouter.get("/", userController.getAllUsers);
userRouter.get("/me", userController.getUser);
userRouter.get("/me/courses", userController.getCoursesByUserId);
userRouter.get("/me/office-hours", userController.getOfficeHoursByUserId);
userRouter.post("/feedback", validateRequest(PostFeedbackSchema), userController.storeFeedback);
