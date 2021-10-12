<template>
<div>
      <header class="header-section">
        <div class="header-container">

            <div class="site-title">
                <h1>UNIVERSIDAD DE NARNIA</h1>
            </div>
            
            <!-- Inicio menú navegación -->
            <nav class="site-nav">
                <a href="#">Registrar Alumnos</a>
              
            </nav>
            <!-- Fin menú navegación -->

            
            
            <div class="logo-container">
                <img class="logo-container__site-logo" src="../assets/regis-tic.png" alt="Logo regis-tic">
            </div>
        </div>
            
        <div class="banner">
            <img src="../assets/universidad.jpg" alt="A banner image">
        </div>
    </header>
<!-- fin encabezado del sitio -->


    <!-- inicio contenido principal -->
    <div>


        <h2>Oferta Academica</h2>
        <!-- inicio sección de servicios -->
        <section id="services" class="services-section">
            <article class="services-info">
                <img class="services-info__imagen" src="../assets/Finanzas.jpg" alt="">
                <h2 class="services-info__title">Ciencias dministrativas</h2>
                <p class="services-info__text">Las ciencias administrativas tienen por objeto el estudio del hecho administrativo, se aplica a examinar qué es la Administración, qué debe ser y qué será. ... La adecuación a los fines, la ciencia administrativa intenta igualmente extraer los preceptos para un buen funcionamiento de la Administración
                </p>
            </article>
            <article class="services-info">
                <img class="services-info__imagen" src="../assets/Programacion.jpg" alt="">
                <h2 class="services-info__title">Ciencias de la computacion </h2>
                <p class="services-info__text">Las ciencias de la computación o ciencias de la informática son las ciencias formales que abarcan las bases teóricas de la información y la computación, así como su aplicación en sistemas computacionales. El cuerpo de conocimiento de las ciencias de la computación es frecuentemente descrito como el estudio sistemático de los procesos algorítmicos que describen y transforman información: su teoría, análisis, diseño, eficiencia, implementación, algoritmos sistematizados y aplicación
                </p>
            </article>
            <article class="services-info">
                <img class="services-info__imagen" src="../assets/Educacion.jpg" alt="">
                <h2 class="services-info__title">Educacion</h2>
                <p class="services-info__text">Es el proceso de facilitar el aprendizaje o la adquisición de conocimientos, así como habilidades, valores, creencias y hábitos. El proceso educativo se da a través de la investigación, el debate, la narración de cuentos, la discusión, la enseñanza, el ejemplo y la formación en general.
                </p>
            </article>
        </section>
        <!-- fin sección de servicios -->




        <!-- fin sección de equipo -->

    </div>
    </div>
    <!-- fin contenido principal -->

    <!-- Inicio pie del sitio -->
    

</template>

<style>
* {
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            max-width: 1400px;
            min-width: 375px;
            margin-right: auto;
            margin-left: 4px;
            margin-top: 0;
            margin-bottom: 0;
            color: #222222;
        }

        .header-section {
            margin-bottom: 100px;
        }

        .header-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;

        }

        .site-title {
            width: 30%;
        }

        .site-nav {
            width: 40%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .site-nav>a {
            color: inherit;
            text-decoration: none;
        }

        .site-nav>a:hover {
            text-decoration: underline;
            font-weight: bold;
        }

        .logo-container {
            width: 30%;
        }

        .logo-container__site-logo {
            height: 80px;
        }

        .banner {
            width: 100%;
        }

        .banner>img {
            width: 100%;
            height: 400px;
            max-width: 1400px;
            object-fit: cover;
        }

        .services-section,
        .seccion-noticias,
        .seccion-equipo {
            display: flex;
            margin-bottom: 100px;
        }

        .seccion-noticias,
        .header-container{
            background-color: #f7f7f7

        }

        .seccion-noticias {
            flex-wrap: wrap;
        }

        .services-info {
            padding: 20px;
            text-align: center;
        }

        .news-info {
            width: 50%;
            padding: 20px;
        }

        .news-header {
            display: flex;
            justify-content: space-around;
        }

        .news-info__title {
            align-self: center;
        }

        .seccion-pie {
            background-color: #25294f;
            height: 200px;
            display: flex;
            color: white;
            justify-content: space-evenly;
        }

        .services-info__imagen {
            border-radius: 50%;
            margin-right: auto;
            margin-left: auto;
        }

        .team-info{
            width: 25%;
            padding: 15px;
        }

        .team-info__imagen{
            display: block;
            margin-right: auto;
            margin-left: auto;
        }
</style>
<script>
// import UsersTable from '@/components/UsersTable';

export default {
   
}
</script>