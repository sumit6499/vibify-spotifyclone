//validate pass requirements using regex

const passRegEx:RegExp=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/

export default function passValidation(pass:string):boolean{
    return passRegEx.test(pass)
}
