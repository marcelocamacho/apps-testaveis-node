import { describe,it,expect } from "vitest";
import { Appointment } from "../entities/appointment";
import { getFutureDate} from '../utils/get-future-date';
import { CreateAppointment } from "./create-appointment";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment";


describe('Create Appointment', ()=>{
    it('Deveria ser possível criar um agendamento',() => {
        

        const appointmentRepository = new InMemoryAppointmentRepository()
        const createAppointment = new CreateAppointment(appointmentRepository);
        
        const startsAt = new Date();
        const endsAt = new Date();

        startsAt.setDate(startsAt.getDate()+1)
        endsAt.setDate(endsAt.getDate()+3)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    });

    
})