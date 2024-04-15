import { FormInput } from "@/components/custom/formcard";

export const HomeBread:Array<string> = ["Home","Dashboard","Stats"]
export const FarmerForm:FormInput[] = [
        { type: 'string', label: 'Name', placeholder: 'Enter farmers name', value: '' },
        { type: 'string', label: 'Address', placeholder: 'Enter farmers address', value: '' },
        { type: 'string', label: 'UPI Id', placeholder: 'Enter farmers upi', value: '' },
        { type: 'date', label: 'Registration date', placeholder: 'Select joining date', value: new Date() }
    ]
