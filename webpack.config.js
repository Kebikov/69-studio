'use strict';	

let fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Функция для чтения содержимого файла.
 * @param {string} filePath Путь к файлу.
 * @example readFromFile('./src/page/projects.html')
 */
function readFromFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}


/**
 * Переменная для установки минификации конечного html 
 */
const isMinify = true;
 

module.exports = {
    mode: 'development', // Режим разработки(в финале сборки production/development).

    entry: './src/ts/script.ts', // Файл с зависимостями.

    output: {
        filename: 'bundle.js', // Имя финального файла.
        path: __dirname + '/dist' // Путь сохранения финального файла.
    },

    watch: true, // Указание надо ли следить за изминениями в модулях.

    devtool: "source-map", // Режим сохранения исходных файлов.

    module: {
        rules: [
            {
                test: /\.ts$/, // Применить ts-loader к файлам с расширением .ts
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] // Разрешить импорт файлов с расширениями .ts и .js
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [  
                { from: './src/font', to: './font' },
                { from: './src/img/', to: './img' },
                { from: './src/.htaccess', to: './' },
            ],
        }),
        //= Главная 
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону. 
            filename: 'index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/index.html'),
            }
        }),
        //= Проекты 
        new HtmlWebpackPlugin({
            title: 'Projects',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/projects/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/projects.html'), 
            }
        }),
        //= Контакты 
        new HtmlWebpackPlugin({
            title: 'Contacts',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/contacts/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/contacts.html'), 
            }
        }),
        //= О нас 
        new HtmlWebpackPlugin({
            title: 'About us',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/about-us/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/about-us.html'), 
            }
        }),
        //= 404 
        new HtmlWebpackPlugin({
            title: '404',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/404/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/404.html'),  
            }
        }),
        //= Project-1 
        new HtmlWebpackPlugin({
            title: 'Project №1',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-1/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-1.html'),  
            }
        }),
        //= Project-2 
        new HtmlWebpackPlugin({
            title: 'Project №2',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-2/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-2.html'),  
            }
        }),
        //= Project-3 
        new HtmlWebpackPlugin({
            title: 'Project №3',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-3/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-3.html'),  
            }
        }),
        //= Project-4 
        new HtmlWebpackPlugin({
            title: 'Project №4',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-4/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-4.html'),  
            }
        }),
        //= Project-5 
        new HtmlWebpackPlugin({
            title: 'Project №5',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-5/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-5.html'),  
            }
        }),
        //= Project-6 
        new HtmlWebpackPlugin({
            title: 'Project №6',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-6/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-6.html'),  
            }
        }),
        //= Project-7 
        new HtmlWebpackPlugin({
            title: 'Project №7',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/project-7/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/project-7.html'),  
            }
        }),
        //= Wnetrza 
        new HtmlWebpackPlugin({
            title: 'Wnetrza',
            template: './src/template/index.html', // Путь к вашему HTML-шаблону.
            filename: '/wnetrza/index.html', // Имя выходного HTML-файла.
            inject: false, // Отключение автоматической вставки скриптов
            minify: isMinify, // Минифицирование файла.
            templateParameters: {
                foo: readFromFile('./src/page/wnetrza.html'),  
            }
        }),
    ],
};
