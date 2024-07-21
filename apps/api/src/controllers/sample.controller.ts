import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = 'your-secret-key';

export class SampleController {
  // User registration
  async register(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });
    res.status(201).json(user);
  }

  // User login
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  }

  // Fetch all events
  async getEvents(req: Request, res: Response) {
    try {
      const events = await prisma.event.findMany();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching events' });
    }
  }

  // Create a new event
  async createEvent(req: Request, res: Response) {
    try {
      const { name, price, date, time, location, description, availableSeats, ticketTypes } = req.body;
      const event = await prisma.event.create({
        data: { name, price, date, time, location, description, availableSeats, ticketTypes },
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Error creating event' });
    }
  }

  // Update an event
  async updateEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, price, date, time, location, description, availableSeats, ticketTypes } = req.body;
      const event = await prisma.event.update({
        where: { id: parseInt(id) },
        data: { name, price, date, time, location, description, availableSeats, ticketTypes },
      });
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Error updating event' });
    }
  }

  // Delete an event
  async deleteEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.event.delete({ where: { id: parseInt(id) } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting event' });
    }
  }
}
