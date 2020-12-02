
export default function FormValidate(forms) {
    let errors = {};

    if (!forms.name.trim()) {
        errors.name = 'Wpisz imię';
    }

    if (!forms.email) {
        errors.email = 'Wpisz adres email';
    } else if (!/\S+@\S+\.\S+/.test(forms.email)) {
        errors.email = 'Nieprawidłowy adres email';
    }
    if (!forms.phone) {
        errors.phone = 'Wpisz numer telefonu';
    } else if (forms.password.length < 9) {
        errors.password = 'Wpisz poprawny numer';
    }
    return errors;
}