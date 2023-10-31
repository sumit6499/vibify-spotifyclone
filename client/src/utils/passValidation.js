const passRegEx=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/

export default function passValidation(pass){
    return passRegEx.test(pass);
}
