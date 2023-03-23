import nodemailer from "nodemailer";
import cron from "cron";
import { RequestHandler } from "express";
import UserSchema from "../models/User.model";
import { config } from "../services/nodemailer";

export const createUser: RequestHandler = async (_req, res) => {
  try {
    const allUsers = await UserSchema.find();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

export const sendMail = async (email: string) => {
  const transporter = nodemailer.createTransport(config);
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Test",
    text: "Test to nodemailer",
    html: "<b>Este es un recordatorio de que el evento es mañana a las 15hs</b>",
  });
};

export const job = new cron.CronJob({
  cronTime: "00 15 * * *",
  onTick: () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    const currentDate = new Date();
    if (currentDate.getTime() >= futureDate.getTime()) {
      sendMail("belen-clemente@hotmail.com");
      job.stop;
    }
  },
  start: true,
});

export const sendCronMail: RequestHandler = async (_req, res) => {
  try {
    job.start();
    res.json("Email sent");
  } catch (error) {
    console.log(error);
  }
};
