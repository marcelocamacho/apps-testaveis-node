import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../repositories/appointments-repository";

interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {


    constructor(
        private appointmentRepository: AppointmentsRepository
    ){

    }

    async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        
        const {customer, startsAt,endsAt} = request
        
        const overlappingAppointment = await this.appointmentRepository.findOverlapping(
            startsAt,
            endsAt
        )

        if(overlappingAppointment){
            throw new Error("Horário ou data indisponível.");
            
        }

        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        })

        await this.appointmentRepository.create(appointment);

        return appointment;
    }
}