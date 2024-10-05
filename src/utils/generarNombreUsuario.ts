function generarNombreUsuarioIniciales(texto: string): string {
    const nombres = texto.split(' ');
    const iniciales = nombres.map(nombre => nombre.charAt(0)).join(''); // Obtener iniciales
    const aleatorio: number = Math.floor(Math.random() * 100); // Generar un número aleatorio entre 0 y 99
    const nombreUsuario: string = `${iniciales.toLowerCase()}_${aleatorio}`;
    
    return nombreUsuario.substring(0, 15); // Limitar el tamaño del nombre de usuario a 15 caracteres
}

function generarNombreUsuarioCorto(texto: string): string {
    // Eliminar espacios y convertir a minúsculas
    const textoLimpio = texto.replace(/\s+/g, '').toLowerCase();
    const aleatorio: number = Math.floor(Math.random() * 100); // Generar un número aleatorio entre 0 y 99
    const nombreUsuario: string = `${textoLimpio}_${aleatorio}`;
    
    return nombreUsuario.substring(0, 15); // Limitar el tamaño del nombre de usuario a 15 caracteres
}


function generarNombreUsuarioSuperCorto(texto: string): string {
    const aleatorio: number = Math.floor(Math.random() * 100); // Generar un número aleatorio entre 0 y 99
    const nombreUsuario: string = `${texto}_${aleatorio}`;
    return nombreUsuario.substring(0, 15); // Limitar el tamaño del nombre de usuario a 15 caracteres
}


function generarNombreUsuario(texto: string): string {
    const fecha = new Date();
    const timestamp: number = fecha.getTime(); // Obtener un valor único basado en la fecha
    const aleatorio: number = Math.floor(Math.random() * 1000); // Generar un número aleatorio
    const nombreUsuario: string = `${texto}_${timestamp}_${aleatorio}`;
    return nombreUsuario;
}

export {
    generarNombreUsuarioIniciales,
    generarNombreUsuarioCorto,
    generarNombreUsuarioSuperCorto,
    generarNombreUsuario,
}