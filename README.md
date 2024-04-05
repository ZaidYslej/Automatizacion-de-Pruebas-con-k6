DEFINICION DE ESCENARIOS DE PRUEBA
Para la PokeAPI, vamos a definir un escenario de prueba que simule una carga realista sobre la API. Estos son:
Escenario 1: Carga Simultanea de Usuarios
Objetivo: Simular una carga simultanea de usuarios accediendo a información de Pokémon específicos.
Detalle: 50 usuarios virtuales realizan solicitudes GET simultaneas a los endpoints de 5 Pokémon diferentes (pikachu, charizard, bulbasaur, squirtle, ditto). Cada VU realiza una solicitud cada segundo durante un periodo de 1 minuto.
Métricas Clave: Tiempos de respuesta, tasa de errores, y solicitudes por segundo.

Escenario 2: Prueba de Resistencia
Objetivo: Evaluar como se comporta la API bajo una carga progresivamente creciente hasta alcanzar un punto crítico.
Detalle: Comenzar con 10 VUs e incrementar en 10 VUs cada 2 minutos hasta alcanzar 100 VUs, manteniendo esa carga durante 5 minutos. Se accederá a un mix de endpoints, incluyendo información de Pokémon, habilidades y tipos.
Métricas Clave: Tiempo hasta el primer error, tiempos de respuesta durante el pico de carga, y comportamiento bajo carga extrema.

Escenario 3: Acceso a Diversos Endpoints.
Objetivo: Probar la capacidad de la API para manejar solicitudes variadas bajo una carga constante.
Detalle: 30 VUs acceden de forma aleatoria a diferentes endpoints (Pokémon, habilidades, tipos, regiones y movimientos) durante un periodo de 5 minutos. Cada VU espera entre 0.5 y 2 segundos antes de realizar la siguiente solicitud, para simular el comportamiento de un usuario real explorando la información.
Métricas Clave: Distribución de tiempos de respuesta por endpoint, tasa de errores, y comportamiento bajo carga diversificada. 
