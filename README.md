# ArcasInventario

Proyecto relacionado con la organización de inventario sobre el instituto **IES Ramón Arcas Meca**. Usaremos el control de versiones para trabajar en equipo y documentar todo el proceso añadiendo el trabajo al *staging area*

<!-- Revisado por el departamento TIC  -->

## Requisitos y despliegue local

* Node.js
    * v20 o superior
* Git 
    * v2 o superior

1. En el directorio deseado, realice `git clone 'enlace'`
2. Una vez clonado, ejecute el comando `npm start`
3. Para comprobar el resultado, mediante `ipconfig` o `ip addr`, inserte tu dirección IP y el puerto utilizado en la barra de direcciones del navegador
```bash
ip addr
npm test
npm start
```

## Arquitectura de entornos


|Entorno|Rama asociada| Propósito|
|---|---|---|
|Local|Funcionalidad| Implementar nuevas funcionalidades sin afectar a la rama principal|
|Producción| main/master| Desplegar la aplicación en su versión final|

> Ningún cambio debe subirse a producción sin pasar antes los tests automáticos

## Enlaces de referencia

[IES Ramón Arcas Meca - Lorca/Murcia](https://www.iesramonarcasmeca.es)


[Documentación oficial de Git][Git]





[Git]: https://git-scm.com/docs/git/es