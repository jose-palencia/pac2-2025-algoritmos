let elemento;

elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.domain;

elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;

elemento = document.images;
elemento = document.scripts;

elemento = document.getElementsByClassName('header');
elemento = document.getElementsByClassName('hero');
elemento = document.getElementsByClassName('contenedor');
elemento = document.getElementsByClassName('no-existe');

elemento = document.getElementById('formulario');
elemento = document.getElementById('no-esta');

elemento = document.querySelector('.card');
elemento = document.querySelector('.premium .info');
elemento = document.querySelector('section.hospedaje .card:nth-child(2)');

elemento = document.querySelector('#formulario');

elemento = document.querySelector('nav');

elemento = document.querySelectorAll('.card');


console.log(elemento);