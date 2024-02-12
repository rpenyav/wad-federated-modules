@echo off
echo Instalando dependencias para el proyecto host...
cd host
npm install
cd..

echo Instalando dependencias para el proyecto clients...
cd angular-app\clients
npm install
cd..\..

echo Instalando dependencias para el proyecto users...
cd angular-app\users
npm install
cd..\..

echo Regresando al directorio host...
cd host

echo Instalaciones completadas.
pause
