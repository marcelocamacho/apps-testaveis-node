import {expect, test} from 'vitest'
import { Appointment } from './appointment'


test('Create an appointment',()=>{
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1)

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt
    })

    expect(appointment). toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('John Doe')
})

test('Cannot create an appointment with end date before start date',()=>{

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() - 1)

    expect(()=>{
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()
})

test('Não deveria ser possível criar um agendamento para uma data anterior ao momento presente',()=>{

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() + 3)

    expect(()=>{
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })
    }).toThrow()

})