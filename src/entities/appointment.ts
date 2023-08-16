export interface AppointmentProps {
    startsAt: Date;
    endsAt: Date;
    customer: string;
}

export class Appointment {
    private props: AppointmentProps;

    get customer () {
        return this.props.customer;
    }
    
    get startsAt (){
        return this.props.startsAt;
    }

    get endsAt (){
        return this.props.endsAt;
    }

    constructor(props: AppointmentProps){

        const {startsAt,endsAt} = props

        if(endsAt <= startsAt){
            throw new Error('Invalid ends date');
        }
        this.props = props
    }
    
}