Как запустить:
1) ```git clone https://github.com/marknik139/spell_checker.git```
2) Должны быть установлены python, pip.

   Из папки t5 выполнить:
   ``` make install```
   
   ```make run```
   
   Возможно, при таком запуске модель автоматически не загрузится, тогда вручную попробовать ```python app.py```

   а потом опять ```make run```
4) В папке t5ui создать файл .env и поместить туда ```REACT_APP_API_BASE_URL=http://127.0.0.1:8000```
5) Должны быть установлены node.js и npm.
   Из папки t5ui выполнить:
     ```npm i```
     ```npm start```
