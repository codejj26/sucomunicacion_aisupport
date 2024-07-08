
 export const correos = [
    {
        "nombre": "Carlos Lora",
        "email": "clora@sucomunicacion.com"
    },
    {
        "nombre": "David Plata",
        "email": "dgonzalez@sucomunicacion.com"
    },
    {
        "nombre": "Erika Cuesta",
        "email": "ecuesta@sucomunicacion.com"
    },
    {
        "nombre": "Jose Lora",
        "email": "jlora@sucomunicacion.com"
    },
    {
        "nombre": "Joan Gutierrez",
        "email": "jgutierrez@sucomunicacion.com"
    },
    {
        "nombre": "José Marin",
        "email": "jmarin@sucomunicacion.com"
    },
    {
        "nombre": "Rodirgo Ossa",
        "email": "rossa@Sucomunicacion.com"
    },
    {
        "nombre": "Juan Rua",
        "email": "jrua@sucomunicacion.com"
    },
    {
        "nombre": "Mauricio Jimenez",
        "email": "jjimenez@Sucomunicacion.com"
    },
    {
        "nombre": "Mariano Londoño",
        "email": "mlondono@sucomunicacion.com"
    },
    {
        "nombre": "Nady Cuadrado",
        "email": "ncuadrado@sucomunicacion.com"
    },
    {
        "nombre": "Patricia Jaramillo",
        "email": "pjaramillo@sucomunicacion.com"
    },
    {
        "nombre": "Xiomara Vergara",
        "email": "xvergara@sucomunicacion.com"
    }
]
export function isValidEmail(email: string): boolean {
    return correos.some(correo => correo.email.toLowerCase() === email.toLowerCase());
}
