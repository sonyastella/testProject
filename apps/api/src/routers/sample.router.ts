import { Router } from 'express';
import { SampleController } from '../controllers/sample.controller';

const router = Router();
const sampleController = new SampleController();

router.post('/register', sampleController.register);
router.post('/login', sampleController.login);

router.post('/events', sampleController.createEvent);
router.get('/events', sampleController.getEvents);

router.put('/events/:id', sampleController.updateEvent);
router.delete('/events/:id', sampleController.deleteEvent);


// Add more routes as needed

export default router;
