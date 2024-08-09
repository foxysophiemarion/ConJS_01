'use strict';
// Введение в DOM

/*Основная область применения — использование JavaScript в браузерной среде.
Современные браузеры — это комплексные программные продукты,
по сложности и функциональности сопоставимые с операционными системами.
И действительно, если посмотрим на список существующих API браузера, найдём практически всё,
что «умеют» приложения на наших с вами компьютерах и даже больше.
API браузера встроены в веб-браузер и используют данные браузера и компьютерной среды
для осуществления более сложных действий с этими данными. Они не часть языка,
API браузера строятся на основе встроенных функций JavaScript для увеличения
возможностей разработчиков при написании кода. Начнём с самого базового API,
отвечающее за программное (объектное) представление вебстраницы (HTML-документа),
а именно: DOM, или Document Object Model (объектная модель документа).*/


/*Мы видим, что каждый HTML-элемент и текст в документе имеют собственную запись в дереве — каждый из них называется узлом (node).
Для описания узла и его положения в дереве используются термины:
● Element node — элемент, как он существует в DOM.
● Root node — верхний узел в дереве, который в случае HTML всегда представляет собой HTML-узел.
Другие типы разметки, такие как SVG и пользовательский XML, имеют разные корневые элементы.
● Child node (узел-ребёнок) — узел, находящийся прямо внутри другого узла.
● Descendant node (узел-потомок) — узел внутри дочернего элемента.
● Ancestor node (узел-прародитель) — один из родительских узлов родителя текущего узла. Любой узел, для которого текущий узел представляется потомком, будет его прародителем.
● Parent node (узел-родитель) — узел, в который входит текущий узел.
Например, BODY — родительский узел SECTION в приведённом выше примере.
● Sibling nodes (родственный узел) — узлы, лежащие на одном уровне в дереве DOM.
Например, IMG и P — братья и сёстры в приведённом выше примере.
● Text node — узел, содержащий текстовую строку.
*/


/*
● Document.getElementById() выбирает элемент с заданным значением атрибута id — передаётся функции как параметр.
● Document.getElementsByTagName() возвращает коллекцию HTMLCollection,
содержащую все элементы на странице этого типа — передаётся функции как параметр. Например, <p>, <a> и т. д.
● Document.getElementsByClassName() возвращает коллекцию HTMLCollection дочерних элементов,
соответствующих всем указанным именам классов — передаётся функции как параметр. Например, 'class-one class-two' и т. д.
*/

// Создание и добавление новых узлов в документе
/*
const secElement = document.querySelector('ul');
const paragElement = document.createElement('li');
paragElement.textContent = 'Привет!';
secElement.appendChild(paragElement);
console.log(paragElement);
*/
/*
const titleEl = document.querySelector('.title');
titleEl.textContent = 'JavaScript';
*/

// Удаление узлов и элементов из документа

/*const heading2 = document.querySelector('#heading');
heading2.remove();*/

// Замена узлов
/*const heading2 = document.querySelector('#heading');
heading2.replaceWith(document.createElement('h2'));*/
/*
const buttonEl = document.querySelector('.button');
const contentEl = document.querySelector('.content');
const imageEl = document.querySelector('.img');
imageEl.onclick = function () {
	imageEl.src = 'https:photo1.jpg';
}

const textEl = document.createElement('p');
textEl.textContent = 'Любой текст и его много';

buttonEl.onclick = function () {
	buttonEl.textContent = 'Отправлено';
	contentEl.appendChild(textEl);
};*/